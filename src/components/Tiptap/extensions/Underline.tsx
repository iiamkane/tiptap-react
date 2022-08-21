import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type UnderlineProps = ExtensionProps;

export function Underline(props: UnderlineProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().toggleUnderline().run();
    }, [editor]);

    return (
        <Tooltip title='下划线'>
            <div
                className={classnames({ 'is-active': editor.isActive('underline') })}
                onClick={onClick}
            >
                <IconFont name='IconFont__xiahuaxian' />
            </div>
        </Tooltip>
    );
}
