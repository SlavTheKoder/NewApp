import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>REACT</li>
          <li>JS</li>
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News Feed</a>
      <a href="#">Messages</a>
    </div>
  );
};
export default App;
