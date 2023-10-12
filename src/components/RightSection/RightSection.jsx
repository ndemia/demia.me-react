import { StyledRightSection } from './RightSection.styled';
import Article from '../Article/Article';

export default function RightSection({ content, type }) {
	return (
		<StyledRightSection type={type}>
			<Article content={content}></Article>
		</StyledRightSection>
	);
}
