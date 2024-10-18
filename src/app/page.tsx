import Head from 'next/head';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const SimplePDFViewer = dynamic(() => import('@/components/Resume'), { ssr: false });

const Home = () => {
  return (
    <div className="max-w-screen-md mx-auto py-12 px-4">
      <Head>
        <title>Sam Bock - Software Developer Portfolio</title>
        <meta name="description" content="Sam Bock's software developer portfolio showcasing projects, work experience, and skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">Sam Bock</h1>
        <p className="mt-4 text-xl text-gray-600">Software Engineer specializing in AI/ML and Full-Stack Development</p>
        <div className="mt-6 space-x-4">
          <a href="https://linkedin.com/in/smbock42" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/smbock42" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
          <a href="#resume" className="text-blue-600 hover:underline">Resume</a>
        </div>
      </header>
      
      <main className="space-y-24">
        <About />
        <Experience />
        <Projects />
        <section id="resume">
          <SimplePDFViewer />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;