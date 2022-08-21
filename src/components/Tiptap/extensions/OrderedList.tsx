import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type OrderedListProps = ExtensionProps;

export function OrderedList(props: OrderedListProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().toggleOrderedList().run();
    }, [editor]);
    return (
        <Tooltip title='有序列表'>
            <div
                className={classnames({ 'is-active': editor.isActive('orderedList') })}
                onClick={onClick}
            >
                <IconFont name='IconFont__youxupaixu' />
            </div>
        </Tooltip>
    );
}
