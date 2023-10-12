import { useParams, useLocation } from 'react-router-dom';
import useFetchProject from '../../components/useFetchProject/useFetchProject';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Navigation from '../../components/Navigation/Navigation';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import RightSection from '../../components/RightSection/RightSection';
import Footer from '../../components/Footer/Footer';

export default function ProjectDetails() {
	const { id } = useParams();
	const { state } = useLocation();
	const [project, setProject] = useFetchProject({ id });

	return (
		<StyledLayoutContainer>
			<Navigation></Navigation>
			<ProjectHeader title={state.title}></ProjectHeader>
			{project && <RightSection content={project} type="project"></RightSection>}
			<Footer></Footer>
		</StyledLayoutContainer>
	);
}
