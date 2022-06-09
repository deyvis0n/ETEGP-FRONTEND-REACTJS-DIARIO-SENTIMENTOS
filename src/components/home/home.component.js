import { useState } from 'react'
import AuthService from '../../services/auth.service'

export default function Home() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        <div className= 'home container'>
            <h1 className='home-titulo'>Diário Escolar de Sentimentos</h1>
            <p className='home home-subtitulo'>Diário escolar de sentimentos é um projeto voltado para o bem estar
            dos alunos, funcionando como uma plataforma online que possibilita os alunos postarem seu dia à dia e
            procurarem suporte emocional junto a comunidade escolar.
            </p>
            { !currentUser &&
                 <a className='btn btn-secondary btn-home btn-lg' href='/register' role='button'>Cadastre-se</a>
            }
        </div>
    )
}