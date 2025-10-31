import '../styles/globals.css';

export const metadata = {
  title: 'Skyward Protocol',
  description: 'Collective prosperity through community-powered DeFi'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
