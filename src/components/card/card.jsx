import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCotributors, getCurrentRepo } from '../actions/repos'
import './card.less'

const Card = (props) => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getCotributors(username, reponame, setContributors)
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)} className='back-btn'>
                BACK
            </button>
            <div className='card'>
                <img src={repo.owner.avatar_url} alt='' />
                <div className='name'>{repo.name}</div>
                <div className='stars'>{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) => (
                <div>
                    {index + 1}. {c.login}
                </div>
            ))}
        </div>
    )
}

export default Card
