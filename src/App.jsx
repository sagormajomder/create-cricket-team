import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className='min-h-screen text-body'>
      <Header />
      <Main>
        <Hero />
      </Main>
    </div>
  );
}

function Main({ children }) {
  return <main className='max-w-[80rem] mx-auto px-3'>{children}</main>;
}
