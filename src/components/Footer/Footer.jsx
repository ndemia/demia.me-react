import { StyledFooter } from './Footer.styled';
import InlineLink from '../InlineLink/InlineLink';

export default function Footer() {
	const currently = {
		book: 'History of Beauty',
		author: 'Umberto Eco',
		artist: 'Emma Ruth Rundle',
		album: 'Electric Guitar One',
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
					<span>Made by yours truly with 🍺, React & Styled Components. Deployed on Netlify.</span>
				</article>
			</div>
		</StyledFooter>
	);
}
