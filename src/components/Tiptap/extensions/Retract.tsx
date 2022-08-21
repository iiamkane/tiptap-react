import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import { IconFont } from '../components';

export type RetractProps = ExtensionProps;

export function Retract(props: RetractProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().setTextIndent().run();
    }, [editor]);

    return (
        <Tooltip title='缩进'>
            <div onClick={onClick}>
                <IconFont name='IconFont__suojin' />
            </div>
        </Tooltip>
    );
}
