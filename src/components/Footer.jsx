import footerLogo from '../assets/logo-footer.png';

export default function Footer() {
  return (
    <footer className='bg-[#06091A] text-white/60'>
      <div className='max-w-[80rem] mx-auto px-3 space-y-14 py-14'>
        <figure className='mx-auto w-max pt-5'>
          <img src={footerLogo} alt='Footer Logo' />
        </figure>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3 justify-between py-5'>
          {/* Footer 1*/}
          <div className='lg:max-w-1/2 md:max-w-[80%] space-y-5'>
            <h5 className='text-white font-semibold text-lg'>About Us</h5>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          {/* Footer 2 */}
          <div className='space-y-5'>
            <h5 className='text-white font-semibold text-lg'>Quick Links</h5>
            <ul className='list-disc list-inside space-y-2.5'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='space-y-5'>
            <h5 className='text-white font-semibold text-lg'>Subscribe</h5>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className=' max-w-full'>
              <input
                type='text'
                placeholder='Enter your email'
                className='py-2.5 sm:pl-5 pl-2 rounded-l-xl bg-white placeholder:text-[#13131366]'
              />
              <button className='py-2.5 sm:px-4 pl-2 px-2 font-bold rounded-r-xl text-[#040D11] bg-gradient-to-r from-[#F7D7A2]  to-[#EE8494]'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-7 border-t border-t-white/15'>
        <p className='w-fit mx-auto text-sm text-center'>
          &copy; {new Date().getFullYear()} All Rights Reserved to Dream BPL
          Team.
        </p>
      </div>
    </footer>
  );
}
