import './App.css';
import FilePicker from './components/FilePicker';
import { FilePickerProps } from './types/FilePickerProps';

const props: FilePickerProps = {
  renderPreview: true,
  labelStyles: {
    textAlign: 'center',
    backgroundColor: 'purple',
    fontSize: '12px',
    padding: '5px'
  },
  labelText: 'Choose a file',
  onChange: (files: FileList): void => {
    console.log(files);
  },
  accept: ['.png', '.jpg'],
  multiple: false
};

function App() {
  return (
    <div className="App">
      <FilePicker
        renderPreview={props.renderPreview}
        labelStyles={{
          textAlign: 'center',
          backgroundColor: 'purple',
          fontSize: '12px',
          padding: '5px'
        }}
        onChange={props.onChange}
        accept={props.accept}></FilePicker>
    </div>
  );
}

export default App;
