import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../src/components/Header/Header';
import MainProfile from '../src/components/Profile/MainProfile';
import Navbar from '../src/components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Firends';
import Groups from './components/Groups/Groups';
import Photos from './components/Photos/Photos';
import Videos from './components/Videoss/Videos';
import Novosti from './components/Novosti/Novosti';
import Settingss from './components/Settingss/Settingss';




const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="main">
                    <Route  path='/dialogs' component={Dialogs}/>
                    <Route  path='/profile' component={MainProfile}/>
                    <Route  path='/friends' component={Friends}/>
                    <Route  path='/groups' component={Groups}/>
                    <Route  path='/photos' component={Photos}/>
                    <Route  path='/videos' component={Videos}/>
                    <Route  path='/news' component={Novosti}/>
                    <Route  path='/settings' component={Settingss}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;