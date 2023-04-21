import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type RedoProps = ExtensionProps;

export function Redo(props: RedoProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().redo().run();
    };

    return (
        <div className='Taptip-hover' onClick={onClick}>
            <IconFont name='redo' />
        </div>
    );
}
