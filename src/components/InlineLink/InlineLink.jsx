import { StyledInlineLink } from './InlineLink.styled';

export default function InlineLink({ to, text }) {
	return (
		<StyledInlineLink href={to} target="_blank" rel="noopener noreferrer">
			{text}
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M17,14L17,20C17,20 4,20 4,20C4,20 4,6 4,6C4,6 10,6 10,6L10,4L2,4L2,22L19,22L19,14L17,14ZM18.586,4L9.586,13L11,14.414L20,5.414L20,9L22,9L22,2L15,2L15,4L18.586,4Z" />
			</svg>
		</StyledInlineLink>
	);
}
