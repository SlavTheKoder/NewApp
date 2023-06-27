import classes from './Navbar.module.css';

// let classes = {
//   'nav': '',
//   'item': '',
// };
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <a>Profile</a>
      </div>
      <div className="item">
        <a>News</a>
      </div>
      <div className="item">
        <a>Music</a>
      </div>
      <div className="item">
        <a>Messages</a>
      </div>
      <div className="item">
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default NavBar;
