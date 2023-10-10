import { useState } from 'react';
import { StyledProjects } from './Projects.styled';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ProjectList from '../ProjectList/ProjectList';

export default function Projects() {
	const title = 'Projects';
	const [projects, setProjects] = useState([
		{
			title: 'Marketplace',
			description: 'A small marketplace to buy items. It comes with optional sound effects to enhance your experience.',
			image_1x: '/images/marketplace_1x.png',
			image_2x: '/images/marketplace_2x.png',
			alt: 'A modal window serving as a market for medieval items like swords and shields.',
			tags: ['HTML', 'CSS', 'TypeScript'],
			id: 1,
		},
		{
			title: 'Movie search',
			description: 'A simple movie search website that uses The Open Movie Database to retrieve the results',
			image_1x: '/images/movie_1x.png',
			image_2x: '/images/movie_2x.png',
			alt: 'Movie search results.',
			tags: ['HTML', 'CSS', 'TypeScript'],
			id: 2,
		},
		{
			title: 'Daily UI',
			description: 'A collection of different UIs designed and built by me.',
			image_1x: '/images/dailyui_1x.png',
			image_2x: '/images/dailyui_2x.png',
			alt: 'A calculator made over a grandient background.',
			tags: ['HTML', 'CSS', 'JavaScript'],
			id: 3,
		},
		{
			title: 'Flight Search',
			description: 'Flight "search" that saves and shows your previous searches the next time you visit the page.',
			image_1x: '/images/flight_1x.png',
			image_2x: '/images/flight_2x.png',
			alt: 'Flight search form showing previous results.',
			tags: ['HTML', 'CSS', 'TypeScript'],
			id: 4,
		},
	]);

	return (
		<StyledProjects>
			<ArticleTitle text={title}></ArticleTitle>
			<ProjectList projects={projects}></ProjectList>
		</StyledProjects>
	);
}
