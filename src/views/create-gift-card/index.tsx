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
import { Input, InputMoney } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import {
  IGiftCard,
  IGiftCardActions,
  IGiftCardFormData,
} from '@/store/giftcard-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  senderType: z.string(),
  senderEmail: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .optional(),
  senderName: z.string().min(1, { message: 'Sender name cannot be empty.' }),
  senderPhone: z.string().optional(),

  recipientName: z
    .string()
    .min(1, { message: 'Recipient name cannot be empty.' }),
  recipientEmail: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .optional(),
  recipientPhone: z.string().optional(),
  recipientType: z.string(),

  description: z.string().optional(),
  money: z
    .string()
    .min(1, { message: 'Amount is required.' })
    .refine(
      (value) =>
        !isNaN(Number(value.replace('$', ''))) &&
        Number(value.replace('$', '')) > 0,
      {
        message: 'Amount must be a positive number.',
      }
    )
    .transform((value) => value.replace('$', '')),
});

export default function CreateGiftCard({
  giftCard,
  setSelectedGiftCard,
  formData,
  setFormData,
  resetData,
  setView,
}: {
  giftCard: IGiftCard | null;
  setSelectedGiftCard: IGiftCardActions['setSelectedGiftCard'];
  formData: IGiftCardFormData;
  setFormData: IGiftCardActions['setFormData'];
  resetData: IGiftCardActions['resetData'];
  setView: IGiftCardActions['setView'];
}) {
  const [amount, setAmount] = React.useState('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formData,
    },
    mode: 'onChange',
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setFormData(data);
  }

  const recipientType = form.watch('recipientType');
  const senderType = form.watch('senderType');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    // Nếu có giá trị trong InputMoney, cập nhật giá trị của RadioGroup
    if (value !== '') {
      form.setValue('money', value);
    }
  };

  const handleRadioChange = (value: string) => {
    form.setValue('money', value);
    setAmount('');
  };

  return (
    <section className='flex-1 bg-muted/40 py-12 md:py-24'>
      <div className='container mx-auto max-w-4xl px-4 md:px-6'>
        <div className='flex items-center mb-6'>
          <Button
            onClick={() => setView('list')}
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
                  className='hover:text-black cursor-pointer'
                  onClick={() => setView('list')}
                >
                  Gift Cards
                </div>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <div>Send Gift Card</div>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Card className='rounded-md'>
          <CardHeader>
            <CardTitle>Send Gift Card</CardTitle>
            <CardDescription>
              Choose an amount, add a message, and send to your recipient.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='relative h-60 mb-6'>
              <Image
                src={giftCard?.imageUrl || ''}
                alt={giftCard?.category || ''}
                fill={true}
                className='object-contain rounded-md'
              />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid gap-6'
              >
                <div className='grid gap-2'>
                  <FormLabel htmlFor='money' className='text-lg font-semibold'>
                    Gift Card Amount
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name='money'
                    render={({ field }) => (
                      <FormItem>
                        <RadioGroup
                          id='money'
                          value={field.value}
                          onValueChange={handleRadioChange} // Cập nhật giá trị khi chọn radio
                          className='grid grid-cols-3 gap-4'
                        >
                          {/* Các RadioGroupItem với giá trị cố định */}
                          <Label
                            htmlFor='amount-25'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='amount-25'
                              value='25'
                              className='peer sr-only'
                            />
                            $25
                          </Label>
                          <Label
                            htmlFor='amount-50'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='amount-50'
                              value='50'
                              className='peer sr-only'
                            />
                            $50
                          </Label>
                          <Label
                            htmlFor='amount-100'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='amount-100'
                              value='100'
                              className='peer sr-only'
                            />
                            $100
                          </Label>
                          <Label
                            htmlFor='amount-150'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='amount-150'
                              value='150'
                              className='peer sr-only'
                            />
                            $150
                          </Label>

                          <div className='col-span-2 relative font-medium'>
                            <InputMoney
                              className={cn(
                                'p-2 pl-16 text-lg h-auto text-end focus-visible:ring-1 md:focus-visible:ring-2',
                                {
                                  'ring-primary ring-1 md:ring-2': !!amount,
                                }
                              )}
                              placeholder='$0'
                              value={amount}
                              onChange={handleAmountChange}
                            />
                            <div className='absolute text-sm md:text-lg left-2 md:left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none'>
                              Custom
                            </div>
                          </div>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='text-lg font-semibold'>Recipient</div>
                  <FormField
                    control={form.control}
                    name='recipientType'
                    render={({ field }) => (
                      <FormItem>
                        <RadioGroup
                          id='recipientType'
                          value={field.value}
                          onValueChange={field.onChange}
                          className='flex gap-2'
                        >
                          <Label
                            htmlFor='recipientType-email'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='recipientType-email'
                              value='email'
                              className='peer sr-only'
                            />
                            <EnvelopeClosedIcon /> &nbsp; Email
                          </Label>
                          <Label
                            htmlFor='recipientType-sms'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='recipientType-sms'
                              value='sms'
                              className='peer sr-only'
                            />
                            <EnvelopeClosedIcon /> &nbsp; SMS
                          </Label>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='recipientName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='recipient-name'>
                        Recipient Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id='recipient-name'
                          placeholder="Enter recipient's name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {recipientType === 'email' ? (
                  <FormField
                    control={form.control}
                    name='recipientEmail'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='recipient-email'>
                          Recipient Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            id='recipient-email'
                            type='email'
                            placeholder="Enter recipient's email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    control={form.control}
                    name='recipientPhone'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='recipient-phone'>
                          Recipient Phone *
                        </FormLabel>
                        <FormControl>
                          <Input
                            id='recipient-phone'
                            type='tel'
                            placeholder="Enter recipient's phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='description'>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id='description'
                          placeholder='Enter a message (optional)'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='flex flex-col gap-4'>
                  <div className='text-lg font-semibold'>Sender</div>

                  <FormField
                    control={form.control}
                    name='senderType'
                    render={({ field }) => (
                      <FormItem>
                        <RadioGroup
                          id='senderType'
                          value={field.value}
                          onValueChange={field.onChange}
                          className='flex gap-2'
                        >
                          <Label
                            htmlFor='senderType-email'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='senderType-email'
                              value='email'
                              className='peer sr-only'
                            />
                            <EnvelopeClosedIcon /> &nbsp; Email
                          </Label>
                          <Label
                            htmlFor='senderType-sms'
                            className='flex cursor-pointer items-center justify-center rounded-md border-[1px] md:border-2 border-muted bg-background p-2 transition-colors hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary'
                          >
                            <RadioGroupItem
                              id='senderType-sms'
                              value='sms'
                              className='peer sr-only'
                            />
                            <EnvelopeClosedIcon /> &nbsp; SMS
                          </Label>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='senderName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='senderName'>Sender Name *</FormLabel>
                      <FormControl>
                        <Input
                          id='senderName'
                          placeholder="Enter sender's name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {senderType === 'email' ? (
                  <FormField
                    control={form.control}
                    name='senderEmail'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='senderEmail'>
                          Sender Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            id='senderEmail'
                            type='email'
                            placeholder="Enter sender's email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    control={form.control}
                    name='senderPhone'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor='senderPhone'>
                          Sender Phone *
                        </FormLabel>
                        <FormControl>
                          <Input
                            id='senderPhone'
                            type='tel'
                            placeholder="Enter sender's phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                <div className='flex md:justify-end gap-4'>
                  <Button
                    onClick={() => resetData()}
                    variant='outline'
                    className='w-full md:w-1/4'
                    type='button'
                  >
                    Cancel
                  </Button>
                  <Button type='submit' className='w-full md:w-1/4'>
                    Checkout
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
