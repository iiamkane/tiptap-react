import * as React from 'react';
import classnames from 'classnames';

export interface IconFontProps {
    onClick?: (...args: any[]) => void;
    name: string;
    className?: string;
    style?: React.CSSProperties;
}

export function IconFont(props: IconFontProps) {
    const { onClick, name, className, style } = props;

    return (
        <i
            className={classnames(
                'inline-block font-normal leading-none normal-case text-center align-[-0.125em]',
                {
                    'cursor-pointer': onClick,
                },
                name,
                name.split('__')[0],
                className
            )}
            onClick={onClick}
            style={style}
        />
    );
}
