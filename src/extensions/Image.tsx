import * as React from 'react';
import { ExtensionProps } from '../interfaces';
import { Tooltip, Upload } from 'antd';
import { IconFont } from '../components';

export interface ImageProps extends ExtensionProps {
    accept?: string;

    onUploadImage?: (file: File, insertSrc: (src: string) => void) => void;
}

export function Image(props: ImageProps) {
    const { editor, accept = '.png, .jpeg, .jpg, .bmp', onUploadImage } = props;

    const beforeUpload = React.useCallback((file: File) => {
        const insertSrc = (src: string) => {
            editor.chain().focus().setImage({ src }).run();
        };

        onUploadImage?.(file, insertSrc);

        return false;
    }, []);

    return (
        <div className='Taptip-ImageUpload'>
            {/* <Upload showUploadList={false} accept={accept} beforeUpload={beforeUpload}> */}
                <IconFont name='picture' />
            {/* </Upload> */}
        </div>
    );
}
