import { StyledFooter } from './Footer.styled';
import InlineLink from '../InlineLink/InlineLink';

export default function Footer() {
	const currently = {
		book: 'The Unbearable Lightness of Being',
		author: 'Milan Kundera',
		artist: 'Bass Communion',
		album: 'Bass Communion II',
	};

	return (
		<StyledFooter>
			<div>
				<article>
					<p>Currently reading:</p>
					<p>
						<span>{currently.book} </span>
						by
						<span> {currently.author}</span>
					</p>
				</article>
				<article>
					<p>Latest commit's soundtrack:</p>
					<p>
						<span>{currently.artist}</span> - <span>{currently.album}</span>
					</p>
				</article>
				<article>
					<p>Built with React & Styled Components. Deployed on Netlify. Made with 🍺</p>
				</article>
			</div>
		</StyledFooter>
	);
}
