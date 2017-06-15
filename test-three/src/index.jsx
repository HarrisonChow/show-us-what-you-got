import React from 'react';
import { render } from 'react-dom';
import Menu from './components/Menu.jsx';


require('./styles/styles.css');
require('./index.html');

render(<Menu />, document.getElementById('content'));
