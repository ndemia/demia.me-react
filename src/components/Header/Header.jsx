import MainTitle from '../MainTitle/MainTitle';
import MainSubtitle from '../MainSubtitle/MainSubtitle';
import Socials from '../Socials/Socials';
import Switch from '../Switch/Switch';

import { StyledHeader } from './Header.styled';

export default function Header({ title, themeToggler }) {
	return (
		<StyledHeader>
			<MainTitle title={title}></MainTitle>
			<MainSubtitle></MainSubtitle>
			<Socials></Socials>
			<Switch themeToggler={themeToggler}></Switch>
		</StyledHeader>
	);
}
