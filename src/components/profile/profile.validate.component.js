import { useState } from 'react'

import AuthService from '../../services/auth.service'

import Profile from './profile.component'
import Login from '../login/login.component'

export default function ProfileValidate() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        
        <div>
            {currentUser ? (
                < Profile />
            ) : (
                < Login />
            )}
        </div>
    )
}