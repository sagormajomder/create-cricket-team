import { use } from 'react';
import toast from 'react-hot-toast';

export default function AvailablePlayers({
  fetchPlayersPromise,
  onSelectPlayer,
  totalCoin,
  totalSelectedPlayer,
  selectedPlayers,
}) {
  const playersData = use(fetchPlayersPromise);
  const selectedIds = new Set(selectedPlayers?.map(p => p.id));

  return (
    <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(18.75rem,1fr))] items-start justify-between gap-6'>
      {playersData.map(player => (
        <Player
          player={player}
          key={player.id}
          onSelectPlayer={onSelectPlayer}
          totalCoin={totalCoin}
          totalSelectedPlayer={totalSelectedPlayer}
          isSelected={selectedIds.has(player.id)}
        />
      ))}
    </div>
  );
}
// Child component
function Player({
  player,
  onSelectPlayer,
  totalCoin,
  totalSelectedPlayer,
  isSelected,
}) {
  const {
    id,
    playerImage,
    playerName,
    playerCountry,
    playingRole,
    playerRating,
    batingStyle,
    bowlingStyle,
    playerPrice,
  } = player;

  function handleClick() {
    if (isSelected) return; // already purchased
    if (totalCoin < Number(playerPrice.slice(1))) {
      toast.error(
        `Sorry! You don't have enough coin to select ${player.playerName}`
      );
      return;
    }

    if (totalSelectedPlayer === 6) {
      toast.error('Maximum player is selected!');
      return;
    }
    const purchasePlayer = {
      id,
      playerImage,
      playerName,
      playerCountry,
      playingRole,
      playerRating,
      batingStyle,
      bowlingStyle,
      playerPrice: Number(playerPrice.slice(1)),
    };

    onSelectPlayer(purchasePlayer);
  }

  return (
    <div className='border border-gray-400 rounded-xl p-5 space-y-2'>
      <img
        className='sm:h-[12.5rem] object-cover rounded-lg'
        src={playerImage}
        alt={playerName}
      />
      <div>
        <h4 className='text-xl font-semibold'>{playerName}</h4>
      </div>
      <div className='text-gray-400 flex justify-between items-center pb-3 border-b border-b-gray-200'>
        <div>
          <p>{playerCountry}</p>
        </div>
        <p className='text-body px-3 py-1 rounded-lg bg-gray-100'>
          {playingRole}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold'>Rating</p>
        <p>{playerRating}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold'>Bating Style</p>
        <p>{batingStyle}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold'>Bowling Style</p>
        <p>{bowlingStyle}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold'>Price: {playerPrice}</p>
        <button onClick={handleClick} disabled={isSelected} className='btn'>
          {isSelected ? 'Purchased' : 'Choose Player'}
        </button>
      </div>
    </div>
  );
}
