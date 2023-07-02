import s from './Navbar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="news">News</a>
      </div>
      <div className={s.item}>
        <a href="">Music</a>
      </div>
      <div className={s.item}>
        <a href="dialogs">Messages</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;
