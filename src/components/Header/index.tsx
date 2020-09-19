import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade, lighten } from 'polished';

interface Props {
	toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext);

	return (
		<Container>
			<b>Navbar</b>

			<Switch
				onChange={toggleTheme}
				checked={title === 'dark'}
				checkedIcon={false}
				uncheckedIcon={false}
				height={10}
				width={40}
				handleDiameter={20}
				onHandleColor={lighten(0.25, colors.secundary)}
				offHandleColor={lighten(0.25, colors.primary)}
				offColor={shade(0.25, colors.primary)}
				onColor={colors.secundary}
			/>
		</Container>
	);
}

export default Header;