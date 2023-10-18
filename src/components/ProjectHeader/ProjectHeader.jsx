import { StyledProjectHeader } from './ProjectHeader.styled';
import MainTitle from '../MainTitle/MainTitle';
import InlineLink from '../InlineLink/InlineLink';
import Image from '../Image/Image';

export default function ProjectHeader({ project: { title, image_1x, image_2x, alt, github, demo } }) {
	return (
		<StyledProjectHeader>
			<MainTitle title={title}></MainTitle>
			<Image image_1x={image_1x} image_2x={image_2x} alt={alt} />
			<ul>
				<li>
					<InlineLink to={github} text={'GitHub'}></InlineLink>
				</li>
				<li>
					<InlineLink to={demo} text={'Demo'}></InlineLink>
				</li>
			</ul>
		</StyledProjectHeader>
	);
}
