webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/FilePage.js":
/*!**************************************!*\
  !*** ./pages/components/FilePage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/FilePage.css */ "./static/css/FilePage.css");
/* harmony import */ var _static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/css/Layout.css */ "./static/css/Layout.css");
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_Layout_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Scanner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Scanner */ "./pages/components/Scanner.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    antd__WEBPACK_IMPORTED_MODULE_10__["message"].error('You can only upload JPG/PNG file!');
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_10__["message"].error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
}

var Dynamsoft;
var scanner = null;

var FilePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FilePage, _React$Component);

  function FilePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FilePage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (info) {
      // console.log(info.file.originFileObj);
      if (info.file.status === 'uploading') {
        _this.setState({
          loading: true,
          file: info.file.originFileObj
        });

        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          return _this.setState({
            imageUrl: imageUrl,
            loading: false
          });
        });

        _this.decodeFile(info.file.originFileObj);
      }
    });

    _this.state = {
      showFile: true,
      loading: false,
      resultsInfo: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Dynamsoft = window.Dynamsoft;
    }
  }, {
    key: "decodeFile",
    value: function decodeFile(file) {
      var _this2 = this;

      Dynamsoft.BarcodeReader.createInstance().then(function (r) {
        r.decode(file).then(function (results) {
          if (results.length > 0) {
            console.log(results);
            var txts = [];

            for (var i = 0; i < results.length; ++i) {
              txts.push(results[i].BarcodeText);
            }

            _this2.setState({
              resultsInfo: txts
            });

            alert(txts.join("\n")); //this.value = '';
          } else {
            alert("No barcode found.");
            _this2.value = '';
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var uploadButton = __jsx("div", {
        className: "custom-upload-box"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        type: this.state.loading ? 'loading' : 'plus'
      }), __jsx("div", {
        className: "ant-upload-text"
      }, "Upload"));

      var imageUrl = this.state.imageUrl;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "jsx-4010772236" + " " + "file-container"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], {
        onBack: this.props.onBackClick,
        title: "Files"
      })), __jsx("div", {
        className: "jsx-4010772236" + " " + "upload-container"
      }, __jsx("div", {
        className: "jsx-4010772236" + " " + "upload"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Upload"], {
        name: "avatar",
        listType: "picture-card",
        showUploadList: false,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76" //beforeUpload={beforeUpload}
        ,
        onChange: this.handleChange,
        style: {
          width: 180,
          height: 180,
          display: "table"
        }
      }, imageUrl ? __jsx("img", {
        src: imageUrl,
        alt: "avatar",
        style: {
          width: '100%'
        },
        className: "jsx-4010772236"
      }) : uploadButton))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4010772236"
      }, ".file-container.jsx-4010772236{width:100%;height:100%;position:absolute;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrXFxzc3ItZGVtb1xccGFnZXNcXGNvbXBvbmVudHNcXEZpbGVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIcUIsQUFHd0MsV0FDQyxZQUNNLGtCQUNLLHVCQUMzQiIsImZpbGUiOiJEOlxcd29ya1xcc3NyLWRlbW9cXHBhZ2VzXFxjb21wb25lbnRzXFxGaWxlUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlcixVcGxvYWQsSWNvbixtZXNzYWdlfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICcuLi8uLi9zdGF0aWMvY3NzL0ZpbGVQYWdlLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3RhdGljL2Nzcy9MYXlvdXQuY3NzJztcclxuaW1wb3J0IHtSZXN1bHQsRWFjaFJlc3VsdH0gZnJvbSAnLi9TY2FubmVyJ1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuICBcclxuZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICAgIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnO1xyXG4gICAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcignWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgICBpZiAoIWlzTHQyTSkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxufVxyXG5cclxuXHJcbnZhciBEeW5hbXNvZnQ7XHJcbmxldCBzY2FubmVyID0gbnVsbDtcclxuXHJcbmNsYXNzIEZpbGVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvd0ZpbGU6dHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3VsdHNJbmZvOlwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBEeW5hbXNvZnQgPSB3aW5kb3cuRHluYW1zb2Z0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSAsZmlsZTppbmZvLmZpbGUub3JpZ2luRmlsZU9ian0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcclxuICAgICAgICAvLyBHZXQgdGhpcyB1cmwgZnJvbSByZXNwb25zZSBpbiByZWFsIHdvcmxkLlxyXG4gICAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgaW1hZ2VVcmwgPT5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGltYWdlVXJsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmRlY29kZUZpbGUoaW5mby5maWxlLm9yaWdpbkZpbGVPYmopO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZGVjb2RlRmlsZShmaWxlKXtcclxuICAgICAgICBEeW5hbXNvZnQuQmFyY29kZVJlYWRlci5jcmVhdGVJbnN0YW5jZSgpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICByLmRlY29kZShmaWxlKS50aGVuKChyZXN1bHRzKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eHRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dHMucHVzaChyZXN1bHRzW2ldLkJhcmNvZGVUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHNJbmZvOnR4dHNcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHR4dHMuam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcblx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm8gYmFyY29kZSBmb3VuZC5cIik7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS11cGxvYWQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPXt0aGlzLnN0YXRlLmxvYWRpbmcgPyAnbG9hZGluZycgOiAncGx1cyd9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlVwbG9hZDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHsgaW1hZ2VVcmwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Lyogc2hvdyB0aGUgZmlsZSBwYWdlICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VIZWFkZXIgb25CYWNrPXt0aGlzLnByb3BzLm9uQmFja0NsaWNrfSB0aXRsZT1cIkZpbGVzXCIgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDoxODAsaGVpZ2h0OjE4MCxkaXNwbGF5OlwidGFibGVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VVcmwgPyA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cImF2YXRhclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz4gOiB1cGxvYWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHRzSW5mby5sZW5ndGgmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxFYWNoUmVzdWx0IGNvbnRlbnQ9e3RoaXMuc3RhdGUucmVzdWx0c0luZm99PjwvRWFjaFJlc3VsdD5cclxuICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGUtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVQYWdlOyJdfQ== */\n/*@ sourceURL=D:\\work\\ssr-demo\\pages\\components\\FilePage.js */"));
    }
  }]);

  return FilePage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilePage);

/***/ })

})
//# sourceMappingURL=index.js.fede4e9e5ced4126302b.hot-update.js.map