import { StyledImage } from './Image.styled';

export default function Image({ image_1x, image_2x, alt }) {
	return (
		<StyledImage>
			<img
				width={'700'}
				height={'394'}
				srcSet={`${image_1x} 700w, ${image_2x} 1280w`}
				sizes="(min-width: 960px) 1280px, 700px"
				src={image_1x}
				alt={alt}
			/>
		</StyledImage>
	);
}
