import * as React from 'react';

interface IconFontProps {
    name: string;
}

export const IconFont = (props: IconFontProps) => {
    const { name } = props;

    return (
        <svg className='icon' aria-hidden='true' width='24' height='24'>
            <use xlinkHref={`#icon-${name}`}></use>
        </svg>
    );
};
