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
	const [projects, setProjects] = useState({});
	const [projectContent, setProjectContent] = useState([]);

	useEffect(() => {
		fetch('../../src/data/projects.json')
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.log(error));

		const projectsList = projects.projects;

		projectsList.forEach((project) => {
			if (id === project.id) {
				setProjectContent(project.content);
			}
		});
	}, []);

	return (
		<StyledLayoutContainer>
			<Navigation></Navigation>
			<ProjectHeader title={state.title}></ProjectHeader>
			{projectContent && <RightSection content={projectContent}></RightSection>}
			<Footer></Footer>
		</StyledLayoutContainer>
	);
}
