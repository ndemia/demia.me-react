import { useEffect } from 'react';
import { StyledNotFound404 } from './NotFound404.styled';
import { Link } from 'react-router-dom';

export default function NotFound404() {
	document.title = `404 - Nicolás Demianiw`;

	useEffect(() => {
		// Change back title when unmounting component.
		return () => {
			document.title = `Home - Nicolás Demianiw`;
		};
	}, []);

	return (
		<StyledNotFound404>
			<h2>Nothing here, I'm afraid.</h2>
			<span>
				Care to go <Link to={'/'}>back?</Link>
			</span>
		</StyledNotFound404>
	);
}
