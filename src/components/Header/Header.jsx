import MainTitle from '../MainTitle/MainTitle';
import MainSubtitle from '../MainSubtitle/MainSubtitle';
import Socials from '../Socials/Socials';

import { StyledHeader } from './Header.styled';

export default function Header({ title }) {
	return (
		<StyledHeader>
			<MainTitle title={title}></MainTitle>
			<MainSubtitle></MainSubtitle>
			<Socials></Socials>
		</StyledHeader>
	);
}
