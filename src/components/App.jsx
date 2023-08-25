import React from 'react'
import './app.less'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Main from './main/Main'
import Card from './card/card'

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
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/card' element={<Card />} />
                {/*<Route path='*' element={<Error />} />*/}
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
