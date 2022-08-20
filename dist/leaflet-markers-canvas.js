(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('core-js/modules/es.array.for-each.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/web.dom-collections.for-each.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.search.js'), require('core-js/modules/es.date.to-string.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.array.iterator.js'), require('core-js/modules/es.array-buffer.slice.js'), require('core-js/modules/es.typed-array.uint32-array.js'), require('core-js/modules/es.typed-array.copy-within.js'), require('core-js/modules/es.typed-array.every.js'), require('core-js/modules/es.typed-array.fill.js'), require('core-js/modules/es.typed-array.filter.js'), require('core-js/modules/es.typed-array.find.js'), require('core-js/modules/es.typed-array.find-index.js'), require('core-js/modules/es.typed-array.for-each.js'), require('core-js/modules/es.typed-array.includes.js'), require('core-js/modules/es.typed-array.index-of.js'), require('core-js/modules/es.typed-array.iterator.js'), require('core-js/modules/es.typed-array.join.js'), require('core-js/modules/es.typed-array.last-index-of.js'), require('core-js/modules/es.typed-array.map.js'), require('core-js/modules/es.typed-array.reduce.js'), require('core-js/modules/es.typed-array.reduce-right.js'), require('core-js/modules/es.typed-array.reverse.js'), require('core-js/modules/es.typed-array.set.js'), require('core-js/modules/es.typed-array.slice.js'), require('core-js/modules/es.typed-array.some.js'), require('core-js/modules/es.typed-array.sort.js'), require('core-js/modules/es.typed-array.subarray.js'), require('core-js/modules/es.typed-array.to-locale-string.js'), require('core-js/modules/es.typed-array.to-string.js'), require('leaflet'), require('rbush'), require('core-js/modules/es.promise.js'), require('core-js/modules/es.function.name.js'), require('core-js/modules/es.array.concat.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.for-each.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/web.dom-collections.for-each.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.search.js', 'core-js/modules/es.date.to-string.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.array.iterator.js', 'core-js/modules/es.array-buffer.slice.js', 'core-js/modules/es.typed-array.uint32-array.js', 'core-js/modules/es.typed-array.copy-within.js', 'core-js/modules/es.typed-array.every.js', 'core-js/modules/es.typed-array.fill.js', 'core-js/modules/es.typed-array.filter.js', 'core-js/modules/es.typed-array.find.js', 'core-js/modules/es.typed-array.find-index.js', 'core-js/modules/es.typed-array.for-each.js', 'core-js/modules/es.typed-array.includes.js', 'core-js/modules/es.typed-array.index-of.js', 'core-js/modules/es.typed-array.iterator.js', 'core-js/modules/es.typed-array.join.js', 'core-js/modules/es.typed-array.last-index-of.js', 'core-js/modules/es.typed-array.map.js', 'core-js/modules/es.typed-array.reduce.js', 'core-js/modules/es.typed-array.reduce-right.js', 'core-js/modules/es.typed-array.reverse.js', 'core-js/modules/es.typed-array.set.js', 'core-js/modules/es.typed-array.slice.js', 'core-js/modules/es.typed-array.some.js', 'core-js/modules/es.typed-array.sort.js', 'core-js/modules/es.typed-array.subarray.js', 'core-js/modules/es.typed-array.to-locale-string.js', 'core-js/modules/es.typed-array.to-string.js', 'leaflet', 'rbush', 'core-js/modules/es.promise.js', 'core-js/modules/es.function.name.js', 'core-js/modules/es.array.concat.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.L, global.RBush));
})(this, (function (es_array_forEach_js, es_object_toString_js, web_domCollections_forEach_js, es_regexp_exec_js, es_string_search_js, es_date_toString_js, es_regexp_toString_js, es_array_iterator_js, es_arrayBuffer_slice_js, es_typedArray_uint32Array_js, es_typedArray_copyWithin_js, es_typedArray_every_js, es_typedArray_fill_js, es_typedArray_filter_js, es_typedArray_find_js, es_typedArray_findIndex_js, es_typedArray_forEach_js, es_typedArray_includes_js, es_typedArray_indexOf_js, es_typedArray_iterator_js, es_typedArray_join_js, es_typedArray_lastIndexOf_js, es_typedArray_map_js, es_typedArray_reduce_js, es_typedArray_reduceRight_js, es_typedArray_reverse_js, es_typedArray_set_js, es_typedArray_slice_js, es_typedArray_some_js, es_typedArray_sort_js, es_typedArray_subarray_js, es_typedArray_toLocaleString_js, es_typedArray_toString_js, L, RBush) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var L__default = /*#__PURE__*/_interopDefaultLegacy(L);
  var RBush__default = /*#__PURE__*/_interopDefaultLegacy(RBush);

  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

    _regeneratorRuntime = function () {
      return exports;
    };

    var exports = {},
        Op = Object.prototype,
        hasOwn = Op.hasOwnProperty,
        $Symbol = "function" == typeof Symbol ? Symbol : {},
        iteratorSymbol = $Symbol.iterator || "@@iterator",
        asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
        toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }

    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
          generator = Object.create(protoGenerator.prototype),
          context = new Context(tryLocsList || []);
      return generator._invoke = function (innerFn, self, context) {
        var state = "suspendedStart";
        return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");

          if ("completed" === state) {
            if ("throw" === method) throw arg;
            return doneResult();
          }

          for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self, context);

            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
              return {
                value: record.arg,
                done: context.done
              };
            }

            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
    }

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    exports.wrap = wrap;
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
        NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if ("throw" !== record.type) {
          var result = record.arg,
              value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }

        reject(record.arg);
      }

      var previousPromise;

      this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (undefined === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

            return next.value = undefined, next.done = !0, next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }

    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (object) {
      var keys = [];

      for (var key in object) keys.push(key);

      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }

        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;

        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
              record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
                hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var inlineStyles = function inlineStyles(target) {
    var selfCopyCss = function selfCopyCss(elt) {
      var computed = window.getComputedStyle(elt);
      var css = {};

      for (var i = 0; i < computed.length; i++) {
        css[computed[i]] = computed.getPropertyValue(computed[i]);
      }

      for (var key in css) {
        elt.style[key] = css[key];
      }

      return css;
    };

    selfCopyCss(target);
    target.querySelectorAll('*').forEach(function (elt) {
      return selfCopyCss(elt);
    });
  }; // inline styles


  var copyToCanvas = function copyToCanvas(_ref) {
    var template = _ref.template,
        scale = _ref.scale,
        format = _ref.format,
        quality = _ref.quality;
    var svgData = new XMLSerializer().serializeToString(template);
    var canvas = document.createElement('canvas');
    var svgSize = template.getBoundingClientRect(); //Resize can break shadows

    canvas.width = svgSize.width * scale;
    canvas.height = svgSize.height * scale;
    canvas.style.width = svgSize.width;
    canvas.style.height = svgSize.height;
    var ctxt = canvas.getContext('2d');
    ctxt.scale(scale, scale);
    var img = document.createElement('img');
    img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData))));
    return new Promise(function (resolve) {
      img.onload = function () {
        ctxt.drawImage(img, 0, 0);
        var file = canvas.toDataURL("image/".concat(format), format = 'png', quality);
        resolve(file);
      };
    });
  };

  var downloadImage = function downloadImage(_ref2) {
    var file = _ref2.file,
        name = _ref2.name,
        format = _ref2.format;
    var a = document.createElement('a');
    a.className = "display-none";
    a.download = "".concat(name, ".").concat(format);
    a.href = file;
    document.body.appendChild(a);
    a.click();
  }; // module.exports 


  var convert = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(target, name) {
      var _ref4,
          _ref4$scale,
          scale,
          _ref4$format,
          format,
          _ref4$quality,
          quality,
          _ref4$download,
          download,
          template,
          _args = arguments;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref4 = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, _ref4$scale = _ref4.scale, scale = _ref4$scale === void 0 ? 1 : _ref4$scale, _ref4$format = _ref4.format, format = _ref4$format === void 0 ? 'png' : _ref4$format, _ref4$quality = _ref4.quality, quality = _ref4$quality === void 0 ? 0.92 : _ref4$quality, _ref4$download = _ref4.download, download = _ref4$download === void 0 ? true : _ref4$download;
              template = document.createElement('template');
              template.innerHTML = target; //Set all the css styles inline

              inlineStyles(template); //Copy all html to a new canvas

              _context.next = 6;
              return copyToCanvas({
                template: template,
                scale: scale,
                format: format,
                quality: quality
              }).then(function (file) {
                //Download if necessary
                if (download) downloadImage({
                  file: file,
                  name: name,
                  format: format
                });
                return file;
              })["catch"](console.error);

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function convert(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var markersCanvas = {
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // private: properties
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    _map: null,
    _canvas: null,
    _context: null,
    // leaflet markers (used to getBounds)
    _markers: [],
    // visible markers
    _markersTree: new RBush__default["default"](),
    // every marker positions (even out of the canvas)
    _positionsTree: new RBush__default["default"](),
    // icon images index
    _icons: {},
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // public: global
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    getBounds: function getBounds() {
      var bounds = new L__default["default"].LatLngBounds();

      this._markers.forEach(function (marker) {
        bounds.extend(marker.getLatLng());
      });

      return bounds;
    },
    redraw: function redraw() {
      this._redraw(true);
    },
    clear: function clear() {
      this._positionsTree = new RBush__default["default"]();
      this._markersTree = new RBush__default["default"]();
      this._markers = [];

      this._redraw(true);
    },
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // public: markers
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    addMarker: function addMarker(marker) {
      var _this$_addMarker = this._addMarker(marker),
          markerBox = _this$_addMarker.markerBox,
          positionBox = _this$_addMarker.positionBox,
          isVisible = _this$_addMarker.isVisible;

      if (markerBox && isVisible) {
        this._markersTree.insert(markerBox);
      }

      if (positionBox) {
        this._positionsTree.insert(positionBox);
      }
    },
    // add multiple markers (better for rBush performance)
    addMarkers: function addMarkers(markers) {
      var _this = this;

      var markerBoxes = [];
      var positionBoxes = [];
      markers.forEach(function (marker) {
        var _this$_addMarker2 = _this._addMarker(marker),
            markerBox = _this$_addMarker2.markerBox,
            positionBox = _this$_addMarker2.positionBox,
            isVisible = _this$_addMarker2.isVisible;

        if (markerBox && isVisible) {
          markerBoxes.push(markerBox);
        }

        if (positionBox) {
          positionBoxes.push(positionBox);
        }
      });

      this._markersTree.load(markerBoxes);

      this._positionsTree.load(positionBoxes);
    },
    removeMarker: function removeMarker(marker) {
      var latLng = marker.getLatLng();

      var isVisible = this._map.getBounds().contains(latLng);

      var positionBox = {
        minX: latLng.lng,
        minY: latLng.lat,
        maxX: latLng.lng,
        maxY: latLng.lat,
        marker: marker
      };

      this._positionsTree.remove(positionBox, function (a, b) {
        return a.marker._leaflet_id === b.marker._leaflet_id;
      });

      if (isVisible) {
        this._redraw(true);
      }
    },
    // remove multiple markers (better for rBush performance)
    removeMarkers: function removeMarkers(markers) {
      var _this2 = this;

      var hasChanged = false;
      markers.forEach(function (marker) {
        var latLng = marker.getLatLng();

        var isVisible = _this2._map.getBounds().contains(latLng);

        var positionBox = {
          minX: latLng.lng,
          minY: latLng.lat,
          maxX: latLng.lng,
          maxY: latLng.lat,
          marker: marker
        };

        _this2._positionsTree.remove(positionBox, function (a, b) {
          return a.marker._leaflet_id === b.marker._leaflet_id;
        });

        if (isVisible) {
          hasChanged = true;
        }
      });

      if (hasChanged) {
        this._redraw(true);
      }
    },
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // leaflet: default methods
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    initialize: function initialize(options) {
      L__default["default"].Util.setOptions(this, options);
    },
    // called by Leaflet on `map.addLayer`
    onAdd: function onAdd(map) {
      this._map = map;

      this._initCanvas();

      this.getPane().appendChild(this._canvas);
      map.on("moveend", this._reset, this);
      map.on("resize", this._reset, this);
      map.on("click", this._fire, this);
      map.on("mousemove", this._fire, this);

      if (map._zoomAnimated) {
        map.on("zoomanim", this._animateZoom, this);
      }
    },
    // called by Leaflet
    onRemove: function onRemove(map) {
      this.getPane().removeChild(this._canvas);
      map.off("click", this._fire, this);
      map.off("mousemove", this._fire, this);
      map.off("moveend", this._reset, this);
      map.off("resize", this._reset, this);

      if (map._zoomAnimated) {
        map.off("zoomanim", this._animateZoom, this);
      }
    },
    setOptions: function setOptions(options) {
      L__default["default"].Util.setOptions(this, options);
      return this.redraw();
    },
    registerImage: function registerImage(hash, image) {
      this._icons[hash] = {
        image: image,
        isLoaded: true
      };
    },
    convert: function convert$1(target, name, params) {
      return convert(target, name, params);
    },
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // private: global methods
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    _initCanvas: function _initCanvas() {
      var _this$_map$getSize = this._map.getSize(),
          x = _this$_map$getSize.x,
          y = _this$_map$getSize.y;

      var isAnimated = this._map.options.zoomAnimation && L__default["default"].Browser.any3d;
      this._canvas = L__default["default"].DomUtil.create("canvas", "leaflet-markers-canvas-layer leaflet-layer");
      this._canvas.width = x;
      this._canvas.height = y;
      this._context = this._canvas.getContext("2d");
      L__default["default"].DomUtil.addClass(this._canvas, "leaflet-zoom-".concat(isAnimated ? "animated" : "hide"));
    },
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // private: marker methods
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    _addMarker: function _addMarker(marker) {
      if (marker.options.pane !== "markerPane" || !marker.options.icon) {
        console.error("This is not a marker", marker);
        return {
          markerBox: null,
          positionBox: null,
          isVisible: null
        };
      } // required for pop-up and tooltip


      marker._map = this._map; // add _leaflet_id property

      L__default["default"].Util.stamp(marker);
      var latLng = marker.getLatLng();

      var isVisible = this._map.getBounds().contains(latLng);

      var _this$_map$latLngToCo = this._map.latLngToContainerPoint(latLng),
          x = _this$_map$latLngToCo.x,
          y = _this$_map$latLngToCo.y;

      var _marker$options$icon$ = marker.options.icon.options,
          iconSize = _marker$options$icon$.iconSize,
          iconAnchor = _marker$options$icon$.iconAnchor;
      var markerBox = {
        minX: x - iconAnchor[0],
        minY: y - iconAnchor[1],
        maxX: x + iconSize[0] - iconAnchor[0],
        maxY: y + iconSize[1] - iconAnchor[1],
        marker: marker
      };
      var positionBox = {
        minX: latLng.lng,
        minY: latLng.lat,
        maxX: latLng.lng,
        maxY: latLng.lat,
        marker: marker
      };

      if (isVisible) {
        this._drawMarker(marker, {
          x: x,
          y: y
        });
      }

      this._markers.push(marker);

      return {
        markerBox: markerBox,
        positionBox: positionBox,
        isVisible: isVisible
      };
    },
    _drawMarker: function _drawMarker(marker, _ref) {
      var _this3 = this;

      var x = _ref.x,
          y = _ref.y;
      var _marker$options$icon$2 = marker.options.icon.options,
          iconUrl = _marker$options$icon$2.iconUrl,
          html = _marker$options$icon$2.html;
          _marker$options$icon$2.iconAnchor;
          _marker$options$icon$2.iconSize;
      var hash = undefined;

      if (html) {
        hash = this.hash(html);
      }

      if (marker.image) {
        this._drawImage(marker, {
          x: x,
          y: y
        });
      } else if (iconUrl) {
        if (this._icons[iconUrl]) {
          marker.image = this._icons[iconUrl].image;

          if (this._icons[iconUrl].isLoaded) {
            this._drawImage(marker, {
              x: x,
              y: y
            });
          } else {
            this._icons[iconUrl].elements.push({
              marker: marker,
              x: x,
              y: y
            });
          }
        } else {
          var image = new Image();
          image.src = iconUrl;
          marker.image = image;
          this._icons[iconUrl] = {
            image: image,
            isLoaded: false,
            elements: [{
              marker: marker,
              x: x,
              y: y
            }]
          };

          image.onload = function () {
            _this3._icons[iconUrl].isLoaded = true;

            _this3._icons[iconUrl].elements.forEach(function (_ref2) {
              var marker = _ref2.marker,
                  x = _ref2.x,
                  y = _ref2.y;

              _this3._drawImage(marker, {
                x: x,
                y: y
              });
            });
          };
        }
      } else if (hash) {
        if (this._icons[hash]) {
          marker.image = this._icons[iconUrl].image;

          if (this._icons[hash].isLoaded) {
            this._drawImage(marker, {
              x: x,
              y: y
            });
          } else {
            this._icons[hash].elements.push({
              marker: marker,
              x: x,
              y: y
            });
          }
        } else {
          convert(html);
        }
      }
    },
    _drawImage: function _drawImage(marker, _ref3) {
      var x = _ref3.x,
          y = _ref3.y;
      var _marker$options$icon$3 = marker.options.icon.options,
          rotationAngle = _marker$options$icon$3.rotationAngle,
          iconAnchor = _marker$options$icon$3.iconAnchor,
          iconSize = _marker$options$icon$3.iconSize;
      var angle = rotationAngle || 0;

      this._context.save();

      this._context.translate(x, y);

      this._context.rotate(angle * Math.PI / 180);

      this._context.drawImage(marker.image, -iconAnchor[0], -iconAnchor[1], iconSize[0], iconSize[1]);

      this._context.restore();
    },
    _redraw: function _redraw(clear) {
      var _this4 = this;

      if (clear) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
      }

      if (!this._map || !this._positionsTree) return;

      var mapBounds = this._map.getBounds();

      var mapBoundsBox = {
        minX: mapBounds.getWest(),
        minY: mapBounds.getSouth(),
        maxX: mapBounds.getEast(),
        maxY: mapBounds.getNorth()
      }; // draw only visible markers

      var markers = [];

      this._positionsTree.search(mapBoundsBox).forEach(function (_ref4) {
        var marker = _ref4.marker;
        var latLng = marker.getLatLng();

        var _this4$_map$latLngToC = _this4._map.latLngToContainerPoint(latLng),
            x = _this4$_map$latLngToC.x,
            y = _this4$_map$latLngToC.y;

        var _marker$options$icon$4 = marker.options.icon.options,
            iconSize = _marker$options$icon$4.iconSize,
            iconAnchor = _marker$options$icon$4.iconAnchor;
        var markerBox = {
          minX: x - iconAnchor[0],
          minY: y - iconAnchor[1],
          maxX: x + iconSize[0] - iconAnchor[0],
          maxY: y + iconSize[1] - iconAnchor[1],
          marker: marker
        };
        markers.push(markerBox);

        _this4._drawMarker(marker, {
          x: x,
          y: y
        });
      });

      this._markersTree.clear();

      this._markersTree.load(markers);
    },
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    // private: event methods
    //
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    _reset: function _reset() {
      var topLeft = this._map.containerPointToLayerPoint([0, 0]);

      L__default["default"].DomUtil.setPosition(this._canvas, topLeft);

      var _this$_map$getSize2 = this._map.getSize(),
          x = _this$_map$getSize2.x,
          y = _this$_map$getSize2.y;

      this._canvas.width = x;
      this._canvas.height = y;

      this._redraw();
    },
    _fire: function _fire(event) {
      if (!this._markersTree) return;
      var _event$containerPoint = event.containerPoint,
          x = _event$containerPoint.x,
          y = _event$containerPoint.y;

      var markers = this._markersTree.search({
        minX: x,
        minY: y,
        maxX: x,
        maxY: y
      });

      if (markers && markers.length) {
        this._map._container.style.cursor = "pointer";
        var marker = markers[0].marker;

        if (event.type === "click") {
          if (marker.listens("click")) {
            marker.fire("click");
          }
        }

        if (event.type === "mousemove") {
          if (this._mouseOverMarker && this._mouseOverMarker !== marker) {
            if (this._mouseOverMarker.listens("mouseout")) {
              this._mouseOverMarker.fire("mouseout");
            }
          }

          if (!this._mouseOverMarker || this._mouseOverMarker !== marker) {
            this._mouseOverMarker = marker;

            if (marker.listens("mouseover")) {
              marker.fire("mouseover");
            }
          }
        }
      } else {
        this._map._container.style.cursor = "";

        if (event.type === "mousemove" && this._mouseOverMarker) {
          if (this._mouseOverMarker.listens("mouseout")) {
            this._mouseOverMarker.fire("mouseout");
          }

          delete this._mouseOverMarker;
        }
      }
    },
    _animateZoom: function _animateZoom(event) {
      var scale = this._map.getZoomScale(event.zoom);

      var offset = this._map._latLngBoundsToNewLayerBounds(this._map.getBounds(), event.zoom, event.center).min;

      L__default["default"].DomUtil.setTransform(this._canvas, offset, scale);
    },
    hash: function hash(str) {
      var hash = 0;

      for (var i = 0; i < str.length; i++) {
        var _char = str.charCodeAt(i);

        hash = (hash << 5) - hash + _char;
        hash &= hash; // Convert to 32bit integer
      }

      return new Uint32Array([hash])[0].toString(36);
    }
  };
  L__default["default"].MarkersCanvas = L__default["default"].Layer.extend(markersCanvas);

}));
