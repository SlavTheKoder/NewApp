import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
// import activeLink from './selected';

const setActive = ({isActive}) => (isActive ? 'active-link' : '');

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          style={({isActive}) => ({
            color: isActive ? 'var(--color-active' : 'white',
          })}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="news"
          style={({isActive}) => ({
            color: isActive ? 'var(--color-active' : 'white',
          })}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="music"
          style={({isActive}) => ({
            color: isActive ? 'var(--color-active' : 'white',
          })}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="dialogs"
          style={({isActive}) => ({
            color: isActive ? 'var(--color-active' : 'white',
          })}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="settings"
          style={({isActive}) => ({
            color: isActive ? 'var(--color-active' : 'white',
          })}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
