import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AccentColor, accentToTextColor} from './Colors';
import {ColorDemoButton} from './ColorDemoButton';
import {DelayedButton} from './components/DelayedButton';

function toPascalCase(text: string) {
    return text.length ? (text[0].toUpperCase() + text.slice(1).toLowerCase()) : text;
}

function App() {
    return (
        <div className='App'>
            <Container>

                <Row>
                    <Col>
                        <DelayedButton label={'Delayed'}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>

                {
                    Object.keys(AccentColor).map((accentKey: string) => {
                        const accent: AccentColor = (AccentColor as any)[accentKey];
                        const name = toPascalCase(accentKey);

                        const labelStyles = {
                            display: 'block',
                            fontWeight: 700,
                            fontSize: '12px',
                            marginRight: '20px',
                            marginBottom: '0'
                        };

                        let headerStyle = {
                            color: accent,
                            letterSpacing: '-0.08em',
                            margin: '0',
                            lineHeight: '2'
                        };
                        return (
                            <Row key={accent}>
                                <Col xs={3}>
                                    <h1 style={headerStyle}>{name}</h1>
                                </Col>
                                <Col style={{display: 'flex', alignItems: 'center'}}>
                                    <ColorDemoButton label={name} accent={accent}/>
                                    <div style={{marginLeft: '20px'}}>
                                        <label style={labelStyles}>Background</label>
                                        <code>{accent}</code>
                                    </div>
                                    <div>
                                        <label style={labelStyles}>Text</label>
                                        <code>{accentToTextColor(accent)}</code>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
        </div>
    );
}

export default App;
