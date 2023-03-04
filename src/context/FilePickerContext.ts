import { createContext } from 'react';
import { FilePickerProps } from '../types/FilePickerProps';

export const FilePickerContext = createContext<FilePickerProps>(undefined as any);