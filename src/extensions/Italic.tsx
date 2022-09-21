import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';

export type ItalicProps = ExtensionProps;

export function Italic(props: ItalicProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().toggleItalic().run();
    }, [editor]);

    return (
        <Tooltip title='倾斜'>
            <div
                className={classnames({ 'is-active': editor.isActive('italic') })}
                onClick={onClick}
            >
                <IconFont name='IconFont__zitiqingxie' />
            </div>
        </Tooltip>
    );
}
