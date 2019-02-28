import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './components/Input';
import {Translate} from './components/Translate';
import {TestList} from './TestList';
import {Validator} from './hooks/useValidators';
import {useInputState} from './hooks/useInputState';

const
    NOT_EMPTY: Validator<string> = {
        validate: (value: string) => !!value.length,
        message: () => (<div><Translate i18nKey={'notEmpty'}/></div>)
    },

    ONLY_NUMBERS: Validator<string> = {
        validate: (value: string) => /^[0-9]*$/.test(value),
        message: () => (<Translate i18nKey={'onlyNumbers'}/>)
    };


function App() {
    const [name, onNameChange] = useInputState('');
    const [text, onTextChange] = useInputState('');

    return (
        <div className='App'>
            <header className='App-header'>

                <Input value={name} onChange={onNameChange}
                       validators={[NOT_EMPTY, ONLY_NUMBERS]}
                />

                <Input value={text} onChange={onTextChange}
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

            <TestList />
        </div>
    );
}

export default App;
