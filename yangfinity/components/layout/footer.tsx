import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2025 + (currentYear > 2025 ? `-${currentYear}` : '');

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
            <Image src="/yangfinity-logo-trans.png" alt="YANGFINITY Logo" width={120} height={32} />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
            </div>
        <div className="md:ml-auto">
        </div>
      
      <div className="py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} Yangfinity. All rights reserved.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
