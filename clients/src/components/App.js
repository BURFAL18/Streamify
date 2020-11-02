import React from 'react';
import {BrowserRouter ,Route,Link } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';

const App = () =>
{
    return( 
        <div className="ui container">
            
    <BrowserRouter>
      <Header/>
    <div>
        <Route path="/" exact component ={StreamList}/>
        <Route path="/streams/new"  component ={StreamCreate}/>
        </div>
        </BrowserRouter>
        </div>
        );
};
export default App;