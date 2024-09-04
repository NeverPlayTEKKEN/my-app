import Header from './components/header'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div>
        <Link href={'./ToDo'} className="border-2">ToDo</Link>
      </div>
    </div>
  );
}
