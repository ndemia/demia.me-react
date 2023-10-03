import { StyledLayoutContainer } from './../../components/LayoutContainer/LayoutContainer.styled';
import Header from './../../components/Header/Header';
import RightSection from './../../components/RightSection/RightSection';

export default function Home() {
	const content = [
		{ type: 'title', text: 'About' },
		{ type: 'paragraph', text: "Hi, I'm Nicolás! 👋" },
		{
			type: 'paragraph',
			text: "Fascinated by computers, I've been sitting in front of them since I was 6 years old. My first one only had MS-DOS, and it came with an amber monitor.",
		},
		{
			type: 'paragraph',
			text: " I'd love to tell you that I've been programming daily since my first course back in 2006 (HTML, CSS, Flash + ActionScript), but that wouldn't be true. I got carried away into the visual side, and studied Graphic Design. Nonetheless, my passion for computers, code and the internet remained.",
		},
		{
			type: 'paragraph',
			text: " During my career as a designer, I never left code's side for very long. I often found myself looking for ways in which I could code my design work. I always felt comfortable at the intersection between design and development, not quite satisfied to stay on either side. I just love when flat, static designs become real, usable interfaces to interact with. ",
		},
		{
			type: 'paragraph',
			text: " Today, and I find myself wanting to experience more of the other side. I now spend my time honing my front-end skills, drawing from open knowledge to teach myself, and having fun. I'm seeking a front-end position that lets me make a real impact and help a company on their journey to success. ",
		},
		{
			type: 'paragraph',
			text: " When I'm not in front of the computer you can find me cycling, watching movies, listening to music, or playing retro videogames from my childhood.  ",
		},
	];

	return (
		<StyledLayoutContainer>
			<Header></Header>
			<RightSection content={content}></RightSection>
		</StyledLayoutContainer>
	);
}
