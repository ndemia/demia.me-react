import { StyledProjectHeader } from './ProjectHeader.styled';
import MainTitle from '../MainTitle/MainTitle';

export default function ProjectHeader({ title }) {
	return (
		<StyledProjectHeader>
			<MainTitle title={title}></MainTitle>
		</StyledProjectHeader>
	);
}
