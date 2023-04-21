import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type BulletListProps = ExtensionProps;

export function BulletList(props: BulletListProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().toggleBulletList().run();
    };

    return (
        <div className={`${editor.isActive('bulletList') && 'is-active'}`} onClick={onClick}>
            <IconFont name='ul' />
        </div>
    );
}
