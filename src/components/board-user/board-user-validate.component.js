import { useState } from 'react'

import AuthService from '../../services/auth.service'

import BoardUser from './board-user.component'
import Login from '../login/login.component'

export default function BoardUserValidation() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        
        <div>
            {currentUser ? (
                < BoardUser />
            ) : (
                < Login />
            )}
        </div>
    )
}