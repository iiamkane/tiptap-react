import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import { IconFont } from '../components';

export type UndoProps = ExtensionProps;

export function Undo(props: UndoProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().undo().run();
    }, [editor]);

    return (
        <Tooltip title='撤回'>
            <div className='Tiptap-hover' onClick={onClick}>
                <IconFont name='IconFont__chehui' />
            </div>
        </Tooltip>
    );
}
