import React, { useEffect, useState } from 'react'
import './main.less'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../actions/repos'
import Repo from './repo/Repo'
import AtomicSpinner from 'atomic-spinner'
import styled from 'styled-components'
import { setCurrentPage } from '../../reducers/reposReducer'
import { createPages } from '../../utils/PagesCreator'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid var(--color-blue);
    color: var(--color-blue);
    margin-left: 1em;
    padding: 0.25em 1em;
`
const Input = styled.input`
    padding: 0.5em;
    color: var(--color-grey);
    background-color: var(--color-page-bg);
    border: 1px solid var(--color-grey);
    border-radius: 3px;
    width: 100%;
    &:focus {
        border: 1px solid var(--color-page-bg);
        outline: 2px solid var(--color-blue);
    }
`
const Main = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const repos = useSelector((state) => state.repos.items)
    const isFetching = useSelector((state) => state.repos.isFetching)
    const currentPage = useSelector((state) => state.repos.currentPage)
    const totalCount = useSelector((state) => state.repos.totalCount)
    const perPage = useSelector((state) => state.repos.perPage)
    const isFetchError = useSelector((state) => state.repos.isFetchError)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    function searchHandler() {
        dispatch(getRepos(searchValue))
    }

    return (
        <div className='box'>
            {isFetchError && (
                <div className='alert alert-danger' role='alert'>
                    Произошла ошибка! ПОжалуйста обновите страницу!
                </div>
            )}
            <div className='search'>
                <Input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value.trim())}
                    placeholder='Input repo name'
                    type='text'
                    onKeyUp={(e) => e.key === 'Enter' && searchHandler()}
                />

                <Button
                    onClick={() => searchHandler()}
                    className='button'
                    variant='contained'
                >
                    Searsh
                </Button>
            </div>

            {isFetching === false ? (
                repos.map((repo) => <Repo key={repo.id} repo={repo} />)
            ) : (
                <div className='fetching'>
                    <AtomicSpinner />
                </div>
            )}
            <div className='pages'>
                {pages.map((page, index) => (
                    <span
                        key={index}
                        className={
                            currentPage == page ? 'current-page' : 'page'
                        }
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    )
}
