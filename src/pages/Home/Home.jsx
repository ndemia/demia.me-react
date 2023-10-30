import { useState, useEffect } from 'react';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Switch from '../../components/Switch/Switch';
import Header from '../../components/Header/Header';
import RightSection from '../../components/RightSection/RightSection';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

export default function Home({ themeToggler }) {
	const [description, setDescription] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const fetchDescription = async () => {
		let response = await fetch('/data/description.json');
		let data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchDescription()
			.then((description) => {
				setDescription(description);
				setIsLoading(false);
			})
			.catch((error) => {
				throw new Error(error.message);
				setIsLoading(false);
			});
	}, []);

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
