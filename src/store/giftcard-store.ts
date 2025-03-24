import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface IGiftCard {
  typeGiftCard: string;
  category: string;
  description: string;
  emailCreated: string;
  id: string;
  imageUrl: string;
}

export interface ICreditCardFormData {
  cardHolderName: string;
  cardNumber: string;
  cvv: string;
  expirationDate: string;
}

export interface IGiftCardFormData {
  senderType: string;
  senderEmail?: string;
  senderName: string;
  senderPhone?: string;
  recipientName: string;
  recipientEmail?: string;
  recipientPhone?: string;
  recipientType: string;
  description?: string;
  money: string;
}

export interface IGiftCardStore {
  selectedGiftCard: IGiftCard | null;
  formData: IGiftCardFormData;
  creditCard: ICreditCardFormData;
  view: 'list' | 'form' | 'visa' | 'home'; // Trạng thái hiện tại
}

export interface IGiftCardActions {
  setSelectedGiftCard: (giftCard: IGiftCard | null) => void;
  setFormData: (formData: Partial<IGiftCardFormData>) => void;
  setCreditCardData: (creditCard: Partial<ICreditCardFormData>) => void;
  resetData: () => void;
  setView: (view: 'list' | 'form' | 'visa' | 'home') => void;
}

export const INITIAL_STORE_VALUE: IGiftCardStore = {
  selectedGiftCard: null,
  formData: {
    senderType: 'email',
    senderEmail: '',
    senderName: '',
    senderPhone: '',
    recipientName: '',
    recipientEmail: '',
    recipientPhone: '',
    recipientType: 'email',
    description: '',
    money: '50',
  },
  creditCard: {
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expirationDate: '',
  },
  view: 'home',
};

export const useGiftCardStore = create<IGiftCardStore & IGiftCardActions>()(
  immer((set) => ({
    ...INITIAL_STORE_VALUE,
    setSelectedGiftCard(giftCard) {
      set((state) => {
        state.selectedGiftCard = giftCard;
        giftCard ? (state.view = 'form') : (state.view = 'list');
      });
    },
    setFormData(formData) {
      set((state) => {
        state.formData = { ...state.formData, ...formData };
        state.view = 'visa';
      });
    },
    resetData() {
      set((state) => {
        state.selectedGiftCard = null;
        state.creditCard = INITIAL_STORE_VALUE.creditCard;
        state.formData = INITIAL_STORE_VALUE.formData;
        state.view = INITIAL_STORE_VALUE.view;
      });
    },
    setCreditCardData(creditCard) {
      set((state) => {
        state.creditCard = { ...state.creditCard, ...creditCard };
      });
    },
    setView(view) {
      set((state) => {
        state.view = view;
      });
    },
  }))
);
