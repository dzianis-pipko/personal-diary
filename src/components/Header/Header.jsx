import Logo from '../Logo/Logo';
import SelectUser from '../SelectUser/SelectUser';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {

	return (
		<>
			<Logo image={logos[1]} />
			<SelectUser />
		</>
	);
}

export default Header;