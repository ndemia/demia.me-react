import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

import { GlobalStyles } from './theme/Global.styled';
import DefaultTheme from './theme/default/DefaultTheme';

export default function App() {
	// Change favicon according to theme
	const checkDarkMode = () => {
		// In case browser's dark theme is enabled. Returns boolean
		let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		// Check for DOS mode as it has its own favicon
		let isDos = document.documentElement.classList.contains('dos-theme');

		// If dark true, and there's no DOS mode, show white favicon
		if (isDark === true && isDos === false) {
			document.querySelector('link[type="image/svg+xml"]').href = '/favicons/favicon-white.svg';
		}
	};

	useEffect(() => {
		checkDarkMode();
	}, []);

	return (
		<DefaultTheme>
			<>
				<GlobalStyles />
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/:id" element={<ProjectDetails />}></Route>
				</Routes>
			</>
		</DefaultTheme>
	);
}
