import { getLandingTranslations } from "@/lib/translationHelper";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default async function LangLayout({ children, params }) {
  const locale = params.lang;
  const t = await getLandingTranslations(locale);

  return (
    <html lang={locale}>
      <body>
        <NavBar locale={locale} navigation={t.navigation} />
        {children}
        <Footer locale={locale} footer={t.footer} navigation={t.navigation}/>
      </body>
    </html>
  );
}
