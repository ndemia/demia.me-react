import { useState, useEffect } from 'react';

import { StyledLayoutContainer } from '../../components/LayoutContainer/LayoutContainer.styled';
import Header from '../../components/Header/Header';
import RightSection from '../../components/RightSection/RightSection';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

export default function Home() {
	const [description, setDescription] = useState({});

	const fetchDescription = async () => {
		let response = await fetch('/data/description.json');
		let data = await response.json();
		return data;
	};

	useEffect(() => {
		fetchDescription()
			.then((description) => {
				setDescription(description);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<StyledLayoutContainer>
			<Header title="Nicolás Demianiw"></Header>
			{description && <RightSection project={description} type="description"></RightSection>}
			<Main></Main>
			<Footer></Footer>
		</StyledLayoutContainer>
	);
}
