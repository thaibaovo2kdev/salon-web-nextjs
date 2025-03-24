import { createGiftCardAction } from '@/app/actions';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  ICreditCardFormData,
  IGiftCard,
  IGiftCardActions,
  IGiftCardFormData,
} from '@/store/giftcard-store';
import { useDebounce } from '@anwstack/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CreditCard from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  cardHolderName: z
    .string()
    .min(1, { message: 'Card holder name cannot be empty.' }),
  cardNumber: z
    .string()
    .length(19, {
      message: 'Card number must be exactly 19 characters including spaces.',
    })
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, {
      message: 'Card number must be in the format 1234 5678 1234 5678.',
    }),
  cvv: z
    .string()
    .length(3, { message: 'CVV must be exactly 3 digits.' })
    .regex(/^\d+$/, { message: 'CVV must contain only digits.' }),
  expirationDate: z
    .string()
    .length(5, { message: 'Expiration date must be in MM/YY format.' })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: 'Expiration date must be in MM/YY format.',
    }),
});

enum CardFocus {
  Name = 'name',
  Number = 'number',
  Expiry = 'expiry',
  Cvc = 'cvc',
}

export default function CreditCardForm({
  creditCard,
  setCreditCardData,
  formData,
  resetData,
  setView,
  selectedGiftCard,
}: {
  creditCard: ICreditCardFormData;
  selectedGiftCard: IGiftCard | null;
  setCreditCardData: IGiftCardActions['setCreditCardData'];
  formData: IGiftCardFormData;
  resetData: IGiftCardActions['resetData'];
  setView: IGiftCardActions['setView'];
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...creditCard,
    },
    mode: 'onChange',
  });

  const [cardFocus, setCardFocus] = useState<CardFocus>(CardFocus.Name);
  const formValuesRef = useRef(form.getValues());
  const debouncedFormValues = useDebounce(formValuesRef.current, 300);

  useEffect(() => {
    formValuesRef.current = form.getValues();
    if (JSON.stringify(debouncedFormValues) !== JSON.stringify(creditCard)) {
      setCreditCardData(debouncedFormValues);
    }
  }, [debouncedFormValues, setCreditCardData, creditCard, form]);

  function handleCardNumberChange(e: any) {
    const inputValue = e.target.value;
    const digits = inputValue.replace(/\D/g, '');
    const formattedValue = digits.replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
    e.target.value = formattedValue;
    form.setValue('cardNumber', formattedValue, { shouldValidate: true });
  }

  function handleExpirationDateChange(e: any) {
    let inputValue = e.target.value;
    const isDeletePress = e.code === 'Backspace' || e.keyCode === 8;
    inputValue = inputValue.replace(/[^0-9/]/g, '');

    if (
      inputValue.length === 2 &&
      !inputValue.includes('/') &&
      !isDeletePress
    ) {
      inputValue = inputValue + '/';
    }
    e.target.value = inputValue;
    form.setValue('expirationDate', inputValue, { shouldValidate: true });
  }

  async function onSubmit(_data: z.infer<typeof formSchema>) {
    try {
      const res = await createGiftCardAction(formData, selectedGiftCard);
      toast.success('Gift card has been sent successfully.');
    } catch (err) {
      toast.error('Failed to send gift card.');
    }
  }

  return (
    <section className='flex-1 bg-muted/40 py-12 md:py-24'>
      <div className='container mx-auto max-w-4xl px-4 md:px-6'>
        <div className='flex items-center mb-6'>
          <Button
            onClick={() => setView('form')}
            variant='ghost'
            size='sm'
            className='mr-4'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back
          </Button>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <div
                  onClick={() => setView('list')}
                  className='hover:text-black cursor-pointer'
                >
                  Gift Cards
                </div>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <div
                  onClick={() => setView('form')}
                  className='hover:text-black cursor-pointer'
                >
                  Send Gift Card
                </div>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <div>Checkout</div>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Card className='rounded-md'>
          <CardHeader>
            <CardTitle>Credit/Debit Card Information</CardTitle>
            <CardDescription>
              Please enter your credit/debit card details below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col justify-between gap-6 md:flex-row'>
              <div>
                <CreditCard
                  number={creditCard.cardNumber}
                  expiry={creditCard.expirationDate}
                  cvc={creditCard.cvv}
                  name={creditCard.cardHolderName}
                  focused={cardFocus}
                />
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='grid gap-6 flex-1'
                >
                  <FormField
                    control={form.control}
                    name='cardHolderName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='cardHolderName'>
                          Card Holder Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            onFocus={() => setCardFocus(CardFocus.Name)}
                            id='cardHolderName'
                            placeholder="Enter card holder's name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='cardNumber'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='cardNumber'>
                          Card Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            maxLength={19}
                            onFocus={() => setCardFocus(CardFocus.Number)}
                            id='cardNumber'
                            placeholder='Enter 16-digit card number'
                            onKeyUp={handleCardNumberChange}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='grid grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name='expirationDate'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor='expirationDate'>
                            Expiration Date *
                          </FormLabel>
                          <FormControl>
                            <Input
                              onFocus={() => setCardFocus(CardFocus.Expiry)}
                              maxLength={5}
                              id='expirationDate'
                              placeholder='MM/YY'
                              onKeyDown={handleExpirationDateChange}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='cvv'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor='cvv'>CVV *</FormLabel>
                          <FormControl>
                            <Input
                              maxLength={3}
                              onFocus={() => setCardFocus(CardFocus.Cvc)}
                              id='cvv'
                              placeholder='Enter CVV'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='flex md:justify-end gap-4'>
                    <Button
                      variant='outline'
                      type='button'
                      onClick={() => resetData()}
                      className='w-full md:w-full'
                    >
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      className='w-full md:w-full'
                      disabled={
                        form.formState.isSubmitting || !form.formState.isValid
                      }
                    >
                      {form.formState.isSubmitting && (
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      )}
                      Checkout
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
