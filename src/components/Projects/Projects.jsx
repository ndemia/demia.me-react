import { useState, useEffect } from 'react';
import { StyledProjects } from './Projects.styled';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ProjectList from '../ProjectList/ProjectList';

export default function Projects() {
	const title = 'Projects';
	const [projects, setProjects] = useState([]);

	const fetchProjects = async () => {
		let response = await fetch('/data/projects.json');
		let data = await response.json();
		return data.projects;
	};

	useEffect(() => {
		fetchProjects()
			.then((projects) => {
				setProjects(projects);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<StyledProjects>
			<ArticleTitle text={title}></ArticleTitle>
			<ProjectList projects={projects}></ProjectList>
		</StyledProjects>
	);
}
