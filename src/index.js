import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hello World!', likesCount: 12},
  {id: 2, message: 'One More Disaster Artist', likesCount: 13},
];
let dialogs = [
  {id: 1, name: 'Valeriy'},
  {id: 2, name: 'EvilArthas'},
  {id: 3, name: 'TorontoTokyo'},
  {id: 4, name: 'BadComedian'},
  {id: 5, name: 'Solo from 9Pandas'},
  {id: 6, name: 'Ramzes 666'},
  {id: 7, name: 'Gabe Neuwell'},
];
let messages = [
  {id: 1, message: 'This is fine...'},
  {id: 2, message: 'KK'},
  {id: 3, message: 'qq how are you?'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
