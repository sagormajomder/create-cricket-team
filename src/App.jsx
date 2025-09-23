import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlayerStates from './components/PlayerStates';

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='min-h-screen text-body'>
      <Header />
      <Main>
        <Hero />
        <PlayerStates toggle={toggle} onToggle={setToggle} />
      </Main>
    </div>
  );
}

function Main({ children }) {
  return (
    <main className='max-w-[80rem] mx-auto px-3 space-y-14'>{children}</main>
  );
}
