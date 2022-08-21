import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type RightAlignProps = ExtensionProps;

export function RightAlign(props: RightAlignProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().setTextAlign('right').run();
    }, [editor]);

    return (
        <Tooltip title='右对齐'>
            <div
                className={classnames({
                    'is-active': editor.isActive({ textAlign: 'right' }),
                })}
                onClick={onClick}
            >
                <IconFont name='IconFont__youduiqi' />
            </div>
        </Tooltip>
    );
}
