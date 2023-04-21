import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type RightAlignProps = ExtensionProps;

export function RightAlign(props: RightAlignProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().setTextAlign('right').run();
    };

    return (
        <div className={`${editor.isActive({ textAlign: 'right' }) && 'is-active'}`} onClick={onClick}>
            <IconFont name='textAlignRight' />
        </div>
    );
}
