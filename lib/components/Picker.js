"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url-search-params.js");
var React = _interopRequireWildcard(require("react"));
var _FilePickerContext = require("../context/FilePickerContext");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Preview = _interopRequireDefault(require("./Preview"));
var _Labels = _interopRequireDefault(require("../constants/Labels"));
var _CSSPropertiesToComponent = require("../utils/CSSPropertiesToComponent");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Picker = () => {
  //#region state
  const [filePreview, setFilePreview] = React.useState('');
  const [isDropActive, setIsDropActive] = React.useState(false);
  //#endregion

  //#region hooks
  const filePickerContext = React.useContext(_FilePickerContext.FilePickerContext);
  //#endregion

  //#region functions
  const transformAccept = () => {
    const type = typeof filePickerContext.accept;
    if (type === 'string') return filePickerContext.accept;else if (type === 'object') return filePickerContext.accept.join(', ');else return '';
  };
  const _onChange = event => {
    const files = event.target.files;
    triggerOnChange(files);
  };
  const triggerOnChange = files => {
    if (files && files.length > 0) {
      if (filePickerContext.renderPreview) {
        const file = files[0];
        setFilePreview(URL.createObjectURL(file));
      }
      filePickerContext.onChange(files);
    }
  };
  const onDrag = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  const onDragEnter = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropActive(true);
  };
  const onDragLeave = event => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsDropActive(false);
  };
  const onDrop = event => {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      id: "fileInput",
      type: "file",
      hidden: true,
      onChange: event => _onChange(event),
      accept: accept,
      multiple: filePickerContext.renderPreview ? false : filePickerContext.multiple
    }), filePickerContext.imageSrc && /*#__PURE__*/React.createElement(PickerImage, {
      src: filePickerContext.imageSrc,
      alt: ""
    }), filePickerContext.imageSrc && /*#__PURE__*/React.createElement(OrLabel, null, "Or"), /*#__PURE__*/React.createElement(PickerButtonLabel, null, filePickerContext.labelText || defaultLabelText));
  };
  //#endregion

  //#region constants
  const defaultLabelText = filePickerContext.multiple ? _Labels.default.filePickerButtonLabelMultiFile : _Labels.default.filePickerButtonLabelSingleFile;
  const accept = filePickerContext.renderPreview ? '.png, .jpg, .jpeg, .svg, .gif' : transformAccept();
  //#endregion

  //#region styled components
  const Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.wrapperStyles));
  const PickerWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        ", ";\n        &:hover {\n            ", "\n        }\n    "])), isDropActive ? (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.activePickerWrapperStyles) : (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.pickerWrapperStyles), (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.activePickerWrapperStyles));
  const PickerButtonLabel = _styledComponents.default.label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", ""])), (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.labelStyles));
  const PickerImage = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.imageStyles));
  const OrLabel = _styledComponents.default.label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        display: block;\n    "])));
  //#endregion

  //#region render
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(PickerWrapper, {
    onClick: triggerFileInputClick,
    onDrag: onDrag,
    onDragStart: onDrag,
    onDragOver: onDragEnter,
    onDragEnter: onDragEnter,
    onDragEnd: onDragLeave,
    onDragLeave: onDragLeave,
    onDrop: onDrop
  }, renderWrapperContent()), filePickerContext.renderPreview && /*#__PURE__*/React.createElement(_Preview.default, {
    filePreview: filePreview
  }));
  //#endregion
};
var _default = Picker;
exports.default = _default;