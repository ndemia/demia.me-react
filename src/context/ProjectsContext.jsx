import { createContext, useState, useContext, useEffect } from 'react';

// Context object.
const ProjectsContext = createContext();

// Create provider and its functionality.
function ProjectsProvider(props) {
	const [description, setDescription] = useState([]);
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchDescription = async () => {
		const response = await fetch('/data/description.json');
		const data = await response.json();
		return data.content;
	};

	const fetchProjects = async () => {
		const response = await fetch('/data/projects.json');
		const data = await response.json();
		return data.projects;
	};

	const fetchData = async () => {
		try {
			const [descriptionData, projectsData] = await Promise.all([fetchDescription(), fetchProjects()]);
			setDescription(descriptionData);
			setProjects(projectsData);
			setIsLoading(false);
		} catch (error) {
			console.log('error', error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <ProjectsContext.Provider value={{ description, projects, isLoading }} {...props} />;
}

// Custom hook to access the context's object's values.
function useProjects() {
	const context = useContext(ProjectsContext);
	if (!context) throw new Error('Not inside the Provider.');
	return context;
}

export { useProjects, ProjectsProvider };
