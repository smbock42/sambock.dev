import Head from 'next/head';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import { Metadata } from 'next';

const SimplePDFViewer = dynamic(() => import('@/components/Resume'), { ssr: false });

export const metadata: Metadata = {
  title: 'Sam Bock - Software Developer Portfolio',
  description: "Sam Bock's software developer portfolio showcasing projects, work experience, and skills.",
  icons: {
    icon: '/favicon.ico',
  }
}

const Home = () => {
  return (
    <div className="max-w-screen-md mx-auto py-12 px-4">
      <main className="space-y-24">
        <Header />
        <About />
        <Experience />
        <Projects />
        {/* <section id="resume">
          <SimplePDFViewer />
        </section> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;