const MobileNav = ({ links, open }) => {
  return (
    <nav
      className={` mx-3 rounded-sm inset-x-0 py-4 text-center bg-blue-ac1 dark:bg-blue-ac1 text-gray absolute z-[50] md:hidden   ${
        open ? 'block' : 'hidden'
      }`}
    >
      <ul className='ml-4 z-50 '>
        {links.map((link) => (
          <li key={link.name} className='py-2 z-50 text-md  w-full'>
            <a
              href={link.link}
              className='flex p-2 z-50 text-gray-800 justify-self-between hover:text-gray-400 w-96 duration-500 hover:bg-blue-ac2 focus:bg-blue-ac2'
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//         open ? 'top-20' : 'top-[-280px]'

export default MobileNav;
