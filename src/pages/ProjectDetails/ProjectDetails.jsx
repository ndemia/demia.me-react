import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Navigation from '../../components/Navigation/Navigation';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import RightSection from '../../components/RightSection/RightSection';
import Footer from '../../components/Footer/Footer';

export default function ProjectDetails() {
	const { id } = useParams();
	const { state } = useLocation();
	const [project, setProject] = useState({});

	const fetchProjects = async () => {
		let response = await fetch('../../src/data/projects.json');
		let data = await response.json();
		return data.projects;
	};

	useEffect(() => {
		fetchProjects()
			.then((projects) => {
				let foundItem = projects.find((project) => project.id === id);
				setProject(foundItem);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<StyledLayoutContainer>
			<Navigation></Navigation>
			{project && <ProjectHeader project={project}></ProjectHeader>}
			{project && <RightSection project={project} type="project"></RightSection>}
			<Footer></Footer>
		</StyledLayoutContainer>
	);
}