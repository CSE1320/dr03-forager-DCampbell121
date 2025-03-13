'use client';

import { useSearchParams } from 'next/navigation';

import HeaderBar from '../../components/Header';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Global from '../../styles/globals.css';

export default function MushroomPage() {
  const searchParams = useSearchParams();
  
  const name = searchParams.get('name');
  const imgURL = searchParams.get('imgURL');
  const desc = searchParams.get('desc');

  return (
    <div className="default">
      <HeaderBar />
      <img src={imgURL} alt={desc} />
      <h1>{name}</h1>
      
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>
      <NavBar />
    </div>
  );
}
