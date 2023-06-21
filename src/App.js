import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>react</li>
        <li>js</li>
        <li>ts</li>
      </ul>
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
