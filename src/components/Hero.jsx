import Banner from '../assets/banner-main.png';

export default function Hero() {
  return (
    <figure
      style={{ backgroundImage: 'url(./src/assets/bg-shadow.png)' }}
      className='bg-no-repeat py-14 rounded-2xl  bg-black/90 bg-cover bg-center'>
      <div className='text-white flex flex-col gap-4 items-center justify-center'>
        <img src={Banner} alt='Banner Image' />
        <h1 className='text-4xl font-bold'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className='text-white/70 font-medium text-2xl'>
          Beyond Boundaries Beyond Limits
        </p>
        <div className='p-2 rounded-2xl border border-primary cursor-pointer'>
          <button className='bg-primary px-3.5 py-3 text-body font-semibold rounded-xl cursor-pointer'>
            Claim Free Credit
          </button>
        </div>
      </div>
    </figure>
  );
}
