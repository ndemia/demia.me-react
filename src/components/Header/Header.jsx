import MainTitle from './../MainTitle/MainTitle';
import MainSubtitle from './../MainSubTitle/MainSubTitle';

import { StyledHeader } from './Header.styled';

export default function Header() {
	return (
		<StyledHeader>
			<MainTitle></MainTitle>
			<MainSubtitle></MainSubtitle>
		</StyledHeader>
	);
}
