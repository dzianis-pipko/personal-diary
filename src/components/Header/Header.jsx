import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {

	return (
		<div>
			<img className={styles.logo} src={logos[1]} alt="Логотип журнала" />;
			<SelectUser />
		</div>
	);
}

export default Header;