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
				<article className="firefox hidden">
					<span>
						Hi again! Consider using &nbsp;
						<InlineLink to={'https://firefox.com/'} text={'Firefox'} />, a web browser that respects your privacy and the open web.
					</span>
				</article>
			</div>
		</StyledFooter>
	);
}
