import { ThemeConsumer } from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledProjectItem } from './ProjectItem.styled';

export default function ProjectItem({ title, description, image_1x, image_2x, alt, link, tags, id }) {
	return (
		<ThemeConsumer>
			{(theme) => (
				<StyledProjectItem>
					<Link to={link} state={title}>
						<div>
							<figure>
								<img srcSet={`${image_1x} 700w, ${image_2x} 1280w`} sizes="(min-width: 960px) 1280px, 700px" src={image_1x} alt={alt} />
							</figure>
							<section>
								<header>
									<h4>{title}</h4>
									{theme.name === 'defaultTheme' ? (
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path d="M17.086,11L3,11L3,13L17.086,13L14.086,16L15.5,17.414L20.914,12L15.5,6.586L14.086,8L17.086,11Z" />
										</svg>
									) : (
										<svg viewBox="0 0 24 24" aria-hidden="true">
											<path d="M18,17L18,15L20,15L20,13L22,13L22,11L20,11L20,9L18,9L18,7L16,7L16,9L18,9L18,11L2,11L2,13L18,13L18,15L16,15L16,17L18,17Z" />
										</svg>
									)}
								</header>
								<p>{description}</p>
								<ul aria-label="Technologies used">
									{tags.map((tag, index) => (
										<li key={index}>{tag}</li>
									))}
								</ul>
							</section>
						</div>
					</Link>
				</StyledProjectItem>
			)}
		</ThemeConsumer>
	);
}
