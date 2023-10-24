import { createContext, useState, useContext, useEffect } from 'react';

// Context object.
const ProjectsContext = createContext();

// Create provider and its functionality.
function ProjectsProvider(props) {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchProjects = async () => {
		let response = await fetch('/data/projects.json');
		let data = await response.json();
		return data.projects;
	};

	useEffect(() => {
		fetchProjects()
			.then((projects) => {
				setProjects(projects);
				setIsLoading(false);
			})
			.catch((error) => {
				throw new Error(error.message);
				setIsLoading(false);
			});
	}, []);
	return <ProjectsContext.Provider value={[projects, isLoading]} {...props} />;
}

// Custom hook to access the context's object's values.
function useProjects() {
	const context = useContext(ProjectsContext);
	if (!context) throw new Error('Not inside the Provider.');
	return context;
}

export { useProjects, ProjectsProvider };
