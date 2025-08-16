import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Ministry from "@/components/Ministry";
import Leadership from "@/components/Leadership";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Ministry />
        <Leadership />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
