import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';
import useDarkSide from '/Users/danuja/Desktop/DANUJA/portfolio/Danuja-Portfolio/src/hooks/useDarkSide.jsx';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setDarkSide(checked);
    setTheme(colorTheme);
  };

  return (
    <div className='flex items-center py-5 px-2'>
      <DarkModeSwitch
        onChange={toggleDarkMode}
        checked={darkSide}
        size={17}
        sunColor='#243A73'
        moonColor='#ACB3CA'
      />
    </div>
  );
};

export default Switcher;
