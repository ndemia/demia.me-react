import { Link } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';
import { ThemeConsumer } from 'styled-components';

export default function Navigation() {
	return (
		<StyledNavigation>
			<Link to={'/'}>
				<ThemeConsumer>
					{(theme) =>
						theme.name === 'defaultTheme' ? (
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M6.914,13L21,13L21,11L6.914,11L9.914,8L8.5,6.586L3.086,12L8.5,17.414L9.914,16L6.914,13Z" />
							</svg>
						) : (
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M8,15L6,15L6,17L8,17L8,15ZM22,11L6,11L6,9L4,9L4,11L2,11L2,13L4,13L4,15L6,15L6,13L22,13L22,11ZM8,7L6,7L6,9L8,9L8,7Z" />
							</svg>
						)
					}
				</ThemeConsumer>
				Back
			</Link>
		</StyledNavigation>
	);
}
