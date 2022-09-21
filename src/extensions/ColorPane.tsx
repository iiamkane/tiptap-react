import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { useBoolean, useClickAway } from 'ahooks';
import { IconFont } from '../components';

export type ColorPaneProps = ExtensionProps;

const color = [
    '#2D2D2D',
    '#FF4A4C',
    '#FAAD14',
    '#FEEE0E',
    '#0FBA6F',
    '#40A9FF',
    '#12DFF6',
    '#C614FA',
];

export function ColorPane(props: ColorPaneProps) {
    const { editor } = props;
    const [visible, { setTrue, setFalse }] = useBoolean(false);
    const ref = React.useRef<HTMLDivElement | null>(null);

    useClickAway(setFalse, ref);

    const onClick = React.useCallback(
        (rgb: string) => {
            editor.chain().focus().setColor(rgb).run();
        },
        [editor]
    );

    return (
        <div
            className={classnames({
                'is-active': visible,
            })}
            onClick={setTrue}
            ref={ref}
        >
            <Tooltip title='颜色'>
                <IconFont name='IconFont__zitiyanse' />
            </Tooltip>

            {visible && (
                <div className='Tiptap-pane'>
                    {color.map(rgb => {
                        return (
                            <div style={{ color: rgb }} key={rgb} onClick={() => onClick(rgb)}>
                                ABCDEFG
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
