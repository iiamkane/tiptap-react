import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type ItalicProps = ExtensionProps;

export function Italic(props: ItalicProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().toggleItalic().run();
    };

    return (
        <div className={`${editor.isActive('italic') && 'is-active'}`} onClick={onClick}>
            <IconFont name='italic' />
        </div>
    );
}
