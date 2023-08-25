import React from 'react'
import './app.less'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Main from './main/Main'
import Card from './card/card'

const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/card/:username/:reponame' element={<Card />} />
                {/*<Route path='*' element={<Error />} />*/}
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
