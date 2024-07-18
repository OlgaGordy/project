import logo from './logo.svg';
import './App.css';

export const App = () => {
	//Императивный - Мы даем инструкцию, что нужно создать объект даты и извлечь год.
	const currentYear = new Date().getFullYear();
	// Декларативный - Мы описываем, как должно выглядеть наше приложение без инструкции
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>Current Year: {currentYear}</p>
			</header>
		</div>
	);
};
