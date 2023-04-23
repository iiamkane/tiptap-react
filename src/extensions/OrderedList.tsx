import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { IconFont } from '../components';

export type OrderedListProps = ExtensionProps;

export function OrderedList(props: OrderedListProps) {
    const { editor } = props;

    const onClick = () => {
        editor.chain().focus().toggleOrderedList().run();
    };

    return (
        <div className={`${editor.isActive('orderedList') && 'is-active'}`} onClick={onClick}>
            <IconFont name='ol' />
        </div>
    );
}
