import About from '@/Components/About/About';
import Projects from '@/Components/Projects/Projects';
import Contact from '@/Components/Contact/Contact';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
        <div className="md: col-span-1">
          <About />
        </div>
        <div className="md: col-span-1">
          <Projects />
        </div>
        <div className="md: col-span-1">
          <Contact />
        </div>
      </div>
    </>
  );
}
