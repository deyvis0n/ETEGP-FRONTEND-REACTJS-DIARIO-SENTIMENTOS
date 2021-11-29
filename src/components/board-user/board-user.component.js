import { useState } from 'react'

import AuthService from '../../services/auth.service'
import UserService from '../../services/user.service'

export default function BoardUser() {
    const [currentUser] = useState(AuthService.getCurrentUser)
    const [getUserPost, setGetUserPost] = useState(getPost)

    const [state, setState] = useState({
        userPost: ''
    })

    function handleState(event) {
        state[event.target.name] = event.target.value
        setState(state)
    }

    function handlePost(event) {
        event.preventDefault()
        UserService.postUserPost(state.userPost, currentUser.username)
        window.location.reload()
    }

    function getPost() {
        const getPostValue = async () => {
            const value = await UserService.getUserPost()

            setGetUserPost(value)
            
        }
        getPostValue()
    }

    function deletePost(event) {
        event.preventDefault()
        UserService.deleteUserPost(event.target.deletepost.value)
        window.location.reload()
    }

    return(
        <div>
            <h2>Minha Pagina</h2>

            Bem vindo {currentUser.username}

            <form onSubmit={handlePost}>
                <div className='form-group'>
                    <label htmlFor='userPost'></label>
                    <textarea 
                    className='form-control' 
                    name='userPost' 
                    rows='3' 
                    placeholder='Como foi seu dia hoje?'
                    onChange={handleState}
                    ></textarea>
                </div>
                
                <div className='form-group'>
                    <button
                        type='submit'
                        className='btn btn-primary btn-blck'
                    >Postar</button>
                </div>
            </form>
            {getUserPost && 
                getUserPost.map((value) =>
                <div className="card border-dark mb-3" key={value._id}>
                    <div className="card-header bg-transparent border-dark">Postado Por {value.username}</div>
                    <div className="card-body text-dark">
                        <p className="card-text">{value.userMessage}</p>
                    </div>
                    <div className="card-footer bg-transparent border-dark">{value.createOn}
                        <form onSubmit={deletePost}>
                            <button
                            name='deletepost'
                            type='submit'
                            className='btn btn-primary btn-blck'
                            value={value._id}
                            >Deletar</button>
                        </form>
                    </div>
                </div>
                )}

        </div>
    )
}