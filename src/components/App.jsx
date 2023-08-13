import React from 'react'
import './App.less'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/reposReducer'

const App = () => {
    const dispatch = useDispatch()
    const onCountClick = () => dispatch(setCount(4))
    const count = useSelector((state) => state.repos.count)

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #bf4f74;
        color: #bf4f74;
        margin: 0 1em;
        padding: 0.25em 1em;
    `
    return (
        <div className='app'>
            <Button variant='contained' onClick={() => onCountClick()}>
                COUNT
            </Button>
            <div>{count}</div>
        </div>
    )
}

export default App
