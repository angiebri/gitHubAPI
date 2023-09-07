import React from 'react'
import './repo.less'
import { NavLink } from 'react-router-dom'

const Repo = (props) => {
    const repo = props.repo

    return (
        <div className='repo'>
            <div className='repo-header'>
                <div>
                    <NavLink
                        className='repo-header-name'
                        to={`/card/${repo.owner.login}/${repo.name}`}
                    >
                        {repo.name}
                    </NavLink>
                </div>
                <div className='repo-header-stars'>
                    <svg
                        aria-hidden='true'
                        focusable='false'
                        role='img'
                        viewBox='0 0 16 16'
                        width='16'
                        height='16'
                        fill='currentColor'
                    >
                        <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z'></path>
                    </svg>
                    <div className='repo-header-stars-text'>
                        {repo.stargazers_count}
                    </div>
                </div>
            </div>
            <div className='repo-last-commit'>
                Последний коммит: {repo.updated_at}
            </div>
            <div className='repo-link-text'>
                Ссылка на репозиторий:
                <a href={repo.html_url} className='repo-link'>
                    {repo.html_url}
                </a>
            </div>
        </div>
    )
}

export default Repo
