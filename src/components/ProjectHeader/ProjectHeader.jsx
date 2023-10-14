import { StyledProjectHeader } from './ProjectHeader.styled';
import MainTitle from '../MainTitle/MainTitle';
import InlineLink from '../InlineLink/InlineLink';

export default function ProjectHeader({ project: { title, image_1x, image_2x, alt, github, demo } }) {
	return (
		<StyledProjectHeader>
			<MainTitle title={title}></MainTitle>
			<figure>
				<img srcSet={`${image_1x} 700w, ${image_2x} 1280w`} sizes="(min-width: 960px) 1280px, 700px" src={image_1x} alt={alt} />
			</figure>
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
