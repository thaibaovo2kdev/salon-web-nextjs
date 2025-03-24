import { NEXT_API_URL } from '@/configs';
import Home from '@/views/home';

export default async function HomePage() {
  const data = await fetch(NEXT_API_URL + '/api/v1/giftcard');
  const giftCards = await data.json();

  return <Home giftCards={giftCards.data.items} />;
}
