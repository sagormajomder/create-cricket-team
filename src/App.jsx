import { Suspense, useState } from 'react';
import AvailablePlayers from './components/AvailablePlayers';
import Header from './components/Header';
import Hero from './components/Hero';
import PlayerStates from './components/PlayerStates';
import SelectedPlayers from './components/SelectedPlayers';

async function fetchPlayers() {
  const res = await fetch('/player.json');
  return res.json();
}
const fetchPlayersPromise = fetchPlayers();

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const totalSelectedPlayer = selectedPlayers.length;

  function handleSelectPlayer(player) {
    setSelectedPlayers(p => [...p, player]);
  }

  return (
    <div className='min-h-screen text-body text-sm md:text-base'>
      <Header />
      <Main>
        <Hero />
        <PlayerStates
          toggle={toggle}
          onToggle={setToggle}
          totalSelectedPlayer={totalSelectedPlayer}
        />
        <Suspense
          fallback={
            <span className='loading loading-spinner loading-xl'></span>
          }>
          {toggle ? (
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              onToggle={setToggle}
            />
          ) : (
            <AvailablePlayers
              fetchPlayersPromise={fetchPlayersPromise}
              onSelectPlayer={handleSelectPlayer}
            />
          )}
        </Suspense>
      </Main>
    </div>
  );
}

function Main({ children }) {
  return (
    <main className='max-w-[80rem] mx-auto px-3 space-y-14'>{children}</main>
  );
}
