import './Header.css';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {

	return (
		<div>
			<img className='logo' src={logos[1]} alt="Логотип журнала" />;
		</div>
	);
}

export default Header;