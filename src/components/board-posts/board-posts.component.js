import { useState } from 'react'

import UserService from '../../services/user.service'

export default function Home() {
    const [getRecentPost, setGetRecentPost] = useState(getAllPost)

    function getAllPost() {
        const getAllPostValue = async () => {
            const value = await UserService.getRecentPost()

            console.log(value)

            setGetRecentPost(value)
        }
        getAllPostValue()
    }
    return(
        <div>
            <h2>Postagens Recentes</h2>
            {getRecentPost && 
                getRecentPost.map((value) =>
                <div className='col-md-6'>
                    <div className='card border-dark mb-3' key={value._id}>
                        <div className='card-header bg-transparent border-gray'>Postado Por {value.username}</div>
                        <div className='card-body text-dark'>
                            <p className='card-text'>{value.userMessage}</p>
                        </div>
                        <div className='card-footer bg-transparent border-gray'>postado as {value.createOn}</div>
                    </div>
                </div>
                )}
        </div>
        
    )
}