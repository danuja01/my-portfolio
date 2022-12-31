import Card from './Card';
import works from '../data/works';

const Projects = () => {
  return (
    <section
      id='projects'
      className='select-none overflow-y-hidden snap-start md:h-screen md:w-screen py-14    bg-sectionLight dark:bg-sectionDark'
    >
      <div className='text-center leading-snug'>
        <h1 className='text-[22px] md:text-[69.46px]  font-bold text-blue-ac2 dark:text-muted'>
          I deveolped these!
        </h1>
        <p className='text-muted dark:text-blue-ac1 text-[10px] md:text-[16.5px] opacity-75'>
          React.js l Node.js l Express l Angular l Java l Python l PHP l
          TypeScript
        </p>
      </div>

      <div className=' flex  overflow-x-scroll flex-no-wrap items-center mt-16 horizontal-scroll snap-mandatory snap-x md:snap-none'>
        {works.map((work) => (
          <Card works={work} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
