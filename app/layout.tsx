import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'atlas.dev — Victor William',
  description:
    'Victor William — atlas.dev. Front-End Developer, UI/UX Designer e Game Art Director. Next.js, TypeScript, Tailwind, Design Systems.',
  metadataBase: new URL('https://atlas-dev-website.vercel.app'),
  openGraph: {
    title: 'atlas.dev — Victor William',
    description: 'Front-End Developer, UI/UX Designer e Game Art Director.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className="bg-bg text-text1 antialiased overflow-x-hidden w-full max-w-[100vw]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-red focus:text-white focus:px-5 focus:py-2 focus:rounded-md2 focus:font-bold"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
