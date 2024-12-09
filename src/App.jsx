import React from 'react';
import './App.css';

const sounds = [
  {keyBoard: 'Q', id:'Heater 1', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'},
  {keyBoard: 'W', id:'Heater 2', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'},
  {keyBoard: 'E', id:'Heater 3', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'},
  {keyBoard: 'A', id:'Heater 4', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'},
  {keyBoard: 'S', id:'Clap', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'},
  {keyBoard: 'D', id:'Open-HH', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'},
  {keyBoard: 'Z', id:"Kick-n'-Hat", src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'},
  {keyBoard: 'X', id:'Kick', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'},
  {keyBoard: 'C', id:'Closed-HH', src:'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'},
]

class AppReact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lastKeyPlayed: '',
		}
		this.clickPlayAudio = this.clickPlayAudio.bind(this);
		this.keyboardPlayAudio = this.keyboardPlayAudio.bind(this);
	}

	//existe um bug que se você ficar salvando o codigo e ele vai acumulando os eventlisteners. caso não passe 
	componentDidMount() {
		document.addEventListener('keydown', this.keyboardPlayAudio)
	}
	
	keyboardPlayAudio(event) {
		console.log(event.key)
		sounds.forEach((sound) => {
			if(event.key.toUpperCase() === sound.keyBoard) {
				this.setState({lastKeyPlayed: sound.id});
				document.querySelector(`audio#${event.key.toUpperCase()}`).play();
			}
		})
	}

	clickPlayAudio(event) {
		console.log(event)
		event.target.querySelector('audio').play();
		this.setState({lastKeyPlayed: event.target.id});
	}

	render() {
		return (
			<div id="drum-machine">
				<div id="drum-machine" class="pad-bank">
					{sounds.map((sound, index)=>{ return (
						<div className="drum-pad" id={sound.id} key={index} onClick={this.clickPlayAudio}>
							<audio className="clip" id={sound.keyBoard} src={sound.src}></audio>
							{sound.keyBoard}
						</div>
					)})}
				</div>
				<p id="display">
					{this.state.lastKeyPlayed}
				</p>
			</div>
		);
	}
}

export default AppReact;