import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../../context/ProjectsContext';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Switch from '../../components/Switch/Switch';
import Navigation from '../../components/Navigation/Navigation';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import RightSection from '../../components/RightSection/RightSection';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import NotFound404 from '../../components/NotFound404/NotFound404';

export default function ProjectDetails({ themeToggler }) {
	const { id } = useParams();
	const [projects, isLoading] = useProjects();
	const filteredProject = projects.find((project) => project.id === id);

	// Change HTML title.
	if (filteredProject) {
		document.title = `${filteredProject.title} - Nicolás Demianiw`;
	}

	useEffect(() => {
		// Change back title when unmounting component.
		return () => {
			document.title = `Home - Nicolás Demianiw`;
		};
	}, []);

	return (
		<StyledLayoutContainer>
			{!filteredProject ? (
				<NotFound404 />
			) : (
				<>
					<Switch themeToggler={themeToggler} />
					<Navigation />
					{filteredProject && <ProjectHeader project={filteredProject} />}
					{filteredProject && <RightSection type="project" project={filteredProject} isLoading={isLoading} />}
					<Footer />
				</>
			)}
		</StyledLayoutContainer>
	);
}
