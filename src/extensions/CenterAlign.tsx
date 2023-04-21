import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type CenterAlignProps = ExtensionProps;

export function CenterAlign(props: CenterAlignProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().setTextAlign('center').run();
    };

    return (
        <div className={`${editor.isActive({ textAlign: 'center' }) && 'is-active'}`} onClick={onClick}>
            <IconFont name='textAlignCenter' />
        </div>
    );
}
