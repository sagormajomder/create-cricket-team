export default function SelectedPlayers({
  selectedPlayers,
  onToggle,
  onRemoveSeletedPlayers,
}) {
  if (selectedPlayers.length === 0) {
    return (
      <>
        <p className='mb-4 bg-red-400 text-white text-center rounded-md p-3 max-w-fit font-medium mx-auto'>
          No player selected. Please select a player 🙂
        </p>
        <div className='p-2 rounded-2xl border border-body cursor-pointer max-w-fit mx-auto mb-4'>
          <button
            onClick={() => onToggle(t => !t)}
            className='bg-primary px-5 py-3 text-body font-semibold rounded-xl cursor-pointer'>
            Add Player
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='space-y-3 mb-4'>
        {selectedPlayers.map(p => (
          <SelectedPlayer
            player={p}
            key={p.id}
            onRemoveSeletedPlayers={onRemoveSeletedPlayers}
          />
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
function SelectedPlayer({ player, onRemoveSeletedPlayers }) {
  const { id, playerImage, playerName, batingStyle } = player;

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
      <button
        onClick={() => onRemoveSeletedPlayers(id)}
        className='cursor-pointer'>
        ❌
      </button>
    </div>
  );
}
