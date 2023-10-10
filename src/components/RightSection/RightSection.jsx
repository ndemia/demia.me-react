import { StyledRightSection } from './RightSection.styled';
import Article from '../Article/Article';

export default function RightSection({ content }) {
	return (
		<StyledRightSection>
			<Article content={content}></Article>
		</StyledRightSection>
	);
}
