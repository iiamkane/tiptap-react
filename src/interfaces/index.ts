import { Editor } from '@tiptap/react';

/**
 * @description extension props
 */
export interface ExtensionProps {
    editor: Editor;
}

/**
 * @description toolbar
 */
export type ToolbarItem = (props: ExtensionProps) => JSX.Element;


/**
 * @description KTREditor Props
 * 
 * @param className 类名
 * @param content 初始化内容
 * @param placeholder 占位符
 * @param height 内容高度
 * @param toolbar 工具栏数组
 * 
 * @param onCreate The editor is ready
 * @param onUpdate The content has changed
 * @param onPastedHTML 粘贴文本
 * 
 * @param onUploadImage 上传图片
 */
export interface KTREditorProps {
    className: string;
    content: string;
    placeholder: string;
    height: number;
    toolbar: ToolbarItem[][];

    onCreate: (editor: Editor) => void;
    onUpdate: (html: string, editor: Editor, transaction: any) => void;
    onPastedHTML: (text: string) => string;

    onUploadImage: (file: File, insertSrc: (src: string) => void) => void;
}
