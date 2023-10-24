import { useProjects } from '../../context/ProjectsContext';
import { StyledProjects } from './Projects.styled';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ProjectList from '../ProjectList/ProjectList';
import Loader from '../Loader/Loader';

export default function Projects() {
	const [projects, isLoading] = useProjects();
	const title = 'Projects';

	return (
		<StyledProjects>
			<ArticleTitle text={title}></ArticleTitle>
			{isLoading === true ? <Loader /> : <ProjectList projects={projects}></ProjectList>}
		</StyledProjects>
	);
}
