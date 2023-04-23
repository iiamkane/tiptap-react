import React from 'react';
import type { KTREditorProps, ToolbarItem } from './interfaces';
import { createBEM } from './hooks';

/**
 * Editor instance method
 */
import { useEditor, EditorContent, Editor } from '@tiptap/react';

/**
 * Tool kit
 *
 * StarterKit - foundation
 *
 * Table
 */
import StarterKit from '@tiptap/starter-kit';
import { Color as ColorExtension } from '@tiptap/extension-color';
import TextAlignExtension from '@tiptap/extension-text-align';
import ImageExtension from '@tiptap/extension-image';
import PlaceholderExtension from '@tiptap/extension-placeholder';
import TextStyleExtension from '@tiptap/extension-text-style';
import UnderlineExtension from '@tiptap/extension-underline';

import TableExtension from '@tiptap/extension-table';
import TableRowExtension from '@tiptap/extension-table-row';
import TableCellExtension from '@tiptap/extension-table-cell';
import TableHeaderExtension from '@tiptap/extension-table-header';

/**
 * Custom Expansion
 */
import { FontSize, Retract as RetractExtension } from './plugins';

/**
 * List of options
 */
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

const getDefaultToolbar = (): ToolbarItem[][] => {
    const toolbar = [
        [Bold, Italic, SizePane, Underline, ColorPane],
        [OrderedList, BulletList],
        [LeftAlign, CenterAlign, RightAlign],
        [Undo, Redo],
        [Retract],
        [Image],
        // [Table],
    ];
    return toolbar;
};

const KTREditor = (props: Partial<KTREditorProps>) => {
    const { onCreate, onUpdate, toolbar = getDefaultToolbar(), height = 450, content, placeholder, onPastedHTML, className, ...rest } = props;

    const editor = useEditor({
        extensions: [
            StarterKit,
            PlaceholderExtension.configure({ placeholder }),
            TextStyleExtension,
            FontSize,
            RetractExtension.configure({ types: ['paragraph'] }),
            UnderlineExtension,
            ColorExtension,
            TextAlignExtension.configure({ types: ['paragraph'] }),
            ImageExtension.configure({
                inline: true,
                HTMLAttributes: {
                    style: 'max-width: 800px',
                },
            }),
            TableExtension.configure({ resizable: false }),
            TableRowExtension.extend({
                content: 'tableCell*',
            }),
            TableCellExtension,
            TableHeaderExtension,
        ],

        content,
        editorProps: {
            transformPastedHTML(text: string) {
                return onPastedHTML ? onPastedHTML(text) : text;
            },
        },

        onCreate({ editor }) {
            const node = editor.options.element.firstChild as HTMLElement;
            if (node) node.style.height = `${height}px`;
            onCreate?.(editor as Editor);
        },
        onUpdate({ editor, transaction }) {
            onUpdate?.(editor.getHTML(), editor as Editor, transaction);
        },
    });

    return (
        <div className={`${createBEM()} ${className ?? ''}`}>
            <header className={createBEM('header')}>
                {toolbar.map((group, i) => {
                    return (
                        <React.Fragment key={i}>
                            {group.map((Component, _i) => {
                                return (
                                    <React.Fragment key={Component.name}>
                                        {i !== 0 && _i === 0 && <span>|</span>}
                                        {editor && <Component editor={editor} {...rest} />}
                                    </React.Fragment>
                                );
                            })}
                        </React.Fragment>
                    );
                })}
            </header>
            <EditorContent editor={editor} className={createBEM('content')} />
        </div>
    );
};

export default KTREditor;
