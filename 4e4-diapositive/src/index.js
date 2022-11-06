import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/solarized.css'


import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';


let deck = new Reveal({
  plugins: [ window.RevealMarkdown,Highlight,Math,Notes,Search,Zoom, window.RevealMenu   ]
})
deck.initialize({
  controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'zoom',
    slideNumber: 'c/t',

    menu: {
      side: 'left',
      numbers: false,
      titleSelector: 'h1, h2, h3, h4, h5, h6',
      hideMissingTitles: false,
      markers: false,
      custom: false,
      transitions: true,
      openButton: true,
      openSlideNumber: true,
      keyboard: true
  },

});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
