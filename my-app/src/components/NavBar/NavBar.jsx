import React from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import './NavBar.css'

function NavBar() {

    return (


        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to='/' className="nav-link " >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <NavDropdown title="Categoria" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to='/categoria/Remeras' className="nav-link " >
                            Remeras
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/categoria/Pantalon' className="nav-link " >
                            Pantalon
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>

            </li>
            <li className="nav-item">
                <Link to='/contacto' className="nav-link " >
                    contacto
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/cart' className="nav-link " >
                    <CartWidget />
                </Link>
            </li>
        </ul>

    )
}

export default NavBar
