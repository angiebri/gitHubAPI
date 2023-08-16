import React from 'react'
import './App.less'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/reposReducer'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    const dispatch = useDispatch()

    /*const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #bf4f74;
        color: #bf4f74;
        margin: 0 1em;
        padding: 0.25em 1em;
    `*/

    return (
        <BrowserRouter>
            <div></div>
            <Route path='/' Component={Main}></Route>
        </BrowserRouter>
    )
}

export default App
