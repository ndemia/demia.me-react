import { StyledProjectItem } from './ProjectItem.styled';

export default function ProjectItem({ title, description, image_1x, image_2x, alt, tags, id }) {
	return (
		<StyledProjectItem>
			<a href="/marketplace.html">
				<div>
					<figure>
						<img srcSet={`${image_1x} 700w, ${image_2x} 1280w`} sizes="(min-width: 960px) 1280px, 700px" src={image_1x} alt={alt} />
					</figure>
					<section>
						<header>
							<h4>{title}</h4>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M17.086,11L3,11L3,13L17.086,13L14.086,16L15.5,17.414L20.914,12L15.5,6.586L14.086,8L17.086,11Z" />
							</svg>
						</header>
						<p>{description}</p>
						<ul aria-label="Technologies used">
							{tags.map((tag, index) => (
								<li key={index}>{tag}</li>
							))}
						</ul>
					</section>
				</div>
			</a>
		</StyledProjectItem>
	);
}
