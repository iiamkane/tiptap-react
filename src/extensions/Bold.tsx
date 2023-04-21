import React from 'react';
import { IconFont } from '../components';
import { ExtensionProps } from '../interfaces';

type BoldProps = ExtensionProps;

export function Bold(props: BoldProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().toggleBold().run();
    };

    return (
        <div className={`${editor.isActive('bold') && 'is-active'}`} onClick={onClick}>
            <IconFont name='bold' />
        </div>
    );
}
