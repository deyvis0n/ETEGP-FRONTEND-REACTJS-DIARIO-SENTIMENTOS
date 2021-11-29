import { Link } from "react-router-dom";
import { useState } from 'react'

import AuthService from '../../services/auth.service'

export default function NavBar() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    function logOut() {
        AuthService.logou()
    }

    return (
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <Link to={'/login'} className='navbar-brand'>
                Meu Site
             </Link>
            { currentUser ? (
                <div className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link to={'/board-user'} className='nav-link'>
                            Minha Pagina
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/board-posts'} className='nav-link'>
                            Postagens
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/profile'} className='nav-link'>
                            Perfil
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href='/login' className='nav-link' onClick={logOut}>
                            Sair
                        </a>
                    </li>
                </div>
            ) : (
                <div className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to={'/register'} className='nav-link'>
                            Criar Conta
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/login'} className='nav-link'>
                            Logar
                        </Link>
                    </li>
                </div>
            )}
        </nav>
    )
}