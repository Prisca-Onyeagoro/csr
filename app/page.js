import Hero from '@/Components/Home/Hero';
import How from '@/Components/How/How';
import Header from '@/Components/Navbar/Header';
import Schedule from '@/Components/Schedule/Schedule';
import Foot from '@/Components/Foot/Foot';
import Download from '@/Components/Download/Download';
// import Image from 'next/image';

export default function Home() {
  return (
    <main className=" items-center">
      <Header />
      <Hero />
      <Schedule />
      <How />
      <Foot />
      <Download />
    </main>
  );
}
