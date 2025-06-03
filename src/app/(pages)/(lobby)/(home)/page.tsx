import { About } from './components/about';
import { Hero } from './components/hero';

export default function Home() {
  return (
    <div className="font-century flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <main className="grow">
        <Hero />
        <About />
      </main>
    </div>
  );
}
