import { useState } from 'react'
import AuthService from '../../services/auth.service'

export default function Login() {
    const [erroState, setErroState] = useState({
        stateError: false,
        messageErro: ''
    })
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    function handleState(event) {
        state[event.target.name] = event.target.value
        setState(state)
        setErroState({ stateErro: false })
    }

    function handleLogin(event) {
        event.preventDefault()
        AuthService.login(state.username, state.password).then(
            () => {
                window.location.reload()
                window.location = '/board-user'
            },
            error => {
                const resErro = 
                    ((error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString())

                    setErroState({ stateError: true, messageErro: resErro })
            }
        )
    }

    return(
        <div className='col-md-12'>
            <div className='card card-container'>
                <img
                    src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    alt='profile-img'
                    className='profile-img-card'
                />

                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            name='username'
                            onChange={handleState}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            onChange={handleState}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <button
                            type='submmit'
                            className='btn btn-primary'
                        >Entrar
                        </button>
                    </div>

                    <a className='btn btn-secondary' href='/register' role='button'>Criar Conta</a>

                    {erroState.stateError && (
                        <div className='form-group'>
                            <div className='alert alert-danger' role='alert'>
                                {erroState.messageErro}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}