import { useState } from 'react'

import AuthService from '../../services/auth.service'

export default function Profile() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        
        <div>
            <h2>Perfil {currentUser.username}</h2>
            <h3>Email {currentUser.email}</h3>
        </div>

    )
}