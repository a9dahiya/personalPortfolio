import CityGame from './components/CityGame';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <CityGame />
      <Analytics />
    </>
  );
}
