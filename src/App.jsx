import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails/PojectDetails';

import { GlobalStyles } from './theme/Global.styled';
import DefaultTheme from './theme/default/DefaultTheme';

export default function App() {
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
