import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white">
      <Navbar />
      <Billboard />
    </main>
  );
}
