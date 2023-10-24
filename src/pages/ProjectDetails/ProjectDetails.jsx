import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProjects } from '../../context/ProjectsContext';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Navigation from '../../components/Navigation/Navigation';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import RightSection from '../../components/RightSection/RightSection';
import Footer from '../../components/Footer/Footer';

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
			<Navigation />
			{isLoading === true ? (
				<div>Loading...</div>
			) : (
				<>
					<ProjectHeader project={filteredProject} themeToggler={themeToggler} />
					<RightSection project={filteredProject} type="project" />
				</>
			)}
			<Footer />
		</StyledLayoutContainer>
	);
}
