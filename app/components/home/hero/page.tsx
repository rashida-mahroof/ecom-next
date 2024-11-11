import Image from 'next/image';
import bgImage from '../../../assets/premium.webp';
import Link from 'next/link';
export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={bgImage}
        alt="Grilling background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Premium Charcoal for Your Grilling Needs
        </h1>
        <p className="text-xl mb-8">
          Experience the difference with our high-quality, sustainable charcoal products.
        </p>
        <Link href='/pages/shop' className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
          Shop Now
        </Link>
      </div>
    </div>
  );
}