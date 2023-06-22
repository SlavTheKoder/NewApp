import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://qahwaworld.com/wp-content/uploads/2022/01/coffee-quality-institute.jpg"
          className="logo"
        ></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
        </div>
        <div>ava + description</div>
        <div>
          my posts
          <div>new post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
