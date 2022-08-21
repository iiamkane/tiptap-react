import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import { IconFont } from '../components';
import { useBoolean, useClickAway } from 'ahooks';

export type TableProps = ExtensionProps;

export interface Command {
    title: string;
    icon: string;
    command: string;
    options?: Record<string, any>;
}

const commandList = [
    {
        title: '插入表格',
        icon: 'biaoge',
        command: 'insertTable',
        options: { rows: 3, cols: 3, withHeaderRow: false },
    },
    {
        title: '插入上一行',
        icon: 'charushangyihang',
        command: 'addRowBefore',
    },
    {
        title: '插入下一行',
        icon: 'charuxiayihang',
        command: 'addRowAfter',
    },
    {
        title: '插入左一列',
        icon: 'charuzuoyihang',
        command: 'addColumnBefore',
    },
    {
        title: '插入右一列',
        icon: 'charuyouyihang',
        command: 'addColumnAfter',
    },
    {
        title: '删除表格',
        icon: 'shanchubiaoge',
        command: 'deleteTable',
    },
    {
        title: '删除当前行',
        icon: 'shanchudangqianhang',
        command: 'deleteRow',
    },
    {
        title: '删除当前列',
        icon: 'shanchudangqianlie',
        command: 'deleteColumn',
    },
];

export function Table(props: TableProps) {
    const { editor } = props;
    const [visible, { setTrue, setFalse }] = useBoolean(false);

    const ref = React.useRef<HTMLDivElement | null>(null);

    useClickAway(setFalse, ref);

    const onClick = React.useCallback((command: Command) => {
        if (command.options) {
            //@ts-ignore
            editor.chain().focus()?.[command.command](command.options).run();
            return;
        }

        //@ts-ignore
        editor.chain().focus()?.[command.command]().run();
    }, []);

    return (
        <div onClick={setTrue} ref={ref}>
            <Tooltip title='插入表格'>
                <IconFont name='IconFont__biaoge' />
            </Tooltip>
            {visible && (
                <div className='Tiptap-pane'>
                    {commandList.map(command => {
                        return (
                            <div onClick={() => onClick(command)} key={command.command}>
                                <IconFont
                                    name={`IconFont__${command.icon}`}
                                    style={{ verticalAlign: 'middle', paddingRight: '6px' }}
                                />
                                {command.title}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
