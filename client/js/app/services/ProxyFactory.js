'use strict';

System.register([], function (_export, _context) {
	"use strict";

	var _createClass, ProxyFactory;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			_export('ProxyFactory', ProxyFactory = function () {
				function ProxyFactory() {
					_classCallCheck(this, ProxyFactory);
				}

				_createClass(ProxyFactory, null, [{
					key: 'create',
					value: function create(objeto, props, acao) {

						return new Proxy(objeto, {
							get: function get(target, prop, receiver) {

								if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {

									return function () {
										console.log('interceptando ' + prop);
										var retorno = Reflect.apply(target[prop], target, arguments);
										acao(target);
										return retorno;
									};
								}

								return Reflect.get(target, prop, receiver);
							},
							set: function set(target, prop, value, receiver) {

								var retorno = Reflect.set(target, prop, value, receiver);

								if (props.includes(prop)) {
									console.log('interceptando ' + prop);
									acao(target);
								}

								return retorno;
							}
						});
					}
				}, {
					key: '_ehFuncao',
					value: function _ehFuncao(func) {
						return typeof func == 'function';
					}
				}]);

				return ProxyFactory;
			}());

			_export('ProxyFactory', ProxyFactory);
		}
	};
});
//# sourceMappingURL=ProxyFactory.js.map