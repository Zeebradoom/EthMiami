// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"13c4p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
var _tatum = require("@tatumio/tatum");
const button = document.getElementById("get-balance");
const addressInput = document.getElementById("address");
const balanceDiv = document.getElementById("balance");
const celoInfo = document.getElementById("celo-info");
button.addEventListener("click", async ()=>{
    const tatum = await (0, _tatum.TatumSDK).init({
        network: (0, _tatum.Network).CELO_ALFAJORES
    });
    const balance = await tatum.address.getBalance({
        addresses: [
            addressInput.value
        ]
    });
    //   const balanceData = balance.data.filter((asset) => asset.asset === "CELO")[0];
    //   balanceDiv.textContent = `${balanceData.balance} ${balanceData.asset}`;
    balanceDiv.textContent = `${balance.data[0].balance} ${balance.data[0].asset}`;
    const fee = await tatum.blockchain.getEstimatedFee("CELO_TRANSFER", {
        network: (0, _tatum.Network).CELO_ALFAJORES
    });
    const recentBlock = await tatum.blockchain.getBlock("latest", {
        network: (0, _tatum.Network).CELO_ALFAJORES
    });
    celoInfo.textContent = `Fee: ${fee.data.fee} ${fee.data.currency} | Block: ${recentBlock.data.hash}`;
});
if (typeof window.ethereum !== "undefined" || typeof window.web3 !== "undefined") {
    const web3 = new Web3(window.ethereum || window.web3.currentProvider);
    try {
        await window.ethereum.enable();
    } catch (error) {
        console.error("User denied account access");
    }
} else console.log("Metamask not installed");

},{"@tatumio/tatum":"gaz18"}],"gaz18":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("5c9eb329f35046bc");
__exportStar(require("532f05cd748d662e"), exports);

},{"5c9eb329f35046bc":"9OgtA","532f05cd748d662e":"kF32f"}],"9OgtA":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var global = arguments[3];
var process = require("9eefae1e780386e5");
var Reflect;
(function(Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") root.Reflect = Reflect;
        else exporter = makeExporter(root.Reflect, exporter);
        factory(exporter);
        function makeExporter(target, previous) {
            return function(key, value) {
                if (typeof target[key] !== "function") Object.defineProperty(target, key, {
                    configurable: true,
                    writable: true,
                    value: value
                });
                if (previous) previous(key, value);
            };
        }
    })(function(exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = ({
            __proto__: []
        }) instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function() {
                return MakeDictionary(Object.create(null));
            } : supportsProto ? function() {
                return MakeDictionary({
                    __proto__: null
                });
            } : function() {
                return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
                return hasOwn.call(map, key);
            } : function(map, key) {
                return key in map;
            },
            get: downLevel ? function(map, key) {
                return hasOwn.call(map, key) ? map[key] : undefined;
            } : function(map, key) {
                return map[key];
            }
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && false;
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */ function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators)) throw new TypeError();
                if (!IsObject(target)) throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
                if (IsNull(attributes)) attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
                if (!IsArray(decorators)) throw new TypeError();
                if (!IsConstructor(target)) throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */ function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */ function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */ function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */ function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */ function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target)) throw new TypeError();
            if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap)) return false;
            if (!metadataMap.delete(metadataKey)) return false;
            if (metadataMap.size > 0) return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0) return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for(var i = decorators.length - 1; i >= 0; --i){
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated)) throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for(var i = decorators.length - 1; i >= 0; --i){
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated)) throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create) return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create) return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap)) return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap)) return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null) return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0) return ownKeys;
            if (ownKeys.length <= 0) return parentKeys;
            var set = new _Set();
            var keys = [];
            for(var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++){
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for(var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++){
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap)) return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while(true){
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                } catch (e) {
                    try {
                        IteratorClose(iterator);
                    } finally{
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null) return 1 /* Null */ ;
            switch(typeof x){
                case "undefined":
                    return 0 /* Undefined */ ;
                case "boolean":
                    return 2 /* Boolean */ ;
                case "string":
                    return 3 /* String */ ;
                case "symbol":
                    return 4 /* Symbol */ ;
                case "number":
                    return 5 /* Number */ ;
                case "object":
                    return x === null ? 1 /* Null */  : 6 /* Object */ ;
                default:
                    return 6 /* Object */ ;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch(Type(input)){
                case 0 /* Undefined */ :
                    return input;
                case 1 /* Null */ :
                    return input;
                case 2 /* Boolean */ :
                    return input;
                case 3 /* String */ :
                    return input;
                case 4 /* Symbol */ :
                    return input;
                case 5 /* Number */ :
                    return input;
            }
            var hint = PreferredType === 3 /* String */  ? "string" : PreferredType === 5 /* Number */  ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result)) throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result)) return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result)) return result;
                }
            } else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result)) return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result)) return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */ );
            if (IsSymbol(key)) return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch(Type(argument)){
                case 3 /* String */ :
                    return true;
                case 4 /* Symbol */ :
                    return true;
                default:
                    return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null) return undefined;
            if (!IsCallable(func)) throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method)) throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator)) throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f) f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype) return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype) return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function") return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O) return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ function() {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function() {
                    return this;
                };
                MapIterator.prototype[iteratorSymbol] = function() {
                    return this;
                };
                MapIterator.prototype.next = function() {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        } else this._index++;
                        return {
                            value: result,
                            done: false
                        };
                    }
                    return {
                        value: undefined,
                        done: true
                    };
                };
                MapIterator.prototype.throw = function(error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function(value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return {
                        value: value,
                        done: true
                    };
                };
                return MapIterator;
            }();
            return /** @class */ function() {
                function Map1() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map1.prototype, "size", {
                    get: function() {
                        return this._keys.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Map1.prototype.has = function(key) {
                    return this._find(key, /*insert*/ false) >= 0;
                };
                Map1.prototype.get = function(key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map1.prototype.set = function(key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map1.prototype.delete = function(key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for(var i = index + 1; i < size; i++){
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map1.prototype.clear = function() {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map1.prototype.keys = function() {
                    return new MapIterator(this._keys, this._values, getKey);
                };
                Map1.prototype.values = function() {
                    return new MapIterator(this._keys, this._values, getValue);
                };
                Map1.prototype.entries = function() {
                    return new MapIterator(this._keys, this._values, getEntry);
                };
                Map1.prototype["@@iterator"] = function() {
                    return this.entries();
                };
                Map1.prototype[iteratorSymbol] = function() {
                    return this.entries();
                };
                Map1.prototype._find = function(key, insert) {
                    if (this._cacheKey !== key) this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map1;
            }();
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [
                    key,
                    value
                ];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ function() {
                function Set1() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set1.prototype, "size", {
                    get: function() {
                        return this._map.size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Set1.prototype.has = function(value) {
                    return this._map.has(value);
                };
                Set1.prototype.add = function(value) {
                    return this._map.set(value, value), this;
                };
                Set1.prototype.delete = function(value) {
                    return this._map.delete(value);
                };
                Set1.prototype.clear = function() {
                    this._map.clear();
                };
                Set1.prototype.keys = function() {
                    return this._map.keys();
                };
                Set1.prototype.values = function() {
                    return this._map.values();
                };
                Set1.prototype.entries = function() {
                    return this._map.entries();
                };
                Set1.prototype["@@iterator"] = function() {
                    return this.keys();
                };
                Set1.prototype[iteratorSymbol] = function() {
                    return this.keys();
                };
                return Set1;
            }();
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ function() {
                function WeakMap1() {
                    this._key = CreateUniqueKey();
                }
                WeakMap1.prototype.has = function(target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap1.prototype.get = function(target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap1.prototype.set = function(target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap1.prototype.delete = function(target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap1.prototype.clear = function() {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap1;
            }();
            function CreateUniqueKey() {
                var key;
                do key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create) return undefined;
                    Object.defineProperty(target, rootKey, {
                        value: HashMap.create()
                    });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for(var i = 0; i < size; ++i)buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for(var offset = 0; offset < UUID_SIZE; ++offset){
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8) result += "-";
                    if (byte < 16) result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

},{"9eefae1e780386e5":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"kF32f":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("cfdf1e529483a8ae"), exports);
__exportStar(require("a54e50ef3935d39"), exports);
__exportStar(require("4f74072f7f6ad73b"), exports);
__exportStar(require("8541644131d290c0"), exports);

},{"cfdf1e529483a8ae":"53XPA","a54e50ef3935d39":"lqU6b","4f74072f7f6ad73b":"cgKVk","8541644131d290c0":"luFgs"}],"53XPA":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("902783849b023354"), exports);
__exportStar(require("aec97c616e94aad2"), exports);

},{"902783849b023354":"833Ok","aec97c616e94aad2":"brrBq"}],"833Ok":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"brrBq":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TatumConnector_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumConnector = void 0;
const typedi_1 = require("a4e8aebcfa9aeb45");
const service_1 = require("d444a2d5e8d4a9d9");
const util_1 = require("3a993f9077dfc0f7");
let TatumConnector = TatumConnector_1 = class TatumConnector {
    constructor(id){
        this.id = id;
    }
    async get(request) {
        return this.request({
            ...request,
            method: "GET"
        });
    }
    async rpcCall(url, body) {
        return this.request({
            body,
            method: "POST"
        }, 0, url);
    }
    async post(request) {
        return this.request({
            ...request,
            method: "POST"
        });
    }
    async delete(request) {
        return this.request({
            ...request,
            method: "DELETE"
        });
    }
    async uploadFile(request) {
        const formData = new FormData();
        formData.append("file", new Blob([
            request.body
        ]));
        return this.request({
            ...request,
            method: "POST",
            body: formData,
            basePath: util_1.Constant.TATUM_API_URL.V3
        }, 0);
    }
    async getFile(request) {
        return this.request({
            ...request,
            method: "GET",
            isDownload: true
        });
    }
    async request({ path, params, body, method, basePath, isDownload }, retry = 0, externalUrl) {
        const url = externalUrl || this.getUrl({
            path,
            params,
            basePath
        });
        const isUpload = body && body instanceof FormData;
        const headers = isUpload ? util_1.Utils.getBasicHeaders(this.id) : util_1.Utils.getHeaders(this.id);
        let requestBody = null;
        if (isUpload) requestBody = body;
        else if (body) requestBody = JSON.stringify(body);
        const request = {
            headers: headers,
            method,
            body: requestBody
        };
        const start = Date.now();
        try {
            const res = await fetch(url, request);
            const end = Date.now() - start;
            const responseBody = isDownload ? `Binary data` : await res.clone().text();
            // Structure your log entry here
            util_1.Utils.log({
                id: this.id,
                message: `[${request.method}] ${url} -> ${res.status} (${end}ms)`,
                data: {
                    request: {
                        method: request.method,
                        url: url,
                        body: request.body
                    },
                    response: {
                        status: res.status,
                        time: `${end}ms`,
                        body: responseBody
                    },
                    headers: util_1.Utils.headersToJson(headers)
                }
            });
            if (res.ok) {
                if (!responseBody) return undefined;
                if (isDownload) return await res.blob();
                return await res.json();
            }
            // Retry only in case of 5xx error
            if (res.status >= 500 && res.status < 600) return await this.retry(url, request, res, retry);
            throw responseBody;
        } catch (error) {
            const end = Date.now() - start;
            util_1.Utils.log({
                id: this.id,
                message: `[${request.method}] ${url} -> (${end}ms)`,
                data: {
                    request: {
                        method: request.method,
                        url: url,
                        body: request.body
                    },
                    error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
                    time: `${end}ms`,
                    headers: util_1.Utils.headersToJson(headers)
                }
            });
            return Promise.reject(error);
        }
    }
    getUrl({ path, params, basePath }) {
        const config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        const url = new URL(path || "", basePath || (config.version === service_1.ApiVersion.V3 ? util_1.Constant.TATUM_API_URL.V3 : util_1.Constant.TATUM_API_URL.V4));
        if (params) Object.keys(params).filter((key)=>!!params[key]).forEach((key)=>url.searchParams.append(key, `${params[key]}`));
        if (!Object.keys(config.apiKey || {})?.length && util_1.Constant.RPC.TESTNETS.includes(config.network)) url.searchParams.append("type", "testnet");
        return url.toString();
    }
    async retry(url, request, response, retry) {
        const { retryDelay, retryCount } = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        if (!retryCount) {
            util_1.Utils.log({
                id: this.id,
                message: `Not retrying the request - no max retry count defined`,
                data: {
                    url,
                    requestBody: request.body
                }
            });
            return Promise.reject(await response.text());
        }
        if (retry >= retryCount) {
            util_1.Utils.log({
                id: this.id,
                message: `Not retrying the request for the '${retry}' time - exceeded max retry count ${retryCount}: `,
                data: {
                    url,
                    requestBody: request.body
                }
            });
            return Promise.reject(await response.text());
        }
        retry++;
        await util_1.Utils.delay(retryDelay || 1000);
        util_1.Utils.log({
            id: this.id,
            message: `Retrying the request for the '${retry}' time: `,
            data: {
                url,
                requestBody: request.body
            }
        });
        return this.request({
            method: request.method,
            body: request.body ? JSON.parse(request.body) : null
        }, retry, url);
    }
};
TatumConnector = TatumConnector_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new TatumConnector_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], TatumConnector);
exports.TatumConnector = TatumConnector;

},{"a4e8aebcfa9aeb45":"lKbmC","d444a2d5e8d4a9d9":"cgKVk","3a993f9077dfc0f7":"luFgs"}],"lKbmC":[function(require,module,exports) {
/**
 * We have a hard dependency on reflect-metadata package.
 * Without the dependency lookup wont work. So we should warn the users
 * when it's not loaded.
 */ // if(!Reflect || !(Reflect as any).getMetadata) {
//   throw new Error('Reflect.getMetadata is not a function. Please import the "reflect-metadata" package at the first line of your application.');
// }
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContainerInstance", ()=>(0, _containerInstanceClass.ContainerInstance));
parcelHelpers.export(exports, "Container", ()=>(0, _containerClass.Container));
parcelHelpers.export(exports, "Token", ()=>(0, _tokenClass.Token));
var _containerClass = require("./container.class");
var _injectManyDecorator = require("./decorators/inject-many.decorator");
parcelHelpers.exportAll(_injectManyDecorator, exports);
var _injectDecorator = require("./decorators/inject.decorator");
parcelHelpers.exportAll(_injectDecorator, exports);
var _serviceDecorator = require("./decorators/service.decorator");
parcelHelpers.exportAll(_serviceDecorator, exports);
var _cannotInjectValueError = require("./error/cannot-inject-value.error");
parcelHelpers.exportAll(_cannotInjectValueError, exports);
var _cannotInstantiateValueError = require("./error/cannot-instantiate-value.error");
parcelHelpers.exportAll(_cannotInstantiateValueError, exports);
var _serviceNotFoundError = require("./error/service-not-found.error");
parcelHelpers.exportAll(_serviceNotFoundError, exports);
var _containerInstanceClass = require("./container-instance.class");
var _tokenClass = require("./token.class");
exports.default = (0, _containerClass.Container);

},{"./container.class":"9OWLZ","./decorators/inject-many.decorator":"i1Liu","./decorators/inject.decorator":"9hexb","./decorators/service.decorator":"8T3Nc","./error/cannot-inject-value.error":"hiTxZ","./error/cannot-instantiate-value.error":"akUOw","./error/service-not-found.error":"1nE8P","./container-instance.class":"j1qSX","./token.class":"dYStI","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"9OWLZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
var _containerInstanceClass = require("./container-instance.class");
/**
 * Service container.
 */ var Container = /** @class */ function() {
    function Container() {}
    /**
     * Gets a separate container instance for the given instance id.
     */ Container.of = function(containerId) {
        if (containerId === void 0) containerId = "default";
        if (containerId === "default") return this.globalInstance;
        var container = this.instances.find(function(instance) {
            return instance.id === containerId;
        });
        if (!container) {
            container = new (0, _containerInstanceClass.ContainerInstance)(containerId);
            this.instances.push(container);
        // TODO: Why we are not reseting here? Let's reset here. (I have added the commented code.)
        // container.reset();
        }
        return container;
    };
    Container.has = function(identifier) {
        return this.globalInstance.has(identifier);
    };
    Container.get = function(identifier) {
        return this.globalInstance.get(identifier);
    };
    Container.getMany = function(id) {
        return this.globalInstance.getMany(id);
    };
    Container.set = function(identifierOrServiceMetadata, value) {
        this.globalInstance.set(identifierOrServiceMetadata, value);
        return this;
    };
    /**
     * Removes services with a given service identifiers.
     */ Container.remove = function(identifierOrIdentifierArray) {
        this.globalInstance.remove(identifierOrIdentifierArray);
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services and handlers from it.
     */ Container.reset = function(containerId) {
        if (containerId === void 0) containerId = "default";
        if (containerId == "default") {
            this.globalInstance.reset();
            this.instances.forEach(function(instance) {
                return instance.reset();
            });
        } else {
            var instance = this.instances.find(function(instance) {
                return instance.id === containerId;
            });
            if (instance) {
                instance.reset();
                this.instances.splice(this.instances.indexOf(instance), 1);
            }
        }
        return this;
    };
    /**
     * Registers a new handler.
     */ Container.registerHandler = function(handler) {
        this.handlers.push(handler);
        return this;
    };
    /**
     * Helper method that imports given services.
     */ /* eslint-disable-next-line @typescript-eslint/no-unused-vars */ Container.import = function(services) {
        return this;
    };
    /**
     * All registered handlers. The @Inject() decorator uses handlers internally to mark a property for injection.
     **/ Container.handlers = [];
    /**  Global container instance. */ Container.globalInstance = new (0, _containerInstanceClass.ContainerInstance)("default");
    /** Other containers created using Container.of method. */ Container.instances = [];
    return Container;
}();

},{"./container-instance.class":"j1qSX","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"j1qSX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContainerInstance", ()=>ContainerInstance);
var _containerClass = require("./container.class");
var _serviceNotFoundError = require("./error/service-not-found.error");
var _cannotInstantiateValueError = require("./error/cannot-instantiate-value.error");
var _tokenClass = require("./token.class");
var _emptyConst = require("./empty.const");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = undefined && undefined.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
/**
 * TypeDI can have multiple containers.
 * One container is ContainerInstance.
 */ var ContainerInstance = /** @class */ function() {
    function ContainerInstance(id) {
        /** All registered services in the container. */ this.services = [];
        this.id = id;
    }
    ContainerInstance.prototype.has = function(identifier) {
        return !!this.findService(identifier);
    };
    ContainerInstance.prototype.get = function(identifier) {
        var globalContainer = (0, _containerClass.Container).of(undefined);
        var globalService = globalContainer.findService(identifier);
        var scopedService = this.findService(identifier);
        if (globalService && globalService.global === true) return this.getServiceValue(globalService);
        if (scopedService) return this.getServiceValue(scopedService);
        /** If it's the first time requested in the child container we load it from parent and set it. */ if (globalService && this !== globalContainer) {
            var clonedService = __assign({}, globalService);
            clonedService.value = (0, _emptyConst.EMPTY_VALUE);
            /**
             * We need to immediately set the empty value from the root container
             * to prevent infinite lookup in cyclic dependencies.
             */ this.set(clonedService);
            var value = this.getServiceValue(clonedService);
            this.set(__assign(__assign({}, clonedService), {
                value: value
            }));
            return value;
        }
        if (globalService) return this.getServiceValue(globalService);
        throw new (0, _serviceNotFoundError.ServiceNotFoundError)(identifier);
    };
    ContainerInstance.prototype.getMany = function(identifier) {
        var _this = this;
        return this.findAllServices(identifier).map(function(service) {
            return _this.getServiceValue(service);
        });
    };
    ContainerInstance.prototype.set = function(identifierOrServiceMetadata, value) {
        var _this = this;
        if (identifierOrServiceMetadata instanceof Array) {
            identifierOrServiceMetadata.forEach(function(data) {
                return _this.set(data);
            });
            return this;
        }
        if (typeof identifierOrServiceMetadata === "string" || identifierOrServiceMetadata instanceof (0, _tokenClass.Token)) return this.set({
            id: identifierOrServiceMetadata,
            type: null,
            value: value,
            factory: undefined,
            global: false,
            multiple: false,
            eager: false,
            transient: false
        });
        if (typeof identifierOrServiceMetadata === "function") return this.set({
            id: identifierOrServiceMetadata,
            // TODO: remove explicit casting
            type: identifierOrServiceMetadata,
            value: value,
            factory: undefined,
            global: false,
            multiple: false,
            eager: false,
            transient: false
        });
        var newService = __assign({
            id: new (0, _tokenClass.Token)("UNREACHABLE"),
            type: null,
            factory: undefined,
            value: (0, _emptyConst.EMPTY_VALUE),
            global: false,
            multiple: false,
            eager: false,
            transient: false
        }, identifierOrServiceMetadata);
        var service = this.findService(newService.id);
        if (service && service.multiple !== true) Object.assign(service, newService);
        else this.services.push(newService);
        if (newService.eager) this.get(newService.id);
        return this;
    };
    /**
     * Removes services with a given service identifiers.
     */ ContainerInstance.prototype.remove = function(identifierOrIdentifierArray) {
        var _this = this;
        if (Array.isArray(identifierOrIdentifierArray)) identifierOrIdentifierArray.forEach(function(id) {
            return _this.remove(id);
        });
        else this.services = this.services.filter(function(service) {
            if (service.id === identifierOrIdentifierArray) {
                _this.destroyServiceInstance(service);
                return false;
            }
            return true;
        });
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services from it.
     */ ContainerInstance.prototype.reset = function(options) {
        var _this = this;
        if (options === void 0) options = {
            strategy: "resetValue"
        };
        switch(options.strategy){
            case "resetValue":
                this.services.forEach(function(service) {
                    return _this.destroyServiceInstance(service);
                });
                break;
            case "resetServices":
                this.services.forEach(function(service) {
                    return _this.destroyServiceInstance(service);
                });
                this.services = [];
                break;
            default:
                throw new Error("Received invalid reset strategy.");
        }
        return this;
    };
    /**
     * Returns all services registered with the given identifier.
     */ ContainerInstance.prototype.findAllServices = function(identifier) {
        return this.services.filter(function(service) {
            return service.id === identifier;
        });
    };
    /**
     * Finds registered service in the with a given service identifier.
     */ ContainerInstance.prototype.findService = function(identifier) {
        return this.services.find(function(service) {
            return service.id === identifier;
        });
    };
    /**
     * Gets the value belonging to `serviceMetadata.id`.
     *
     * - if `serviceMetadata.value` is already set it is immediately returned
     * - otherwise the requested type is resolved to the value saved to `serviceMetadata.value` and returned
     */ ContainerInstance.prototype.getServiceValue = function(serviceMetadata) {
        var _a;
        var value = (0, _emptyConst.EMPTY_VALUE);
        /**
         * If the service value has been set to anything prior to this call we return that value.
         * NOTE: This part builds on the assumption that transient dependencies has no value set ever.
         */ if (serviceMetadata.value !== (0, _emptyConst.EMPTY_VALUE)) return serviceMetadata.value;
        /** If both factory and type is missing, we cannot resolve the requested ID. */ if (!serviceMetadata.factory && !serviceMetadata.type) throw new (0, _cannotInstantiateValueError.CannotInstantiateValueError)(serviceMetadata.id);
        /**
         * If a factory is defined it takes priority over creating an instance via `new`.
         * The return value of the factory is not checked, we believe by design that the user knows what he/she is doing.
         */ if (serviceMetadata.factory) {
            /**
             * If we received the factory in the [Constructable<Factory>, "functionName"] format, we need to create the
             * factory first and then call the specified function on it.
             */ if (serviceMetadata.factory instanceof Array) {
                var factoryInstance = void 0;
                try {
                    /** Try to get the factory from TypeDI first, if failed, fall back to simply initiating the class. */ factoryInstance = this.get(serviceMetadata.factory[0]);
                } catch (error) {
                    if (error instanceof (0, _serviceNotFoundError.ServiceNotFoundError)) factoryInstance = new serviceMetadata.factory[0]();
                    else throw error;
                }
                value = factoryInstance[serviceMetadata.factory[1]](this, serviceMetadata.id);
            } else /** If only a simple function was provided we simply call it. */ value = serviceMetadata.factory(this, serviceMetadata.id);
        }
        /**
         * If no factory was provided and only then, we create the instance from the type if it was set.
         */ if (!serviceMetadata.factory && serviceMetadata.type) {
            var constructableTargetType = serviceMetadata.type;
            // setup constructor parameters for a newly initialized service
            var paramTypes = ((_a = Reflect) === null || _a === void 0 ? void 0 : _a.getMetadata("design:paramtypes", constructableTargetType)) || [];
            var params = this.initializeParams(constructableTargetType, paramTypes);
            // "extra feature" - always pass container instance as the last argument to the service function
            // this allows us to support javascript where we don't have decorators and emitted metadata about dependencies
            // need to be injected, and user can use provided container to get instances he needs
            params.push(this);
            value = new (constructableTargetType.bind.apply(constructableTargetType, __spreadArrays([
                void 0
            ], params)))();
        // TODO: Calling this here, leads to infinite loop, because @Inject decorator registerds a handler
        // TODO: which calls Container.get, which will check if the requested type has a value set and if not
        // TODO: it will start the instantiation process over. So this is currently called outside of the if branch
        // TODO: after the current value has been assigned to the serviceMetadata.
        // this.applyPropertyHandlers(constructableTargetType, value as Constructable<unknown>);
        }
        /** If this is not a transient service, and we resolved something, then we set it as the value. */ if (!serviceMetadata.transient && value !== (0, _emptyConst.EMPTY_VALUE)) serviceMetadata.value = value;
        if (value === (0, _emptyConst.EMPTY_VALUE)) /** This branch should never execute, but better to be safe than sorry. */ throw new (0, _cannotInstantiateValueError.CannotInstantiateValueError)(serviceMetadata.id);
        if (serviceMetadata.type) this.applyPropertyHandlers(serviceMetadata.type, value);
        return value;
    };
    /**
     * Initializes all parameter types for a given target service class.
     */ ContainerInstance.prototype.initializeParams = function(target, paramTypes) {
        var _this = this;
        return paramTypes.map(function(paramType, index) {
            var paramHandler = (0, _containerClass.Container).handlers.find(function(handler) {
                /**
                 * @Inject()-ed values are stored as parameter handlers and they reference their target
                 * when created. So when a class is extended the @Inject()-ed values are not inherited
                 * because the handler still points to the old object only.
                 *
                 * As a quick fix a single level parent lookup is added via `Object.getPrototypeOf(target)`,
                 * however this should be updated to a more robust solution.
                 *
                 * TODO: Add proper inheritance handling: either copy the handlers when a class is registered what
                 * TODO: has it's parent already registered as dependency or make the lookup search up to the base Object.
                 */ return (handler.object === target || handler.object === Object.getPrototypeOf(target)) && handler.index === index;
            });
            if (paramHandler) return paramHandler.value(_this);
            if (paramType && paramType.name && !_this.isPrimitiveParamType(paramType.name)) return _this.get(paramType);
            return undefined;
        });
    };
    /**
     * Checks if given parameter type is primitive type or not.
     */ ContainerInstance.prototype.isPrimitiveParamType = function(paramTypeName) {
        return [
            "string",
            "boolean",
            "number",
            "object"
        ].includes(paramTypeName.toLowerCase());
    };
    /**
     * Applies all registered handlers on a given target class.
     */ ContainerInstance.prototype.applyPropertyHandlers = function(target, instance) {
        var _this = this;
        (0, _containerClass.Container).handlers.forEach(function(handler) {
            if (typeof handler.index === "number") return;
            if (handler.object.constructor !== target && !(target.prototype instanceof handler.object.constructor)) return;
            if (handler.propertyName) instance[handler.propertyName] = handler.value(_this);
        });
    };
    /**
     * Checks if the given service metadata contains a destroyable service instance and destroys it in place. If the service
     * contains a callable function named `destroy` it is called but not awaited and the return value is ignored..
     *
     * @param serviceMetadata the service metadata containing the instance to destroy
     * @param force when true the service will be always destroyed even if it's cannot be re-created
     */ ContainerInstance.prototype.destroyServiceInstance = function(serviceMetadata, force) {
        if (force === void 0) force = false;
        /** We reset value only if we can re-create it (aka type or factory exists). */ var shouldResetValue = force || !!serviceMetadata.type || !!serviceMetadata.factory;
        if (shouldResetValue) {
            /** If we wound a function named destroy we call it without any params. */ if (typeof (serviceMetadata === null || serviceMetadata === void 0 ? void 0 : serviceMetadata.value)["destroy"] === "function") try {
                serviceMetadata.value.destroy();
            } catch (error) {
            /** We simply ignore the errors from the destroy function. */ }
            serviceMetadata.value = (0, _emptyConst.EMPTY_VALUE);
        }
    };
    return ContainerInstance;
}();

},{"./container.class":"9OWLZ","./error/service-not-found.error":"1nE8P","./error/cannot-instantiate-value.error":"akUOw","./token.class":"dYStI","./empty.const":"5puz6","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"1nE8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ServiceNotFoundError", ()=>ServiceNotFoundError);
var _tokenClass = require("../token.class");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Thrown when requested service was not found.
 */ var ServiceNotFoundError = /** @class */ function(_super) {
    __extends(ServiceNotFoundError, _super);
    function ServiceNotFoundError(identifier) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.name = "ServiceNotFoundError";
        /** Normalized identifier name used in the error message. */ _this.normalizedIdentifier = "<UNKNOWN_IDENTIFIER>";
        if (typeof identifier === "string") _this.normalizedIdentifier = identifier;
        else if (identifier instanceof (0, _tokenClass.Token)) _this.normalizedIdentifier = "Token<" + (identifier.name || "UNSET_NAME") + ">";
        else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) _this.normalizedIdentifier = "MaybeConstructable<" + identifier.name + ">";
        return _this;
    }
    Object.defineProperty(ServiceNotFoundError.prototype, "message", {
        get: function() {
            return 'Service with "' + this.normalizedIdentifier + '" identifier was not found in the container. ' + 'Register it before usage via explicitly calling the "Container.set" function or using the "@Service()" decorator.';
        },
        enumerable: false,
        configurable: true
    });
    return ServiceNotFoundError;
}(Error);

},{"../token.class":"dYStI","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"dYStI":[function(require,module,exports) {
/**
 * Used to create unique typed service identifier.
 * Useful when service has only interface, but don't have a class.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Token", ()=>Token);
var Token = /** @class */ function() {
    /**
     * @param name Token name, optional and only used for debugging purposes.
     */ function Token(name) {
        this.name = name;
    }
    return Token;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"66Muw":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"akUOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CannotInstantiateValueError", ()=>CannotInstantiateValueError);
var _tokenClass = require("../token.class");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Thrown when DI cannot inject value into property decorated by @Inject decorator.
 */ var CannotInstantiateValueError = /** @class */ function(_super) {
    __extends(CannotInstantiateValueError, _super);
    function CannotInstantiateValueError(identifier) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.name = "CannotInstantiateValueError";
        /** Normalized identifier name used in the error message. */ _this.normalizedIdentifier = "<UNKNOWN_IDENTIFIER>";
        // TODO: Extract this to a helper function and share between this and NotFoundError.
        if (typeof identifier === "string") _this.normalizedIdentifier = identifier;
        else if (identifier instanceof (0, _tokenClass.Token)) _this.normalizedIdentifier = "Token<" + (identifier.name || "UNSET_NAME") + ">";
        else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) _this.normalizedIdentifier = "MaybeConstructable<" + identifier.name + ">";
        return _this;
    }
    Object.defineProperty(CannotInstantiateValueError.prototype, "message", {
        get: function() {
            return 'Cannot instantiate the requested value for the "' + this.normalizedIdentifier + '" identifier. ' + "The related metadata doesn't contain a factory or a type to instantiate.";
        },
        enumerable: false,
        configurable: true
    });
    return CannotInstantiateValueError;
}(Error);

},{"../token.class":"dYStI","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"5puz6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_VALUE", ()=>EMPTY_VALUE);
var EMPTY_VALUE = Symbol("EMPTY_VALUE");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"i1Liu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InjectMany", ()=>InjectMany);
var _containerClass = require("../container.class");
var _cannotInjectValueError = require("../error/cannot-inject-value.error");
var _resolveToTypeWrapperUtil = require("../utils/resolve-to-type-wrapper.util");
function InjectMany(typeOrIdentifier) {
    return function(target, propertyName, index) {
        var typeWrapper = (0, _resolveToTypeWrapperUtil.resolveToTypeWrapper)(typeOrIdentifier, target, propertyName, index);
        /** If no type was inferred, or the general Object type was inferred we throw an error. */ if (typeWrapper === undefined || typeWrapper.eagerType === undefined || typeWrapper.eagerType === Object) throw new (0, _cannotInjectValueError.CannotInjectValueError)(target, propertyName);
        (0, _containerClass.Container).registerHandler({
            object: target,
            propertyName: propertyName,
            index: index,
            value: function(containerInstance) {
                var evaluatedLazyType = typeWrapper.lazyType();
                /** If no type was inferred lazily, or the general Object type was inferred we throw an error. */ if (evaluatedLazyType === undefined || evaluatedLazyType === Object) throw new (0, _cannotInjectValueError.CannotInjectValueError)(target, propertyName);
                return containerInstance.getMany(evaluatedLazyType);
            }
        });
    };
}

},{"../container.class":"9OWLZ","../error/cannot-inject-value.error":"hiTxZ","../utils/resolve-to-type-wrapper.util":"hUWme","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"hiTxZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CannotInjectValueError", ()=>CannotInjectValueError);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * Thrown when DI cannot inject value into property decorated by @Inject decorator.
 */ var CannotInjectValueError = /** @class */ function(_super) {
    __extends(CannotInjectValueError, _super);
    function CannotInjectValueError(target, propertyName) {
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.propertyName = propertyName;
        _this.name = "CannotInjectValueError";
        return _this;
    }
    Object.defineProperty(CannotInjectValueError.prototype, "message", {
        get: function() {
            return 'Cannot inject value into "' + this.target.constructor.name + "." + this.propertyName + '". ' + "Please make sure you setup reflect-metadata properly and you don't use interfaces without service tokens as injection value.";
        },
        enumerable: false,
        configurable: true
    });
    return CannotInjectValueError;
}(Error);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"hUWme":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Helper function used in inject decorators to resolve the received identifier to
 * an eager type when possible or to a lazy type when cyclic dependencies are possibly involved.
 *
 * @param typeOrIdentifier a service identifier or a function returning a type acting as service identifier or nothing
 * @param target the class definition of the target of the decorator
 * @param propertyName the name of the property in case of a PropertyDecorator
 * @param index the index of the parameter in the constructor in case of ParameterDecorator
 */ parcelHelpers.export(exports, "resolveToTypeWrapper", ()=>resolveToTypeWrapper);
var _tokenClass = require("../token.class");
function resolveToTypeWrapper(typeOrIdentifier, target, propertyName, index) {
    /**
     * ? We want to error out as soon as possible when looking up services to inject, however
     * ? we cannot determine the type at decorator execution when cyclic dependencies are involved
     * ? because calling the received `() => MyType` function right away would cause a JS error:
     * ? "Cannot access 'MyType' before initialization", so we need to execute the function in the handler,
     * ? when the classes are already created. To overcome this, we use a wrapper:
     * ?  - the lazyType is executed in the handler so we never have a JS error
     * ?  - the eagerType is checked when decorator is running and an error is raised if an unknown type is encountered
     */ var typeWrapper;
    /** If requested type is explicitly set via a string ID or token, we set it explicitly. */ if (typeOrIdentifier && typeof typeOrIdentifier === "string" || typeOrIdentifier instanceof (0, _tokenClass.Token)) typeWrapper = {
        eagerType: typeOrIdentifier,
        lazyType: function() {
            return typeOrIdentifier;
        }
    };
    /** If requested type is explicitly set via a () => MyClassType format, we set it explicitly. */ if (typeOrIdentifier && typeof typeOrIdentifier === "function") /** We set eagerType to null, preventing the raising of the CannotInjectValueError in decorators.  */ typeWrapper = {
        eagerType: null,
        lazyType: function() {
            return typeOrIdentifier();
        }
    };
    /** If no explicit type is set and handler registered for a class property, we need to get the property type. */ if (!typeOrIdentifier && propertyName) {
        var identifier_1 = Reflect.getMetadata("design:type", target, propertyName);
        typeWrapper = {
            eagerType: identifier_1,
            lazyType: function() {
                return identifier_1;
            }
        };
    }
    /** If no explicit type is set and handler registered for a constructor parameter, we need to get the parameter types. */ if (!typeOrIdentifier && typeof index == "number" && Number.isInteger(index)) {
        var paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyName);
        /** It's not guaranteed, that we find any types for the constructor. */ var identifier_2 = paramTypes === null || paramTypes === void 0 ? void 0 : paramTypes[index];
        typeWrapper = {
            eagerType: identifier_2,
            lazyType: function() {
                return identifier_2;
            }
        };
    }
    return typeWrapper;
}

},{"../token.class":"dYStI","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"9hexb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Inject", ()=>Inject);
var _containerClass = require("../container.class");
var _cannotInjectValueError = require("../error/cannot-inject-value.error");
var _resolveToTypeWrapperUtil = require("../utils/resolve-to-type-wrapper.util");
function Inject(typeOrIdentifier) {
    return function(target, propertyName, index) {
        var typeWrapper = (0, _resolveToTypeWrapperUtil.resolveToTypeWrapper)(typeOrIdentifier, target, propertyName, index);
        /** If no type was inferred, or the general Object type was inferred we throw an error. */ if (typeWrapper === undefined || typeWrapper.eagerType === undefined || typeWrapper.eagerType === Object) throw new (0, _cannotInjectValueError.CannotInjectValueError)(target, propertyName);
        (0, _containerClass.Container).registerHandler({
            object: target,
            propertyName: propertyName,
            index: index,
            value: function(containerInstance) {
                var evaluatedLazyType = typeWrapper.lazyType();
                /** If no type was inferred lazily, or the general Object type was inferred we throw an error. */ if (evaluatedLazyType === undefined || evaluatedLazyType === Object) throw new (0, _cannotInjectValueError.CannotInjectValueError)(target, propertyName);
                return containerInstance.get(evaluatedLazyType);
            }
        });
    };
}

},{"../container.class":"9OWLZ","../error/cannot-inject-value.error":"hiTxZ","../utils/resolve-to-type-wrapper.util":"hUWme","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"8T3Nc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Service", ()=>Service);
var _containerClass = require("../container.class");
var _tokenClass = require("../token.class");
var _emptyConst = require("../empty.const");
function Service(optionsOrServiceIdentifier) {
    return function(targetConstructor) {
        var serviceMetadata = {
            id: targetConstructor,
            // TODO: Let's investigate why we receive Function type instead of a constructable.
            type: targetConstructor,
            factory: undefined,
            multiple: false,
            global: false,
            eager: false,
            transient: false,
            value: (0, _emptyConst.EMPTY_VALUE)
        };
        if (optionsOrServiceIdentifier instanceof (0, _tokenClass.Token) || typeof optionsOrServiceIdentifier === "string") /** We received a Token or string ID. */ serviceMetadata.id = optionsOrServiceIdentifier;
        else if (optionsOrServiceIdentifier) {
            /** We received a ServiceOptions object. */ serviceMetadata.id = optionsOrServiceIdentifier.id || targetConstructor;
            serviceMetadata.factory = optionsOrServiceIdentifier.factory || undefined;
            serviceMetadata.multiple = optionsOrServiceIdentifier.multiple || false;
            serviceMetadata.global = optionsOrServiceIdentifier.global || false;
            serviceMetadata.eager = optionsOrServiceIdentifier.eager || false;
            serviceMetadata.transient = optionsOrServiceIdentifier.transient || false;
        }
        (0, _containerClass.Container).set(serviceMetadata);
    };
}

},{"../container.class":"9OWLZ","../token.class":"dYStI","../empty.const":"5puz6","@parcel/transformer-js/src/esmodule-helpers.js":"66Muw"}],"cgKVk":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("ad0844d159ee538d"), exports);
__exportStar(require("91cd17545ddfc066"), exports);
__exportStar(require("9e023f01af5a14b"), exports);
__exportStar(require("c53dd5917a2b131f"), exports);
__exportStar(require("3d52378195fb80dc"), exports);
__exportStar(require("282430a48b13583e"), exports);
__exportStar(require("9cdb517c098629cf"), exports);
__exportStar(require("e17a1ef56ac571ac"), exports);

},{"ad0844d159ee538d":"8svs2","91cd17545ddfc066":"haLWo","9e023f01af5a14b":"j77U1","c53dd5917a2b131f":"fTehi","3d52378195fb80dc":"2avtV","282430a48b13583e":"5lVVf","9cdb517c098629cf":"4TUhe","e17a1ef56ac571ac":"lzr6e"}],"8svs2":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("79ae7e561d7cc99d"), exports);
__exportStar(require("9460608f0bbf7793"), exports);

},{"79ae7e561d7cc99d":"d8ZYL","9460608f0bbf7793":"7RhJP"}],"d8ZYL":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AddressTezos_1, AddressTron_1, Address_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Address = exports.AddressTron = exports.AddressTezos = void 0;
const bignumber_js_1 = require("6b0347312be431c7");
const typedi_1 = require("4338e0753d9171d8");
const tatum_connector_1 = require("c8c6b1f6baa17376");
const dto_1 = require("e5a73257a6979d1b");
const util_1 = require("1371ade261638b0b");
const decode_1 = require("8409788ecb443e60");
const tatum_1 = require("df876b2b820521a3");
let AddressTezos = AddressTezos_1 = class AddressTezos {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    /**
     * Get balance of XTZ for a given Tezos address.
     * You can get balance of multiple addresses in one call.
     */ async getBalance({ addresses }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(async ()=>{
            const data = await this.connector.get({
                path: `data/balances`,
                params: {
                    pageSize: 50,
                    offset: 0,
                    chain,
                    addresses: addresses.join(",")
                }
            });
            return data.result.map((value)=>({
                    address: value.address,
                    asset: util_1.Constant.CURRENCY_NAMES[chain],
                    decimals: util_1.Constant.DECIMALS[chain],
                    balance: value.balance,
                    type: "native"
                }));
        });
    }
    /**
     * Get all transactions, that are related to the given address. It could be both incoming and outgoing transactions.
     */ async getTransactions({ address, transactionDirection, fromBlock, toBlock, pageSize = 10, page = 0, cursor }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(async ()=>{
            const data = await this.connector.get({
                path: `data/transactions`,
                params: {
                    chain,
                    addresses: address,
                    transactionSubtype: transactionDirection,
                    blockFrom: fromBlock,
                    blockTo: toBlock,
                    pageSize,
                    offset: page,
                    cursor
                }
            });
            return {
                result: data.result,
                prevPage: data.prevPage,
                nextPage: data.nextPage
            };
        });
    }
};
AddressTezos = AddressTezos_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>new AddressTezos_1(data.id),
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], AddressTezos);
exports.AddressTezos = AddressTezos;
let AddressTron = AddressTron_1 = class AddressTron {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    /**
     * Get balance of all tokens for a given address.
     */ async getBalance({ address }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(async ()=>{
            const fullBalances = await this.getFullBalance(address);
            const nativeBalances = [
                fullBalances.nativeBalance
            ];
            const tokenBalances = fullBalances.tokenBalances;
            const result = formatNativeBalances(nativeBalances, [
                address
            ], chain);
            if (!tokenBalances) return result;
            return [
                ...result,
                ...tokenBalances
            ];
        });
    }
    async getFullBalance(address) {
        const data = await this.connector.get({
            path: `tron/account/${address}`
        });
        let tokenBalances = [];
        if (data.trc20.length > 0) tokenBalances = await this.processTRC20TokenBalanceDetails(address, data.trc20);
        return {
            nativeBalance: data.balance.toString(),
            tokenBalances
        };
    }
    async processTRC20TokenBalanceDetails(address, tokenBalances) {
        const serializedTokenBalance = [];
        for (const token of tokenBalances){
            const tokenAddress = Object.keys(token)[0];
            const asset = await util_1.Utils.getRpc(this.id, this.config).triggerConstantContract(tokenAddress, tokenAddress, "symbol()", "", {
                visible: true
            }).then((r)=>(0, decode_1.decodeHexString)(r.constant_result[0]));
            const decimals = await util_1.Utils.getRpc(this.id, this.config).triggerConstantContract(tokenAddress, tokenAddress, "decimals()", "", {
                visible: true
            }).then((r)=>(0, decode_1.decodeUInt256)(r.constant_result[0]));
            const balance = Object.values(token)[0];
            serializedTokenBalance.push({
                asset,
                decimals,
                balance,
                type: "fungible",
                address,
                tokenAddress
            });
        }
        return serializedTokenBalance;
    }
};
AddressTron = AddressTron_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new AddressTron_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], AddressTron);
exports.AddressTron = AddressTron;
let Address = Address_1 = class Address {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    /**
     * Get balance of all tokens for a given address.
     * You can get balance of multiple addresses in one call.
     */ async getBalance({ page = 0, pageSize = 10, addresses }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(async ()=>{
            const nativeBalances = await this.getNativeBalance(addresses);
            const tokenBalances = (0, dto_1.isDataApiEvmEnabledNetwork)(chain) && await this.connector.get({
                path: `data/balances`,
                params: {
                    pageSize,
                    offset: page,
                    excludeMetadata: true,
                    chain,
                    addresses: addresses.join(",")
                }
            }).then((r)=>r.result);
            const result = formatNativeBalances(nativeBalances, addresses, chain);
            if (!tokenBalances) return result;
            const serializedTokenBalances = await this.processTokenBalanceDetails(tokenBalances, chain);
            return [
                ...result,
                ...serializedTokenBalances
            ];
        });
    }
    /**
     * Get all transactions, that are related to the given address. It could be both incoming and outgoing transactions.
     */ async getTransactions({ address, transactionDirection, transactionTypes, fromBlock, toBlock, pageSize = 10, page = 0 }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(async ()=>{
            if ((0, dto_1.isDataApiEnabledNetwork)(chain)) return this.connector.get({
                path: `data/transactions`,
                params: {
                    chain,
                    addresses: address,
                    transactionTypes: transactionTypes?.join(),
                    transactionSubtype: transactionDirection,
                    blockFrom: fromBlock,
                    blockTo: toBlock,
                    pageSize,
                    offset: page
                }
            }).then((r)=>r.result);
            let path;
            if ([
                tatum_1.Network.BITCOIN,
                tatum_1.Network.BITCOIN_TESTNET
            ].includes(chain)) path = `bitcoin/transaction/address/${address}`;
            else if ([
                tatum_1.Network.LITECOIN,
                tatum_1.Network.LITECOIN_TESTNET
            ].includes(chain)) path = `litecoin/transaction/address/${address}`;
            else if ([
                tatum_1.Network.DOGECOIN,
                tatum_1.Network.DOGECOIN_TESTNET
            ].includes(chain)) path = `dogecoin/transaction/address/${address}`;
            if (!path) // TODO: implement for other networks - TRON, XRP, CARDANO, SOL, XLM etc etc
            throw new Error(`Not supported for ${chain} network.`);
            return this.processUtxoBasedTxs(path, pageSize, page, transactionDirection, chain, address);
        });
    }
    async processTokenBalanceDetails(tokenBalances, chain) {
        const result = [];
        // Processing token details
        const details = await Promise.all(tokenBalances.map((details)=>this.connector.get({
                path: "data/tokens",
                params: {
                    chain,
                    tokenAddress: details.tokenAddress
                }
            })));
        for(let i = 0; i < tokenBalances.length; i++){
            const tokenBalance = tokenBalances[i];
            const item = {
                address: tokenBalance.address,
                tokenAddress: tokenBalance.tokenAddress,
                balance: tokenBalance.balance,
                type: tokenBalance.type
            };
            if (tokenBalance.lastUpdatedBlockNumber) item.lastUpdatedBlockNumber = tokenBalance.lastUpdatedBlockNumber;
            if (details[i].symbol) item.asset = details[i].symbol;
            if (details[i].decimals) item.decimals = details[i].decimals;
            if (tokenBalance.tokenId) item.tokenId = tokenBalance.tokenId;
            result.push(item);
        }
        return result;
    }
    processUtxoBasedTxs(path, pageSize, page, transactionDirection, chain, address) {
        return this.connector.get({
            path,
            basePath: util_1.Constant.TATUM_API_URL.V3,
            params: {
                pageSize,
                offset: page * pageSize,
                txType: transactionDirection
            }
        }).then((r)=>{
            const result = [];
            for (const tx of r){
                const item = {
                    chain,
                    blockNumber: tx.blockNumber,
                    timestamp: tx.time,
                    transactionType: transactionDirection || "incoming",
                    hash: tx.hash,
                    address,
                    amount: "0"
                };
                tx.inputs.filter((i)=>i.coin.address === address).forEach((i)=>{
                    item.amount = new bignumber_js_1.BigNumber(item.amount).minus(new bignumber_js_1.BigNumber(i.coin.value).dividedBy(typeof i.coin.value === "number" ? 10 ** util_1.Constant.DECIMALS[chain] : 1)).toString();
                });
                tx.outputs.filter((i)=>i.address === address).forEach((i)=>{
                    item.amount = new bignumber_js_1.BigNumber(item.amount).plus(new bignumber_js_1.BigNumber(i.value).dividedBy(typeof i.value === "number" ? 10 ** util_1.Constant.DECIMALS[chain] : 1)).toString();
                });
                if (new bignumber_js_1.BigNumber(item.amount).isGreaterThan(0)) {
                    item.transactionType = "incoming";
                    result.push(item);
                } else {
                    item.transactionType = "outgoing";
                    item.amount = new bignumber_js_1.BigNumber(item.amount).multipliedBy(-1).toString();
                    result.push(item);
                }
            }
            return result;
        });
    }
    async getNativeBalance(addresses) {
        const network = this.config.network;
        if ((0, dto_1.isEvmBasedNetwork)(network)) {
            const rpc = util_1.Utils.getRpc(this.id, this.config);
            const result = await Promise.all(addresses.map((a, i)=>rpc.rawRpcCall(util_1.Utils.prepareRpcCall("eth_getBalance", [
                    a,
                    "pending"
                ], i))));
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return result.map((e)=>new bignumber_js_1.BigNumber(e.result).dividedBy(10 ** util_1.Constant.DECIMALS[network]).toString());
        }
        if ([
            tatum_1.Network.SOLANA,
            tatum_1.Network.SOLANA_DEVNET
        ].includes(network)) {
            const rpc = util_1.Utils.getRpc(this.id, this.config);
            return rpc.rawBatchRpcCall(addresses.map((a, i)=>util_1.Utils.prepareRpcCall("getBalance", [
                    a,
                    {
                        commitment: "processed"
                    }
                ], i))).then((r)=>{
                if (Array.isArray(r)) return r.map((e)=>new bignumber_js_1.BigNumber(e.result.value).dividedBy(10 ** util_1.Constant.DECIMALS[network]).toString());
                return [
                    new bignumber_js_1.BigNumber(r.result.value).dividedBy(10 ** util_1.Constant.DECIMALS[network]).toString()
                ];
            });
        } else if ([
            tatum_1.Network.XRP,
            tatum_1.Network.XRP_TESTNET
        ].includes(network)) {
            if (addresses.length !== 1) throw new Error(`UTXO based networks like ${network} support only one address per call.`);
            const rpc = util_1.Utils.getRpc(this.id, this.config);
            return rpc.rawRpcCall(util_1.Utils.prepareRpcCall("account_info", [
                {
                    account: addresses[0],
                    ledger_index: "current"
                }
            ])).then((r)=>[
                    new bignumber_js_1.BigNumber(r.result.account_data?.Balance || 0).dividedBy(10 ** util_1.Constant.DECIMALS[network]).toString()
                ]);
        } else if ((0, dto_1.isDataApiUtxoEnabledNetwork)(network)) {
            if (addresses.length !== 1) throw new Error(`UTXO based networks like ${network} support only one address per call.`);
            return this.connector.get({
                path: "data/utxos",
                params: {
                    chain: network,
                    address: addresses[0],
                    totalValue: 200000000000
                }
            }).then((r)=>[
                    r.reduce((acc, val)=>acc + val.value, 0).toString()
                ]);
        } else if (network === tatum_1.Network.HORIZEN_EON) {
            const rpc = util_1.Utils.getRpc(this.id, this.config);
            const result = await Promise.all(addresses.map((a)=>rpc.getBalance(a)));
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return result.map((e)=>new bignumber_js_1.BigNumber(e.result).dividedBy(10 ** util_1.Constant.DECIMALS[network]).toString());
        }
        // TODO: implement for other networks - TRON, XLM etc etc
        throw new Error(`Unsupported network ${network} for now.`);
    }
};
Address = Address_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Address_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Address);
exports.Address = Address;
function formatNativeBalances(nativeBalances, addresses, chain) {
    const result = [];
    for (const [i, nativeBalance] of nativeBalances.entries())result.push({
        address: addresses[i],
        asset: util_1.Constant.CURRENCY_NAMES[chain],
        decimals: util_1.Constant.DECIMALS[chain],
        balance: nativeBalance,
        type: "native"
    });
    return result;
}

},{"6b0347312be431c7":"57qkX","4338e0753d9171d8":"lKbmC","c8c6b1f6baa17376":"brrBq","e5a73257a6979d1b":"lqU6b","1371ade261638b0b":"luFgs","8409788ecb443e60":"axE5P","df876b2b820521a3":"4TUhe"}],"57qkX":[function(require,module,exports) {
(function(globalObject) {
    "use strict";
    /*
 *      bignumber.js v9.1.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [
        1,
        10,
        100,
        1e3,
        1e4,
        1e5,
        1e6,
        1e7,
        1e8,
        1e9,
        1e10,
        1e11,
        1e12,
        1e13
    ], SQRT_BASE = 1e7, // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9; // 0 to MAX_INT32
    /*
   * Create and return a BigNumber constructor.
   */ function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
        }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
        // The default values below must be integers within the inclusive ranges stated.
        // The values can also be changed at run-time using BigNumber.set.
        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
        // toExponential, toFixed, toFormat and toPrecision, and round (default value).
        // UP         0 Away from zero.
        // DOWN       1 Towards zero.
        // CEIL       2 Towards +Infinity.
        // FLOOR      3 Towards -Infinity.
        // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -10000000, // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7, // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
        // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
        // The remainder (r) is calculated as: r = a - n * q.
        //
        // UP        0 The remainder is positive if the dividend is negative, else is negative.
        // DOWN      1 The remainder has the same sign as the dividend.
        //             This modulo mode is commonly known as 'truncated division' and is
        //             equivalent to (a % n) in JavaScript.
        // FLOOR     3 The remainder has the same sign as the divisor (Python %).
        // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
        // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
        //             The remainder is always positive.
        //
        // The truncated division, floored division, Euclidian division and IEEE 754 remainder
        // modes are commonly used for the modulus operation.
        // Although the other rounding modes can also be used, they may not give useful results.
        MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: ""
        }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
        // '-', '.', whitespace, or repeated character.
        // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
        ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
        //------------------------------------------------------------------------------------------
        // CONSTRUCTOR
        /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */ function BigNumber(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            // Enable constructor call without `new`.
            if (!(x instanceof BigNumber)) return new BigNumber(v, b);
            if (b == null) {
                if (v && v._isBigNumber === true) {
                    x.s = v.s;
                    if (!v.c || v.e > MAX_EXP) x.c = x.e = null;
                    else if (v.e < MIN_EXP) x.c = [
                        x.e = 0
                    ];
                    else {
                        x.e = v.e;
                        x.c = v.c.slice();
                    }
                    return;
                }
                if ((isNum = typeof v == "number") && v * 0 == 0) {
                    // Use `1 / n` to handle minus zero also.
                    x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                    // Fast path for integers, where n < 2147483648 (2**31).
                    if (v === ~~v) {
                        for(e = 0, i = v; i >= 10; i /= 10, e++);
                        if (e > MAX_EXP) x.c = x.e = null;
                        else {
                            x.e = e;
                            x.c = [
                                v
                            ];
                        }
                        return;
                    }
                    str = String(v);
                } else {
                    if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                    x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
                }
                // Decimal point?
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                // Exponential form?
                if ((i = str.search(/e/i)) > 0) {
                    // Determine exponent.
                    if (e < 0) e = i;
                    e += +str.slice(i + 1);
                    str = str.substring(0, i);
                } else if (e < 0) // Integer.
                e = str.length;
            } else {
                // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
                intCheck(b, 2, ALPHABET.length, "Base");
                // Allow exponential notation to be used with base 10 argument, while
                // also rounding to DECIMAL_PLACES as with other bases.
                if (b == 10 && alphabetHasNormalDecimalDigits) {
                    x = new BigNumber(v);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }
                str = String(v);
                if (isNum = typeof v == "number") {
                    // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                    if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                    x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                    // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                    if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) throw Error(tooManyDigits + v);
                } else x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                alphabet = ALPHABET.slice(0, b);
                e = i = 0;
                // Check that str is a valid base b number.
                // Don't use RegExp, so alphabet can contain special characters.
                for(len = str.length; i < len; i++)if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == ".") // If '.' is not the first character and it has not be found before.
                    {
                        if (i > e) {
                            e = len;
                            continue;
                        }
                    } else if (!caseChanged) // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                    {
                        if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                            caseChanged = true;
                            i = -1;
                            e = 0;
                            continue;
                        }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                }
                // Prevent later check for length on converted number.
                isNum = false;
                str = convertBase(str, b, 10, x.s);
                // Decimal point?
                if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
                else e = str.length;
            }
            // Determine leading zeros.
            for(i = 0; str.charCodeAt(i) === 48; i++);
            // Determine trailing zeros.
            for(len = str.length; str.charCodeAt(--len) === 48;);
            if (str = str.slice(i, ++len)) {
                len -= i;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) throw Error(tooManyDigits + x.s * v);
                // Overflow?
                if ((e = e - i - 1) > MAX_EXP) // Infinity.
                x.c = x.e = null;
                else if (e < MIN_EXP) // Zero.
                x.c = [
                    x.e = 0
                ];
                else {
                    x.e = e;
                    x.c = [];
                    // Transform base
                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE; // i < 1
                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));
                        for(len -= LOG_BASE; i < len;)x.c.push(+str.slice(i, i += LOG_BASE));
                        i = LOG_BASE - (str = str.slice(i)).length;
                    } else i -= len;
                    for(; i--; str += "0");
                    x.c.push(+str);
                }
            } else // Zero.
            x.c = [
                x.e = 0
            ];
        }
        // CONSTRUCTOR PROPERTIES
        BigNumber.clone = clone;
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
        /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */ BigNumber.config = BigNumber.set = function(obj) {
            var p, v;
            if (obj != null) {
                if (typeof obj == "object") {
                    // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        DECIMAL_PLACES = v;
                    }
                    // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                    // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                        v = obj[p];
                        intCheck(v, 0, 8, p);
                        ROUNDING_MODE = v;
                    }
                    // EXPONENTIAL_AT {number|number[]}
                    // Integer, -MAX to MAX inclusive or
                    // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                    // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, 0, p);
                            intCheck(v[1], 0, MAX, p);
                            TO_EXP_NEG = v[0];
                            TO_EXP_POS = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                        }
                    }
                    // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                    // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                    // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                    if (obj.hasOwnProperty(p = "RANGE")) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, -1, p);
                            intCheck(v[1], 1, MAX, p);
                            MIN_EXP = v[0];
                            MAX_EXP = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            if (v) MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                            else throw Error(bignumberError + p + " cannot be zero: " + v);
                        }
                    }
                    // CRYPTO {boolean} true or false.
                    // '[BigNumber Error] CRYPTO not true or false: {v}'
                    // '[BigNumber Error] crypto unavailable'
                    if (obj.hasOwnProperty(p = "CRYPTO")) {
                        v = obj[p];
                        if (v === !!v) {
                            if (v) {
                                if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) CRYPTO = v;
                                else {
                                    CRYPTO = !v;
                                    throw Error(bignumberError + "crypto unavailable");
                                }
                            } else CRYPTO = v;
                        } else throw Error(bignumberError + p + " not true or false: " + v);
                    }
                    // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                    // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                        v = obj[p];
                        intCheck(v, 0, 9, p);
                        MODULO_MODE = v;
                    }
                    // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        POW_PRECISION = v;
                    }
                    // FORMAT {object}
                    // '[BigNumber Error] FORMAT not an object: {v}'
                    if (obj.hasOwnProperty(p = "FORMAT")) {
                        v = obj[p];
                        if (typeof v == "object") FORMAT = v;
                        else throw Error(bignumberError + p + " not an object: " + v);
                    }
                    // ALPHABET {string}
                    // '[BigNumber Error] ALPHABET invalid: {v}'
                    if (obj.hasOwnProperty(p = "ALPHABET")) {
                        v = obj[p];
                        // Disallow if less than two characters,
                        // or if it contains '+', '-', '.', whitespace, or a repeated character.
                        if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                            ALPHABET = v;
                        } else throw Error(bignumberError + p + " invalid: " + v);
                    }
                } else // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + "Object expected: " + obj);
            }
            return {
                DECIMAL_PLACES: DECIMAL_PLACES,
                ROUNDING_MODE: ROUNDING_MODE,
                EXPONENTIAL_AT: [
                    TO_EXP_NEG,
                    TO_EXP_POS
                ],
                RANGE: [
                    MIN_EXP,
                    MAX_EXP
                ],
                CRYPTO: CRYPTO,
                MODULO_MODE: MODULO_MODE,
                POW_PRECISION: POW_PRECISION,
                FORMAT: FORMAT,
                ALPHABET: ALPHABET
            };
        };
        /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */ BigNumber.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber.DEBUG) return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out: if (({}).toString.call(c) == "[object Array]") {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                    // If the first element is zero, the BigNumber value must be zero.
                    if (c[0] === 0) {
                        if (e === 0 && c.length === 1) return true;
                        break out;
                    }
                    // Calculate number of digits that c[0] should have, based on the exponent.
                    i = (e + 1) % LOG_BASE;
                    if (i < 1) i += LOG_BASE;
                    // Calculate number of digits of c[0].
                    //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                    if (String(c[0]).length == i) {
                        for(i = 0; i < c.length; i++){
                            n = c[i];
                            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                        }
                        // Last element cannot be zero, unless it is the only element.
                        if (n !== 0) return true;
                    }
                }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) return true;
            throw Error(bignumberError + "Invalid BigNumber: " + v);
        };
        /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.maximum = BigNumber.max = function() {
            return maxOrMin(arguments, -1);
        };
        /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.minimum = BigNumber.min = function() {
            return maxOrMin(arguments, 1);
        };
        /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */ BigNumber.random = function() {
            var pow2_53 = 0x20000000000000;
            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function() {
                return mathfloor(Math.random() * pow2_53);
            } : function() {
                return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
            };
            return function(dp) {
                var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
                if (dp == null) dp = DECIMAL_PLACES;
                else intCheck(dp, 0, MAX);
                k = mathceil(dp / LOG_BASE);
                if (CRYPTO) {
                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {
                        a = crypto.getRandomValues(new Uint32Array(k *= 2));
                        for(; i < k;){
                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9e15) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {
                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 2;
                            }
                        }
                        i = k / 2;
                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {
                        // buffer
                        a = crypto.randomBytes(k *= 7);
                        for(; i < k;){
                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                            if (v >= 9e15) crypto.randomBytes(7).copy(a, i);
                            else {
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 1e14);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        throw Error(bignumberError + "crypto unavailable");
                    }
                }
                // Use Math.random.
                if (!CRYPTO) for(; i < k;){
                    v = random53bitInt();
                    if (v < 9e15) c[i++] = v % 1e14;
                }
                k = c[--i];
                dp %= LOG_BASE;
                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }
                // Remove trailing elements which are zero.
                for(; c[i] === 0; c.pop(), i--);
                // Zero?
                if (i < 0) c = [
                    e = 0
                ];
                else {
                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                    // Count the digits of the first element of c to determine leading zeros, and...
                    for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }
                rand.e = e;
                rand.c = c;
                return rand;
            };
        }();
        /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber(args[0]);
            for(; i < args.length;)sum = sum.plus(args[i++]);
            return sum;
        };
        // PRIVATE FUNCTIONS
        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = function() {
            var decimal = "0123456789";
            /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */ function toBaseOut(str, baseIn, baseOut, alphabet) {
                var j, arr = [
                    0
                ], arrL, i = 0, len = str.length;
                for(; i < len;){
                    for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                    arr[0] += alphabet.indexOf(str.charAt(i++));
                    for(j = 0; j < arr.length; j++)if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) arr[j + 1] = 0;
                        arr[j + 1] += arr[j] / baseOut | 0;
                        arr[j] %= baseOut;
                    }
                }
                return arr.reverse();
            }
            // Convert a numeric string of baseIn to a numeric string of baseOut.
            // If the caller is toString, we are converting from base 10 to baseOut.
            // If the caller is BigNumber, we are converting from baseIn to base 10.
            return function(str, baseIn, baseOut, sign, callerIsToString) {
                var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                // Non-integer.
                if (i >= 0) {
                    k = POW_PRECISION;
                    // Unlimited precision.
                    POW_PRECISION = 0;
                    str = str.replace(".", "");
                    y = new BigNumber(baseIn);
                    x = y.pow(str.length - i);
                    POW_PRECISION = k;
                    // Convert str as if an integer, then restore the fraction part by dividing the
                    // result by its base raised to a power.
                    y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
                    y.e = y.c.length;
                }
                // Convert the number as integer.
                xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
                // xc now represents str as an integer and converted to baseOut. e is the exponent.
                e = k = xc.length;
                // Remove trailing zeros.
                for(; xc[--k] == 0; xc.pop());
                // Zero?
                if (!xc[0]) return alphabet.charAt(0);
                // Does str represent an integer? If so, no need for the division.
                if (i < 0) --e;
                else {
                    x.c = xc;
                    x.e = e;
                    // The sign is needed for correct rounding.
                    x.s = sign;
                    x = div(x, y, dp, rm, baseOut);
                    xc = x.c;
                    r = x.r;
                    e = x.e;
                }
                // xc now represents str converted to baseOut.
                // THe index of the rounding digit.
                d = e + dp + 1;
                // The rounding digit: the digit to the right of the digit that may be rounded up.
                i = xc[d];
                // Look at the rounding digits and mode to determine whether to round up.
                k = baseOut / 2;
                r = r || d < 0 || xc[d + 1] != null;
                r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                // If the index of the rounding digit is not greater than zero, or xc represents
                // zero, then the result of the base conversion is zero or, if rounding up, a value
                // such as 0.00001.
                if (d < 1 || !xc[0]) // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
                else {
                    // Truncate xc to the required number of decimal places.
                    xc.length = d;
                    // Round up?
                    if (r) // Rounding up may mean the previous digit has to be rounded up and so on.
                    for(--baseOut; ++xc[--d] > baseOut;){
                        xc[d] = 0;
                        if (!d) {
                            ++e;
                            xc = [
                                1
                            ].concat(xc);
                        }
                    }
                    // Determine trailing zeros.
                    for(k = xc.length; !xc[--k];);
                    // E.g. [4, 11, 15] becomes 4bf.
                    for(i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]));
                    // Add leading zeros, decimal point and trailing zeros as required.
                    str = toFixedPoint(str, e, alphabet.charAt(0));
                }
                // The caller will add the sign.
                return str;
            };
        }();
        // Perform division in the specified base. Called by div and convertBase.
        div = function() {
            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                for(x = x.slice(); i--;){
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }
                if (carry) x = [
                    carry
                ].concat(x);
                return x;
            }
            function compare(a, b, aL, bL) {
                var i, cmp;
                if (aL != bL) cmp = aL > bL ? 1 : -1;
                else {
                    for(i = cmp = 0; i < aL; i++)if (a[i] != b[i]) {
                        cmp = a[i] > b[i] ? 1 : -1;
                        break;
                    }
                }
                return cmp;
            }
            function subtract(a, b, aL, base) {
                var i = 0;
                // Subtract b from a.
                for(; aL--;){
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }
                // Remove leading zeros.
                for(; !a[0] && a.length > 1; a.splice(0, 1));
            }
            // x: dividend, y: divisor.
            return function(x, y, dp, rm, base) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;
                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }
                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for(i = 0; yc[i] == (xc[i] || 0); i++);
                if (yc[i] > (xc[i] || 0)) e--;
                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;
                    // Normalise xc and yc so highest order digit of yc is >= base / 2.
                    n = mathfloor(base / (yc[0] + 1));
                    // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                    // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }
                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;
                    // Add zeros to make remainder as long as divisor.
                    for(; remL < yL; rem[remL++] = 0);
                    yz = yc.slice();
                    yz = [
                        0
                    ].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                    do {
                        n = 0;
                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);
                        // If divisor < remainder.
                        if (cmp < 0) {
                            // Calculate trial digit, n.
                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);
                            //  Algorithm:
                            //  product = divisor multiplied by trial digit (n).
                            //  Compare product and remainder.
                            //  If product is greater than remainder:
                            //    Subtract divisor from product, decrement trial digit.
                            //  Subtract product from remainder.
                            //  If product was less than remainder at the last compare:
                            //    Compare new remainder and divisor.
                            //    If remainder is greater than divisor:
                            //      Subtract divisor from remainder, increment trial digit.
                            if (n > 1) {
                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;
                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;
                                // Compare product and remainder.
                                // If product > remainder then trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while(compare(prod, rem, prodL, remL) == 1){
                                    n--;
                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {
                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) // divisor < remainder, so n must be at least 1.
                                cmp = n = 1;
                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }
                            if (prodL < remL) prod = [
                                0
                            ].concat(prod);
                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;
                            // If product was < remainder.
                            if (cmp == -1) // Compare divisor and new remainder.
                            // If divisor < new remainder, subtract divisor from remainder.
                            // Trial digit n too low.
                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                            while(compare(yc, rem, yL, remL) < 1){
                                n++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                remL = rem.length;
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [
                                0
                            ];
                        } // else cmp === 1 and n will be 0
                        // Add the next digit, n, to the result array.
                        qc[i++] = n;
                        // Update the remainder.
                        if (rem[0]) rem[remL++] = xc[xi] || 0;
                        else {
                            rem = [
                                xc[xi]
                            ];
                            remL = 1;
                        }
                    }while ((xi++ < xL || rem[0] != null) && s--);
                    more = rem[0] != null;
                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }
                if (base == BASE) {
                    // To calculate q.e, first get the number of digits of qc[0].
                    for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }
                return q;
            };
        }();
        /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */ function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
                str = coeffToString(n.c);
                str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
            } else {
                n = round(new BigNumber(n), i, rm);
                // n.e may have changed if the value was rounded up.
                e = n.e;
                str = coeffToString(n.c);
                len = str.length;
                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.
                // Exponential notation.
                if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                    // Append zeros?
                    for(; len < i; str += "0", len++);
                    str = toExponential(str, e);
                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint(str, e, "0");
                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for(str += "."; i--; str += "0");
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += ".";
                            for(; i--; str += "0");
                        }
                    }
                }
            }
            return n.s < 0 && c0 ? "-" + str : str;
        }
        // Handle BigNumber.max and BigNumber.min.
        // If any number is NaN, return NaN.
        function maxOrMin(args, n) {
            var k, y, i = 1, x = new BigNumber(args[0]);
            for(; i < args.length; i++){
                y = new BigNumber(args[i]);
                if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) x = y;
            }
            return x;
        }
        /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */ function normalise(n, c, e) {
            var i = 1, j = c.length;
            // Remove trailing zeros.
            for(; !c[--j]; c.pop());
            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for(j = c[0]; j >= 10; j /= 10, i++);
            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) // Infinity.
            n.c = n.e = null;
            else if (e < MIN_EXP) // Zero.
            n.c = [
                n.e = 0
            ];
            else {
                n.e = e;
                n.c = c;
            }
            return n;
        }
        // Handle values that fail the validity test in BigNumber.
        parseNumeric = function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
                var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                else {
                    if (!isNum) {
                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function(m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });
                        if (b) {
                            base = b;
                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                        }
                        if (str != s) return new BigNumber(s, base);
                    }
                    // '[BigNumber Error] Not a number: {n}'
                    // '[BigNumber Error] Not a base {b} number: {n}'
                    if (BigNumber.DEBUG) throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
                    // NaN
                    x.s = null;
                }
                x.c = x.e = null;
            };
        }();
        /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */ function round(x, sd, rm, r) {
            var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            // if x is not Infinity or NaN...
            if (xc) {
                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {
                    // Get the number of digits of the first element of xc.
                    for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                    i = sd - d;
                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];
                        // Get the rounding digit at index j of n.
                        rd = mathfloor(n / pows10[d - j - 1] % 10);
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);
                        if (ni >= xc.length) {
                            if (r) {
                                // Needed by sqrt.
                                for(; xc.length <= ni; xc.push(0));
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else break out;
                        } else {
                            n = k = xc[ni];
                            // Get the number of digits of n.
                            for(d = 1; k >= 10; k /= 10, d++);
                            // Get the index of rd within n.
                            i %= LOG_BASE;
                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;
                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
                        }
                    }
                    r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;
                        if (r) {
                            // Convert sd to decimal places.
                            sd -= x.e + 1;
                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else // Zero.
                        xc[0] = x.e = 0;
                        return x;
                    }
                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];
                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }
                    // Round up?
                    if (r) {
                        for(;;)// If the digit to be rounded up is in the first element of xc...
                        if (ni == 0) {
                            // i will be the length of xc[0] before k is added.
                            for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                            j = xc[0] += k;
                            for(k = 1; j >= 10; j /= 10, k++);
                            // if i != k the length has increased.
                            if (i != k) {
                                x.e++;
                                if (xc[0] == BASE) xc[0] = 1;
                            }
                            break;
                        } else {
                            xc[ni] += k;
                            if (xc[ni] != BASE) break;
                            xc[ni--] = 0;
                            k = 1;
                        }
                    }
                    // Remove trailing zeros.
                    for(i = xc.length; xc[--i] === 0; xc.pop());
                }
                // Overflow? Infinity.
                if (x.e > MAX_EXP) x.c = x.e = null;
                else if (x.e < MIN_EXP) x.c = [
                    x.e = 0
                ];
            }
            return x;
        }
        function valueOf(n) {
            var str, e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
            return n.s < 0 ? "-" + str : str;
        }
        // PROTOTYPE/INSTANCE METHODS
        /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */ P.absoluteValue = P.abs = function() {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };
        /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */ P.comparedTo = function(y, b) {
            return compare(this, new BigNumber(y, b));
        };
        /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
                intCheck(dp, 0, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
            if (n < 0) n = 0;
            return n;
        };
        /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */ P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber(y, b), 0, 1);
        };
        /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */ P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber(n);
            // Allow NaN and ±Infinity, but not other non-integers.
            if (n.c && !n.isInteger()) throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
            if (m != null) m = new BigNumber(m);
            // Exponent of MAX_SAFE_INTEGER is 15.
            nIsBig = n.e > 14;
            // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
                // The sign of the result of pow when x is negative depends on the evenness of n.
                // If +n overflows to ±Infinity, the evenness of n would be not be known.
                y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
                return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
                // x % m returns NaN if abs(m) is zero, or m is NaN.
                if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
                isModExp = !nIsNeg && x.isInteger() && m.isInteger();
                if (isModExp) x = x.mod(m);
            // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
            // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
                // If x is negative and n is odd, k = -0, else k = 0.
                k = x.s < 0 && isOdd(n) ? -0 : 0;
                // If x >= 1, k = ±Infinity.
                if (x.e > -1) k = 1 / k;
                // If n is negative return ±0, else return ±Infinity.
                return new BigNumber(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
            if (nIsBig) {
                half = new BigNumber(0.5);
                if (nIsNeg) n.s = 1;
                nIsOdd = isOdd(n);
            } else {
                i = Math.abs(+valueOf(n));
                nIsOdd = i % 2;
            }
            y = new BigNumber(ONE);
            // Performs 54 loop iterations for n of 9007199254740991.
            for(;;){
                if (nIsOdd) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (isModExp) y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
                if (i) {
                    i = mathfloor(i / 2);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                } else {
                    n = n.times(half);
                    round(n, n.e + 1, 1);
                    if (n.e > 14) nIsOdd = isOdd(n);
                    else {
                        i = +valueOf(n);
                        if (i === 0) break;
                        nIsOdd = i % 2;
                    }
                }
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (isModExp) x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */ P.integerValue = function(rm) {
            var n = new BigNumber(this);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
        };
        /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber(y, b)) === 0;
        };
        /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */ P.isFinite = function() {
            return !!this.c;
        };
        /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber(y, b)) > 0;
        };
        /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */ P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber(y, b)) < 0;
        };
        /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */ P.isNaN = function() {
            return !this.s;
        };
        /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */ P.isNegative = function() {
            return this.s < 0;
        };
        /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */ P.isPositive = function() {
            return this.s > 0;
        };
        /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */ P.isZero = function() {
            return !!this.c && this.c[0] == 0;
        };
        /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */ P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                // Either zero?
                if (!xc[0] || !yc[0]) // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Determine which is the bigger number.
            if (a = xe - ye) {
                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }
                t.reverse();
                // Prepend zeros to equalise exponents.
                for(b = a; b--; t.push(0));
                t.reverse();
            } else {
                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                for(a = b = 0; b < j; b++)if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
            // x < y? Point xc to the array of the bigger number.
            if (xLTy) {
                t = xc;
                xc = yc;
                yc = t;
                y.s = -y.s;
            }
            b = (j = yc.length) - (i = xc.length);
            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for(; b--; xc[i++] = 0);
            b = BASE - 1;
            // Subtract yc from xc.
            for(; j > a;){
                if (xc[--j] < yc[j]) {
                    for(i = j; i && !xc[--i]; xc[i] = b);
                    --xc[i];
                    xc[j] += BASE;
                }
                xc[j] -= yc[j];
            }
            // Remove leading zeros and adjust exponent accordingly.
            for(; xc[0] == 0; xc.splice(0, 1), --ye);
            // Zero?
            if (!xc[0]) {
                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [
                    y.e = 0
                ];
                return y;
            }
            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };
        /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */ P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber(y, b);
            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) return new BigNumber(NaN);
            else if (!y.c || x.c && !x.c[0]) return new BigNumber(x);
            if (MODULO_MODE == 9) {
                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else q = div(x, y, 0, MODULO_MODE);
            y = x.minus(q.times(y));
            // To match JavaScript %, ensure sign of zero is sign of dividend.
            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
        };
        /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */ P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {
                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) y.c = y.e = y.s = null;
                else {
                    y.s *= x.s;
                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) y.c = y.e = null;
                    else {
                        y.c = [
                            0
                        ];
                        y.e = 0;
                    }
                }
                return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) {
                zc = xc;
                xc = yc;
                yc = zc;
                i = xcL;
                xcL = ycL;
                ycL = i;
            }
            // Initialise the result array with zeros.
            for(i = xcL + ycL, zc = []; i--; zc.push(0));
            base = BASE;
            sqrtBase = SQRT_BASE;
            for(i = ycL; --i >= 0;){
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;
                for(k = xcL, j = i + k; j > i;){
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }
                zc[j] = c;
            }
            if (c) ++e;
            else zc.splice(0, 1);
            return normalise(y, zc, e);
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */ P.negated = function() {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };
        /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */ P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);
                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }
                t.reverse();
                for(; a--; t.push(0));
                t.reverse();
            }
            a = xc.length;
            b = yc.length;
            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) {
                t = yc;
                yc = xc;
                xc = t;
                b = a;
            }
            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for(a = 0; b;){
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
                xc = [
                    a
                ].concat(xc);
                ++ye;
            }
            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };
        /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
                intCheck(sd, 1, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), sd, rm);
            }
            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
                // Subtract the number of trailing zeros of the last element.
                for(; v % 10 == 0; v /= 10, n--);
                // Add the number of digits of the first element.
                for(v = c[0]; v >= 10; v /= 10, n++);
            }
            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */ P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times("1e" + k);
        };
        /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber("0.5");
            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            // Initial estimate.
            s = Math.sqrt(+valueOf(x));
            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += "0";
                s = Math.sqrt(+n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                if (s == 1 / 0) n = "5e" + e;
                else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf("e") + 1) + e;
                }
                r = new BigNumber(n);
            } else r = new BigNumber(s + "");
            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;
                // Newton-Raphson iteration.
                for(;;){
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));
                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);
                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == "9999" || !rep && n == "4999") {
                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);
                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }
                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {
                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }
                            break;
                        }
                    }
                }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toExponential = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp++;
            }
            return format(this, dp, rm, 1);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toFixed = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */ P.toFormat = function(dp, rm, format) {
            var str, x = this;
            if (format == null) {
                if (dp != null && rm && typeof rm == "object") {
                    format = rm;
                    rm = null;
                } else if (dp && typeof dp == "object") {
                    format = dp;
                    dp = rm = null;
                } else format = FORMAT;
            } else if (typeof format != "object") throw Error(bignumberError + "Argument not an object: " + format);
            str = x.toFixed(dp, rm);
            if (x.c) {
                var i, arr = str.split("."), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                if (g2) {
                    i = g1;
                    g1 = g2;
                    g2 = i;
                    len -= i;
                }
                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);
                    for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = "-" + intPart;
                }
                str = fractionPart ? intPart + (format.decimalSeparator || "") + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format.fractionGroupSeparator || "")) : fractionPart) : intPart;
            }
            return (format.prefix || "") + str + (format.suffix || "");
        };
        /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */ P.toFraction = function(md) {
            var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
                n = new BigNumber(md);
                // Throw if md is less than one or is not an integer, unless it is Infinity.
                if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
            if (!xc) return new BigNumber(x);
            d = new BigNumber(ONE);
            n1 = d0 = new BigNumber(ONE);
            d1 = n0 = new BigNumber(ONE);
            s = coeffToString(xc);
            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);
            // n0 = d1 = 0
            n0.c[0] = 0;
            for(;;){
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.comparedTo(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }
            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            // Determine which fraction is closer to x, n0/d0 or n1/d1
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
                n1,
                d1
            ] : [
                n0,
                d0
            ];
            MAX_EXP = exp;
            return r;
        };
        /*
     * Return the value of this BigNumber converted to a number primitive.
     */ P.toNumber = function() {
            return +valueOf(this);
        };
        /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.toPrecision = function(sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
        };
        /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */ P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            // Infinity or NaN?
            if (e === null) {
                if (s) {
                    str = "Infinity";
                    if (s < 0) str = "-" + str;
                } else str = "NaN";
            } else {
                if (b == null) str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
                else if (b === 10 && alphabetHasNormalDecimalDigits) {
                    n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                    str = toFixedPoint(coeffToString(n.c), n.e, "0");
                } else {
                    intCheck(b, 2, ALPHABET.length, "Base");
                    str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
                }
                if (s < 0 && n.c[0]) str = "-" + str;
            }
            return str;
        };
        /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */ P.valueOf = P.toJSON = function() {
            return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null) BigNumber.set(configObject);
        return BigNumber;
    }
    // PRIVATE HELPER FUNCTIONS
    // These functions don't need access to variables,
    // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }
    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + "";
        for(; i < j;){
            s = a[i++] + "";
            z = LOG_BASE - s.length;
            for(; z--; s = "0" + s);
            r += s;
        }
        // Determine trailing zeros.
        for(j = r.length; r.charCodeAt(--j) === 48;);
        return r.slice(0, j + 1 || 1);
    }
    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        // Either NaN?
        if (!i || !j) return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;
        // Signs differ?
        if (i != j) return i;
        a = i < 0;
        b = k == l;
        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        // Compare digit by digit.
        for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */ function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
    }
    // Assumes finite n.
    function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
    }
    function toFixedPoint(str, e, z) {
        var len, zs;
        // Negative exponent?
        if (e < 0) {
            // Prepend zeros.
            for(zs = z + "."; ++e; zs += z);
            str = zs + str;
        // Positive exponent
        } else {
            len = str.length;
            // Append zeros.
            if (++e > len) {
                for(zs = z, e -= len; --e; zs += z);
                str += zs;
            } else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
        }
        return str;
    }
    // EXPORT
    BigNumber = clone();
    BigNumber["default"] = BigNumber.BigNumber = BigNumber;
    // AMD.
    if (typeof define == "function" && define.amd) define(function() {
        return BigNumber;
    });
    else if (0, module.exports) module.exports = BigNumber;
    else {
        if (!globalObject) globalObject = typeof self != "undefined" && self ? self : window;
        globalObject.BigNumber = BigNumber;
    }
})(this);

},{}],"lqU6b":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("ebbec3c49e6967f7"), exports);
__exportStar(require("efe8a2f57f57a5bc"), exports);
__exportStar(require("2c774242db380614"), exports);
__exportStar(require("6ae886b4e55edc54"), exports);
__exportStar(require("cb9b2f92a7d6ce68"), exports);
__exportStar(require("16012ce78421d839"), exports);
__exportStar(require("c3de5220294470df"), exports);
__exportStar(require("10e7a7bc5eb984ca"), exports);

},{"ebbec3c49e6967f7":"JnA1j","efe8a2f57f57a5bc":"n5Tzh","2c774242db380614":"3gCow","6ae886b4e55edc54":"EqN37","cb9b2f92a7d6ce68":"kX1I1","16012ce78421d839":"2rB1U","c3de5220294470df":"a65VV","10e7a7bc5eb984ca":"d6e4U"}],"JnA1j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddressEventNotificationChain = void 0;
var AddressEventNotificationChain;
(function(AddressEventNotificationChain) {
    AddressEventNotificationChain["ETH"] = "ETH";
    AddressEventNotificationChain["SOL"] = "SOL";
    AddressEventNotificationChain["XRP"] = "XRP";
    AddressEventNotificationChain["MATIC"] = "MATIC";
    AddressEventNotificationChain["CELO"] = "CELO";
    AddressEventNotificationChain["KLAY"] = "KLAY";
    AddressEventNotificationChain["BTC"] = "BTC";
    AddressEventNotificationChain["LTC"] = "LTC";
    AddressEventNotificationChain["BCH"] = "BCH";
    AddressEventNotificationChain["DOGE"] = "DOGE";
    AddressEventNotificationChain["TRON"] = "TRON";
    AddressEventNotificationChain["BSC"] = "BSC";
    AddressEventNotificationChain["TEZOS"] = "TEZOS";
    AddressEventNotificationChain["EON"] = "EON";
    AddressEventNotificationChain["CHZ"] = "CHZ";
})(AddressEventNotificationChain = exports.AddressEventNotificationChain || (exports.AddressEventNotificationChain = {}));

},{}],"n5Tzh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chain = void 0;
var Chain;
(function(Chain) {
    Chain["Ethereum"] = "Ethereum";
    Chain["Solana"] = "Solana";
    Chain["Polygon"] = "Polygon";
    Chain["Celo"] = "Celo";
    Chain["Klaytn"] = "Klaytn";
    Chain["Bitcoin"] = "Bitcoin";
    Chain["Litecoin"] = "Litecoin";
    Chain["BitcoinCash"] = "BitcoinCash";
    Chain["Dogecoin"] = "Dogecoin";
    Chain["Tron"] = "Tron";
    Chain["BinanceSmartChain"] = "BinanceSmartChain";
})(Chain = exports.Chain || (exports.Chain = {}));

},{}],"3gCow":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"EqN37":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"kX1I1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NATIVE_PREFIX_MAPPING = exports.MAPPED_NETWORK = exports.MappedNetwork = exports.isSameGetBlockNetwork = exports.isBnbLoadBalancerNetwork = exports.isNativeEvmLoadBalancerNetwork = exports.isXrpLoadBalancerNetwork = exports.isEosLoadBalancerNetwork = exports.isTronLoadBalancerNetwork = exports.isEvmArchiveNonArchiveBeaconLoadBalancerNetwork = exports.isEvmArchiveNonArchiveLoadBalancerNetwork = exports.isEvmLoadBalancerNetwork = exports.isLoadBalancerNetwork = exports.isEosNetwork = exports.isTronNetwork = exports.isSolanaNetwork = exports.isDataApiUtxoEnabledNetwork = exports.isDataApiEnabledNetwork = exports.isDataApiEvmEnabledNetwork = exports.isXrpNetwork = exports.isUtxoLoadBalancerNetwork = exports.isUtxoEstimateFeeNetwork = exports.isUtxoLoadBalancerEstimateFeeNetwork = exports.isUtxoBasedNetwork = exports.isEvmBasedNetwork = exports.EOS_NETWORKS = exports.TRON_NETWORKS = exports.EVM_ARCHIVE_NON_ARCHIVE_BEACON_LOAD_BALANCER_NETWORKS = exports.EVM_ARCHIVE_NON_ARCHIVE_LOAD_BALANCER_NETWORKS = exports.LOAD_BALANCER_NETWORKS = exports.BNB_LOAD_BALANCER_NETWORKS = exports.SOLANA_NETWORKS = exports.NATIVE_EVM_LOAD_BALANCER_NETWORKS = exports.XRP_LOAD_BALANCER_NETWORKS = exports.EOS_LOAD_BALANCER_NETWORKS = exports.TRON_LOAD_BALANCER_NETWORKS = exports.EVM_LOAD_BALANCER_NETWORKS = exports.UTXO_LOAD_BALANCER_NETWORKS = exports.DATA_API_NETWORKS = exports.DATA_API_EVM_NETWORKS = exports.DATA_API_UTXO_NETWORKS = exports.UTXO_ESTIMATE_FEE_NETWORKS = exports.UTXO_LOAD_BALANCER_ESTIMATE_FEE_NETWORKS = exports.UTXO_BASED_NETWORKS = exports.EVM_BASED_NETWORKS = exports.Network = void 0;
var Network;
(function(Network) {
    // Mainnets
    Network["ALGORAND"] = "algorand-mainnet";
    Network["ARBITRUM_NOVA"] = "arb-nova-mainnet";
    Network["ARBITRUM_ONE"] = "arbitrum-one-mainnet";
    Network["AURORA"] = "aurora-mainnet";
    Network["AVALANCHE_C"] = "avalanche-c-mainnet";
    Network["AVALANCHE_P"] = "avax-p-mainnet";
    Network["AVALANCHE_X"] = "avax-x-mainnet";
    Network["BINANCE_SMART_CHAIN"] = "bsc-mainnet";
    Network["BNB"] = "bnb-beacon-chain-mainnet";
    Network["BITCOIN"] = "bitcoin-mainnet";
    Network["BITCOIN_CASH"] = "bitcoin-cash-mainnet";
    Network["CARDANO"] = "cardano-mainnet";
    Network["CELO"] = "celo-mainnet";
    Network["CRONOS"] = "cro-mainnet";
    Network["DOGECOIN"] = "doge-mainnet";
    Network["EOS"] = "eos-mainnet";
    Network["HORIZEN_EON"] = "eon-mainnet";
    Network["CHILIZ"] = "chiliz-mainnet";
    Network["ETHEREUM"] = "ethereum-mainnet";
    Network["ETHEREUM_CLASSIC"] = "ethereum-classic-mainnet";
    Network["FANTOM"] = "fantom-mainnet";
    Network["FLARE"] = "flare-mainnet";
    Network["FLOW"] = "flow-mainnet";
    Network["GNOSIS"] = "gno-mainnet";
    Network["HAQQ"] = "haqq-mainnet";
    Network["HARMONY_ONE_SHARD_0"] = "one-mainnet-s0";
    Network["KLAYTN"] = "klaytn-mainnet";
    Network["KUCOIN"] = "kcs-mainnet";
    Network["LITECOIN"] = "litecoin-mainnet";
    Network["MULTIVERSX"] = "egld-mainnet";
    Network["NEAR"] = "near-mainnet";
    Network["OASIS"] = "oasis-mainnet";
    Network["OPTIMISM"] = "optimism-mainnet";
    Network["PALM"] = "palm-mainnet";
    Network["POLYGON"] = "polygon-mainnet";
    Network["POLKADOT"] = "dot-mainnet";
    Network["RSK"] = "rsk-mainnet";
    Network["SOLANA"] = "solana-mainnet";
    Network["STELLAR"] = "stellar-mainnet";
    Network["TEZOS"] = "tezos-mainnet";
    Network["TRON"] = "tron-mainnet";
    Network["VECHAIN"] = "vechain-mainnet";
    Network["XDC"] = "xdc-mainnet";
    Network["XRP"] = "ripple-mainnet";
    Network["ZCASH"] = "zcash-mainnet";
    Network["ZILLIQA"] = "zilliqa-mainnet";
    // Testnets
    Network["ALGORAND_TESTNET"] = "algorand-testnet";
    Network["ARBITRUM_NOVA_TESTNET"] = "arb-testnet";
    Network["AURORA_TESTNET"] = "aurora-testnet";
    Network["AVALANCHE_C_TESTNET"] = "avax-testnet";
    Network["AVALANCHE_P_TESTNET"] = "avax-p-testnet";
    Network["AVALANCHE_X_TESTNET"] = "avax-x-testnet";
    Network["BINANCE_SMART_CHAIN_TESTNET"] = "bsc-testnet";
    Network["BITCOIN_TESTNET"] = "bitcoin-testnet";
    Network["BITCOIN_CASH_TESTNET"] = "bch-testnet";
    Network["CARDANO_PREPROD"] = "cardano-preprod";
    Network["CELO_ALFAJORES"] = "celo-testnet";
    Network["CRONOS_TESTNET"] = "cro-testnet";
    Network["DOGECOIN_TESTNET"] = "doge-testnet";
    Network["ETHEREUM_GOERLI"] = "ethereum-goerli";
    Network["ETHEREUM_SEPOLIA"] = "ethereum-sepolia";
    Network["ETHEREUM_HOLESKY"] = "ethereum-holesky";
    Network["EOS_TESTNET"] = "eos-testnet";
    Network["FANTOM_TESTNET"] = "fantom-testnet";
    Network["FLARE_COSTON"] = "flare-coston";
    Network["FLARE_COSTON_2"] = "flare-coston2";
    Network["FLARE_SONGBIRD"] = "flare-songbird";
    Network["FLOW_TESTNET"] = "flow-testnet";
    Network["GNOSIS_TESTNET"] = "gno-testnet";
    Network["HAQQ_TESTNET"] = "haqq-testnet";
    Network["HARMONY_ONE_TESTNET_SHARD_0"] = "one-testnet-s0";
    Network["HORIZEN_EON_GOBI"] = "horizen-eon-gobi";
    Network["KLAYTN_BAOBAB"] = "klaytn-baobab";
    Network["KUCOIN_TESTNET"] = "kcs-testnet";
    Network["LITECOIN_TESTNET"] = "litecoin-testnet";
    Network["MULTIVERSX_TESTNET"] = "egld-testnet";
    Network["NEAR_TESTNET"] = "near-testnet";
    Network["OASIS_TESTNET"] = "oasis-testnet";
    Network["OPTIMISM_TESTNET"] = "optimism-testnet";
    Network["PALM_TESTNET"] = "palm-testnet";
    Network["POLYGON_MUMBAI"] = "polygon-mumbai";
    Network["POLKADOT_TESTNET"] = "dot-testnet";
    Network["RSK_TESTNET"] = "rsk-testnet";
    Network["SOLANA_DEVNET"] = "solana-devnet";
    Network["STELLAR_TESTNET"] = "stellar-testnet";
    Network["TEZOS_TESTNET"] = "tezos-testnet";
    Network["TRON_SHASTA"] = "tron-testnet";
    Network["VECHAIN_TESTNET"] = "vechain-testnet";
    Network["XDC_TESTNET"] = "xdc-testnet";
    Network["XRP_TESTNET"] = "ripple-testnet";
    Network["ZCASH_TESTNET"] = "zcash-testnet";
    Network["ZILLIQA_TESTNET"] = "zilliqa-testnet";
})(Network = exports.Network || (exports.Network = {}));
exports.EVM_BASED_NETWORKS = [
    Network.ETHEREUM,
    Network.ETHEREUM_SEPOLIA,
    Network.ETHEREUM_CLASSIC,
    Network.ETHEREUM_GOERLI,
    Network.ETHEREUM_HOLESKY,
    Network.AVALANCHE_C,
    Network.AVALANCHE_C_TESTNET,
    Network.POLYGON,
    Network.POLYGON_MUMBAI,
    Network.GNOSIS,
    Network.GNOSIS_TESTNET,
    Network.FANTOM,
    Network.FANTOM_TESTNET,
    Network.AURORA,
    Network.AURORA_TESTNET,
    Network.CELO,
    Network.CELO_ALFAJORES,
    Network.BINANCE_SMART_CHAIN_TESTNET,
    Network.VECHAIN,
    Network.VECHAIN_TESTNET,
    Network.XDC,
    Network.XDC_TESTNET,
    Network.PALM,
    Network.PALM_TESTNET,
    Network.CRONOS,
    Network.CRONOS_TESTNET,
    Network.KUCOIN,
    Network.KUCOIN_TESTNET,
    Network.OASIS,
    Network.OASIS_TESTNET,
    Network.OPTIMISM,
    Network.OPTIMISM_TESTNET,
    Network.HARMONY_ONE_SHARD_0,
    Network.HARMONY_ONE_TESTNET_SHARD_0,
    Network.KLAYTN,
    Network.KLAYTN_BAOBAB,
    Network.FLARE_COSTON,
    Network.FLARE_COSTON_2,
    Network.FLARE,
    Network.FLARE_SONGBIRD,
    Network.HAQQ,
    Network.HAQQ_TESTNET,
    Network.ARBITRUM_NOVA,
    Network.ARBITRUM_NOVA_TESTNET,
    Network.ARBITRUM_ONE,
    Network.BINANCE_SMART_CHAIN,
    Network.HORIZEN_EON,
    Network.HORIZEN_EON_GOBI,
    Network.CHILIZ
];
exports.UTXO_BASED_NETWORKS = [
    Network.BITCOIN,
    Network.BITCOIN_TESTNET,
    Network.BITCOIN_CASH,
    Network.BITCOIN_CASH_TESTNET,
    Network.LITECOIN,
    Network.LITECOIN_TESTNET,
    Network.ZCASH,
    Network.ZCASH_TESTNET,
    Network.DOGECOIN,
    Network.DOGECOIN_TESTNET
];
exports.UTXO_LOAD_BALANCER_ESTIMATE_FEE_NETWORKS = [
    Network.BITCOIN_CASH
];
exports.UTXO_ESTIMATE_FEE_NETWORKS = [
    Network.BITCOIN_CASH_TESTNET
];
exports.DATA_API_UTXO_NETWORKS = [
    Network.BITCOIN,
    Network.BITCOIN_TESTNET,
    Network.LITECOIN,
    Network.LITECOIN_TESTNET,
    Network.CARDANO,
    Network.CARDANO_PREPROD,
    Network.DOGECOIN,
    Network.DOGECOIN_TESTNET
];
exports.DATA_API_EVM_NETWORKS = [
    Network.ETHEREUM,
    Network.ETHEREUM_SEPOLIA,
    Network.ETHEREUM_GOERLI,
    Network.POLYGON,
    Network.POLYGON_MUMBAI,
    Network.BINANCE_SMART_CHAIN,
    Network.BINANCE_SMART_CHAIN_TESTNET,
    Network.CELO,
    Network.CELO_ALFAJORES,
    Network.HORIZEN_EON
];
exports.DATA_API_NETWORKS = [
    ...exports.DATA_API_EVM_NETWORKS,
    Network.TEZOS
];
exports.UTXO_LOAD_BALANCER_NETWORKS = [
    Network.BITCOIN,
    Network.BITCOIN_TESTNET,
    Network.LITECOIN,
    Network.LITECOIN_TESTNET,
    Network.DOGECOIN,
    Network.DOGECOIN_TESTNET,
    Network.ZCASH,
    Network.BITCOIN_CASH
];
exports.EVM_LOAD_BALANCER_NETWORKS = [
    Network.FLARE,
    Network.FLARE_COSTON,
    Network.FLARE_COSTON_2,
    Network.FLARE_SONGBIRD,
    Network.HAQQ,
    Network.HAQQ_TESTNET,
    Network.ETHEREUM,
    Network.ETHEREUM_SEPOLIA,
    Network.ETHEREUM_HOLESKY,
    Network.POLYGON,
    Network.POLYGON_MUMBAI,
    Network.OPTIMISM,
    Network.OPTIMISM_TESTNET,
    Network.HORIZEN_EON,
    Network.HORIZEN_EON_GOBI,
    Network.ARBITRUM_ONE,
    Network.BINANCE_SMART_CHAIN,
    Network.CHILIZ,
    Network.ETHEREUM_CLASSIC,
    Network.AVALANCHE_C,
    Network.CELO,
    Network.CELO_ALFAJORES
];
exports.TRON_LOAD_BALANCER_NETWORKS = [
    Network.TRON
];
exports.EOS_LOAD_BALANCER_NETWORKS = [
    Network.EOS
];
exports.XRP_LOAD_BALANCER_NETWORKS = [
    Network.XRP,
    Network.XRP_TESTNET
];
exports.NATIVE_EVM_LOAD_BALANCER_NETWORKS = [
    Network.KLAYTN,
    Network.KLAYTN_BAOBAB
];
exports.SOLANA_NETWORKS = [
    Network.SOLANA,
    Network.SOLANA_DEVNET
];
exports.BNB_LOAD_BALANCER_NETWORKS = [
    Network.BNB
];
exports.LOAD_BALANCER_NETWORKS = [
    ...exports.UTXO_LOAD_BALANCER_NETWORKS,
    ...exports.EVM_LOAD_BALANCER_NETWORKS,
    ...exports.TRON_LOAD_BALANCER_NETWORKS,
    ...exports.EOS_LOAD_BALANCER_NETWORKS,
    ...exports.XRP_LOAD_BALANCER_NETWORKS,
    ...exports.NATIVE_EVM_LOAD_BALANCER_NETWORKS,
    ...exports.SOLANA_NETWORKS,
    ...exports.BNB_LOAD_BALANCER_NETWORKS
];
exports.EVM_ARCHIVE_NON_ARCHIVE_LOAD_BALANCER_NETWORKS = [
    Network.ETHEREUM,
    Network.ETHEREUM_SEPOLIA,
    Network.HAQQ,
    Network.HAQQ_TESTNET,
    Network.POLYGON,
    Network.POLYGON_MUMBAI,
    Network.CHILIZ
];
exports.EVM_ARCHIVE_NON_ARCHIVE_BEACON_LOAD_BALANCER_NETWORKS = [
    Network.ETHEREUM,
    Network.ETHEREUM_SEPOLIA,
    Network.ETHEREUM_HOLESKY
];
exports.TRON_NETWORKS = [
    Network.TRON,
    Network.TRON_SHASTA
];
exports.EOS_NETWORKS = [
    Network.EOS,
    Network.EOS_TESTNET
];
const isEvmBasedNetwork = (network)=>exports.EVM_BASED_NETWORKS.includes(network);
exports.isEvmBasedNetwork = isEvmBasedNetwork;
const isUtxoBasedNetwork = (network)=>exports.UTXO_BASED_NETWORKS.includes(network);
exports.isUtxoBasedNetwork = isUtxoBasedNetwork;
const isUtxoLoadBalancerEstimateFeeNetwork = (network)=>exports.UTXO_LOAD_BALANCER_ESTIMATE_FEE_NETWORKS.includes(network);
exports.isUtxoLoadBalancerEstimateFeeNetwork = isUtxoLoadBalancerEstimateFeeNetwork;
const isUtxoEstimateFeeNetwork = (network)=>exports.UTXO_ESTIMATE_FEE_NETWORKS.includes(network);
exports.isUtxoEstimateFeeNetwork = isUtxoEstimateFeeNetwork;
const isUtxoLoadBalancerNetwork = (network)=>exports.UTXO_LOAD_BALANCER_NETWORKS.includes(network);
exports.isUtxoLoadBalancerNetwork = isUtxoLoadBalancerNetwork;
const isXrpNetwork = (network)=>[
        Network.XRP,
        Network.XRP_TESTNET
    ].includes(network);
exports.isXrpNetwork = isXrpNetwork;
const isDataApiEvmEnabledNetwork = (network)=>exports.DATA_API_EVM_NETWORKS.includes(network);
exports.isDataApiEvmEnabledNetwork = isDataApiEvmEnabledNetwork;
const isDataApiEnabledNetwork = (network)=>exports.DATA_API_NETWORKS.includes(network);
exports.isDataApiEnabledNetwork = isDataApiEnabledNetwork;
const isDataApiUtxoEnabledNetwork = (network)=>exports.DATA_API_UTXO_NETWORKS.includes(network);
exports.isDataApiUtxoEnabledNetwork = isDataApiUtxoEnabledNetwork;
const isSolanaNetwork = (network)=>exports.SOLANA_NETWORKS.includes(network);
exports.isSolanaNetwork = isSolanaNetwork;
const isTronNetwork = (network)=>exports.TRON_NETWORKS.includes(network);
exports.isTronNetwork = isTronNetwork;
const isEosNetwork = (network)=>exports.EOS_NETWORKS.includes(network);
exports.isEosNetwork = isEosNetwork;
const isLoadBalancerNetwork = (network)=>exports.LOAD_BALANCER_NETWORKS.includes(network);
exports.isLoadBalancerNetwork = isLoadBalancerNetwork;
const isEvmLoadBalancerNetwork = (network)=>exports.EVM_LOAD_BALANCER_NETWORKS.includes(network);
exports.isEvmLoadBalancerNetwork = isEvmLoadBalancerNetwork;
const isEvmArchiveNonArchiveLoadBalancerNetwork = (network)=>exports.EVM_ARCHIVE_NON_ARCHIVE_LOAD_BALANCER_NETWORKS.includes(network);
exports.isEvmArchiveNonArchiveLoadBalancerNetwork = isEvmArchiveNonArchiveLoadBalancerNetwork;
const isEvmArchiveNonArchiveBeaconLoadBalancerNetwork = (network)=>exports.EVM_ARCHIVE_NON_ARCHIVE_BEACON_LOAD_BALANCER_NETWORKS.includes(network);
exports.isEvmArchiveNonArchiveBeaconLoadBalancerNetwork = isEvmArchiveNonArchiveBeaconLoadBalancerNetwork;
const isTronLoadBalancerNetwork = (network)=>exports.TRON_LOAD_BALANCER_NETWORKS.includes(network);
exports.isTronLoadBalancerNetwork = isTronLoadBalancerNetwork;
const isEosLoadBalancerNetwork = (network)=>exports.EOS_LOAD_BALANCER_NETWORKS.includes(network);
exports.isEosLoadBalancerNetwork = isEosLoadBalancerNetwork;
const isXrpLoadBalancerNetwork = (network)=>exports.XRP_LOAD_BALANCER_NETWORKS.includes(network);
exports.isXrpLoadBalancerNetwork = isXrpLoadBalancerNetwork;
const isNativeEvmLoadBalancerNetwork = (network)=>exports.NATIVE_EVM_LOAD_BALANCER_NETWORKS.includes(network);
exports.isNativeEvmLoadBalancerNetwork = isNativeEvmLoadBalancerNetwork;
const isBnbLoadBalancerNetwork = (network)=>exports.BNB_LOAD_BALANCER_NETWORKS.includes(network);
exports.isBnbLoadBalancerNetwork = isBnbLoadBalancerNetwork;
const isSameGetBlockNetwork = (network)=>(0, exports.isUtxoBasedNetwork)(network) || (0, exports.isEvmBasedNetwork)(network) || (0, exports.isTronNetwork)(network) || (0, exports.isSolanaNetwork)(network);
exports.isSameGetBlockNetwork = isSameGetBlockNetwork;
var MappedNetwork;
(function(MappedNetwork) {
    MappedNetwork["HORIZEN_EON"] = "horizen-eon-mainnet";
    MappedNetwork["DOGECOIN_MAINNET"] = "dogecoin-mainnet";
    MappedNetwork["DOGECOIN_TESTNET"] = "dogecoin-testnet";
})(MappedNetwork = exports.MappedNetwork || (exports.MappedNetwork = {}));
exports.MAPPED_NETWORK = {
    [Network.HORIZEN_EON]: MappedNetwork.HORIZEN_EON,
    [Network.DOGECOIN]: MappedNetwork.DOGECOIN_MAINNET,
    [Network.DOGECOIN_TESTNET]: MappedNetwork.DOGECOIN_TESTNET
};
exports.NATIVE_PREFIX_MAPPING = {
    [Network.KLAYTN]: "klay_",
    [Network.KLAYTN_BAOBAB]: "klay_"
};

},{}],"2rB1U":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("743927d80427459b"), exports);
__exportStar(require("6c02047d41d5f278"), exports);
__exportStar(require("3b62db1860c58481"), exports);
__exportStar(require("7913cf384d794c3a"), exports);
__exportStar(require("ee8c51dff50674d8"), exports);

},{"743927d80427459b":"5zkoJ","6c02047d41d5f278":"sY8oo","3b62db1860c58481":"lJEQ2","7913cf384d794c3a":"6Qhwo","ee8c51dff50674d8":"bSdhx"}],"5zkoJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"sY8oo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransactionDetails = exports.Encoding = exports.Commitment = void 0;
var Commitment;
(function(Commitment) {
    Commitment["Processed"] = "processed";
    Commitment["Confirmed"] = "confirmed";
    Commitment["Finalized"] = "finalized";
})(Commitment = exports.Commitment || (exports.Commitment = {}));
var Encoding;
(function(Encoding) {
    Encoding["Base58"] = "base58";
    Encoding["Base64"] = "base64";
    Encoding["Base64_ZSTD"] = "base64+zstd";
    Encoding["JsonParsed"] = "jsonParsed";
})(Encoding = exports.Encoding || (exports.Encoding = {}));
var TransactionDetails;
(function(TransactionDetails) {
    TransactionDetails["Full"] = "full";
    TransactionDetails["Accounts"] = "accounts";
    TransactionDetails["Signatures"] = "signatures";
    TransactionDetails["None"] = "none";
})(TransactionDetails = exports.TransactionDetails || (exports.TransactionDetails = {}));

},{}],"lJEQ2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TronStakeTypeNumeric = exports.TronStakeType = void 0;
var TronStakeType;
(function(TronStakeType) {
    TronStakeType["BANDWIDTH"] = "BANDWIDTH";
    TronStakeType["ENERGY"] = "ENERGY";
})(TronStakeType = exports.TronStakeType || (exports.TronStakeType = {}));
var TronStakeTypeNumeric;
(function(TronStakeTypeNumeric) {
    TronStakeTypeNumeric[TronStakeTypeNumeric["BANDWIDTH"] = 0] = "BANDWIDTH";
    TronStakeTypeNumeric[TronStakeTypeNumeric["ENERGY"] = 1] = "ENERGY";
})(TronStakeTypeNumeric = exports.TronStakeTypeNumeric || (exports.TronStakeTypeNumeric = {}));

},{}],"6Qhwo":[function(require,module,exports) {
"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"bSdhx":[function(require,module,exports) {
"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"a65VV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"d6e4U":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("2eae4a61c7fca989"), exports);
__exportStar(require("2e3f3251d4bafc49"), exports);
__exportStar(require("5052fbbe1d27c94d"), exports);

},{"2eae4a61c7fca989":"7gQAM","2e3f3251d4bafc49":"k1Q9E","5052fbbe1d27c94d":"k4wCg"}],"7gQAM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"k1Q9E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"k4wCg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"luFgs":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("37b747e8ce2cae2a"), exports);
__exportStar(require("4af2676da828a7ee"), exports);
__exportStar(require("a0d31e2b220283de"), exports);
__exportStar(require("367077bca18f7db"), exports);
__exportStar(require("51ba21e96a62694a"), exports);

},{"37b747e8ce2cae2a":"avIIT","4af2676da828a7ee":"5nyqK","a0d31e2b220283de":"47B7e","367077bca18f7db":"aFqBk","51ba21e96a62694a":"w7yjP"}],"avIIT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Constant = void 0;
const dto_1 = require("76b5667fdca2baeb");
exports.Constant = {
    TATUM_API_URL: {
        V3: "https://api.tatum.io/v3/",
        V4: "https://api.tatum.io/v4/"
    },
    NETWORK: {
        ChainId: {
            [dto_1.Network.ETHEREUM]: 1,
            [dto_1.Network.ETHEREUM_SEPOLIA]: 11155111,
            [dto_1.Network.ETHEREUM_CLASSIC]: 61,
            [dto_1.Network.ETHEREUM_GOERLI]: 5,
            [dto_1.Network.ETHEREUM_HOLESKY]: 17000,
            [dto_1.Network.AVALANCHE_C]: 43114,
            [dto_1.Network.AVALANCHE_C_TESTNET]: 43113,
            [dto_1.Network.POLYGON]: 137,
            [dto_1.Network.POLYGON_MUMBAI]: 80001,
            [dto_1.Network.GNOSIS]: 100,
            [dto_1.Network.FANTOM]: 250,
            [dto_1.Network.FANTOM_TESTNET]: 4002,
            [dto_1.Network.AURORA]: 1313161554,
            [dto_1.Network.AURORA_TESTNET]: 1313161555,
            [dto_1.Network.CELO]: 42220,
            [dto_1.Network.CELO_ALFAJORES]: 44787,
            [dto_1.Network.BINANCE_SMART_CHAIN_TESTNET]: 97,
            [dto_1.Network.PALM]: 11297108109,
            [dto_1.Network.PALM_TESTNET]: 11297108099,
            [dto_1.Network.CRONOS]: 25,
            [dto_1.Network.CRONOS_TESTNET]: 338,
            [dto_1.Network.KUCOIN]: 321,
            [dto_1.Network.KUCOIN_TESTNET]: 322,
            [dto_1.Network.OASIS]: 42262,
            [dto_1.Network.OASIS_TESTNET]: 42261,
            [dto_1.Network.OPTIMISM]: 10,
            [dto_1.Network.HARMONY_ONE_SHARD_0]: 1666600000,
            [dto_1.Network.HARMONY_ONE_TESTNET_SHARD_0]: 1666700000,
            [dto_1.Network.KLAYTN]: 8217,
            [dto_1.Network.KLAYTN_BAOBAB]: 1001,
            [dto_1.Network.FLARE_COSTON]: 16,
            [dto_1.Network.FLARE_COSTON_2]: 114,
            [dto_1.Network.FLARE]: 14,
            [dto_1.Network.FLARE_SONGBIRD]: 19,
            [dto_1.Network.HAQQ]: 11235,
            [dto_1.Network.HAQQ_TESTNET]: 54211,
            [dto_1.Network.ARBITRUM_NOVA]: 42170,
            [dto_1.Network.ARBITRUM_NOVA_TESTNET]: 421613,
            [dto_1.Network.ARBITRUM_ONE]: 42161,
            [dto_1.Network.BINANCE_SMART_CHAIN]: 56,
            [dto_1.Network.HORIZEN_EON]: 7332,
            [dto_1.Network.HORIZEN_EON_GOBI]: 1663,
            [dto_1.Network.CHILIZ]: 88888,
            [dto_1.Network.GNOSIS_TESTNET]: 10200,
            [dto_1.Network.VECHAIN]: 100009,
            [dto_1.Network.VECHAIN_TESTNET]: 100010,
            [dto_1.Network.XDC]: 50,
            [dto_1.Network.XDC_TESTNET]: 51,
            [dto_1.Network.OPTIMISM_TESTNET]: 420
        },
        ChainMapInverse: {
            [dto_1.AddressEventNotificationChain.ETH]: dto_1.Chain.Ethereum,
            [dto_1.AddressEventNotificationChain.SOL]: dto_1.Chain.Solana,
            [dto_1.AddressEventNotificationChain.MATIC]: dto_1.Chain.Polygon,
            [dto_1.AddressEventNotificationChain.CELO]: dto_1.Chain.Celo,
            [dto_1.AddressEventNotificationChain.KLAY]: dto_1.Chain.Klaytn,
            [dto_1.AddressEventNotificationChain.BTC]: dto_1.Chain.Bitcoin,
            [dto_1.AddressEventNotificationChain.LTC]: dto_1.Chain.Litecoin,
            [dto_1.AddressEventNotificationChain.BCH]: dto_1.Chain.BitcoinCash,
            [dto_1.AddressEventNotificationChain.DOGE]: dto_1.Chain.Dogecoin,
            [dto_1.AddressEventNotificationChain.TRON]: dto_1.Chain.Tron,
            [dto_1.AddressEventNotificationChain.BSC]: dto_1.Chain.BinanceSmartChain
        }
    },
    DECIMALS: {
        [dto_1.Network.BITCOIN]: 8,
        [dto_1.Network.BITCOIN_TESTNET]: 8,
        [dto_1.Network.MULTIVERSX]: 18,
        [dto_1.Network.MULTIVERSX_TESTNET]: 18,
        [dto_1.Network.NEAR]: 24,
        [dto_1.Network.NEAR_TESTNET]: 24,
        [dto_1.Network.BITCOIN_CASH]: 8,
        [dto_1.Network.BITCOIN_CASH_TESTNET]: 8,
        [dto_1.Network.LITECOIN]: 8,
        [dto_1.Network.LITECOIN_TESTNET]: 8,
        [dto_1.Network.DOGECOIN]: 8,
        [dto_1.Network.DOGECOIN_TESTNET]: 8,
        [dto_1.Network.ZCASH]: 8,
        [dto_1.Network.ZCASH_TESTNET]: 8,
        [dto_1.Network.ETHEREUM]: 18,
        [dto_1.Network.ETHEREUM_SEPOLIA]: 18,
        [dto_1.Network.ETHEREUM_GOERLI]: 18,
        [dto_1.Network.ETHEREUM_HOLESKY]: 18,
        [dto_1.Network.POLYGON]: 18,
        [dto_1.Network.POLYGON_MUMBAI]: 18,
        [dto_1.Network.CELO]: 18,
        [dto_1.Network.CELO_ALFAJORES]: 18,
        [dto_1.Network.SOLANA]: 9,
        [dto_1.Network.SOLANA_DEVNET]: 9,
        [dto_1.Network.XRP]: 6,
        [dto_1.Network.XRP_TESTNET]: 6,
        [dto_1.Network.KLAYTN]: 18,
        [dto_1.Network.KLAYTN_BAOBAB]: 18,
        [dto_1.Network.TRON]: 6,
        [dto_1.Network.TRON_SHASTA]: 6,
        [dto_1.Network.BINANCE_SMART_CHAIN]: 18,
        [dto_1.Network.BINANCE_SMART_CHAIN_TESTNET]: 18,
        [dto_1.Network.AVALANCHE_C]: 18,
        [dto_1.Network.AVALANCHE_C_TESTNET]: 18,
        [dto_1.Network.AVALANCHE_P]: 18,
        [dto_1.Network.AVALANCHE_P_TESTNET]: 18,
        [dto_1.Network.AVALANCHE_X]: 18,
        [dto_1.Network.AVALANCHE_X_TESTNET]: 18,
        [dto_1.Network.FANTOM]: 18,
        [dto_1.Network.FANTOM_TESTNET]: 18,
        [dto_1.Network.HARMONY_ONE_SHARD_0]: 18,
        [dto_1.Network.HARMONY_ONE_TESTNET_SHARD_0]: 18,
        [dto_1.Network.ALGORAND]: 6,
        [dto_1.Network.ALGORAND_TESTNET]: 6,
        [dto_1.Network.ARBITRUM_ONE]: 18,
        [dto_1.Network.ARBITRUM_NOVA_TESTNET]: 18,
        [dto_1.Network.ARBITRUM_NOVA]: 18,
        [dto_1.Network.AURORA]: 18,
        [dto_1.Network.AURORA_TESTNET]: 18,
        [dto_1.Network.CARDANO]: 6,
        [dto_1.Network.CARDANO_PREPROD]: 6,
        [dto_1.Network.GNOSIS]: 18,
        [dto_1.Network.GNOSIS_TESTNET]: 18,
        [dto_1.Network.FLOW]: 8,
        [dto_1.Network.FLOW_TESTNET]: 8,
        [dto_1.Network.CRONOS]: 18,
        [dto_1.Network.CRONOS_TESTNET]: 18,
        [dto_1.Network.KUCOIN]: 18,
        [dto_1.Network.KUCOIN_TESTNET]: 18,
        [dto_1.Network.ETHEREUM_CLASSIC]: 18,
        [dto_1.Network.EOS]: 4,
        [dto_1.Network.HORIZEN_EON]: 18,
        [dto_1.Network.HORIZEN_EON_GOBI]: 18,
        [dto_1.Network.EOS_TESTNET]: 4,
        [dto_1.Network.TEZOS]: 6,
        [dto_1.Network.TEZOS_TESTNET]: 6,
        [dto_1.Network.STELLAR]: 6,
        [dto_1.Network.STELLAR_TESTNET]: 6,
        [dto_1.Network.OASIS]: 18,
        [dto_1.Network.OASIS_TESTNET]: 18,
        [dto_1.Network.OPTIMISM]: 18,
        [dto_1.Network.OPTIMISM_TESTNET]: 18,
        [dto_1.Network.PALM]: 18,
        [dto_1.Network.PALM_TESTNET]: 18,
        [dto_1.Network.POLKADOT]: 18,
        [dto_1.Network.POLKADOT_TESTNET]: 18,
        [dto_1.Network.RSK]: 18,
        [dto_1.Network.RSK_TESTNET]: 18,
        [dto_1.Network.VECHAIN]: 18,
        [dto_1.Network.VECHAIN_TESTNET]: 18,
        [dto_1.Network.XDC]: 18,
        [dto_1.Network.XDC_TESTNET]: 18,
        [dto_1.Network.ZILLIQA]: 12,
        [dto_1.Network.ZILLIQA_TESTNET]: 12,
        [dto_1.Network.FLARE]: 18,
        [dto_1.Network.FLARE_COSTON]: 18,
        [dto_1.Network.FLARE_COSTON_2]: 18,
        [dto_1.Network.FLARE_SONGBIRD]: 18,
        [dto_1.Network.HAQQ]: 18,
        [dto_1.Network.HAQQ_TESTNET]: 18,
        [dto_1.Network.CHILIZ]: 18,
        [dto_1.Network.BNB]: 18
    },
    CURRENCY_NAMES: {
        [dto_1.Network.BITCOIN]: "BTC",
        [dto_1.Network.BITCOIN_TESTNET]: "BTC",
        [dto_1.Network.NEAR]: "NEAR",
        [dto_1.Network.NEAR_TESTNET]: "NEAR",
        [dto_1.Network.MULTIVERSX]: "EGLD",
        [dto_1.Network.MULTIVERSX_TESTNET]: "EGLD",
        [dto_1.Network.BITCOIN_CASH]: "BCH",
        [dto_1.Network.BITCOIN_CASH_TESTNET]: "BCH",
        [dto_1.Network.LITECOIN]: "LTC",
        [dto_1.Network.LITECOIN_TESTNET]: "LTC",
        [dto_1.Network.DOGECOIN]: "DOGE",
        [dto_1.Network.DOGECOIN_TESTNET]: "DOGE",
        [dto_1.Network.ZCASH]: "ZEC",
        [dto_1.Network.ZCASH_TESTNET]: "ZEC",
        [dto_1.Network.ETHEREUM]: "ETH",
        [dto_1.Network.ETHEREUM_SEPOLIA]: "ETH",
        [dto_1.Network.ETHEREUM_HOLESKY]: "ETH",
        [dto_1.Network.ETHEREUM_GOERLI]: "ETH",
        [dto_1.Network.POLYGON]: "MATIC",
        [dto_1.Network.POLYGON_MUMBAI]: "MATIC",
        [dto_1.Network.CELO]: "CELO",
        [dto_1.Network.CELO_ALFAJORES]: "CELO",
        [dto_1.Network.SOLANA]: "SOL",
        [dto_1.Network.SOLANA_DEVNET]: "SOL",
        [dto_1.Network.XRP]: "XRP",
        [dto_1.Network.XRP_TESTNET]: "XRP",
        [dto_1.Network.KLAYTN]: "KLAY",
        [dto_1.Network.KLAYTN_BAOBAB]: "KLAY",
        [dto_1.Network.TRON]: "TRX",
        [dto_1.Network.TRON_SHASTA]: "TRX",
        [dto_1.Network.BINANCE_SMART_CHAIN]: "BNB",
        [dto_1.Network.BINANCE_SMART_CHAIN_TESTNET]: "BNB",
        [dto_1.Network.AVALANCHE_C]: "AVAX",
        [dto_1.Network.AVALANCHE_C_TESTNET]: "AVAX",
        [dto_1.Network.AVALANCHE_P]: "AVAX",
        [dto_1.Network.AVALANCHE_P_TESTNET]: "AVAX",
        [dto_1.Network.AVALANCHE_X]: "AVAX",
        [dto_1.Network.AVALANCHE_X_TESTNET]: "AVAX",
        [dto_1.Network.FANTOM]: "FTM",
        [dto_1.Network.FANTOM_TESTNET]: "FTM",
        [dto_1.Network.HARMONY_ONE_SHARD_0]: "ONE",
        [dto_1.Network.HARMONY_ONE_TESTNET_SHARD_0]: "ONE",
        [dto_1.Network.ALGORAND]: "ALGO",
        [dto_1.Network.ALGORAND_TESTNET]: "ALGO",
        [dto_1.Network.ARBITRUM_ONE]: "ARB",
        [dto_1.Network.ARBITRUM_NOVA_TESTNET]: "ARB",
        [dto_1.Network.ARBITRUM_NOVA]: "ARB",
        [dto_1.Network.AURORA]: "AURA",
        [dto_1.Network.AURORA_TESTNET]: "AURA",
        [dto_1.Network.CARDANO]: "ADA",
        [dto_1.Network.CARDANO_PREPROD]: "ADA",
        [dto_1.Network.GNOSIS]: "GNO",
        [dto_1.Network.GNOSIS_TESTNET]: "GNO",
        [dto_1.Network.FLOW]: "FLOW",
        [dto_1.Network.FLARE]: "FLARE",
        [dto_1.Network.FLARE_COSTON]: "FLARE",
        [dto_1.Network.FLARE_COSTON_2]: "FLARE",
        [dto_1.Network.FLARE_SONGBIRD]: "FLARE",
        [dto_1.Network.FLOW_TESTNET]: "FLOW",
        [dto_1.Network.CRONOS]: "CRO",
        [dto_1.Network.CRONOS_TESTNET]: "CRO",
        [dto_1.Network.KUCOIN]: "KCS",
        [dto_1.Network.KUCOIN_TESTNET]: "KCS",
        [dto_1.Network.ETHEREUM_CLASSIC]: "ETC",
        [dto_1.Network.EOS]: "EOS",
        [dto_1.Network.HORIZEN_EON]: "EON",
        [dto_1.Network.HORIZEN_EON_GOBI]: "EON",
        [dto_1.Network.EOS_TESTNET]: "EOS",
        [dto_1.Network.TEZOS]: "XTZ",
        [dto_1.Network.TEZOS_TESTNET]: "XTZ",
        [dto_1.Network.STELLAR]: "XLM",
        [dto_1.Network.STELLAR_TESTNET]: "XLM",
        [dto_1.Network.OASIS]: "ROSE",
        [dto_1.Network.OASIS_TESTNET]: "ROSE",
        [dto_1.Network.OPTIMISM]: "OPT",
        [dto_1.Network.OPTIMISM_TESTNET]: "OPT",
        [dto_1.Network.PALM]: "PALM",
        [dto_1.Network.PALM_TESTNET]: "PALM",
        [dto_1.Network.POLKADOT]: "DOT",
        [dto_1.Network.POLKADOT_TESTNET]: "DOT",
        [dto_1.Network.RSK]: "RBTC",
        [dto_1.Network.RSK_TESTNET]: "RBTC",
        [dto_1.Network.VECHAIN]: "VET",
        [dto_1.Network.VECHAIN_TESTNET]: "VET",
        [dto_1.Network.XDC]: "XDC",
        [dto_1.Network.XDC_TESTNET]: "XDC",
        [dto_1.Network.ZILLIQA]: "ZIL",
        [dto_1.Network.ZILLIQA_TESTNET]: "ZIL",
        [dto_1.Network.HAQQ]: "HAQQ",
        [dto_1.Network.HAQQ_TESTNET]: "HAQQ",
        [dto_1.Network.CHILIZ]: "CHILIZ",
        [dto_1.Network.BNB]: "BNB"
    },
    RPC: {
        MAINNETS: [
            dto_1.Network.ALGORAND,
            dto_1.Network.ARBITRUM_NOVA,
            dto_1.Network.ARBITRUM_ONE,
            dto_1.Network.AURORA,
            dto_1.Network.AVALANCHE_C,
            dto_1.Network.AVALANCHE_P,
            dto_1.Network.AVALANCHE_X,
            dto_1.Network.BINANCE_SMART_CHAIN,
            dto_1.Network.BITCOIN,
            dto_1.Network.BITCOIN_CASH,
            dto_1.Network.CARDANO,
            dto_1.Network.CELO,
            dto_1.Network.CRONOS,
            dto_1.Network.DOGECOIN,
            dto_1.Network.EOS,
            dto_1.Network.ETHEREUM,
            dto_1.Network.ETHEREUM_CLASSIC,
            dto_1.Network.FANTOM,
            dto_1.Network.FLOW,
            dto_1.Network.GNOSIS,
            dto_1.Network.HARMONY_ONE_SHARD_0,
            dto_1.Network.KLAYTN,
            dto_1.Network.KUCOIN,
            dto_1.Network.LITECOIN,
            dto_1.Network.MULTIVERSX,
            dto_1.Network.NEAR,
            dto_1.Network.OASIS,
            dto_1.Network.OPTIMISM,
            dto_1.Network.PALM,
            dto_1.Network.POLYGON,
            dto_1.Network.POLKADOT,
            dto_1.Network.RSK,
            dto_1.Network.SOLANA,
            dto_1.Network.STELLAR,
            dto_1.Network.TEZOS,
            dto_1.Network.TRON,
            dto_1.Network.VECHAIN,
            dto_1.Network.XDC,
            dto_1.Network.XRP,
            dto_1.Network.ZCASH,
            dto_1.Network.ZILLIQA,
            dto_1.Network.CHILIZ
        ],
        TESTNETS: [
            dto_1.Network.ALGORAND_TESTNET,
            dto_1.Network.ARBITRUM_NOVA_TESTNET,
            dto_1.Network.AURORA_TESTNET,
            dto_1.Network.AVALANCHE_C_TESTNET,
            dto_1.Network.AVALANCHE_P_TESTNET,
            dto_1.Network.AVALANCHE_X_TESTNET,
            dto_1.Network.BINANCE_SMART_CHAIN_TESTNET,
            dto_1.Network.BITCOIN_TESTNET,
            dto_1.Network.BITCOIN_CASH_TESTNET,
            dto_1.Network.CARDANO_PREPROD,
            dto_1.Network.CELO_ALFAJORES,
            dto_1.Network.CRONOS_TESTNET,
            dto_1.Network.DOGECOIN_TESTNET,
            dto_1.Network.ETHEREUM_GOERLI,
            dto_1.Network.ETHEREUM_SEPOLIA,
            dto_1.Network.ETHEREUM_HOLESKY,
            dto_1.Network.EOS_TESTNET,
            dto_1.Network.FANTOM_TESTNET,
            dto_1.Network.FLOW_TESTNET,
            dto_1.Network.GNOSIS_TESTNET,
            dto_1.Network.HARMONY_ONE_TESTNET_SHARD_0,
            dto_1.Network.KLAYTN_BAOBAB,
            dto_1.Network.KUCOIN_TESTNET,
            dto_1.Network.LITECOIN_TESTNET,
            dto_1.Network.MULTIVERSX_TESTNET,
            dto_1.Network.NEAR_TESTNET,
            dto_1.Network.OASIS_TESTNET,
            dto_1.Network.OPTIMISM_TESTNET,
            dto_1.Network.PALM_TESTNET,
            dto_1.Network.POLYGON_MUMBAI,
            dto_1.Network.POLKADOT_TESTNET,
            dto_1.Network.RSK_TESTNET,
            dto_1.Network.SOLANA_DEVNET,
            dto_1.Network.STELLAR_TESTNET,
            dto_1.Network.TEZOS_TESTNET,
            dto_1.Network.TRON_SHASTA,
            dto_1.Network.VECHAIN_TESTNET,
            dto_1.Network.XDC_TESTNET,
            dto_1.Network.XRP_TESTNET,
            dto_1.Network.ZCASH_TESTNET,
            dto_1.Network.ZILLIQA_TESTNET,
            dto_1.Network.HORIZEN_EON_GOBI
        ],
        METHOD_PREFIX: "eth_"
    },
    OPEN_RPC: {
        LB_INTERVAL: 60000,
        ALLOWED_BLOCKS_BEHIND: 10
    },
    TRON_SHASTA_BASE_URL: {
        BASE: "https://api.shasta.trongrid.io",
        RPC: "https://api.shasta.trongrid.io/jsonrpc"
    },
    EOS_PREFIX: "v1/chain/",
    BEACON_PREFIX: "/eth/v1/beacon"
};

},{"76b5667fdca2baeb":"lqU6b"}],"5nyqK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CONFIG = void 0;
const typedi_1 = require("7d97495c552605f2");
exports.CONFIG = new typedi_1.Token("TATUM_CONFIG");

},{"7d97495c552605f2":"lKbmC"}],"47B7e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorUtils = exports.Status = void 0;
var Status;
(function(Status) {
    Status["SUCCESS"] = "SUCCESS";
    Status["ERROR"] = "ERROR";
})(Status = exports.Status || (exports.Status = {}));
exports.ErrorUtils = {
    tryFailTron: async (f)=>{
        const response = await exports.ErrorUtils.tryFail(f);
        const error = "Error";
        if (response.data[error]) return {
            data: null,
            status: Status.ERROR,
            error: exports.ErrorUtils.toErrorWithMessage(response.data[error])
        };
        return response;
    },
    tryFail: async (f)=>{
        try {
            const data = await f();
            return {
                data,
                status: Status.SUCCESS
            };
        } catch (e) {
            return {
                data: null,
                status: Status.ERROR,
                error: exports.ErrorUtils.toErrorWithMessage(e)
            };
        }
    },
    tryFailBlob: async (f)=>{
        try {
            return await f();
        } catch (e) {
            return {
                data: null,
                status: Status.ERROR,
                error: exports.ErrorUtils.toErrorWithMessage(e)
            };
        }
    },
    formatErrorMsg: (message)=>{
        return message.replace("attr.", "");
    },
    toErrorWithMessage: (maybeError)=>{
        if (typeof maybeError === "string") try {
            const error = JSON.parse(maybeError);
            if (error.data instanceof Array && error.data.length > 0) return {
                message: error.data.map((message)=>exports.ErrorUtils.formatErrorMsg(message)),
                code: error.errorCode,
                dashboardLog: error.dashboardLog
            };
            return {
                message: [
                    error.message ?? maybeError
                ],
                code: error.errorCode,
                dashboardLog: error.dashboardLog
            };
        // eslint-disable-next-line no-empty
        } catch (_) {}
        if (exports.ErrorUtils.isErrorWithMessage(maybeError)) return {
            message: [
                maybeError.message
            ],
            dashboardLog: maybeError.dashboardLog
        };
        try {
            return {
                message: [
                    JSON.stringify(maybeError, null, 2)
                ],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                dashboardLog: maybeError.dashboardLog
            };
        } catch  {
            // fallback in case there's an error stringifying the maybeError
            // like with circular references for example.
            return {
                message: [
                    String(maybeError)
                ]
            };
        }
    },
    isErrorWithMessage (e) {
        return typeof e === "object" && e !== null && "message" in e && typeof e.message === "string";
    },
    toErrorResponse (error) {
        return {
            data: null,
            status: Status.ERROR,
            error: error
        };
    }
};

},{}],"aFqBk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumUtils = void 0;
const constant_1 = require("e3aaaf6274f15a97");
exports.TatumUtils = {
    getChainId: (network)=>{
        if (network in constant_1.Constant.NETWORK.ChainId) return constant_1.Constant.NETWORK.ChainId[network];
        throw new Error(`Tatum Network to ChainId for network ${network} does not exist`);
    },
    getNetwork: (chainId)=>{
        if (Object.keys(chainIdToNetworkCache).length === 0) buildChainIdToNetworkCache();
        const network = chainIdToNetworkCache[chainId];
        if (!network) throw new Error(`ChainId to Tatum Network for chainId ${chainId} does not exist`);
        return network;
    }
};
const chainIdToNetworkCache = {};
const buildChainIdToNetworkCache = ()=>{
    for (const network of Object.keys(constant_1.Constant.NETWORK.ChainId)){
        const netKey = network;
        chainIdToNetworkCache[constant_1.Constant.NETWORK.ChainId[netKey]] = netKey;
    }
};

},{"e3aaaf6274f15a97":"avIIT"}],"w7yjP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Utils = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const bignumber_js_1 = require("7cd93305ca4a4806");
const typedi_1 = require("b9facff8aef370ab");
const package_json_1 = require("d3ac01d7eca4ff98");
const dto_1 = require("af2a8e7ced13606a");
const service_1 = require("f49db9c0544245be");
const EvmArchiveLoadBalancerRpc_1 = require("e4971b6885c46289");
const NativeEvmArchiveLoadBalancerRpc_1 = require("b7eabe72cc2df5");
const TronLoadBalancerRpc_1 = require("b4772a78a0c7138b");
const TronRpc_1 = require("a60827ee00fde43e");
const EosLoadBalancerRpc_1 = require("4be73d8d4b87ea6");
const EosRpc_1 = require("abaa9e99c076ef53");
const SolanaLoadBalancerRpc_1 = require("f09c45dd52bb8f3e");
const XrpLoadBalancerRpc_1 = require("2cd39daa88e27b1d");
const UtxoLoadBalancerRpc_1 = require("ae48038bfa14f39d");
const constant_1 = require("5de6490924bde3ec");
const di_tokens_1 = require("f5102469dde1ebd7");
const EvmBeaconArchiveLoadBalancerRpc_1 = require("d624909907dab405");
const UtxoLoadBalancerRpcEstimateFee_1 = require("f77f0b9e73b52a99");
const UtxoRpcEstimateFee_1 = require("fde9aac919ec399b");
const BnbLoadBalancerRpc_1 = require("e802c4177a7b06e5");
exports.Utils = {
    getRpc: (id, config)=>{
        const { network } = config;
        if ((0, dto_1.isBnbLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(BnbLoadBalancerRpc_1.BnbLoadBalancerRpc);
        if ((0, dto_1.isUtxoLoadBalancerEstimateFeeNetwork)(network)) return typedi_1.Container.of(id).get(UtxoLoadBalancerRpcEstimateFee_1.UtxoLoadBalancerRpcEstimateFee);
        if ((0, dto_1.isUtxoEstimateFeeNetwork)(network)) return typedi_1.Container.of(id).get(UtxoRpcEstimateFee_1.UtxoRpcEstimateFee);
        if ((0, dto_1.isUtxoLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(UtxoLoadBalancerRpc_1.UtxoLoadBalancerRpc);
        if ((0, dto_1.isNativeEvmLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(NativeEvmArchiveLoadBalancerRpc_1.NativeEvmArchiveLoadBalancerRpc);
        if ((0, dto_1.isEvmArchiveNonArchiveBeaconLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(EvmBeaconArchiveLoadBalancerRpc_1.EvmBeaconArchiveLoadBalancerRpc);
        if ((0, dto_1.isEvmArchiveNonArchiveLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(EvmArchiveLoadBalancerRpc_1.EvmArchiveLoadBalancerRpc);
        if ((0, dto_1.isEvmLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(service_1.EvmLoadBalancerRpc);
        if ((0, dto_1.isEvmBasedNetwork)(network)) return typedi_1.Container.of(id).get(service_1.EvmRpc);
        if ((0, dto_1.isUtxoBasedNetwork)(network)) return typedi_1.Container.of(id).get(service_1.UtxoRpc);
        if ((0, dto_1.isXrpNetwork)(network)) return typedi_1.Container.of(id).get(XrpLoadBalancerRpc_1.XrpLoadBalancerRpc);
        if ((0, dto_1.isSolanaNetwork)(network)) return typedi_1.Container.of(id).get(SolanaLoadBalancerRpc_1.SolanaLoadBalancerRpc);
        if ((0, dto_1.isTronLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(TronLoadBalancerRpc_1.TronLoadBalancerRpc);
        if ((0, dto_1.isTronNetwork)(network)) return typedi_1.Container.of(id).get(TronRpc_1.TronRpc);
        if ((0, dto_1.isEosLoadBalancerNetwork)(network)) return typedi_1.Container.of(id).get(EosLoadBalancerRpc_1.EosLoadBalancerRpc);
        if ((0, dto_1.isEosNetwork)(network)) return typedi_1.Container.of(id).get(EosRpc_1.EosRpc);
        console.warn(`RPC Network ${network} is not supported.`);
        return typedi_1.Container.of(id).get(service_1.GenericRpc);
    },
    getRpcListUrl: (network)=>{
        const mappedNetwork = exports.Utils.mapRpcListUrl(network);
        return [
            `https://rpc.tatum.io/${mappedNetwork}/list.json`,
            `https://rpc.tatum.io/${mappedNetwork}-archive/list.json`
        ];
    },
    mapRpcListUrl: (network)=>{
        const mappedNetwork = dto_1.MAPPED_NETWORK[network];
        return mappedNetwork ?? network;
    },
    getStatusPayload: (network)=>{
        if ((0, dto_1.isUtxoBasedNetwork)(network)) return {
            jsonrpc: "2.0",
            method: "getblockcount",
            params: [],
            id: 1
        };
        if ((0, dto_1.isEvmBasedNetwork)(network) || (0, dto_1.isTronNetwork)(network)) return {
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1
        };
        if ((0, dto_1.isSolanaNetwork)(network)) return {
            jsonrpc: "2.0",
            method: "getBlockHeight",
            params: [],
            id: 1
        };
        if ((0, dto_1.isBnbLoadBalancerNetwork)(network)) return {
            jsonrpc: "2.0",
            method: "block",
            params: {},
            id: 1
        };
        if ((0, dto_1.isEosNetwork)(network)) return null;
        throw new Error(`Network ${network} is not supported.`);
    },
    getStatusUrl (network, url) {
        if ((0, dto_1.isEosNetwork)(network)) return `${url}${constant_1.Constant.EOS_PREFIX}get_info`;
        if ((0, dto_1.isSameGetBlockNetwork)(network)) return url;
        if ((0, dto_1.isBnbLoadBalancerNetwork)(network)) return url;
        throw new Error(`Network ${network} is not supported.`);
    },
    parseStatusPayload: (network, response)=>{
        if ((0, dto_1.isSameGetBlockNetwork)(network)) return new bignumber_js_1.BigNumber(response.result || -1).toNumber();
        if ((0, dto_1.isBnbLoadBalancerNetwork)(network)) return new bignumber_js_1.BigNumber(response.result.block.header.height || -1).toNumber();
        if ((0, dto_1.isEosNetwork)(network)) return new bignumber_js_1.BigNumber(response.head_block_num || -1).toNumber();
        throw new Error(`Network ${network} is not supported.`);
    },
    isResponseOk: (network, response)=>{
        if ((0, dto_1.isEosNetwork)(network)) return response.head_block_num !== undefined;
        if ((0, dto_1.isBnbLoadBalancerNetwork)(network)) return response.result.block.header.height !== undefined;
        if ((0, dto_1.isSameGetBlockNetwork)(network)) return response.result !== undefined;
        throw new Error(`Network ${network} is not supported.`);
    },
    mapNotificationChainToNetwork: (chain)=>{
        switch(chain){
            case dto_1.AddressEventNotificationChain.BTC:
                return dto_1.Network.BITCOIN;
            case dto_1.AddressEventNotificationChain.BCH:
                return dto_1.Network.BITCOIN_CASH;
            case dto_1.AddressEventNotificationChain.LTC:
                return dto_1.Network.LITECOIN;
            case dto_1.AddressEventNotificationChain.DOGE:
                return dto_1.Network.DOGECOIN;
            case dto_1.AddressEventNotificationChain.ETH:
                return dto_1.Network.ETHEREUM;
            case dto_1.AddressEventNotificationChain.MATIC:
                return dto_1.Network.POLYGON;
            case dto_1.AddressEventNotificationChain.CELO:
                return dto_1.Network.CELO;
            case dto_1.AddressEventNotificationChain.SOL:
                return dto_1.Network.SOLANA;
            case dto_1.AddressEventNotificationChain.XRP:
                return dto_1.Network.XRP;
            case dto_1.AddressEventNotificationChain.BSC:
                return dto_1.Network.BINANCE_SMART_CHAIN;
            case dto_1.AddressEventNotificationChain.TRON:
                return dto_1.Network.TRON;
            case dto_1.AddressEventNotificationChain.KLAY:
                return dto_1.Network.KLAYTN;
            case dto_1.AddressEventNotificationChain.EON:
                return dto_1.Network.HORIZEN_EON;
            case dto_1.AddressEventNotificationChain.CHZ:
                return dto_1.Network.CHILIZ;
            default:
                throw new Error(`Chain ${chain} is not supported.`);
        }
    },
    mapNetworkToNotificationChain: (network)=>{
        switch(network){
            case dto_1.Network.BITCOIN:
            case dto_1.Network.BITCOIN_TESTNET:
                return dto_1.AddressEventNotificationChain.BTC;
            case dto_1.Network.BITCOIN_CASH:
            case dto_1.Network.BITCOIN_CASH_TESTNET:
                return dto_1.AddressEventNotificationChain.BCH;
            case dto_1.Network.LITECOIN:
            case dto_1.Network.LITECOIN_TESTNET:
                return dto_1.AddressEventNotificationChain.LTC;
            case dto_1.Network.DOGECOIN:
            case dto_1.Network.DOGECOIN_TESTNET:
                return dto_1.AddressEventNotificationChain.DOGE;
            case dto_1.Network.ETHEREUM:
            case dto_1.Network.ETHEREUM_SEPOLIA:
            case dto_1.Network.ETHEREUM_GOERLI:
                return dto_1.AddressEventNotificationChain.ETH;
            case dto_1.Network.POLYGON:
            case dto_1.Network.POLYGON_MUMBAI:
                return dto_1.AddressEventNotificationChain.MATIC;
            case dto_1.Network.CELO:
            case dto_1.Network.CELO_ALFAJORES:
                return dto_1.AddressEventNotificationChain.CELO;
            case dto_1.Network.SOLANA:
            case dto_1.Network.SOLANA_DEVNET:
                return dto_1.AddressEventNotificationChain.SOL;
            case dto_1.Network.XRP:
            case dto_1.Network.XRP_TESTNET:
                return dto_1.AddressEventNotificationChain.XRP;
            case dto_1.Network.BINANCE_SMART_CHAIN:
            case dto_1.Network.BINANCE_SMART_CHAIN_TESTNET:
                return dto_1.AddressEventNotificationChain.BSC;
            case dto_1.Network.TRON:
            case dto_1.Network.TRON_SHASTA:
                return dto_1.AddressEventNotificationChain.TRON;
            case dto_1.Network.KLAYTN:
            case dto_1.Network.KLAYTN_BAOBAB:
                return dto_1.AddressEventNotificationChain.KLAY;
            case dto_1.Network.TEZOS:
                return dto_1.AddressEventNotificationChain.TEZOS;
            case dto_1.Network.HORIZEN_EON:
                return dto_1.AddressEventNotificationChain.EON;
            case dto_1.Network.CHILIZ:
                return dto_1.AddressEventNotificationChain.CHZ;
            default:
                throw new Error(`Network ${network} is not supported.`);
        }
    },
    delay: (t)=>new Promise((resolve)=>setTimeout(resolve, t)),
    retryWithTimeout: async (action, timeoutInMs = 10000, delayInMs = 500)=>{
        const startTime = Date.now();
        let lastError = null;
        while(timeoutInMs + startTime > Date.now())try {
            const result = await action();
            if (result === null || result === undefined) throw new Error("Null result");
            return result;
        } catch (e) {
            lastError = e;
            await exports.Utils.delay(delayInMs);
        }
        throw lastError ?? new Error("Retry timeout failed");
    },
    fetchWithTimeout: async (url, containerId, config, timeout = 5000)=>{
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const start = Date.now();
        const response = await fetch(url, {
            ...config,
            signal: controller.signal,
            headers: exports.Utils.getHeaders(containerId)
        });
        const responseTime = Date.now() - start;
        clearTimeout(id);
        return {
            responseTime,
            response
        };
    },
    headersToJson (headers) {
        const headersObj = {};
        headers.forEach((value, key)=>{
            headersObj[key] = value;
        });
        return JSON.stringify(headersObj);
    },
    getHeaders: (id)=>{
        const basicHeaders = exports.Utils.getBasicHeaders(id);
        basicHeaders.set("Content-Type", "application/json");
        return basicHeaders;
    },
    getBasicHeaders: (id)=>{
        const config = typedi_1.Container.of(id).get(di_tokens_1.CONFIG);
        const headers = new Headers({
            "x-ttm-sdk-version": package_json_1.version,
            "x-ttm-sdk-product": "JS",
            "x-ttm-sdk-debug": `${config.verbose}`
        });
        if (config.apiKey) {
            if (config.version === service_1.ApiVersion.V3 && config.apiKey.v3) headers.append("x-api-key", config.apiKey.v3);
            else if (config.version === service_1.ApiVersion.V4 && config.apiKey.v4) headers.append("x-api-key", config.apiKey.v4);
        }
        return headers;
    },
    padWithZero: (data, length = 64)=>data.replace("0x", "").padStart(length, "0"),
    camelToSnakeCase: (str)=>str.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`),
    convertObjCamelToSnake: (obj)=>{
        const snakeObj = {};
        for (const [key, value] of Object.entries(obj)){
            const snakeKey = exports.Utils.camelToSnakeCase(key);
            if (value instanceof bignumber_js_1.BigNumber) snakeObj[snakeKey] = value.toNumber();
            else if (typeof value === "object" && value !== null) snakeObj[snakeKey] = exports.Utils.convertObjCamelToSnake(value);
            else snakeObj[snakeKey] = value;
        }
        return snakeObj;
    },
    getClient: (id, network)=>{
        switch(network){
            case dto_1.Network.BITCOIN:
            case dto_1.Network.BITCOIN_TESTNET:
                return new service_1.Bitcoin(id);
            case dto_1.Network.LITECOIN:
            case dto_1.Network.LITECOIN_TESTNET:
                return new service_1.Litecoin(id);
            case dto_1.Network.DOGECOIN:
            case dto_1.Network.DOGECOIN_TESTNET:
                return new service_1.Dogecoin(id);
            case dto_1.Network.BITCOIN_CASH:
            case dto_1.Network.BITCOIN_CASH_TESTNET:
                return new service_1.BitcoinCash(id);
            case dto_1.Network.ZCASH:
            case dto_1.Network.ZCASH_TESTNET:
                return new service_1.ZCash(id);
            case dto_1.Network.ETHEREUM:
            case dto_1.Network.ETHEREUM_SEPOLIA:
            case dto_1.Network.ETHEREUM_GOERLI:
            case dto_1.Network.ETHEREUM_HOLESKY:
                return new service_1.Ethereum(id);
            case dto_1.Network.ETHEREUM_CLASSIC:
                return new service_1.EthereumClassic(id);
            case dto_1.Network.ARBITRUM_NOVA:
            case dto_1.Network.ARBITRUM_NOVA_TESTNET:
                return new service_1.ArbitrumNova(id);
            case dto_1.Network.ARBITRUM_ONE:
                return new service_1.ArbitrumOne(id);
            case dto_1.Network.AURORA:
            case dto_1.Network.AURORA_TESTNET:
                return new service_1.Aurora(id);
            case dto_1.Network.AVALANCHE_C:
            case dto_1.Network.AVALANCHE_C_TESTNET:
            case dto_1.Network.AVALANCHE_P:
            case dto_1.Network.AVALANCHE_P_TESTNET:
            case dto_1.Network.AVALANCHE_X:
            case dto_1.Network.AVALANCHE_X_TESTNET:
                return new service_1.AvalancheC(id);
            case dto_1.Network.BINANCE_SMART_CHAIN:
            case dto_1.Network.BINANCE_SMART_CHAIN_TESTNET:
                return new service_1.BinanceSmartChain(id);
            case dto_1.Network.CELO:
            case dto_1.Network.CELO_ALFAJORES:
                return new service_1.Celo(id);
            case dto_1.Network.CRONOS:
            case dto_1.Network.CRONOS_TESTNET:
                return new service_1.Cronos(id);
            case dto_1.Network.FANTOM:
            case dto_1.Network.FANTOM_TESTNET:
                return new service_1.Fantom(id);
            case dto_1.Network.GNOSIS:
            case dto_1.Network.GNOSIS_TESTNET:
                return new service_1.Gnosis(id);
            case dto_1.Network.HARMONY_ONE_SHARD_0:
            case dto_1.Network.HARMONY_ONE_TESTNET_SHARD_0:
                return new service_1.HarmonyOne(id);
            case dto_1.Network.HAQQ:
            case dto_1.Network.HAQQ_TESTNET:
                return new service_1.Haqq(id);
            case dto_1.Network.FLARE:
            case dto_1.Network.FLARE_COSTON:
            case dto_1.Network.FLARE_COSTON_2:
            case dto_1.Network.FLARE_SONGBIRD:
                return new service_1.Flare(id);
            case dto_1.Network.KLAYTN:
            case dto_1.Network.KLAYTN_BAOBAB:
                return new service_1.Klaytn(id);
            case dto_1.Network.KUCOIN:
            case dto_1.Network.KUCOIN_TESTNET:
                return new service_1.Kucoin(id);
            case dto_1.Network.OASIS:
            case dto_1.Network.OASIS_TESTNET:
                return new service_1.Oasis(id);
            case dto_1.Network.OPTIMISM:
            case dto_1.Network.OPTIMISM_TESTNET:
                return new service_1.Optimism(id);
            case dto_1.Network.PALM:
            case dto_1.Network.PALM_TESTNET:
                return new service_1.Palm(id);
            case dto_1.Network.POLYGON:
            case dto_1.Network.POLYGON_MUMBAI:
                return new service_1.Polygon(id);
            case dto_1.Network.VECHAIN:
            case dto_1.Network.VECHAIN_TESTNET:
                return new service_1.Vechain(id);
            case dto_1.Network.XDC:
            case dto_1.Network.XDC_TESTNET:
                return new service_1.Xdc(id);
            case dto_1.Network.XRP:
            case dto_1.Network.XRP_TESTNET:
                return new service_1.Xrp(id);
            case dto_1.Network.SOLANA:
            case dto_1.Network.SOLANA_DEVNET:
                return new service_1.Solana(id);
            case dto_1.Network.TRON:
            case dto_1.Network.TRON_SHASTA:
                return new service_1.Tron(id);
            case dto_1.Network.TEZOS:
                return new service_1.Tezos(id);
            case dto_1.Network.HORIZEN_EON:
            case dto_1.Network.HORIZEN_EON_GOBI:
                return new service_1.HorizenEon(id);
            case dto_1.Network.EOS:
            case dto_1.Network.EOS_TESTNET:
                return new service_1.Eos(id);
            case dto_1.Network.CHILIZ:
                return new service_1.Chiliz(id);
            case dto_1.Network.BNB:
                return new service_1.Bnb(id);
            default:
                return new service_1.FullSdk(id);
        }
    },
    log: ({ id, message, data, mode })=>{
        const config = typedi_1.Container.of(id).get(di_tokens_1.CONFIG);
        if (config.verbose) {
            if (data) {
                if (mode === "table") console.table(data);
                else console.debug(new Date().toISOString(), message, data);
            } else console.debug(new Date().toISOString(), message);
        }
    },
    prepareRpcCall: (method, params, id = 1)=>{
        return {
            jsonrpc: "2.0",
            id,
            method,
            params
        };
    },
    deepMerge (target, source) {
        const isObject = (obj)=>typeof obj === "object" && obj !== null;
        if (!isObject(target) || !isObject(source)) return source;
        const output = {
            ...target
        };
        Object.keys(source).forEach((key)=>{
            const targetValue = output[key];
            const sourceValue = source[key];
            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) output[key] = [
                ...targetValue,
                ...sourceValue
            ];
            else if (isObject(targetValue) && isObject(sourceValue)) output[key] = exports.Utils.deepMerge(targetValue, sourceValue);
            else output[key] = sourceValue;
        });
        return output;
    },
    getV3RpcUrl: (config, path)=>{
        const { apiKey, rpc, network } = config;
        if (apiKey) {
            const url = rpc?.nodes?.[0].url || `${constant_1.Constant.TATUM_API_URL.V3}blockchain/node/${network}/${apiKey.v3 ? apiKey.v3 : apiKey.v4}`;
            return url.concat(path || "");
        }
        return rpc?.nodes?.[0].url || `${constant_1.Constant.TATUM_API_URL.V3}blockchain/node/${network}`.concat(path || "");
    },
    addQueryParams: (basePath, queryParams)=>{
        let queryString = "";
        if (queryParams) {
            const query = exports.Utils.convertObjCamelToSnake(queryParams);
            const params = [];
            Object.entries(query).forEach(([key, value])=>{
                if (Array.isArray(value)) value.forEach((val)=>{
                    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
                });
                else params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
            });
            if (params.length > 0) queryString = "?" + params.join("&");
        }
        return basePath + queryString;
    }
};

},{"7cd93305ca4a4806":"57qkX","b9facff8aef370ab":"lKbmC","d3ac01d7eca4ff98":"762wm","af2a8e7ced13606a":"lqU6b","f49db9c0544245be":"cgKVk","e4971b6885c46289":"dMVNp","b7eabe72cc2df5":"jWKmI","b4772a78a0c7138b":"dQSZo","a60827ee00fde43e":"2jQsr","4be73d8d4b87ea6":"NLU59","abaa9e99c076ef53":"hYBGr","f09c45dd52bb8f3e":"8KbbU","2cd39daa88e27b1d":"eiIKJ","ae48038bfa14f39d":"h286W","5de6490924bde3ec":"avIIT","f5102469dde1ebd7":"5nyqK","d624909907dab405":"dOAsv","f77f0b9e73b52a99":"7ppsG","fde9aac919ec399b":"6R1cI","e802c4177a7b06e5":"6wQmE"}],"762wm":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"@tatumio/tatum","version":"4.1.17","description":"Tatum JS SDK","author":"Tatum","repository":"https://github.com/tatumio/tatum-js","files":["dist/"],"license":"MIT","keywords":["Tatum","SDK","Blockchain"],"engines":{"node":">=18.0.0"},"main":"./dist/src/main.js","types":"./dist/src/main.d.ts","scripts":{"cli":"ts-node src/cli.ts","lint":"eslint --fix src/ --ext .js,.jsx,.ts,.tsx && prettier --write src/","test":"jest --forceExit","clean":"rm -rf dist build package","ts-node":"ts-node","build":"tsc -p tsconfig.json","build-all":"yarn clean && yarn build"},"dependencies":{"bignumber.js":"^9.1.1","reflect-metadata":"^0.1.13","typedi":"^0.10.0"},"devDependencies":{"@types/jest":"^29.5.5","@types/node":"^18.15.11","@types/uuid":"^9.0.1","@typescript-eslint/eslint-plugin":"^5.20.0","@typescript-eslint/parser":"^5.20.0","dotenv":"^16.0.3","eslint":"^8.14.0","jest":"^29.7.0","prettier":"^2.8.4","prettier-plugin-organize-imports":"^3.2.2","ts-jest":"^29.1.1","ts-node":"^10.7.0","tslib":"^2.5.0","typescript":"^5.0.4","undici":"^5.21.0"}}');

},{}],"dMVNp":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EvmArchiveLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvmArchiveLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("12526019838b7695");
const util_1 = require("c05bbb5f266be28b");
const LoadBalancer_1 = require("a6a1bab2ba62e88a");
const AbstractEvmRpc_1 = require("5ce31f5962fc0e4");
const EvmUtils_1 = require("409dd44f94c7e1ed");
let EvmArchiveLoadBalancerRpc = EvmArchiveLoadBalancerRpc_1 = class EvmArchiveLoadBalancerRpc extends AbstractEvmRpc_1.AbstractEvmRpc {
    constructor(id){
        super();
        this.loadBalancerRpc = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        const isArchive = EvmUtils_1.EvmUtils.isArchiveMethod(preparedCall);
        return await this.loadBalancerRpc.rawRpcCall(preparedCall, isArchive);
    }
    async rawRpcCall(body) {
        const isArchive = EvmUtils_1.EvmUtils.isArchiveMethod(body);
        return this.loadBalancerRpc.rawRpcCall(body, isArchive);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancerRpc.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancerRpc.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancerRpc.getActiveArchiveUrlWithFallback().url;
    }
};
EvmArchiveLoadBalancerRpc = EvmArchiveLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new EvmArchiveLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], EvmArchiveLoadBalancerRpc);
exports.EvmArchiveLoadBalancerRpc = EvmArchiveLoadBalancerRpc;

},{"12526019838b7695":"lKbmC","c05bbb5f266be28b":"luFgs","a6a1bab2ba62e88a":"cAGAc","5ce31f5962fc0e4":"9NASk","409dd44f94c7e1ed":"1TUbD"}],"cAGAc":[function(require,module,exports) {
var process = require("3912ad3ee00d13b2");
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoadBalancer_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadBalancer = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("ae573c817da741f");
const tatum_connector_1 = require("6bd9495a1a9beca");
const util_1 = require("cd3e998f20763db2");
const tatum_1 = require("cfbfcaf795ce7200");
const NODE_TYPE_LABEL = {
    [tatum_1.RpcNodeType.NORMAL]: "normal",
    [tatum_1.RpcNodeType.ARCHIVE]: "archive"
};
var RequestType;
(function(RequestType) {
    RequestType["RPC"] = "RPC";
    RequestType["POST"] = "POST";
    RequestType["GET"] = "GET";
    RequestType["BATCH"] = "BATCH";
})(RequestType || (RequestType = {}));
let LoadBalancer = LoadBalancer_1 = class LoadBalancer {
    constructor(id){
        this.id = id;
        this.rpcUrls = {
            [tatum_1.RpcNodeType.NORMAL]: [],
            [tatum_1.RpcNodeType.ARCHIVE]: []
        };
        this.activeUrl = {
            [tatum_1.RpcNodeType.NORMAL]: {},
            [tatum_1.RpcNodeType.ARCHIVE]: {}
        };
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.network = typedi_1.Container.of(this.id).get(util_1.CONFIG).network;
    }
    async init() {
        const config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        const nodes = config.rpc?.nodes;
        if (nodes) {
            util_1.Utils.log({
                id: this.id,
                message: "Initializing RPC module from static URLs"
            });
            this.initCustomNodes(nodes);
        } else {
            util_1.Utils.log({
                id: this.id,
                message: "Initializing RPC module from remote hosts"
            });
            await this.initRemoteHostsUrls();
        }
        // TODO: consider removing this because we already have a timeout in checkStatuses()
        if (!config.rpc?.oneTimeLoadBalancing) {
            this.timeout = setTimeout(()=>this.checkStatuses(), util_1.Constant.OPEN_RPC.LB_INTERVAL);
            // Check if we are running in Node.js environment
            if (typeof process !== "undefined" && process.release && process.release.name === "node") process.on("exit", ()=>this.destroy());
        } else await this.checkStatuses();
    }
    destroy() {
        clearTimeout(this.timeout);
    }
    initCustomNodes(nodes) {
        this.initRemoteHosts({
            nodeType: tatum_1.RpcNodeType.NORMAL,
            nodes: nodes,
            noSSRFCheck: true
        });
        this.initRemoteHosts({
            nodeType: tatum_1.RpcNodeType.ARCHIVE,
            nodes: nodes,
            noSSRFCheck: true
        });
        if (nodes?.length) for (const node of nodes){
            if (node.type === tatum_1.RpcNodeType.NORMAL) this.rpcUrls[tatum_1.RpcNodeType.NORMAL].push({
                node: {
                    url: node.url
                },
                lastBlock: 0,
                lastResponseTime: 0,
                failed: false
            });
            if (node.type === tatum_1.RpcNodeType.ARCHIVE) this.rpcUrls[tatum_1.RpcNodeType.ARCHIVE].push({
                node: {
                    url: node.url
                },
                lastBlock: 0,
                lastResponseTime: 0,
                failed: false
            });
        }
        else util_1.Utils.log({
            id: this.id,
            message: "No RPC URLs provided"
        });
    }
    async checkStatuses() {
        await this.checkStatus(tatum_1.RpcNodeType.NORMAL);
        await this.checkStatus(tatum_1.RpcNodeType.ARCHIVE);
        if (!this.activeUrl[tatum_1.RpcNodeType.NORMAL].url && !this.activeUrl[tatum_1.RpcNodeType.ARCHIVE].url) {
            util_1.Utils.log({
                id: this.id,
                message: "No active node found, please set node urls manually."
            });
            throw new Error("No active node found, please set node urls manually.");
        }
        const { rpc } = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        if (!rpc?.oneTimeLoadBalancing) {
            if (this.timeout) this.destroy();
            this.timeout = setTimeout(()=>this.checkStatuses(), util_1.Constant.OPEN_RPC.LB_INTERVAL);
        }
    }
    async checkStatus(nodeType) {
        const { rpc, network } = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        const all = [];
        /**
         * Check status of all nodes.
         * If the node is not responding, it will be marked as failed.
         * If the node is responding, it will be marked as not failed and the last block will be updated.
         */ const statusPayload = util_1.Utils.getStatusPayload(network);
        for (const server of this.rpcUrls[nodeType]){
            util_1.Utils.log({
                id: this.id,
                message: `Checking status of ${server.node.url}`
            });
            all.push(util_1.Utils.fetchWithTimeout(util_1.Utils.getStatusUrl(network, server.node.url), this.id, {
                method: "POST",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // body: statusPayload ? JSON.stringify(statusPayload) : undefined,
                // add body only if is defined
                ...statusPayload && {
                    body: JSON.stringify(statusPayload)
                }
            }).then(async ({ response: res, responseTime })=>{
                server.lastResponseTime = responseTime;
                const response = await res.json();
                util_1.Utils.log({
                    id: this.id,
                    message: `Response time of ${server.node.url} is ${server.lastResponseTime}ms with response: `,
                    data: response
                });
                if (res.ok && util_1.Utils.isResponseOk(network, response)) {
                    server.failed = false;
                    server.lastBlock = util_1.Utils.parseStatusPayload(network, response);
                } else {
                    util_1.Utils.log({
                        id: this.id,
                        message: `Failed to check status of ${server.node.url}. Error: ${JSON.stringify(response, Object.getOwnPropertyNames(response))}`
                    });
                    server.failed = true;
                }
            }).catch((e)=>{
                util_1.Utils.log({
                    id: this.id,
                    message: `Failed to check status of ${server.node.url}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
                });
                util_1.Utils.log({
                    id: this.id,
                    message: `Server ${server.node.url} will be marked as failed and will be removed from the pool.`
                });
                server.failed = true;
            }));
        }
        /**
         * The fastest node will be selected and will be used.
         */ await Promise.allSettled(all).then(()=>{
            const { fastestServer, index } = LoadBalancer_1.getFastestServer(this.rpcUrls[nodeType], rpc?.allowedBlocksBehind);
            util_1.Utils.log({
                id: this.id,
                data: this.rpcUrls[nodeType],
                mode: "table"
            });
            if (fastestServer && index !== -1) {
                util_1.Utils.log({
                    id: this.id,
                    message: `Server ${fastestServer.node.url} is selected as active server for ${tatum_1.RpcNodeType[nodeType]}.`,
                    data: {
                        url: fastestServer.node.url,
                        index
                    }
                });
                this.activeUrl[nodeType] = {
                    url: fastestServer.node.url,
                    index
                };
            }
        });
    }
    static getFastestServer(servers, allowedBlocksBehind) {
        const { fastestServer, index } = servers.reduce((result, item, index)=>{
            const isNotFailed = !item.failed;
            const isFasterBlock = item.lastBlock - allowedBlocksBehind > result.fastestServer.lastBlock;
            const isSameBlockFasterResponse = item.lastBlock === result.fastestServer.lastBlock && item.lastResponseTime < result.fastestServer.lastResponseTime;
            if (isNotFailed && (isFasterBlock || isSameBlockFasterResponse)) return {
                fastestServer: item,
                index: index
            };
            else return result;
        }, {
            fastestServer: {
                lastBlock: -Infinity,
                lastResponseTime: Infinity,
                node: {
                    url: ""
                }
            },
            index: -1
        });
        return {
            fastestServer,
            index
        };
    }
    getActiveArchiveUrlWithFallback() {
        const activeArchiveUrl = this.getActiveUrl(tatum_1.RpcNodeType.ARCHIVE);
        if (activeArchiveUrl?.url) return {
            url: activeArchiveUrl.url,
            type: tatum_1.RpcNodeType.ARCHIVE
        };
        if (this.getActiveUrl(tatum_1.RpcNodeType.NORMAL)?.url) return {
            url: this.getActiveUrl(tatum_1.RpcNodeType.NORMAL).url,
            type: tatum_1.RpcNodeType.NORMAL
        };
        throw new Error("No active node found.");
    }
    getActiveNormalUrlWithFallback() {
        const activeNormalUrl = this.getActiveUrl(tatum_1.RpcNodeType.NORMAL);
        if (activeNormalUrl?.url) return {
            url: activeNormalUrl.url,
            type: tatum_1.RpcNodeType.NORMAL
        };
        if (this.getActiveUrl(tatum_1.RpcNodeType.ARCHIVE)?.url) return {
            url: this.getActiveUrl(tatum_1.RpcNodeType.ARCHIVE).url,
            type: tatum_1.RpcNodeType.ARCHIVE
        };
        throw new Error("No active node found.");
    }
    getActiveUrl(nodeType) {
        return {
            url: this.activeUrl[nodeType]?.url,
            type: nodeType
        };
    }
    getActiveIndex(nodeType) {
        return this.activeUrl[nodeType]?.index;
    }
    checkSSRF(url) {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.hostname.endsWith("rpc.tatum.io");
        } catch (e) {
            util_1.Utils.log({
                id: this.id,
                message: `Failed to parse URL ${url}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
            });
            return false;
        }
    }
    initRemoteHosts({ nodeType, nodes, noSSRFCheck }) {
        const filteredNodes = nodes.filter((node)=>{
            // Check if the node type matches.
            const typeMatch = node.type === nodeType;
            // If noSSRFCheck is true, skip the SSRF check.
            if (noSSRFCheck) return typeMatch;
            // If noSSRFCheck is false or undefined, check if the URL ends with 'rpc.tatum.io'.
            const ssrfCheckPassed = this.checkSSRF(node.url);
            // Log if the URL doesn't pass the SSRF check
            if (!ssrfCheckPassed) util_1.Utils.log({
                id: this.id,
                message: `Skipping URL ${node.url} as it doesn't pass the SSRF check.`
            });
            return typeMatch && ssrfCheckPassed;
        });
        if (filteredNodes.length === 0) return;
        if (!this.rpcUrls[nodeType]) this.rpcUrls[nodeType] = [];
        this.rpcUrls[nodeType] = [
            ...this.rpcUrls[nodeType],
            ...filteredNodes.map((s)=>({
                    node: {
                        url: s.url
                    },
                    lastBlock: 0,
                    lastResponseTime: 0,
                    failed: false
                }))
        ];
        util_1.Utils.log({
            id: this.id,
            message: `Added ${filteredNodes.length} nodes (${filteredNodes.map((s)=>s.url).join(", ")}) for ${this.network} blockchain during the initialization for node ${NODE_TYPE_LABEL[nodeType]}.`
        });
        const randomIndex = Math.floor(Math.random() * this.rpcUrls[nodeType].length);
        util_1.Utils.log({
            id: this.id,
            message: `Using random URL ${this.rpcUrls[nodeType][randomIndex].node.url} for ${this.network} blockchain during the initialization for node ${NODE_TYPE_LABEL[nodeType]}.`
        });
        this.activeUrl[nodeType] = {
            url: this.rpcUrls[nodeType][randomIndex].node.url,
            index: randomIndex
        };
    }
    async initRemoteHostsUrls() {
        const network = this.network;
        const rpcList = util_1.Utils.getRpcListUrl(network);
        util_1.Utils.log({
            id: this.id,
            message: `Fetching response from ${rpcList}`
        });
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const [normal, archive] = await Promise.all(rpcList.map((url)=>fetch(url)));
            await this.initRemoteHostsFromResponse(normal, tatum_1.RpcNodeType.NORMAL);
            await this.initRemoteHostsFromResponse(archive, tatum_1.RpcNodeType.ARCHIVE);
        } catch (e) {
            console.error(new Date().toISOString(), `Failed to initialize RPC module. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`);
        }
    }
    async initRemoteHostsFromResponse(response, nodeType) {
        if (response.ok) {
            const nodes = await response.json();
            this.initRemoteHosts({
                nodeType: tatum_1.RpcNodeType.NORMAL,
                nodes: nodes
            });
            this.initRemoteHosts({
                nodeType: tatum_1.RpcNodeType.ARCHIVE,
                nodes: nodes
            });
        } else util_1.Utils.log({
            id: this.id,
            message: `Failed to fetch RPC configuration for ${this.network} blockchain for ${tatum_1.RpcNodeType[nodeType]} nodes`
        });
    }
    async handleFailedRpcCall({ rpcCall, e, nodeType, requestType }) {
        const { rpc: rpcConfig } = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        const { url } = this.getActiveUrl(nodeType);
        const activeIndex = this.getActiveIndex(nodeType);
        if (requestType === RequestType.RPC && "method" in rpcCall) util_1.Utils.log({
            id: this.id,
            message: `Failed to call RPC ${rpcCall.method} on ${url}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
        });
        else if (requestType === RequestType.BATCH && Array.isArray(rpcCall)) {
            const methods = rpcCall.map((item)=>item.method).join(", ");
            util_1.Utils.log({
                id: this.id,
                message: `Failed to call RPC methods [${methods}] on ${url}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
            });
        } else if (requestType === RequestType.POST && "path" in rpcCall && "body" in rpcCall) util_1.Utils.log({
            id: this.id,
            message: `Failed to call request on url ${rpcCall.basePath}${rpcCall.path} with body ${JSON.stringify(rpcCall.body)}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
        });
        else if (requestType === RequestType.GET && "path" in rpcCall) util_1.Utils.log({
            id: this.id,
            message: `Failed to call request on url ${rpcCall.basePath}${rpcCall.path}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
        });
        else // Handle other cases
        util_1.Utils.log({
            id: this.id,
            message: `Failed to call request on url ${url}. Error: ${JSON.stringify(e, Object.getOwnPropertyNames(e))}`
        });
        util_1.Utils.log({
            id: this.id,
            message: `Switching to another server, marking ${url} as unstable.`
        });
        if (activeIndex == null) {
            console.error(`No active node found for node type ${tatum_1.RpcNodeType[nodeType]}. Looks like your request is malformed or all nodes are down. Turn on verbose mode to see more details and check status pages.`);
            throw e;
        }
        /**
         * If the node is not responding, it will be marked as failed.
         * New node will be selected and will be used for the given blockchain.
         */ const servers = this.rpcUrls[nodeType];
        servers[activeIndex].failed = true;
        const { index, fastestServer } = LoadBalancer_1.getFastestServer(servers, rpcConfig?.allowedBlocksBehind);
        if (index === -1) {
            console.error(`All RPC nodes are unavailable. Looks like your request is malformed or all nodes are down. Turn on verbose mode to see more details and check status pages.`);
            throw e;
        }
        util_1.Utils.log({
            id: this.id,
            message: `Server ${fastestServer.node.url} is selected as active server, because ${url} failed.`
        });
        this.activeUrl[nodeType] = {
            url: fastestServer.node.url,
            index
        };
    }
    async rawRpcCall(rpcCall, archive) {
        const { url, type } = archive ? this.getActiveArchiveUrlWithFallback() : this.getActiveNormalUrlWithFallback();
        try {
            util_1.Utils.log({
                id: this.id,
                message: `Sending RPC ${rpcCall.method} to ${url} for ${this.network} blockchain node type ${tatum_1.RpcNodeType[type]}.`
            });
            return await this.connector.rpcCall(url, rpcCall);
        } catch (e) {
            await this.handleFailedRpcCall({
                rpcCall,
                e,
                nodeType: type,
                requestType: RequestType.RPC
            });
            return await this.rawRpcCall(rpcCall);
        }
    }
    async rawBatchRpcCall(rpcCall) {
        const { url, type } = this.getActiveArchiveUrlWithFallback();
        try {
            return await this.connector.rpcCall(url, rpcCall);
        } catch (e) {
            await this.handleFailedRpcCall({
                rpcCall,
                e,
                nodeType: type,
                requestType: RequestType.BATCH
            });
            return await this.rawBatchRpcCall(rpcCall);
        }
    }
    async post({ path, body, basePath }) {
        const { url, type } = this.getActiveNormalUrlWithFallback();
        const basePathUrl = basePath ?? url;
        try {
            return await this.connector.post({
                basePath: basePathUrl,
                path,
                body
            });
        } catch (e) {
            await this.handleFailedRpcCall({
                rpcCall: {
                    path,
                    body,
                    basePath: basePathUrl
                },
                e,
                nodeType: type,
                requestType: RequestType.POST
            });
            return await this.post({
                path,
                body,
                basePath
            });
        }
    }
    async get({ path, basePath }) {
        const { url, type } = this.getActiveNormalUrlWithFallback();
        const basePathUrl = basePath ?? url;
        try {
            return await this.connector.get({
                basePath: basePathUrl,
                path
            });
        } catch (e) {
            await this.handleFailedRpcCall({
                rpcCall: {
                    path,
                    basePath: basePathUrl
                },
                e,
                nodeType: type,
                requestType: RequestType.GET
            });
            return await this.get({
                path,
                basePath
            });
        }
    }
    getRpcNodeUrl() {
        return this.getActiveNormalUrlWithFallback().url;
    }
};
LoadBalancer = LoadBalancer_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new LoadBalancer_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], LoadBalancer);
exports.LoadBalancer = LoadBalancer;

},{"3912ad3ee00d13b2":"d5jf4","ae573c817da741f":"lKbmC","6bd9495a1a9beca":"brrBq","cd3e998f20763db2":"luFgs","cfbfcaf795ce7200":"4TUhe"}],"4TUhe":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Network = void 0;
var Network_1 = require("1af7750bd013b09d");
Object.defineProperty(exports, "Network", {
    enumerable: true,
    get: function() {
        return Network_1.Network;
    }
});
__exportStar(require("90216c2c73d82133"), exports);
__exportStar(require("c1a2a0c5d5ef48f1"), exports);
__exportStar(require("1d87ee4864cbd7d7"), exports);
__exportStar(require("5f6c27e0bc6b972d"), exports);
__exportStar(require("13fa2891cdf95af5"), exports);

},{"1af7750bd013b09d":"kX1I1","90216c2c73d82133":"giAOq","c1a2a0c5d5ef48f1":"lr9hm","1d87ee4864cbd7d7":"34TUL","5f6c27e0bc6b972d":"aGGBR","13fa2891cdf95af5":"bU1vO"}],"giAOq":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TatumSDK_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumSDK = exports.TatumSdkChain = void 0;
const typedi_1 = require("22b4ebbdc3e6863a");
const dto_1 = require("690085096685a62");
const util_1 = require("eb44919fba477b9a");
const extensions_1 = require("3bc4c3ce54649ad6");
const LoadBalancer_1 = require("26e3362fe7a06a84");
const walletProvider_1 = require("146b5a96b2cf9c24");
const tatum_dto_1 = require("9588ce3d9133c7bf");
class TatumSdkChain {
    constructor(id){
        this.id = id;
        this.walletProvider = typedi_1.Container.of(id).get(walletProvider_1.WalletProvider);
    }
    extension(type) {
        return typedi_1.Container.of(this.id).get(type);
    }
    async destroy() {
        const config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        for (const extensionConfig of config?.configureExtensions ?? [])await this.destroyExtension(extensionConfig, this.id);
        for (const walletProviderConfig of config?.configureWalletProviders ?? [])await this.destroyExtension(walletProviderConfig, this.id);
        // calls destroy on load balancer
        typedi_1.Container.of(this.id).remove(LoadBalancer_1.LoadBalancer);
    }
    async destroyExtension(extensionConfig, id) {
        let type;
        if ("type" in extensionConfig) type = extensionConfig.type;
        else type = extensionConfig;
        await typedi_1.Container.of(id).get(type)?.destroy();
    }
}
exports.TatumSdkChain = TatumSdkChain;
let TatumSDK = TatumSDK_1 = class TatumSDK {
    /**
     * Initialize Tatum SDK. This method must be called before any other method.
     * Default configuration is used if no configuration is provided.
     * @param config
     */ static async init(config) {
        const defaultConfig = {
            version: tatum_dto_1.ApiVersion.V4,
            retryCount: 1,
            retryDelay: 1000,
            rpc: {
                oneTimeLoadBalancing: false,
                allowedBlocksBehind: util_1.Constant.OPEN_RPC.ALLOWED_BLOCKS_BEHIND
            }
        };
        const mergedConfig = util_1.Utils.deepMerge(defaultConfig, config);
        // TODO: check when rpc is customized if there is allowedBlocksBehind if not throw error or set default
        // TODO: Check if rpc works for other chains and all configurations are set correctly
        const id = TatumSDK_1.generateRandomString();
        typedi_1.Container.of(id).set(util_1.CONFIG, mergedConfig);
        if ((0, dto_1.isLoadBalancerNetwork)(mergedConfig.network)) {
            const loadBalancer = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
            await loadBalancer.init();
        }
        const containerInstance = new extensions_1.TatumSdkContainer(typedi_1.Container.of(id));
        await this.configureExtensions(config, id, containerInstance);
        await this.addBuiltInExtensions(id, containerInstance);
        return util_1.Utils.getClient(id, mergedConfig.network);
    }
    static async addBuiltInExtensions(id, containerInstance) {
        for (const extension of this.builtInExtensions){
            const instance = new extension(containerInstance);
            if (instance.supportedNetworks.includes(typedi_1.Container.of(id).get(util_1.CONFIG).network)) {
                await instance.init();
                typedi_1.Container.of(id).set(extension, instance);
            }
        }
    }
    static async configureExtensions(config, id, containerInstance) {
        for (const extensionConfig of config?.configureExtensions ?? [])await this.addExtension(extensionConfig, id, containerInstance);
        for (const walletProviderConfig of config?.configureWalletProviders ?? [])await this.addExtension(walletProviderConfig, id, containerInstance);
    }
    static async addExtension(extensionConfig, id, containerInstance) {
        let type;
        const args = [];
        if ("type" in extensionConfig) {
            type = extensionConfig.type;
            args.push(extensionConfig.config);
        } else type = extensionConfig;
        const instance = new type(containerInstance, ...args);
        this.checkIfNetworkSupportedInExtension(instance, id, type);
        await instance.init();
        typedi_1.Container.of(id).set(type, instance);
    }
    static checkIfNetworkSupportedInExtension(instance, id, type) {
        if (!instance.supportedNetworks.includes(typedi_1.Container.of(id).get(util_1.CONFIG).network)) throw new Error(`Extension ${type.name} is not supported on ${typedi_1.Container.of(id).get(util_1.CONFIG).network} network.`);
    }
    static generateRandomString() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for(let i = 0; i < 60; i++)result += characters.charAt(Math.floor(Math.random() * characters.length));
        return result;
    }
};
TatumSDK.builtInExtensions = [
    walletProvider_1.MetaMask
];
TatumSDK = TatumSDK_1 = __decorate([
    (0, typedi_1.Service)({
        transient: true
    })
], TatumSDK);
exports.TatumSDK = TatumSDK;

},{"22b4ebbdc3e6863a":"lKbmC","690085096685a62":"lqU6b","eb44919fba477b9a":"luFgs","3bc4c3ce54649ad6":"haLWo","26e3362fe7a06a84":"cAGAc","146b5a96b2cf9c24":"lzr6e","9588ce3d9133c7bf":"lr9hm"}],"haLWo":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("44e08353f2e77d8"), exports);
__exportStar(require("5eee04d5d0ab41fa"), exports);
__exportStar(require("e048ae4b2aeae902"), exports);

},{"44e08353f2e77d8":"l4KU0","5eee04d5d0ab41fa":"6R48D","e048ae4b2aeae902":"iPpDS"}],"l4KU0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumSdkContainer = void 0;
const util_1 = require("c0615f88c9b7e649");
class TatumSdkContainer {
    constructor(containerInstance){
        this.containerInstance = containerInstance;
    }
    get(type) {
        return this.containerInstance.get(type);
    }
    getRpc() {
        return util_1.Utils.getRpc(this.containerInstance.id, this.containerInstance.get(util_1.CONFIG));
    }
    getConfig() {
        return this.containerInstance.get(util_1.CONFIG);
    }
}
exports.TatumSdkContainer = TatumSdkContainer;

},{"c0615f88c9b7e649":"luFgs"}],"6R48D":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumSdkExtension = void 0;
/**
 * `TatumSdkExtension` is the base class for all extensions integrated into the Tatum SDK.
 * It provides lifecycle methods for the initialization and disposal of extensions, ensuring
 * consistent integration and teardown processes across various extensions.
 *
 * @property tatumSdkContainer Provides access to the SDK configuration and internal sub-modules along with other registered extensions.
 *
 *
 * @property supportedNetworks An abstract property that needs to be defined by the extending classes.
 *                             It represents an array of networks that the extension supports.
 *
 * @method init Intended to handle the setup or initialization logic for the extension.
 *
 * @method destroy Intended to handle the teardown or disposal logic for the extension,
 *                 ensuring resources are freed and cleanup is performed appropriately.
 */ class TatumSdkExtension {
    constructor(tatumSdkContainer){
        this.tatumSdkContainer = tatumSdkContainer;
    }
    init() {
        return Promise.resolve(undefined);
    }
    destroy() {
        return Promise.resolve(undefined);
    }
}
exports.TatumSdkExtension = TatumSdkExtension;

},{}],"iPpDS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumSdkWalletProvider = void 0;
const tatumsdk_extensions_dto_1 = require("b86865bbb9141165");
/**
 * TatumSdkWalletProvider serves as the base class for all wallet providers.
 *
 * @template T Represents the wallet type (e.g., accountId for MetaMask, mnemonic and xpub for local wallets).
 * @template P Represents the transaction payload type specific to a blockchain or transaction.
 *
 * @method getWallet Fetches or initializes the wallet of type T.
 * @method signAndBroadcast Signs a transaction based on the provided payload of type P and broadcasts it to the network.
 */ class TatumSdkWalletProvider extends tatumsdk_extensions_dto_1.TatumSdkExtension {
}
exports.TatumSdkWalletProvider = TatumSdkWalletProvider;

},{"b86865bbb9141165":"6R48D"}],"lzr6e":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("f750cebd08e2fe37"), exports);
__exportStar(require("71e4d87357e458e6"), exports);

},{"f750cebd08e2fe37":"8rp9U","71e4d87357e458e6":"3RM6W"}],"8rp9U":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("fe92becde6f50106"), exports);

},{"fe92becde6f50106":"6H9nV"}],"6H9nV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetaMask = void 0;
const bignumber_js_1 = require("48ed688eae82d0cc");
const tatum_connector_1 = require("dcc7ef9d6de044f4");
const dto_1 = require("2ca6bd3ddeefc0b3");
const util_1 = require("bde24227b573f27c");
const extensions_1 = require("2f7919395be5c498");
const rpc_1 = require("19936533a1a0fbe2");
class MetaMask extends extensions_1.TatumSdkWalletProvider {
    constructor(tatumSdkContainer){
        super(tatumSdkContainer);
        this.supportedNetworks = dto_1.EVM_BASED_NETWORKS;
        this.config = this.tatumSdkContainer.getConfig();
        this.rpc = this.tatumSdkContainer.get(rpc_1.EvmRpc);
        this.connector = this.tatumSdkContainer.get(tatum_connector_1.TatumConnector);
    }
    /**
     * Connect to MetaMask wallet. this method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the address of the connected account. If not, it throws an error.
     * @returns address of the connected account.
     */ async getWallet() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (typeof window.ethereum === "undefined") throw new Error("MetaMask is not installed or its impossible to connect to it.");
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            return accounts[0];
        } catch (error) {
            console.error("User denied account access:", error);
            throw new Error(`User denied account access. Error is ${error}`);
        }
    }
    /**
     * Sign native transaction with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     * @param recipient recipient of the transaction
     * @param amount amount to be sent, in native currency (ETH, BSC)
     */ async transferNative(recipient, amount) {
        const payload = {
            to: recipient,
            from: await this.getWallet(),
            value: `0x${new bignumber_js_1.BigNumber(amount).multipliedBy(10 ** util_1.Constant.DECIMALS[this.config.network]).toString(16)}`
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Sign ERC-20 fungible token `transfer` transaction (https://ethereum.org/en/developers/docs/standards/tokens/erc-20/#methods) with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     * @param recipient recipient of the transaction
     * @param amount amount to be sent, in token currency
     * @param tokenAddress address of the token contract
     */ async transferErc20(recipient, amount, tokenAddress) {
        const { result: decimals } = await this.rpc.getTokenDecimals(tokenAddress);
        const payload = {
            to: tokenAddress,
            from: await this.getWallet(),
            data: `0xa9059cbb${util_1.Utils.padWithZero(recipient)}${new bignumber_js_1.BigNumber(amount).multipliedBy(10 ** decimals.toNumber()).toString(16).padStart(64, "0")}`
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Deploy new ERC-721 NFT Collection contract with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     */ async createNftCollection(body) {
        const { name, symbol, baseURI, author, minter } = body;
        const from = await this.getWallet();
        const { data } = await this.connector.post({
            path: `contract/deploy/prepare`,
            body: {
                contractType: "nft",
                params: [
                    name,
                    symbol,
                    baseURI || "",
                    author || from,
                    minter || from
                ]
            }
        });
        const payload = {
            from: from,
            data
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Deploy new ERC-20 Token (USDT or USDC like) contract with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     */ async createFungibleToken(body) {
        const from = await this.getWallet();
        const decimals = body.decimals || 18;
        const { data } = await this.connector.post({
            path: `contract/deploy/prepare`,
            body: {
                contractType: "fungible",
                params: [
                    body.name,
                    body.symbol,
                    decimals,
                    `0x${new bignumber_js_1.BigNumber(body.initialSupply).multipliedBy(10 ** decimals).toString(16)}`,
                    body.initialHolder || from,
                    body.admin || from,
                    body.minter || from,
                    body.pauser || from
                ]
            }
        });
        const payload = {
            from: from,
            data
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Deploy new ERC-1155 NFT Collection contract with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     */ async createErc1155NftCollection(body) {
        const { author, minter, baseURI } = body || {};
        const from = await this.getWallet();
        const { data } = await this.connector.post({
            path: `contract/deploy/prepare`,
            body: {
                contractType: "multitoken",
                params: [
                    author || from,
                    minter || from,
                    baseURI || ""
                ]
            }
        });
        const payload = {
            from: from,
            data
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Sign ERC-721 non-fungible token `safeTransferFrom` transaction (https://ethereum.org/en/developers/docs/standards/tokens/erc-721/#methods) with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     * @param recipient recipient of the transaction
     * @param tokenId ID of the NFT token
     * @param tokenAddress address of the token contract
     */ async transferNft(recipient, tokenId, tokenAddress) {
        const from = await this.getWallet();
        const payload = {
            to: tokenAddress,
            from: from,
            data: `0x42842e0e${util_1.Utils.padWithZero(from)}${util_1.Utils.padWithZero(recipient)}${new bignumber_js_1.BigNumber(tokenId).toString(16).padStart(64, "0")}`
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Sign ERC-20 fungible token `approve` transaction (https://ethereum.org/en/developers/docs/standards/tokens/erc-20/#methods) with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     * @param spender address to be approved to spend the tokens
     * @param amount amount to be sent, in token currency
     * @param tokenAddress address of the token contract
     */ async approveErc20(spender, amount, tokenAddress) {
        const { result: decimals } = await this.rpc.getTokenDecimals(tokenAddress);
        const payload = {
            to: tokenAddress,
            from: await this.getWallet(),
            data: `0x095ea7b3${util_1.Utils.padWithZero(spender)}${new bignumber_js_1.BigNumber(amount).multipliedBy(10 ** decimals.toNumber()).toString(16).padStart(64, "0")}`
        };
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
    /**
     * Sign custom transaction with MetaMask wallet. This method checks if MetaMask is installed and if it is connected to the browser.
     * If so, it returns the signed transaction hash. If not, it throws an error.
     * @param payload Transaction payload. From field is ignored and will be overwritten by the connected account.
     */ async signAndBroadcast(payload) {
        payload.from = await this.getWallet();
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/return-await
            return await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    payload
                ]
            });
        } catch (e) {
            console.error("User denied transaction signature:", e);
            throw new Error(`User denied transaction signature. Error is ${e}`);
        }
    }
}
exports.MetaMask = MetaMask;

},{"48ed688eae82d0cc":"57qkX","dcc7ef9d6de044f4":"brrBq","2ca6bd3ddeefc0b3":"lqU6b","bde24227b573f27c":"luFgs","2f7919395be5c498":"haLWo","19936533a1a0fbe2":"5lVVf"}],"5lVVf":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("a11a6ae89d435980"), exports);
__exportStar(require("b719c71e5c34d6db"), exports);
__exportStar(require("58dec3a295826232"), exports);
__exportStar(require("92dd9a4132a50acd"), exports);
__exportStar(require("2838afc29c35e2ad"), exports);
__exportStar(require("a2de3b5a3ae9762e"), exports);

},{"a11a6ae89d435980":"eYgEy","b719c71e5c34d6db":"lqUlr","58dec3a295826232":"fDS1g","92dd9a4132a50acd":"1UMZP","2838afc29c35e2ad":"ggHXR","a2de3b5a3ae9762e":"auvMh"}],"eYgEy":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("7ba0753d48440def"), exports);
__exportStar(require("e39e17f35804c9c6"), exports);

},{"7ba0753d48440def":"bqrx9","e39e17f35804c9c6":"2iQXH"}],"bqrx9":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EvmLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvmLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("84c2a841591665be");
const util_1 = require("ad55313c86a10d3f");
const LoadBalancer_1 = require("b84909f166a3ac20");
const AbstractEvmRpc_1 = require("df9d71c3526c178c");
let EvmLoadBalancerRpc = EvmLoadBalancerRpc_1 = class EvmLoadBalancerRpc extends AbstractEvmRpc_1.AbstractEvmRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.loadBalancer.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return this.loadBalancer.rawRpcCall(body);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancer.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveNormalUrlWithFallback().url;
    }
};
EvmLoadBalancerRpc = EvmLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new EvmLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], EvmLoadBalancerRpc);
exports.EvmLoadBalancerRpc = EvmLoadBalancerRpc;

},{"84c2a841591665be":"lKbmC","ad55313c86a10d3f":"luFgs","b84909f166a3ac20":"cAGAc","df9d71c3526c178c":"9NASk"}],"9NASk":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractEvmRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const bignumber_js_1 = require("546845015e7522ac");
const typedi_1 = require("f25cb833262112c1");
const decode_1 = require("29233f5a79239c77");
let AbstractEvmRpc = class AbstractEvmRpc {
    async blockNumber() {
        const response = await this.rpcCall("eth_blockNumber");
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async call(callObject, blockNumber = "latest") {
        return this.rpcCall("eth_call", [
            callObject,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
    }
    async chainId() {
        const response = await this.rpcCall("eth_chainId");
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async clientVersion() {
        return this.rpcCall("web3_clientVersion");
    }
    async debugGetBadBlocks() {
        return this.rpcCall("debug_getBadBlocks");
    }
    async debugStorageRangeAt(blockHash, txIndex, contractAddress, startKey, maxResult) {
        return this.rpcCall("debug_storageRangeAt", [
            blockHash,
            txIndex,
            contractAddress,
            startKey,
            maxResult
        ]);
    }
    async debugTraceBlock(rplBlock, traceOptions) {
        const params = [
            rplBlock
        ];
        if (traceOptions) params.push(traceOptions);
        return this.rpcCall("debug_traceBlock", params);
    }
    async debugTraceBlockByHash(blockHash, traceOptions) {
        const params = [
            blockHash
        ];
        if (traceOptions) params.push(traceOptions);
        return this.rpcCall("debug_traceBlockByHash", params);
    }
    async debugTraceBlockByNumber(blockHash, traceOptions) {
        const params = [
            `0x${new bignumber_js_1.BigNumber(blockHash).toString(16)}`
        ];
        if (traceOptions) params.push(traceOptions);
        return this.rpcCall("debug_traceBlockByNumber", params);
    }
    async debugTraceCall(callObject, blockNumber, traceOptions) {
        const params = [
            callObject,
            blockNumber
        ];
        if (traceOptions) params.push(traceOptions);
        return this.rpcCall("debug_traceCall", params);
    }
    async debugTraceTransaction(txHash, traceOptions) {
        const params = [
            txHash
        ];
        if (traceOptions) params.push(traceOptions);
        return this.rpcCall("debug_traceTransaction", params);
    }
    async estimateGas(callObject) {
        const response = await this.rpcCall("eth_estimateGas", [
            callObject
        ]);
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async gasPrice() {
        const response = await this.rpcCall("eth_gasPrice");
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async maxPriorityFeePerGas() {
        const response = await this.rpcCall("eth_maxPriorityFeePerGas");
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getBalance(address, blockNumber = "latest") {
        const response = await this.rpcCall("eth_getBalance", [
            address,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getTokenDecimals(tokenAddress) {
        const response = await this.rpcCall("eth_call", [
            {
                to: tokenAddress,
                data: "0x313ce567"
            },
            "latest"
        ]);
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getTokenSymbol(tokenAddress) {
        const response = await this.rpcCall("eth_call", [
            {
                to: tokenAddress,
                data: "0x95d89b41"
            },
            "latest"
        ]);
        if (response.result) response.result = (0, decode_1.decodeHexString)(response.result);
        return response;
    }
    async getTokenName(tokenAddress) {
        const response = await this.rpcCall("eth_call", [
            {
                to: tokenAddress,
                data: "0x06fdde03"
            },
            "latest"
        ]);
        if (response.result) response.result = (0, decode_1.decodeHexString)(response.result);
        return response;
    }
    async getTokenCap(tokenAddress) {
        const response = await this.rpcCall("eth_call", [
            {
                to: tokenAddress,
                data: "0x355274ea"
            },
            "latest"
        ]);
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getTokenTotalSupply(tokenAddress) {
        const response = await this.rpcCall("eth_call", [
            {
                to: tokenAddress,
                data: "0x18160ddd"
            },
            "latest"
        ]);
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async supportsInterfaceERC1155(tokenAddress) {
        const response = await this.rpcCall("eth_call", [
            {
                to: tokenAddress,
                //kecakk256 of supportsInterface(bytes4) + ERC1155 interface id + padding to 64 bytes
                data: "0x01ffc9a7d9b67a2600000000000000000000000000000000000000000000000000000000"
            },
            "latest"
        ]);
        if (response.result) response.result = (0, decode_1.decodeUInt256)(response.result) === 1;
        return response;
    }
    async getContractAddress(txHash) {
        try {
            const txReceipt = await this.getTransactionReceipt(txHash);
            return txReceipt.result.contractAddress;
        } catch (e) {
            console.error("Failed to get contract address, transaction does not exist, or is not a contract creation tx or is not mined yet.");
            return null;
        }
    }
    async getBlockByHash(blockHash, includeTransactions = false) {
        return this.rpcCall("eth_getBlockByHash", [
            blockHash,
            includeTransactions
        ]);
    }
    async getBlockTransactionCountByHash(blockHash) {
        return this.rpcCall("eth_getBlockTransactionCountByHash", [
            blockHash
        ]);
    }
    async getBlockByNumber(blockNumber, full = true) {
        return this.rpcCall("eth_getBlockByNumber", [
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber,
            full
        ]);
    }
    async getBlockTransactionCountByNumber(blockNumber) {
        return this.rpcCall("eth_getBlockTransactionCountByNumber", [
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
    }
    async getCode(address, blockNumber = "latest") {
        if (!blockNumber) blockNumber = "latest";
        return this.rpcCall("eth_getCode", [
            address,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
    }
    async getLogs(filter) {
        return this.rpcCall("eth_getLogs", [
            filter
        ]);
    }
    async getProof(address, storageKeys, blockNumber = "latest") {
        return this.rpcCall("eth_getProof", [
            address,
            storageKeys,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
    }
    async getStorageAt(address, position, blockNumber = "latest") {
        if (!blockNumber) blockNumber = "latest";
        return this.rpcCall("eth_getStorageAt", [
            address,
            position,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
    }
    async getTransactionByBlockHashAndIndex(blockHash, index) {
        return this.rpcCall("eth_getTransactionByBlockHashAndIndex", [
            blockHash,
            `0x${new bignumber_js_1.BigNumber(index).toString(16)}`
        ]);
    }
    async getTransactionByBlockNumberAndIndex(blockNumber, index) {
        return this.rpcCall("eth_getTransactionByBlockNumberAndIndex", [
            `0x${new bignumber_js_1.BigNumber(blockNumber).toString(16)}`,
            `0x${new bignumber_js_1.BigNumber(index).toString(16)}`
        ]);
    }
    async getTransactionByHash(txHash) {
        return this.rpcCall("eth_getTransactionByHash", [
            txHash
        ]);
    }
    async getTransactionCount(address, blockNumber = "latest") {
        const response = await this.rpcCall("eth_getTransactionCount", [
            address,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getTransactionReceipt(transactionHash) {
        return this.rpcCall("eth_getTransactionReceipt", [
            transactionHash
        ]);
    }
    async getBlockReceipts(blockNumber) {
        return this.rpcCall("eth_getBlockReceipts", [
            `0x${new bignumber_js_1.BigNumber(blockNumber).toString(16)}`
        ]);
    }
    async getUncleByBlockHashAndIndex(blockHash, index) {
        return this.rpcCall("eth_getUncleByBlockHashAndIndex", [
            blockHash,
            `0x${new bignumber_js_1.BigNumber(index).toString(16)}`
        ]);
    }
    async getUncleByBlockNumberAndIndex(blockNumber, index) {
        return this.rpcCall("eth_getUncleByBlockNumberAndIndex", [
            `0x${new bignumber_js_1.BigNumber(blockNumber).toString(16)}`,
            `0x${new bignumber_js_1.BigNumber(index).toString(16)}`
        ]);
    }
    async getUncleCountByBlockHash(blockHash) {
        return this.rpcCall("eth_getUncleCountByBlockHash", [
            blockHash
        ]);
    }
    async getUncleCountByBlockNumber(blockNumber) {
        return this.rpcCall("eth_getUncleCountByBlockNumber", [
            `0x${new bignumber_js_1.BigNumber(blockNumber).toString(16)}`
        ]);
    }
    async protocolVersion() {
        return this.rpcCall("eth_protocolVersion");
    }
    async sendRawTransaction(signedTransactionData) {
        return this.rpcCall("eth_sendRawTransaction", [
            signedTransactionData
        ]);
    }
    async sha3(data) {
        return this.rpcCall("web3_sha", [
            data
        ]);
    }
    async syncing() {
        return this.rpcCall("eth_syncing");
    }
    async traceBlock(blockNumber, traceOptions) {
        return this.rpcCall("trace_block", [
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber,
            traceOptions
        ]);
    }
    async traceCall(callObject, traceTypes, blockNumber = "latest") {
        return this.rpcCall("trace_call", [
            callObject,
            traceTypes,
            {
                blockNumber: typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
            }
        ]);
    }
    async traceCallMany(callObject, traceType, blockNumber) {
        const params = callObject.map((call, index)=>{
            return [
                call,
                traceType[index]
            ];
        });
        return this.rpcCall("trace_callMany", [
            params,
            typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
        ]);
    }
    async traceRawTransaction(signedTransactionData, traceOptions) {
        return this.rpcCall("trace_rawTransaction", [
            signedTransactionData,
            traceOptions
        ]);
    }
    async traceReplayBlockTransactions(blockNumber, traceOptions) {
        return this.rpcCall("trace_replayBlockTransactions", [
            blockNumber,
            traceOptions
        ]);
    }
    async traceReplayTransaction(txHash, traceOptions) {
        return this.rpcCall("trace_replayTransaction", [
            txHash,
            traceOptions
        ]);
    }
    async traceTransaction(txHash) {
        return this.rpcCall("trace_transaction", [
            txHash
        ]);
    }
    async txPoolContent() {
        return this.rpcCall("txpool_content");
    }
    async txPoolInspect() {
        return this.rpcCall("txpool_inspect");
    }
    async txPoolStatus() {
        return this.rpcCall("txpool_status");
    }
};
AbstractEvmRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractEvmRpc);
exports.AbstractEvmRpc = AbstractEvmRpc;

},{"546845015e7522ac":"57qkX","f25cb833262112c1":"lKbmC","29233f5a79239c77":"axE5P"}],"axE5P":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeHexString = exports.decodeUInt256 = void 0;
function decodeUInt256(hex) {
    const formattedHex = hex.replace(/^0x/, ""); // Remove 0x
    return Number("0x" + formattedHex);
}
exports.decodeUInt256 = decodeUInt256;
function decodeHexString(hex) {
    const formattedHex = hex.replace(/^(0x)?0+/, ""); // Remove 0x and leading zeros
    const byteLength = formattedHex.length / 2;
    const bytes = [];
    for(let i = 0; i < byteLength; i++){
        const byte = parseInt(formattedHex.substr(i * 2, 2), 16); // Get the current byte
        bytes.push(byte);
    }
    return bytes.map((byte)=>String.fromCharCode(byte)).filter((char)=>/[a-zA-Z0-9]/.test(char)).join("");
}
exports.decodeHexString = decodeHexString;

},{}],"2iQXH":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EvmRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvmRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("ea40c93aa618d306");
const util_1 = require("d28a5441209f036f");
const GenericRpc_1 = require("809d29e59221ce3f");
const AbstractEvmRpc_1 = require("645b4b7b79751814");
let EvmRpc = EvmRpc_1 = class EvmRpc extends AbstractEvmRpc_1.AbstractEvmRpc {
    constructor(id){
        super();
        this.genericRpc = typedi_1.Container.of(id).get(GenericRpc_1.GenericRpc);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.genericRpc.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return await this.genericRpc.rawRpcCall(body);
    }
    async rawBatchRpcCall(body) {
        return this.genericRpc.rawBatchRpcCall(body);
    }
    destroy() {
    // do nothing
    }
};
EvmRpc = EvmRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new EvmRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], EvmRpc);
exports.EvmRpc = EvmRpc;

},{"ea40c93aa618d306":"lKbmC","d28a5441209f036f":"luFgs","809d29e59221ce3f":"eYtCk","645b4b7b79751814":"9NASk"}],"eYtCk":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GenericRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenericRpc = void 0;
const typedi_1 = require("5c75a253b1ad80cf");
const util_1 = require("df41375b01fc8119");
const AbstractBatchRpc_1 = require("41f91cd9353e83a9");
let GenericRpc = GenericRpc_1 = class GenericRpc extends AbstractBatchRpc_1.AbstractBatchRpc {
    constructor(id){
        super(id);
        this.config = typedi_1.Container.of(id).get(util_1.CONFIG);
    }
};
GenericRpc = GenericRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new GenericRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], GenericRpc);
exports.GenericRpc = GenericRpc;

},{"5c75a253b1ad80cf":"lKbmC","df41375b01fc8119":"luFgs","41f91cd9353e83a9":"ahWRU"}],"ahWRU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractBatchRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("97b5213a63f2e29b");
const tatum_connector_1 = require("aa065bbee9eb06ac");
const util_1 = require("313b1a17968e6d88");
class AbstractBatchRpc {
    constructor(id){
        this.id = id;
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
    }
    getRpcNodeUrl(subPath) {
        return util_1.Utils.getV3RpcUrl(this.config, subPath);
    }
    rawRpcCall(body) {
        return this.connector.rpcCall(this.getRpcNodeUrl(), body);
    }
    rawBatchRpcCall(body) {
        return this.connector.rpcCall(this.getRpcNodeUrl(), body);
    }
    destroy() {
    // do nothing
    }
}
exports.AbstractBatchRpc = AbstractBatchRpc;

},{"97b5213a63f2e29b":"lKbmC","aa065bbee9eb06ac":"brrBq","313b1a17968e6d88":"luFgs"}],"lqUlr":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractTronRpc = void 0;
const typedi_1 = require("663cc297473943e4");
const util_1 = require("d67fb9260e2c31d9");
const AbstractEvmRpc_1 = require("ad7b9166bff63f34");
let AbstractTronRpc = class AbstractTronRpc extends AbstractEvmRpc_1.AbstractEvmRpc {
    sendPost({ path, body, notConvertCamelToSnake }) {
        const post = {
            path
        };
        if (body) post.body = notConvertCamelToSnake ? body : util_1.Utils.convertObjCamelToSnake(body);
        return this.post(post);
    }
    accountPermissionUpdate(ownerAddress, actives, owner, options) {
        return this.sendPost({
            path: "/wallet/accountpermissionupdate",
            body: {
                ownerAddress,
                actives,
                owner,
                ...options
            }
        });
    }
    broadcastHex(transaction) {
        return this.sendPost({
            path: "/wallet/broadcasthex",
            body: {
                transaction
            }
        });
    }
    broadcastTransaction(rawBody) {
        return this.sendPost({
            path: "/wallet/broadcasttransaction",
            body: rawBody,
            notConvertCamelToSnake: true
        });
    }
    clearAbi(ownerAddress, contractAddress, options) {
        return this.sendPost({
            path: "/wallet/clearabi",
            body: {
                ownerAddress,
                contractAddress,
                ...options
            }
        });
    }
    createAccount(ownerAddress, accountAddress, options) {
        return this.sendPost({
            path: "/wallet/createaccount",
            body: {
                ownerAddress,
                accountAddress,
                ...options
            },
            notConvertCamelToSnake: true
        });
    }
    createAssetIssue(ownerAddress, name, abbr, totalSupply, trxNum, num, startTime, endTime, url, options) {
        return this.sendPost({
            path: "/wallet/createassetissue",
            body: {
                ownerAddress,
                name,
                abbr,
                totalSupply,
                trxNum,
                num,
                startTime,
                endTime,
                url,
                ...options
            },
            notConvertCamelToSnake: true
        });
    }
    createTransaction(ownerAddress, toAddress, amount, options) {
        return this.sendPost({
            path: "/wallet/createtransaction",
            body: {
                ownerAddress,
                toAddress,
                amount,
                ...options
            }
        });
    }
    delegateResource(ownerAddress, receiverAddress, balance, resource, lock, options) {
        return this.sendPost({
            path: "/wallet/delegateresource",
            body: {
                ownerAddress,
                receiverAddress,
                balance,
                resource,
                lock,
                ...options
            }
        });
    }
    deployContract(abi, bytecode, ownerAddress, name, options) {
        return this.sendPost({
            path: "/wallet/deploycontract",
            body: {
                abi,
                bytecode,
                ownerAddress,
                name,
                ...options
            }
        });
    }
    estimateEnergy(ownerAddress, contractAddress, functionSelector, parameter, options) {
        return this.sendPost({
            path: "/wallet/estimateenergy",
            body: {
                ownerAddress,
                contractAddress,
                functionSelector,
                parameter,
                ...options
            }
        });
    }
    freezeBalance(ownerAddress, frozenBalance, frozenDuration, resource, options) {
        return this.sendPost({
            path: "/wallet/freezebalance",
            body: {
                ownerAddress,
                frozenBalance,
                frozenDuration,
                resource,
                ...options
            }
        });
    }
    freezeBalanceV2(ownerAddress, frozenBalance, resource, options) {
        return this.sendPost({
            path: "/wallet/freezebalancev2",
            body: {
                ownerAddress,
                frozenBalance,
                resource,
                ...options
            }
        });
    }
    getAccount(address, options) {
        return this.sendPost({
            path: "/wallet/getaccount",
            body: {
                address,
                ...options
            }
        });
    }
    getAccountBalance(accountIdentifier, blockIdentifier, options) {
        return this.sendPost({
            path: "/wallet/getaccountbalance",
            body: {
                accountIdentifier,
                blockIdentifier,
                ...options
            }
        });
    }
    getAccountNet(address, options) {
        return this.sendPost({
            path: "/wallet/getaccountnet",
            body: {
                address,
                ...options
            }
        });
    }
    getAccountResources(address, options) {
        return this.sendPost({
            path: "/wallet/getaccountresource",
            body: {
                address,
                ...options
            }
        });
    }
    getAssetIssueByAccount(address, options) {
        return this.sendPost({
            path: "/wallet/getassetissuebyaccount",
            body: {
                address,
                ...options
            }
        });
    }
    getAssetIssueById(value) {
        return this.sendPost({
            path: "/wallet/getassetissuebyid",
            body: {
                value
            }
        });
    }
    getAssetIssueByName(value) {
        return this.sendPost({
            path: "/wallet/getassetissuebyname",
            body: {
                value
            }
        });
    }
    getAssetIssueList() {
        return this.sendPost({
            path: "/wallet/getassetissuelist"
        });
    }
    getAssetIssueListByName(value) {
        return this.sendPost({
            path: "/wallet/getassetissuelistbyname",
            body: util_1.Utils.convertObjCamelToSnake({
                value
            })
        });
    }
    getAvailableUnfreezeCount(ownerAddress, options) {
        return this.sendPost({
            path: "/wallet/getavailableunfreezecount",
            body: util_1.Utils.convertObjCamelToSnake({
                ownerAddress,
                ...options
            })
        });
    }
    getBandwidthPrices() {
        return this.sendPost({
            path: "/wallet/getbandwidthprices"
        });
    }
    getBlock(idOrNum, options) {
        return this.sendPost({
            path: "/wallet/getblock",
            body: {
                idOrNum,
                ...options
            }
        });
    }
    getBlockBalance(hash, number, options) {
        return this.sendPost({
            path: "/wallet/getblockbalance",
            body: {
                hash,
                number,
                ...options
            }
        });
    }
    getBlockById(id) {
        return this.sendPost({
            path: "/wallet/getblockbyid",
            body: {
                value: id
            }
        });
    }
    getBlockByLatestNum(num) {
        return this.sendPost({
            path: "/wallet/getblockbylatestnum",
            body: {
                num
            }
        });
    }
    getBlockByLimitNext(startNum, endNum) {
        return this.sendPost({
            path: "/wallet/getblockbylimitnext",
            body: {
                startNum,
                endNum
            },
            notConvertCamelToSnake: true
        });
    }
    getBlockByNum(num) {
        return this.sendPost({
            path: "/wallet/getblockbynum",
            body: {
                num
            }
        });
    }
    getBurnTRX() {
        return this.sendPost({
            path: "/wallet/getburntrx"
        });
    }
    getCanDelegatedMaxSize(ownerAddress, type, options) {
        return this.sendPost({
            path: "/wallet/getcandelegatedmaxsize",
            body: {
                ownerAddress,
                type,
                ...options
            }
        });
    }
    getCanWithdrawUnfreezeAmount(ownerAddress, options) {
        return this.sendPost({
            path: "/wallet/getcanwithdrawunfreezeamount",
            body: {
                ownerAddress,
                ...options
            }
        });
    }
    getChainParameters() {
        return this.sendPost({
            path: "/wallet/getchainparameters"
        });
    }
    getContract(value, options) {
        return this.sendPost({
            path: "/wallet/getcontract",
            body: {
                value,
                ...options
            }
        });
    }
    getContractInfo(value, options) {
        return this.sendPost({
            path: "/wallet/getcontractinfo",
            body: {
                value,
                ...options
            }
        });
    }
    getDelegatedResource(fromAddress, toAddress, options) {
        return this.sendPost({
            path: "/wallet/getdelegatedresource",
            body: {
                fromAddress,
                toAddress,
                ...options
            }
        });
    }
    getDelegatedResourceAccountIndex(value, options) {
        return this.sendPost({
            path: "/wallet/getdelegatedresourceaccountindex",
            body: {
                value,
                ...options
            }
        });
    }
    getDelegatedResourceAccountIndexV2(value, options) {
        return this.sendPost({
            path: "/wallet/getdelegatedresourceaccountindexv2",
            body: {
                value,
                ...options
            }
        });
    }
    getDelegatedResourceV2(fromAddress, toAddress, options) {
        return this.sendPost({
            path: "/wallet/getdelegatedresourcev2",
            body: {
                fromAddress,
                toAddress,
                ...options
            }
        });
    }
    getEnergyPrices() {
        return this.sendPost({
            path: "/wallet/getenergyprices"
        });
    }
    getNodeInfo() {
        return this.sendPost({
            path: "/wallet/getnodeinfo"
        });
    }
    getNowBlock() {
        return this.sendPost({
            path: "/wallet/getnowblock"
        });
    }
    getPaginatedAssetIssueList(offset, limit) {
        return this.sendPost({
            path: "/wallet/getpaginatedassetissuelist",
            body: {
                offset,
                limit
            }
        });
    }
    getTransactionById(value, options) {
        return this.sendPost({
            path: "/wallet/gettransactionbyid",
            body: {
                value,
                ...options
            }
        });
    }
    getTransactionInfoByBlockNum(num) {
        return this.sendPost({
            path: "/wallet/gettransactioninfobyblocknum",
            body: {
                num
            }
        });
    }
    getTransactionInfoById(value) {
        return this.sendPost({
            path: "/wallet/gettransactioninfobyid",
            body: {
                value
            }
        });
    }
    listNodes() {
        return this.sendPost({
            path: "/wallet/listnodes"
        });
    }
    participateAssetIssue(toAddress, ownerAddress, assetName, amount, options) {
        return this.sendPost({
            path: "/wallet/participateassetissue",
            body: {
                toAddress,
                ownerAddress,
                assetName,
                amount,
                ...options
            }
        });
    }
    transferAsset(ownerAddress, toAddress, assetName, amount, options) {
        return this.sendPost({
            path: "/wallet/transferasset",
            body: {
                ownerAddress,
                toAddress,
                assetName,
                amount,
                ...options
            }
        });
    }
    triggerConstantContract(ownerAddress, contractAddress, functionSelector, parameter, options) {
        return this.sendPost({
            path: "/wallet/triggerconstantcontract",
            body: {
                ownerAddress,
                contractAddress,
                functionSelector,
                parameter,
                ...options
            }
        });
    }
    triggerSmartContract(ownerAddress, contractAddress, functionSelector, parameter, options) {
        return this.sendPost({
            path: "/wallet/triggersmartcontract",
            body: {
                ownerAddress,
                contractAddress,
                functionSelector,
                parameter,
                ...options
            }
        });
    }
    unDelegateResource(ownerAddress, receiverAddress, balance, resource, lock, options) {
        return this.sendPost({
            path: "/wallet/undelegateresource",
            body: {
                ownerAddress,
                receiverAddress,
                balance,
                resource,
                lock,
                ...options
            }
        });
    }
    unfreezeAsset(ownerAddress, options) {
        return this.sendPost({
            path: "/wallet/unfreezeasset",
            body: {
                ownerAddress,
                ...options
            }
        });
    }
    unfreezeBalance(ownerAddress, resource, options) {
        return this.sendPost({
            path: "/wallet/unfreezebalance",
            body: {
                ownerAddress,
                resource,
                ...options
            }
        });
    }
    unfreezeBalanceV2(ownerAddress, unfreezeBalance, resource, options) {
        return this.sendPost({
            path: "/wallet/unfreezebalancev2",
            body: {
                ownerAddress,
                unfreezeBalance,
                resource,
                ...options
            }
        });
    }
    updateAccount(ownerAddress, accountName, options) {
        return this.sendPost({
            path: "/wallet/updateaccount",
            body: {
                ownerAddress,
                accountName,
                ...options
            }
        });
    }
    updateAsset(ownerAddress, url, options) {
        return this.sendPost({
            path: "/wallet/updateasset",
            body: {
                ownerAddress,
                url,
                ...options
            }
        });
    }
    updateEnergyLimit(ownerAddress, contractAddress, originEnergyLimit, options) {
        return this.sendPost({
            path: "/wallet/updateenergylimit",
            body: {
                ownerAddress,
                contractAddress,
                originEnergyLimit,
                ...options
            }
        });
    }
    updateSetting(ownerAddress, contractAddress, consumeUserResourcePercent, options) {
        return this.sendPost({
            path: "/wallet/updatesetting",
            body: {
                ownerAddress,
                contractAddress,
                consumeUserResourcePercent,
                ...options
            }
        });
    }
    validateAddress(address, options) {
        return this.sendPost({
            path: "/wallet/validateaddress",
            body: {
                address,
                ...options
            }
        });
    }
    withdrawExpireUnfreeze(ownerAddress, options) {
        return this.sendPost({
            path: "/wallet/withdrawexpireunfreeze",
            body: {
                ownerAddress,
                ...options
            }
        });
    }
};
AbstractTronRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractTronRpc);
exports.AbstractTronRpc = AbstractTronRpc;

},{"663cc297473943e4":"lKbmC","d67fb9260e2c31d9":"luFgs","ad7b9166bff63f34":"9NASk"}],"fDS1g":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("c10e6787dcd43ccd"), exports);
__exportStar(require("dfdbe6f3b4040df9"), exports);
__exportStar(require("9258ff04c0c79348"), exports);

},{"c10e6787dcd43ccd":"ahWRU","dfdbe6f3b4040df9":"eYtCk","9258ff04c0c79348":"cAGAc"}],"1UMZP":[function(require,module,exports) {
"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */ var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractSolanaRpc = void 0;
const typedi_1 = require("99502429c40243ba");
let AbstractSolanaRpc = class AbstractSolanaRpc {
    getAccountInfo(pubkey, options) {
        return this.rpcCall("getAccountInfo", [
            pubkey,
            options
        ]);
    }
    getBalance(address) {
        return this.rpcCall("getBalance", [
            address
        ]);
    }
    getBlockHeight(options) {
        return this.rpcCall("getBlockHeight", [
            options
        ]);
    }
    getBlock(block, options) {
        return this.rpcCall("getBlock", [
            block,
            options
        ]);
    }
    getBlockProduction(options) {
        return this.rpcCall("getBlockProduction", [
            options
        ]);
    }
    getBlockCommitment(block) {
        return this.rpcCall("getBlockCommitment", [
            block
        ]);
    }
    getBlocks(startSlot, endSlot, options) {
        const params = [
            startSlot
        ];
        if (endSlot) params.push(endSlot);
        if (options && options.commitment) params.push(options);
        return this.rpcCall("getBlocks", params);
    }
    getBlocksWithLimit(startSlot, limit, options) {
        const params = [
            startSlot
        ];
        if (limit) params.push(limit);
        if (options && options.commitment) params.push(options);
        return this.rpcCall("getBlocksWithLimit", params);
    }
    getBlockTime(block) {
        return this.rpcCall("getBlockTime", [
            block
        ]);
    }
    getClusterNodes() {
        return this.rpcCall("getClusterNodes");
    }
    getEpochInfo(options) {
        return this.rpcCall("getEpochInfo", [
            options
        ]);
    }
    getEpochSchedule() {
        return this.rpcCall("getEpochSchedule");
    }
    getFeeForMessage(message, options) {
        return this.rpcCall("getFeeForMessage", [
            message,
            options
        ]);
    }
    getFirstAvailableBlock() {
        return this.rpcCall("getFirstAvailableBlock");
    }
    getGenesisHash() {
        return this.rpcCall("getGenesisHash");
    }
    getHealth() {
        return this.rpcCall("getHealth");
    }
    getHighestSnapshotSlot() {
        return this.rpcCall("getHighestSnapshotSlot");
    }
    getIdentity() {
        return this.rpcCall("getIdentity");
    }
    getInflationGovernor(options) {
        return this.rpcCall("getInflationGovernor", [
            options
        ]);
    }
    getInflationRate() {
        return this.rpcCall("getInflationRate");
    }
    getInflationReward(addresses, options) {
        const params = [];
        if (addresses) params.push(addresses);
        if (options) params.push(options);
        return this.rpcCall("getInflationReward", params);
    }
    getLargestAccounts(options) {
        return this.rpcCall("getLargestAccounts", [
            options
        ]);
    }
    getLatestBlockhash(options) {
        return this.rpcCall("getLatestBlockhash", [
            options
        ]);
    }
    getLeaderSchedule(slot, options) {
        const params = [];
        if (slot) params.push(slot);
        if (options) params.push(options);
        return this.rpcCall("getLeaderSchedule", params);
    }
    getMaxRetransmitSlot() {
        return this.rpcCall("getMaxRetransmitSlot");
    }
    getMaxShredInsertSlot() {
        return this.rpcCall("getMaxShredInsertSlot");
    }
    getMinimumBalanceForRentExemption(dataSize, options) {
        return this.rpcCall("getMinimumBalanceForRentExemption", [
            dataSize,
            options
        ]);
    }
    getMultipleAccounts(pubKeys, options) {
        return this.rpcCall("getMultipleAccounts", [
            pubKeys,
            options
        ]);
    }
    getProgramAccounts(programId, options) {
        return this.rpcCall("getProgramAccounts", [
            programId,
            options
        ]);
    }
    getRecentPerformanceSamples(limit) {
        return this.rpcCall("getRecentPerformanceSamples", [
            limit
        ]);
    }
    getRecentPrioritizationFees(addresses) {
        return this.rpcCall("getRecentPrioritizationFees", [
            addresses
        ]);
    }
    getSignaturesForAddress(address, options) {
        return this.rpcCall("getSignaturesForAddress", [
            address,
            options
        ]);
    }
    getSignatureStatuses(signatures, options) {
        return this.rpcCall("getSignatureStatuses", [
            signatures,
            options
        ]);
    }
    getSlot(options) {
        return this.rpcCall("getSlot", [
            options
        ]);
    }
    getSlotLeader(options) {
        return this.rpcCall("getSlotLeader", [
            options
        ]);
    }
    getSlotLeaders(startSlot, limit) {
        return this.rpcCall("getSlotLeaders", [
            startSlot,
            limit
        ]);
    }
    getStakeActivation(pubkey, options) {
        return this.rpcCall("getStakeActivation", [
            pubkey,
            options
        ]);
    }
    getStakeMinimumDelegation(options) {
        return this.rpcCall("getStakeMinimumDelegation", [
            options
        ]);
    }
    getSupply(options) {
        return this.rpcCall("getSupply", [
            options
        ]);
    }
    getTokenAccountBalance(pubkey, options) {
        return this.rpcCall("getTokenAccountBalance", [
            pubkey,
            options
        ]);
    }
    getTokenAccountsByDelegate(pubkey, config, options) {
        const params = [
            pubkey
        ];
        if (config) params.push(config);
        if (options) params.push(options);
        return this.rpcCall("getTokenAccountsByDelegate", params);
    }
    getTokenAccountsByOwner(pubkey, config, options) {
        const params = [
            pubkey
        ];
        if (config) params.push(config);
        if (options) params.push(options);
        return this.rpcCall("getTokenAccountsByOwner", params);
    }
    getTokenLargestAccounts(pubkey, options) {
        return this.rpcCall("getTokenLargestAccounts", [
            pubkey,
            options
        ]);
    }
    getTokenSupply(pubkey, options) {
        return this.rpcCall("getTokenSupply", [
            pubkey,
            options
        ]);
    }
    getTransaction(signature, options) {
        return this.rpcCall("getTransaction", [
            signature,
            options
        ]);
    }
    getTransactionCount(options) {
        return this.rpcCall("getTransactionCount", [
            options
        ]);
    }
    getVersion() {
        return this.rpcCall("getVersion");
    }
    getVoteAccounts(options) {
        return this.rpcCall("getVoteAccounts", [
            options
        ]);
    }
    isBlockhashValid(blockhash, options) {
        return this.rpcCall("isBlockhashValid", [
            blockhash,
            options
        ]);
    }
    minimumLedgerSlot() {
        return this.rpcCall("minimumLedgerSlot");
    }
    requestAirdrop(pubkey, amount, options) {
        return this.rpcCall("requestAirdrop", [
            pubkey,
            amount,
            options
        ]);
    }
    sendTransaction(transaction, options) {
        return this.rpcCall("sendTransaction", [
            transaction,
            options
        ]);
    }
    simulateTransaction(transaction, options) {
        return this.rpcCall("simulateTransaction", [
            transaction,
            options
        ]);
    }
};
AbstractSolanaRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractSolanaRpc);
exports.AbstractSolanaRpc = AbstractSolanaRpc;

},{"99502429c40243ba":"lKbmC"}],"ggHXR":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractXrpRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("8bce4b23c521413f");
const util_1 = require("cc1eac8bad22176d");
const generateXrpParams = (required, optional)=>{
    const xrpParams = {};
    const props = (required ? Object.entries(required) : []).concat(optional ? Object.entries(optional) : []);
    for (const [name, value] of props)xrpParams[util_1.Utils.camelToSnakeCase(name)] = value;
    return [
        xrpParams
    ];
};
let AbstractXrpRpc = class AbstractXrpRpc {
    accountChannels(account, options) {
        return this.rpcCall("account_channels", generateXrpParams({
            account
        }, options));
    }
    accountCurrencies(account, options) {
        return this.rpcCall("account_currencies", generateXrpParams({
            account
        }, options));
    }
    accountInfo(account, options) {
        return this.rpcCall("account_info", generateXrpParams({
            account
        }, options));
    }
    accountLines(account, options) {
        return this.rpcCall("account_lines", generateXrpParams({
            account
        }, options));
    }
    accountNfts(account, options) {
        return this.rpcCall("account_nfts", generateXrpParams({
            account
        }, options));
    }
    accountObjects(account, options) {
        return this.rpcCall("account_objects", generateXrpParams({
            account
        }, options));
    }
    accountOffers(account, options) {
        return this.rpcCall("account_offers", generateXrpParams({
            account
        }, options));
    }
    accountTx(account, options) {
        return this.rpcCall("account_tx", generateXrpParams({
            account
        }, options));
    }
    gatewayBalances(account, options) {
        return this.rpcCall("gateway_balances", generateXrpParams({
            account
        }, options));
    }
    norippleCheck(account, role, options) {
        return this.rpcCall("noripple_check", generateXrpParams({
            account,
            role
        }, options));
    }
    ledger(options) {
        return this.rpcCall("ledger", generateXrpParams({}, options));
    }
    ledgerClosed() {
        return this.rpcCall("ledger_closed");
    }
    ledgerCurrent() {
        return this.rpcCall("ledger_current");
    }
    ledgerData(options) {
        return this.rpcCall("ledger_data", generateXrpParams({}, options));
    }
    ledgerEntry(options) {
        return this.rpcCall("ledger_entry", generateXrpParams({}, options));
    }
    submit(tx, options) {
        return this.rpcCall("submit", generateXrpParams(typeof tx === "string" ? {
            txBlob: tx
        } : {
            txJson: tx
        }, options));
    }
    submitMultisigned(txJson, options) {
        return this.rpcCall("submit_multisigned", generateXrpParams({
            txJson
        }, options));
    }
    transactionEntry(txHash, options) {
        return this.rpcCall("transaction_entry", generateXrpParams({
            txHash
        }, options));
    }
    tx(transaction, options) {
        return this.rpcCall("tx", generateXrpParams({
            transaction
        }, options));
    }
    txHistory(start) {
        return this.rpcCall("txHistory", generateXrpParams({
            start
        }));
    }
    sign(txJson, options) {
        return this.rpcCall("sign", generateXrpParams({
            txJson
        }, options));
    }
    signFor(account, txJson, options) {
        return this.rpcCall("sign_for", generateXrpParams({
            account,
            txJson
        }, options));
    }
    bookOffers(takerGets, takerPays, options) {
        return this.rpcCall("book_offers", generateXrpParams({
            takerGets,
            takerPays
        }, options));
    }
    depositAuthorized(sourceAccount, destinationAccount, options) {
        return this.rpcCall("deposit_authorized", generateXrpParams({
            sourceAccount,
            destinationAccount
        }, options));
    }
    nftBuyOffers(nftId, options) {
        return this.rpcCall("nft_buy_offers", generateXrpParams({
            nftId
        }, options));
    }
    nftSellOffers(nftId, options) {
        return this.rpcCall("nft_sell_offers", generateXrpParams({
            nftId
        }, options));
    }
    ripplePathFind(sourceAccount, destinationAccount, destinationAmount, options) {
        return this.rpcCall("ripple_path_find", generateXrpParams({
            sourceAccount,
            destinationAccount,
            destinationAmount
        }, options));
    }
    channelAuthorize(amount, channelId, options) {
        return this.rpcCall("channel_authorize", generateXrpParams({
            amount,
            channelId
        }, options));
    }
    channelVerify(amount, channelId, publicKey, signature) {
        return this.rpcCall("channel_verify", generateXrpParams({
            amount,
            channelId,
            publicKey,
            signature
        }));
    }
    fee() {
        return this.rpcCall("fee");
    }
    serverInfo() {
        return this.rpcCall("server_info");
    }
    serverState() {
        return this.rpcCall("server_state");
    }
    manifest(publicKey) {
        return this.rpcCall("manifest", generateXrpParams({
            publicKey
        }));
    }
    ping() {
        return this.rpcCall("ping");
    }
    random() {
        return this.rpcCall("random");
    }
};
AbstractXrpRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractXrpRpc);
exports.AbstractXrpRpc = AbstractXrpRpc;

},{"8bce4b23c521413f":"lKbmC","cc1eac8bad22176d":"luFgs"}],"auvMh":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("abc8bffd9d89b4f8"), exports);
__exportStar(require("aa7d668ba4e84c5b"), exports);

},{"abc8bffd9d89b4f8":"hyKKI","aa7d668ba4e84c5b":"6ORnJ"}],"hyKKI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractUtxoRpc = void 0;
class AbstractUtxoRpc {
    async createRawTransaction(inputs, outputs, locktime, replaceable) {
        const params = [
            inputs,
            outputs
        ];
        if (locktime) params.push(locktime);
        if (replaceable) params.push(replaceable);
        return this.rpcCall("createrawtransaction", params);
    }
    async decodeRawTransaction(hexstring) {
        return this.rpcCall("decoderawtransaction", [
            hexstring
        ]);
    }
    async decodeScript(hexstring) {
        return this.rpcCall("decodescript", [
            hexstring
        ]);
    }
    async estimateSmartFee(blocks, estimateMode) {
        const params = [
            blocks
        ];
        if (estimateMode) params.push(estimateMode);
        return this.rpcCall("estimatesmartfee", params);
    }
    async getBestBlockHash() {
        return this.rpcCall("getbestblockhash");
    }
    async getBlock(hashOrHeight, verbose = 1) {
        return this.rpcCall("getblock", [
            hashOrHeight,
            verbose
        ]);
    }
    async getBlockChainInfo() {
        return this.rpcCall("getblockchaininfo");
    }
    async getBlockCount() {
        return this.rpcCall("getblockcount");
    }
    async getBlockHash(height) {
        return this.rpcCall("getblockhash", [
            height
        ]);
    }
    async getBlockHeader(hash, verbose = true) {
        return this.rpcCall("getblockheader", [
            hash,
            verbose
        ]);
    }
    async getBlockStats(hash) {
        return this.rpcCall("getblockstats", [
            hash
        ]);
    }
    async getChainTips() {
        return this.rpcCall("getchaintips");
    }
    async getDifficulty() {
        return this.rpcCall("getdifficulty");
    }
    async getMempoolAncestors(txId, verbose = false) {
        return this.rpcCall("getmempoolancestors", [
            txId,
            verbose
        ]);
    }
    async getMempoolDescendants(txId, verbose = false) {
        return this.rpcCall("getmempooldescendants", [
            txId,
            verbose
        ]);
    }
    async getMempoolEntry(txId) {
        return this.rpcCall("getmempoolentry", [
            txId
        ]);
    }
    async getMempoolInfo() {
        return this.rpcCall("getmempoolinfo");
    }
    async getRawMemPool(verbose = false) {
        return this.rpcCall("getrawmempool", [
            verbose
        ]);
    }
    async getRawTransaction(txId, verbose = false) {
        return this.rpcCall("getrawtransaction", [
            txId,
            verbose
        ]);
    }
    async getTxOut(txId, index, includeMempool = true) {
        return this.rpcCall("gettxout", [
            txId,
            index,
            includeMempool
        ]);
    }
    async getTxOutProof(txIds, blockhash) {
        const params = [
            txIds
        ];
        if (blockhash) params.push(blockhash);
        return this.rpcCall("gettxoutproof", params);
    }
    async sendRawTransaction(hexstring) {
        return this.rpcCall("sendrawtransaction", [
            hexstring
        ]);
    }
    async validateAddress(address) {
        return this.rpcCall("validateaddress", [
            address
        ]);
    }
    async verifyMessage(address, signature, message) {
        return this.rpcCall("verifymessage", [
            address,
            signature,
            message
        ]);
    }
    async verifyTxOutProof(proof) {
        return this.rpcCall("verifytxoutproof", [
            proof
        ]);
    }
}
exports.AbstractUtxoRpc = AbstractUtxoRpc;

},{}],"6ORnJ":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UtxoRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UtxoRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("c6e66b1335004c0c");
const util_1 = require("88529eeca87e60fc");
const generic_1 = require("57de82d6082ba0ac");
const AbstractUtxoRpc_1 = require("d5a4c38b128dbaf2");
let UtxoRpc = UtxoRpc_1 = class UtxoRpc extends AbstractUtxoRpc_1.AbstractUtxoRpc {
    constructor(id){
        super();
        this.genericRpc = typedi_1.Container.of(id).get(generic_1.GenericRpc);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.genericRpc.rawRpcCall(preparedCall);
    }
    async rawBatchRpcCall(body) {
        return this.genericRpc.rawBatchRpcCall(body);
    }
    async rawRpcCall(body) {
        return await this.genericRpc.rawRpcCall(body);
    }
    destroy() {
    // do nothing
    }
    getRpcNodeUrl() {
        return this.genericRpc.getRpcNodeUrl();
    }
};
UtxoRpc = UtxoRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new UtxoRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], UtxoRpc);
exports.UtxoRpc = UtxoRpc;

},{"c6e66b1335004c0c":"lKbmC","88529eeca87e60fc":"luFgs","57de82d6082ba0ac":"fDS1g","d5a4c38b128dbaf2":"hyKKI"}],"3RM6W":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WalletProvider_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletProvider = void 0;
const typedi_1 = require("73824122b96c8b8f");
let WalletProvider = WalletProvider_1 = class WalletProvider {
    constructor(id){
        this.id = id;
    }
    /**
     * Works are an entrypoint to interact with wallet providers of choice.
     * @param type - Wallet Provider type imported to the SDK instance
     */ use(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    type) {
        return typedi_1.Container.of(this.id).get(type);
    }
};
WalletProvider = WalletProvider_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new WalletProvider_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], WalletProvider);
exports.WalletProvider = WalletProvider;

},{"73824122b96c8b8f":"lKbmC"}],"lr9hm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RpcNodeType = exports.ApiVersion = void 0;
var ApiVersion;
(function(ApiVersion) {
    ApiVersion["V3"] = "V3";
    ApiVersion["V4"] = "V4";
})(ApiVersion = exports.ApiVersion || (exports.ApiVersion = {}));
var RpcNodeType;
(function(RpcNodeType) {
    // Normal node without access to archive data
    RpcNodeType[RpcNodeType["NORMAL"] = 0] = "NORMAL";
    // Node with access to archive data, will be used for historical data
    RpcNodeType[RpcNodeType["ARCHIVE"] = 1] = "ARCHIVE";
})(RpcNodeType = exports.RpcNodeType || (exports.RpcNodeType = {}));

},{}],"34TUL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BinanceSmartChain = exports.Celo = exports.Polygon = exports.Ethereum = exports.Klaytn = exports.HorizenEon = exports.Chiliz = exports.Xdc = exports.Vechain = exports.Palm = exports.Optimism = exports.Oasis = exports.Kucoin = exports.HarmonyOne = exports.Flare = exports.Haqq = exports.Gnosis = exports.Fantom = exports.EthereumClassic = exports.Cronos = exports.AvalancheC = exports.Aurora = exports.ArbitrumOne = exports.ArbitrumNova = exports.FullEvm = exports.NotificationEvm = exports.FaucetEvm = exports.BaseEvm = void 0;
const typedi_1 = require("93b74eafa32e0238");
const util_1 = require("7c772ea13b34654d");
const address_1 = require("5c56e5edfcf002bc");
const faucet_1 = require("17fac0ccb18f6170");
const fee_1 = require("7ea01b03b864e81");
const ipfs_1 = require("6e3a6a47bb12687b");
const nft_1 = require("32c4966b1e3a22b8");
const notification_1 = require("3e4220946304dfa0");
const rate_1 = require("bb75d9fa7998cb4a");
const token_1 = require("ec2d5b18ac6659f9");
const tatum_1 = require("3f97677852bbd8c6");
class BaseEvm extends tatum_1.TatumSdkChain {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
        this.fee = typedi_1.Container.of(id).get(fee_1.FeeEvm);
        this.ipfs = typedi_1.Container.of(id).get(ipfs_1.Ipfs);
        this.rates = typedi_1.Container.of(id).get(rate_1.Rates);
    }
}
exports.BaseEvm = BaseEvm;
class FaucetEvm extends BaseEvm {
    constructor(id){
        super(id);
        this.faucet = typedi_1.Container.of(id).get(faucet_1.Faucet);
    }
}
exports.FaucetEvm = FaucetEvm;
class NotificationEvm extends BaseEvm {
    constructor(id){
        super(id);
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
    }
}
exports.NotificationEvm = NotificationEvm;
class FullEvm extends NotificationEvm {
    constructor(id){
        super(id);
        this.nft = typedi_1.Container.of(id).get(nft_1.Nft);
        this.token = typedi_1.Container.of(id).get(token_1.Token);
        this.faucet = typedi_1.Container.of(id).get(faucet_1.Faucet);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
    }
}
exports.FullEvm = FullEvm;
// Base class for all EVM based chains
class ArbitrumNova extends BaseEvm {
}
exports.ArbitrumNova = ArbitrumNova;
class ArbitrumOne extends BaseEvm {
}
exports.ArbitrumOne = ArbitrumOne;
class Aurora extends BaseEvm {
}
exports.Aurora = Aurora;
class AvalancheC extends BaseEvm {
}
exports.AvalancheC = AvalancheC;
class Cronos extends BaseEvm {
}
exports.Cronos = Cronos;
class EthereumClassic extends BaseEvm {
}
exports.EthereumClassic = EthereumClassic;
class Fantom extends BaseEvm {
}
exports.Fantom = Fantom;
class Gnosis extends BaseEvm {
}
exports.Gnosis = Gnosis;
class Haqq extends BaseEvm {
}
exports.Haqq = Haqq;
class Flare extends BaseEvm {
}
exports.Flare = Flare;
class HarmonyOne extends BaseEvm {
}
exports.HarmonyOne = HarmonyOne;
class Kucoin extends BaseEvm {
}
exports.Kucoin = Kucoin;
class Oasis extends BaseEvm {
}
exports.Oasis = Oasis;
class Optimism extends BaseEvm {
}
exports.Optimism = Optimism;
class Palm extends BaseEvm {
}
exports.Palm = Palm;
class Vechain extends BaseEvm {
}
exports.Vechain = Vechain;
class Xdc extends BaseEvm {
}
exports.Xdc = Xdc;
class Chiliz extends NotificationEvm {
}
exports.Chiliz = Chiliz;
class HorizenEon extends FaucetEvm {
    constructor(id){
        super(id);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
    }
}
exports.HorizenEon = HorizenEon;
class Klaytn extends NotificationEvm {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
    }
}
exports.Klaytn = Klaytn;
// Full support for chains
class Ethereum extends FullEvm {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
    }
}
exports.Ethereum = Ethereum;
class Polygon extends FullEvm {
}
exports.Polygon = Polygon;
class Celo extends FullEvm {
}
exports.Celo = Celo;
class BinanceSmartChain extends FullEvm {
}
exports.BinanceSmartChain = BinanceSmartChain;

},{"93b74eafa32e0238":"lKbmC","7c772ea13b34654d":"luFgs","5c56e5edfcf002bc":"8svs2","17fac0ccb18f6170":"h28oJ","7ea01b03b864e81":"j77U1","6e3a6a47bb12687b":"fv9Ew","32c4966b1e3a22b8":"fTehi","3e4220946304dfa0":"2avtV","bb75d9fa7998cb4a":"53MmJ","ec2d5b18ac6659f9":"Eiuxz","3f97677852bbd8c6":"giAOq"}],"h28oJ":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("418e95ae8c9165df"), exports);
__exportStar(require("ec1baf2b5564abc4"), exports);

},{"418e95ae8c9165df":"60hlA","ec1baf2b5564abc4":"3Iv1g"}],"60hlA":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Faucet_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Faucet = void 0;
const typedi_1 = require("9644ea5190c4b4f2");
const tatum_connector_1 = require("e4f2f3cd13cb1d05");
const util_1 = require("d607f7ff9696a064");
const tatum_1 = require("1caa24c24771750a");
let Faucet = Faucet_1 = class Faucet {
    constructor(id){
        this.id = id;
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
    }
    async fund(address) {
        const chain = this.convertToFaucetChain(this.config.network);
        return util_1.ErrorUtils.tryFail(async ()=>{
            return this.connector.post({
                path: `faucet/${chain}/${address}`
            });
        });
    }
    convertToFaucetChain(network) {
        return network === tatum_1.Network.HORIZEN_EON_GOBI ? "eon-testnet" : network;
    }
};
Faucet = Faucet_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Faucet_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Faucet);
exports.Faucet = Faucet;

},{"9644ea5190c4b4f2":"lKbmC","e4f2f3cd13cb1d05":"brrBq","d607f7ff9696a064":"luFgs","1caa24c24771750a":"4TUhe"}],"3Iv1g":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"j77U1":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("67fd9219731e926"), exports);
__exportStar(require("12a0628b799863f4"), exports);

},{"67fd9219731e926":"1JZgE","12a0628b799863f4":"3zVXh"}],"1JZgE":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FeeUtxo_1, FeeEvm_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeeEvm = exports.FeeUtxo = void 0;
const bignumber_js_1 = require("3733379fdc67d2bf");
const typedi_1 = require("2d172806b41383a7");
const tatum_connector_1 = require("8122f62b3c151ea0");
const Currency_1 = require("2d2e272991c2b565");
const util_1 = require("1ca3f4924be183d0");
let FeeUtxo = FeeUtxo_1 = class FeeUtxo {
    constructor(id){
        this.id = id;
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
    }
    async getCurrentFee() {
        const currency = (0, Currency_1.networkToCurrency)(this.config.network);
        const response = await util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `blockchain/fee/${currency}`
            }));
        const result = {
            data: null,
            status: util_1.Status.ERROR,
            error: response.error
        };
        if (response.data) {
            result.data = {
                chain: this.config.network,
                lastRecalculated: response.data.time,
                basedOnBlockNumber: response.data.block,
                slow: response.data.slow.toString(),
                medium: response.data.medium.toString(),
                fast: response.data.fast.toString()
            };
            result.status = util_1.Status.SUCCESS;
        }
        return result;
    }
};
FeeUtxo = FeeUtxo_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new FeeUtxo_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], FeeUtxo);
exports.FeeUtxo = FeeUtxo;
let FeeEvm = FeeEvm_1 = class FeeEvm {
    constructor(id){
        this.id = id;
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
    }
    async getCurrentFee() {
        const currency = (0, Currency_1.networkToCurrency)(this.config.network);
        const response = await util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `blockchain/fee/${currency}`
            }));
        const result = {
            data: null,
            status: util_1.Status.ERROR,
            error: response.error
        };
        if (response.data) {
            result.data = {
                chain: this.config.network,
                gasPrice: FeeEvm_1.mapGasPrice(response.data),
                lastRecalculated: response.data.time,
                basedOnBlockNumber: response.data.block
            };
            result.status = util_1.Status.SUCCESS;
        }
        return result;
    }
    static mapGasPrice({ slow, baseFee, fast, medium }) {
        return {
            slow: new bignumber_js_1.BigNumber(slow.toString()).dividedBy(1e9).toFixed(),
            medium: new bignumber_js_1.BigNumber(medium.toString()).dividedBy(1e9).toFixed(),
            fast: new bignumber_js_1.BigNumber(fast.toString()).dividedBy(1e9).toFixed(),
            unit: "Gwei",
            baseFee: new bignumber_js_1.BigNumber(baseFee.toString()).dividedBy(1e9).toFixed()
        };
    }
};
FeeEvm = FeeEvm_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new FeeEvm_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], FeeEvm);
exports.FeeEvm = FeeEvm;

},{"3733379fdc67d2bf":"57qkX","2d172806b41383a7":"lKbmC","8122f62b3c151ea0":"brrBq","2d2e272991c2b565":"dS9pM","1ca3f4924be183d0":"luFgs"}],"dS9pM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.networkToCurrency = exports.Currency = void 0;
const Network_1 = require("734ed21654a33cde");
var Currency;
(function(Currency) {
    Currency["ETH"] = "ETH";
    Currency["BTC"] = "BTC";
    Currency["DOGE"] = "DOGE";
    Currency["LTC"] = "LTC";
})(Currency = exports.Currency || (exports.Currency = {}));
function networkToCurrency(network) {
    switch(network){
        case Network_1.Network.ETHEREUM:
        case Network_1.Network.ETHEREUM_SEPOLIA:
            return Currency.ETH;
        case Network_1.Network.BITCOIN:
        case Network_1.Network.BITCOIN_TESTNET:
            return Currency.BTC;
        case Network_1.Network.DOGECOIN:
        case Network_1.Network.DOGECOIN_TESTNET:
            return Currency.DOGE;
        case Network_1.Network.LITECOIN:
        case Network_1.Network.LITECOIN_TESTNET:
            return Currency.LTC;
        default:
            throw new Error(`Unsupported network ${network}`);
    }
}
exports.networkToCurrency = networkToCurrency;

},{"734ed21654a33cde":"kX1I1"}],"3zVXh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"fv9Ew":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("abef18134c6602fd"), exports);
__exportStar(require("ebb6759f7d6ef34"), exports);

},{"abef18134c6602fd":"ho9WB","ebb6759f7d6ef34":"9DL3Y"}],"ho9WB":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Ipfs_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ipfs = void 0;
const typedi_1 = require("2de7d3e398a97e6e");
const tatum_connector_1 = require("f9bd0af8bb6a5f61");
const util_1 = require("7e0783f667533da2");
let Ipfs = Ipfs_1 = class Ipfs {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    /**
     * Upload file to the IPFS storage.
     * @param body Body of the request with file to be uploaded.
     * @returns ResponseDto<{txId: string}> IPFS hash id of the uploaded file.
     */ async uploadFile(body) {
        return util_1.ErrorUtils.tryFail(()=>this.connector.uploadFile({
                path: `ipfs`,
                body: body.file
            }));
    }
    /**
     * Get file binary data from the IPFS storage.
     * @param body Body of the request with file to be uploaded.
     * @returns Blob IPFS file binary data.
     * @returns ResponseDto<null> is error occurred.
     */ async getFile(body) {
        return util_1.ErrorUtils.tryFailBlob(()=>this.connector.getFile({
                path: `ipfs/${body.id}`
            }));
    }
};
Ipfs = Ipfs_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Ipfs_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Ipfs);
exports.Ipfs = Ipfs;

},{"2de7d3e398a97e6e":"lKbmC","f9bd0af8bb6a5f61":"brrBq","7e0783f667533da2":"luFgs"}],"9DL3Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"fTehi":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("724da49786435b28"), exports);
__exportStar(require("5b2310861e44fcd1"), exports);

},{"724da49786435b28":"lQacB","5b2310861e44fcd1":"fEJtq"}],"lQacB":[function(require,module,exports) {
var Buffer = require("c4965ea807a8d28c").Buffer;
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NftTezos_1, Nft_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Nft = exports.NftTezos = void 0;
const typedi_1 = require("e0d30a82a5155d38");
const tatum_connector_1 = require("9ef9dad2cdc6114c");
const util_1 = require("18a8f042e8bf69c2");
const ipfs_1 = require("433ebefae7300623");
let NftTezos = NftTezos_1 = class NftTezos {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    /**
     * Create new NFT collection (Tzip12 compatible smart contract). This operation deploys a new smart contract to the blockchain and sets the owner of the collection.
     * You don't need to specify the default minter of the collection, as the owner of the collection is the default minter.
     * You don't have to have any funds on the address, as the smart contract is deployed by Tatum.
     * @param body Body of the request.
     * @returns ResponseDto<{txId: string}> Transaction ID of the deployment transaction. You can get the contract address from the transaction details using rpc.getContractAddress(transactionId) function, once transaction is included in the block.
     */ async createNftCollection(body) {
        return util_1.ErrorUtils.tryFail(()=>this.connector.post({
                path: `contract/deploy`,
                body: {
                    ...body,
                    chain: this.config.network,
                    contractType: "nft"
                }
            }));
    }
};
NftTezos = NftTezos_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new NftTezos_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], NftTezos);
exports.NftTezos = NftTezos;
let Nft = Nft_1 = class Nft {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.ipfs = typedi_1.Container.of(this.id).get(ipfs_1.Ipfs);
    }
    /**
     * Create new NFT collection (ERC-721 compatible smart contract). This operation deploys new smart contract to the blockchain and sets the owner of the collection.
     * You don't need to specify the default minter of the collection, as the owner of the collection is the default minter.
     * You don't have to have any funds on the address, as the smart contract is deployed by Tatum.
     * @param body Body of the request.
     * @returns ResponseDto<{txId: string}> Transaction ID of the deployment transaction. You can get the contract address from the transaction details using rpc.getContractAddress(transactionId) function, once transaction is included in the block.
     */ async createNftCollection(body) {
        return util_1.ErrorUtils.tryFail(()=>this.connector.post({
                path: `contract/deploy`,
                body: {
                    ...body,
                    chain: this.config.network,
                    contractType: "nft"
                }
            }));
    }
    /**
     * Create new MultiToken NFT collection (ERC-1155 compatible smart contract). This operation deploys new smart contract to the blockchain and sets the owner of the collection.
     * You don't need to specify the default minter of the collection, as the owner of the collection is the default minter.
     * You don't have to have any funds on the address, as the smart contract is deployed by Tatum.
     * @param body Body of the request.
     * @returns ResponseDto<{txId: string}> Transaction ID of the deployment transaction. You can get the contract address from the transaction details using rpc.getContractAddress(transactionId) function, once transaction is included in the block.
     */ async createMultiTokenNftCollection(body) {
        return util_1.ErrorUtils.tryFail(()=>this.connector.post({
                path: `contract/deploy`,
                body: {
                    ...body,
                    chain: this.config.network,
                    contractType: "multitoken"
                }
            }));
    }
    /**
     * Mint new NFT (using ERC-721 compatible smart contract). This operation mints nft using smart contract on blockchain.
     * You don't need to specify the default minter of the collection, as the owner of the collection is the default minter.
     * You don't have to have any funds on the address, as the nft is minted by Tatum.
     * @param body Body of the request.
     * @returns ResponseDto<{txId: string}> Transaction ID of the mint transaction. {
     */ async mintNft(body) {
        return util_1.ErrorUtils.tryFail(()=>this.connector.post({
                path: `contract/erc721/mint`,
                body: {
                    ...body,
                    chain: this.config.network
                }
            }));
    }
    /**
     * Mint new NFT (using ERC-721 compatible smart contract).
     * This operation uploads file to IPFS, prepares and uploads metadata to IPFS and mints nft using prepared metadata's IPFS url.
     * You don't need to specify the default minter of the collection, as the owner of the collection is the default minter.
     * You don't have to have any funds on the address, as the nft is minted by Tatum.
     * @param body Body of the request.
     * @returns ResponseDto<{txId: string}> Transaction ID of the mint transaction. {
     */ async mintNftWithMetadata(body) {
        const imageUpload = await this.ipfs.uploadFile({
            file: body.file
        });
        if (imageUpload.error) return util_1.ErrorUtils.toErrorResponse(imageUpload.error);
        const metadataUpload = await this.ipfs.uploadFile({
            file: Buffer.from(JSON.stringify({
                ...body.metadata,
                image: `ipfs://${imageUpload.data.ipfsHash}`
            }))
        });
        if (metadataUpload.error) return util_1.ErrorUtils.toErrorResponse(metadataUpload.error);
        return util_1.ErrorUtils.tryFail(()=>this.connector.post({
                path: `contract/erc721/mint`,
                body: {
                    ...body,
                    url: `ipfs://${metadataUpload.data.ipfsHash}`,
                    chain: this.config.network
                }
            }));
    }
    /**
     * Get balance of NFT for given address.
     * You can get balance of multiple addresses in one call.
     */ async getBalance({ page = 0, pageSize = 50, addresses }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `data/balances`,
                params: {
                    pageSize,
                    offset: page,
                    chain,
                    tokenTypes: "nft,multitoken",
                    addresses: addresses.join(",")
                }
            }).then((r)=>r.result));
    }
    /**
     * Get all transactions for given NFT.
     * @param nftTransactionsDetails  You can get multiple NFT transactions in one call.
     * @param page
     * @param pageSize
     */ async getAllNftTransactions({ page = 0, pageSize = 50, tokenId, tokenAddress, transactionType, fromBlock, toBlock }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `data/transactions`,
                params: {
                    pageSize,
                    offset: page,
                    chain,
                    tokenTypes: "nft,multitoken",
                    transactionSubtype: transactionType,
                    tokenAddress,
                    tokenId,
                    blockFrom: fromBlock,
                    blockTo: toBlock
                }
            }).then((r)=>r.result));
    }
    /**
     * Get all transactions for given NFT.
     * @param nftTransactionsDetails  You can get multiple NFT transactions in one call.
     * @param page
     * @param pageSize
     */ async getAllNftTransactionsByAddress({ page = 0, pageSize = 50, addresses, tokenId, tokenAddress, transactionType, fromBlock, toBlock }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `data/transactions`,
                params: {
                    pageSize,
                    offset: page,
                    chain,
                    addresses: addresses.join(","),
                    tokenTypes: "nft,multitoken",
                    transactionSubtype: transactionType,
                    tokenAddress,
                    tokenId,
                    blockFrom: fromBlock,
                    blockTo: toBlock
                }
            }).then((r)=>r.result));
    }
    /**
     * Get metadata of NFT.
     */ async getNftMetadata({ tokenAddress, tokenId }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(async ()=>{
            const response = await this.connector.get({
                path: `data/metadata`,
                params: {
                    chain,
                    tokenAddress,
                    tokenIds: tokenId
                }
            });
            if (response?.length) return response[0];
            return null;
        });
    }
    /**
     * Get owner of a specific NFT.
     */ async getNftOwner({ tokenAddress, tokenId, pageSize, page }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `data/owners`,
                params: {
                    chain,
                    tokenAddress,
                    tokenId,
                    pageSize,
                    offset: page
                }
            }));
    }
    /**
     * Check if address is owner of a specific NFT.
     */ async checkNftOwner({ tokenAddress, tokenId, owner }) {
        const chain = this.config.network;
        return this.connector.get({
            path: `data/owners/address`,
            params: {
                chain,
                tokenAddress,
                address: owner,
                tokenId
            }
        });
    }
    /**
     * Get all NFTs in collection.
     */ async getNftsInCollection({ collectionAddress, pageSize, excludeMetadata = false, page }) {
        const chain = this.config.network;
        return util_1.ErrorUtils.tryFail(()=>this.connector.get({
                path: `data/collections`,
                params: {
                    pageSize,
                    offset: page,
                    chain,
                    collectionAddresses: collectionAddress,
                    excludeMetadata
                }
            }));
    }
};
Nft = Nft_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Nft_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Nft);
exports.Nft = Nft;

},{"c4965ea807a8d28c":"fCgem","e0d30a82a5155d38":"lKbmC","9ef9dad2cdc6114c":"brrBq","18a8f042e8bf69c2":"luFgs","433ebefae7300623":"fv9Ew"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"fEJtq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"2avtV":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("7bf23c994fbac03b"), exports);
__exportStar(require("b4ea43da0f397646"), exports);
__exportStar(require("9331c42f5d3bd52d"), exports);

},{"7bf23c994fbac03b":"fnE2k","b4ea43da0f397646":"h3QYV","9331c42f5d3bd52d":"ctuQZ"}],"fnE2k":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Notification_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Notification = void 0;
const typedi_1 = require("1408bfb408618975");
const connector_1 = require("590b44b38236e492");
const util_1 = require("a86d58d32f699a79");
const notification_dto_1 = require("f816f7f0fd0a3459");
const subscribe_1 = require("757d9fac603957ed");
let Notification = Notification_1 = class Notification {
    constructor(id){
        this.id = id;
        this.subscribe = typedi_1.Container.of(this.id).get(subscribe_1.Subscribe);
        this.connector = typedi_1.Container.of(this.id).get(connector_1.TatumConnector);
    }
    /**
     * Get all existing subscriptions for given address.
     * @param body
     */ async getAll(body) {
        return util_1.ErrorUtils.tryFail(async ()=>{
            const subscriptions = await this.connector.get({
                path: "subscription",
                params: {
                    pageSize: body?.pageSize?.toString() ?? "10",
                    ...body?.offset && {
                        offset: body.offset.toString()
                    },
                    ...body?.address && {
                        address: body.address
                    }
                }
            });
            return subscriptions.map((notification)=>{
                const result = {
                    id: notification.id,
                    network: util_1.Utils.mapNotificationChainToNetwork(notification.attr.chain),
                    url: notification.attr.url,
                    type: notification.type
                };
                if (notification.type === notification_dto_1.NotificationType.CONTRACT_ADDRESS_LOG_EVENT) return {
                    ...result,
                    contractAddress: notification.attr.contractAddress,
                    event: notification.attr.event
                };
                if (notification.attr.address) return {
                    ...result,
                    address: notification.attr.address
                };
                return result;
            });
        });
    }
    /**
     * Unsubscribe from monitoring of the specific address.
     * @param id ID of a subscription.
     */ async unsubscribe(id) {
        return util_1.ErrorUtils.tryFail(async ()=>this.connector.delete({
                path: `subscription/${id}`
            }));
    }
    /**
     * Get all fired webhook notifications.
     * @param body
     */ async getAllExecutedWebhooks(body) {
        return util_1.ErrorUtils.tryFail(async ()=>this.connector.get({
                path: "subscription/webhook",
                params: {
                    pageSize: body?.pageSize?.toString() ?? "10",
                    ...body?.offset && {
                        offset: body.offset.toString()
                    },
                    ...body?.direction && {
                        direction: body.direction
                    },
                    ...body?.filterFailed && {
                        failed: body.filterFailed.toString()
                    }
                }
            }));
    }
};
Notification = Notification_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Notification_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Notification);
exports.Notification = Notification;

},{"1408bfb408618975":"lKbmC","590b44b38236e492":"53XPA","a86d58d32f699a79":"luFgs","f816f7f0fd0a3459":"h3QYV","757d9fac603957ed":"ctuQZ"}],"h3QYV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotificationType = void 0;
var NotificationType;
(function(NotificationType) {
    NotificationType["ADDRESS_EVENT"] = "ADDRESS_EVENT";
    NotificationType["INCOMING_NATIVE_TX"] = "INCOMING_NATIVE_TX";
    NotificationType["OUTGOING_NATIVE_TX"] = "OUTGOING_NATIVE_TX";
    NotificationType["OUTGOING_FAILED_TX"] = "OUTGOING_FAILED_TX";
    NotificationType["PAID_FEE"] = "PAID_FEE";
    NotificationType["INCOMING_INTERNAL_TX"] = "INCOMING_INTERNAL_TX";
    NotificationType["OUTGOING_INTERNAL_TX"] = "OUTGOING_INTERNAL_TX";
    NotificationType["INCOMING_FUNGIBLE_TX"] = "INCOMING_FUNGIBLE_TX";
    NotificationType["OUTGOING_FUNGIBLE_TX"] = "OUTGOING_FUNGIBLE_TX";
    NotificationType["INCOMING_NFT_TX"] = "INCOMING_NFT_TX";
    NotificationType["OUTGOING_NFT_TX"] = "OUTGOING_NFT_TX";
    NotificationType["INCOMING_MULTITOKEN_TX"] = "INCOMING_MULTITOKEN_TX";
    NotificationType["OUTGOING_MULTITOKEN_TX"] = "OUTGOING_MULTITOKEN_TX";
    NotificationType["CONTRACT_ADDRESS_LOG_EVENT"] = "CONTRACT_ADDRESS_LOG_EVENT";
    NotificationType["FAILED_TXS_PER_BLOCK"] = "FAILED_TXS_PER_BLOCK";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));

},{}],"ctuQZ":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Subscribe_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subscribe = void 0;
const typedi_1 = require("865f240858fdb6ba");
const tatum_connector_1 = require("766ae0439c5190f1");
const util_1 = require("321ea9e0fb4c9b20");
const notification_dto_1 = require("3c03cfcd02570515");
let Subscribe = Subscribe_1 = class Subscribe {
    constructor(id){
        this.id = id;
        /**
         * Subscribe to address event.
         */ this.addressEvent = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.ADDRESS_EVENT);
        /**
         * Subscribe to incoming native tx.
         */ this.incomingNativeTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.INCOMING_NATIVE_TX);
        /**
         * Subscribe to outgoing native tx.
         */ this.outgoingNativeTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.OUTGOING_NATIVE_TX);
        /**
         * Subscribe to outgoing failed tx.
         */ this.outgoingFailedTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.OUTGOING_FAILED_TX);
        /**
         * Subscribe to paid fee.
         */ this.paidFee = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.PAID_FEE);
        /**
         * Subscribe to incoming internal tx.
         */ this.incomingInternalTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.INCOMING_INTERNAL_TX);
        /**
         * Subscribe to outgoing internal tx.
         */ this.outgoingInternalTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.OUTGOING_INTERNAL_TX);
        /**
         * Subscribe to incoming fungible tx.
         */ this.incomingFungibleTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.INCOMING_FUNGIBLE_TX);
        /**
         * Subscribe to outgoing fungible tx.
         */ this.outgoingFungibleTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.OUTGOING_FUNGIBLE_TX);
        /**
         * Subscribe to incoming NFT tx.
         */ this.incomingNftTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.INCOMING_NFT_TX);
        /**
         * Subscribe to outgoing NFT tx.
         */ this.outgoingNftTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.OUTGOING_NFT_TX);
        /**
         * Subscribe to incoming multitoken tx.
         */ this.incomingMultitokenTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.INCOMING_MULTITOKEN_TX);
        /**
         * Subscribe to outgoing multitoken tx.
         */ this.outgoingMultitokenTx = async (addressBasedNotificationDetail)=>this.addressBasedNotification(addressBasedNotificationDetail, notification_dto_1.NotificationType.OUTGOING_MULTITOKEN_TX);
        /**
         * Subscribe to outgoing multitoken tx.
         */ this.contractAddressLogEvent = async (contractBasedNotificationDetail)=>this.contractBasedNotification(contractBasedNotificationDetail, notification_dto_1.NotificationType.CONTRACT_ADDRESS_LOG_EVENT);
        /**
         * Subscribe to failed txs per block.
         */ this.failedTxsPerBlock = async ({ url })=>this.blockBasedNotification({
                url
            }, notification_dto_1.NotificationType.FAILED_TXS_PER_BLOCK);
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
    }
    async addressBasedNotification({ address, url }, type) {
        return util_1.ErrorUtils.tryFail(async ()=>{
            const chain = util_1.Utils.mapNetworkToNotificationChain(this.config.network);
            const { id } = await this.connector.post({
                path: "subscription",
                body: {
                    type: type,
                    attr: {
                        chain,
                        address,
                        url
                    }
                }
            });
            return {
                id,
                address,
                chain,
                url
            };
        });
    }
    async contractBasedNotification({ contractAddress, url, event }, type) {
        return util_1.ErrorUtils.tryFail(async ()=>{
            const chain = util_1.Utils.mapNetworkToNotificationChain(this.config.network);
            const { id } = await this.connector.post({
                path: "subscription",
                body: {
                    type: type,
                    attr: {
                        chain,
                        contractAddress,
                        url,
                        event
                    }
                }
            });
            return {
                id,
                contractAddress,
                chain,
                url,
                event
            };
        });
    }
    async blockBasedNotification({ url }, type) {
        return util_1.ErrorUtils.tryFail(async ()=>{
            const chain = util_1.Utils.mapNetworkToNotificationChain(this.config.network);
            const { id } = await this.connector.post({
                path: "subscription",
                body: {
                    type: type,
                    attr: {
                        chain,
                        url
                    }
                }
            });
            return {
                id,
                chain,
                url
            };
        });
    }
};
Subscribe = Subscribe_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Subscribe_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Subscribe);
exports.Subscribe = Subscribe;

},{"865f240858fdb6ba":"lKbmC","766ae0439c5190f1":"brrBq","321ea9e0fb4c9b20":"luFgs","3c03cfcd02570515":"h3QYV"}],"53MmJ":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("ca7fae9bb71f9116"), exports);

},{"ca7fae9bb71f9116":"kYemF"}],"kYemF":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Rates_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rates = void 0;
const typedi_1 = require("321205a28b62bc0c");
const tatum_connector_1 = require("4c8e02541624b868");
const util_1 = require("e81f506430580d2");
let Rates = Rates_1 = class Rates {
    constructor(id){
        this.id = id;
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    getCurrentRate(currency, basePair) {
        return util_1.ErrorUtils.tryFail(async ()=>{
            return this.connector.get({
                path: `rate/${currency}`,
                params: {
                    basePair
                }
            });
        });
    }
    getCurrentRateBatch(pairs) {
        pairs.forEach((pair)=>{
            if (!pair.batchId) pair.batchId = `${pair.currency}/${pair.basePair}`;
        });
        return util_1.ErrorUtils.tryFail(async ()=>{
            return this.connector.post({
                path: `rate`,
                body: pairs
            });
        });
    }
};
Rates = Rates_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Rates_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Rates);
exports.Rates = Rates;

},{"321205a28b62bc0c":"lKbmC","4c8e02541624b868":"brrBq","e81f506430580d2":"luFgs"}],"Eiuxz":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("a7858bc927f5449a"), exports);
__exportStar(require("f8c82dfb3fdf432a"), exports);

},{"a7858bc927f5449a":"f4kSK","f8c82dfb3fdf432a":"1RTrX"}],"f4kSK":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Token_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Token = void 0;
const typedi_1 = require("b7b220cc0686f320");
const tatum_api_1 = require("a87159affee42406");
const dto_1 = require("68ae99453997b4a9");
const util_1 = require("99fc6044841a238f");
const token_dto_1 = require("b73b96d830ec1c55");
const api_dto_1 = require("77bd5d98ce2a69a3");
let Token = Token_1 = class Token {
    constructor(id){
        this.id = id;
        this.config = typedi_1.Container.of(this.id).get(util_1.CONFIG);
        this.api = typedi_1.Container.of(this.id).get(tatum_api_1.TatumApi);
    }
    /**
     * Get balance of fungible tokens for given addresses.
     * You can get balance of multiple addresses in one call.
     */ async getBalance({ page = 0, pageSize = 50, addresses }) {
        const chain = this.config.network;
        if ((0, dto_1.isDataApiEvmEnabledNetwork)(chain)) return util_1.ErrorUtils.tryFail(()=>this.api.getBalancesOfAddresses({
                chain,
                addresses: addresses.join(","),
                pageSize,
                offset: page,
                tokenTypes: "fungible"
            }).then((r)=>r.map((value)=>{
                    return token_dto_1.mapper.toFungibleTokenBalance(value);
                })));
        else throw new Error(`Not supported for ${chain} network.`);
    }
    /**
     * Create new fungible collection (ERC-20 compatible smart contract). This operation deploys new smart contract to the blockchain and sets the owner of the token.
     * You don't need to specify the default minter of the collection, as the owner of the collection is the default minter.
     * You don't have to have any funds on the address, as the smart contract is deployed by Tatum.
     * @param body Body of the request.
     * @returns ResponseDto<{txId: string}> Transaction ID of the deployment transaction. You can get the contract address from the transaction details using rpc.getContractAddress(transactionId) function, once transaction is included in the block.
     */ async createNewFungibleToken(body) {
        const chain = (0, api_dto_1.networkToChain)(this.config.network);
        return util_1.ErrorUtils.tryFail(()=>this.api.createFungibleToken({
                ...body,
                chain,
                contractType: "fungible"
            }).then((r)=>token_dto_1.mapper.toCreateTokenResponse(r)));
    }
    /**
     * Get metadata of fungible token.
     */ async getTokenMetadata({ tokenAddress }) {
        const chain = (0, api_dto_1.networkToChain)(this.config.network);
        return util_1.ErrorUtils.tryFail(()=>this.api.getTokenInfo({
                chain,
                tokenAddress
            }).then((r)=>token_dto_1.mapper.toTokenMetadata(r)));
    }
    /**
     * Get all token transactions for given address.
     * @param details  You can get multiple token transactions in one call.
     * @param page
     * @param pageSize
     */ async getAllFungibleTransactions({ page = 0, pageSize = 50, tokenAddress, addresses, transactionTypes, blockFrom, blockTo }) {
        const chain = (0, api_dto_1.networkToChain)(this.config.network);
        return util_1.ErrorUtils.tryFail(()=>this.api.getTransactions({
                chain,
                tokenAddress,
                pageSize,
                offset: page,
                blockFrom,
                blockTo,
                transactionSubTypes: transactionTypes?.join(","),
                addresses: addresses.join(","),
                transactionTypes: "fungible"
            }).then((r)=>r.map((value)=>{
                    return token_dto_1.mapper.toTransaction(value);
                })));
    }
};
Token = Token_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new Token_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], Token);
exports.Token = Token;

},{"b7b220cc0686f320":"lKbmC","a87159affee42406":"1jAsR","68ae99453997b4a9":"lqU6b","99fc6044841a238f":"luFgs","b73b96d830ec1c55":"1RTrX","77bd5d98ce2a69a3":"ez0T1"}],"1jAsR":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TatumApi_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TatumApi = void 0;
const typedi_1 = require("9f451eb79f5499e0");
const tatum_connector_1 = require("b2cb5e7c04899b24");
let TatumApi = TatumApi_1 = class TatumApi {
    constructor(id){
        this.id = id;
        this.connector = typedi_1.Container.of(this.id).get(tatum_connector_1.TatumConnector);
    }
    async getTokensFromCollection(params) {
        const { result } = await this.connector.get({
            path: `data/collections`,
            params
        });
        return result;
    }
    async getTokenMetadata(params) {
        const { result } = await this.connector.get({
            path: `data/metadata`,
            params
        });
        return result;
    }
    async getBalancesOfAddresses(params) {
        const { result } = await this.connector.get({
            path: `data/balances`,
            params
        });
        return result;
    }
    async getOwnersOfToken(params) {
        const { result } = await this.connector.get({
            path: `data/owners`,
            params
        });
        return result;
    }
    checkOwner(params) {
        return this.connector.get({
            path: `data/owners/address`,
            params
        });
    }
    async getTransactions(params) {
        const { result } = await this.connector.get({
            path: `data/transactions`,
            params
        });
        return result;
    }
    async getTransactionsByHash(params) {
        const { result } = await this.connector.get({
            path: `data/transactions`,
            params
        });
        return result;
    }
    async getEvents(params) {
        const { result } = await this.connector.get({
            path: `data/events`,
            params
        });
        return result;
    }
    getBlocks(params) {
        return this.connector.get({
            path: `data/blocks`,
            params
        });
    }
    getLatestBlock(params) {
        return this.connector.get({
            path: `data/blocks/latest`,
            params
        });
    }
    getTokenInfo(params) {
        return this.connector.get({
            path: `data/tokens`,
            params
        });
    }
    getUtxosByAddress(params) {
        return this.connector.get({
            path: `data/utxos`,
            params
        });
    }
    createFungibleToken(body) {
        return this.connector.post({
            path: `contract/deploy`,
            body
        });
    }
};
TatumApi = TatumApi_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new TatumApi_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], TatumApi);
exports.TatumApi = TatumApi;

},{"9f451eb79f5499e0":"lKbmC","b2cb5e7c04899b24":"brrBq"}],"1RTrX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapper = void 0;
exports.mapper = {
    toFungibleTokenBalance: (apiResponse)=>({
            chain: apiResponse.chain,
            tokenAddress: apiResponse.tokenAddress,
            type: apiResponse.type,
            lastUpdatedBlockNumber: apiResponse.lastUpdatedBlockNumber,
            address: apiResponse.address,
            balance: apiResponse.balance
        }),
    toTokenMetadata: (apiResponse)=>({
            symbol: apiResponse.symbol,
            name: apiResponse.name,
            supply: apiResponse.supply,
            decimals: apiResponse.decimals,
            tokenType: apiResponse.tokenType,
            cap: apiResponse.cap
        }),
    toTransaction: (apiResponse)=>({
            chain: apiResponse.chain,
            blockNumber: apiResponse.blockNumber,
            hash: apiResponse.hash,
            transactionType: apiResponse.transactionType,
            transactionIndex: apiResponse.transactionIndex,
            tokenAddress: apiResponse.tokenAddress,
            amount: apiResponse.amount,
            timestamp: apiResponse.timestamp,
            address: apiResponse.address,
            counterAddress: apiResponse.counterAddress,
            transactionSubtype: apiResponse.transactionSubtype
        }),
    toCreateTokenResponse: (apiResponse)=>({
            txId: apiResponse.txId
        })
};

},{}],"ez0T1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.networkToChain = exports.ChainEnum = void 0;
const dto_1 = require("1fcbde0720e9bb04");
var ChainEnum;
(function(ChainEnum) {
    ChainEnum["ETHEREUM"] = "ethereum";
    ChainEnum["ETHEREUM_SEPOLIA"] = "ethereum-sepolia";
    ChainEnum["CELO"] = "celo";
    ChainEnum["CELO_TESTNET"] = "celo-testnet";
    ChainEnum["BSC"] = "bsc";
    ChainEnum["BSC_TESTNET"] = "bsc-testnet";
    ChainEnum["POLYGON"] = "polygon";
    ChainEnum["POLYGON_MUMBAI"] = "polygon-mumbai";
})(ChainEnum = exports.ChainEnum || (exports.ChainEnum = {}));
function networkToChain(network) {
    switch(network){
        case dto_1.Network.ETHEREUM:
            return ChainEnum.ETHEREUM;
        case dto_1.Network.ETHEREUM_SEPOLIA:
            return ChainEnum.ETHEREUM_SEPOLIA;
        case dto_1.Network.CELO:
            return ChainEnum.CELO;
        case dto_1.Network.CELO_ALFAJORES:
            return ChainEnum.CELO_TESTNET;
        case dto_1.Network.BINANCE_SMART_CHAIN:
            return ChainEnum.BSC;
        case dto_1.Network.BINANCE_SMART_CHAIN_TESTNET:
            return ChainEnum.BSC_TESTNET;
        case dto_1.Network.POLYGON:
            return ChainEnum.POLYGON;
        case dto_1.Network.POLYGON_MUMBAI:
            return ChainEnum.POLYGON_MUMBAI;
        case dto_1.Network.CARDANO:
            return ChainEnum.POLYGON_MUMBAI;
        default:
            throw new Error(`Unsupported network ${network}`);
    }
}
exports.networkToChain = networkToChain;

},{"1fcbde0720e9bb04":"lqU6b"}],"aGGBR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FullSdk = exports.Tezos = exports.Tron = exports.Eos = exports.Solana = exports.Xrp = exports.Bnb = exports.BaseOther = void 0;
const typedi_1 = require("4c392a0daf202fc2");
const util_1 = require("d2aeb10a5ba62dea");
const address_1 = require("20e96b90e1bcfe66");
const faucet_1 = require("eeac45d4f8b687d9");
const ipfs_1 = require("62e6cdf18f52b822");
const nft_1 = require("eb5283d1f11c2731");
const notification_1 = require("14f2fbbed9502a17");
const rate_1 = require("5e60fe1188341113");
const token_1 = require("b98395635da4d912");
const tatum_1 = require("2b8eb778071e5a59");
class BaseOther extends tatum_1.TatumSdkChain {
    constructor(id){
        super(id);
        this.ipfs = typedi_1.Container.of(id).get(ipfs_1.Ipfs);
        this.rates = typedi_1.Container.of(id).get(rate_1.Rates);
    }
}
exports.BaseOther = BaseOther;
class Bnb extends BaseOther {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
    }
}
exports.Bnb = Bnb;
class Xrp extends BaseOther {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
    }
}
exports.Xrp = Xrp;
class Solana extends BaseOther {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
    }
}
exports.Solana = Solana;
class Eos extends BaseOther {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
    }
}
exports.Eos = Eos;
class Tron extends BaseOther {
    constructor(id){
        super(id);
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
        this.address = typedi_1.Container.of(id).get(address_1.AddressTron);
    }
}
exports.Tron = Tron;
class Tezos extends BaseOther {
    constructor(id){
        super(id);
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
        this.address = typedi_1.Container.of(id).get(address_1.AddressTezos);
        this.nft = typedi_1.Container.of(this.id).get(nft_1.NftTezos);
    }
}
exports.Tezos = Tezos;
class FullSdk extends tatum_1.TatumSdkChain {
    constructor(id){
        super(id);
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
        this.nft = typedi_1.Container.of(id).get(nft_1.Nft);
        this.token = typedi_1.Container.of(id).get(token_1.Token);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
        this.rates = typedi_1.Container.of(id).get(rate_1.Rates);
        this.faucet = typedi_1.Container.of(id).get(faucet_1.Faucet);
        this.ipfs = typedi_1.Container.of(id).get(ipfs_1.Ipfs);
    }
}
exports.FullSdk = FullSdk;

},{"4c392a0daf202fc2":"lKbmC","d2aeb10a5ba62dea":"luFgs","20e96b90e1bcfe66":"8svs2","eeac45d4f8b687d9":"h28oJ","62e6cdf18f52b822":"fv9Ew","eb5283d1f11c2731":"fTehi","14f2fbbed9502a17":"2avtV","5e60fe1188341113":"53MmJ","b98395635da4d912":"Eiuxz","2b8eb778071e5a59":"giAOq"}],"bU1vO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZCash = exports.BitcoinCash = exports.Dogecoin = exports.Litecoin = exports.Bitcoin = exports.FullUtxo = exports.NotificationUtxo = exports.UtxoFee = exports.BaseUtxo = void 0;
const typedi_1 = require("ac5dee5a668ccacb");
const util_1 = require("2af30e0809253f39");
const address_1 = require("498e0bb11e658f7d");
const fee_1 = require("5c3f192e24e38021");
const ipfs_1 = require("89a43d14d22e9ec4");
const notification_1 = require("aa85b84584698f77");
const rate_1 = require("73058984fa981fb3");
const tatum_1 = require("f3726035a9d0bda5");
class BaseUtxo extends tatum_1.TatumSdkChain {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
        this.ipfs = typedi_1.Container.of(id).get(ipfs_1.Ipfs);
        this.rates = typedi_1.Container.of(id).get(rate_1.Rates);
    }
}
exports.BaseUtxo = BaseUtxo;
class UtxoFee extends BaseUtxo {
    constructor(id){
        super(id);
        this.fee = typedi_1.Container.of(id).get(fee_1.FeeUtxo);
    }
}
exports.UtxoFee = UtxoFee;
class NotificationUtxo extends UtxoFee {
    constructor(id){
        super(id);
        this.notification = typedi_1.Container.of(id).get(notification_1.Notification);
    }
}
exports.NotificationUtxo = NotificationUtxo;
class FullUtxo extends NotificationUtxo {
    constructor(id){
        super(id);
        this.address = typedi_1.Container.of(id).get(address_1.Address);
    }
}
exports.FullUtxo = FullUtxo;
class Bitcoin extends FullUtxo {
}
exports.Bitcoin = Bitcoin;
class Litecoin extends FullUtxo {
}
exports.Litecoin = Litecoin;
class Dogecoin extends FullUtxo {
}
exports.Dogecoin = Dogecoin;
class BitcoinCash extends NotificationUtxo {
    constructor(id){
        super(id);
        this.rpc = util_1.Utils.getRpc(id, typedi_1.Container.of(id).get(util_1.CONFIG));
    }
}
exports.BitcoinCash = BitcoinCash;
class ZCash extends BaseUtxo {
}
exports.ZCash = ZCash;

},{"ac5dee5a668ccacb":"lKbmC","2af30e0809253f39":"luFgs","498e0bb11e658f7d":"8svs2","5c3f192e24e38021":"j77U1","89a43d14d22e9ec4":"fv9Ew","aa85b84584698f77":"2avtV","73058984fa981fb3":"53MmJ","f3726035a9d0bda5":"giAOq"}],"1TUbD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvmUtils = exports.POSSIBLE_ARCHIVE_METHODS = exports.ARCHIVE_METHODS = void 0;
exports.ARCHIVE_METHODS = [
    // Archival information
    "debug_getBadBlocks",
    "debug_storageRangeAt",
    "debug_traceCall",
    "debug_traceTransaction",
    "debug_traceBlock",
    "debug_traceBlockByHash",
    "debug_traceBlockByNumber",
    "trace_block",
    "trace_call",
    "trace_callMany",
    "trace_rawTransaction",
    "trace_replayBlockTransactions",
    // Network state
    "getBlockByHash",
    "getTransactionByHash",
    "getTransactionReceipt",
    "getUncleCountByBlockHash",
    "getUncleCountByBlockNumber",
    "getBlockByNumber",
    "getBlockTransactionCountByHash",
    "getBlockTransactionCountByNumber",
    "getBlockReceipts",
    "getTransactionByBlockHashAndIndex",
    "getTransactionByBlockNumberAndIndex",
    "getTransactionCount",
    "getProof"
];
exports.POSSIBLE_ARCHIVE_METHODS = [
    // Network state
    {
        method: "getStorageAt",
        index: 2
    },
    {
        method: "call",
        index: 1
    },
    {
        method: "getBalance",
        index: 1
    },
    {
        method: "getCode",
        index: 1
    }
];
exports.EvmUtils = {
    isArchiveMethod (rpc) {
        const isArchiveMethod = exports.ARCHIVE_METHODS.find((method)=>rpc.method.includes(method));
        if (isArchiveMethod) return true;
        const possibleArchiveMethod = exports.POSSIBLE_ARCHIVE_METHODS.find((possibleArchiveMethod)=>possibleArchiveMethod.method === rpc.method);
        if (possibleArchiveMethod) {
            const param = rpc?.params?.[possibleArchiveMethod.index];
            return this.isParamForArchiveNode(param);
        }
        if (rpc.method.includes("getLogs")) {
            const param = rpc?.params?.[1] || {};
            return this.isParamForArchiveNode(param.fromBlock) || this.isParamForArchiveNode(param.toBlock);
        }
        return false;
    },
    isParamForArchiveNode (param) {
        return !!param && param !== "latest";
    }
};

},{}],"jWKmI":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NativeEvmArchiveLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NativeEvmArchiveLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("e98a64c52c5ece59");
const dto_1 = require("567b85d95ebf119e");
const util_1 = require("816ee3e9e3c33a7");
const LoadBalancer_1 = require("37ecef60d8fd7c8a");
const AbstractNativeEvmRpc_1 = require("53e4bfeb14380c5a");
const EvmUtils_1 = require("29f73fbdd8a58971");
let NativeEvmArchiveLoadBalancerRpc = NativeEvmArchiveLoadBalancerRpc_1 = class NativeEvmArchiveLoadBalancerRpc extends AbstractNativeEvmRpc_1.AbstractNativeEvmRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
        this.network = typedi_1.Container.of(id).get(util_1.CONFIG).network;
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        const isArchive = EvmUtils_1.EvmUtils.isArchiveMethod(preparedCall);
        return await this.loadBalancer.rawRpcCall(preparedCall, isArchive);
    }
    async rawRpcCall(body) {
        const isArchive = EvmUtils_1.EvmUtils.isArchiveMethod(body);
        return this.loadBalancer.rawRpcCall(body, isArchive);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancer.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveArchiveUrlWithFallback().url;
    }
    getNativePrefix() {
        return dto_1.NATIVE_PREFIX_MAPPING[this.network];
    }
};
NativeEvmArchiveLoadBalancerRpc = NativeEvmArchiveLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new NativeEvmArchiveLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], NativeEvmArchiveLoadBalancerRpc);
exports.NativeEvmArchiveLoadBalancerRpc = NativeEvmArchiveLoadBalancerRpc;

},{"e98a64c52c5ece59":"lKbmC","567b85d95ebf119e":"lqU6b","816ee3e9e3c33a7":"luFgs","37ecef60d8fd7c8a":"cAGAc","53e4bfeb14380c5a":"i37CP","29f73fbdd8a58971":"1TUbD"}],"i37CP":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractNativeEvmRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const bignumber_js_1 = require("ba855eb64bfafd9e");
const typedi_1 = require("1f83ae675c3f6564");
const util_1 = require("4edd1752c78c08ab");
const AbstractEvmRpc_1 = require("b07fb4f1e69f3071");
let AbstractNativeEvmRpc = class AbstractNativeEvmRpc extends AbstractEvmRpc_1.AbstractEvmRpc {
    nativeRpcCall({ method, params, nativePrefix }) {
        return this.rpcCall(`${nativePrefix ? this.getNativePrefix() : util_1.Constant.RPC.METHOD_PREFIX}${method}`, params);
    }
    async blockNumber(nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "blockNumber",
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async chainId(nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "chainId",
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async estimateGas(callObject, nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "estimateGas",
            params: [
                callObject
            ],
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async gasPrice(nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "gasPrice",
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async maxPriorityFeePerGas(nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "maxPriorityFeePerGas",
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getBalance(address, blockNumber = "latest", nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "getBalance",
            params: [
                address,
                typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
            ],
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getBlockByHash(blockHash, includeTransactions = false, nativePrefix) {
        return this.nativeRpcCall({
            method: "getBlockByHash",
            params: [
                blockHash,
                includeTransactions
            ],
            nativePrefix
        });
    }
    async getBlockTransactionCountByHash(blockHash, nativePrefix) {
        return this.nativeRpcCall({
            method: "getBlockTransactionCountByHash",
            params: [
                blockHash
            ],
            nativePrefix
        });
    }
    async getBlockByNumber(blockNumber, full = true, nativePrefix) {
        return this.nativeRpcCall({
            method: "getBlockByNumber",
            params: [
                typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber,
                full
            ],
            nativePrefix
        });
    }
    async getBlockTransactionCountByNumber(blockNumber, nativePrefix) {
        return this.nativeRpcCall({
            method: "getBlockTransactionCountByNumber",
            params: [
                typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
            ],
            nativePrefix
        });
    }
    async getCode(address, blockNumber = "latest", nativePrefix) {
        if (!blockNumber) blockNumber = "latest";
        return this.nativeRpcCall({
            method: "getCode",
            params: [
                address,
                typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
            ],
            nativePrefix
        });
    }
    async getLogs(filter, nativePrefix) {
        return this.nativeRpcCall({
            method: "getLogs",
            params: [
                filter
            ],
            nativePrefix
        });
    }
    async getStorageAt(address, position, blockNumber = "latest", nativePrefix) {
        if (!blockNumber) blockNumber = "latest";
        return this.nativeRpcCall({
            method: "getStorageAt",
            params: [
                address,
                position,
                typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
            ],
            nativePrefix
        });
    }
    async getTransactionByBlockHashAndIndex(blockHash, index, nativePrefix) {
        return this.nativeRpcCall({
            method: "getTransactionByBlockHashAndIndex",
            params: [
                blockHash,
                `0x${new bignumber_js_1.BigNumber(index).toString(16)}`
            ],
            nativePrefix
        });
    }
    async getTransactionByBlockNumberAndIndex(blockNumber, index, nativePrefix) {
        return this.nativeRpcCall({
            method: "getTransactionByBlockNumberAndIndex",
            params: [
                `0x${new bignumber_js_1.BigNumber(blockNumber).toString(16)}`,
                `0x${new bignumber_js_1.BigNumber(index).toString(16)}`
            ],
            nativePrefix
        });
    }
    async getTransactionByHash(txHash, nativePrefix) {
        return this.nativeRpcCall({
            method: "getTransactionByHash",
            params: [
                txHash
            ],
            nativePrefix
        });
    }
    async getTransactionCount(address, blockNumber = "latest", nativePrefix) {
        const response = await this.nativeRpcCall({
            method: "getTransactionCount",
            params: [
                address,
                typeof blockNumber === "number" ? "0x" + new bignumber_js_1.BigNumber(blockNumber).toString(16) : blockNumber
            ],
            nativePrefix
        });
        if (response.result) response.result = new bignumber_js_1.BigNumber(response.result);
        return response;
    }
    async getTransactionReceipt(transactionHash, nativePrefix) {
        return this.nativeRpcCall({
            method: "getTransactionReceipt",
            params: [
                transactionHash
            ],
            nativePrefix
        });
    }
    async sendRawTransaction(signedTransactionData, nativePrefix) {
        return this.nativeRpcCall({
            method: "sendRawTransaction",
            params: [
                signedTransactionData
            ],
            nativePrefix
        });
    }
};
AbstractNativeEvmRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractNativeEvmRpc);
exports.AbstractNativeEvmRpc = AbstractNativeEvmRpc;

},{"ba855eb64bfafd9e":"57qkX","1f83ae675c3f6564":"lKbmC","4edd1752c78c08ab":"luFgs","b07fb4f1e69f3071":"9NASk"}],"dQSZo":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TronLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TronLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("e0580c54e2d2db1d");
const util_1 = require("35aa9aec5617b724");
const LoadBalancer_1 = require("966645705633d356");
const AbstractTronRpc_1 = require("41fb1236165b89af");
let TronLoadBalancerRpc = TronLoadBalancerRpc_1 = class TronLoadBalancerRpc extends AbstractTronRpc_1.AbstractTronRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.loadBalancer.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return this.loadBalancer.rawRpcCall(body);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancer.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    post(post) {
        return this.loadBalancer.post(post);
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveNormalUrlWithFallback().url;
    }
};
TronLoadBalancerRpc = TronLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new TronLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], TronLoadBalancerRpc);
exports.TronLoadBalancerRpc = TronLoadBalancerRpc;

},{"e0580c54e2d2db1d":"lKbmC","35aa9aec5617b724":"luFgs","966645705633d356":"cAGAc","41fb1236165b89af":"lqUlr"}],"2jQsr":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TronRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TronRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("df305fc72970283b");
const tatum_connector_1 = require("2d3dd6f82e0682d8");
const util_1 = require("98cf9a0639bcaf89");
const GenericRpc_1 = require("be693ff6e1aa8822");
const AbstractTronRpc_1 = require("713d85cc508e1983");
let TronRpc = TronRpc_1 = class TronRpc extends AbstractTronRpc_1.AbstractTronRpc {
    constructor(id){
        super();
        this.genericRpc = typedi_1.Container.of(id).get(GenericRpc_1.GenericRpc);
        this.config = typedi_1.Container.of(id).get(util_1.CONFIG);
        this.connector = typedi_1.Container.of(id).get(tatum_connector_1.TatumConnector);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.connector.rpcCall(util_1.Constant.TRON_SHASTA_BASE_URL.RPC, preparedCall);
    }
    async rawRpcCall(body) {
        return await this.connector.rpcCall(util_1.Constant.TRON_SHASTA_BASE_URL.RPC, body);
    }
    async rawBatchRpcCall(body) {
        return this.connector.rpcCall(util_1.Constant.TRON_SHASTA_BASE_URL.RPC, body);
    }
    post(post) {
        return this.connector.post({
            basePath: `${util_1.Constant.TRON_SHASTA_BASE_URL.BASE}${post.path}`,
            body: post.body
        });
    }
    destroy() {
    // do nothing
    }
    getRpcNodeUrl() {
        return this.genericRpc.getRpcNodeUrl();
    }
};
TronRpc = TronRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new TronRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], TronRpc);
exports.TronRpc = TronRpc;

},{"df305fc72970283b":"lKbmC","2d3dd6f82e0682d8":"brrBq","98cf9a0639bcaf89":"luFgs","be693ff6e1aa8822":"eYtCk","713d85cc508e1983":"lqUlr"}],"NLU59":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EosLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EosLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("5de96420e6846da5");
const util_1 = require("611894b09400f86d");
const generic_1 = require("ce3361daf0f314");
const AbstractEosRpc_1 = require("d8e5c3d171fc3a0a");
let EosLoadBalancerRpc = EosLoadBalancerRpc_1 = class EosLoadBalancerRpc extends AbstractEosRpc_1.AbstractEosRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(generic_1.LoadBalancer);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    post(post) {
        return this.loadBalancer.post({
            ...post,
            basePath: `${this.getRpcNodeUrl()}${util_1.Constant.EOS_PREFIX}`
        });
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveNormalUrlWithFallback().url;
    }
};
EosLoadBalancerRpc = EosLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new EosLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], EosLoadBalancerRpc);
exports.EosLoadBalancerRpc = EosLoadBalancerRpc;

},{"5de96420e6846da5":"lKbmC","611894b09400f86d":"luFgs","ce3361daf0f314":"fDS1g","d8e5c3d171fc3a0a":"j4YHz"}],"j4YHz":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractEosRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("cd43148e211af8fd");
const util_1 = require("1356d7674f6cf6a3");
let AbstractEosRpc = class AbstractEosRpc {
    sendPost({ path, body, notConvertCamelToSnake }) {
        const post = {
            path
        };
        if (body) post.body = notConvertCamelToSnake ? body : util_1.Utils.convertObjCamelToSnake(body);
        return this.post(post);
    }
    abiBinToJson(body) {
        return this.sendPost({
            path: "abi_bin_to_json",
            body
        });
    }
    abiJsonToBin(body) {
        return this.sendPost({
            path: "abi_json_to_bin",
            body
        });
    }
    getAbi(body) {
        return this.sendPost({
            path: "get_abi",
            body
        });
    }
    getAccount(body) {
        return this.sendPost({
            path: "get_account",
            body
        });
    }
    getAccountsByAuthorizers(body) {
        return this.sendPost({
            path: "get_accounts_by_authorizers",
            body
        });
    }
    getActivatedProtocolFeatures(body) {
        return this.sendPost({
            path: "get_activated_protocol_features",
            body
        });
    }
    getBlock(body) {
        return this.sendPost({
            path: "get_block",
            body
        });
    }
    getBlockHeaderState(body) {
        return this.sendPost({
            path: "get_block_header_state",
            body
        });
    }
    getBlockInfo(body) {
        return this.sendPost({
            path: "get_block_info",
            body
        });
    }
    getCode(body) {
        return this.sendPost({
            path: "get_code",
            body
        });
    }
    getCurrencyBalance(body) {
        return this.sendPost({
            path: "get_currency_balance",
            body
        });
    }
    getCurrencyStats(body) {
        return this.sendPost({
            path: "get_currency_stats",
            body
        });
    }
    getInfo() {
        return this.sendPost({
            path: "get_info"
        });
    }
    getKvTableRows(body) {
        return this.sendPost({
            path: "get_kv_table_rows",
            body
        });
    }
    getProducers(body) {
        return this.sendPost({
            path: "get_producers",
            body
        });
    }
    getRawAbi(body) {
        return this.sendPost({
            path: "get_raw_abi",
            body
        });
    }
    getRawCodeAndAbi(body) {
        return this.sendPost({
            path: "get_raw_code_and_abi",
            body
        });
    }
    getRequiredKeys(body) {
        return this.sendPost({
            path: "get_required_keys",
            body
        });
    }
    getScheduledTransaction(body) {
        return this.sendPost({
            path: "get_scheduled_transaction",
            body
        });
    }
    getTableByScope(body) {
        return this.sendPost({
            path: "get_table_by_scope",
            body
        });
    }
    getTableRows(body) {
        return this.sendPost({
            path: "get_table_rows",
            body
        });
    }
    pushTransaction(body) {
        return this.sendPost({
            path: "push_transaction",
            body
        });
    }
    pushTransactions(body) {
        return this.sendPost({
            path: "push_transactions",
            body
        });
    }
    sendTransaction(body) {
        return this.sendPost({
            path: "send_transaction",
            body
        });
    }
};
AbstractEosRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractEosRpc);
exports.AbstractEosRpc = AbstractEosRpc;

},{"cd43148e211af8fd":"lKbmC","1356d7674f6cf6a3":"luFgs"}],"hYBGr":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EosRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EosRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("4c1ee22dc6536f8b");
const tatum_connector_1 = require("3001582054e32712");
const util_1 = require("267701cbd7cb768b");
const AbstractEosRpc_1 = require("6704a723b15c288b");
let EosRpc = EosRpc_1 = class EosRpc extends AbstractEosRpc_1.AbstractEosRpc {
    constructor(id){
        super();
        this.connector = typedi_1.Container.of(id).get(tatum_connector_1.TatumConnector);
        this.config = typedi_1.Container.of(id).get(util_1.CONFIG);
    }
    destroy() {
    // Do nothing
    }
    post(post) {
        const basePath = util_1.Utils.getV3RpcUrl(this.config, `/${util_1.Constant.EOS_PREFIX}`);
        return this.connector.post({
            ...post,
            basePath
        });
    }
    getRpcNodeUrl() {
        return util_1.Utils.getV3RpcUrl(this.config);
    }
};
EosRpc = EosRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new EosRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], EosRpc);
exports.EosRpc = EosRpc;

},{"4c1ee22dc6536f8b":"lKbmC","3001582054e32712":"brrBq","267701cbd7cb768b":"luFgs","6704a723b15c288b":"j4YHz"}],"8KbbU":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SolanaLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SolanaLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("25b741effac584f3");
const util_1 = require("c6121420b6747a78");
const generic_1 = require("fbd5d64b9b0a1498");
const AbstractSolanaRpc_1 = require("673110488ce95718");
let SolanaLoadBalancerRpc = SolanaLoadBalancerRpc_1 = class SolanaLoadBalancerRpc extends AbstractSolanaRpc_1.AbstractSolanaRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(generic_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.loadBalancer.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return this.loadBalancer.rawRpcCall(body);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancer.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveNormalUrlWithFallback().url;
    }
};
SolanaLoadBalancerRpc = SolanaLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new SolanaLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], SolanaLoadBalancerRpc);
exports.SolanaLoadBalancerRpc = SolanaLoadBalancerRpc;

},{"25b741effac584f3":"lKbmC","c6121420b6747a78":"luFgs","fbd5d64b9b0a1498":"fDS1g","673110488ce95718":"1UMZP"}],"eiIKJ":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var XrpLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XrpLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("b65ee9e17a38b6b5");
const util_1 = require("8c49dde712a56c28");
const LoadBalancer_1 = require("edef29d31a0c594");
const AbstractXrpRpc_1 = require("3e851535ec96f345");
let XrpLoadBalancerRpc = XrpLoadBalancerRpc_1 = class XrpLoadBalancerRpc extends AbstractXrpRpc_1.AbstractXrpRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.loadBalancer.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return this.loadBalancer.rawRpcCall(body);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancer.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveNormalUrlWithFallback().url;
    }
};
XrpLoadBalancerRpc = XrpLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new XrpLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], XrpLoadBalancerRpc);
exports.XrpLoadBalancerRpc = XrpLoadBalancerRpc;

},{"b65ee9e17a38b6b5":"lKbmC","8c49dde712a56c28":"luFgs","edef29d31a0c594":"cAGAc","3e851535ec96f345":"ggHXR"}],"h286W":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UtxoLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UtxoLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("14c41c9e8ad7a241");
const util_1 = require("126ee28b15618ad1");
const generic_1 = require("ce5487ce5f06b9a9");
const AbstractUtxoRpc_1 = require("a41b6b4a8f0242d2");
let UtxoLoadBalancerRpc = UtxoLoadBalancerRpc_1 = class UtxoLoadBalancerRpc extends AbstractUtxoRpc_1.AbstractUtxoRpc {
    constructor(id){
        super();
        this.loadBalancerRpc = typedi_1.Container.of(id).get(generic_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.loadBalancerRpc.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return this.loadBalancerRpc.rawRpcCall(body);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancerRpc.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancerRpc.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancerRpc.getActiveNormalUrlWithFallback().url;
    }
};
UtxoLoadBalancerRpc = UtxoLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new UtxoLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], UtxoLoadBalancerRpc);
exports.UtxoLoadBalancerRpc = UtxoLoadBalancerRpc;

},{"14c41c9e8ad7a241":"lKbmC","126ee28b15618ad1":"luFgs","ce5487ce5f06b9a9":"fDS1g","a41b6b4a8f0242d2":"hyKKI"}],"dOAsv":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EvmBeaconArchiveLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvmBeaconArchiveLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("af3f2b4ac8ac6c08");
const LoadBalancer_1 = require("96308332aa343548");
const EvmArchiveLoadBalancerRpc_1 = require("85587561c93c1556");
const BeaconV1EvmRpc_1 = require("73bbb6f084ea2cd3");
let EvmBeaconArchiveLoadBalancerRpc = EvmBeaconArchiveLoadBalancerRpc_1 = class EvmBeaconArchiveLoadBalancerRpc extends EvmArchiveLoadBalancerRpc_1.EvmArchiveLoadBalancerRpc {
    constructor(id){
        super(id);
        this.id = id;
        this.beacon = {
            v1: typedi_1.Container.of(this.id).get(BeaconV1EvmRpc_1.BeaconV1EvmRpc)
        };
        this.loadBalancerRpc = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
    }
};
EvmBeaconArchiveLoadBalancerRpc = EvmBeaconArchiveLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new EvmBeaconArchiveLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], EvmBeaconArchiveLoadBalancerRpc);
exports.EvmBeaconArchiveLoadBalancerRpc = EvmBeaconArchiveLoadBalancerRpc;

},{"af3f2b4ac8ac6c08":"lKbmC","96308332aa343548":"cAGAc","85587561c93c1556":"dMVNp","73bbb6f084ea2cd3":"7HlVU"}],"7HlVU":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BeaconV1EvmRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BeaconV1EvmRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("4a880006d4575794");
const LoadBalancer_1 = require("e489c11c3f170682");
const AbstractBeaconV1EvmRpc_1 = require("2ee082c2436e53e2");
let BeaconV1EvmRpc = BeaconV1EvmRpc_1 = class BeaconV1EvmRpc extends AbstractBeaconV1EvmRpc_1.AbstractBeaconV1EvmRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(LoadBalancer_1.LoadBalancer);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    get(get) {
        return this.loadBalancer.get(get);
    }
};
BeaconV1EvmRpc = BeaconV1EvmRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new BeaconV1EvmRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], BeaconV1EvmRpc);
exports.BeaconV1EvmRpc = BeaconV1EvmRpc;

},{"4a880006d4575794":"lKbmC","e489c11c3f170682":"cAGAc","2ee082c2436e53e2":"iTnIH"}],"iTnIH":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractBeaconV1EvmRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("91f48b49af661794");
const util_1 = require("c33cacdf216b330d");
let AbstractBeaconV1EvmRpc = class AbstractBeaconV1EvmRpc {
    getBlockAttestations({ blockId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/blocks/${blockId}/attestations`, rest);
        return this.get({
            path
        });
    }
    getBlockHeader({ blockId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/blocks/${blockId}/header`, rest);
        return this.get({
            path
        });
    }
    getBlockHeaders({ slot, parentRoot, ...rest } = {}) {
        const queryParams = {
            ...slot ? {
                slot
            } : {},
            ...parentRoot ? {
                parentRoot
            } : {},
            ...rest
        };
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/headers`, queryParams);
        return this.get({
            path
        });
    }
    getBlockRoot({ blockId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/blocks/${blockId}/root`, rest);
        return this.get({
            path
        });
    }
    getGenesis() {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/genesis`);
        return this.get({
            path
        });
    }
    getStateCommittees({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/committees`, rest);
        return this.get({
            path
        });
    }
    getStateFinalityCheckpoints({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/finality_checkpoints`, rest);
        return this.get({
            path
        });
    }
    getStateFork({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/fork`, rest);
        return this.get({
            path
        });
    }
    getStateRoot({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/root`, rest);
        return this.get({
            path
        });
    }
    getStateSyncCommittees({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/sync_committees`, rest);
        return this.get({
            path
        });
    }
    getStateValidator({ stateId, validatorId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/validators/${validatorId}`, rest);
        return this.get({
            path
        });
    }
    getStateValidatorBalances({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/validator_balances`, rest);
        return this.get({
            path
        });
    }
    getStateValidators({ stateId, ...rest }) {
        const path = util_1.Utils.addQueryParams(`${util_1.Constant.BEACON_PREFIX}/states/${stateId}/validators`, rest);
        return this.get({
            path
        });
    }
};
AbstractBeaconV1EvmRpc = __decorate([
    (0, typedi_1.Service)()
], AbstractBeaconV1EvmRpc);
exports.AbstractBeaconV1EvmRpc = AbstractBeaconV1EvmRpc;

},{"91f48b49af661794":"lKbmC","c33cacdf216b330d":"luFgs"}],"7ppsG":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UtxoLoadBalancerRpcEstimateFee_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UtxoLoadBalancerRpcEstimateFee = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("b513e12e4671c33c");
const util_1 = require("d5c08325297e53f7");
const generic_1 = require("66d4dc798464f79d");
const AbstractUtxoRpcEstimateFee_1 = require("cf43df5ed6ffdd3f");
let UtxoLoadBalancerRpcEstimateFee = UtxoLoadBalancerRpcEstimateFee_1 = class UtxoLoadBalancerRpcEstimateFee extends AbstractUtxoRpcEstimateFee_1.AbstractUtxoRpcEstimateFee {
    constructor(id){
        super();
        this.loadBalancerRpc = typedi_1.Container.of(id).get(generic_1.LoadBalancer);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.loadBalancerRpc.rawRpcCall(preparedCall);
    }
    async rawRpcCall(body) {
        return this.loadBalancerRpc.rawRpcCall(body);
    }
    rawBatchRpcCall(body) {
        return this.loadBalancerRpc.rawBatchRpcCall(body);
    }
    destroy() {
        this.loadBalancerRpc.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancerRpc.getActiveNormalUrlWithFallback().url;
    }
};
UtxoLoadBalancerRpcEstimateFee = UtxoLoadBalancerRpcEstimateFee_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new UtxoLoadBalancerRpcEstimateFee_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], UtxoLoadBalancerRpcEstimateFee);
exports.UtxoLoadBalancerRpcEstimateFee = UtxoLoadBalancerRpcEstimateFee;

},{"b513e12e4671c33c":"lKbmC","d5c08325297e53f7":"luFgs","66d4dc798464f79d":"fDS1g","cf43df5ed6ffdd3f":"1IxqX"}],"1IxqX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractUtxoRpcEstimateFee = void 0;
const AbstractUtxoRpc_1 = require("6b19bf5aa44fd47");
class AbstractUtxoRpcEstimateFee extends AbstractUtxoRpc_1.AbstractUtxoRpc {
    estimateFee() {
        return this.rpcCall("estimatefee");
    }
}
exports.AbstractUtxoRpcEstimateFee = AbstractUtxoRpcEstimateFee;

},{"6b19bf5aa44fd47":"hyKKI"}],"6R1cI":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UtxoRpcEstimateFee_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UtxoRpcEstimateFee = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("6513139bb392f7e1");
const util_1 = require("adddab0e25eb3647");
const generic_1 = require("39785db71e6a544d");
const AbstractUtxoRpcEstimateFee_1 = require("eb920cdf7c59d9d5");
let UtxoRpcEstimateFee = UtxoRpcEstimateFee_1 = class UtxoRpcEstimateFee extends AbstractUtxoRpcEstimateFee_1.AbstractUtxoRpcEstimateFee {
    constructor(id){
        super();
        this.genericRpc = typedi_1.Container.of(id).get(generic_1.GenericRpc);
    }
    async rpcCall(method, params) {
        const preparedCall = util_1.Utils.prepareRpcCall(method, params);
        return await this.genericRpc.rawRpcCall(preparedCall);
    }
    async rawBatchRpcCall(body) {
        return this.genericRpc.rawBatchRpcCall(body);
    }
    async rawRpcCall(body) {
        return await this.genericRpc.rawRpcCall(body);
    }
    destroy() {
    // do nothing
    }
    getRpcNodeUrl() {
        return this.genericRpc.getRpcNodeUrl();
    }
};
UtxoRpcEstimateFee = UtxoRpcEstimateFee_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new UtxoRpcEstimateFee_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], UtxoRpcEstimateFee);
exports.UtxoRpcEstimateFee = UtxoRpcEstimateFee;

},{"6513139bb392f7e1":"lKbmC","adddab0e25eb3647":"luFgs","39785db71e6a544d":"fDS1g","eb920cdf7c59d9d5":"1IxqX"}],"6wQmE":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BnbLoadBalancerRpc_1;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BnbLoadBalancerRpc = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */ const typedi_1 = require("930f896c6fc0c6c1");
const generic_1 = require("53ae4a58ccd1abbb");
const AbstractBnbRpc_1 = require("eaf5bf5e8bbeacf1");
let BnbLoadBalancerRpc = BnbLoadBalancerRpc_1 = class BnbLoadBalancerRpc extends AbstractBnbRpc_1.AbstractBnbRpc {
    constructor(id){
        super();
        this.loadBalancer = typedi_1.Container.of(id).get(generic_1.LoadBalancer);
    }
    destroy() {
        this.loadBalancer.destroy();
    }
    getRpcNodeUrl() {
        return this.loadBalancer.getActiveNormalUrlWithFallback().url;
    }
    rawRpcCall(body) {
        return this.loadBalancer.post({
            body,
            path: ""
        });
    }
    post(post) {
        return this.loadBalancer.post(post);
    }
};
BnbLoadBalancerRpc = BnbLoadBalancerRpc_1 = __decorate([
    (0, typedi_1.Service)({
        factory: (data)=>{
            return new BnbLoadBalancerRpc_1(data.id);
        },
        transient: true
    }),
    __metadata("design:paramtypes", [
        String
    ])
], BnbLoadBalancerRpc);
exports.BnbLoadBalancerRpc = BnbLoadBalancerRpc;

},{"930f896c6fc0c6c1":"lKbmC","53ae4a58ccd1abbb":"fDS1g","eaf5bf5e8bbeacf1":"b3K9R"}],"b3K9R":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractBnbRpc = void 0;
const util_1 = require("dcbac2e1a650715c");
class AbstractBnbRpc {
    sendRpcCall(method, params) {
        const body = {
            id: 1,
            jsonrpc: "2.0",
            method,
            params: params ? util_1.Utils.convertObjCamelToSnake(params) : {}
        };
        return this.post({
            body,
            path: ""
        });
    }
    status() {
        return this.sendRpcCall("status");
    }
    abciInfo() {
        return this.sendRpcCall("abci_info");
    }
    abciQuery(params) {
        return this.sendRpcCall("abci_query", params);
    }
    block(params) {
        return this.sendRpcCall("block", params);
    }
    blockResult(params) {
        return this.sendRpcCall("block_result", params);
    }
    blockchain(params) {
        return this.sendRpcCall("blockchain", params);
    }
    commit(params) {
        return this.sendRpcCall("commit", params);
    }
    tx(params) {
        return this.sendRpcCall("tx", params);
    }
    broadcastTxAsync(params) {
        return this.sendRpcCall("broadcast_tx_async", params);
    }
    broadcastTxCommit(params) {
        return this.sendRpcCall("broadcast_tx_commit", params);
    }
    broadcastTxSync(params) {
        return this.sendRpcCall("broadcast_tx_sync", params);
    }
    txSearch(params) {
        return this.sendRpcCall("tx_search", params);
    }
    validators(params) {
        return this.sendRpcCall("validators", params);
    }
    unconfirmedTxs(params) {
        return this.sendRpcCall("unconfirmed_txs", params);
    }
    genesis() {
        return this.sendRpcCall("genesis");
    }
    health() {
        return this.sendRpcCall("health");
    }
    netInfo() {
        return this.sendRpcCall("net_info");
    }
    numUnconfirmedTxs() {
        return this.sendRpcCall("num_unconfirmed_txs");
    }
}
exports.AbstractBnbRpc = AbstractBnbRpc;

},{"dcbac2e1a650715c":"luFgs"}],"7RhJP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}]},["13c4p","igcvL"], "igcvL", "parcelRequirea39d")

//# sourceMappingURL=index.5baa4167.js.map
