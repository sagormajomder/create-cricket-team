export default function SelectedPlayers({ selectedPlayers, onToggle }) {
  if (selectedPlayers.length === 0) {
    return <p>Yet no player selected. Please purchased a player first</p>;
  }

  return (
    <>
      <div className='space-y-3'>
        {selectedPlayers.map(p => (
          <SelectedPlayer player={p} key={p.id} />
        ))}
      </div>
      <div className='p-2 rounded-2xl border border-body cursor-pointer max-w-max'>
        <button
          onClick={() => onToggle(t => !t)}
          className='bg-primary px-3.5 py-3 text-body font-semibold rounded-xl cursor-pointer'>
          Add More Player
        </button>
      </div>
    </>
  );
}

// Child Componet
function SelectedPlayer({ player }) {
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

  return (
    <div className='border border-gray-400 rounded-xl flex justify-between items-center p-4'>
      <div className='flex items-center gap-4'>
        <img
          className='h-20 w-20 object-cover rounded-xl'
          src={playerImage}
          alt={playerName}
        />
        <div>
          <h4 className='text-xl font-semibold'>{playerName}</h4>
          <p className='text-gray-400'>{batingStyle}</p>
        </div>
      </div>
      <button className='cursor-pointer'>❌</button>
    </div>
  );
}
