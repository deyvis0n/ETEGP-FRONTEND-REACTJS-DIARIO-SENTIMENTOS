import { useState } from 'react'

import AuthService from '../../services/auth.service'

export default function Login() {

    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        successful: false,
        message:''
    })

    function handleState(event) {
        state[event.target.name] = event.target.value
        setState(state)
    }

    function handleRegister(event) {
        event.preventDefault()
        
        AuthService.register(
            state.username, 
            state.email, 
            state.password
            ).then(
                response => {
                    setState({message: response.data.message})
                    setState({successful: true})
                },error => {
                    const resErro = 
                    ((error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString())
                
                    setState({message: resErro})
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
                {!state.successful ? (
                    <form onSubmit={handleRegister}>

                    <div className='form-froup'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            name='username'
                            onChange={handleState}
                            required
                            minLength='3'
                            maxLength='20'
                        />
                    </div>

                    <div className='form-froup'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                            type='email'
                            className='form-control'
                            name='email'
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
                            minLength='8'
                            maxLength='20'
                        />
                    </div>

                    <div className='form-group'>
                        <button
                            type='submit'
                            className='btn btn-primary btn-blck'
                        >Cadastre-se</button>
                    </div>
                    
                    <div>
                        {state.message}
                    </div>

                </form>
                ) : (
                    <div className='form-group'>
                        <div>
                            Usuario Cadastrado!<br/>
                            Realize o Loguin Para Pode Continuar
                        </div>
                        <form action='/login'>
                            <button
                                type='subemit'
                                className='btn btn-primary btn-blck'
                            >Logar</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}