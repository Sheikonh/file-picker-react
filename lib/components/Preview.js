"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _FilePickerContext = require("../context/FilePickerContext");
var _CSSPropertiesToComponent = require("../utils/CSSPropertiesToComponent");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Preview = props => {
  const filePickerContext = _react.default.useContext(_FilePickerContext.FilePickerContext);
  const PreviewImage = _styledComponents.default.img(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), (0, _CSSPropertiesToComponent.CSSPropertiesToComponent)(filePickerContext.previewImageStyles));
  return /*#__PURE__*/_react.default.createElement(PreviewImage, {
    src: props.filePreview,
    alt: "PreviewImage"
  });
};
var _default = Preview;
exports.default = _default;