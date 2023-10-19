import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useProjects } from '../../context/ProjectsContext';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Navigation from '../../components/Navigation/Navigation';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import RightSection from '../../components/RightSection/RightSection';
import Footer from '../../components/Footer/Footer';

export default function ProjectDetails({ themeToggler }) {
	const { id } = useParams();
	const { state } = useLocation();
	const [projects, setProjects] = useProjects();
	const [project, setProject] = useState({});

	useEffect(() => {
		// Filter projects to find the correct one to show.
		let foundItem = projects.find((project) => project.id === id);

		// Set it.
		setProject(foundItem);

		// Change HTML title.
		document.title = `${foundItem.title} - Nicolás Demianiw`;
		return () => {
			document.title = `Home - Nicolás Demianiw`;
		};
	}, []);

	return (
		<StyledLayoutContainer>
			<Navigation />
			{project && <ProjectHeader project={project} themeToggler={themeToggler} />}
			{project && <RightSection project={project} type="project" />}
			<Footer />
		</StyledLayoutContainer>
	);
}
