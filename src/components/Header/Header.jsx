import MainTitle from './../MainTitle/MainTitle';
import MainSubtitle from './../MainSubtitle/MainSubtitle';

import { StyledHeader } from './Header.styled';

export default function Header() {
	return (
		<StyledHeader>
			<MainTitle></MainTitle>
			<MainSubtitle></MainSubtitle>
		</StyledHeader>
	);
}
