import { StyledRightSection } from './RightSection.styled';
import Article from '../Article/Article';
import Loader from '../Loader/Loader';

export default function RightSection({ project, type, isLoading }) {
	return <StyledRightSection type={type}>{isLoading === true ? <Loader /> : <Article content={project.content} />}</StyledRightSection>;
}
