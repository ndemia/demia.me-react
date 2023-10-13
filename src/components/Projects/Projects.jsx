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
			link: '/marketplace',
			tags: ['HTML', 'CSS', 'TypeScript'],
			id: 'marketplace',
			github: 'https://github.com/ndemia/marketplace',
			demo: 'https://ndemia.github.io/marketplace/',
		},
		{
			title: 'Movie search',
			description: 'A simple movie search website that uses The Open Movie Database to retrieve the results',
			image_1x: '/images/movie_1x.png',
			image_2x: '/images/movie_2x.png',
			alt: 'Movie search results.',
			link: '/movie',
			tags: ['HTML', 'CSS', 'TypeScript'],
			id: 'movie',
			github: 'https://github.com/ndemia/movie-search',
			demo: 'https://ndemia-movie.netlify.app/',
		},
		{
			title: 'Daily UI',
			description: 'A collection of different UIs designed and built by me.',
			image_1x: '/images/dailyui_1x.png',
			image_2x: '/images/dailyui_2x.png',
			link: '/daily',
			alt: 'A calculator made over a grandient background.',
			tags: ['HTML', 'CSS', 'JavaScript'],
			id: 'daily',
			github: 'https://github.com/ndemia/daily-ui',
			demo: 'https://ndemia.github.io/daily-ui/',
		},
		{
			title: 'Flight Search',
			description: 'Flight "search" that saves and shows your previous searches the next time you visit the page.',
			image_1x: '/images/flight_1x.png',
			image_2x: '/images/flight_2x.png',
			alt: 'Flight search form showing previous results.',
			link: '/flight',
			tags: ['HTML', 'CSS', 'TypeScript'],
			id: 'flight',
			github: 'https://github.com/ndemia/flight-search',
			demo: 'https://ndemia.github.io/flight-search/',
		},
	]);

	return (
		<StyledProjects>
			<ArticleTitle text={title}></ArticleTitle>
			<ProjectList projects={projects}></ProjectList>
		</StyledProjects>
	);
}
