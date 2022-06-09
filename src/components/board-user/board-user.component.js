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

    async function handlePost(event) {
        event.preventDefault()
        await UserService.postUserPost(state.userPost)
        window.location.reload()
    }

    function getPost() {
        const getPostValue = async () => {
            const values = await UserService.getUserPost()
            for (const value of values) {
                const date = new Date(value.date)
                const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
                const formatedDate = ((date.getHours())) + ' horas e ' + ((date.getMinutes())) + ' minutos do dia ' + ((date.getDate())) + ' de ' + meses[((date.getMonth()))] + ' de ' + ((date.getFullYear()))
                Object.assign(value, { date: formatedDate })
            }
            const reverseValue = values.reverse()
            setGetUserPost(reverseValue)
        }
        getPostValue()
    }

    async function deletePost(event) {
        event.preventDefault()
        await UserService.deleteUserPost(event.target.deletepost.value)
        window.location.reload()
    }

    return(
        <div className="flex-box user-container">
            <div className="flex-item fi-user">
                <img
                    src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    alt='profile-img'
                    className='profile-img-card'
                />
                <h2>{currentUser.name}</h2>
            </div>
            <div className="flex-item fi-post">
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
                        
                    <div className='form-group btn-form'>
                        <button
                            type='submit'
                            className='btn btn-primary btn-blck'
                        >Postar</button>
                    </div>
                </form>
                <hr></hr>
                <h2>Minhas Postagens</h2>
                {getUserPost && 
                    getUserPost.map((value) =>
                    <div>
                        <div className='card border-dark mb-3' key={value}>
                            <div className='card-header bg-transparent border-gray flex-box'>
                                <img
                                    src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
                                    alt='profile-img'
                                    className='post-img-card'
                                />
                                <div className='card-header-text'>
                                    {value.userName}
                                </div>
                            </div>
                            <div className='card-body text-dark'>
                                <p className='card-text'>{value.message}</p>
                            </div>
                            <div className='card-footer bg-transparent border-gray'>Postado as {value.date}
                                <form onSubmit={deletePost}>
                                    <button
                                    name='deletepost'
                                    type='submit'
                                    className='btn btn-primary btn-sm btn-post'
                                    value={value.id}
                                    >Deletar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}