import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useProjects } from './context/ProjectsContext';

import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/Global.styled';
import { defaultTheme, dosTheme } from './theme/Themes';

export default function App() {
	// Save projects to context.
	const [projects, setProjects] = useProjects();
	const [theme, setTheme] = useState('default');

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

	const fetchProjects = async () => {
		let response = await fetch('/data/projects.json');
		let data = await response.json();
		return data.projects;
	};

	useEffect(() => {
		fetchProjects()
			.then((projects) => {
				setProjects(projects);
			})
			.catch((error) => {
				throw new Error(error.message);
			});

		// Check which theme is saved and activate it.
		if (localStorage.getItem('theme') === 'dos') {
			setTheme('dos');
			localStorage.setItem('theme', 'dos');
		}

		// Change favicon according to theme.
		adaptFavicon();

		// Display Firefox message if browser != Firefox.
		if (window.chrome) {
			document.querySelector('.firefox').classList.remove('hidden');
		}
	}, []);

	return (
		<ThemeProvider theme={theme === 'default' ? defaultTheme : dosTheme}>
			<>
				<GlobalStyles />
				<Routes>
					<Route index element={<Home themeToggler={themeToggler} theme={theme} />} />
					<Route path="/:id" element={<ProjectDetails themeToggler={themeToggler} />} />
				</Routes>
			</>
		</ThemeProvider>
	);
}
