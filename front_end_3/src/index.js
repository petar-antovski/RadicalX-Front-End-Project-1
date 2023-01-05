import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NewInternship } from "./NewInternship";

render(
  (<BrowserRouter>
    <NewInternship />
  </BrowserRouter>), document.getElementById('root'));