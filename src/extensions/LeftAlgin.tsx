import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type LeftAlignProps = ExtensionProps;

export function LeftAlign(props: LeftAlignProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().setTextAlign('left').run();
    }, [editor]);

    return (
        <Tooltip title='左对齐'>
            <div
                className={classnames({
                    'is-active': editor.isActive({ textAlign: 'left' }),
                })}
                onClick={onClick}
            >
                <IconFont name='IconFont__zuoduiqi' />
            </div>
        </Tooltip>
    );
}
