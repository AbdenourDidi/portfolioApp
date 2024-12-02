import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-color: #F3F3F3;
  padding: 6px 13px 6px 13px;
  gap: 10px;
  border-radius: 50px;
`;

const Link = styled(NavLink)`
  display: block;
  border-radius: 50px;
  padding: 10px 30px 10px 30px;
  height: auto;
  text-decoration: none;
  color: black;
  font-size: 14px;
  transition: background-color 0.15s ease-in;
  &.active{
    background-color: white;
    transition: background-color 0.15s ease-in;
  }
`;


const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Link
          to="/"
        >
          Acceuil
        </Link>
        <Link
          to="/projects"
        >
          Projets
        </Link>
        <Link
          to="/skills"
        >
          Skills
        </Link>
      </Ul>
    </Nav>
  )
}

export default Navbar