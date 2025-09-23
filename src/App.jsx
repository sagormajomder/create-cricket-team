import { Suspense, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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
  const [totalCoin, setTotalCoin] = useState(600000000);

  const totalSelectedPlayer = selectedPlayers.length;

  function handleSelectPlayer(player) {
    setSelectedPlayers(p => [...p, player]);
    setTotalCoin(coin => coin - player.playerPrice);
    toast.success(`${player.playerName} is selected`);
  }

  function handleRemoveSelectedPlayer(id) {
    const player = selectedPlayers.find(p => p.id === id);
    setTotalCoin(coin => coin + player.playerPrice);
    setSelectedPlayers(players => players.filter(p => p.id !== id));
    toast.success(`${player.playerName} is removed Successfully`);
  }

  return (
    <div className='min-h-screen text-body text-sm md:text-base'>
      <Header totalCoin={totalCoin} />
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
              onRemoveSeletedPlayers={handleRemoveSelectedPlayer}
            />
          ) : (
            <AvailablePlayers
              fetchPlayersPromise={fetchPlayersPromise}
              onSelectPlayer={handleSelectPlayer}
              totalCoin={totalCoin}
              totalSelectedPlayer={totalSelectedPlayer}
            />
          )}
        </Suspense>
      </Main>
      {/* For Notification */}
      <Toaster
        toastOptions={{
          error: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
}

function Main({ children }) {
  return (
    <main className='max-w-[80rem] mx-auto px-3 space-y-14'>{children}</main>
  );
}
