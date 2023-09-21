import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

// Render the App component to the root element in the HTML file (public/index.html)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
