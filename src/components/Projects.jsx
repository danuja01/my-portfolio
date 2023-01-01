import Card from './Card';
import works from '../data/works';

const Projects = () => {
  return (
    <section
      id='projects'
      className='select-none overflow-y-hidden snap-start md:h-screen md:w-screen py-14    bg-sectionLight dark:bg-sectionDark'
    >
      <div className='text-center md:leading-snug mb-10 md:mb-0'>
        <h1 className='text-[24px] md:text-[69.46px]  font-bold text-blue-ac2 dark:text-muted'>
          I developed these!
        </h1>
        <p className='text-[#6e6a836d] dark:text-[#4986f9] dark:opacity-50 text-[10px] md:text-[16.5px] '>
          React.js l Node.js l Express l Angular l Java l Python l PHP l
          TypeScript
        </p>
      </div>

      <div className=' flex  overflow-x-scroll  items-center h-[90%]  horizontal-scroll snap-mandatory snap-x md:snap-none'>
        {works.map((work, index) => (
          <Card works={work} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
