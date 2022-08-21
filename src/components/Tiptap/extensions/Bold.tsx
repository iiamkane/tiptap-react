import * as React from 'react';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { IconFont } from '../components';
import { ExtensionProps } from '../interfaces';

type BoldProps = ExtensionProps;

export function Bold(props: BoldProps) {
    const { editor } = props;

    const onClick = React.useCallback(() => {
        editor.chain().focus().toggleBold().run();
    }, [editor]);

    return (
        <Tooltip title='加粗'>
            <div
                className={classnames({
                    'is-active': editor.isActive('bold'),
                })}
                onClick={onClick}
            >
                <IconFont name='IconFont__jiacu' />
            </div>
        </Tooltip>
    );
}
