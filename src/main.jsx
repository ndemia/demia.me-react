import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ProjectsProvider } from './context/ProjectsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ProjectsProvider>
			<App />
		</ProjectsProvider>
	</BrowserRouter>
);
