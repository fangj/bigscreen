webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _main = __webpack_require__(3);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_main2.default, null), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _editor = __webpack_require__(5);

	var _editor2 = _interopRequireDefault(_editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RestReader = __webpack_require__(37);

	var Main = function (_Component) {
	  _inherits(Main, _Component);

	  function Main(props) {
	    _classCallCheck(this, Main);

	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

	    _this.state = { screenIndex: 1 };
	    return _this;
	  }

	  _createClass(Main, [{
	    key: 'switch',
	    value: function _switch(screenIndex) {
	      this.setState({ screenIndex: screenIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var screenIndex = this.state.screenIndex;

	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'text-center' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            '大屏幕管理系统'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'masthead' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav nav-justified' },
	            _react2.default.createElement(
	              'li',
	              { className: (0, _classnames2.default)({ "active": screenIndex == 1 }) },
	              _react2.default.createElement(
	                'a',
	                { onClick: function onClick() {
	                    return _this2.switch(1);
	                  } },
	                '第一屏幕'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: (0, _classnames2.default)({ "active": screenIndex == 2 }) },
	              _react2.default.createElement(
	                'a',
	                { onClick: function onClick() {
	                    return _this2.switch(2);
	                  } },
	                '第二屏幕'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: (0, _classnames2.default)({ "active": screenIndex == 3 }) },
	              _react2.default.createElement(
	                'a',
	                { onClick: function onClick() {
	                    return _this2.switch(3);
	                  } },
	                '第三屏幕'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { className: (0, _classnames2.default)({ "active": screenIndex == 4 }) },
	              _react2.default.createElement(
	                'a',
	                { onClick: function onClick() {
	                    return _this2.switch(4);
	                  } },
	                '第四屏幕'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(RestReader, { url: '/api/screen', view: _editor2.default, screenIndex: "" + screenIndex, subscribe: ["updated"] }),
	        _react2.default.createElement(
	          'div',
	          { className: 'footer' },
	          _react2.default.createElement(
	            'p',
	            null,
	            '© 东南大学 2016'
	          )
	        )
	      );
	    }
	  }]);

	  return Main;
	}(_react.Component);

	exports.default = Main;

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _slides_editor = __webpack_require__(6);

	var _slides_editor2 = _interopRequireDefault(_slides_editor);

	var _url_editor = __webpack_require__(42);

	var _url_editor2 = _interopRequireDefault(_url_editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ = __webpack_require__(40);

	function getStateFrom(data, screenIndex) {
	  return _.find(data, { _id: screenIndex }) || { show: "url" };
	}

	var Editor = function (_React$Component) {
	  _inherits(Editor, _React$Component);

	  function Editor(props) {
	    _classCallCheck(this, Editor);

	    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

	    var data = props.data;
	    var screenIndex = props.screenIndex;

	    _this.state = getStateFrom(data, screenIndex);
	    return _this;
	  }

	  _createClass(Editor, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var screenIndex = this.props.screenIndex;
	      var show = this.state.show;

	      if (!show) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'row pad-v' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-6' },
	            _react2.default.createElement(
	              'label',
	              { className: 'radio-inline', onClick: function onClick() {
	                  return _this2.setState({ show: 'url' });
	                } },
	              _react2.default.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'url', value: 'url', checked: show == 'url' }),
	              ' 网页链接'
	            ),
	            _react2.default.createElement(
	              'label',
	              { className: 'radio-inline', onClick: function onClick() {
	                  return _this2.setState({ show: 'slides' });
	                } },
	              _react2.default.createElement('input', { type: 'radio', name: 'inlineRadioOptions', id: 'slides', value: 'slides', checked: show == 'slides' }),
	              ' 幻灯片'
	            )
	          ),
	          _react2.default.createElement('div', { className: 'col-sm-5' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-1' },
	            _react2.default.createElement(
	              'a',
	              { type: 'button', className: 'btn btn-success', target: '_blank', href: "/show/" + screenIndex },
	              '预览'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'row pad-v' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-sm-12' },
	            show == "url" ? _react2.default.createElement(_url_editor2.default, { data: this.state, screenIndex: screenIndex }) : _react2.default.createElement(_slides_editor2.default, { data: this.state, screenIndex: screenIndex })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var data = nextProps.data;
	      var screenIndex = nextProps.screenIndex;

	      this.state = getStateFrom(data, screenIndex);
	      this.setState({ state: this.state });
	    }
	  }]);

	  return Editor;
	}(_react2.default.Component);

	Editor.propTypes = {
	  name: _react2.default.PropTypes.string
	};
	exports.default = Editor;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _image_editor = __webpack_require__(7);

	var _image_editor2 = _interopRequireDefault(_image_editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SlidesEditor = function (_React$Component) {
	  _inherits(SlidesEditor, _React$Component);

	  function SlidesEditor(props) {
	    _classCallCheck(this, SlidesEditor);

	    return _possibleConstructorReturn(this, (SlidesEditor.__proto__ || Object.getPrototypeOf(SlidesEditor)).call(this, props));
	  }

	  _createClass(SlidesEditor, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var screenIndex = _props.screenIndex;

	      return _react2.default.createElement(_image_editor2.default, { data: data, screenIndex: screenIndex });
	    }
	  }]);

	  return SlidesEditor;
	}(_react2.default.Component);

	SlidesEditor.propTypes = {
	  name: _react2.default.PropTypes.string
	};
	exports.default = SlidesEditor;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _image_uploader = __webpack_require__(9);

	var _image_uploader2 = _interopRequireDefault(_image_uploader);

	var _pubsubJs = __webpack_require__(34);

	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(35);

	var agent = __webpack_require__(28)(__webpack_require__(29), Promise);

	var RestReader = __webpack_require__(37);
	var _ = __webpack_require__(40);

	var ThumbView = function ThumbView(props) {
	    return props.data ? React.createElement('img', { src: props.data.url, onClick: function onClick(_) {
	            return _pubsubJs2.default.publish('img-remove', props.data.url);
	        } }) : React.createElement('div', null);
	};
	var browser = function browser(props) {
	    var ThumbView = props.thumbView;
	    console.log('ThumbView', props.data);
	    return React.createElement(
	        'div',
	        { className: 'browser' },
	        props.data.slides.map(function (d, i) {
	            return React.createElement(ThumbView, { data: d, key: i });
	        })
	    );
	};

	var ImageEditor = function (_React$Component) {
	    _inherits(ImageEditor, _React$Component);

	    function ImageEditor(props) {
	        _classCallCheck(this, ImageEditor);

	        var _this = _possibleConstructorReturn(this, (ImageEditor.__proto__ || Object.getPrototypeOf(ImageEditor)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ImageEditor, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _props = this.props;
	            var data = _props.data;
	            var screenIndex = _props.screenIndex;

	            return React.createElement(
	                'div',
	                { className: 'image_editor' },
	                React.createElement(_image_uploader2.default, { data: data, screenIndex: screenIndex }),
	                React.createElement(RestReader, { view: browser, url: "/api/screen/" + screenIndex, thumbView: ThumbView, subscribe: ['img-removed', 'img-uploaded'] })
	            );
	        }
	    }, {
	        key: 'removeImage',
	        value: function removeImage(data, url) {
	            // var idx=_.findIndex(slides, {type:"img",url:url});
	            _.remove(data.slides, { type: "img", url: url });
	            agent.put('/api/screen/' + data._id, data).then(function (_) {
	                return _pubsubJs2.default.publish('img-removed');
	            }); //更新
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var me = this;
	            var _props2 = this.props;
	            var data = _props2.data;
	            var screenIndex = _props2.screenIndex;

	            var mySubscriber = function mySubscriber(url) {
	                console.log("remove", url);
	                me.removeImage(data, url);
	            };
	            this.token = _pubsubJs2.default.subscribe('img-remove', mySubscriber);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _pubsubJs2.default.unsubscribe(this.token);
	        }
	    }]);

	    return ImageEditor;
	}(React.Component);

	module.exports = ImageEditor;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(11);
	var UploadZone = __webpack_require__(15);

	var agent = __webpack_require__(28)(__webpack_require__(29), Promise);
	var PubSub = __webpack_require__(34);

	var ImageUploader = function (_React$Component) {
	    _inherits(ImageUploader, _React$Component);

	    function ImageUploader(props) {
	        _classCallCheck(this, ImageUploader);

	        var _this = _possibleConstructorReturn(this, (ImageUploader.__proto__ || Object.getPrototypeOf(ImageUploader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ImageUploader, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var url = this.state.url;

	            return React.createElement(
	                'div',
	                { className: 'image_uploader' },
	                React.createElement(UploadZone, { url: '/upload', onUploaded: this.onUploaded.bind(this), accept: 'image/*' })
	            );
	        }
	    }, {
	        key: 'onUploaded',
	        value: function onUploaded(files) {
	            console.log(files[0]);
	            var url = files[0].url;
	            this.setState({ url: url });

	            var _props = this.props;
	            var screenIndex = _props.screenIndex;
	            var data = _props.data;

	            var slides = data.slides || [];
	            slides.push({ type: "img", url: url });
	            var obj = {
	                _id: screenIndex,
	                show: "slides",
	                slides: slides
	            };
	            if (!data._id) {
	                agent.post('/api/screen', obj).then(function (_) {
	                    return PubSub.publish('img-uploaded');
	                }); //创建
	            } else {
	                agent.put('/api/screen/' + data._id, obj).then(function (_) {
	                    return PubSub.publish('img-uploaded');
	                }); //更新
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return ImageUploader;
	}(React.Component);

	module.exports = ImageUploader;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	__webpack_require__(17);
	var Dropzone = __webpack_require__(21);
	var agent = __webpack_require__(22)(__webpack_require__(23), Promise);

	var DefaultView = function DefaultView(props) {
	    return React.createElement('div', { style: { fontSize: "120px", textAlign: "center" } }, '+');
	};

	var UploadZone = function (_React$Component) {
	    _inherits(UploadZone, _React$Component);

	    function UploadZone(props) {
	        _classCallCheck(this, UploadZone);

	        var _this = _possibleConstructorReturn(this, (UploadZone.__proto__ || Object.getPrototypeOf(UploadZone)).call(this, props));

	        _this.state = {
	            children: props.children
	        };
	        return _this;
	    }

	    _createClass(UploadZone, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _props = this.props;
	            var url = _props.url;
	            var onUploaded = _props.onUploaded;

	            var others = _objectWithoutProperties(_props, ['url', 'onUploaded']);

	            return React.createElement(Dropzone, _extends({ onDrop: this.onDrop.bind(this) }, others), this.state.children || React.createElement(DefaultView, null));
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(files) {
	            var me = this;
	            console.log('Received files: ', files);
	            var file = files[0];
	            if (!file) {
	                return;
	            }
	            var _props2 = this.props;
	            var url = _props2.url;
	            var onUploaded = _props2.onUploaded;

	            if (!onUploaded || typeof onUploaded !== 'function') {
	                return;
	            }
	            agent.post(url).attach('files', file, file.name).on('progress', me.onProgress.bind(me)).then(function (res) {
	                var result = res.body;
	                file.url = result.url;
	                onUploaded([file]);
	            });
	        }
	    }, {
	        key: 'onProgress',
	        value: function onProgress(e) {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({ children: nextProps.children });
	        }
	    }]);

	    return UploadZone;
	}(React.Component);

	UploadZone.propTypes = {
	    children: React.PropTypes.node, // Contents of the dropzone
	    url: React.PropTypes.string.isRequired,
	    onUploaded: React.PropTypes.func.isRequired
	};

	module.exports = UploadZone;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["Dropzone"] = factory(require("react"));
		else
			root["Dropzone"] = factory(root["react"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _attrAccept = __webpack_require__(1);
		
		var _attrAccept2 = _interopRequireDefault(_attrAccept);
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
		
		var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
		
		var Dropzone = function (_React$Component) {
		  _inherits(Dropzone, _React$Component);
		
		  function Dropzone(props, context) {
		    _classCallCheck(this, Dropzone);
		
		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropzone).call(this, props, context));
		
		    _this.onClick = _this.onClick.bind(_this);
		    _this.onDragStart = _this.onDragStart.bind(_this);
		    _this.onDragEnter = _this.onDragEnter.bind(_this);
		    _this.onDragLeave = _this.onDragLeave.bind(_this);
		    _this.onDragOver = _this.onDragOver.bind(_this);
		    _this.onDrop = _this.onDrop.bind(_this);
		
		    _this.state = {
		      isDragActive: false
		    };
		    return _this;
		  }
		
		  _createClass(Dropzone, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.enterCounter = 0;
		    }
		  }, {
		    key: 'onDragStart',
		    value: function onDragStart(e) {
		      if (this.props.onDragStart) {
		        this.props.onDragStart.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDragEnter',
		    value: function onDragEnter(e) {
		      e.preventDefault();
		
		      // Count the dropzone and any children that are entered.
		      ++this.enterCounter;
		
		      // This is tricky. During the drag even the dataTransfer.files is null
		      // But Chrome implements some drag store, which is accesible via dataTransfer.items
		      var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];
		
		      // Now we need to convert the DataTransferList to Array
		      var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));
		
		      this.setState({
		        isDragActive: allFilesAccepted,
		        isDragReject: !allFilesAccepted
		      });
		
		      if (this.props.onDragEnter) {
		        this.props.onDragEnter.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDragOver',
		    value: function onDragOver(e) {
		      e.preventDefault();
		      e.stopPropagation();
		      e.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
		      return false;
		    }
		  }, {
		    key: 'onDragLeave',
		    value: function onDragLeave(e) {
		      e.preventDefault();
		
		      // Only deactivate once the dropzone and all children was left.
		      if (--this.enterCounter > 0) {
		        return;
		      }
		
		      this.setState({
		        isDragActive: false,
		        isDragReject: false
		      });
		
		      if (this.props.onDragLeave) {
		        this.props.onDragLeave.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDrop',
		    value: function onDrop(e) {
		      e.preventDefault();
		
		      // Reset the counter along with the drag on a drop.
		      this.enterCounter = 0;
		
		      this.setState({
		        isDragActive: false,
		        isDragReject: false
		      });
		
		      var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
		      var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
		      var files = [];
		
		      for (var i = 0; i < max; i++) {
		        var file = droppedFiles[i];
		        // We might want to disable the preview creation to support big files
		        if (!this.props.disablePreview) {
		          file.preview = window.URL.createObjectURL(file);
		        }
		        files.push(file);
		      }
		
		      if (this.allFilesAccepted(files) && this.allFilesMatchSize(files)) {
		        if (this.props.onDrop) {
		          this.props.onDrop.call(this, files, e);
		        }
		
		        if (this.props.onDropAccepted) {
		          this.props.onDropAccepted.call(this, files, e);
		        }
		      } else {
		        if (this.props.onDropRejected) {
		          this.props.onDropRejected.call(this, files, e);
		        }
		      }
		    }
		  }, {
		    key: 'onClick',
		    value: function onClick() {
		      if (!this.props.disableClick) {
		        this.open();
		      }
		    }
		  }, {
		    key: 'allFilesAccepted',
		    value: function allFilesAccepted(files) {
		      var _this2 = this;
		
		      return files.every(function (file) {
		        return (0, _attrAccept2.default)(file, _this2.props.accept);
		      });
		    }
		  }, {
		    key: 'allFilesMatchSize',
		    value: function allFilesMatchSize(files) {
		      var _this3 = this;
		
		      return files.every(function (file) {
		        return file.size <= _this3.props.maxSize && file.size >= _this3.props.minSize;
		      });
		    }
		  }, {
		    key: 'open',
		    value: function open() {
		      this.fileInputEl.value = null;
		      this.fileInputEl.click();
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _this4 = this;
		
		      var _props = this.props;
		      var accept = _props.accept;
		      var activeClassName = _props.activeClassName;
		      var inputProps = _props.inputProps;
		      var multiple = _props.multiple;
		      var name = _props.name;
		      var rejectClassName = _props.rejectClassName;
		
		      var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);
		
		      var activeStyle = rest.activeStyle;
		      var className = rest.className;
		      var rejectStyle = rest.rejectStyle;
		      var style = rest.style;
		
		      var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
		
		      var _state = this.state;
		      var isDragActive = _state.isDragActive;
		      var isDragReject = _state.isDragReject;
		
		
		      className = className || '';
		
		      if (isDragActive && activeClassName) {
		        className += ' ' + activeClassName;
		      }
		      if (isDragReject && rejectClassName) {
		        className += ' ' + rejectClassName;
		      }
		
		      if (!className && !style && !activeStyle && !rejectStyle) {
		        style = {
		          width: 200,
		          height: 200,
		          borderWidth: 2,
		          borderColor: '#666',
		          borderStyle: 'dashed',
		          borderRadius: 5
		        };
		        activeStyle = {
		          borderStyle: 'solid',
		          backgroundColor: '#eee'
		        };
		        rejectStyle = {
		          borderStyle: 'solid',
		          backgroundColor: '#ffdddd'
		        };
		      }
		
		      var appliedStyle = void 0;
		      if (activeStyle && isDragActive) {
		        appliedStyle = _extends({}, style, activeStyle);
		      } else if (rejectStyle && isDragReject) {
		        appliedStyle = _extends({}, style, rejectStyle);
		      } else {
		        appliedStyle = _extends({}, style);
		      }
		
		      var inputAttributes = {
		        accept: accept,
		        type: 'file',
		        style: { display: 'none' },
		        multiple: supportMultiple && multiple,
		        ref: function ref(el) {
		          return _this4.fileInputEl = el;
		        }, // eslint-disable-line
		        onChange: this.onDrop
		      };
		
		      if (name && name.length) {
		        inputAttributes.name = name;
		      }
		
		      // Remove custom properties before passing them to the wrapper div element
		      var customProps = ['disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected', 'maxSize', 'minSize'];
		      var divProps = _extends({}, props);
		      customProps.forEach(function (prop) {
		        return delete divProps[prop];
		      });
		
		      return _react2.default.createElement(
		        'div',
		        _extends({
		          className: className,
		          style: appliedStyle
		        }, divProps /* expand user provided props first so event handlers are never overridden */, {
		          onClick: this.onClick,
		          onDragStart: this.onDragStart,
		          onDragEnter: this.onDragEnter,
		          onDragOver: this.onDragOver,
		          onDragLeave: this.onDragLeave,
		          onDrop: this.onDrop
		        }),
		        this.props.children,
		        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
		      );
		    }
		  }]);
		
		  return Dropzone;
		}(_react2.default.Component);
		
		Dropzone.defaultProps = {
		  disablePreview: false,
		  disableClick: false,
		  multiple: true,
		  maxSize: Infinity,
		  minSize: 0
		};
		
		Dropzone.propTypes = {
		  // Overriding drop behavior
		  onDrop: _react2.default.PropTypes.func,
		  onDropAccepted: _react2.default.PropTypes.func,
		  onDropRejected: _react2.default.PropTypes.func,
		
		  // Overriding drag behavior
		  onDragStart: _react2.default.PropTypes.func,
		  onDragEnter: _react2.default.PropTypes.func,
		  onDragLeave: _react2.default.PropTypes.func,
		
		  children: _react2.default.PropTypes.node, // Contents of the dropzone
		  style: _react2.default.PropTypes.object, // CSS styles to apply
		  activeStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be accepted
		  rejectStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be rejected
		  className: _react2.default.PropTypes.string, // Optional className
		  activeClassName: _react2.default.PropTypes.string, // className for accepted state
		  rejectClassName: _react2.default.PropTypes.string, // className for rejected state
		
		  disablePreview: _react2.default.PropTypes.bool, // Enable/disable preview generation
		  disableClick: _react2.default.PropTypes.bool, // Disallow clicking on the dropzone container to open file dialog
		
		  inputProps: _react2.default.PropTypes.object, // Pass additional attributes to the <input type="file"/> tag
		  multiple: _react2.default.PropTypes.bool, // Allow dropping multiple files
		  accept: _react2.default.PropTypes.string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
		  name: _react2.default.PropTypes.string, // name attribute for the input tag
		  maxSize: _react2.default.PropTypes.number,
		  minSize: _react2.default.PropTypes.number
		};
		
		exports.default = Dropzone;
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=index.js.map

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Promise wrapper for superagent
	 */

	function wrap(superagent, Promise) {
	  /**
	   * Request object similar to superagent.Request, but with end() returning
	   * a promise.
	   */
	  function PromiseRequest() {
	    superagent.Request.apply(this, arguments);
	  }

	  // Inherit form superagent.Request
	  PromiseRequest.prototype = Object.create(superagent.Request.prototype);

	  /** Send request and get a promise that `end` was emitted */
	  PromiseRequest.prototype.end = function(cb) {
	    var _end = superagent.Request.prototype.end;
	    var self = this;

	    return new Promise(function(accept, reject) {
	      _end.call(self, function(err, response) {
	        if (cb) {
	          cb(err, response);
	        }

	        if (err) {
	          err.response = response;
	          reject(err);
	        } else {
	          accept(response);
	        }
	      });
	    });
	  };

	  /** Provide a more promise-y interface */
	  PromiseRequest.prototype.then = function(resolve, reject) {
	    var _end = superagent.Request.prototype.end;
	    var self = this;

	    return new Promise(function(accept, reject) {
	      _end.call(self, function(err, response) {
	        if (err) {
	          err.response = response;
	          reject(err);
	        } else {
	          accept(response);
	        }
	      });
	    }).then(resolve, reject);
	  };

	  /**
	   * Request builder with same interface as superagent.
	   * It is convenient to import this as `request` in place of superagent.
	   */
	  var request = function(method, url) {
	    return new PromiseRequest(method, url);
	  };

	  /** Helper for making an options request */
	  request.options = function(url) {
	    return request('OPTIONS', url);
	  }

	  /** Helper for making a head request */
	  request.head = function(url, data) {
	    var req = request('HEAD', url);
	    if (data) {
	      req.send(data);
	    }
	    return req;
	  };

	  /** Helper for making a get request */
	  request.get = function(url, data) {
	    var req = request('GET', url);
	    if (data) {
	      req.query(data);
	    }
	    return req;
	  };

	  /** Helper for making a post request */
	  request.post = function(url, data) {
	    var req = request('POST', url);
	    if (data) {
	      req.send(data);
	    }
	    return req;
	  };

	  /** Helper for making a put request */
	  request.put = function(url, data) {
	    var req = request('PUT', url);
	    if (data) {
	      req.send(data);
	    }
	    return req;
	  };

	  /** Helper for making a patch request */
	  request.patch = function(url, data) {
	    var req = request('PATCH', url);
	    if (data) {
	      req.send(data);
	    }
	    return req;
	  };

	  /** Helper for making a delete request */
	  request.del = function(url) {
	    return request('DELETE', url);
	  };

	  // Export the request builder
	  return request;
	}

	module.exports = wrap;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = this;
	}

	var Emitter = __webpack_require__(24);
	var requestBase = __webpack_require__(25);
	var isObject = __webpack_require__(26);

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Expose `request`.
	 */

	var request = module.exports = __webpack_require__(27).bind(null, Request);

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  throw Error("Browser-only verison of superagent could not find XHR");
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    pushEncodedKeyValuePair(pairs, key, obj[key]);
	  }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (val != null) {
	    if (Array.isArray(val)) {
	      val.forEach(function(v) {
	        pushEncodedKeyValuePair(pairs, key, v);
	      });
	    } else if (isObject(val)) {
	      for(var subkey in val) {
	        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	      }
	    } else {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(val));
	    }
	  } else if (val === null) {
	    pairs.push(encodeURIComponent(key));
	  }
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] =
	        decodeURIComponent(pair.slice(pos + 1));
	    }
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return str.split(/ *; */).reduce(function(obj, str){
	    var parts = str.split(/ *= */),
	        key = parts.shift(),
	        val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this._setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this._parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype._setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype._parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype._setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    var new_err;
	    try {
	      if (res.status < 200 || res.status >= 300) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	        new_err.original = err;
	        new_err.response = res;
	        new_err.status = res.status;
	      }
	    } catch(e) {
	      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
	    }

	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}

	/**
	 * Mixin `Emitter` and `requestBase`.
	 */

	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }

	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;

	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};

	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype._timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */

	Request.prototype._appendQueryString = function(){
	  var query = this._query.join('&');
	  if (query) {
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self._timeoutError();
	      if (self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  this._appendQueryString();

	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};


	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.options = function(url, data, fn){
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	if (true) {
	  module.exports = Emitter;
	}

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(26);

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */

	exports.serialize = function serialize(fn){
	  this._serializer = fn;
	  return this;
	};

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} reject
	 * @return {Request}
	 */

	exports.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
	      self.end(function(err, res){
	        if (err) innerReject(err); else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	}

	/**
	 * Allow for extension
	 */

	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}


	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */

	exports.getHeader = exports.get;

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	exports.abort = function(){
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	exports.withCredentials = function(){
	  // This is browser-only functionality. Node side is no-op.
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.redirects = function(n){
	  this._maxRedirects = n;
	  return this;
	};

	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */

	exports.toJSON = function(){
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header
	  };
	};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	exports._isHost = function _isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	exports.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || this._isHost(data)) return this;

	  // default to json
	  if (!type) this.type('json');
	  return this;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return null !== obj && 'object' === typeof obj;
	}

	module.exports = isObject;


/***/ },
/* 27 */
/***/ function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }

	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }

	  return new RequestConstructor(method, url);
	}

	module.exports = request;


/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports) {

	module.exports = PubSub;

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(38);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var util = __webpack_require__(39);

	var agent = __webpack_require__(22)(__webpack_require__(23), Promise);

	var RestReader = function (_React$Component) {
	    _inherits(RestReader, _React$Component);

	    function RestReader(props) {
	        _classCallCheck(this, RestReader);

	        var _this = _possibleConstructorReturn(this, (RestReader.__proto__ || Object.getPrototypeOf(RestReader)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RestReader, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var data = this.state.data;

	            if (!data) {
	                return null;
	            } else {
	                var _props = this.props;
	                var view = _props.view;

	                var others = _objectWithoutProperties(_props, ['view']);

	                var View = view;
	                return React.createElement(View, _extends({ data: data }, others));
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetchData(this.props);

	            var me = this;
	            var mySubscriber = function mySubscriber(msg, data) {
	                console.log(msg, data);
	                me.fetchData(me.props);
	            };
	            var subscribe = this.props.subscribe || [];
	            this.tokens = subscribe.map(function (msg) {
	                console.log('subscribe msg', msg);
	                return PubSub.subscribe(msg, mySubscriber);
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this2 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (data) {
	                _this2.setState({ data: data });
	            }).catch(function (reason) {
	                //console.log('isCanceled', reason.isCanceled);
	                if (!reason.isCanceled) {
	                    // console.log('catch',reason)
	                    // Promise.reject(reason);
	                    throw reason;
	                }
	            });
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var url = props.url;
	            // console.log('restreader _fetchData',url);

	            return agent.get(url).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.fetchData(nextProps);
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.cancelablePromise.cancel();
	            this.tokens.map(function (token) {
	                PubSub.unsubscribe(token);
	                console.log('unsubscribe', token);
	            });
	        }
	    }]);

	    return RestReader;
	}(React.Component);

	RestReader.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    url: _react.PropTypes.string.isRequired,
	    subscribe: React.PropTypes.array
	};

	module.exports = RestReader;

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var makeCancelable = exports.makeCancelable = function makeCancelable(promise) {
	  var hasCanceled_ = false;

	  var wrappedPromise = new Promise(function (resolve, reject) {
	    promise.then(function (val) {
	      return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val);
	    });
	    promise.catch(function (error) {
	      return hasCanceled_ ? reject({ isCanceled: true }) : reject(error);
	    });
	  });

	  return {
	    promise: wrappedPromise,
	    cancel: function cancel() {
	      hasCanceled_ = true;
	    }
	  };
	};

/***/ },
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonschemaForm = __webpack_require__(43);

	var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RestWriter = __webpack_require__(88);

	var schema = {
	  title: "网页链接编辑",
	  type: "object",
	  required: ["url"],
	  properties: {
	    url: { type: "string", title: "网址", default: "http://www.seu.edu.cn" }
	  }
	};

	var UrlEditor = function (_React$Component) {
	  _inherits(UrlEditor, _React$Component);

	  function UrlEditor(props) {
	    _classCallCheck(this, UrlEditor);

	    return _possibleConstructorReturn(this, (UrlEditor.__proto__ || Object.getPrototypeOf(UrlEditor)).call(this, props));
	  }

	  _createClass(UrlEditor, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var screenIndex = _props.screenIndex;

	      var urlFormCreate = function urlFormCreate(props) {
	        return _react2.default.createElement(
	          _reactJsonschemaForm2.default,
	          { schema: schema, onSubmit: function onSubmit(obj) {
	              var formData = obj.formData;
	              formData.show = "url";
	              formData._id = screenIndex;
	              formData.url = obj.formData.url;
	              props.save(formData);
	            } },
	          ' ',
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'btn btn-success' },
	            '保存'
	          )
	        );
	      };
	      var urlFormUpdate = function urlFormUpdate(props) {
	        return _react2.default.createElement(
	          _reactJsonschemaForm2.default,
	          { schema: schema, formData: props.data, onSubmit: function onSubmit(obj) {
	              var formData = obj.formData;
	              formData.show = "url";
	              formData._id = screenIndex;
	              formData.url = obj.formData.url;
	              props.update(obj.formData);
	            } },
	          _react2.default.createElement(
	            'div',
	            { className: 'btn-toolbar' },
	            _react2.default.createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-success' },
	              '保存'
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'btn btn-danger', onClick: props.remove },
	              '删除'
	            )
	          )
	        );
	      };

	      if (data._id) {
	        return _react2.default.createElement(RestWriter, { id: data._id, url: '/api/screen', view: urlFormUpdate, publish: 'updated' });
	      } else {
	        return _react2.default.createElement(RestWriter, { url: '/api/screen', view: urlFormCreate, publish: 'updated' });
	      }
	    }
	  }]);

	  return UrlEditor;
	}(_react2.default.Component);

	UrlEditor.propTypes = {
	  name: _react2.default.PropTypes.string
	};
	exports.default = UrlEditor;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(44);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Form2.default;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SchemaField2 = __webpack_require__(46);

	var _SchemaField3 = _interopRequireDefault(_SchemaField2);

	var _TitleField2 = __webpack_require__(50);

	var _TitleField3 = _interopRequireDefault(_TitleField2);

	var _DescriptionField2 = __webpack_require__(51);

	var _DescriptionField3 = _interopRequireDefault(_DescriptionField2);

	var _ErrorList = __webpack_require__(77);

	var _ErrorList2 = _interopRequireDefault(_ErrorList);

	var _utils = __webpack_require__(47);

	var _validate = __webpack_require__(78);

	var _validate2 = _interopRequireDefault(_validate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_Component) {
	  _inherits(Form, _Component);

	  function Form(props) {
	    _classCallCheck(this, Form);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

	    _this.onChange = function (formData) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { validate: false } : arguments[1];

	      var mustValidate = !_this.props.noValidate && (_this.props.liveValidate || options.validate);
	      var state = { status: "editing", formData: formData };
	      if (mustValidate) {
	        var _this$validate = _this.validate(formData);

	        var errors = _this$validate.errors;
	        var errorSchema = _this$validate.errorSchema;

	        state = _extends({}, state, { errors: errors, errorSchema: errorSchema });
	      }
	      (0, _utils.setState)(_this, state, function () {
	        if (_this.props.onChange) {
	          _this.props.onChange(_this.state);
	        }
	      });
	    };

	    _this.onSubmit = function (event) {
	      event.preventDefault();
	      _this.setState({ status: "submitted" });

	      if (!_this.props.noValidate) {
	        var _ret = function () {
	          var _this$validate2 = _this.validate(_this.state.formData);

	          var errors = _this$validate2.errors;
	          var errorSchema = _this$validate2.errorSchema;

	          if (Object.keys(errors).length > 0) {
	            (0, _utils.setState)(_this, { errors: errors, errorSchema: errorSchema }, function () {
	              if (_this.props.onError) {
	                _this.props.onError(errors);
	              } else {
	                console.error("Form validation failed", errors);
	              }
	            });
	            return {
	              v: void 0
	            };
	          }
	        }();

	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }

	      if (_this.props.onSubmit) {
	        _this.props.onSubmit(_this.state);
	      }
	      _this.setState({ status: "initial", errors: [], errorSchema: {} });
	    };

	    _this.state = _this.getStateFromProps(props);
	    return _this;
	  }

	  _createClass(Form, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState(this.getStateFromProps(nextProps));
	    }
	  }, {
	    key: "getStateFromProps",
	    value: function getStateFromProps(props) {
	      var state = this.state || {};
	      var schema = "schema" in props ? props.schema : this.props.schema;
	      var uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
	      var edit = typeof props.formData !== "undefined";
	      var liveValidate = props.liveValidate || this.props.liveValidate;
	      var mustValidate = edit && !props.noValidate && liveValidate;
	      var definitions = schema.definitions;

	      var formData = (0, _utils.getDefaultFormState)(schema, props.formData, definitions);

	      var _ref = mustValidate ? this.validate(formData, schema) : {
	        errors: state.errors || [],
	        errorSchema: state.errorSchema || {}
	      };

	      var errors = _ref.errors;
	      var errorSchema = _ref.errorSchema;

	      var idSchema = (0, _utils.toIdSchema)(schema, uiSchema["ui:rootFieldId"], definitions);
	      return {
	        status: "initial",
	        schema: schema,
	        uiSchema: uiSchema,
	        idSchema: idSchema,
	        formData: formData,
	        edit: edit,
	        errors: errors,
	        errorSchema: errorSchema
	      };
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "validate",
	    value: function validate(formData, schema) {
	      var validate = this.props.validate;

	      return (0, _validate2.default)(formData, schema || this.props.schema, validate);
	    }
	  }, {
	    key: "renderErrors",
	    value: function renderErrors() {
	      var _state = this.state;
	      var status = _state.status;
	      var errors = _state.errors;
	      var showErrorList = this.props.showErrorList;


	      if (status !== "editing" && errors.length && showErrorList != false) {
	        return _react2.default.createElement(_ErrorList2.default, { errors: errors });
	      }
	      return null;
	    }
	  }, {
	    key: "getRegistry",
	    value: function getRegistry() {
	      // For BC, accept passed SchemaField and TitleField props and pass them to
	      // the "fields" registry one.
	      var _SchemaField = this.props.SchemaField || _SchemaField3.default;
	      var _TitleField = this.props.TitleField || _TitleField3.default;
	      var _DescriptionField = this.props.DescriptionField || _DescriptionField3.default;

	      var fields = Object.assign({
	        SchemaField: _SchemaField,
	        TitleField: _TitleField,
	        DescriptionField: _DescriptionField
	      }, this.props.fields);
	      return {
	        fields: fields,
	        FieldTemplate: this.props.FieldTemplate,
	        widgets: this.props.widgets || {},
	        definitions: this.props.schema.definitions || {},
	        formContext: this.props.formContext || {}
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var safeRenderCompletion = _props.safeRenderCompletion;
	      var id = _props.id;
	      var className = _props.className;
	      var name = _props.name;
	      var method = _props.method;
	      var target = _props.target;
	      var action = _props.action;
	      var autocomplete = _props.autocomplete;
	      var enctype = _props.enctype;
	      var acceptcharset = _props.acceptcharset;
	      var _state2 = this.state;
	      var schema = _state2.schema;
	      var uiSchema = _state2.uiSchema;
	      var formData = _state2.formData;
	      var errorSchema = _state2.errorSchema;
	      var idSchema = _state2.idSchema;

	      var registry = this.getRegistry();
	      var _SchemaField = registry.fields.SchemaField;

	      return _react2.default.createElement(
	        "form",
	        { className: className ? className : "rjsf",
	          id: id,
	          name: name,
	          method: method,
	          target: target,
	          action: action,
	          autoComplete: autocomplete,
	          encType: enctype,
	          acceptCharset: acceptcharset,
	          onSubmit: this.onSubmit },
	        this.renderErrors(),
	        _react2.default.createElement(_SchemaField, {
	          schema: schema,
	          uiSchema: uiSchema,
	          errorSchema: errorSchema,
	          idSchema: idSchema,
	          formData: formData,
	          onChange: this.onChange,
	          registry: registry,
	          safeRenderCompletion: safeRenderCompletion }),
	        children ? children : _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(
	            "button",
	            { type: "submit", className: "btn btn-info" },
	            "Submit"
	          )
	        )
	      );
	    }
	  }]);

	  return Form;
	}(_react.Component);

	Form.defaultProps = {
	  uiSchema: {},
	  noValidate: false,
	  liveValidate: false,
	  safeRenderCompletion: false
	};
	exports.default = Form;


	if (process.env.NODE_ENV !== "production") {
	  Form.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object,
	    formData: _react.PropTypes.any,
	    widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])),
	    fields: _react.PropTypes.objectOf(_react.PropTypes.func),
	    FieldTemplate: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    onError: _react.PropTypes.func,
	    showErrorList: _react.PropTypes.bool,
	    onSubmit: _react.PropTypes.func,
	    id: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    name: _react.PropTypes.string,
	    method: _react.PropTypes.string,
	    target: _react.PropTypes.string,
	    action: _react.PropTypes.string,
	    autocomplete: _react.PropTypes.string,
	    enctype: _react.PropTypes.string,
	    acceptcharset: _react.PropTypes.string,
	    noValidate: _react.PropTypes.bool,
	    liveValidate: _react.PropTypes.bool,
	    safeRenderCompletion: _react.PropTypes.bool,
	    formContext: _react.PropTypes.object
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	var _ArrayField = __webpack_require__(70);

	var _ArrayField2 = _interopRequireDefault(_ArrayField);

	var _BooleanField = __webpack_require__(71);

	var _BooleanField2 = _interopRequireDefault(_BooleanField);

	var _NumberField = __webpack_require__(73);

	var _NumberField2 = _interopRequireDefault(_NumberField);

	var _ObjectField = __webpack_require__(75);

	var _ObjectField2 = _interopRequireDefault(_ObjectField);

	var _StringField = __webpack_require__(74);

	var _StringField2 = _interopRequireDefault(_StringField);

	var _UnsupportedField = __webpack_require__(76);

	var _UnsupportedField2 = _interopRequireDefault(_UnsupportedField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUIRED_FIELD_SYMBOL = "*";
	var COMPONENT_TYPES = {
	  array: _ArrayField2.default,
	  boolean: _BooleanField2.default,
	  integer: _NumberField2.default,
	  number: _NumberField2.default,
	  object: _ObjectField2.default,
	  string: _StringField2.default
	};

	function getFieldComponent(schema, uiSchema, fields) {
	  var field = uiSchema["ui:field"];
	  if (typeof field === "function") {
	    return field;
	  }
	  if (typeof field === "string" && field in fields) {
	    return fields[field];
	  }
	  return COMPONENT_TYPES[schema.type] || _UnsupportedField2.default;
	}

	function Label(props) {
	  var label = props.label;
	  var required = props.required;
	  var id = props.id;

	  if (!label) {
	    return null;
	  }
	  return _react2.default.createElement(
	    "label",
	    { className: "control-label", htmlFor: id },
	    required ? label + REQUIRED_FIELD_SYMBOL : label
	  );
	}

	function Help(props) {
	  var help = props.help;

	  if (!help) {
	    return null;
	  }
	  if (typeof help === "string") {
	    return _react2.default.createElement(
	      "p",
	      { className: "help-block" },
	      help
	    );
	  }
	  return _react2.default.createElement(
	    "div",
	    { className: "help-block" },
	    help
	  );
	}

	function ErrorList(props) {
	  var _props$errors = props.errors;
	  var errors = _props$errors === undefined ? [] : _props$errors;

	  if (errors.length === 0) {
	    return null;
	  }
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement("p", null),
	    _react2.default.createElement(
	      "ul",
	      { className: "error-detail bs-callout bs-callout-info" },
	      errors.map(function (error, index) {
	        return _react2.default.createElement(
	          "li",
	          { className: "text-danger", key: index },
	          error
	        );
	      })
	    )
	  );
	}

	function DefaultTemplate(props) {
	  var id = props.id;
	  var classNames = props.classNames;
	  var label = props.label;
	  var children = props.children;
	  var errors = props.errors;
	  var help = props.help;
	  var description = props.description;
	  var hidden = props.hidden;
	  var required = props.required;
	  var displayLabel = props.displayLabel;

	  if (hidden) {
	    return children;
	  }
	  return _react2.default.createElement(
	    "div",
	    { className: classNames },
	    displayLabel ? _react2.default.createElement(Label, { label: label, required: required, id: id }) : null,
	    displayLabel && description ? description : null,
	    children,
	    errors,
	    help
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  DefaultTemplate.propTypes = {
	    id: _react.PropTypes.string,
	    classNames: _react.PropTypes.string,
	    label: _react.PropTypes.string,
	    children: _react.PropTypes.node.isRequired,
	    errors: _react.PropTypes.element,
	    help: _react.PropTypes.element,
	    description: _react.PropTypes.element,
	    hidden: _react.PropTypes.bool,
	    required: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool,
	    displayLabel: _react.PropTypes.bool,
	    formContext: _react.PropTypes.object
	  };
	}

	DefaultTemplate.defaultProps = {
	  hidden: false,
	  readonly: false,
	  required: false,
	  displayLabel: true
	};

	function SchemaField(props) {
	  var uiSchema = props.uiSchema;
	  var errorSchema = props.errorSchema;
	  var idSchema = props.idSchema;
	  var name = props.name;
	  var required = props.required;
	  var registry = props.registry;
	  var definitions = registry.definitions;
	  var fields = registry.fields;
	  var formContext = registry.formContext;
	  var _registry$FieldTempla = registry.FieldTemplate;
	  var FieldTemplate = _registry$FieldTempla === undefined ? DefaultTemplate : _registry$FieldTempla;

	  var schema = (0, _utils.retrieveSchema)(props.schema, definitions);
	  var FieldComponent = getFieldComponent(schema, uiSchema, fields);
	  var DescriptionField = fields.DescriptionField;

	  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
	  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);

	  if (Object.keys(schema).length === 0) {
	    return _react2.default.createElement("div", null);
	  }

	  var displayLabel = true;
	  if (schema.type === "array") {
	    displayLabel = (0, _utils.isMultiSelect)(schema) || (0, _utils.isFilesArray)(schema, uiSchema);
	  }
	  if (schema.type === "object") {
	    displayLabel = false;
	  }
	  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
	    displayLabel = false;
	  }
	  if (uiSchema["ui:field"]) {
	    displayLabel = false;
	  }

	  var field = _react2.default.createElement(FieldComponent, _extends({}, props, {
	    schema: schema,
	    disabled: disabled,
	    readonly: readonly,
	    formContext: formContext }));

	  var type = schema.type;

	  var id = idSchema.$id;
	  var label = props.schema.title || schema.title || name;
	  var description = props.schema.description || schema.description;
	  var errors = errorSchema.__errors;
	  var help = uiSchema["ui:help"];
	  var hidden = uiSchema["ui:widget"] === "hidden";
	  var classNames = ["form-group", "field", "field-" + type, errors && errors.length > 0 ? "field-error has-error" : "", uiSchema.classNames].join(" ").trim();

	  var fieldProps = {
	    description: _react2.default.createElement(DescriptionField, { id: id + "__description",
	      description: description,
	      formContext: formContext }),
	    help: _react2.default.createElement(Help, { help: help }),
	    errors: _react2.default.createElement(ErrorList, { errors: errors }),
	    id: id,
	    label: label,
	    hidden: hidden,
	    required: required,
	    readonly: readonly,
	    displayLabel: displayLabel,
	    classNames: classNames,
	    formContext: formContext
	  };

	  return _react2.default.createElement(
	    FieldTemplate,
	    fieldProps,
	    field
	  );
	}

	SchemaField.defaultProps = {
	  uiSchema: {},
	  errorSchema: {},
	  idSchema: {},
	  registry: (0, _utils.getDefaultRegistry)(),
	  disabled: false,
	  readonly: false
	};

	if (process.env.NODE_ENV !== "production") {
	  SchemaField.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object,
	    idSchema: _react.PropTypes.object,
	    formData: _react.PropTypes.any,
	    errorSchema: _react.PropTypes.object,
	    registry: _react.PropTypes.shape({
	      widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])).isRequired,
	      fields: _react.PropTypes.objectOf(_react.PropTypes.func).isRequired,
	      definitions: _react.PropTypes.object.isRequired,
	      FieldTemplate: _react.PropTypes.func,
	      formContext: _react.PropTypes.object.isRequired
	    })
	  };
	}

	exports.default = SchemaField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getDefaultRegistry = getDefaultRegistry;
	exports.defaultFieldValue = defaultFieldValue;
	exports.getAlternativeWidget = getAlternativeWidget;
	exports.getDefaultFormState = getDefaultFormState;
	exports.isObject = isObject;
	exports.mergeObjects = mergeObjects;
	exports.asNumber = asNumber;
	exports.orderProperties = orderProperties;
	exports.isMultiSelect = isMultiSelect;
	exports.isFilesArray = isFilesArray;
	exports.isFixedItems = isFixedItems;
	exports.allowAdditionalItems = allowAdditionalItems;
	exports.optionsList = optionsList;
	exports.retrieveSchema = retrieveSchema;
	exports.deepEquals = deepEquals;
	exports.shouldRender = shouldRender;
	exports.toIdSchema = toIdSchema;
	exports.parseDateString = parseDateString;
	exports.toDateString = toDateString;
	exports.pad = pad;
	exports.setState = setState;
	exports.dataURItoBlob = dataURItoBlob;

	__webpack_require__(49);

	var _TitleField = __webpack_require__(50);

	var _TitleField2 = _interopRequireDefault(_TitleField);

	var _DescriptionField = __webpack_require__(51);

	var _DescriptionField2 = _interopRequireDefault(_DescriptionField);

	var _PasswordWidget = __webpack_require__(52);

	var _PasswordWidget2 = _interopRequireDefault(_PasswordWidget);

	var _RadioWidget = __webpack_require__(54);

	var _RadioWidget2 = _interopRequireDefault(_RadioWidget);

	var _UpDownWidget = __webpack_require__(55);

	var _UpDownWidget2 = _interopRequireDefault(_UpDownWidget);

	var _RangeWidget = __webpack_require__(56);

	var _RangeWidget2 = _interopRequireDefault(_RangeWidget);

	var _SelectWidget = __webpack_require__(57);

	var _SelectWidget2 = _interopRequireDefault(_SelectWidget);

	var _TextWidget = __webpack_require__(58);

	var _TextWidget2 = _interopRequireDefault(_TextWidget);

	var _DateWidget = __webpack_require__(59);

	var _DateWidget2 = _interopRequireDefault(_DateWidget);

	var _DateTimeWidget = __webpack_require__(60);

	var _DateTimeWidget2 = _interopRequireDefault(_DateTimeWidget);

	var _AltDateWidget = __webpack_require__(61);

	var _AltDateWidget2 = _interopRequireDefault(_AltDateWidget);

	var _AltDateTimeWidget = __webpack_require__(62);

	var _AltDateTimeWidget2 = _interopRequireDefault(_AltDateTimeWidget);

	var _EmailWidget = __webpack_require__(63);

	var _EmailWidget2 = _interopRequireDefault(_EmailWidget);

	var _URLWidget = __webpack_require__(64);

	var _URLWidget2 = _interopRequireDefault(_URLWidget);

	var _TextareaWidget = __webpack_require__(65);

	var _TextareaWidget2 = _interopRequireDefault(_TextareaWidget);

	var _HiddenWidget = __webpack_require__(66);

	var _HiddenWidget2 = _interopRequireDefault(_HiddenWidget);

	var _ColorWidget = __webpack_require__(67);

	var _ColorWidget2 = _interopRequireDefault(_ColorWidget);

	var _FileWidget = __webpack_require__(68);

	var _FileWidget2 = _interopRequireDefault(_FileWidget);

	var _CheckboxesWidget = __webpack_require__(69);

	var _CheckboxesWidget2 = _interopRequireDefault(_CheckboxesWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var altWidgetMap = {
	  boolean: {
	    radio: _RadioWidget2.default,
	    select: _SelectWidget2.default,
	    hidden: _HiddenWidget2.default
	  },
	  string: {
	    password: _PasswordWidget2.default,
	    radio: _RadioWidget2.default,
	    select: _SelectWidget2.default,
	    textarea: _TextareaWidget2.default,
	    hidden: _HiddenWidget2.default,
	    date: _DateWidget2.default,
	    datetime: _DateTimeWidget2.default,
	    "alt-date": _AltDateWidget2.default,
	    "alt-datetime": _AltDateTimeWidget2.default,
	    color: _ColorWidget2.default,
	    file: _FileWidget2.default
	  },
	  number: {
	    updown: _UpDownWidget2.default,
	    range: _RangeWidget2.default,
	    hidden: _HiddenWidget2.default
	  },
	  integer: {
	    updown: _UpDownWidget2.default,
	    range: _RangeWidget2.default,
	    hidden: _HiddenWidget2.default
	  },
	  array: {
	    checkboxes: _CheckboxesWidget2.default
	  }
	};

	var stringFormatWidgets = {
	  "date-time": _DateTimeWidget2.default,
	  "date": _DateWidget2.default,
	  "email": _EmailWidget2.default,
	  "hostname": _TextWidget2.default,
	  "ipv4": _TextWidget2.default,
	  "ipv6": _TextWidget2.default,
	  "uri": _URLWidget2.default,
	  "data-url": _FileWidget2.default
	};

	function getDefaultRegistry() {
	  return {
	    fields: {
	      // Prevent a bug where SchemaField is undefined when imported via Babel.
	      // This seems to have been introduced when upgrading React from 0.14 to to
	      // 15.0, which now seems to prevent cyclic references of exported
	      // components.
	      // Investigation hint: getDefaultRegistry is called from within
	      // SchemaField itself.
	      SchemaField: __webpack_require__(46).default,
	      TitleField: _TitleField2.default,
	      DescriptionField: _DescriptionField2.default
	    },
	    widgets: {},
	    definitions: {},
	    formContext: {}
	  };
	}

	function defaultFieldValue(formData, schema) {
	  return typeof formData === "undefined" ? schema.default : formData;
	}

	function getAlternativeWidget(schema, widget) {
	  var registeredWidgets = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  var widgetOptions = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	  var type = schema.type;
	  var format = schema.format;


	  function setDefaultOptions(widget) {
	    widget.defaultProps = _extends({}, widget.defaultProps, { options: widgetOptions });
	    return widget;
	  }

	  if (typeof widget === "function") {
	    return setDefaultOptions(widget);
	  }

	  if (isObject(widget)) {
	    var component = widget.component;
	    var options = widget.options;

	    var mergedOptions = _extends({}, options, widgetOptions);
	    return getAlternativeWidget(schema, component, registeredWidgets, mergedOptions);
	  }

	  if (typeof widget !== "string") {
	    throw new Error("Unsupported widget definition: " + (typeof widget === "undefined" ? "undefined" : _typeof(widget)));
	  }

	  if (registeredWidgets.hasOwnProperty(widget)) {
	    var registeredWidget = registeredWidgets[widget];
	    return getAlternativeWidget(schema, registeredWidget, registeredWidgets, widgetOptions);
	  }

	  if (!altWidgetMap.hasOwnProperty(type)) {
	    throw new Error("No alternative widget for type " + type);
	  }

	  if (altWidgetMap[type].hasOwnProperty(widget)) {
	    var altWidget = altWidgetMap[type][widget];
	    return getAlternativeWidget(schema, altWidget, registeredWidgets, widgetOptions);
	  }

	  if (type === "string" && stringFormatWidgets.hasOwnProperty(format)) {
	    var stringFormatWidget = stringFormatWidgets[format];
	    return getAlternativeWidget(schema, stringFormatWidget, registeredWidgets, widgetOptions);
	  }

	  var info = type === "string" && format ? "/" + format : "";
	  throw new Error("No alternative widget \"" + widget + "\" for type " + type + info);
	}

	function computeDefaults(schema, parentDefaults) {
	  var definitions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  // Compute the defaults recursively: give highest priority to deepest nodes.
	  var defaults = parentDefaults;
	  if (isObject(defaults) && isObject(schema.default)) {
	    // For object defaults, only override parent defaults that are defined in
	    // schema.default.
	    defaults = mergeObjects(defaults, schema.default);
	  } else if ("default" in schema) {
	    // Use schema defaults for this node.
	    defaults = schema.default;
	  } else if ("enum" in schema && Array.isArray(schema.enum)) {
	    // For enum with no defined default, select the first entry.
	    defaults = schema.enum[0];
	  } else if ("$ref" in schema) {
	    // Use referenced schema defaults for this node.
	    var refSchema = findSchemaDefinition(schema.$ref, definitions);
	    return computeDefaults(refSchema, defaults, definitions);
	  } else if (isFixedItems(schema)) {
	    defaults = schema.items.map(function (itemSchema) {
	      return computeDefaults(itemSchema, undefined, definitions);
	    });
	  }
	  // Not defaults defined for this node, fallback to generic typed ones.
	  if (typeof defaults === "undefined") {
	    defaults = schema.default;
	  }
	  // We need to recur for object schema inner default values.
	  if (schema.type === "object") {
	    return Object.keys(schema.properties).reduce(function (acc, key) {
	      // Compute the defaults for this node, with the parent defaults we might
	      // have from a previous run: defaults[key].
	      acc[key] = computeDefaults(schema.properties[key], (defaults || {})[key], definitions);
	      return acc;
	    }, {});
	  }
	  return defaults;
	}

	function getDefaultFormState(_schema, formData) {
	  var definitions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  if (!isObject(_schema)) {
	    throw new Error("Invalid schema: " + _schema);
	  }
	  var schema = retrieveSchema(_schema, definitions);
	  var defaults = computeDefaults(schema, _schema.default, definitions);
	  if (typeof formData === "undefined") {
	    // No form data? Use schema defaults.
	    return defaults;
	  }
	  if (isObject(formData)) {
	    // Override schema defaults with form data.
	    return mergeObjects(defaults, formData);
	  }
	  return formData || defaults;
	}

	function isObject(thing) {
	  return (typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null && !Array.isArray(thing);
	}

	function mergeObjects(obj1, obj2) {
	  var concatArrays = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  // Recursively merge deeply nested objects.
	  var acc = Object.assign({}, obj1); // Prevent mutation of source object.
	  return Object.keys(obj2).reduce(function (acc, key) {
	    var left = obj1[key],
	        right = obj2[key];
	    if (obj1.hasOwnProperty(key) && isObject(right)) {
	      acc[key] = mergeObjects(left, right, concatArrays);
	    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
	      acc[key] = left.concat(right);
	    } else {
	      acc[key] = right;
	    }
	    return acc;
	  }, acc);
	}

	function asNumber(value) {
	  if (/\.$/.test(value)) {
	    // "3." can't really be considered a number even if it parses in js. The
	    // user is most likely entering a float.
	    return value;
	  }
	  if (/\.0$/.test(value)) {
	    // we need to return this as a string here, to allow for input like 3.07
	    return value;
	  }
	  var n = Number(value);
	  var valid = typeof n === "number" && !Number.isNaN(n);
	  return valid ? n : value;
	}

	function orderProperties(properties, order) {
	  if (!Array.isArray(order)) {
	    return properties;
	  }
	  if (order.length !== properties.length) {
	    throw new Error("uiSchema order list length should match object properties length");
	  }
	  var fingerprint = function fingerprint(arr) {
	    return [].slice.call(arr).sort().toString();
	  };
	  if (fingerprint(order) !== fingerprint(properties)) {
	    throw new Error("uiSchema order list does not match object properties list");
	  }
	  return order;
	}

	function isMultiSelect(schema) {
	  return Array.isArray(schema.items.enum) && schema.uniqueItems;
	}

	function isFilesArray(schema, uiSchema) {
	  return schema.items.type === "string" && schema.items.format === "data-url" || uiSchema["ui:widget"] === "files";
	}

	function isFixedItems(schema) {
	  return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(function (item) {
	    return isObject(item);
	  });
	}

	function allowAdditionalItems(schema) {
	  if (schema.additionalItems === true) {
	    console.warn("additionalItems=true is currently not supported");
	  }
	  return isObject(schema.additionalItems);
	}

	function optionsList(schema) {
	  return schema.enum.map(function (value, i) {
	    var label = schema.enumNames && schema.enumNames[i] || String(value);
	    return { label: label, value: value };
	  });
	}

	function findSchemaDefinition($ref) {
	  var definitions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  // Extract and use the referenced definition if we have it.
	  var match = /#\/definitions\/(.*)$/.exec($ref);
	  if (match && match[1] && definitions.hasOwnProperty(match[1])) {
	    return definitions[match[1]];
	  }
	  // No matching definition found, that's an error (bogus schema?)
	  throw new Error("Could not find a definition for " + $ref + ".");
	}

	function retrieveSchema(schema) {
	  var definitions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  // No $ref attribute found, returning the original schema.
	  if (!schema.hasOwnProperty("$ref")) {
	    return schema;
	  }
	  // Retrieve the referenced schema definition.
	  var $refSchema = findSchemaDefinition(schema.$ref, definitions);
	  // Drop the $ref property of the source schema.
	  var $ref = schema.$ref;

	  var localSchema = _objectWithoutProperties(schema, ["$ref"]); // eslint-disable-line no-unused-vars
	  // Update referenced schema definition with local schema properties.


	  return _extends({}, $refSchema, localSchema);
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) === "[object Arguments]";
	}

	function deepEquals(a, b) {
	  var ca = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	  var cb = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

	  // Partially extracted from node-deeper and adapted to exclude comparison
	  // checks for functions.
	  // https://github.com/othiym23/node-deeper
	  if (a === b) {
	    return true;
	  } else if (typeof a === "function" || typeof b === "function") {
	    // Assume all functions are equivalent
	    // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
	    return true;
	  } else if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object" || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") {
	    return false;
	  } else if (a === null || b === null) {
	    return false;
	  } else if (a instanceof Date && b instanceof Date) {
	    return a.getTime() === b.getTime();
	  } else if (a instanceof RegExp && b instanceof RegExp) {
	    return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
	  } else if (isArguments(a) || isArguments(b)) {
	    if (!(isArguments(a) && isArguments(b))) {
	      return false;
	    }
	    var slice = Array.prototype.slice;
	    return deepEquals(slice.call(a), slice.call(b), ca, cb);
	  } else {
	    if (a.constructor !== b.constructor) {
	      return false;
	    }

	    var ka = Object.keys(a);
	    var kb = Object.keys(b);
	    // don't bother with stack acrobatics if there's nothing there
	    if (ka.length === 0 && kb.length === 0) {
	      return true;
	    }
	    if (ka.length !== kb.length) {
	      return false;
	    }

	    var cal = ca.length;
	    while (cal--) {
	      if (ca[cal] === a) {
	        return cb[cal] === b;
	      }
	    }
	    ca.push(a);
	    cb.push(b);

	    ka.sort();
	    kb.sort();
	    for (var j = ka.length - 1; j >= 0; j--) {
	      if (ka[j] !== kb[j]) {
	        return false;
	      }
	    }

	    var key = void 0;
	    for (var k = ka.length - 1; k >= 0; k--) {
	      key = ka[k];
	      if (!deepEquals(a[key], b[key], ca, cb)) {
	        return false;
	      }
	    }

	    ca.pop();
	    cb.pop();

	    return true;
	  }
	}

	function shouldRender(comp, nextProps, nextState) {
	  var props = comp.props;
	  var state = comp.state;

	  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
	}

	function toIdSchema(schema, id, definitions) {
	  var idSchema = {
	    $id: id || "root"
	  };
	  if ("$ref" in schema) {
	    var _schema = retrieveSchema(schema, definitions);
	    return toIdSchema(_schema, id, definitions);
	  }
	  if ("items" in schema) {
	    return toIdSchema(schema.items, id, definitions);
	  }
	  if (schema.type !== "object") {
	    return idSchema;
	  }
	  for (var name in schema.properties || {}) {
	    var field = schema.properties[name];
	    var fieldId = idSchema.$id + "_" + name;
	    idSchema[name] = toIdSchema(field, fieldId, definitions);
	  }
	  return idSchema;
	}

	function parseDateString(dateString) {
	  var includeTime = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	  if (!dateString) {
	    return {
	      year: -1,
	      month: -1,
	      day: -1,
	      hour: includeTime ? -1 : 0,
	      minute: includeTime ? -1 : 0,
	      second: includeTime ? -1 : 0
	    };
	  }
	  var date = new Date(dateString);
	  if (Number.isNaN(date.getTime())) {
	    throw new Error("Unable to parse date " + dateString);
	  }
	  return {
	    year: date.getUTCFullYear(),
	    month: date.getUTCMonth() + 1, // oh you, javascript.
	    day: date.getUTCDate(),
	    hour: includeTime ? date.getUTCHours() : 0,
	    minute: includeTime ? date.getUTCMinutes() : 0,
	    second: includeTime ? date.getUTCSeconds() : 0
	  };
	}

	function toDateString(_ref) {
	  var year = _ref.year;
	  var month = _ref.month;
	  var day = _ref.day;
	  var _ref$hour = _ref.hour;
	  var hour = _ref$hour === undefined ? 0 : _ref$hour;
	  var _ref$minute = _ref.minute;
	  var minute = _ref$minute === undefined ? 0 : _ref$minute;
	  var _ref$second = _ref.second;
	  var second = _ref$second === undefined ? 0 : _ref$second;
	  var time = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	  var utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
	  var datetime = new Date(utcTime).toJSON();
	  return time ? datetime : datetime.slice(0, 10);
	}

	function pad(num, size) {
	  var s = String(num);
	  while (s.length < size) {
	    s = "0" + s;
	  }
	  return s;
	}

	function setState(instance, state, callback) {
	  var safeRenderCompletion = instance.props.safeRenderCompletion;

	  if (safeRenderCompletion) {
	    instance.setState(state, callback);
	  } else {
	    instance.setState(state);
	    setImmediate(callback);
	  }
	}

	function dataURItoBlob(dataURI) {
	  // Split metadata from data
	  var splitted = dataURI.split(",");
	  // Split params
	  var params = splitted[0].split(";");
	  // Get mime-type from params
	  var type = params[0].replace("data:", "");
	  // Filter the name property from params
	  var properties = params.filter(function (param) {
	    return param.split("=")[0] === "name";
	  });
	  // Look for the name and use unknown if no name property.
	  var name = void 0;
	  if (properties.length !== 1) {
	    name = "unknown";
	  } else {
	    // Because we filtered out the other property,
	    // we only have the name case here.
	    name = properties[0].split("=")[1];
	  }

	  // Built the Uint8Array Blob parameter from the base64 string.
	  var binary = atob(splitted[1]);
	  var array = [];
	  for (var i = 0; i < binary.length; i++) {
	    array.push(binary.charCodeAt(i));
	  }
	  // Create the blob object
	  var blob = new window.Blob([new Uint8Array(array)], { type: type });

	  return { blob: blob, name: name };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48).setImmediate))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(45).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48).setImmediate, __webpack_require__(48).clearImmediate))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(45)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUIRED_FIELD_SYMBOL = "*";

	function TitleField(props) {
	  var id = props.id;
	  var title = props.title;
	  var required = props.required;

	  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
	  return _react2.default.createElement(
	    "legend",
	    { id: id },
	    legend
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  TitleField.propTypes = {
	    id: _react.PropTypes.string,
	    title: _react.PropTypes.string,
	    required: _react.PropTypes.bool
	  };
	}

	exports.default = TitleField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DescriptionField(props) {
	  var id = props.id;
	  var description = props.description;

	  if (!description) {
	    return null;
	  }
	  if (typeof description === "string") {
	    return _react2.default.createElement(
	      "p",
	      { id: id, className: "field-description" },
	      description
	    );
	  } else {
	    return _react2.default.createElement(
	      "div",
	      { id: id, className: "field-description" },
	      description
	    );
	  }
	}

	if (process.env.NODE_ENV !== "production") {
	  DescriptionField.propTypes = {
	    id: _react.PropTypes.string,
	    description: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
	  };
	}

	exports.default = DescriptionField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PasswordWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "password" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  PasswordWidget.propTypes = {
	    value: _react.PropTypes.string
	  };
	}

	exports.default = PasswordWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function BaseInput(props) {
	  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
	  // exclude the "options" and "schema" ones here.
	  var value = props.value;
	  var readonly = props.readonly;
	  var _onChange = props.onChange;
	  var options = props.options;
	  var // eslint-disable-line
	  schema = props.schema;
	  var // eslint-disable-line
	  formContext = props.formContext;

	  var inputProps = _objectWithoutProperties(props, ["value", "readonly", "onChange", "options", "schema", "formContext"]);

	  return _react2.default.createElement("input", _extends({}, inputProps, {
	    className: "form-control",
	    readOnly: readonly,
	    value: typeof value === "undefined" ? "" : value,
	    onChange: function onChange(event) {
	      return _onChange(event.target.value);
	    } }));
	}

	BaseInput.defaultProps = {
	  type: "text",
	  required: false,
	  disabled: false,
	  readonly: false
	};

	if (process.env.NODE_ENV !== "production") {
	  BaseInput.propTypes = {
	    id: _react.PropTypes.string.isRequired,
	    placeholder: _react.PropTypes.string,
	    value: _react.PropTypes.any,
	    required: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	  };
	}

	exports.default = BaseInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function RadioWidget(_ref) {
	  var schema = _ref.schema;
	  var options = _ref.options;
	  var value = _ref.value;
	  var required = _ref.required;
	  var disabled = _ref.disabled;
	  var _onChange = _ref.onChange;

	  // Generating a unique field name to identify this set of radio buttons
	  var name = Math.random().toString();
	  var enumOptions = options.enumOptions;

	  return _react2.default.createElement(
	    "div",
	    { className: "field-radio-group" },
	    enumOptions.map(function (option, i) {
	      var checked = option.value === value;
	      return _react2.default.createElement(
	        "div",
	        { key: i, className: "radio " + (disabled ? "disabled" : "") },
	        _react2.default.createElement(
	          "label",
	          null,
	          _react2.default.createElement("input", { type: "radio",
	            name: name,
	            value: option.value,
	            checked: checked,
	            disabled: disabled,
	            onChange: function onChange(_) {
	              return _onChange(option.value);
	            } }),
	          option.label
	        )
	      );
	    })
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  RadioWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    options: _react.PropTypes.shape({
	      enumOptions: _react.PropTypes.array
	    }).isRequired,
	    value: _react.PropTypes.any,
	    required: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	  };
	}
	exports.default = RadioWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function rangeSpec(schema) {
	  var spec = {};
	  if (schema.multipleOf) {
	    spec.step = schema.multipleOf;
	  }
	  if (schema.minimum) {
	    spec.min = schema.minimum;
	  }
	  if (schema.maximum) {
	    spec.max = schema.maximum;
	  }
	  return spec;
	}

	function UpDownWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "number" }, props, rangeSpec(props.schema)));
	}

	if (process.env.NODE_ENV !== "production") {
	  UpDownWidget.propTypes = {
	    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	  };
	}

	exports.default = UpDownWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function rangeSpec(schema) {
	  var spec = {};
	  if (schema.multipleOf) {
	    spec.step = schema.multipleOf;
	  }
	  if (schema.minimum) {
	    spec.min = schema.minimum;
	  }
	  if (schema.maximum) {
	    spec.max = schema.maximum;
	  }
	  return spec;
	}

	function RangeWidget(props) {
	  var schema = props.schema;
	  var value = props.value;

	  return _react2.default.createElement(
	    "div",
	    { className: "field-range-wrapper" },
	    _react2.default.createElement(_BaseInput2.default, _extends({
	      type: "range"
	    }, props, rangeSpec(schema))),
	    _react2.default.createElement(
	      "span",
	      { className: "range-view" },
	      value
	    )
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  RangeWidget.propTypes = {
	    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
	  };
	}

	exports.default = RangeWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This is a silly limitation in the DOM where option change event values are
	 * always retrieved as strings.
	 */
	function processValue(_ref, value) {
	  var type = _ref.type;
	  var items = _ref.items;

	  if (type === "array" && items && ["number", "integer"].includes(items.type)) {
	    return value.map(_utils.asNumber);
	  } else if (type === "boolean") {
	    return value === "true";
	  } else if (type === "number") {
	    return (0, _utils.asNumber)(value);
	  }
	  return value;
	}

	function SelectWidget(_ref2) {
	  var schema = _ref2.schema;
	  var id = _ref2.id;
	  var options = _ref2.options;
	  var value = _ref2.value;
	  var required = _ref2.required;
	  var disabled = _ref2.disabled;
	  var readonly = _ref2.readonly;
	  var multiple = _ref2.multiple;
	  var _onChange = _ref2.onChange;
	  var enumOptions = options.enumOptions;

	  return _react2.default.createElement(
	    "select",
	    {
	      id: id,
	      multiple: multiple,
	      className: "form-control",
	      value: value,
	      required: required,
	      disabled: disabled,
	      readOnly: readonly,
	      onChange: function onChange(event) {
	        var newValue = void 0;
	        if (multiple) {
	          newValue = [].filter.call(event.target.options, function (o) {
	            return o.selected;
	          }).map(function (o) {
	            return o.value;
	          });
	        } else {
	          newValue = event.target.value;
	        }
	        _onChange(processValue(schema, newValue));
	      } },
	    enumOptions.map(function (_ref3, i) {
	      var value = _ref3.value;
	      var label = _ref3.label;

	      return _react2.default.createElement(
	        "option",
	        { key: i, value: value },
	        label
	      );
	    })
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  SelectWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    options: _react.PropTypes.shape({
	      enumOptions: _react.PropTypes.array
	    }).isRequired,
	    value: _react.PropTypes.any,
	    required: _react.PropTypes.bool,
	    multiple: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	  };
	}

	exports.default = SelectWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TextWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, props);
	}

	if (process.env.NODE_ENV !== "production") {
	  TextWidget.propTypes = {
	    value: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
	  };
	}

	exports.default = TextWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DateWidget(props) {
	  var _onChange = props.onChange;

	  return _react2.default.createElement(_BaseInput2.default, _extends({
	    type: "date"
	  }, props, {
	    onChange: function onChange(value) {
	      return _onChange(value || undefined);
	    } }));
	}

	if (process.env.NODE_ENV !== "production") {
	  DateWidget.propTypes = {
	    value: _react.PropTypes.string
	  };
	}

	exports.default = DateWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fromJSONDate(jsonDate) {
	  return jsonDate ? jsonDate.slice(0, 19) : "";
	}

	function toJSONDate(dateString) {
	  if (dateString) {
	    return new Date(dateString).toJSON();
	  }
	}

	function DateTimeWidget(props) {
	  var value = props.value;
	  var _onChange = props.onChange;

	  return _react2.default.createElement(_BaseInput2.default, _extends({
	    type: "datetime-local"
	  }, props, {
	    value: fromJSONDate(value),
	    onChange: function onChange(value) {
	      return _onChange(toJSONDate(value));
	    }
	  }));
	}

	if (process.env.NODE_ENV !== "production") {
	  DateTimeWidget.propTypes = {
	    value: _react.PropTypes.string
	  };
	}

	exports.default = DateTimeWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	var _SelectWidget = __webpack_require__(57);

	var _SelectWidget2 = _interopRequireDefault(_SelectWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function rangeOptions(type, start, stop) {
	  var options = [{ value: -1, label: type }];
	  for (var i = start; i <= stop; i++) {
	    options.push({ value: i, label: (0, _utils.pad)(i, 2) });
	  }
	  return options;
	}

	function readyForChange(state) {
	  return Object.keys(state).every(function (key) {
	    return state[key] !== -1;
	  });
	}

	function DateElement(props) {
	  var type = props.type;
	  var range = props.range;
	  var value = props.value;
	  var select = props.select;
	  var rootId = props.rootId;
	  var disabled = props.disabled;
	  var readonly = props.readonly;

	  var id = rootId + "_" + type;
	  return _react2.default.createElement(_SelectWidget2.default, {
	    schema: { type: "integer" },
	    id: id,
	    className: "form-control",
	    options: { enumOptions: rangeOptions(type, range[0], range[1]) },
	    value: value,
	    disabled: disabled,
	    readonly: readonly,
	    onChange: function onChange(value) {
	      return select(type, value);
	    } });
	}

	var AltDateWidget = function (_Component) {
	  _inherits(AltDateWidget, _Component);

	  function AltDateWidget(props) {
	    _classCallCheck(this, AltDateWidget);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AltDateWidget).call(this, props));

	    _this.onChange = function (property, value) {
	      _this.setState(_defineProperty({}, property, value), function () {
	        // Only propagate to parent state if we have a complete date{time}
	        if (readyForChange(_this.state)) {
	          _this.props.onChange((0, _utils.toDateString)(_this.state, _this.props.time));
	        }
	      });
	    };

	    _this.setNow = function (event) {
	      event.preventDefault();
	      var _this$props = _this.props;
	      var time = _this$props.time;
	      var disabled = _this$props.disabled;
	      var readonly = _this$props.readonly;
	      var onChange = _this$props.onChange;

	      if (disabled || readonly) {
	        return;
	      }
	      var nowDateObj = (0, _utils.parseDateString)(new Date().toJSON(), time);
	      _this.setState(nowDateObj, function () {
	        return onChange((0, _utils.toDateString)(_this.state, time));
	      });
	    };

	    _this.clear = function (event) {
	      event.preventDefault();
	      var _this$props2 = _this.props;
	      var time = _this$props2.time;
	      var disabled = _this$props2.disabled;
	      var readonly = _this$props2.readonly;
	      var onChange = _this$props2.onChange;

	      if (disabled || readonly) {
	        return;
	      }
	      _this.setState((0, _utils.parseDateString)("", time), function () {
	        return onChange(undefined);
	      });
	    };

	    _this.state = (0, _utils.parseDateString)(props.value, props.time);
	    return _this;
	  }

	  _createClass(AltDateWidget, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState((0, _utils.parseDateString)(nextProps.value, nextProps.time));
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var id = _props.id;
	      var disabled = _props.disabled;
	      var readonly = _props.readonly;

	      return _react2.default.createElement(
	        "ul",
	        { className: "list-inline" },
	        this.dateElementProps.map(function (elemProps, i) {
	          return _react2.default.createElement(
	            "li",
	            { key: i },
	            _react2.default.createElement(DateElement, _extends({
	              rootId: id,
	              select: _this2.onChange
	            }, elemProps, {
	              disabled: disabled,
	              readonly: readonly }))
	          );
	        }),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "#", className: "btn btn-info btn-now",
	              onClick: this.setNow },
	            "Now"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "#", className: "btn btn-warning btn-clear",
	              onClick: this.clear },
	            "Clear"
	          )
	        )
	      );
	    }
	  }, {
	    key: "dateElementProps",
	    get: function get() {
	      var time = this.props.time;
	      var _state = this.state;
	      var year = _state.year;
	      var month = _state.month;
	      var day = _state.day;
	      var hour = _state.hour;
	      var minute = _state.minute;
	      var second = _state.second;

	      var data = [{ type: "year", range: [1900, 2020], value: year }, { type: "month", range: [1, 12], value: month }, { type: "day", range: [1, 31], value: day }];
	      if (time) {
	        data.push({ type: "hour", range: [0, 23], value: hour }, { type: "minute", range: [0, 59], value: minute }, { type: "second", range: [0, 59], value: second });
	      }
	      return data;
	    }
	  }]);

	  return AltDateWidget;
	}(_react.Component);

	AltDateWidget.defaultProps = {
	  time: false,
	  disabled: false,
	  readonly: false
	};


	if (process.env.NODE_ENV !== "production") {
	  AltDateWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    value: _react2.default.PropTypes.string,
	    required: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func,
	    time: _react.PropTypes.bool
	  };
	}

	exports.default = AltDateWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AltDateWidget = __webpack_require__(61);

	var _AltDateWidget2 = _interopRequireDefault(_AltDateWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AltDateTimeWidget(props) {
	  return _react2.default.createElement(_AltDateWidget2.default, _extends({ time: true }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  AltDateTimeWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    value: _react2.default.PropTypes.string,
	    required: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	  };
	}

	exports.default = AltDateTimeWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function EmailWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "email" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  EmailWidget.propTypes = {
	    value: _react.PropTypes.string
	  };
	}

	exports.default = EmailWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function URLWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "url" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  URLWidget.propTypes = {
	    value: _react.PropTypes.string
	  };
	}

	exports.default = URLWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TextWidget(_ref) {
	  var schema = _ref.schema;
	  var id = _ref.id;
	  var placeholder = _ref.placeholder;
	  var value = _ref.value;
	  var required = _ref.required;
	  var disabled = _ref.disabled;
	  var readonly = _ref.readonly;
	  var _onChange = _ref.onChange;

	  return _react2.default.createElement("textarea", {
	    id: id,
	    className: "form-control",
	    value: typeof value === "undefined" ? "" : value,
	    placeholder: placeholder,
	    required: required,
	    disabled: disabled,
	    readOnly: readonly,
	    onChange: function onChange(event) {
	      return _onChange(event.target.value);
	    } });
	}

	if (process.env.NODE_ENV !== "production") {
	  TextWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    placeholder: _react.PropTypes.string,
	    value: _react.PropTypes.string,
	    required: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	  };
	}

	exports.default = TextWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function HiddenWidget(_ref) {
	  var id = _ref.id;
	  var value = _ref.value;

	  return _react2.default.createElement("input", { type: "hidden", id: id, value: typeof value === "undefined" ? "" : value });
	}

	if (process.env.NODE_ENV !== "production") {
	  HiddenWidget.propTypes = {
	    id: _react.PropTypes.string.isRequired,
	    value: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool])
	  };
	}

	exports.default = HiddenWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BaseInput = __webpack_require__(53);

	var _BaseInput2 = _interopRequireDefault(_BaseInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ColorWidget(props) {
	  return _react2.default.createElement(_BaseInput2.default, _extends({ type: "color" }, props));
	}

	if (process.env.NODE_ENV !== "production") {
	  ColorWidget.propTypes = {
	    value: _react.PropTypes.string
	  };
	}

	exports.default = ColorWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function addNameToDataURL(dataURL, name) {
	  return dataURL.replace(";base64", ";name=" + name + ";base64");
	}

	function processFile(file) {
	  var name = file.name;
	  var size = file.size;
	  var type = file.type;

	  return new Promise(function (resolve, reject) {
	    var reader = new window.FileReader();
	    reader.onload = function (event) {
	      resolve({
	        dataURL: addNameToDataURL(event.target.result, name),
	        name: name,
	        size: size,
	        type: type
	      });
	    };
	    reader.readAsDataURL(file);
	  });
	}

	function processFiles(files) {
	  return Promise.all([].map.call(files, processFile));
	}

	function FilesInfo(props) {
	  var filesInfo = props.filesInfo;

	  if (filesInfo.length === 0) {
	    return null;
	  }
	  return _react2.default.createElement(
	    "ul",
	    { className: "file-info" },
	    filesInfo.map(function (fileInfo, key) {
	      var name = fileInfo.name;
	      var size = fileInfo.size;
	      var type = fileInfo.type;

	      return _react2.default.createElement(
	        "li",
	        { key: key },
	        _react2.default.createElement(
	          "strong",
	          null,
	          name
	        ),
	        " (",
	        type,
	        ", ",
	        size,
	        " bytes)"
	      );
	    })
	  );
	}

	function extractFileInfo(dataURLs) {
	  return dataURLs.filter(function (dataURL) {
	    return typeof dataURL !== "undefined";
	  }).map(function (dataURL) {
	    var _dataURItoBlob = (0, _utils.dataURItoBlob)(dataURL);

	    var blob = _dataURItoBlob.blob;
	    var name = _dataURItoBlob.name;

	    return {
	      name: name,
	      size: blob.size,
	      type: blob.type
	    };
	  });
	}

	var FileWidget = function (_Component) {
	  _inherits(FileWidget, _Component);

	  function FileWidget(props) {
	    _classCallCheck(this, FileWidget);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileWidget).call(this, props));

	    _this.defaultProps = {
	      multiple: false
	    };

	    _this.onChange = function (event) {
	      var _this$props = _this.props;
	      var multiple = _this$props.multiple;
	      var onChange = _this$props.onChange;

	      processFiles(event.target.files).then(function (filesInfo) {
	        var state = {
	          values: filesInfo.map(function (fileInfo) {
	            return fileInfo.dataURL;
	          }),
	          filesInfo: filesInfo
	        };
	        (0, _utils.setState)(_this, state, function () {
	          if (multiple) {
	            onChange(state.values);
	          } else {
	            onChange(state.values[0]);
	          }
	        });
	      });
	    };

	    var value = props.value;

	    var values = Array.isArray(value) ? value : [value];
	    _this.state = { values: values, filesInfo: extractFileInfo(values) };
	    return _this;
	  }

	  _createClass(FileWidget, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var multiple = _props.multiple;
	      var id = _props.id;
	      var readonly = _props.readonly;
	      var disabled = _props.disabled;
	      var filesInfo = this.state.filesInfo;

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement("input", {
	            id: id,
	            type: "file",
	            disabled: readonly || disabled,
	            onChange: this.onChange,
	            defaultValue: "",
	            multiple: multiple })
	        ),
	        _react2.default.createElement(FilesInfo, { filesInfo: filesInfo })
	      );
	    }
	  }]);

	  return FileWidget;
	}(_react.Component);

	if (process.env.NODE_ENV !== "production") {
	  FileWidget.propTypes = {
	    multiple: _react.PropTypes.bool,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)])
	  };
	}

	exports.default = FileWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function selectValue(value, selected, all) {
	  var at = all.indexOf(value);
	  var updated = selected.slice(0, at).concat(value, selected.slice(at));
	  // As inserting values at predefined index positions doesn't work with empty
	  // arrays, we need to reorder the updated selection to match the initial order
	  return updated.sort(function (a, b) {
	    return all.indexOf(a) > all.indexOf(b);
	  });
	}

	function deselectValue(value, selected) {
	  return selected.filter(function (v) {
	    return v !== value;
	  });
	}

	function CheckboxesWidget(props) {
	  var id = props.id;
	  var disabled = props.disabled;
	  var options = props.options;
	  var value = props.value;
	  var _onChange = props.onChange;
	  var enumOptions = options.enumOptions;

	  return _react2.default.createElement(
	    "div",
	    { className: "checkboxes", id: id },
	    enumOptions.map(function (option, index) {
	      var checked = value.indexOf(option.value) !== -1;
	      return _react2.default.createElement(
	        "div",
	        { key: index, className: "checkbox" },
	        _react2.default.createElement(
	          "label",
	          null,
	          _react2.default.createElement("input", { type: "checkbox",
	            id: id + "_" + index,
	            checked: checked,
	            disabled: disabled,
	            onChange: function onChange(event) {
	              var all = enumOptions.map(function (_ref) {
	                var value = _ref.value;
	                return value;
	              });
	              if (event.target.checked) {
	                _onChange(selectValue(option.value, value, all));
	              } else {
	                _onChange(deselectValue(option.value, value));
	              }
	            } }),
	          _react2.default.createElement(
	            "strong",
	            null,
	            option.label
	          )
	        )
	      );
	    })
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  CheckboxesWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    options: _react.PropTypes.shape({
	      enumOptions: _react.PropTypes.array
	    }).isRequired,
	    value: _react.PropTypes.any,
	    required: _react.PropTypes.bool,
	    multiple: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	  };
	}

	exports.default = CheckboxesWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	var _SelectWidget = __webpack_require__(57);

	var _SelectWidget2 = _interopRequireDefault(_SelectWidget);

	var _FileWidget = __webpack_require__(68);

	var _FileWidget2 = _interopRequireDefault(_FileWidget);

	var _CheckboxesWidget = __webpack_require__(69);

	var _CheckboxesWidget2 = _interopRequireDefault(_CheckboxesWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function ArrayFieldTitle(_ref) {
	  var TitleField = _ref.TitleField;
	  var idSchema = _ref.idSchema;
	  var title = _ref.title;
	  var required = _ref.required;

	  if (!title) {
	    return null;
	  }
	  var id = idSchema.$id + "__title";
	  return _react2.default.createElement(TitleField, { id: id, title: title, required: required });
	}

	function ArrayFieldDescription(_ref2) {
	  var DescriptionField = _ref2.DescriptionField;
	  var idSchema = _ref2.idSchema;
	  var description = _ref2.description;

	  if (!description) {
	    return null;
	  }
	  var id = idSchema.$id + "__description";
	  return _react2.default.createElement(DescriptionField, { id: id, description: description });
	}

	var ArrayField = function (_Component) {
	  _inherits(ArrayField, _Component);

	  function ArrayField(props) {
	    _classCallCheck(this, ArrayField);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayField).call(this, props));

	    _this.onAddClick = function (event) {
	      event.preventDefault();
	      var items = _this.state.items;
	      var _this$props = _this.props;
	      var schema = _this$props.schema;
	      var registry = _this$props.registry;
	      var definitions = registry.definitions;

	      var itemSchema = schema.items;
	      if ((0, _utils.isFixedItems)(schema) && (0, _utils.allowAdditionalItems)(schema)) {
	        itemSchema = schema.additionalItems;
	      }
	      _this.asyncSetState({
	        items: items.concat([(0, _utils.getDefaultFormState)(itemSchema, undefined, definitions)])
	      });
	    };

	    _this.onDropIndexClick = function (index) {
	      return function (event) {
	        event.preventDefault();
	        _this.asyncSetState({
	          items: _this.state.items.filter(function (_, i) {
	            return i !== index;
	          })
	        }, { validate: true }); // refs #195
	      };
	    };

	    _this.onReorderClick = function (index, newIndex) {
	      return function (event) {
	        event.preventDefault();
	        event.target.blur();
	        var items = _this.state.items;

	        _this.asyncSetState({
	          items: items.map(function (item, i) {
	            if (i === newIndex) {
	              return items[index];
	            } else if (i === index) {
	              return items[newIndex];
	            } else {
	              return item;
	            }
	          })
	        }, { validate: true });
	      };
	    };

	    _this.onChangeForIndex = function (index) {
	      return function (value) {
	        _this.asyncSetState({
	          items: _this.state.items.map(function (item, i) {
	            return index === i ? value : item;
	          })
	        });
	      };
	    };

	    _this.onSelectChange = function (value) {
	      _this.asyncSetState({ items: value });
	    };

	    _this.state = _this.getStateFromProps(props);
	    return _this;
	  }

	  _createClass(ArrayField, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState(this.getStateFromProps(nextProps));
	    }
	  }, {
	    key: "getStateFromProps",
	    value: function getStateFromProps(props) {
	      var formData = Array.isArray(props.formData) ? props.formData : null;
	      var definitions = this.props.registry.definitions;

	      return {
	        items: (0, _utils.getDefaultFormState)(props.schema, formData, definitions) || []
	      };
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "isItemRequired",
	    value: function isItemRequired(itemsSchema) {
	      return itemsSchema.type === "string" && itemsSchema.minLength > 0;
	    }
	  }, {
	    key: "asyncSetState",
	    value: function asyncSetState(state) {
	      var _this2 = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? { validate: false } : arguments[1];

	      (0, _utils.setState)(this, state, function () {
	        _this2.props.onChange(_this2.state.items, options);
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var schema = _props.schema;
	      var uiSchema = _props.uiSchema;

	      if ((0, _utils.isFilesArray)(schema, uiSchema)) {
	        return this.renderFiles();
	      }
	      if ((0, _utils.isFixedItems)(schema)) {
	        return this.renderFixedArray();
	      }
	      if ((0, _utils.isMultiSelect)(schema)) {
	        return this.renderMultiSelect();
	      }
	      return this.renderNormalArray();
	    }
	  }, {
	    key: "renderNormalArray",
	    value: function renderNormalArray() {
	      var _this3 = this;

	      var _props2 = this.props;
	      var schema = _props2.schema;
	      var uiSchema = _props2.uiSchema;
	      var errorSchema = _props2.errorSchema;
	      var idSchema = _props2.idSchema;
	      var name = _props2.name;
	      var required = _props2.required;
	      var disabled = _props2.disabled;
	      var readonly = _props2.readonly;

	      var title = schema.title || name;
	      var items = this.state.items;
	      var _props$registry = this.props.registry;
	      var definitions = _props$registry.definitions;
	      var fields = _props$registry.fields;
	      var TitleField = fields.TitleField;
	      var DescriptionField = fields.DescriptionField;

	      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);

	      return _react2.default.createElement(
	        "fieldset",
	        {
	          className: "field field-array field-array-of-" + itemsSchema.type },
	        _react2.default.createElement(ArrayFieldTitle, {
	          TitleField: TitleField,
	          idSchema: idSchema,
	          title: title,
	          required: required }),
	        schema.description ? _react2.default.createElement(ArrayFieldDescription, {
	          DescriptionField: DescriptionField,
	          idSchema: idSchema,
	          description: schema.description }) : null,
	        _react2.default.createElement(
	          "div",
	          { className: "row array-item-list" },
	          items.map(function (item, index) {
	            var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
	            var itemIdPrefix = idSchema.$id + "_" + index;
	            var itemIdSchema = (0, _utils.toIdSchema)(itemsSchema, itemIdPrefix, definitions);
	            return _this3.renderArrayFieldItem({
	              index: index,
	              canMoveUp: index > 0,
	              canMoveDown: index < items.length - 1,
	              itemSchema: itemsSchema,
	              itemIdSchema: itemIdSchema,
	              itemErrorSchema: itemErrorSchema,
	              itemData: items[index],
	              itemUiSchema: uiSchema.items
	            });
	          })
	        ),
	        _react2.default.createElement(AddButton, {
	          onClick: this.onAddClick, disabled: disabled || readonly })
	      );
	    }
	  }, {
	    key: "renderMultiSelect",
	    value: function renderMultiSelect() {
	      var _props3 = this.props;
	      var schema = _props3.schema;
	      var idSchema = _props3.idSchema;
	      var uiSchema = _props3.uiSchema;
	      var disabled = _props3.disabled;
	      var readonly = _props3.readonly;
	      var items = this.state.items;
	      var definitions = this.props.registry.definitions;

	      var itemsSchema = (0, _utils.retrieveSchema)(schema.items, definitions);

	      var multipleCheckboxes = uiSchema["ui:widget"] === "checkboxes";
	      var Widget = multipleCheckboxes ? _CheckboxesWidget2.default : _SelectWidget2.default;
	      return _react2.default.createElement(Widget, {
	        id: idSchema && idSchema.$id,
	        multiple: true,
	        onChange: this.onSelectChange,
	        options: { enumOptions: (0, _utils.optionsList)(itemsSchema) },
	        schema: schema,
	        value: items,
	        disabled: disabled,
	        readonly: readonly
	      });
	    }
	  }, {
	    key: "renderFiles",
	    value: function renderFiles() {
	      var _props4 = this.props;
	      var schema = _props4.schema;
	      var idSchema = _props4.idSchema;
	      var name = _props4.name;
	      var disabled = _props4.disabled;
	      var readonly = _props4.readonly;

	      var title = schema.title || name;
	      var items = this.state.items;

	      return _react2.default.createElement(_FileWidget2.default, {
	        id: idSchema && idSchema.$id,
	        multiple: true,
	        onChange: this.onSelectChange,
	        schema: schema,
	        title: title,
	        value: items,
	        disabled: disabled,
	        readonly: readonly
	      });
	    }
	  }, {
	    key: "renderFixedArray",
	    value: function renderFixedArray() {
	      var _this4 = this;

	      var _props5 = this.props;
	      var schema = _props5.schema;
	      var uiSchema = _props5.uiSchema;
	      var errorSchema = _props5.errorSchema;
	      var idSchema = _props5.idSchema;
	      var name = _props5.name;
	      var required = _props5.required;
	      var disabled = _props5.disabled;
	      var readonly = _props5.readonly;

	      var title = schema.title || name;
	      var items = this.state.items;
	      var _props$registry2 = this.props.registry;
	      var definitions = _props$registry2.definitions;
	      var fields = _props$registry2.fields;
	      var TitleField = fields.TitleField;

	      var itemSchemas = schema.items.map(function (item) {
	        return (0, _utils.retrieveSchema)(item, definitions);
	      });
	      var additionalSchema = (0, _utils.allowAdditionalItems)(schema) ? (0, _utils.retrieveSchema)(schema.additionalItems, definitions) : null;

	      if (!items || items.length < itemSchemas.length) {
	        // to make sure at least all fixed items are generated
	        items = items || [];
	        items = items.concat(new Array(itemSchemas.length - items.length));
	      }

	      return _react2.default.createElement(
	        "fieldset",
	        { className: "field field-array field-array-fixed-items" },
	        _react2.default.createElement(ArrayFieldTitle, {
	          TitleField: TitleField,
	          idSchema: idSchema,
	          title: title,
	          required: required }),
	        schema.description ? _react2.default.createElement(
	          "div",
	          { className: "field-description" },
	          schema.description
	        ) : null,
	        _react2.default.createElement(
	          "div",
	          { className: "row array-item-list" },
	          items.map(function (item, index) {
	            var additional = index >= itemSchemas.length;
	            var itemSchema = additional ? additionalSchema : itemSchemas[index];
	            var itemIdPrefix = idSchema.$id + "_" + index;
	            var itemIdSchema = (0, _utils.toIdSchema)(itemSchema, itemIdPrefix, definitions);
	            var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
	            var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;

	            return _this4.renderArrayFieldItem({
	              index: index,
	              removable: additional,
	              canMoveUp: index >= itemSchemas.length + 1,
	              canMoveDown: additional && index < items.length - 1,
	              itemSchema: itemSchema,
	              itemData: item,
	              itemUiSchema: itemUiSchema,
	              itemIdSchema: itemIdSchema,
	              itemErrorSchema: itemErrorSchema
	            });
	          })
	        ),
	        additionalSchema ? _react2.default.createElement(AddButton, {
	          onClick: this.onAddClick,
	          disabled: disabled || readonly }) : null
	      );
	    }
	  }, {
	    key: "renderArrayFieldItem",
	    value: function renderArrayFieldItem(_ref3) {
	      var index = _ref3.index;
	      var _ref3$removable = _ref3.removable;
	      var removable = _ref3$removable === undefined ? true : _ref3$removable;
	      var _ref3$canMoveUp = _ref3.canMoveUp;
	      var canMoveUp = _ref3$canMoveUp === undefined ? true : _ref3$canMoveUp;
	      var _ref3$canMoveDown = _ref3.canMoveDown;
	      var canMoveDown = _ref3$canMoveDown === undefined ? true : _ref3$canMoveDown;
	      var itemSchema = _ref3.itemSchema;
	      var itemData = _ref3.itemData;
	      var itemUiSchema = _ref3.itemUiSchema;
	      var itemIdSchema = _ref3.itemIdSchema;
	      var itemErrorSchema = _ref3.itemErrorSchema;
	      var SchemaField = this.props.registry.fields.SchemaField;
	      var _props6 = this.props;
	      var disabled = _props6.disabled;
	      var readonly = _props6.readonly;

	      var hasToolbar = removable || canMoveUp || canMoveDown;
	      var btnStyle = { flex: 1, paddingLeft: 6, paddingRight: 6, fontWeight: "bold" };

	      return _react2.default.createElement(
	        "div",
	        { key: index, className: "array-item" },
	        _react2.default.createElement(
	          "div",
	          { className: hasToolbar ? "col-xs-10" : "col-xs-12" },
	          _react2.default.createElement(SchemaField, {
	            schema: itemSchema,
	            uiSchema: itemUiSchema,
	            formData: itemData,
	            errorSchema: itemErrorSchema,
	            idSchema: itemIdSchema,
	            required: this.isItemRequired(itemSchema),
	            onChange: this.onChangeForIndex(index),
	            registry: this.props.registry,
	            disabled: this.props.disabled,
	            readonly: this.props.readonly })
	        ),
	        hasToolbar ? _react2.default.createElement(
	          "div",
	          { className: "col-xs-2 array-item-toolbox text-right" },
	          _react2.default.createElement(
	            "div",
	            { className: "btn-group", style: { display: "flex" } },
	            canMoveUp || canMoveDown ? _react2.default.createElement(
	              "button",
	              { type: "button", className: "btn btn-default array-item-move-up",
	                style: btnStyle,
	                tabIndex: "-1",
	                disabled: disabled || readonly || !canMoveUp,
	                onClick: this.onReorderClick(index, index - 1) },
	              "⬆"
	            ) : null,
	            canMoveUp || canMoveDown ? _react2.default.createElement(
	              "button",
	              { type: "button", className: "btn btn-default array-item-move-down",
	                style: btnStyle,
	                tabIndex: "-1",
	                disabled: disabled || readonly || !canMoveDown,
	                onClick: this.onReorderClick(index, index + 1) },
	              "⬇"
	            ) : null,
	            removable ? _react2.default.createElement(
	              "button",
	              { type: "button", className: "btn btn-danger array-item-remove",
	                style: btnStyle,
	                tabIndex: "-1",
	                disabled: disabled || readonly,
	                onClick: this.onDropIndexClick(index) },
	              "✖"
	            ) : null
	          )
	        ) : null
	      );
	    }
	  }, {
	    key: "itemTitle",
	    get: function get() {
	      var schema = this.props.schema;

	      return schema.items.title || schema.items.description || "Item";
	    }
	  }]);

	  return ArrayField;
	}(_react.Component);

	ArrayField.defaultProps = {
	  uiSchema: {},
	  idSchema: {},
	  registry: (0, _utils.getDefaultRegistry)(),
	  required: false,
	  disabled: false,
	  readonly: false
	};


	function AddButton(_ref4) {
	  var onClick = _ref4.onClick;
	  var disabled = _ref4.disabled;

	  return _react2.default.createElement(
	    "div",
	    { className: "row" },
	    _react2.default.createElement(
	      "p",
	      { className: "col-xs-2 col-xs-offset-10 array-item-add text-right" },
	      _react2.default.createElement(
	        "button",
	        { type: "button", className: "btn btn-info col-xs-12",
	          tabIndex: "-1", onClick: onClick,
	          disabled: disabled, style: { fontWeight: "bold" } },
	        "➕"
	      )
	    )
	  );
	}

	if (process.env.NODE_ENV !== "production") {
	  ArrayField.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object,
	    idSchema: _react.PropTypes.object,
	    errorSchema: _react.PropTypes.object,
	    onChange: _react.PropTypes.func.isRequired,
	    formData: _react.PropTypes.array,
	    required: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool,
	    registry: _react.PropTypes.shape({
	      widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])).isRequired,
	      fields: _react.PropTypes.objectOf(_react.PropTypes.func).isRequired,
	      definitions: _react.PropTypes.object.isRequired,
	      formContext: _react.PropTypes.object.isRequired
	    })
	  };
	}

	exports.default = ArrayField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	var _CheckboxWidget = __webpack_require__(72);

	var _CheckboxWidget2 = _interopRequireDefault(_CheckboxWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function buildOptions(schema) {
	  return {
	    enumOptions: (0, _utils.optionsList)(Object.assign({
	      enumNames: ["true", "false"],
	      enum: [true, false]
	    }, { enumNames: schema.enumNames }))
	  };
	}

	function BooleanField(props) {
	  var schema = props.schema;
	  var name = props.name;
	  var uiSchema = props.uiSchema;
	  var idSchema = props.idSchema;
	  var formData = props.formData;
	  var registry = props.registry;
	  var required = props.required;
	  var disabled = props.disabled;
	  var readonly = props.readonly;
	  var onChange = props.onChange;
	  var title = schema.title;
	  var widgets = registry.widgets;
	  var formContext = registry.formContext;

	  var widget = uiSchema["ui:widget"];
	  var commonProps = {
	    schema: schema,
	    id: idSchema && idSchema.$id,
	    onChange: onChange,
	    label: title || name,
	    value: (0, _utils.defaultFieldValue)(formData, schema),
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    registry: registry,
	    formContext: formContext
	  };
	  if (widget) {
	    var Widget = (0, _utils.getAlternativeWidget)(schema, widget, widgets);
	    return _react2.default.createElement(Widget, _extends({ options: buildOptions(schema) }, commonProps));
	  }
	  return _react2.default.createElement(_CheckboxWidget2.default, commonProps);
	}

	if (process.env.NODE_ENV !== "production") {
	  BooleanField.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object,
	    idSchema: _react.PropTypes.object,
	    onChange: _react.PropTypes.func.isRequired,
	    formData: _react.PropTypes.bool,
	    required: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool,
	    registry: _react.PropTypes.shape({
	      widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])).isRequired,
	      fields: _react.PropTypes.objectOf(_react.PropTypes.func).isRequired,
	      definitions: _react.PropTypes.object.isRequired,
	      formContext: _react.PropTypes.object.isRequired
	    })
	  };
	}

	BooleanField.defaultProps = {
	  uiSchema: {},
	  registry: (0, _utils.getDefaultRegistry)(),
	  disabled: false,
	  readonly: false
	};

	exports.default = BooleanField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function CheckboxWidget(_ref) {
	  var schema = _ref.schema;
	  var id = _ref.id;
	  var value = _ref.value;
	  var required = _ref.required;
	  var disabled = _ref.disabled;
	  var _onChange = _ref.onChange;
	  var label = _ref.label;

	  return _react2.default.createElement(
	    "div",
	    { className: "checkbox " + (disabled ? "disabled" : "") },
	    _react2.default.createElement(
	      "label",
	      null,
	      _react2.default.createElement("input", { type: "checkbox",
	        id: id,
	        checked: typeof value === "undefined" ? false : value,
	        required: required,
	        disabled: disabled,
	        onChange: function onChange(event) {
	          return _onChange(event.target.checked);
	        } }),
	      _react2.default.createElement(
	        "strong",
	        null,
	        label
	      )
	    )
	  );
	}
	if (process.env.NODE_ENV !== "production") {
	  CheckboxWidget.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    id: _react.PropTypes.string.isRequired,
	    onChange: _react.PropTypes.func,
	    value: _react.PropTypes.bool,
	    required: _react.PropTypes.bool
	  };
	}

	exports.default = CheckboxWidget;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	var _StringField = __webpack_require__(74);

	var _StringField2 = _interopRequireDefault(_StringField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NumberField(props) {
	  return _react2.default.createElement(_StringField2.default, _extends({}, props, {
	    onChange: function onChange(value) {
	      return props.onChange((0, _utils.asNumber)(value));
	    } }));
	}

	if (process.env.NODE_ENV !== "production") {
	  NumberField.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object,
	    idSchema: _react.PropTypes.object,
	    onChange: _react.PropTypes.func.isRequired,
	    formData: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    required: _react.PropTypes.bool,
	    formContext: _react.PropTypes.object.isRequired
	  };
	}

	NumberField.defaultProps = {
	  uiSchema: {}
	};

	exports.default = NumberField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	var _TextWidget = __webpack_require__(58);

	var _TextWidget2 = _interopRequireDefault(_TextWidget);

	var _SelectWidget = __webpack_require__(57);

	var _SelectWidget2 = _interopRequireDefault(_SelectWidget);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function StringField(props) {
	  var schema = props.schema;
	  var name = props.name;
	  var uiSchema = props.uiSchema;
	  var idSchema = props.idSchema;
	  var formData = props.formData;
	  var registry = props.registry;
	  var required = props.required;
	  var disabled = props.disabled;
	  var readonly = props.readonly;
	  var onChange = props.onChange;
	  var title = schema.title;
	  var widgets = registry.widgets;
	  var formContext = registry.formContext;

	  var widget = uiSchema["ui:widget"] || schema.format;
	  var placeholder = uiSchema["ui:placeholder"] || "";
	  var commonProps = {
	    schema: schema,
	    id: idSchema && idSchema.$id,
	    label: title || name,
	    value: (0, _utils.defaultFieldValue)(formData, schema),
	    onChange: onChange,
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    formContext: formContext
	  };
	  if (Array.isArray(schema.enum)) {
	    var enumOptions = (0, _utils.optionsList)(schema);
	    if (widget) {
	      var Widget = (0, _utils.getAlternativeWidget)(schema, widget, widgets, { enumOptions: enumOptions });
	      return _react2.default.createElement(Widget, commonProps);
	    }
	    return _react2.default.createElement(_SelectWidget2.default, _extends({ options: { enumOptions: enumOptions } }, commonProps));
	  }
	  if (widget) {
	    var _Widget = (0, _utils.getAlternativeWidget)(schema, widget, widgets);
	    return _react2.default.createElement(_Widget, _extends({}, commonProps, { placeholder: placeholder }));
	  }
	  return _react2.default.createElement(_TextWidget2.default, _extends({}, commonProps, { placeholder: placeholder }));
	}

	if (process.env.NODE_ENV !== "production") {
	  StringField.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object.isRequired,
	    idSchema: _react.PropTypes.object,
	    onChange: _react.PropTypes.func.isRequired,
	    formData: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    registry: _react.PropTypes.shape({
	      widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])).isRequired,
	      fields: _react.PropTypes.objectOf(_react.PropTypes.func).isRequired,
	      definitions: _react.PropTypes.object.isRequired,
	      formContext: _react.PropTypes.object.isRequired
	    }),
	    formContext: _react.PropTypes.object.isRequired,
	    required: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool
	  };
	}

	StringField.defaultProps = {
	  uiSchema: {},
	  registry: (0, _utils.getDefaultRegistry)(),
	  disabled: false,
	  readonly: false
	};

	exports.default = StringField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function objectKeysHaveChanged(formData, state) {
	  // for performance, first check for lengths
	  var newKeys = Object.keys(formData);
	  var oldKeys = Object.keys(state);
	  if (newKeys.length < oldKeys.length) {
	    return true;
	  }
	  // deep check on sorted keys
	  if (!(0, _utils.deepEquals)(newKeys.sort(), oldKeys.sort())) {
	    return true;
	  }
	  return false;
	}

	var ObjectField = function (_Component) {
	  _inherits(ObjectField, _Component);

	  function ObjectField(props) {
	    _classCallCheck(this, ObjectField);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectField).call(this, props));

	    _this.onPropertyChange = function (name) {
	      return function (value, options) {
	        _this.asyncSetState(_defineProperty({}, name, value), options);
	      };
	    };

	    _this.state = _this.getStateFromProps(props);
	    return _this;
	  }

	  _createClass(ObjectField, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var state = this.getStateFromProps(nextProps);
	      var formData = nextProps.formData;

	      if (formData && objectKeysHaveChanged(formData, this.state)) {
	        // We *need* to replace state entirely here has we have received formData
	        // holding different keys (so with some removed).
	        this.state = state;
	        this.forceUpdate();
	      } else {
	        this.setState(state);
	      }
	    }
	  }, {
	    key: "getStateFromProps",
	    value: function getStateFromProps(props) {
	      var schema = props.schema;
	      var formData = props.formData;
	      var registry = props.registry;

	      return (0, _utils.getDefaultFormState)(schema, formData, registry.definitions) || {};
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _utils.shouldRender)(this, nextProps, nextState);
	    }
	  }, {
	    key: "isRequired",
	    value: function isRequired(name) {
	      var schema = this.props.schema;
	      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
	    }
	  }, {
	    key: "asyncSetState",
	    value: function asyncSetState(state) {
	      var _this2 = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? { validate: false } : arguments[1];

	      (0, _utils.setState)(this, state, function () {
	        _this2.props.onChange(_this2.state, options);
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props;
	      var uiSchema = _props.uiSchema;
	      var errorSchema = _props.errorSchema;
	      var idSchema = _props.idSchema;
	      var name = _props.name;
	      var required = _props.required;
	      var disabled = _props.disabled;
	      var readonly = _props.readonly;
	      var _props$registry = this.props.registry;
	      var definitions = _props$registry.definitions;
	      var fields = _props$registry.fields;
	      var formContext = _props$registry.formContext;
	      var SchemaField = fields.SchemaField;
	      var TitleField = fields.TitleField;
	      var DescriptionField = fields.DescriptionField;

	      var schema = (0, _utils.retrieveSchema)(this.props.schema, definitions);
	      var title = schema.title || name;
	      var orderedProperties = void 0;
	      try {
	        var properties = Object.keys(schema.properties);
	        orderedProperties = (0, _utils.orderProperties)(properties, uiSchema["ui:order"]);
	      } catch (err) {
	        return _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "p",
	            { className: "config-error", style: { color: "red" } },
	            "Invalid ",
	            name || "root",
	            " object field configuration:",
	            _react2.default.createElement(
	              "em",
	              null,
	              err.message
	            ),
	            "."
	          ),
	          _react2.default.createElement(
	            "pre",
	            null,
	            JSON.stringify(schema)
	          )
	        );
	      }
	      return _react2.default.createElement(
	        "fieldset",
	        null,
	        title ? _react2.default.createElement(TitleField, {
	          id: idSchema.$id + "__title",
	          title: title,
	          required: required,
	          formContext: formContext }) : null,
	        schema.description ? _react2.default.createElement(DescriptionField, {
	          id: idSchema.$id + "__description",
	          description: schema.description,
	          formContext: formContext }) : null,
	        orderedProperties.map(function (name, index) {
	          return _react2.default.createElement(SchemaField, { key: index,
	            name: name,
	            required: _this3.isRequired(name),
	            schema: schema.properties[name],
	            uiSchema: uiSchema[name],
	            errorSchema: errorSchema[name],
	            idSchema: idSchema[name],
	            formData: _this3.state[name],
	            onChange: _this3.onPropertyChange(name),
	            registry: _this3.props.registry,
	            disabled: disabled,
	            readonly: readonly });
	        })
	      );
	    }
	  }]);

	  return ObjectField;
	}(_react.Component);

	ObjectField.defaultProps = {
	  uiSchema: {},
	  errorSchema: {},
	  idSchema: {},
	  registry: (0, _utils.getDefaultRegistry)(),
	  required: false,
	  disabled: false,
	  readonly: false
	};


	if (process.env.NODE_ENV !== "production") {
	  ObjectField.propTypes = {
	    schema: _react.PropTypes.object.isRequired,
	    uiSchema: _react.PropTypes.object,
	    errorSchema: _react.PropTypes.object,
	    idSchema: _react.PropTypes.object,
	    onChange: _react.PropTypes.func.isRequired,
	    formData: _react.PropTypes.object,
	    required: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    readonly: _react.PropTypes.bool,
	    registry: _react.PropTypes.shape({
	      widgets: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])).isRequired,
	      fields: _react.PropTypes.objectOf(_react.PropTypes.func).isRequired,
	      definitions: _react.PropTypes.object.isRequired,
	      formContext: _react.PropTypes.object.isRequired
	    })
	  };
	}

	exports.default = ObjectField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UnsupportedField;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function UnsupportedField(_ref) {
	  var schema = _ref.schema;

	  // XXX render json as string so dev can inspect faulty subschema
	  return _react2.default.createElement(
	    "div",
	    { className: "unsupported-field" },
	    "Unsupported field schema ",
	    JSON.stringify(schema, null, 2),
	    "."
	  );
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ErrorList;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ErrorList(_ref) {
	  var errors = _ref.errors;

	  return _react2.default.createElement(
	    "div",
	    { className: "panel panel-danger errors" },
	    _react2.default.createElement(
	      "div",
	      { className: "panel-heading" },
	      _react2.default.createElement(
	        "h3",
	        { className: "panel-title" },
	        "Errors"
	      )
	    ),
	    _react2.default.createElement(
	      "ul",
	      { className: "list-group" },
	      errors.map(function (error, i) {
	        return _react2.default.createElement(
	          "li",
	          { key: i, className: "list-group-item text-danger" },
	          error.stack
	        );
	      })
	    )
	  );
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.toErrorList = toErrorList;
	exports.default = validateFormData;

	var _jsonschema = __webpack_require__(79);

	var _utils = __webpack_require__(47);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var RE_ERROR_ARRAY_PATH = /\[\d+]/g;

	function errorPropertyToPath(property) {
	  // Parse array indices, eg. "instance.level1.level2[2].level3"
	  // => ["instance", "level1", "level2", 2, "level3"]
	  return property.split(".").reduce(function (path, node) {
	    var match = node.match(RE_ERROR_ARRAY_PATH);
	    if (match) {
	      var nodeName = node.slice(0, node.indexOf("["));
	      var indices = match.map(function (str) {
	        return parseInt(str.slice(1, -1), 10);
	      });
	      path = path.concat(nodeName, indices);
	    } else {
	      path.push(node);
	    }
	    return path;
	  }, []);
	}

	function toErrorSchema(errors) {
	  // Transforms a jsonschema validation errors list:
	  // [
	  //   {property: "instance.level1.level2[2].level3", message: "err a"},
	  //   {property: "instance.level1.level2[2].level3", message: "err b"},
	  //   {property: "instance.level1.level2[4].level3", message: "err b"},
	  // ]
	  // Into an error tree:
	  // {
	  //   level1: {
	  //     level2: {
	  //       2: {level3: {errors: ["err a", "err b"]}},
	  //       4: {level3: {errors: ["err b"]}},
	  //     }
	  //   }
	  // };
	  if (!errors.length) {
	    return {};
	  }
	  return errors.reduce(function (errorSchema, error) {
	    var property = error.property;
	    var message = error.message;

	    var path = errorPropertyToPath(property);
	    var parent = errorSchema;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = path.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var segment = _step.value;

	        if (!(segment in parent)) {
	          parent[segment] = {};
	        }
	        parent = parent[segment];
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    if (Array.isArray(parent.__errors)) {
	      // We store the list of errors for this node in a property named __errors
	      // to avoid name collision with a possible sub schema field named
	      // "errors" (see `validate.createErrorHandler`).
	      parent.__errors = parent.__errors.concat(message);
	    } else {
	      parent.__errors = [message];
	    }
	    return errorSchema;
	  }, {});
	}

	function toErrorList(errorSchema) {
	  var fieldName = arguments.length <= 1 || arguments[1] === undefined ? "root" : arguments[1];

	  // XXX: We should transform fieldName as a full field path string.
	  var errorList = [];
	  if ("__errors" in errorSchema) {
	    errorList = errorList.concat(errorSchema.__errors.map(function (stack) {
	      return {
	        stack: fieldName + ": " + stack
	      };
	    }));
	  }
	  return Object.keys(errorSchema).reduce(function (acc, key) {
	    if (key !== "__errors") {
	      acc = acc.concat(toErrorList(errorSchema[key], key));
	    }
	    return acc;
	  }, errorList);
	}

	function createErrorHandler(formData) {
	  var handler = {
	    // We store the list of errors for this node in a property named __errors
	    // to avoid name collision with a possible sub schema field named
	    // "errors" (see `utils.toErrorSchema`).
	    __errors: [],
	    addError: function addError(message) {
	      this.__errors.push(message);
	    }
	  };
	  if ((0, _utils.isObject)(formData)) {
	    return Object.keys(formData).reduce(function (acc, key) {
	      return _extends({}, acc, _defineProperty({}, key, createErrorHandler(formData[key])));
	    }, handler);
	  }
	  return handler;
	}

	function unwrapErrorHandler(errorHandler) {
	  return Object.keys(errorHandler).reduce(function (acc, key) {
	    if (key === "addError") {
	      return acc;
	    } else if (key === "__errors") {
	      return _extends({}, acc, _defineProperty({}, key, errorHandler[key]));
	    }
	    return _extends({}, acc, _defineProperty({}, key, unwrapErrorHandler(errorHandler[key])));
	  }, {});
	}

	/**
	 * This function processes the formData with a user `validate` contributed
	 * function, which receives the form data and an `errorHandler` object that
	 * will be used to add custom validation errors for each field.
	 */
	function validateFormData(formData, schema, customValidate) {
	  var _jsonValidate = (0, _jsonschema.validate)(formData, schema);

	  var errors = _jsonValidate.errors;

	  var errorSchema = toErrorSchema(errors);

	  if (typeof customValidate !== "function") {
	    return { errors: errors, errorSchema: errorSchema };
	  }

	  var errorHandler = customValidate(formData, createErrorHandler(formData));
	  var userErrorSchema = unwrapErrorHandler(errorHandler);
	  var newErrorSchema = (0, _utils.mergeObjects)(errorSchema, userErrorSchema, true);
	  // XXX: The errors list produced is not fully compliant with the format
	  // exposed by the jsonschema lib, which contains full field paths and other
	  // properties.
	  var newErrors = toErrorList(newErrorSchema);

	  return { errors: newErrors, errorSchema: newErrorSchema };
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Validator = module.exports.Validator = __webpack_require__(80);

	module.exports.ValidatorResult = __webpack_require__(87).ValidatorResult;
	module.exports.ValidationError = __webpack_require__(87).ValidationError;
	module.exports.SchemaError = __webpack_require__(87).SchemaError;

	module.exports.validate = function (instance, schema, options) {
	  var v = new Validator();
	  return v.validate(instance, schema, options);
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var urilib = __webpack_require__(81);

	var attribute = __webpack_require__(86);
	var helpers = __webpack_require__(87);
	var ValidatorResult = helpers.ValidatorResult;
	var SchemaError = helpers.SchemaError;
	var SchemaContext = helpers.SchemaContext;

	/**
	 * Creates a new Validator object
	 * @name Validator
	 * @constructor
	 */
	var Validator = function Validator () {
	  // Allow a validator instance to override global custom formats or to have their
	  // own custom formats.
	  this.customFormats = Object.create(Validator.prototype.customFormats);
	  this.schemas = {};
	  this.unresolvedRefs = [];

	  // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
	  this.types = Object.create(types);
	  this.attributes = Object.create(attribute.validators);
	};

	// Allow formats to be registered globally.
	Validator.prototype.customFormats = {};

	// Hint at the presence of a property
	Validator.prototype.schemas = null;
	Validator.prototype.types = null;
	Validator.prototype.attributes = null;
	Validator.prototype.unresolvedRefs = null;

	/**
	 * Adds a schema with a certain urn to the Validator instance.
	 * @param schema
	 * @param urn
	 * @return {Object}
	 */
	Validator.prototype.addSchema = function addSchema (schema, uri) {
	  if (!schema) {
	    return null;
	  }
	  var ourUri = uri || schema.id;
	  this.addSubSchema(ourUri, schema);
	  if (ourUri) {
	    this.schemas[ourUri] = schema;
	  }
	  return this.schemas[ourUri];
	};

	Validator.prototype.addSubSchema = function addSubSchema(baseuri, schema) {
	  if(!schema || typeof schema!='object') return;
	  // Mark all referenced schemas so we can tell later which schemas are referred to, but never defined
	  if(schema.$ref){
	    var resolvedUri = urilib.resolve(baseuri, schema.$ref);
	    // Only mark unknown schemas as unresolved
	    if (this.schemas[resolvedUri] === undefined) {
	      this.schemas[resolvedUri] = null;
	      this.unresolvedRefs.push(resolvedUri);
	    }
	    return;
	  }
	  var ourUri = schema.id && urilib.resolve(baseuri, schema.id);
	  var ourBase = ourUri || baseuri;
	  if (ourUri) {
	    if(this.schemas[ourUri]){
	      if(!helpers.deepCompareStrict(this.schemas[ourUri], schema)){
	        throw new Error('Schema <'+schema+'> already exists with different definition');
	      }
	      return this.schemas[ourUri];
	    }
	    this.schemas[ourUri] = schema;
	    var documentUri = ourUri.replace(/^([^#]*)#$/, '$1');
	    this.schemas[documentUri] = schema;
	  }
	  this.addSubSchemaArray(ourBase, ((schema.items instanceof Array)?schema.items:[schema.items]));
	  this.addSubSchemaArray(ourBase, ((schema.extends instanceof Array)?schema.extends:[schema.extends]));
	  this.addSubSchema(ourBase, schema.additionalItems);
	  this.addSubSchemaObject(ourBase, schema.properties);
	  this.addSubSchema(ourBase, schema.additionalProperties);
	  this.addSubSchemaObject(ourBase, schema.definitions);
	  this.addSubSchemaObject(ourBase, schema.patternProperties);
	  this.addSubSchemaObject(ourBase, schema.dependencies);
	  this.addSubSchemaArray(ourBase, schema.disallow);
	  this.addSubSchemaArray(ourBase, schema.allOf);
	  this.addSubSchemaArray(ourBase, schema.anyOf);
	  this.addSubSchemaArray(ourBase, schema.oneOf);
	  this.addSubSchema(ourBase, schema.not);
	  return this.schemas[ourUri];
	};

	Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
	  if(!(schemas instanceof Array)) return;
	  for(var i=0; i<schemas.length; i++){
	    this.addSubSchema(baseuri, schemas[i]);
	  }
	};

	Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
	  if(!schemas || typeof schemas!='object') return;
	  for(var p in schemas){
	    this.addSubSchema(baseuri, schemas[p]);
	  }
	};



	/**
	 * Sets all the schemas of the Validator instance.
	 * @param schemas
	 */
	Validator.prototype.setSchemas = function setSchemas (schemas) {
	  this.schemas = schemas;
	};

	/**
	 * Returns the schema of a certain urn
	 * @param urn
	 */
	Validator.prototype.getSchema = function getSchema (urn) {
	  return this.schemas[urn];
	};

	/**
	 * Validates instance against the provided schema
	 * @param instance
	 * @param schema
	 * @param [options]
	 * @param [ctx]
	 * @return {Array}
	 */
	Validator.prototype.validate = function validate (instance, schema, options, ctx) {
	  if (!options) {
	    options = {};
	  }
	  var propertyName = options.propertyName || 'instance';
	  // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
	  var base = urilib.resolve(options.base||'/', schema.id||'');
	  if(!ctx){
	    ctx = new SchemaContext(schema, options, propertyName, base, Object.create(this.schemas));
	    if (!ctx.schemas[base]) {
	      ctx.schemas[base] = schema;
	    }
	  }
	  if (schema) {
	    var result = this.validateSchema(instance, schema, options, ctx);
	    if (!result) {
	      throw new Error('Result undefined');
	    }
	    return result;
	  }
	  throw new SchemaError('no schema specified', schema);
	};

	/**
	 * Validates an instance against the schema (the actual work horse)
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @private
	 * @return {ValidatorResult}
	 */
	Validator.prototype.validateSchema = function validateSchema (instance, schema, options, ctx) {
	  var self = this;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!schema) {
	    throw new Error("schema is undefined");
	  }

	  /**
	  * @param Object schema
	  * @return mixed schema uri or false
	  */
	  function shouldResolve(schema) {
	    var ref = (typeof schema === 'string') ? schema : schema.$ref;
	    if (typeof ref=='string') return ref;
	    return false;
	  }
	  /**
	  * @param Object schema
	  * @param SchemaContext ctx
	  * @returns Object schema or resolved schema
	  */
	  function resolve(schema, ctx) {
	    var ref;
	    if(ref = shouldResolve(schema)) {
	      return self.resolve(schema, ref, ctx).subschema;
	    }
	    return schema;
	  }

	  if (schema['extends']) {
	    if (schema['extends'] instanceof Array) {
	      schema['extends'].forEach(function (s) {
	        schema = helpers.deepMerge(schema, resolve(s, ctx));
	      });
	    } else {
	      schema = helpers.deepMerge(schema, resolve(schema['extends'], ctx));
	    }
	  }

	  var switchSchema;
	  if (switchSchema = shouldResolve(schema)) {
	    var resolved = this.resolve(schema, switchSchema, ctx);
	    var subctx = new SchemaContext(resolved.subschema, options, ctx.propertyPath, resolved.switchSchema, ctx.schemas);
	    return this.validateSchema(instance, resolved.subschema, options, subctx);
	  }

	  var skipAttributes = options && options.skipAttributes || [];
	  // Validate each schema attribute against the instance
	  for (var key in schema) {
	    if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
	      var validatorErr = null;
	      var validator = self.attributes[key];
	      if (validator) {
	        validatorErr = validator.call(self, instance, schema, options, ctx);
	      } else if (options.allowUnknownAttributes === false) {
	        // This represents an error with the schema itself, not an invalid instance
	        throw new SchemaError("Unsupported attribute: " + key, schema);
	      }
	      if (validatorErr) {
	        result.importErrors(validatorErr);
	      }
	    }
	  }

	  if (typeof options.rewrite == 'function') {
	    var value = options.rewrite.call(this, instance, schema, options, ctx);
	    result.instance = value;
	  }
	  return result;
	};

	/**
	* @private
	* @param Object schema
	* @param Object switchSchema
	* @param SchemaContext ctx
	* @return Object resolved schemas {subschema:String, switchSchema: String}
	* @thorws SchemaError
	*/
	Validator.prototype.resolve = function resolve (schema, switchSchema, ctx) {
	  switchSchema = ctx.resolve(switchSchema);
	  // First see if the schema exists under the provided URI
	  if (ctx.schemas[switchSchema]) {
	    return {subschema: ctx.schemas[switchSchema], switchSchema: switchSchema};
	  }
	  // Else try walking the property pointer
	  var parsed = urilib.parse(switchSchema);
	  var fragment = parsed && parsed.hash;
	  var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
	  if (!document || !ctx.schemas[document]) {
	    throw new SchemaError("no such schema <" + switchSchema + ">", schema);
	  }
	  var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
	  if(subschema===undefined){
	    throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
	  }
	  return {subschema: subschema, switchSchema: switchSchema};
	};

	/**
	 * Tests whether the instance if of a certain type.
	 * @private
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @param type
	 * @return {boolean}
	 */
	Validator.prototype.testType = function validateType (instance, schema, options, ctx, type) {
	  if (typeof this.types[type] == 'function') {
	    return this.types[type].call(this, instance);
	  }
	  if (type && typeof type == 'object') {
	    var res = this.validateSchema(instance, type, options, ctx);
	    return res === undefined || !(res && res.errors.length);
	  }
	  // Undefined or properties not on the list are acceptable, same as not being defined
	  return true;
	};

	var types = Validator.prototype.types = {};
	types.string = function testString (instance) {
	  return typeof instance == 'string';
	};
	types.number = function testNumber (instance) {
	  // isFinite returns false for NaN, Infinity, and -Infinity
	  return typeof instance == 'number' && isFinite(instance);
	};
	types.integer = function testInteger (instance) {
	  return (typeof instance == 'number') && instance % 1 === 0;
	};
	types.boolean = function testBoolean (instance) {
	  return typeof instance == 'boolean';
	};
	types.array = function testArray (instance) {
	  return instance instanceof Array;
	};
	types['null'] = function testNull (instance) {
	  return instance === null;
	};
	types.date = function testDate (instance) {
	  return instance instanceof Date;
	};
	types.any = function testAny (instance) {
	  return true;
	};
	types.object = function testObject (instance) {
	  // TODO: fix this - see #15
	  return instance && (typeof instance) === 'object' && !(instance instanceof Array) && !(instance instanceof Date);
	};

	module.exports = Validator;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var punycode = __webpack_require__(82);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(83);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module), (function() { return this; }())))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(84);
	exports.encode = exports.stringify = __webpack_require__(85);


/***/ },
/* 84 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 85 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var helpers = __webpack_require__(87);

	/** @type ValidatorResult */
	var ValidatorResult = helpers.ValidatorResult;
	/** @type SchemaError */
	var SchemaError = helpers.SchemaError;

	var attribute = {};

	attribute.ignoreProperties = {
	  // informative properties
	  'id': true,
	  'default': true,
	  'description': true,
	  'title': true,
	  // arguments to other properties
	  'exclusiveMinimum': true,
	  'exclusiveMaximum': true,
	  'additionalItems': true,
	  // special-handled properties
	  '$schema': true,
	  '$ref': true,
	  'extends': true
	};

	/**
	 * @name validators
	 */
	var validators = attribute.validators = {};

	/**
	 * Validates whether the instance if of a certain type
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {ValidatorResult|null}
	 */
	validators.type = function validateType (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var types = (schema.type instanceof Array) ? schema.type : [schema.type];
	  if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
	    var list = types.map(function (v) {
	      return v.id && ('<' + v.id + '>') || (v+'');
	    });
	    result.addError({
	      name: 'type',
	      argument: list,
	      message: "is not of a type(s) " + list,
	    });
	  }
	  return result;
	};

	function testSchema(instance, options, ctx, schema){
	  return this.validateSchema(instance, schema, options, ctx).valid;
	}

	/**
	 * Validates whether the instance matches some of the given schemas
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {ValidatorResult|null}
	 */
	validators.anyOf = function validateAnyOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(schema.anyOf instanceof Array)){
	    throw new SchemaError("anyOf must be an array");
	  }
	  if (!schema.anyOf.some(testSchema.bind(this, instance, options, ctx))) {
	    var list = schema.anyOf.map(function (v, i) {
	      return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	    });
	    result.addError({
	      name: 'anyOf',
	      argument: list,
	      message: "is not any of " + list.join(','),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance matches every given schema
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null}
	 */
	validators.allOf = function validateAllOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  if (!(schema.allOf instanceof Array)){
	    throw new SchemaError("allOf must be an array");
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var self = this;
	  schema.allOf.forEach(function(v, i){
	    var valid = self.validateSchema(instance, v, options, ctx);
	    if(!valid.valid){
	      var msg = (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	      result.addError({
	        name: 'allOf',
	        argument: { id: msg, length: valid.errors.length, valid: valid },
	        message: 'does not match allOf schema ' + msg + ' with ' + valid.errors.length + ' error[s]:',
	      });
	      result.importErrors(valid);
	    }
	  });
	  return result;
	};

	/**
	 * Validates whether the instance matches exactly one of the given schemas
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null}
	 */
	validators.oneOf = function validateOneOf (instance, schema, options, ctx) {
	  // Ignore undefined instances
	  if (instance === undefined) {
	    return null;
	  }
	  if (!(schema.oneOf instanceof Array)){
	    throw new SchemaError("oneOf must be an array");
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var count = schema.oneOf.filter(testSchema.bind(this, instance, options, ctx)).length;
	  var list = schema.oneOf.map(function (v, i) {
	    return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
	  });
	  if (count!==1) {
	    result.addError({
	      name: 'oneOf',
	      argument: list,
	      message: "is not exactly one from " + list.join(','),
	    });
	  }
	  return result;
	};

	/**
	 * Validates properties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.properties = function validateProperties (instance, schema, options, ctx) {
	  if(instance === undefined || !(instance instanceof Object)) return;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var properties = schema.properties || {};
	  for (var property in properties) {
	    var prop = (instance || undefined) && instance[property];
	    var res = this.validateSchema(prop, properties[property], options, ctx.makeChild(properties[property], property));
	    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	    result.importErrors(res);
	  }
	  return result;
	};

	/**
	 * Test a specific property within in instance against the additionalProperties schema attribute
	 * This ignores properties with definitions in the properties schema attribute, but no other attributes.
	 * If too many more types of property-existance tests pop up they may need their own class of tests (like `type` has)
	 * @private
	 * @return {boolean}
	 */
	function testAdditionalProperty (instance, schema, options, ctx, property, result) {
	  if (schema.properties && schema.properties[property] !== undefined) {
	    return;
	  }
	  if (schema.additionalProperties === false) {
	    result.addError({
	      name: 'additionalProperties',
	      argument: property,
	      message: "additionalProperty " + JSON.stringify(property) + " exists in instance when not allowed",
	    });
	  } else {
	    var additionalProperties = schema.additionalProperties || {};
	    var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
	    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	    result.importErrors(res);
	  }
	}

	/**
	 * Validates patternProperties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.patternProperties = function validatePatternProperties (instance, schema, options, ctx) {
	  if(instance === undefined) return;
	  if(!this.types.object(instance)) return;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var patternProperties = schema.patternProperties || {};

	  for (var property in instance) {
	    var test = true;
	    for (var pattern in patternProperties) {
	      var expr = new RegExp(pattern);
	      if (!expr.test(property)) {
	        continue;
	      }
	      test = false;
	      var res = this.validateSchema(instance[property], patternProperties[pattern], options, ctx.makeChild(patternProperties[pattern], property));
	      if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
	      result.importErrors(res);
	    }
	    if (test) {
	      testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
	    }
	  }

	  return result;
	};

	/**
	 * Validates additionalProperties
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.additionalProperties = function validateAdditionalProperties (instance, schema, options, ctx) {
	  if(instance === undefined) return;
	  if(!this.types.object(instance)) return;
	  // if patternProperties is defined then we'll test when that one is called instead
	  if (schema.patternProperties) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  for (var property in instance) {
	    testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minProperties = function validateMinProperties (instance, schema, options, ctx) {
	  if (!instance || typeof instance !== 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var keys = Object.keys(instance);
	  if (!(keys.length >= schema.minProperties)) {
	    result.addError({
	      name: 'minProperties',
	      argument: schema.minProperties,
	      message: "does not meet minimum property length of " + schema.minProperties,
	    })
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxProperties = function validateMaxProperties (instance, schema, options, ctx) {
	  if (!instance || typeof instance !== 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var keys = Object.keys(instance);
	  if (!(keys.length <= schema.maxProperties)) {
	    result.addError({
	      name: 'maxProperties',
	      argument: schema.maxProperties,
	      message: "does not meet maximum property length of " + schema.maxProperties,
	    });
	  }
	  return result;
	};

	/**
	 * Validates items when instance is an array
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.items = function validateItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var self = this;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance === undefined || !schema.items) {
	    return result;
	  }
	  instance.every(function (value, i) {
	    var items = (schema.items instanceof Array) ? (schema.items[i] || schema.additionalItems) : schema.items;
	    if (items === undefined) {
	      return true;
	    }
	    if (items === false) {
	      result.addError({
	        name: 'items',
	        message: "additionalItems not permitted",
	      });
	      return false;
	    }
	    var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
	    if(res.instance !== result.instance[i]) result.instance[i] = res.instance;
	    result.importErrors(res);
	    return true;
	  });
	  return result;
	};

	/**
	 * Validates minimum and exclusiveMinimum when the type of the instance value is a number.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minimum = function validateMinimum (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var valid = true;
	  if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
	    valid = instance > schema.minimum;
	  } else {
	    valid = instance >= schema.minimum;
	  }
	  if (!valid) {
	    result.addError({
	      name: 'minimum',
	      argument: schema.minimum,
	      message: "must have a minimum value of " + schema.minimum,
	    });
	  }
	  return result;
	};

	/**
	 * Validates maximum and exclusiveMaximum when the type of the instance value is a number.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maximum = function validateMaximum (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var valid;
	  if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
	    valid = instance < schema.maximum;
	  } else {
	    valid = instance <= schema.maximum;
	  }
	  if (!valid) {
	    result.addError({
	      name: 'maximum',
	      argument: schema.maximum,
	      message: "must have a maximum value of " + schema.maximum,
	    });
	  }
	  return result;
	};

	/**
	 * Validates divisibleBy when the type of the instance value is a number.
	 * Of course, this is susceptible to floating point error since it compares the floating points
	 * and not the JSON byte sequences to arbitrary precision.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.divisibleBy = function validateDivisibleBy (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }

	  if (schema.divisibleBy == 0) {
	    throw new SchemaError("divisibleBy cannot be zero");
	  }

	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance / schema.divisibleBy % 1) {
	    result.addError({
	      name: 'divisibleBy',
	      argument: schema.divisibleBy,
	      message: "is not divisible by (multiple of) " + JSON.stringify(schema.divisibleBy),
	    });
	  }
	  return result;
	};

	/**
	 * Validates divisibleBy when the type of the instance value is a number.
	 * Of course, this is susceptible to floating point error since it compares the floating points
	 * and not the JSON byte sequences to arbitrary precision.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.multipleOf = function validateMultipleOf (instance, schema, options, ctx) {
	  if (typeof instance !== 'number') {
	    return null;
	  }

	  if (schema.multipleOf == 0) {
	    throw new SchemaError("multipleOf cannot be zero");
	  }

	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance / schema.multipleOf % 1) {
	    result.addError({
	      name: 'multipleOf',
	      argument:  schema.multipleOf,
	      message: "is not a multiple of (divisible by) " + JSON.stringify(schema.multipleOf),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is present.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.required = function validateRequired (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (instance === undefined && schema.required === true) {
	    result.addError({
	      name: 'required',
	      message: "is required"
	    });
	  } else if (instance && typeof instance==='object' && Array.isArray(schema.required)) {
	    schema.required.forEach(function(n){
	      if(instance[n]===undefined){
	        result.addError({
	          name: 'required',
	          argument: n,
	          message: "requires property " + JSON.stringify(n),
	        });
	      }
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value matches the regular expression, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.pattern = function validatePattern (instance, schema, options, ctx) {
	  if (typeof instance !== 'string') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!instance.match(schema.pattern)) {
	    result.addError({
	      name: 'pattern',
	      argument: schema.pattern,
	      message: "does not match pattern " + JSON.stringify(schema.pattern),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is of a certain defined format or a custom
	 * format.
	 * The following formats are supported for string types:
	 *   - date-time
	 *   - date
	 *   - time
	 *   - ip-address
	 *   - ipv6
	 *   - uri
	 *   - color
	 *   - host-name
	 *   - alpha
	 *   - alpha-numeric
	 *   - utc-millisec
	 * @param instance
	 * @param schema
	 * @param [options]
	 * @param [ctx]
	 * @return {String|null}
	 */
	validators.format = function validateFormat (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) {
	    result.addError({
	      name: 'format',
	      argument: schema.format,
	      message: "does not conform to the " + JSON.stringify(schema.format) + " format",
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minLength = function validateMinLength (instance, schema, options, ctx) {
	  if (!(typeof instance === 'string')) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length >= schema.minLength)) {
	    result.addError({
	      name: 'minLength',
	      argument: schema.minLength,
	      message: "does not meet minimum length of " + schema.minLength,
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxLength = function validateMaxLength (instance, schema, options, ctx) {
	  if (!(typeof instance === 'string')) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length <= schema.maxLength)) {
	    result.addError({
	      name: 'maxLength',
	      argument: schema.maxLength,
	      message: "does not meet maximum length of " + schema.maxLength,
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether instance contains at least a minimum number of items, when the instance is an Array.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.minItems = function validateMinItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length >= schema.minItems)) {
	    result.addError({
	      name: 'minItems',
	      argument: schema.minItems,
	      message: "does not meet minimum length of " + schema.minItems,
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
	 * @param instance
	 * @param schema
	 * @return {String|null}
	 */
	validators.maxItems = function validateMaxItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance.length <= schema.maxItems)) {
	    result.addError({
	      name: 'maxItems',
	      argument: schema.maxItems,
	      message: "does not meet maximum length of " + schema.maxItems,
	    });
	  }
	  return result;
	};

	/**
	 * Validates that every item in an instance array is unique, when instance is an array
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {String|null|ValidatorResult}
	 */
	validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!(instance instanceof Array)) {
	    return result;
	  }
	  function testArrays (v, i, a) {
	    for (var j = i + 1; j < a.length; j++) if (helpers.deepCompareStrict(v, a[j])) {
	      return false;
	    }
	    return true;
	  }
	  if (!instance.every(testArrays)) {
	    result.addError({
	      name: 'uniqueItems',
	      message: "contains duplicate item",
	    });
	  }
	  return result;
	};

	/**
	 * Deep compares arrays for duplicates
	 * @param v
	 * @param i
	 * @param a
	 * @private
	 * @return {boolean}
	 */
	function testArrays (v, i, a) {
	  var j, len = a.length;
	  for (j = i + 1, len; j < len; j++) {
	    if (helpers.deepCompareStrict(v, a[j])) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Validates whether there are no duplicates, when the instance is an Array.
	 * @param instance
	 * @return {String|null}
	 */
	validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
	  if (!(instance instanceof Array)) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!instance.every(testArrays)) {
	    result.addError({
	      name: 'uniqueItems',
	      message: "contains duplicate item",
	    });
	  }
	  return result;
	};

	/**
	 * Validate for the presence of dependency properties, if the instance is an object.
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {null|ValidatorResult}
	 */
	validators.dependencies = function validateDependencies (instance, schema, options, ctx) {
	  if (!instance || typeof instance != 'object') {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  for (var property in schema.dependencies) {
	    if (instance[property] === undefined) {
	      continue;
	    }
	    var dep = schema.dependencies[property];
	    var childContext = ctx.makeChild(dep, property);
	    if (typeof dep == 'string') {
	      dep = [dep];
	    }
	    if (dep instanceof Array) {
	      dep.forEach(function (prop) {
	        if (instance[prop] === undefined) {
	          result.addError({
	            // FIXME there's two different "dependencies" errors here with slightly different outputs
	            // Can we make these the same? Or should we create different error types?
	            name: 'dependencies',
	            argument: childContext.propertyPath,
	            message: "property " + prop + " not found, required by " + childContext.propertyPath,
	          });
	        }
	      });
	    } else {
	      var res = this.validateSchema(instance, dep, options, childContext);
	      if(result.instance !== res.instance) result.instance = res.instance;
	      if (res && res.errors.length) {
	        result.addError({
	          name: 'dependencies',
	          argument: childContext.propertyPath,
	          message: "does not meet dependency required by " + childContext.propertyPath,
	        });
	        result.importErrors(res);
	      }
	    }
	  }
	  return result;
	};

	/**
	 * Validates whether the instance value is one of the enumerated values.
	 *
	 * @param instance
	 * @param schema
	 * @return {ValidatorResult|null}
	 */
	validators['enum'] = function validateEnum (instance, schema, options, ctx) {
	  if (!(schema['enum'] instanceof Array)) {
	    throw new SchemaError("enum expects an array", schema);
	  }
	  if (instance === undefined) {
	    return null;
	  }
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  if (!schema['enum'].some(helpers.deepCompareStrict.bind(null, instance))) {
	    result.addError({
	      name: 'enum',
	      argument: schema['enum'],
	      message: "is not one of enum values: " + schema['enum'].join(','),
	    });
	  }
	  return result;
	};

	/**
	 * Validates whether the instance if of a prohibited type.
	 * @param instance
	 * @param schema
	 * @param options
	 * @param ctx
	 * @return {null|ValidatorResult}
	 */
	validators.not = validators.disallow = function validateNot (instance, schema, options, ctx) {
	  var self = this;
	  if(instance===undefined) return null;
	  var result = new ValidatorResult(instance, schema, options, ctx);
	  var notTypes = schema.not || schema.disallow;
	  if(!notTypes) return null;
	  if(!(notTypes instanceof Array)) notTypes=[notTypes];
	  notTypes.forEach(function (type) {
	    if (self.testType(instance, schema, options, ctx, type)) {
	      var schemaId = type && type.id && ('<' + type.id + '>') || type;
	      result.addError({
	        name: 'not',
	        argument: schemaId,
	        message: "is of prohibited type " + schemaId,
	      });
	    }
	  });
	  return result;
	};

	module.exports = attribute;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var uri = __webpack_require__(81);

	var ValidationError = exports.ValidationError = function ValidationError (message, instance, schema, propertyPath, name, argument) {
	  if (propertyPath) {
	    this.property = propertyPath;
	  }
	  if (message) {
	    this.message = message;
	  }
	  if (schema) {
	    if (schema.id) {
	      this.schema = schema.id;
	    } else {
	      this.schema = schema;
	    }
	  }
	  if (instance) {
	    this.instance = instance;
	  }
	  this.name = name;
	  this.argument = argument;
	  this.stack = this.toString();
	};

	ValidationError.prototype.toString = function toString() {
	  return this.property + ' ' + this.message;
	};

	var ValidatorResult = exports.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
	  this.instance = instance;
	  this.schema = schema;
	  this.propertyPath = ctx.propertyPath;
	  this.errors = [];
	  this.throwError = options && options.throwError;
	  this.disableFormat = options && options.disableFormat === true;
	};

	ValidatorResult.prototype.addError = function addError(detail) {
	  var err;
	  if (typeof detail == 'string') {
	    err = new ValidationError(detail, this.instance, this.schema, this.propertyPath);
	  } else {
	    if (!detail) throw new Error('Missing error detail');
	    if (!detail.message) throw new Error('Missing error message');
	    if (!detail.name) throw new Error('Missing validator type');
	    err = new ValidationError(detail.message, this.instance, this.schema, this.propertyPath, detail.name, detail.argument);
	  }

	  if (this.throwError) {
	    throw err;
	  }
	  this.errors.push(err);
	  return err;
	};

	ValidatorResult.prototype.importErrors = function importErrors(res) {
	  if (typeof res == 'string' || (res && res.validatorType)) {
	    this.addError(res);
	  } else if (res && res.errors) {
	    var errs = this.errors;
	    res.errors.forEach(function (v) {
	      errs.push(v);
	    });
	  }
	};

	ValidatorResult.prototype.toString = function toString(res) {
	  return this.errors.map(function(v,i){ return i+': '+v.toString()+'\n'; }).join('');
	};

	Object.defineProperty(ValidatorResult.prototype, "valid", { get: function() {
	  return !this.errors.length;
	} });

	/**
	 * Describes a problem with a Schema which prevents validation of an instance
	 * @name SchemaError
	 * @constructor
	 */
	var SchemaError = exports.SchemaError = function SchemaError (msg, schema) {
	  this.message = msg;
	  this.schema = schema;
	  Error.call(this, msg);
	  Error.captureStackTrace(this, SchemaError);
	};
	SchemaError.prototype = Object.create(Error.prototype,
	  { constructor: {value: SchemaError, enumerable: false}
	  , name: {value: 'SchemaError', enumerable: false}
	  });

	var SchemaContext = exports.SchemaContext = function SchemaContext (schema, options, propertyPath, base, schemas) {
	  this.schema = schema;
	  this.options = options;
	  this.propertyPath = propertyPath;
	  this.base = base;
	  this.schemas = schemas;
	};

	SchemaContext.prototype.resolve = function resolve (target) {
	  return uri.resolve(this.base, target);
	};

	SchemaContext.prototype.makeChild = function makeChild(schema, propertyName){
	  var propertyPath = (propertyName===undefined) ? this.propertyPath : this.propertyPath+makeSuffix(propertyName);
	  var base = uri.resolve(this.base, schema.id||'');
	  var ctx = new SchemaContext(schema, this.options, propertyPath, base, Object.create(this.schemas));
	  if(schema.id && !ctx.schemas[base]){
	    ctx.schemas[base] = schema;
	  }
	  return ctx;
	}

	var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
	  'date-time': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
	  'date': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
	  'time': /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,

	  'email': /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
	  'ip-address': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
	  'ipv6': /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
	  'uri': /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,

	  'color': /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,

	  // hostname regex from: http://stackoverflow.com/a/1420225/5628
	  'hostname': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
	  'host-name': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,

	  'alpha': /^[a-zA-Z]+$/,
	  'alphanumeric': /^[a-zA-Z0-9]+$/,
	  'utc-millisec': function (input) {
	    return (typeof input === 'string') && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
	  },
	  'regex': function (input) {
	    var result = true;
	    try {
	      new RegExp(input);
	    } catch (e) {
	      result = false;
	    }
	    return result;
	  },
	  'style': /\s*(.+?):\s*([^;]+);?/g,
	  'phone': /^\+(?:[0-9] ?){6,14}[0-9]$/
	};

	FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
	FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
	FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS['ip-address'];

	exports.isFormat = function isFormat (input, format, validator) {
	  if (typeof input === 'string' && FORMAT_REGEXPS[format] !== undefined) {
	    if (FORMAT_REGEXPS[format] instanceof RegExp) {
	      return FORMAT_REGEXPS[format].test(input);
	    }
	    if (typeof FORMAT_REGEXPS[format] === 'function') {
	      return FORMAT_REGEXPS[format](input);
	    }
	  } else if (validator && validator.customFormats &&
	      typeof validator.customFormats[format] === 'function') {
	    return validator.customFormats[format](input);
	  }
	  return true;
	};

	var makeSuffix = exports.makeSuffix = function makeSuffix (key) {
	  key = key.toString();
	  // This function could be capable of outputting valid a ECMAScript string, but the
	  // resulting code for testing which form to use would be tens of thousands of characters long
	  // That means this will use the name form for some illegal forms
	  if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
	    return '.' + key;
	  }
	  if (key.match(/^\d+$/)) {
	    return '[' + key + ']';
	  }
	  return '[' + JSON.stringify(key) + ']';
	};

	exports.deepCompareStrict = function deepCompareStrict (a, b) {
	  if (typeof a !== typeof b) {
	    return false;
	  }
	  if (a instanceof Array) {
	    if (!(b instanceof Array)) {
	      return false;
	    }
	    if (a.length !== b.length) {
	      return false;
	    }
	    return a.every(function (v, i) {
	      return deepCompareStrict(a[i], b[i]);
	    });
	  }
	  if (typeof a === 'object') {
	    if (!a || !b) {
	      return a === b;
	    }
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	    return aKeys.every(function (v) {
	      return deepCompareStrict(a[v], b[v]);
	    });
	  }
	  return a === b;
	};

	module.exports.deepMerge = function deepMerge (target, src) {
	  var array = Array.isArray(src);
	  var dst = array && [] || {};

	  if (array) {
	    target = target || [];
	    dst = dst.concat(target);
	    src.forEach(function (e, i) {
	      if (typeof e === 'object') {
	        dst[i] = deepMerge(target[i], e)
	      } else {
	        if (target.indexOf(e) === -1) {
	          dst.push(e)
	        }
	      }
	    });
	  } else {
	    if (target && typeof target === 'object') {
	      Object.keys(target).forEach(function (key) {
	        dst[key] = target[key];
	      });
	    }
	    Object.keys(src).forEach(function (key) {
	      if (typeof src[key] !== 'object' || !src[key]) {
	        dst[key] = src[key];
	      }
	      else {
	        if (!target[key]) {
	          dst[key] = src[key];
	        } else {
	          dst[key] = deepMerge(target[key], src[key])
	        }
	      }
	    });
	  }

	  return dst;
	};

	/**
	 * Validates instance against the provided schema
	 * Implements URI+JSON Pointer encoding, e.g. "%7e"="~0"=>"~", "~1"="%2f"=>"/"
	 * @param o
	 * @param s The path to walk o along
	 * @return any
	 */
	exports.objectGetPath = function objectGetPath(o, s) {
	  var parts = s.split('/').slice(1);
	  var k;
	  while (typeof (k=parts.shift()) == 'string') {
	    var n = decodeURIComponent(k.replace(/~0/,'~').replace(/~1/g,'/'));
	    if (!(n in o)) return;
	    o = o[n];
	  }
	  return o;
	};

	/**
	 * Accept an Array of property names and return a JSON Pointer URI fragment
	 * @param Array a
	 * @return {String}
	 */
	exports.encodePath = function encodePointer(a){
		// ~ must be encoded explicitly because hacks
		// the slash is encoded by encodeURIComponent
		return a.map(function(v){ return '/'+encodeURIComponent(v).replace(/~/g,'%7E'); }).join('');
	};


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(89);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // require('./RestWriter.less');


	var util = __webpack_require__(39);

	var agent = __webpack_require__(22)(__webpack_require__(23), Promise);

	var RestWriter = function (_React$Component) {
	    _inherits(RestWriter, _React$Component);

	    function RestWriter(props) {
	        _classCallCheck(this, RestWriter);

	        var _this = _possibleConstructorReturn(this, (RestWriter.__proto__ || Object.getPrototypeOf(RestWriter)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(RestWriter, [{
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var _props = this.props;
	            var view = _props.view;
	            var url = _props.url;
	            var id = _props.id;

	            var others = _objectWithoutProperties(_props, ['view', 'url', 'id']);

	            var View = view;
	            if (id) {
	                //更新或删除
	                var data = this.state.data;

	                console.log('render', data);
	                if (data === undefined) {
	                    return null; //等待异步取得数据
	                } else {
	                    return React.createElement(View, _extends({ data: data, update: this.update.bind(this), remove: this.remove.bind(this) }, others));
	                }
	            } else {
	                //新建
	                return React.createElement(View, _extends({ save: this.save.bind(this) }, others));
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update(data) {
	            var _this2 = this;

	            return this._update(data).then(function (node) {
	                var publish = _this2.props.publish;

	                if (publish) {
	                    if (publish.update) {
	                        PubSub.publish(publish.update, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	                return node;
	            });
	        }
	    }, {
	        key: '_update',
	        value: function _update(data) {
	            var _props2 = this.props;
	            var url = _props2.url;
	            var id = _props2.id;

	            return agent.put(url + '/' + id, data).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            var _this3 = this;

	            return this._remove().then(function (node) {
	                var publish = _this3.props.publish;

	                if (publish) {
	                    if (publish.remove) {
	                        PubSub.publish(publish.remove, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	            });
	        }
	    }, {
	        key: '_remove',
	        value: function _remove() {
	            var _props3 = this.props;
	            var url = _props3.url;
	            var id = _props3.id;

	            return agent.del(url + '/' + id).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'save',
	        value: function save(data) {
	            var _this4 = this;

	            return this._save(data).then(function (node) {
	                var publish = _this4.props.publish;
	                // debugger;

	                if (publish) {
	                    if (publish.save) {
	                        PubSub.publish(publish.save, node);
	                    } else if (typeof publish == 'string') {
	                        PubSub.publish(publish, node);
	                    }
	                }
	                return node;
	            });
	        }
	    }, {
	        key: '_save',
	        value: function _save(data) {
	            var url = this.props.url;

	            return agent.post(url, data).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this5 = this;

	            if (this.cancelablePromise) {
	                this.cancelablePromise.cancel();
	            }
	            this.cancelablePromise = util.makeCancelable(this._fetchData(props));
	            this.cancelablePromise.promise.then(function (data) {
	                _this5.setState({ data: data });
	            }).catch(function (reason) {
	                //console.log('isCanceled', reason.isCanceled)
	                if (!reason.isCanceled) {
	                    Promise.reject(reason);
	                }
	            });
	        }
	    }, {
	        key: '_fetchData',
	        value: function _fetchData(props) {
	            var url = props.url;
	            var id = props.id;

	            if (!id) {
	                return Promise.resolve();
	            }
	            return agent.get(url + '/' + id).then(function (resp) {
	                return resp.body;
	            });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log('componentDidMount');
	            this.fetchData(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            console.log('componentWillReceiveProps');
	            this.fetchData(nextProps);
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return true;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }]);

	    return RestWriter;
	}(React.Component);

	RestWriter.propTypes = {
	    view: _react.PropTypes.func.isRequired,
	    url: _react.PropTypes.string,
	    id: _react.PropTypes.string,
	    publish: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object])
	};

	module.exports = RestWriter;

/***/ }
]);