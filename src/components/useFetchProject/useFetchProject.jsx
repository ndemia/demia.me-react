import { useEffect, useState } from 'react';

export default function useFetchProject({ id }) {
	const [idToMatch, setIdToMatch] = useState(id);
	const [matchingItem, setMatchingItem] = useState([]);

	const fetchProjects = async () => {
		let response = await fetch('../../src/data/projects.json');
		let data = await response.json();
		return data.projects;
	};

	useEffect(() => {
		fetchProjects()
			.then((projects) => {
				let foundItem = projects.find((project) => project.id === id);
				setMatchingItem(foundItem.content);
			})
			.catch((error) => console.log(error));
	}, [idToMatch]);

	return [matchingItem, setMatchingItem];
}
