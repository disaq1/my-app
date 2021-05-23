import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import MainProfile from '../src/components/Profile/MainProfile';
import Navbar from '../src/components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'




const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="main">
                    <Route />
                    <Route />
                    {/* <Dialogs /> */}
                    <MainProfile />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;