import * as React from 'react';
import { FilePickerContext } from '../context/FilePickerContext';
import styled from 'styled-components';
import Preview from './Preview';
import Labels from '../constants/Labels';
import { CSSPropertiesToComponent } from '../utils/CSSPropertiesToComponent';

const Picker: React.FC = () => {
    //#region state
    const [filePreview, setFilePreview] = React.useState('');
    const [isDropActive, setIsDropActive] = React.useState(false);
    //#endregion

    //#region hooks
    const filePickerContext = React.useContext(FilePickerContext);
    //#endregion

    //#region functions
    const transformAccept = (): string => {
        const type = typeof filePickerContext.accept;

        if (type === 'string') return filePickerContext.accept as string;
        else if (type === 'object') return (filePickerContext.accept as Array<string>).join(', ');
        else return '';
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        triggerOnChange(files);
    };

    const triggerOnChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            if (filePickerContext.renderPreview) {
                const file = files[0];

                setFilePreview(URL.createObjectURL(file));
            }

            filePickerContext.onChange(files);
        }
    };

    const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        setIsDropActive(true);
    };

    const onDragLeave = (event?: React.DragEvent<HTMLDivElement>) => {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        setIsDropActive(false);
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const files = event.dataTransfer.files;

        triggerOnChange(files);

        onDragLeave();
    };

    const triggerFileInputClick = () => {
        const fileInput = document.getElementById('fileInput');

        if (fileInput) {
            fileInput.click();
        }
    };

    const renderWrapperContent = () => {
        return <>
            <input id='fileInput' type='file' hidden onChange={(event) => onChange(event)} accept={accept} multiple={filePickerContext.renderPreview ? false : filePickerContext.multiple} />
            {filePickerContext.imageSrc && <PickerImage src={filePickerContext.imageSrc} alt='' />}
            {filePickerContext.imageSrc && <OrLabel>Or</OrLabel>}
            <PickerButtonLabel>{filePickerContext.labelText || defaultLabelText}</PickerButtonLabel>
        </>;
    }
    //#endregion

    //#region constants
    const defaultLabelText = filePickerContext.multiple ? Labels.filePickerButtonLabelMultiFile : Labels.filePickerButtonLabelSingleFile;
    const accept = filePickerContext.renderPreview ? '.png, .jpg, .jpeg, .svg, .gif' : transformAccept();
    //#endregion

    //#region styled components
    const Wrapper = styled.div`${CSSPropertiesToComponent(filePickerContext.wrapperStyles)}`;
    const PickerWrapper = styled.div`
        ${isDropActive ? CSSPropertiesToComponent(filePickerContext.activePickerWrapperStyles) : CSSPropertiesToComponent(filePickerContext.pickerWrapperStyles)};
        &:hover {
            ${CSSPropertiesToComponent(filePickerContext.activePickerWrapperStyles)}
        }
    `;
    const PickerButtonLabel = styled.label`${CSSPropertiesToComponent(filePickerContext.labelStyles)}`;
    const PickerImage = styled.img`${CSSPropertiesToComponent(filePickerContext.imageStyles)}`;
    const OrLabel = styled.label`
        display: block;
    `;
    //#endregion

    //#region render
    return (
        <Wrapper>
            <PickerWrapper onClick={triggerFileInputClick} onDrag={onDrag} onDragStart={onDrag} onDragOver={onDragEnter} onDragEnter={onDragEnter} onDragEnd={onDragLeave} onDragLeave={onDragLeave} onDrop={onDrop}>
                {renderWrapperContent()}
            </PickerWrapper>
            {filePickerContext.renderPreview && <Preview filePreview={filePreview} />}
        </Wrapper>
    );
    //#endregion
};

export default Picker;