import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { useClickAway, useBoolean } from 'ahooks';
import { IconFont } from '../components';
import { Tooltip } from 'antd';

export type SizePaneProps = ExtensionProps;

const size = ['12px', '14px', '16px', '18px', '20px', '22px'];

export function SizePane(props: SizePaneProps) {
    const { editor } = props;

    const ref = React.useRef<HTMLDivElement | null>(null);

    const [visible, { setTrue, setFalse }] = useBoolean(false);

    useClickAway(setFalse, ref);

    const onClick = React.useCallback(
        px => {
            editor.chain().focus().setFontSize(px).run();
        },
        [editor]
    );

    return (
        <div ref={ref} onClick={setTrue}>
            <Tooltip title='字号'>
                <IconFont name='IconFont__zihao' />
            </Tooltip>

            {visible && (
                <div className='Tiptap-pane'>
                    {size.map(px => {
                        return (
                            <div key={px} onClick={() => onClick(px)}>
                                {px}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
