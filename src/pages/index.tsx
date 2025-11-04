import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import RequirementsSection from "@/components/RequirementsSection";
import QuotesSection from "@/components/QuotesSection";
import NewsletterAndFooter from "@/components/NewsletterAndFooter";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>SURVIVE - Game Landing Page</title>
        <meta name="description" content="Experience new social battle royale game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>
        遥望齐州九点烟，一泓海水杯中泻
      </div>

      {/* About section */}
      <AboutSection />

      {/* Features section */}
      <FeaturesSection />

      {/* System requirements section */}
      <RequirementsSection />

      {/* Quotes section */}
      <QuotesSection />

      {/* Newsletter and Footer */}
      <NewsletterAndFooter />
    </>
  );
}
