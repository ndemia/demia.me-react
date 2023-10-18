import { ThemeConsumer } from 'styled-components';
import { StyledInlineLink } from './InlineLink.styled';

export default function InlineLink({ to, text }) {
	return (
		<ThemeConsumer>
			{(theme) => (
				<StyledInlineLink href={to} target="_blank" rel="noopener noreferrer">
					{text}
					{theme.name === 'defaultTheme' ? (
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M17,14L17,20C17,20 4,20 4,20C4,20 4,6 4,6C4,6 10,6 10,6L10,4L2,4L2,22L19,22L19,14L17,14ZM18.586,4L9.586,13L11,14.414L20,5.414L20,9L22,9L22,2L15,2L15,4L18.586,4Z" />
						</svg>
					) : (
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M21,3L3,3L3,5L16,5L16,8L19,8L19,21L21,21L21,3ZM7,17L4,17L4,20L7,20L7,17L10,17L10,14L7,14L7,17ZM13,11L10,11L10,14L13,14L13,11L16,11L16,8L13,8L13,11Z" />
						</svg>
					)}
				</StyledInlineLink>
			)}
		</ThemeConsumer>
	);
}
