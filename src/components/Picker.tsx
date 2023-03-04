import * as React from 'react';
import { FilePickerContext } from '../context/FilePickerContext';
import styled from 'styled-components';
import Preview from './Preview';
import Labels from '../constants/Labels';

const Picker: React.FC = () => {
    const [filePreview, setFilePreview] = React.useState('');

    const filePickerContext = React.useContext(FilePickerContext);

    const transformAccept = (): string => {
        const type = typeof filePickerContext.accept;

        if(type === 'string') return filePickerContext.accept as string;
        else if (type === 'object') return (filePickerContext.accept as Array<string>).join(', ');
        else return '';
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            if (filePickerContext.renderPreview) {
                const file = files[0];

                setFilePreview(URL.createObjectURL(file));
            }

            filePickerContext.onChange(files);
        }
    };

    const accept = filePickerContext.renderPreview ? '.png, .jpg, .jpeg, .svg, .gif' : transformAccept();

    const PickerWrapper = styled.div``;

    const PickerButtonLabel = styled.label`
        text-align: ${filePickerContext.labelStyles!.textAlign};
        font-size: ${filePickerContext.labelStyles!.fontSize};
        background-color: ${filePickerContext.labelStyles!.backgroundColor};
        padding: ${filePickerContext.labelStyles!.padding};
    `;

    return (
        <>
            <PickerWrapper>
                <input id='fileInput' type='file' hidden onChange={(event) => onChange(event)} accept={accept} multiple={filePickerContext.renderPreview ? false : filePickerContext.multiple} />
                <PickerButtonLabel htmlFor='fileInput'>{filePickerContext.labelText || Labels.filePickerButtonLabel}</PickerButtonLabel>
            </PickerWrapper>
            {filePickerContext.renderPreview && <Preview filePreview={filePreview} />}
        </>
    );
};

export default Picker;