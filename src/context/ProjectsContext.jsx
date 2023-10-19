import { createContext, useState, useContext, useEffect } from 'react';

// Context object.
const ProjectsContext = createContext();

// Create provider and its functionality.
function ProjectsProvider(props) {
	const [projects, setProjects] = useState([]);
	return <ProjectsContext.Provider value={[projects, setProjects]} {...props} />;
}

// Custom hook to access the context's object's values.
function useProjects() {
	const context = useContext(ProjectsContext);
	if (!context) throw new Error('Not inside the Provider.');
	return context;
}

export { useProjects, ProjectsProvider };
