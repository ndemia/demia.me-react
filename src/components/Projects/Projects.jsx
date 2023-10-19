import { useState, useEffect } from 'react';
import { StyledProjects } from './Projects.styled';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ProjectList from '../ProjectList/ProjectList';
import { useProjects } from '../../context/ProjectsContext';

export default function Projects() {
	const title = 'Projects';
	const [projects, setProjects] = useProjects();

	return (
		<StyledProjects>
			<ArticleTitle text={title}></ArticleTitle>
			<ProjectList projects={projects}></ProjectList>
		</StyledProjects>
	);
}
