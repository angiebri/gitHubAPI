import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes, Navigate } from 'react-router-dom/dist'
import Main from './main/Main'
import Card from './card/card'
import Error from './main/Error'
import './app.less'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/error' element={<Error />} />
                <Route path='/card/:username/:reponame' element={<Card />} />
                <Route path='*' element={<Navigate to='/error' replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
