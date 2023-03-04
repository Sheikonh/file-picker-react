import React from "react";

export interface FilePickerProps {
    /* Properties */
    renderPreview: boolean;
    labelStyles: React.CSSProperties;
    labelText?: string;
    accept?: string | Array<string>;
    multiple?: boolean;

    /* Methods */
    onChange(file: FileList): void;
}