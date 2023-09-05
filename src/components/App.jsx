import React from 'react'
<<<<<<< HEAD
=======
import { useDispatch } from 'react-redux'
>>>>>>> main
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes, Navigate } from 'react-router-dom/dist'
import Main from './main/Main'
import Card from './card/card'
import Error from './main/Error'
import './app.less'

const App = () => {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/error' element={<Error />} />
                <Route path='/card/:username/:reponame' element={<Card />} />
                <Route path='*' element={<Navigate to='/error' replace />} />
=======
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
                <Route path='*' element={<Navigate to='/' replace />} />
                <Route path='/' element={<Main />} />
                <Route path='/error' element={<Error />} />
                <Route path='/card/:username/:reponame' element={<Card />} />
                {/*<Route path='*' element={<Navigate to='/' replace />} />*/}
>>>>>>> main
            </Routes>
        </BrowserRouter>
    )
}

export default App
