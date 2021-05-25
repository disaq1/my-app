import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import MainProfile from '../src/components/Profile/MainProfile';
import Navbar from '../src/components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import Photos from './components/Photos/Photos';
import Videos from './components/Videoss/Videos';
import Novosti from './components/Novosti/Novosti';
import Settingss from './components/Settingss/Settingss';




const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="main">
                    <Route  path='/dialogs' 
                            render={ () => 
                            <Dialogs 
                                dialogs={props.state.dialogsPage.dialogs} 
                                messages={props.state.dialogsPage.messages}
                            />
                        }
                    />
                    <Route  path='/profile' 
                            render={ () => 
                            <MainProfile 
                                posts={props.state.profilePage.posts}
                            />
                        }
                    />
                    <Route  path='/friends' 
                            render={ () => 
                            <Friends 
                                friendsInfo={props.state.friendsPage.friendsInfo}
                            />
                        }
                    />
                    <Route  path='/groups' 
                            render={ () => 
                            <Groups
                                
                            />
                        }
                    />
                    <Route  path='/photos' 
                            render={ () => 
                            <Photos
                                
                            />
                        }
                    />
                    <Route  path='/videos' 
                            render={ () => 
                            <Videos
                                
                            />
                        }
                    />
                    <Route  path='/news' 
                            render={ () => 
                            <Novosti
                                
                            />
                        }
                    />
                    <Route  path='/settings' 
                            render={ () => 
                            <Settingss
                                
                            />
                        }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;