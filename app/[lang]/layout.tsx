// app/[lang]/layout.tsx

export default function LangLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  const locale = params.lang;

  return (
    <html lang={locale}>
      <body>
        {/* Nav + Footer will load translations inside themselves */}
        {children}
      </body>
    </html>
  );
}
