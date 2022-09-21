import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type CenterAlignProps = ExtensionProps;

export function CenterAlign(props: CenterAlignProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().setTextAlign('center').run();
    }, [editor]);

    return (
        <Tooltip title='居中'>
            <div
                className={classnames({
                    'is-active': editor.isActive({ textAlign: 'center' }),
                })}
                onClick={onClick}
            >
                <IconFont name='IconFont__zhongduiqi' />
            </div>
        </Tooltip>
    );
}
