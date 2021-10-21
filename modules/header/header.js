import style from './header.module.css';
import Image from 'next/image';

import LogoImage from '../../assets/logo.png';

const Header = () => {
  return (
    <header className={style.main}>
      <main className={style.content}>
        <Image src={LogoImage} alt="Logo" width={50} height={50} />
        <nav>
          <li>Home</li>
          <li>About Us</li>
          <li>Showcase</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Sign In</li>
        </nav>
      </main>
    </header>
  );
};

export default Header;
