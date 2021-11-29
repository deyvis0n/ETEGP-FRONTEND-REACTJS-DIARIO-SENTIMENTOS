import { useState } from 'react'

import AuthService from '../../services/auth.service'

import BoardPosts from './board-posts.component'
import Login from '../login/login.component'

export default function BoardPostValidation() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        
        <div>
            {currentUser ? (
                < BoardPosts />
            ) : (
                < Login />
            )}
        </div>
    )
}