import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import CertificatesCarousel from '@/components/CertificatesCarousel';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import Projects from '@/components/Projects';
import Workflow from '@/components/Workflow';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
        <main id="main">
            <Hero />
            <Sobre />
            <CertificatesCarousel />
            <Skills />
            <FeaturedProjects />
            <Projects />
            <Workflow />
            <Contact />
        </main>
        <Footer />
    </>
  );
}
