import { useProjects } from '../../context/ProjectsContext';
import { StyledProjects } from './Projects.styled';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ProjectList from '../ProjectList/ProjectList';
import Loader from '../Loader/Loader';
import MainSubtitle from '../MainSubtitle/MainSubtitle';

export default function Projects() {
	const { projects, isLoading } = useProjects();
	const subtitle = 'Projects';

	return (
		<StyledProjects>
			<MainSubtitle subtitle={subtitle}></MainSubtitle>
			{isLoading === true ? <Loader /> : <ProjectList projects={projects}></ProjectList>}
		</StyledProjects>
	);
}
