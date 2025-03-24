'use server';

import { NEXT_API_URL } from '@/configs';
import { IGiftCard, IGiftCardFormData } from '@/store/giftcard-store';

export const createGiftCardAction = async (
  formData: IGiftCardFormData,
  setSelectedGiftCard: IGiftCard | null
) => {
  const res = await fetch(`${NEXT_API_URL}/api/v1/giftcard/buy`, {
    method: 'POST',
    body: JSON.stringify({ giftCard: setSelectedGiftCard?.id, ...formData }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  try {
    const resData = await res.json();
    const { isSuccess = false, data } = resData;
    console.log('data', data);
  } catch (err) {
    console.log('err', err);
  }
};
