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
        UserService.postUserPost(state.userPost)
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

    function deletePost(event) {
        event.preventDefault()
        UserService.deleteUserPost(event.target.deletepost.value)
        window.location.reload()
    }

    return(
        <div className='board-user'>
            <h2>Minha Pagina</h2>

            <h3>Bem vindo {currentUser.name}</h3>

            <form onSubmit={handlePost}>
                <div className='form-group col-md-6'>
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
            <h2>Minhas Postagens</h2>
            {getUserPost && 
                getUserPost.map((value) =>
                <div className='col-md-6'>
                    <div className='card border-dark mb-3' key={value}>
                        <div className='card-header bg-transparent border-gray'>Postado Por {value.userName}</div>
                        <div className='card-body text-dark'>
                            <p className='card-text'>{value.message}</p>
                        </div>
                        <div className='card-footer bg-transparent border-gray'>Postado as {value.date}
                            <form onSubmit={deletePost}>
                                <button
                                name='deletepost'
                                type='submit'
                                className='btn btn-primary btn-sm'
                                value={value.id}
                                >Deletar</button>
                            </form>
                        </div>
                    </div>
                </div>
                )}

        </div>
    )
}