import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Theme switch button.
		if (document.getElementById('switch')) {
			document.getElementById('switch').scrollIntoView({ behavior: 'instant' });
		}
	}, [pathname]);

	return null;
}
