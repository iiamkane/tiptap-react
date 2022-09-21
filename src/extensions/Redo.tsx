import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import { IconFont } from '../components';

export type RedoProps = ExtensionProps;

export function Redo(props: RedoProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().redo().run();
    }, [editor]);

    return (
        <Tooltip title='恢复'>
            <div className='Taptip-hover' onClick={onClick}>
                <IconFont name='IconFont__zhongzuo' />
            </div>
        </Tooltip>
    );
}
