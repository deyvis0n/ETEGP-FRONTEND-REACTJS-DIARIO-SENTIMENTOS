import { useState } from 'react'

import AuthService from '../../services/auth.service'

export default function Profile() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        
        <div>
            <h3>Perfil {currentUser.username}</h3>
            <h2>Email {currentUser.email}</h2>
        </div>

    )
}