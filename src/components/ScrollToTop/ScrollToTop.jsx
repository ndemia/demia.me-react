import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// Theme switch button.
		document.querySelector('.sc-eDLKEg').scrollIntoView();
	}, [pathname]);

	return null;
}
