import { GlobalStyles } from './theme/Global.styled';
import DefaultTheme from './theme/default/DefaultTheme';

import Home from './pages/Home/Home';

export default function App() {
	return (
		<DefaultTheme>
			<>
				<GlobalStyles />
				<Home />
			</>
		</DefaultTheme>
	);
}
