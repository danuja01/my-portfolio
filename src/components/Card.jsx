const Card = ({ works }) => {
  return (
    <div className='bg-blue-ac2 relative rounded-[3px] inline-block mx-4 snap-center center-div mb-4 w-[20rem] h-[28rem] p-5 dark:bg-muted'>
      <div className='w-[17.5rem] h-[11rem] mb-3 shadow-md'>
        <img
          src={works.image}
          className='  object-center rounded-sm '
          alt={`A thumbnail of the "${works.title}" project`}
        />
      </div>

      <div id='tags'>
        {works.tags.map((tag, index) => (
          <span
            key={index}
            className='text-[10px] hover:opacity-70 text-white bg-muted  dark:bg-blue-ac2 rounded-sm px-2 py-1 mr-2 '
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='mt-4'>
        <h3 className='text-white text-[16.5px] font-bold h-10 mb-2 dark:text-blue-ac1'>
          {works.title}
        </h3>
        <p className='text-white text-[12.38px] dark:text-blue-ac1'>
          {works.desc.substring(0, 200) + '...'}
        </p>
      </div>

      <div className='  absolute bottom-4 right-4 text-muted dark:text-blue-ac2  text-xs items-center '>
        <a href={works.link} className='hover:bg-blue-ac1  p-1 rounded-sm'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            className='inline-flex fill-muted dark:fill-blue-ac2 mr-1.5'
            viewBox='0 0 24 24'
          >
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
          view more
        </a>
      </div>
    </div>
  );
};

export default Card;
