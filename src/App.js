import './css/style.css';
import { Logo, Menu } from './components/Header';
import Footer from './components/Footer';
import Panel from './components/Panel';
import Button from './components/Btns';
import { useState, useRef } from 'react';

const path = process.env.PUBLIC_URL;
const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
const deg = 360 / arr.length;

function App() {
	const frame = useRef(null);
	let [names, setNames] = useState(arr);

	return (
		<div className="App">
			{/* 전체 레이아웃 */}
			<figure>
				<Logo />
				<Menu />
				<section ref={frame}>
					<Panel path={path} names={names} deg={deg} />
				</section>
				<Button deg={deg} frame={frame} />
				<Footer />
			</figure>
		</div>
	);
}

export default App;
