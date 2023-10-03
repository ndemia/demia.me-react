import { StyledArticle } from './Article.styled';
import ArticleTitle from './../ArticleTitle/ArticleTitle';
import ArticleParagraph from './../ArticleParagraph/ArticleParagraph';

export default function Article({ content }) {
	return (
		<StyledArticle>
			{content.map((item, index) => {
				if (item.type === 'title') {
					return <ArticleTitle key={index} text={item.text}></ArticleTitle>;
				} else if (item.type === 'paragraph') {
					return <ArticleParagraph key={index} text={item.text}></ArticleParagraph>;
				} else {
					return null;
				}
			})}
		</StyledArticle>
	);
}
