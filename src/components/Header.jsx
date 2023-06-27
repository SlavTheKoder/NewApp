import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://qahwaworld.com/wp-content/uploads/2022/01/coffee-quality-institute.jpg"
        className={s.logo}
      ></img>
    </header>
  );
};

export default Header;
