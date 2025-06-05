import { About } from './components/about';
import { Hero } from './components/hero';
import Mision from './components/mision';
import Vision from './components/vision';

export default function Home() {
  return (
    <div className="font-century flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <main className="grow">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="mision"><Mision /></section>
        <section id="vision"><Vision /></section>
      </main>
    </div>
  );
}
