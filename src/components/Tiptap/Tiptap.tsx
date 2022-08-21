import * as React from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextStyle from '@tiptap/extension-text-style';
import { FontSize, Retract as RetractExtension } from './plugins';
import UnderlineExtension from '@tiptap/extension-underline';
import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import ImageExtension from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';
import TableExtension from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import classnames from 'classnames';

import {
    Bold,
    BulletList,
    CenterAlign,
    ColorPane,
    Image,
    Italic,
    LeftAlign,
    OrderedList,
    Redo,
    Retract,
    RightAlign,
    SizePane,
    Table,
    Underline,
    Undo,
} from './extensions';
import { ExtensionProps } from './interfaces';

function createBEM(className: string) {
    return `Tiptap-${className}`;
}

type ToolbarItem = (props: ExtensionProps) => JSX.Element;

export interface TiptapProps {
    className?: string;

    toolbar?: ToolbarItem[][];

    content?: string;

    placeholder?: string;

    height?: number;

    onCreate?: (editor: Editor) => void;

    onUpdate?: (html: string, editor: Editor, transaction: any) => void;

    onPastedHTML?: (text: string) => string;

    onUploadImage?: (file: File, insertSrc: (src: string) => void) => void;
}

function getDefaultToolbar(): ToolbarItem[][] {
    return [
        [Bold, Italic, SizePane, Underline, ColorPane],
        [OrderedList, BulletList],
        [LeftAlign, CenterAlign, RightAlign],
        [Undo, Redo],
        [Retract],
        [Image],
        [Table],
    ];
}

export function Tiptap(props: TiptapProps) {
    const {
        onCreate,
        onUpdate,
        toolbar = getDefaultToolbar(),
        height = 450,
        content = '',
        placeholder = '',
        onPastedHTML,
        className,
        ...rest
    } = props;

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({ placeholder }),
            TextStyle,
            FontSize,
            RetractExtension.configure({ types: ['paragraph'] }),
            UnderlineExtension,
            Color,
            TextAlign.configure({ types: ['paragraph'] }),
            ImageExtension.configure({
                inline: true,
                HTMLAttributes: {
                    style: 'max-width: 800px',
                },
            }),
            // Dropcursor,
            TableExtension.configure({ resizable: false }),
            TableRow.extend({
                content: 'tableCell*',
            }),
            TableCell,
        ],
        content,
        editorProps: {
            transformPastedHTML(text: string) {
                if (onPastedHTML) {
                    return onPastedHTML(text);
                }

                return text;
            },
        },
        onCreate({ editor: instance }) {
            const node = instance.options.element.firstChild as HTMLElement;

            if (node) {
                node.style.height = `${height}px`;
            }

            onCreate?.(instance);
        },
        onUpdate({ editor: instance, transaction }) {
            onUpdate?.(instance.getHTML(), instance, transaction);
        },
    });

    return (
        <div className={classnames([createBEM('editor'), className])}>
            <header className={createBEM('header')}>
                {toolbar.map((group, index) => {
                    return (
                        <div key={index} className={createBEM('group')}>
                            {group.map(Component => {
                                return <>{editor && <Component editor={editor} {...rest} />}</>;
                            })}
                        </div>
                    );
                })}
            </header>
            <EditorContent editor={editor} className={createBEM('content')} />
        </div>
    );
}
