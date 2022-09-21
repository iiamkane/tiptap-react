import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type BulletListProps = ExtensionProps;

export function BulletList(props: BulletListProps) {
    const { editor } = props;

    const onClick = React.useCallback(
        () => editor.chain().focus().toggleBulletList().run(),
        [editor]
    );

    return (
        <Tooltip title='无序列表'>
            <div
                className={classnames({
                    'is-active': editor.isActive('bulletList'),
                })}
                onClick={onClick}
            >
                <IconFont name='IconFont__wuxupaixu' />
            </div>
        </Tooltip>
    );
}
