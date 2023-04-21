import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type LeftAlignProps = ExtensionProps;

export function LeftAlign(props: LeftAlignProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().setTextAlign('left').run();
    };

    return (
        <div className={`${editor.isActive({ textAlign: 'left' }) && 'is-active'}`} onClick={onClick}>
            <IconFont name='textAlignLeft' />
        </div>
    );
}
