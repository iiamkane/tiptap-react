import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type RetractProps = ExtensionProps;

export function Retract(props: RetractProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().setTextIndent().run();
    };

    return (
        <div onClick={onClick} id='Retract'>
            <IconFont name='indent' />
        </div>
    );
}
