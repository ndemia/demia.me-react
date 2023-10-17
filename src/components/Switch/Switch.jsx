import { StyledSwitch } from './Switch.styled';

export default function Switch({ themeToggler }) {
	return (
		<StyledSwitch aria-label="Activate DOS theme" onPointerUp={themeToggler}>
			A:\>
			<span>_</span>
		</StyledSwitch>
	);
}
