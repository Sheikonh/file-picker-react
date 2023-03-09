# File picker react

Tired of using file pickers that are not enough customizable or have convoluted change handlers? Look no further! This file picker is built with styled-components for all your styling needs and the change handler will return the files you are looking for instead of some weird custom result!

## How to install

You can install the package via npm:

```npm i @sheikonh/file-picker```

[![npm](https://img.shields.io/badge/npm-1.0.0-orange?style=flat&logo=npm)](https://www.npmjs.com/package/@sheikonh/file-picker)

## Features

#### Customisation
The entire file picker is built with customisation in mind. All components use styled-components and React CSSProperties. To propagate styles to the components, React Context is used, so you can simply pass your custom styles as a CSSProperties object to the prop you want to style and voila!

```
const wrapperStyles: React.CSSProperties = {
  backgroundColor: 'purple'
};

<FilePicker wrapperStyles={{...wrapperStyles}} />
```

#### Ease of use
To get the files your users have selected or dropped, just attach a function to the onChange prop and you will have your files ready as a parameter, no need to transform the event result!

```
const onChange = (files: FileList) => {
  console.log('My files are here!', files);
};

<FilePicker onChange={onChange} />
```

#### Drag & drop friendly
The file picker is by default drag & drop friendly. No need to attach or configure drag & drop events!

Also, the onChange prop works for both click and select and drag & drop 😉

#### Image preview
If you want to use the file picker to show a selected image, fear not, we got you covered! Using the 'renderPreview' prop will let you show your users the beautiful picture they selected or dropped before they decide what they want to do with it.

```
<FilePicker renderPreview={true} />
```

## Changelog

- 1.0.0: First version! 🥳

## Roadmap

- Improve documentation (API reference, readme, etc...)
- Add demo
- Improve custom styling
- Improve code
- Add tests
- Add more customisation
- Improve look & feel
