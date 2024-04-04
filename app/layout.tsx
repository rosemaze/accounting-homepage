import '@/app/ui/global.css';
import { barlowCondensed } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
