'use client';
import { IGiftCard, useGiftCardStore } from '@/store/giftcard-store';
import CreateGiftCard from '@/views/create-gift-card';
import GiftCardList from '@/views/gift-card-list';
import CreditCardForm from '@/views/visa-card-form';
import { useMemo } from 'react';
import HomeSection from '../home-section';

export default function Home({ giftCards }: { giftCards: IGiftCard[] }) {
  const {
    selectedGiftCard,
    setSelectedGiftCard,
    view,
    formData,
    setFormData,
    creditCard,
    setCreditCardData,
    resetData,
    setView,
  } = useGiftCardStore((state) => ({
    view: state.view,
    selectedGiftCard: state.selectedGiftCard,
    setSelectedGiftCard: state.setSelectedGiftCard,
    formData: state.formData,
    setFormData: state.setFormData,
    creditCard: state.creditCard,
    setCreditCardData: state.setCreditCardData,
    resetData: state.resetData,
    setView: state.setView,
  }));

  const GIFT_CARD_VIEW = useMemo(
    () => ({
      list: (
        <GiftCardList
          setSelectedGiftCard={setSelectedGiftCard}
          giftCards={giftCards}
        />
      ),
      form: (
        <CreateGiftCard
          setView={setView}
          resetData={resetData}
          giftCard={selectedGiftCard}
          formData={formData}
          setFormData={setFormData}
          setSelectedGiftCard={setSelectedGiftCard}
        />
      ),
      visa: (
        <CreditCardForm
          resetData={resetData}
          setView={setView}
          formData={formData}
          creditCard={creditCard}
          setCreditCardData={setCreditCardData}
          selectedGiftCard={selectedGiftCard}
        />
      ),
      home: <HomeSection />,
    }),
    [
      setSelectedGiftCard,
      giftCards,
      resetData,
      selectedGiftCard,
      formData,
      setFormData,
      setView,
      creditCard,
      setCreditCardData,
    ]
  );

  return <>{GIFT_CARD_VIEW[view]}</>;
}
