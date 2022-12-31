import Navbar from './Navbar';
import Gradient from './Gradient';

const Header = () => {
  return (
    <div className='md:h-screen  md:w-screen snap-start  relative'>
      <Navbar />

      <div className='hidden md:block absolute top-0 right-0'>
        <Gradient />
      </div>
      <section
        className={` grid items-center md:h-screen  select-none  pb-14  px-6 md:px-[5.2rem] `}
      >
        <div>
          <h1 className=' text-center md:text-left text-[32px] text-background dark:text-muted md:text-[82px] lg:text-[92.59px] md:leading-[112.05px] font-bold'>
            Hello, I’m
            <span className='block '>
              <strong className='text-bg '>Danuja</strong> Jayasuriya
            </span>
          </h1>
          <h2 className='text-[12.38px] leading-[38.73px] md:leading-[93.06px] animate-pulse text-center md:text-left text-muted md:text-[45px] lg:text-[52.11px] font-bold dark:text-blue-ac1'>
            Undergraduate / Full Stack dev.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Header;
