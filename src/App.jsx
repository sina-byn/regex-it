// * providers
import RegexContextProvider from './context/RegexContextProvider';

// * components
import RegexEditor from './components/RegexEditor';

const App = () => {
  return (
    <main className='app-container flex flex-col lg:grid grid-cols-12 grid-rows-1 min-h-screen'>
      <section className='editors-pane col-span-8 xl:col-span-9 h-[90vh] lg:h-screen py-8 px-4'>
        <div className='content-wrap flex flex-col gap-y-6 h-full shadow-[0_0_6px_#D8D8D8] p-5'>
          <RegexContextProvider>
            <RegexEditor />
            {/* text editor goes here */}
          </RegexContextProvider>
          <footer className='text-center text-xs text-gray-500/60'>
            A simple clone of&nbsp;
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://www.regexpal.com/'
              className='regex-pal-link text-blue-500 underline'
            >
              RegEx Pal from Dan's Tools
            </a>
            &nbsp;By&nbsp;
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://portfolio-sina-byn.vercel.app/'
              className='portfolio-link text-blue-500 underline'
            >
              Sina Bayandorian
            </a>
          </footer>
        </div>
      </section>
      <aside className='side-pane col-span-4 xl:col-span-3 h-fit lg:h-screen border-t border-gray-300 py-8 pr-4 pl-4 lg:pl-0'>
        <div className='content-wrap h-full shadow-[0_0_6px_#D8D8D8] overflow-y-auto px-5 py-3'>
          <h3 className='title text-lg font-bold capitalize mb-1'>
            Cheat Sheet
          </h3>
          {/* cheat sheet table goes here */}
        </div>
      </aside>
    </main>
  );
};

export default App;
