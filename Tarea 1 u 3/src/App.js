import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Counter from './components/VisistCounter';
import './styles.css';
import { FormattedMessage, FormattedDate } from 'react-intl';

const App = () => {
    return ( <
        div >
        <
        Header / >

        <
        div className = "main" >
        <
        h1 className = "titulo" >
        <
        FormattedMessage id = "app.welcome"
        defaultMessage = "Welcome"
        values = {
            {
                name: 'Jorge Luis Marmolejo Santos'
            }
        }
        /> < /
        h1 >
        <
        h2 className = "titulo" >
        <
        FormattedMessage id = "app.welcome2"
        defaultMessage = "Welcome2"
        values = {
            {
                name: 'Jorge Luis Marmolejo Santos'
            }
        }
        /> < /
        h2 >
        <
        p className = "subtitulo" >
        <
        FormattedDate value = { Date.now() }
        year = "numeric"
        month = "long"
        day = "numeric"
        weekday = "long" /
        >
        <
        /p>

        <
        Grid / >
        <
        React.StrictMode >
        <
        Counter / >
        <
        /React.StrictMode> < /
        div > < /
        div >
    );
}

export default App;