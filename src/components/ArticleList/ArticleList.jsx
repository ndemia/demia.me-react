import { StyledArticleList } from './ArticleList.styled';

export default function ArticleList({ listItems }) {
	return (
		<StyledArticleList>
			{listItems.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</StyledArticleList>
	);
}
