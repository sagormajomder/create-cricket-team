import CoinIcon from '../assets/coin.png';
import Logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className='mb-6'>
      <nav className='max-w-[80rem] mx-auto flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='Logo' />
        </a>
        <div className='flex items-center gap-1.5 border border-gray-400 rounded-xl px-4 py-1.5 font-semibold'>
          <p>0 Coin</p>
          <img className='h-6' src={CoinIcon} alt='Coin Icon' />
        </div>
      </nav>
    </header>
  );
}
