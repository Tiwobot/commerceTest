import { ThreeItemGrid } from '../../components/grid/three-items';
import { Carousel } from '../../components/carousel';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://yangfinity.com',
  },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Buy Yang & Won for Metin2 - Yangfinity</h1>
      <h2 className={`sr-only ${GeistSans.className}`}>Buy Yang & Won for Metin2 Gameforge, Private & Mobile Servers at <span className="text-[#b6e700]">Yangfinity</span></h2>
      
      {/* Hidden SEO paragraph for Google visibility */}
      <div className="sr-only">
        <p>
          Yangfinity is the most trusted Metin2 Yang and Won seller, serving players across Gameforge West (Eostre, Teutonia, Germania), 
          Gameforge East (Europa, Tigerghost), Gameforge TR (Onyx, Azrael, Ruby), Private Servers (Ruby Chimera, Emerald Aurora), 
          and Mobile Metin2 (Mobile2 Tuva, Tramola, Alesta). We offer instant delivery within 5-15 minutes, secure payment methods 
          including PayPal and credit cards, and 24/7 customer support. With over 500 verified Trustpilot reviews and 5+ years of 
          experience, Yangfinity is your safe choice for buying Metin2 Yang and Won. Fast, secure, and reliable - join thousands 
          of satisfied players worldwide.
        </p>
      </div>
      
      <ThreeItemGrid />
      <Carousel />
    </>
  );
}
