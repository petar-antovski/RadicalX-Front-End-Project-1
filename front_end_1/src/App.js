import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Main from './Components/Pages/Main.js';
import { useState } from 'react';
import { NewInternship } from './Components/Pages/NewInternship/NewInternship';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className='App'>
      { visible && <Sidebar /> }
      { visible && <Main setVisible = { setVisible } /> }
      { !visible && <NewInternship setVisible = { setVisible } />}
    </div>
  );
}

export default App;