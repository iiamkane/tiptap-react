import { Extension } from '@tiptap/core';

export interface TextIndentOptions {
    types: string[];
    defaultIndent: string;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        textIndent: {
            /**
             * Set the text align attribute
             */
            setTextIndent: () => ReturnType;
        };
    }
}

export const Retract = Extension.create<TextIndentOptions>({
    name: 'RetractExtension',

    addCommands() {
        return {
            setTextIndent:
                () =>
                ({ commands }) => {
                    return commands.insertContent('\t');
                },
        };
    },

    addKeyboardShortcuts() {
        return {
            Tab: () => this.editor.commands.setTextIndent(),
        };
    },
});
