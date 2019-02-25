import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './components/Input';
import {Validator, ValidatorType} from './components/Validation';
import {Translate} from './components/Translate';

const
    NOT_EMPTY: Validator<string> = {
        validate: (value: string) => !!value.length,
        message: () => (<Translate i18nKey={'notEmpty'}/>)
    },

    ONLY_NUMBERS: Validator<string> = {
        validate: (value: string) => /^[0-9]*$/.test(value),
        message: () => (<Translate i18nKey={'onlyNumbers'}/>)
    };


    function App() {
    const [name, setName] = useState('');

    function onInputChange(e: ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value;
        setName(value);
    }

    return (
        <div className='App'>
            <header className='App-header'>

                <Input value={name} onChange={onInputChange}
                       validators={[NOT_EMPTY, ONLY_NUMBERS]}
                />

                <img src={logo} className='App-logo' alt='logo'/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
