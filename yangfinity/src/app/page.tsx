import { ThreeItemGrid } from '../../components/grid/three-items';
import { Carousel } from '../../components/carousel';
import { GeistSans } from 'geist/font/sans';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Buy Yang & Won for Metin2 - Yangfinity</h1>
      <h2 className={`sr-only ${GeistSans.className}`}>Buy Yang & Won for Metin2 Gameforge, Private & Mobile Servers at <span className="text-[#b6e700]">Yangfinity</span></h2>
      <ThreeItemGrid />
      <Carousel />
    </>
  );
}
