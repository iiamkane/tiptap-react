import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import classnames from 'classnames';
import { IconFont } from '../components';

export type UnderlineProps = ExtensionProps;

export function Underline(props: UnderlineProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().toggleUnderline().run();
    };

    return (
        <div className={`${editor.isActive('underline') && 'is-active'}`} onClick={onClick}>
            <IconFont name='underline' />
        </div>
    );
}
