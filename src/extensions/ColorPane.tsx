import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { useBoolean, useClickAway, useEventListener } from 'ahooks';
import { IconFont } from '../components';
import { createBEM } from '../hooks';

export type ColorPaneProps = ExtensionProps;

const color = ['#2D2D2D', '#FF4A4C', '#FAAD14', '#FEEE0E', '#0FBA6F', '#40A9FF', '#12DFF6', '#C614FA'];

export function ColorPane(props: ColorPaneProps) {
    const { editor } = props;
    const [visible, { setTrue, setFalse }] = useBoolean(false);
    const ref = React.useRef<HTMLDivElement | null>(null);

    const onClick = (rgb: string) => {
        editor.chain().focus().setColor(rgb).run();
    };

    const Pane = () => {
        return (
            <div className={createBEM('pane')} id='pane'>
                {color.map(rgb => {
                    return (
                        <div id='color' style={{ color: rgb }} key={rgb} onClick={() => onClick(rgb)}>
                            ABCDEFG
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div onClick={setTrue} className={visible ? 'is-active' : undefined} ref={ref}>
            <IconFont name='fontColor' />
            {visible && <Pane />}
        </div>
    );
}
