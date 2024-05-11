import React, { Fragment, useEffect } from 'react';
//Components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddDeveloperModal from './components/developers/AddDeveloperModal';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {

  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <AddLogModal />
        <EditLogModal />
        <AddDeveloperModal />
        <Logs />
      </div>
    </Fragment>
  )
}

export default App;
