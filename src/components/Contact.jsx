import Gradient2 from './Gradient2';
const Contact = () => {
  return (
    <section
      id='contact'
      className='select-none relative overflow-y-hidden snap-start md:h-screen md:w-screen  py-1'
    >
      <div className='absolute z-[-1] left-16 top-0 md:left-80 md:top-0 md:dark:animate-pulse'>
        <Gradient2 />
      </div>
      <div className='grid grid-rows-3   h-full '>
        <div className='font-bold md:text-[69.46px] text-[22px] flex items-center my-10 md:mt-10 mx-auto text-blue-ac2 dark:text-muted'>
          <h1>CONNECT WITH ME</h1>
        </div>
        <div className='flex items-center mx-auto '>
          <a
            href='https://www.linkedin.com/in/danuja-jayasuriya-11483b211'
            className='p-3 bg-blue-ac1 rounded-full mx-[0.5rem] translate-x-1 ease-in-out duration-200 hover:scale-110  md:mx-6 '
          >
            <img
              src='assets/contacts/in.png'
              className='w-[2.3rem] md:w-[5.5rem] p-1'
              alt=''
            />
          </a>
          <a
            href='https://github.com/danuja01'
            className='p-3 bg-blue-ac1 rounded-full mx-[0.5rem] translate-x-1 ease-in-out duration-200 hover:scale-110 md:mx-6 '
          >
            <img
              src='assets/contacts/github.png'
              className='w-[2.4rem] md:w-[5.5rem]'
              alt=''
            />
          </a>
          <a
            href='https://stackoverflow.com/users/15913029/danuja'
            className='p-3 bg-blue-ac1 rounded-full mx-[0.5rem] translate-x-1 ease-in-out duration-200 hover:scale-110 md:mx-6 '
          >
            <img
              src='assets/contacts/stackover.png'
              className='w-[2.3rem] md:w-[5.5rem] md:p-2'
              alt=''
            />
          </a>
          <a
            href='https://twitter.com/DanujaJayasuri3'
            className='p-3 bg-blue-ac1 rounded-full mx-[0.5rem] translate-x-1 ease-in-out duration-200 hover:scale-110 md:mx-6 '
          >
            <img
              src='assets/contacts/twitter.png'
              className='w-[2.3rem] md:w-[5.5rem] md:h-[5.5rem] md:p-2 h-[2.3rem]'
              alt=''
            />
          </a>
        </div>
        <div className='mx-auto items-center md:mt-8 flex h-full p-4 '>
          <p className='text-[8px] md:text-xs text-blue-ac2 dark:text-muted'>
            Design & Developed by Danuja Jayasuriya | 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
