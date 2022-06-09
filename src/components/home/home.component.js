import { useState } from 'react'
import AuthService from '../../services/auth.service'
import faceIcon from '../../img/facebook.png'
import instIcon from '../../img/instagran.png'
import youtuIcon from '../../img/youtube.png'

export default function Home() {
    const [currentUser] = useState(AuthService.getCurrentUser)

    return(
        <div>
            <div className= 'home container cont-flex'>
                <h1 className='home-titulo'>Diário Escolar de Sentimentos</h1>
                <p className='home home-subtitulo'>Diário escolar de sentimentos é um projeto voltado para o bem estar
                dos alunos, funcionando como uma plataforma online que possibilita os alunos postarem seu dia à dia e
                procurarem suporte emocional junto a comunidade escolar.
                </p>
                { !currentUser &&
                    <a className='btn btn-secondary btn-home btn-lg' href='/register' role='button'>Cadastre-se</a>
                }
            </div>
            <footer>
                <div className='flex-box'>
                    <div className='footer-text'>
                        <h3>Fale conosco:</h3>
                        <p>Email: Diáriodesentimentos@empresa.org.br</p>
                        <p>Fones: (81) 3333 3333</p>
                        <p className='p-numero'>(81) 9 9999 9999</p>
                    </div>
                    <div className='footer-icon'>
                        <img
                            src={faceIcon}
                            alt='faceIcon'
                            className='footer-img'
                        />
                        <img
                            src={instIcon}
                            alt='instIcon'
                            className='footer-img'
                        />
                        <img
                            src={youtuIcon}
                            alt='youtuIco'
                            className='footer-img'
                        />
                    </div>
                </div>
            </footer>
        </div>
        
    )
}