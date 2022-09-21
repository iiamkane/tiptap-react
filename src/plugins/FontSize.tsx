import { Extension } from '@tiptap/core';

export interface FontSizeOptions {
    types: string[];
    size: string[];
    defaultSize: string;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font-size attribute
             */
            setFontSize: (alignment: string) => ReturnType;
        };
    }
}

export const FontSize = Extension.create<FontSizeOptions>({
    name: 'FontSize',

    /**添加选项 */
    addOptions() {
        return {
            types: ['textStyle'],
            size: ['12px', '14px', '16px', '18px', '20px', '22px'],
            defaultSize: '14px',
        };
    },

    // 添加全局属性
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: this.options.defaultSize,
                        parseHTML: element => element.style.fontSize || this.options.defaultSize,
                        renderHTML: attributes => {
                            if (attributes.fontSize === this.options.defaultSize) return {};

                            return { style: `font-size: ${attributes.fontSize}` };
                        },
                    },
                },
            },
        ];
    },

    /**添加命令 */
    addCommands() {
        return {
            setFontSize:
                (size: string) =>
                ({ chain }) => {
                    return chain().setMark('textStyle', { fontSize: size }).run();
                },
        };
    },
});
