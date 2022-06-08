import { useState } from 'react'

import UserService from '../../services/user.service'

export default function Home() {
    const [getRecentPost, setGetRecentPost] = useState(getAllPost)

    function getAllPost() {
        const getAllPostValue = async () => {
            const values = await UserService.getRecentPost()
            for (const value of values) {
                const date = new Date(value.date)
                const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
                const formatedDate = ((date.getHours())) + ' horas e ' + ((date.getMinutes())) + ' minutos do dia ' + ((date.getDate())) + ' de ' + meses[((date.getMonth()))] + ' de ' + ((date.getFullYear()))
                Object.assign(value, { date: formatedDate })
            }
            const reverseValue = values.reverse()
            setGetRecentPost(reverseValue)
        }
        getAllPostValue()
    }
    return(
        <div>
            <h2>Postagens Recentes</h2>
            {getRecentPost && 
                getRecentPost.map((value) =>
                <div className='col-md-6'>
                    <div className='card border-dark mb-3' key={value.id}>
                        <div className='card-header bg-transparent border-gray'>Postado Por {value.userName}</div>
                        <div className='card-body text-dark'>
                            <p className='card-text'>{value.message}</p>
                        </div>
                        <div className='card-footer bg-transparent border-gray'>postado as {value.date}</div>
                    </div>
                </div>
            )}
        </div>
        
    )
}