import { downloadCV } from '../js/utilities';

const AboutMe = () => {
  return (
    <section
      title='about'
      id='about'
      className='select-none overflow-y-hidden snap-start md:h-screen md:w-screen py-14 md:px-[5.5rem] sm:flex items-center   bg-sectionLight dark:bg-sectionDark'
    >
      <div id='my_image' className='relative '>
        <img
          src='assets/myImg.png'
          className='overflow-hidden w-[10rem]  sm:w-[60rem]  dark:hidden flex mx-auto '
          alt='A portrait of Danuja Jayasuriya'
        />
        <img
          src='assets/myImg-dark.png'
          className='overflow-hidden w-[10rem] mx-auto hidden sm:w-[60rem]  dark:block  justify-self-between '
          alt='A portrait of Danuja Jayasuriya'
        />
        <span className='blur-[140px] overflow-hidden animate-pulse  space-x-4 justify-between opacity-100 dark:opacity-70 absolute  xl:top-[2.2rem] xl:left-[4rem] z-[-1] rounded-full md:top-30 md:w-[18rem] md:h-[14rem] lg:top-28 lg:w-[23rem] lg:h-[20rem] xl:w-[20rem] xl:h-[25rem] bg-[#3797EF] '></span>
        <span className='blur-[60px] justify-between animate-pulse  space-x-4 rounded-full z-[-1] w-[6rem] h-[6rem] sm:top-[3rem] sm:left-[3rem] sm:w-[12rem] sm:h-[12rem] absolute md:hidden top-[1.8rem] left-[10rem]  bg-[#3797EF] '></span>
      </div>
      <div className='sm:ml-4 md:ml-14 sm:w-[90rem]  w-full '>
        <h2 className='text-[22px] xs:leading-10  sm:text-left sm:text-[29px] md:text-[30px] text-center lg:text-[38px] xl:text-[50px] font-bold text-blue-ac2 dark:text-blue-ac1'>
          ABOUT ME
          <div className='inline-flex animate-blink'>.</div>
        </h2>
        <h2 className='text-center text-[12px] px-6 sm:p-0  sm:text-left sm:text-[14px] sm:pr-8 md:text-[12px] lg:text-[19px]  xl:text-[22px] font-bold text-blue-ac1 dark:text-muted mt-3 md:mt-0'>
          As a dedicated learner, I am committed to providing exceptional
          service and delivering high-quality work. I am highly motivated to
          achieve perfection in all tasks assigned to me and consistently strive
          to exceed expectations. I am a responsible and reliable individual who
          consistently demonstrates a strong work ethic and gives 100% effort in
          both my professional and personal endeavors.
        </h2>
        <button
          onClick={() => downloadCV()}
          className='text-[#f9f9f9] text-[9px] mt-6 hover:opacity-75 flex mx-auto md:mx-0 md:text-sm md:mt-3 px-3 py-2 md:px-5 md:py-3 font-semibold shadow-lg  rounded-md bg-blue-ac1'
        >
          DOWNLOAD CV
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
