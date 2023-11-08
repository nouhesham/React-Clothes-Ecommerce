import './Nav.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Badge, NavItem } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';

const Navbarsection = () => {
	const counterGlobalState = useSelector((store) => store.counter.counter);
	return (
		<Navbar className='nav border-bottom bg-white sticky-top' data-bs-theme='light' expand='sm'>
			<Container>
				<Navbar.Brand href='/'>Bandage</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbar-nav' />
				<Navbar.Collapse id='navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/shop'>Shop</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/blog'>Blog</Nav.Link>
						<Nav.Link href='/login'>Login</Nav.Link>
						<Nav.Link href='/register'>Register</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
						<NavItem>
              {/**You cant use href in react in the navbar as href refresh the page that leads to lose redux data */}
							<Link to={'/cart'}>
								<HiShoppingCart size={30} />
								<Badge bg='primary'>{counterGlobalState}</Badge>
							</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navbarsection;
