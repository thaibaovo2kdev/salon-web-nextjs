'use client';
import { Button } from '@/components/ui/button';
import { IGiftCard, IGiftCardActions } from '@/store/giftcard-store';
import Image from 'next/image';
import { useState } from 'react';

export default function GiftCardList({
  giftCards,
  setSelectedGiftCard,
}: {
  giftCards: IGiftCard[];
  setSelectedGiftCard: IGiftCardActions['setSelectedGiftCard'];
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    'all',
    ...Array.from(new Set(giftCards.map((card) => card.category))),
  ];

  const filteredGiftCards =
    activeCategory === 'all'
      ? giftCards
      : giftCards.filter((card) => card.category === activeCategory);
  return (
    <section className='w-full py-12'>
      <div className='container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
          <div className='grid gap-1'>
            <h1 className='text-2xl font-bold tracking-tight'>Gift Cards</h1>
            <p className='text-muted-foreground'>
              Browse our selection of gift cards for any occasion.
            </p>
          </div>
          <div className='flex flex-wrap gap-2 md:ml-auto'>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className='whitespace-nowrap capitalize'
              >
                {category === 'all' ? 'View All' : category}
              </Button>
            ))}
          </div>
        </div>
        <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-8'>
          {filteredGiftCards.map((card) => (
            <div key={card.id} className='grid gap-4 relative group'>
              <div
                className='absolute inset-0 z-10 cursor-pointer'
                onClick={() => setSelectedGiftCard(card)}
              >
                <span className='sr-only'>View</span>
              </div>
              <Image
                src={card.imageUrl}
                alt={card.description}
                width={450}
                height={300}
                className='rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity'
              />
              <div className='grid gap-1'>
                <h3 className='font-semibold capitalize text-center'>
                  {`${card.category} ${card.description.trim()}`}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
