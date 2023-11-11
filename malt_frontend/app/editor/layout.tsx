import '../globals.css';

export const metadata = {
  title: 'MALT Editor',
  description: 'MALT Editor Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
