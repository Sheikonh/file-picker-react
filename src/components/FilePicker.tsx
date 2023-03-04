import * as React from 'react';
import { FilePickerContext } from '../context/FilePickerContext';
import { FilePickerProps } from '../types/FilePickerProps';
import Picker from './Picker';

const FilePicker: React.FC<FilePickerProps> = (props: FilePickerProps) => {
    return (
        <FilePickerContext.Provider value={props}>
            <Picker />
        </FilePickerContext.Provider>
    );
};

export default FilePicker;