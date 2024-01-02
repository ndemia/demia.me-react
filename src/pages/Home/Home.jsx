import { useState, useEffect } from 'react';
import { useProjects } from '../../context/ProjectsContext';
import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Switch from '../../components/Switch/Switch';
import Header from '../../components/Header/Header';
import RightSection from '../../components/RightSection/RightSection';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

export default function Home({ themeToggler }) {
	const { description, isLoading } = useProjects();

	return (
		<StyledLayoutContainer>
			<Switch themeToggler={themeToggler} />
			<Header title="Nicolás Demianiw" />
			{description && <RightSection type="description" project={description} isLoading={isLoading} />}
			<Main />
			<Footer />
		</StyledLayoutContainer>
	);
}
