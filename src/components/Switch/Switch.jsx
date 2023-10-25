import { StyledSwitch } from './Switch.styled';

export default function Switch({ themeToggler }) {
	return (
		<StyledSwitch id="switch" aria-label="Activate DOS theme" onPointerUp={themeToggler}>
			A:\&#62;
			<span>_</span>
		</StyledSwitch>
	);
}
