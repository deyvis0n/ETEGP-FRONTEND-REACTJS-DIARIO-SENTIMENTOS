import { useState } from 'react'

import AuthService from '../../services/auth.service'

export default function Login() {

    const [state, setState] = useState({
        username: '',
        password: '',
        messageErro: ''
    })

    function handleState(event) {
        state[event.target.name] = event.target.value
        setState(state)
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

                setState({messageErro: resErro})
            }
        )
    }

    return(
        <div className='col-md-12'>
            <div className='card card-container'>
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />

                <form onSubmit={handleLogin}>

                    <div className='form-froup'>
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
                            type='submit'
                            className='btn btn-primary btn-blck'
                        >Entrar</button>
                    </div>

                    <div>
                        {state.messageErro}
                    </div>
                </form>
            </div>
        </div>
    )
}