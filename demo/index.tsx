import React from 'react';
import { render } from 'react-dom';
import { TipTap } from '../src';

const App = () => {
    return (
        <div style={{ background: '#2d2d2d', overflow: 'hidden', height: '100%' }}>
            <div style={{ width: '1200px', height: '300px', margin: '40px auto' }}>
                <TipTap />
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));
