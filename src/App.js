import './App.css';
import React from 'react';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';


class App extends React.Component {

compoentId = Date.now().toString();
set = false;
componentDidMount() {

	
	
if(this.set) return;
this.set=true;
		let deck = new Reveal({
			plugins: [ window.RevealMarkdown,Highlight,Math,Notes,Search,Zoom, window.RevealMenu   ]
		  })
		  deck.initialize({
			controls: true,
			  progress: true,
			  history: false,
			  center: true,
			  transition: 'zoom',
			  slideNumber: 'c/t',
		  
			  menu: {
				side: 'left',
				numbers: true,
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

	

}
render() {

	const search = window.location.search;
	const params = new URLSearchParams(search);
	const item = params.get('cours');
	var cours = parseInt(item);
	if(!cours || isNaN(cours)) cours=1;
	cours = (cours+'').padStart(2,"0");
var lien = "https://raw.githubusercontent.com/cem-solutions-technologiques/cem-solutions-technologiques.github.io/main/docs/Contenu/cours-"+cours+".md";
	return (
		<div>
		<div>
	
		<div className="slides">
		<section  data-markdown={lien}
                         data-separator="^\n----  ----\n$"
                         data-separator-vertical="^\n----\n$">
                	</section>
					</div>
				
					</div>
					</div>
	);
}
}
export default App;

