export default function Home() {
    return(
        <div className= 'home container'>
            <h1 className='home-titulo'>Diário Escolar de Sentimentos</h1>
            <p className='home home-subtitulo'>Este diário é direcionado aos alunos do ETE Ginásio Pernambucano, onde os alunos podem expressar seus sentimentos anonimamente, com o intuito da instituição de ensino promover atividades socioemocionais.
            </p>
            <a className='btn btn-secondary btn-home btn-lg' href='/register' role='button'>Cadastre-se</a>
        </div>
    )
}