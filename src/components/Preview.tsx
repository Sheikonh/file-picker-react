import React from "react";
import styled from "styled-components";
import { FilePickerContext } from "../context/FilePickerContext";
import { PreviewProps } from "../types/PreviewProps";
import { CSSPropertiesToComponent } from "../utils/CSSPropertiesToComponent";

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
    const filePickerContext = React.useContext(FilePickerContext);

    const PreviewImage = styled.img`${CSSPropertiesToComponent(filePickerContext.previewImageStyles)}`;

    return (<PreviewImage src={props.filePreview} alt='PreviewImage' />);
};

export default Preview;