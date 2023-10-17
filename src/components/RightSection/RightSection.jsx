import { StyledRightSection } from './RightSection.styled';
import Article from '../Article/Article';

export default function RightSection({ project, type, theme }) {
	return <StyledRightSection type={type}>{project.content && <Article content={project.content} theme={theme}></Article>}</StyledRightSection>;
}
