import React from "react";

export interface FilePickerProps {
    /* Properties */
    renderPreview: boolean;
    imageSrc?: string;
    labelStyles: React.CSSProperties;
    wrapperStyles: React.CSSProperties;
    pickerWrapperStyles: React.CSSProperties;
    activePickerWrapperStyles: React.CSSProperties;
    imageStyles: React.CSSProperties;
    previewImageStyles: React.CSSProperties;
    labelText?: string;
    accept?: string | Array<string>;
    multiple?: boolean;

    /* Methods */
    onChange(files: FileList): void;
}