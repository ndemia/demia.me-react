import { StyledArticle } from './Article.styled';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import ArticleParagraph from '../ArticleParagraph/ArticleParagraph';
import InlineLink from '../InlineLink/InlineLink';

export default function Article({ content }) {
	const renderParagraphWithLinks = (text) => {
		const textParts = text.split(/\[([^\]]+)\]\(([^)]+)\)/g);

		return textParts.map((part, index) => {
			if (index % 3 === 1) {
				// This is a link text
				const linkText = part;
				const linkUrl = textParts[index + 1];
				return <InlineLink key={index} to={linkUrl} text={linkText}></InlineLink>;
			} else if (index % 3 === 2) {
				// This is a link URL
				return null;
			} else {
				// This is regular text
				return `${part}`;
			}
		});
	};

	return (
		<StyledArticle>
			{content.map((item, index) => {
				if (item.type === 'title') {
					return <ArticleTitle key={index} text={item.text}></ArticleTitle>;
				} else if (item.type === 'paragraph') {
					return <ArticleParagraph key={index} text={renderParagraphWithLinks(item.text)}></ArticleParagraph>;
				} else {
					return null;
				}
			})}
		</StyledArticle>
	);
}
