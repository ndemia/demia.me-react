import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/Global.styled';
import { defaultTheme, dosTheme } from './theme/Themes';

export default function App() {
	const [theme, setTheme] = useState('default');

	const themeToggler = () => {
		theme === 'default' ? setTheme('dos') : setTheme('default');
	};

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
		<ThemeProvider theme={theme === 'default' ? defaultTheme : dosTheme}>
			<>
				<GlobalStyles />
				<Routes>
					<Route index element={<Home themeToggler={themeToggler} theme={theme} />}></Route>
					<Route path="/:id" element={<ProjectDetails />}></Route>
				</Routes>
			</>
		</ThemeProvider>
	);
}
