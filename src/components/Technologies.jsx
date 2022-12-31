import Gradient2 from './Gradient2';
import Tech from '../data/Tech';

const Technologies = () => {
  return (
    <section
      id='Technologies'
      className='md:h-screen select-none relative md:w-screen snap-start py-14 md:px-[5.5rem]'
    >
      <div className='absolute z-[-1] left-16 top-0 md:left-80 md:top-0 md:dark:animate-pulse'>
        <Gradient2 />
      </div>
      <h1 className='text-blue-ac2 text-center md:text-left  leading-tight dark:text-muted font-bold md:text-[50px] lg:text-[63px] xl:text-[69.46px] text-[22px]'>
        Languages and Tools <span className='block'>I’m Familiar with.</span>
      </h1>

      <div className=' md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-8 lg:gap-5 md:gap-1 md:grid hidden'>
        {Tech.map((tech) => (
          <div className='transition-all delay-75 hover:scale-110 ease-in-out duration-300 hover:opacity-90 bg-blue-ac2 aspect-ratio-square xl:h-[9.766rem] xl:w-[9.766rem] lg:h-[8rem] lg:w-[8rem] md:h-[7.5rem] md:w-[7.5rem] col-span-1  mt-10  rounded-[42px] dark:bg-muted flex items-center shadow-lg shadow-muted dark:shadow-blue-ac2 '>
            <img
              src={tech.link}
              className={` mx-auto w-[${tech.dSize}] h-20  ${
                tech.rounded ? 'rounded-[10px]' : ''
              }`}
              alt=''
            />
          </div>
        ))}
        <div className='  col-span-1  hidden xl:flex mx-auto items-cente gap-2 mt-[6.5rem]'>
          <div class='col-3'>
            <div class='snippet' data-title='dot-flashing'>
              <div class='stage'>
                <div class='dot-flashing '></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='md:hidden relative flex overflow-x-hidden'>
        <div class='py-12 animate-marquee whitespace-nowrap '>
          {Tech.map((tech) => (
            <div className='transition-all inline-flex items-center delay-75 mx-2 hover:scale-110 ease-in-out duration-300 hover:opacity-90 bg-blue-ac2  h-[84.46px] w-[84.46px]  rounded-[24px] dark:bg-muted  shadow-sm shadow-muted dark:shadow-blue-ac2 '>
              <img
                src={tech.link}
                className={` mx-auto w-[${tech.mSize}] h-12 ${
                  tech.rounded ? 'rounded-[10px]' : ''
                }`}
                alt=''
              />
            </div>
          ))}
        </div>

        <div class='absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
          {Tech.map((tech) => (
            <div className='transition-all inline-flex items-center delay-75 mx-2 hover:scale-110 ease-in-out duration-300 hover:opacity-90 bg-blue-ac2  h-[84.46px] w-[84.46px]  rounded-[24px] dark:bg-muted  shadow-sm shadow-muted dark:shadow-blue-ac2 '>
              <img
                src={tech.link}
                className={` mx-auto w-[${tech.mSize}] h-12 ${
                  tech.rounded ? 'rounded-[10px]' : ''
                }`}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
