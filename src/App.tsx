import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './components/Input';
import {Translate} from './components/Translate';
import {TestList} from './TestList';
import {Validator} from './hooks/useValidators';
import {useInputState} from './hooks/useInputState';
import styled from '@emotion/styled';
import {pixels} from './styles';

const
    NOT_EMPTY: Validator<string> = {
        validate: (value: string) => !!value.length,
        message: () => (<div><Translate i18nKey={'notEmpty'}/></div>)
    },

    ONLY_NUMBERS: Validator<string> = {
        validate: (value: string) => /^[0-9]*$/.test(value),
        message: () => (<Translate i18nKey={'onlyNumbers'}/>)
    };

const Header = styled.h1`
    text-align: center;
    color: #5700ff;
    font-size: ${pixels(48)};
    font-weight: 700;
    letter-spacing: -0.055em;
    line-height: 0.9em;
    text-indent: -0.03em;
    margin-bottom: ${pixels(48)};
    margin-top: 10px;
`;

function App() {
    const [name, onNameChange] = useInputState('');
    const [password, onPasswordChange] = useInputState('');

    return (
        <div className='App'>
            <Header>Testing header</Header>

            <div className='App-form'>
                <Input
                    label={'Name'}
                    value={name} validators={[NOT_EMPTY, ONLY_NUMBERS]}
                       onChange={onNameChange}
                />

                <Input
                    label={'Password'}
                    type={'password'}
                    value={password} validators={[NOT_EMPTY, ONLY_NUMBERS]}
                    onChange={onPasswordChange}
                />
            </div>

            <TestList/>
        </div>
    );
}

export default App;
