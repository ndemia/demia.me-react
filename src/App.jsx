import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useProjects } from './context/ProjectsContext';

// Components.
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFound404 from './components/NotFound404/NotFound404';

// Styles.
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/Global.styled';
import { defaultTheme, dosTheme } from './theme/Themes';

export default function App() {
	const [theme, setTheme] = useState('default');

	// Function that sets the active theme.
	const themeToggler = () => {
		if (theme === 'default') {
			setTheme('dos');
			localStorage.setItem('theme', 'dos');
		} else {
			setTheme('default');
			localStorage.setItem('theme', 'default');
		}
	};

	// Change favicon according to theme.
	const adaptFavicon = () => {
		// Check for browser's active theme. Returns a boolean.
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const activeTheme = theme;
		const faviconLink = document.querySelector('link[type="image/svg+xml"]');

		if (activeTheme === 'dos') {
			faviconLink.href = '/favicons/dos-favicon.ico';
		} else if (activeTheme === 'default' && isDark === true) {
			faviconLink.href = '/favicons/favicon-white.svg';
		} else {
			faviconLink.href = '/favicons/favicon-black.svg';
		}
	};

	useEffect(() => {
		// Check which theme is saved and activate it.
		if (localStorage.getItem('theme') === 'dos') {
			setTheme('dos');
			localStorage.setItem('theme', 'dos');
		}

		// Change favicon according to theme.
		adaptFavicon();
	}, []);

	return (
		<ThemeProvider theme={theme === 'default' ? defaultTheme : dosTheme}>
			<>
				<GlobalStyles />
				<ScrollToTop />
				<Routes>
					<Route path="*" element={<NotFound404 />} />
					<Route path="/" element={<Home themeToggler={themeToggler} theme={theme} />} />
					<Route path="/project/:id" element={<ProjectDetails themeToggler={themeToggler} />} />
				</Routes>
			</>
		</ThemeProvider>
	);
}
