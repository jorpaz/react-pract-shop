// ? Esto se usaba en versiones antiguas
/*
 import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));*/

import React from 'react';
import { createRoot } from'react-dom/client';
import App from'./routes/App';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="Home" />);
