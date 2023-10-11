import { Link } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

export default function Navigation() {
	return (
		<StyledNavigation>
			<Link to={'/'}>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M6.914,13L21,13L21,11L6.914,11L9.914,8L8.5,6.586L3.086,12L8.5,17.414L9.914,16L6.914,13Z" />
				</svg>
				Back
			</Link>
		</StyledNavigation>
	);
}
