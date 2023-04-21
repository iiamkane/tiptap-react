import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type UndoProps = ExtensionProps;

export function Undo(props: UndoProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().undo().run();
    };

    return (
        <div className='Tiptap-hover' onClick={onClick}>
            <IconFont name='undo' />
        </div>
    );
}
