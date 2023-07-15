import {Profiler} from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
            />
            <Route path="/profile/*" element={<Profile {...props} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
