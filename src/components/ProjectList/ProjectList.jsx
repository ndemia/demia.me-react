import { StyledProjectList } from './ProjectList.styled';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function ProjectList({ projects, title, description, image_1x, image_2x, alt, tags, id }) {
	return (
		<StyledProjectList>
			{projects.map((project) => (
				<ProjectItem
					title={project.title}
					description={project.description}
					image_1x={project.image_1x}
					image_2x={project.image_2x}
					alt={project.alt}
					tags={project.tags}
					key={project.id}
				></ProjectItem>
			))}
		</StyledProjectList>
	);
}
