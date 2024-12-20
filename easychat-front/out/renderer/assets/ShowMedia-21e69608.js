import { a as getDefaultExportFromCjs, c as commonjsGlobal$1, z as defineComponent, r as ref, A as watch, y as nextTick, o as onMounted, e as onUnmounted, h as openBlock, i as createElementBlock, B as renderSlot, _ as _export_sfc$1, b as getCurrentInstance, u as useRouter, C as useGlobalInfoStore, f as resolveComponent, j as createBaseVNode, D as normalizeClass, l as withModifiers, F as Fragment, k as createVNode, p as createCommentVNode, m as createBlock, w as withCtx, E as unref, G as withDirectives, H as vShow, t as toDisplayString, s as createTextVNode, v as pushScopeId, x as popScopeId } from "./index-347654a5.js";
var DPlayer_min = { exports: {} };
(function(module, exports) {
  !function(n, e) {
    module.exports = e();
  }(self, () => (() => {
    var n = { 916: (n2, e2, t2) => {
      var a2 = t2(471);
      n2.exports = function(n3) {
        var e3, o = "", r = (n3 = n3 || {}).video, i = n3.options, l = a2.$escape, s = n3.tran, p = n3.icons, d = n3.index, c = a2.$each;
        return n3.$value, n3.$index, o += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ', e3 = t2(568)(r), o += e3, o += "\n    ", i.logo && (o += '\n    <div class="dplayer-logo">\n        <img src="', o += l(i.logo), o += '">\n    </div>\n    '), o += '\n    <div class="dplayer-danmaku"', i.danmaku && i.danmaku.bottom && (o += ' style="margin-bottom:', o += l(i.danmaku.bottom), o += '"'), o += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ', i.danmaku && (o += '\n        <span class="dplayer-danloading">', o += l(s("danmaku-loading")), o += "</span>\n        "), o += '\n        <span class="diplayer-loading-icon">', o += p.loading, o += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="', o += l(s("setting")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.pallette, o += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">', o += l(s("set-danmaku-color")), o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', o += l(d), o += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">', o += l(s("set-danmaku-type")), o += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="1">\n                    <span>', o += l(s("top")), o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="0" checked>\n                    <span>', o += l(s("rolling")), o += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', o += l(d), o += '" value="2">\n                    <span>', o += l(s("bottom")), o += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="', o += l(s("input-danmaku-enter")), o += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="', o += l(s("send")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.send, o += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">', o += p.play, o += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">', o += p.volumeDown, o += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ', o += l(i.theme), o += ';">\n                        <span class="dplayer-thumb" style="background: ', o += l(i.theme), o += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ', i.live && (o += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ', o += l(i.theme), o += ';"></span>', o += l(s("live")), o += "</span>\n        "), o += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ', i.video.quality && (o += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">', o += l(i.video.quality[i.video.defaultQuality].name), o += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ', c(i.video.quality, function(n4, e4) {
          o += '\n                    <div class="dplayer-quality-item" data-index="', o += l(e4), o += '">', o += l(n4.name), o += "</div>\n                ";
        }), o += "\n                </div>\n            </div>\n        </div>\n        "), o += "\n        ", i.screenshot && (o += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="', o += l(s("screenshot")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.camera, o += "</span>\n        </div>\n        "), o += "\n        ", i.airplay && (o += '\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="', o += l(s("airplay")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.airplay, o += "</span>\n        </div>\n        "), o += "\n        ", i.chromecast && (o += '\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="', o += l(s("chromecast")), o += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', o += p.chromecast, o += "</span>\n        </div>\n        "), o += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="', o += l(s("send-danmaku")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.comment, o += "</span>\n            </button>\n        </div>\n        ", i.subtitle && (o += "\n        ", "string" == typeof i.subtitle.url ? (o += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="', o += l(s("hide-subs")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.subtitle, o += "</span>\n            </button>\n        </div>\n        ") : (o += '\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="', o += l(s("subtitle")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.subtitle, o += '</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ', c(i.subtitle.url, function(n4, e4) {
          o += '\n                        <div class="dplayer-subtitles-item" data-subtitle="', o += l(n4.url), o += '">\n                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->\n                            <span class="dplayer-label">', o += l(n4.lang ? n4.name ? n4.name + " (" + s(n4.lang) + ")" : s(n4.lang) : n4.name), o += "</span>\n                        </div>\n                    ";
        }), o += "\n                </div>\n            </div>\n        </div>\n        "), o += "\n        "), o += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="', o += l(s("setting")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.setting, o += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">', o += l(s("speed")), o += '</span>\n                        <div class="dplayer-toggle">', o += p.right, o += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">', o += l(s("loop")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">', o += l(s("show-danmaku")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">', o += l(s("unlimited-danmaku")), o += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">', o += l(s("opacity-danmaku")), o += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ', c(i.playbackSpeed, function(n4, e4) {
          o += '\n                        <div class="dplayer-setting-speed-item" data-speed="', o += l(n4), o += '">\n                            <span class="dplayer-label">', o += l(1 === n4 ? s("normal") : n4), o += "</span>\n                        </div>\n                    ";
        }), o += '\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="', o += l(s("web-fullscreen")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.fullWeb, o += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="', o += l(s("fullscreen")), o += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', o += p.full, o += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ', o += l(i.theme), o += '">\n                <span class="dplayer-thumb" style="background: ', o += l(i.theme), o += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ', i.danmaku && (o += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '), o += '\n</div>\n<div class="dplayer-menu">\n    ', c(i.contextmenu, function(n4, e4) {
          o += '\n        <div class="dplayer-menu-item">\n            <a', n4.link && (o += ' target="_blank"'), o += ' href="', o += l(n4.link || "javascript:void(0);"), o += '">', n4.key && (o += " ", o += l(s(n4.key))), n4.text && (o += " ", o += l(n4.text)), o += "</a>\n        </div>\n    ";
        }), o += '\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ', o += p.play, o += "\n</button>";
      };
    }, 568: (n2, e2, t2) => {
      var a2 = t2(471);
      n2.exports = function(n3) {
        var e3 = "", t3 = (n3 = n3 || {}).enableSubtitle, o = n3.subtitle, r = n3.current, i = n3.airplay, l = n3.pic, s = a2.$escape, p = n3.screenshot, d = n3.preload, c = n3.url;
        return t3 = o && "webvtt" === o.type, e3 += '\n<video\n    class="dplayer-video ', r && (e3 += "dplayer-video-current"), e3 += '"\n    webkit-playsinline\n    ', i && (e3 += ' x-webkit-airplay="allow" '), e3 += "\n    playsinline\n    ", l && (e3 += 'poster="', e3 += s(l), e3 += '"'), e3 += "\n    ", (p || t3) && (e3 += 'crossorigin="anonymous"'), e3 += "\n    ", d && (e3 += 'preload="', e3 += s(d), e3 += '"'), e3 += "\n    ", i ? e3 += "\n    nosrc\n    " : c && (e3 += '\n    src="', e3 += s(c), e3 += '"\n    '), e3 += "\n    >\n    ", i && (e3 += '\n    <source src="', e3 += s(c), e3 += '">\n    '), e3 += "\n    ", t3 && (e3 += '\n    <track class="dplayer-subtrack" kind="metadata" default src="', e3 += s("string" == typeof o.url ? o.url : o.url[o.index].url), e3 += '"></track>\n    '), e3 + "\n</video>";
      };
    }, 49: (n2, e2, t2) => {
      t2.d(e2, { Z: () => l });
      var a2 = t2(415), o = t2.n(a2), r = t2(352), i = t2.n(r)()(o());
      i.push([n2.id, `:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`, "", { version: 3, sources: ["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"], names: [], mappings: "AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE", sourcesContent: [`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`], sourceRoot: "" }]);
      const l = i;
    }, 685: (n2, e2, t2) => {
      t2.d(e2, { Z: () => u });
      var a2 = t2(415), o = t2.n(a2), r = t2(352), i = t2.n(r), l = t2(49), s = t2(80), p = t2.n(s), d = new URL(t2(831), t2.b), c = i()(o());
      c.i(l.Z);
      var A = p()(d);
      c.push([n2.id, '@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos="up"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(' + A + `) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`, "", { version: 3, sources: ["webpack://./src/css/global.less", "webpack://./src/css/index.less", "webpack://./src/css/player.less", "webpack://./src/css/balloon.less", "webpack://./src/css/bezel.less", "webpack://./src/css/notice.less", "webpack://./src/css/controller.less", "webpack://./src/css/danmaku.less", "webpack://./src/css/logo.less", "webpack://./src/css/menu.less", "webpack://./src/css/subtitle.less", "webpack://./src/css/video.less", "webpack://./src/css/info-panel.less"], names: [], mappings: "AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR", sourcesContent: ["@keyframes my-face {\n    2% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    4% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    6% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    8% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    10% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    12% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    14% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    16% {\n        transform: translate(0, -0.5px) rotate(-1.5deg);\n    }\n    18% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    20% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    22% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    24% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    26% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    28% {\n        transform: translate(0, 0.5px) rotate(1.5deg);\n    }\n    30% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    32% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    34% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    36% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    38% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    40% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    42% {\n        transform: translate(0, 2.5px) rotate(-1.5deg);\n    }\n    44% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    46% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    48% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    50% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    52% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    54% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    56% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    58% {\n        transform: translate(0, 0.5px) rotate(2.5deg);\n    }\n    60% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    62% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    64% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    66% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    68% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    70% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    72% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    74% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    76% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    78% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    80% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    82% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    84% {\n        transform: translate(0, 1.5px) rotate(2.5deg);\n    }\n    86% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    88% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    90% {\n        transform: translate(0, 2.5px) rotate(-0.5deg);\n    }\n    92% {\n        transform: translate(0, 0.5px) rotate(-0.5deg);\n    }\n    94% {\n        transform: translate(0, 2.5px) rotate(0.5deg);\n    }\n    96% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    98% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    0%,\n    100% {\n        transform: translate(0, 0) rotate(0deg);\n    }\n}", `@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`, ".dplayer {\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    line-height: 1;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n\n        path,\n        circle {\n            fill: #fff;\n        }\n    }\n\n    &:-webkit-full-screen {\n        width: 100%;\n        height: 100%;\n        background: #000;\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        transform: translate(0, 0);\n        \n    }\n\n    &.dplayer-no-danmaku {\n        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n            .dplayer-setting-showdan,\n            .dplayer-setting-danmaku,\n            .dplayer-setting-danunlimit {\n                display: none;\n            }\n        }\n\n        .dplayer-controller .dplayer-icons .dplayer-comment {\n            display: none;\n        }\n\n        .dplayer-danmaku {\n            display: none;\n        }\n    }\n\n    &.dplayer-live {\n        .dplayer-time {\n            display: none;\n        }\n        .dplayer-bar-wrap {\n            display: none;\n        }\n        .dplayer-setting-speed {\n            display: none;\n        }\n        .dplayer-setting-loop {\n            display: none;\n        }\n\n        &.dplayer-no-danmaku {\n            .dplayer-setting {\n                display: none;\n            }\n        }\n    }\n\n    &.dplayer-arrow {\n        .dplayer-danmaku {\n            font-size: 18px;\n        }\n        .dplayer-icon {\n            margin: 0 -3px;\n        }\n    }\n\n    &.dplayer-playing {\n        .dplayer-danmaku .dplayer-danmaku-move {\n            animation-play-state: running;\n        }\n\n        @media (min-width: 900px) {\n            .dplayer-controller-mask {\n                opacity: 0;\n            }\n            .dplayer-controller {\n                opacity: 0;\n            }\n\n            &:hover {\n                .dplayer-controller-mask {\n                    opacity: 1;\n                }\n                .dplayer-controller {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &.dplayer-loading {\n        .dplayer-bezel .diplayer-loading-icon {\n            display: block;\n        }\n    }\n\n    &.dplayer-loading,\n    &.dplayer-paused {\n        .dplayer-danmaku,\n        .dplayer-danmaku-move {\n            animation-play-state: paused;\n        }\n    }\n\n    &.dplayer-hide-controller {\n        cursor: none;\n\n        .dplayer-controller-mask {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        .dplayer-controller {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n    }\n    &.dplayer-show-controller {\n        .dplayer-controller-mask {\n            opacity: 1;\n        }\n        .dplayer-controller {\n            opacity: 1;\n        }\n    }\n    &.dplayer-fulled {\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n    &.dplayer-mobile {\n        .dplayer-controller .dplayer-icons {\n            .dplayer-volume,\n            .dplayer-camera-icon,\n            .dplayer-airplay-icon,\n            .dplayer-chromecast-icon,\n            .dplayer-play-icon {\n                display: none;\n            }\n            .dplayer-full .dplayer-full-in-icon {\n                position: static;\n                display: inline-block;\n            }\n        }\n\n        .dplayer-bar-time {\n            display: none;\n        }\n\n        &.dplayer-hide-controller {\n            .dplayer-mobile-play {\n                display: none;\n            }\n        }\n\n        .dplayer-mobile-play {\n            display: block;\n        }\n    }\n}\n\n// To hide scroll bar, apply this class to <body>\n.dplayer-web-fullscreen-fix {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n", `@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`, ".dplayer-bezel {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    pointer-events: none;\n    .dplayer-bezel-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -26px 0 0 -26px;\n        height: 52px;\n        width: 52px;\n        padding: 12px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, .5);\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        &.dplayer-bezel-transition {\n            animation: bezel-hide .5s linear;\n        }\n        @keyframes bezel-hide {\n            from {\n                opacity: 1;\n                transform: scale(1);\n            }\n            to {\n                opacity: 0;\n                transform: scale(2);\n            }\n        }\n    }\n    .dplayer-danloading {\n        position: absolute;\n        top: 50%;\n        margin-top: -7px;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        line-height: 14px;\n        animation: my-face 5s infinite ease-in-out;\n    }\n    .diplayer-loading-icon {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -18px 0 0 -18px;\n        height: 36px;\n        width: 36px;\n        pointer-events: none;\n        .diplayer-loading-hide {\n            display: none;\n        }\n        .diplayer-loading-dot {\n            animation: diplayer-loading-dot-fade .8s ease infinite;\n            opacity: 0;\n            transform-origin: 4px 4px;\n            each(range(7), {\n                &.diplayer-loading-dot-@{value} {\n                    animation-delay: (@value * 0.1s);\n                }\n            });\n        }\n        @keyframes diplayer-loading-dot-fade {\n            0% {\n                opacity: .7;\n                transform: scale(1.2, 1.2)\n            }\n            50% {\n                opacity: .25;\n                transform: scale(.9, .9)\n            }\n            to {\n                opacity: .25;\n                transform: scale(.85, .85)\n            }\n        }\n    }\n}", ".dplayer-notice-list{\n    position: absolute;\n    bottom: 60px;\n    left: 20px;\n\n    .dplayer-notice {\n        border-radius: 2px;\n        background: rgba(28, 28, 28, 0.9);\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        color: #fff;\n        display: table;\n        pointer-events: none;\n        animation: showNotice .3s ease 1 forwards;\n    }\n\n    .remove-notice{\n        animation: removeNotice .3s ease 1 forwards;\n    }\n}\n\n@keyframes showNotice {\n    from {\n        padding: 0;\n        font-size: 0;\n        margin-top: 0;\n    }\n    to {\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n}\n\n@keyframes removeNotice {\n    0%{\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    20%{\n        font-size: 12px;\n    }\n    21%{\n        font-size: 0;\n        padding: 7px 10px;\n    }\n    100%{\n        padding: 0;\n        margin-top: 0;\n        font-size: 0;\n    }\n}\n", `.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`, ".dplayer-danmaku {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    .dplayer-danmaku-item {\n        display: inline-block;\n        pointer-events: none;\n        user-select: none;\n        cursor: default;\n        white-space: nowrap;\n        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);\n        &--demo {\n            position: absolute;\n            visibility: hidden;\n        }\n    }\n    .dplayer-danmaku-right {\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        &.dplayer-danmaku-move {\n            will-change: transform;\n            animation-name: 'danmaku';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku {\n        from {\n            transform: translateX(100%);\n        }\n    }\n    .dplayer-danmaku-top,\n    .dplayer-danmaku-bottom {\n        position: absolute;\n        width: 100%;\n        text-align: center;\n        visibility: hidden;\n        &.dplayer-danmaku-move {\n            will-change: visibility;\n            animation-name: 'danmaku-center';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku-center {\n        from {\n            visibility: visible;\n        }\n        to {\n            visibility: visible;\n        }\n    }\n}", ".dplayer-logo {\n    pointer-events: none;\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    max-width: 50px;\n    max-height: 50px;\n    img {\n        max-width: 100%;\n        max-height: 100%;\n        background: none;\n    }\n}", ".dplayer-menu {\n    position: absolute;\n    width: 170px;\n    border-radius: 2px;\n    background: rgba(28, 28, 28, 0.85);\n    padding: 5px 0;\n    overflow: hidden;\n    z-index: 3;\n    display: none;\n    &.dplayer-menu-show {\n        display: block;\n    }\n    .dplayer-menu-item {\n        height: 30px;\n        box-sizing: border-box;\n        cursor: pointer;\n        &:hover {\n            background-color: rgba(255, 255, 255, .1);\n        }\n        a {\n            display: inline-block;\n            padding: 0 10px;\n            line-height: 30px;\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 100%;\n            box-sizing: border-box;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}", ".dplayer-subtitle {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    left: 5%;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    &.dplayer-subtitle-hide {\n        display: none;\n    }\n}", ".dplayer-mask {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    display: none;\n    &.dplayer-mask-show {\n        display: block;\n    }\n}\n\n.dplayer-video-wrap {\n    position: relative;\n    background: #000;\n    font-size: 0;\n    width: 100%;\n    height: 100%;\n    .dplayer-video {\n        width: 100%;\n        height: 100%;\n        display: none;\n    }\n    .dplayer-video-current {\n        display: block;\n    }\n    .dplayer-video-prepare {\n        display: none;\n    }\n}", ".dplayer-info-panel {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 400px;\n    background: rgba(28, 28, 28, 0.8);\n    padding: 10px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 2px;\n\n    &-hide {\n        display: none;\n    }\n\n    .dplayer-info-panel-close {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n\n    .dplayer-info-panel-item {\n        & > span {\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 15px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n    }\n\n    .dplayer-info-panel-item-title {\n        width: 100px;\n        text-align: right;\n        margin-right: 10px;\n    }\n    \n    .dplayer-info-panel-item-data {\n        width: 260px;\n    }\n}"], sourceRoot: "" }]);
      const u = c;
    }, 856: (n2) => {
      var e2 = [];
      function t2(n3) {
        for (var t3 = -1, a3 = 0; a3 < e2.length; a3++)
          if (e2[a3].identifier === n3) {
            t3 = a3;
            break;
          }
        return t3;
      }
      function a2(n3, a3) {
        for (var r = {}, i = [], l = 0; l < n3.length; l++) {
          var s = n3[l], p = a3.base ? s[0] + a3.base : s[0], d = r[p] || 0, c = "".concat(p, " ").concat(d);
          r[p] = d + 1;
          var A = t2(c), u = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
          if (-1 !== A)
            e2[A].references++, e2[A].updater(u);
          else {
            var y = o(u, a3);
            a3.byIndex = l, e2.splice(l, 0, { identifier: c, updater: y, references: 1 });
          }
          i.push(c);
        }
        return i;
      }
      function o(n3, e3) {
        var t3 = e3.domAPI(e3);
        return t3.update(n3), function(e4) {
          if (e4) {
            if (e4.css === n3.css && e4.media === n3.media && e4.sourceMap === n3.sourceMap && e4.supports === n3.supports && e4.layer === n3.layer)
              return;
            t3.update(n3 = e4);
          } else
            t3.remove();
        };
      }
      n2.exports = function(n3, o2) {
        var r = a2(n3 = n3 || [], o2 = o2 || {});
        return function(n4) {
          n4 = n4 || [];
          for (var i = 0; i < r.length; i++) {
            var l = t2(r[i]);
            e2[l].references--;
          }
          for (var s = a2(n4, o2), p = 0; p < r.length; p++) {
            var d = t2(r[p]);
            0 === e2[d].references && (e2[d].updater(), e2.splice(d, 1));
          }
          r = s;
        };
      };
    }, 370: (n2) => {
      var e2 = {};
      n2.exports = function(n3, t2) {
        var a2 = function(n4) {
          if (void 0 === e2[n4]) {
            var t3 = document.querySelector(n4);
            if (window.HTMLIFrameElement && t3 instanceof window.HTMLIFrameElement)
              try {
                t3 = t3.contentDocument.head;
              } catch (n5) {
                t3 = null;
              }
            e2[n4] = t3;
          }
          return e2[n4];
        }(n3);
        if (!a2)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        a2.appendChild(t2);
      };
    }, 278: (n2) => {
      n2.exports = function(n3) {
        var e2 = document.createElement("style");
        return n3.setAttributes(e2, n3.attributes), n3.insert(e2, n3.options), e2;
      };
    }, 458: (n2, e2, t2) => {
      n2.exports = function(n3) {
        var e3 = t2.nc;
        e3 && n3.setAttribute("nonce", e3);
      };
    }, 470: (n2) => {
      n2.exports = function(n3) {
        var e2 = n3.insertStyleElement(n3);
        return { update: function(t2) {
          !function(n4, e3, t3) {
            var a2 = "";
            t3.supports && (a2 += "@supports (".concat(t3.supports, ") {")), t3.media && (a2 += "@media ".concat(t3.media, " {"));
            var o = void 0 !== t3.layer;
            o && (a2 += "@layer".concat(t3.layer.length > 0 ? " ".concat(t3.layer) : "", " {")), a2 += t3.css, o && (a2 += "}"), t3.media && (a2 += "}"), t3.supports && (a2 += "}");
            var r = t3.sourceMap;
            r && "undefined" != typeof btoa && (a2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e3.styleTagTransform(a2, n4, e3.options);
          }(e2, n3, t2);
        }, remove: function() {
          !function(n4) {
            if (null === n4.parentNode)
              return false;
            n4.parentNode.removeChild(n4);
          }(e2);
        } };
      };
    }, 488: (n2) => {
      n2.exports = function(n3, e2) {
        if (e2.styleSheet)
          e2.styleSheet.cssText = n3;
        else {
          for (; e2.firstChild; )
            e2.removeChild(e2.firstChild);
          e2.appendChild(document.createTextNode(n3));
        }
      };
    }, 251: (n2) => {
      n2.exports = '<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>';
    }, 113: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>';
    }, 193: (n2) => {
      n2.exports = '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>';
    }, 338: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>';
    }, 807: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>';
    }, 300: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>';
    }, 574: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>';
    }, 182: (n2) => {
      n2.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>';
    }, 965: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>';
    }, 74: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>';
    }, 730: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>';
    }, 428: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>';
    }, 254: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>';
    }, 934: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>';
    }, 410: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>';
    }, 644: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>';
    }, 324: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>';
    }, 437: (n2) => {
      n2.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>';
    }, 897: (n2, e2, t2) => {
      var a2 = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t2.g ? t2.g : {}, o = Object.create(a2), r = /["&'<>]/;
      function i(n3) {
        return "string" != typeof n3 && (n3 = null == n3 ? "" : "function" == typeof n3 ? i(n3.call(n3)) : JSON.stringify(n3)), n3;
      }
      o.$escape = function(n3) {
        return function(n4) {
          var e3 = "" + n4, t3 = r.exec(e3);
          if (!t3)
            return n4;
          var a3 = "", o2 = void 0, i2 = void 0, l = void 0;
          for (o2 = t3.index, i2 = 0; o2 < e3.length; o2++) {
            switch (e3.charCodeAt(o2)) {
              case 34:
                l = "&#34;";
                break;
              case 38:
                l = "&#38;";
                break;
              case 39:
                l = "&#39;";
                break;
              case 60:
                l = "&#60;";
                break;
              case 62:
                l = "&#62;";
                break;
              default:
                continue;
            }
            i2 !== o2 && (a3 += e3.substring(i2, o2)), i2 = o2 + 1, a3 += l;
          }
          return i2 !== o2 ? a3 + e3.substring(i2, o2) : a3;
        }(i(n3));
      }, o.$each = function(n3, e3) {
        if (Array.isArray(n3))
          for (var t3 = 0, a3 = n3.length; t3 < a3; t3++)
            e3(n3[t3], t3);
        else
          for (var o2 in n3)
            e3(n3[o2], o2);
      }, n2.exports = o;
    }, 471: (n2, e2, t2) => {
      n2.exports = t2(897);
    }, 352: (n2) => {
      n2.exports = function(n3) {
        var e2 = [];
        return e2.toString = function() {
          return this.map(function(e3) {
            var t2 = "", a2 = void 0 !== e3[5];
            return e3[4] && (t2 += "@supports (".concat(e3[4], ") {")), e3[2] && (t2 += "@media ".concat(e3[2], " {")), a2 && (t2 += "@layer".concat(e3[5].length > 0 ? " ".concat(e3[5]) : "", " {")), t2 += n3(e3), a2 && (t2 += "}"), e3[2] && (t2 += "}"), e3[4] && (t2 += "}"), t2;
          }).join("");
        }, e2.i = function(n4, t2, a2, o, r) {
          "string" == typeof n4 && (n4 = [[null, n4, void 0]]);
          var i = {};
          if (a2)
            for (var l = 0; l < this.length; l++) {
              var s = this[l][0];
              null != s && (i[s] = true);
            }
          for (var p = 0; p < n4.length; p++) {
            var d = [].concat(n4[p]);
            a2 && i[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), t2 && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = t2) : d[2] = t2), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), e2.push(d));
          }
        }, e2;
      };
    }, 80: (n2) => {
      n2.exports = function(n3, e2) {
        return e2 || (e2 = {}), n3 ? (n3 = String(n3.__esModule ? n3.default : n3), /^['"].*['"]$/.test(n3) && (n3 = n3.slice(1, -1)), e2.hash && (n3 += e2.hash), /["'() \t\n]|(%20)/.test(n3) || e2.needQuotes ? '"'.concat(n3.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n3) : n3;
      };
    }, 415: (n2) => {
      n2.exports = function(n3) {
        var e2 = n3[1], t2 = n3[3];
        if (!t2)
          return e2;
        if ("function" == typeof btoa) {
          var a2 = btoa(unescape(encodeURIComponent(JSON.stringify(t2)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a2), r = "/*# ".concat(o, " */");
          return [e2].concat([r]).join("\n");
        }
        return [e2].join("\n");
      };
    }, 937: (n2) => {
      function e2(n3) {
        return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, e2(n3);
      }
      n2.exports = "object" == ("undefined" == typeof self ? "undefined" : e2(self)) ? self.FormData : window.FormData;
    }, 831: (n2) => {
      n2.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==";
    } }, e = {};
    function t(a2) {
      var o = e[a2];
      if (void 0 !== o)
        return o.exports;
      var r = e[a2] = { id: a2, exports: {} };
      return n[a2](r, r.exports, t), r.exports;
    }
    t.m = n, t.n = (n2) => {
      var e2 = n2 && n2.__esModule ? () => n2.default : () => n2;
      return t.d(e2, { a: e2 }), e2;
    }, t.d = (n2, e2) => {
      for (var a2 in e2)
        t.o(e2, a2) && !t.o(n2, a2) && Object.defineProperty(n2, a2, { enumerable: true, get: e2[a2] });
    }, t.g = function() {
      if ("object" == typeof globalThis)
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n2) {
        if ("object" == typeof window)
          return window;
      }
    }(), t.o = (n2, e2) => Object.prototype.hasOwnProperty.call(n2, e2), t.b = document.baseURI || self.location.href, t.nc = void 0;
    var a = {};
    return (() => {
      t.d(a, { default: () => Za });
      var n2 = t(856), e2 = t.n(n2), o = t(470), r = t.n(o), i = t(370), l = t.n(i), s = t(458), p = t.n(s), d = t(278), c = t.n(d), A = t(488), u = t.n(A), y = t(685), m = {};
      m.styleTagTransform = u(), m.setAttributes = p(), m.insert = l().bind(null, "head"), m.domAPI = r(), m.insertStyleElement = c(), e2()(y.Z, m), y.Z && y.Z.locals && y.Z.locals;
      function h(n3) {
        return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, h(n3);
      }
      function f(n3, e3) {
        this.name = "AggregateError", this.errors = n3, this.message = e3 || "";
      }
      f.prototype = Error.prototype;
      function b(n3) {
        return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, b(n3);
      }
      var g = setTimeout;
      function v(n3) {
        return Boolean(n3 && void 0 !== n3.length);
      }
      function x() {
      }
      function E(n3) {
        if (!(this instanceof E))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof n3)
          throw new TypeError("not a function");
        this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], I(n3, this);
      }
      function w(n3, e3) {
        for (; 3 === n3._state; )
          n3 = n3._value;
        0 !== n3._state ? (n3._handled = true, E._immediateFn(function() {
          var t2 = 1 === n3._state ? e3.onFulfilled : e3.onRejected;
          if (null !== t2) {
            var a2;
            try {
              a2 = t2(n3._value);
            } catch (n4) {
              return void k(e3.promise, n4);
            }
            C(e3.promise, a2);
          } else
            (1 === n3._state ? C : k)(e3.promise, n3._value);
        })) : n3._deferreds.push(e3);
      }
      function C(n3, e3) {
        try {
          if (e3 === n3)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (e3 && ("object" === b(e3) || "function" == typeof e3)) {
            var t2 = e3.then;
            if (e3 instanceof E)
              return n3._state = 3, n3._value = e3, void B(n3);
            if ("function" == typeof t2)
              return void I((a2 = t2, o2 = e3, function() {
                a2.apply(o2, arguments);
              }), n3);
          }
          n3._state = 1, n3._value = e3, B(n3);
        } catch (e4) {
          k(n3, e4);
        }
        var a2, o2;
      }
      function k(n3, e3) {
        n3._state = 2, n3._value = e3, B(n3);
      }
      function B(n3) {
        2 === n3._state && 0 === n3._deferreds.length && E._immediateFn(function() {
          n3._handled || E._unhandledRejectionFn(n3._value);
        });
        for (var e3 = 0, t2 = n3._deferreds.length; e3 < t2; e3++)
          w(n3, n3._deferreds[e3]);
        n3._deferreds = null;
      }
      function S(n3, e3, t2) {
        this.onFulfilled = "function" == typeof n3 ? n3 : null, this.onRejected = "function" == typeof e3 ? e3 : null, this.promise = t2;
      }
      function I(n3, e3) {
        var t2 = false;
        try {
          n3(function(n4) {
            t2 || (t2 = true, C(e3, n4));
          }, function(n4) {
            t2 || (t2 = true, k(e3, n4));
          });
        } catch (n4) {
          if (t2)
            return;
          t2 = true, k(e3, n4);
        }
      }
      E.prototype.catch = function(n3) {
        return this.then(null, n3);
      }, E.prototype.then = function(n3, e3) {
        var t2 = new this.constructor(x);
        return w(this, new S(n3, e3, t2)), t2;
      }, E.prototype.finally = function(n3) {
        var e3 = this.constructor;
        return this.then(function(t2) {
          return e3.resolve(n3()).then(function() {
            return t2;
          });
        }, function(t2) {
          return e3.resolve(n3()).then(function() {
            return e3.reject(t2);
          });
        });
      }, E.all = function(n3) {
        return new E(function(e3, t2) {
          if (!v(n3))
            return t2(new TypeError("Promise.all accepts an array"));
          var a2 = Array.prototype.slice.call(n3);
          if (0 === a2.length)
            return e3([]);
          var o2 = a2.length;
          function r2(n4, i3) {
            try {
              if (i3 && ("object" === b(i3) || "function" == typeof i3)) {
                var l2 = i3.then;
                if ("function" == typeof l2)
                  return void l2.call(i3, function(e4) {
                    r2(n4, e4);
                  }, t2);
              }
              a2[n4] = i3, 0 == --o2 && e3(a2);
            } catch (n5) {
              t2(n5);
            }
          }
          for (var i2 = 0; i2 < a2.length; i2++)
            r2(i2, a2[i2]);
        });
      }, E.any = function(n3) {
        var e3 = this;
        return new e3(function(t2, a2) {
          if (!n3 || void 0 === n3.length)
            return a2(new TypeError("Promise.any accepts an array"));
          var o2 = Array.prototype.slice.call(n3);
          if (0 === o2.length)
            return a2();
          for (var r2 = [], i2 = 0; i2 < o2.length; i2++)
            try {
              e3.resolve(o2[i2]).then(t2).catch(function(n4) {
                r2.push(n4), r2.length === o2.length && a2(new f(r2, "All promises were rejected"));
              });
            } catch (n4) {
              a2(n4);
            }
        });
      }, E.allSettled = function(n3) {
        return new this(function(e3, t2) {
          if (!n3 || void 0 === n3.length)
            return t2(new TypeError(h(n3) + " " + n3 + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          var a2 = Array.prototype.slice.call(n3);
          if (0 === a2.length)
            return e3([]);
          var o2 = a2.length;
          function r2(n4, t3) {
            if (t3 && ("object" === h(t3) || "function" == typeof t3)) {
              var i3 = t3.then;
              if ("function" == typeof i3)
                return void i3.call(t3, function(e4) {
                  r2(n4, e4);
                }, function(t4) {
                  a2[n4] = { status: "rejected", reason: t4 }, 0 == --o2 && e3(a2);
                });
            }
            a2[n4] = { status: "fulfilled", value: t3 }, 0 == --o2 && e3(a2);
          }
          for (var i2 = 0; i2 < a2.length; i2++)
            r2(i2, a2[i2]);
        });
      }, E.resolve = function(n3) {
        return n3 && "object" === b(n3) && n3.constructor === E ? n3 : new E(function(e3) {
          e3(n3);
        });
      }, E.reject = function(n3) {
        return new E(function(e3, t2) {
          t2(n3);
        });
      }, E.race = function(n3) {
        return new E(function(e3, t2) {
          if (!v(n3))
            return t2(new TypeError("Promise.race accepts an array"));
          for (var a2 = 0, o2 = n3.length; a2 < o2; a2++)
            E.resolve(n3[a2]).then(e3, t2);
        });
      }, E._immediateFn = "function" == typeof setImmediate && function(n3) {
        setImmediate(n3);
      } || function(n3) {
        g(n3, 0);
      }, E._unhandledRejectionFn = function(n3) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n3);
      };
      const L = E;
      var z = /mobile/i.test(window.navigator.userAgent);
      const T = { secondToTime: function(n3) {
        if (0 === (n3 = n3 || 0) || n3 === 1 / 0 || "NaN" === n3.toString())
          return "00:00";
        var e3 = Math.floor(n3 / 3600), t2 = Math.floor((n3 - 3600 * e3) / 60), a2 = Math.floor(n3 - 3600 * e3 - 60 * t2);
        return (e3 > 0 ? [e3, t2, a2] : [t2, a2]).map(function(n4) {
          return n4 < 10 ? "0" + n4 : "" + n4;
        }).join(":");
      }, getElementViewLeft: function(n3) {
        var e3 = n3.offsetLeft, t2 = n3.offsetParent, a2 = document.body.scrollLeft + document.documentElement.scrollLeft;
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
          for (; null !== t2 && t2 !== n3; )
            e3 += t2.offsetLeft, t2 = t2.offsetParent;
        else
          for (; null !== t2; )
            e3 += t2.offsetLeft, t2 = t2.offsetParent;
        return e3 - a2;
      }, getBoundingClientRectViewLeft: function(n3) {
        var e3 = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        if (n3.getBoundingClientRect) {
          if ("number" != typeof this.getBoundingClientRectViewLeft.offset) {
            var t2 = document.createElement("div");
            t2.style.cssText = "position:absolute;top:0;left:0;", document.body.appendChild(t2), this.getBoundingClientRectViewLeft.offset = -t2.getBoundingClientRect().top - e3, document.body.removeChild(t2), t2 = null;
          }
          var a2 = n3.getBoundingClientRect(), o2 = this.getBoundingClientRectViewLeft.offset;
          return a2.left + o2;
        }
        return this.getElementViewLeft(n3);
      }, getScrollPosition: function() {
        return { left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0, top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 };
      }, setScrollPosition: function(n3) {
        var e3 = n3.left, t2 = void 0 === e3 ? 0 : e3, a2 = n3.top, o2 = void 0 === a2 ? 0 : a2;
        this.isFirefox ? (document.documentElement.scrollLeft = t2, document.documentElement.scrollTop = o2) : window.scrollTo(t2, o2);
      }, isMobile: z, isFirefox: /firefox/i.test(window.navigator.userAgent), isChrome: /chrome/i.test(window.navigator.userAgent), isSafari: /safari/i.test(window.navigator.userAgent), storage: { set: function(n3, e3) {
        localStorage.setItem(n3, e3);
      }, get: function(n3) {
        return localStorage.getItem(n3);
      } }, nameMap: { dragStart: z ? "touchstart" : "mousedown", dragMove: z ? "touchmove" : "mousemove", dragEnd: z ? "touchend" : "mouseup" }, color2Number: function(n3) {
        return "#" === n3[0] && (n3 = n3.substr(1)), 3 === n3.length && (n3 = "".concat(n3[0]).concat(n3[0]).concat(n3[1]).concat(n3[1]).concat(n3[2]).concat(n3[2])), parseInt(n3, 16) + 0 & 16777215;
      }, number2Color: function(n3) {
        return "#" + ("00000" + n3.toString(16)).slice(-6);
      }, number2Type: function(n3) {
        switch (n3) {
          case 0:
          default:
            return "right";
          case 1:
            return "top";
          case 2:
            return "bottom";
        }
      } };
      function q(n3, e3) {
        return function() {
          return n3.apply(e3, arguments);
        };
      }
      function O(n3) {
        return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, O(n3);
      }
      var j, D = Object.prototype.toString, P = Object.getPrototypeOf, R = (j = /* @__PURE__ */ Object.create(null), function(n3) {
        var e3 = D.call(n3);
        return j[e3] || (j[e3] = e3.slice(8, -1).toLowerCase());
      }), Y = function(n3) {
        return n3 = n3.toLowerCase(), function(e3) {
          return R(e3) === n3;
        };
      }, M = function(n3) {
        return function(e3) {
          return O(e3) === n3;
        };
      }, F = Array.isArray, W = M("undefined"), U = Y("ArrayBuffer"), N = M("string"), Q = M("function"), H = M("number"), _ = function(n3) {
        return null !== n3 && "object" === O(n3);
      }, K = function(n3) {
        if ("object" !== R(n3))
          return false;
        var e3 = P(n3);
        return !(null !== e3 && e3 !== Object.prototype && null !== Object.getPrototypeOf(e3) || Symbol.toStringTag in n3 || Symbol.iterator in n3);
      }, Z = Y("Date"), V = Y("File"), X = Y("Blob"), J = Y("FileList"), G = Y("URLSearchParams");
      function $(n3, e3) {
        var t2, a2, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = o2.allOwnKeys, i2 = void 0 !== r2 && r2;
        if (null != n3)
          if ("object" !== O(n3) && (n3 = [n3]), F(n3))
            for (t2 = 0, a2 = n3.length; t2 < a2; t2++)
              e3.call(null, n3[t2], t2, n3);
          else {
            var l2, s2 = i2 ? Object.getOwnPropertyNames(n3) : Object.keys(n3), p2 = s2.length;
            for (t2 = 0; t2 < p2; t2++)
              l2 = s2[t2], e3.call(null, n3[l2], l2, n3);
          }
      }
      function nn(n3, e3) {
        e3 = e3.toLowerCase();
        for (var t2, a2 = Object.keys(n3), o2 = a2.length; o2-- > 0; )
          if (e3 === (t2 = a2[o2]).toLowerCase())
            return t2;
        return null;
      }
      var en, tn, an = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : commonjsGlobal$1, on = function(n3) {
        return !W(n3) && n3 !== an;
      }, rn = (en = "undefined" != typeof Uint8Array && P(Uint8Array), function(n3) {
        return en && n3 instanceof en;
      }), ln = Y("HTMLFormElement"), sn = (tn = Object.prototype.hasOwnProperty, function(n3, e3) {
        return tn.call(n3, e3);
      }), pn = Y("RegExp"), dn = function(n3, e3) {
        var t2 = Object.getOwnPropertyDescriptors(n3), a2 = {};
        $(t2, function(t3, o2) {
          false !== e3(t3, o2, n3) && (a2[o2] = t3);
        }), Object.defineProperties(n3, a2);
      };
      const cn = { isArray: F, isArrayBuffer: U, isBuffer: function(n3) {
        return null !== n3 && !W(n3) && null !== n3.constructor && !W(n3.constructor) && Q(n3.constructor.isBuffer) && n3.constructor.isBuffer(n3);
      }, isFormData: function(n3) {
        var e3 = "[object FormData]";
        return n3 && ("function" == typeof FormData && n3 instanceof FormData || D.call(n3) === e3 || Q(n3.toString) && n3.toString() === e3);
      }, isArrayBufferView: function(n3) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(n3) : n3 && n3.buffer && U(n3.buffer);
      }, isString: N, isNumber: H, isBoolean: function(n3) {
        return true === n3 || false === n3;
      }, isObject: _, isPlainObject: K, isUndefined: W, isDate: Z, isFile: V, isBlob: X, isRegExp: pn, isFunction: Q, isStream: function(n3) {
        return _(n3) && Q(n3.pipe);
      }, isURLSearchParams: G, isTypedArray: rn, isFileList: J, forEach: $, merge: function n3() {
        for (var e3 = on(this) && this || {}, t2 = e3.caseless, a2 = {}, o2 = function(e4, o3) {
          var r3 = t2 && nn(a2, o3) || o3;
          K(a2[r3]) && K(e4) ? a2[r3] = n3(a2[r3], e4) : K(e4) ? a2[r3] = n3({}, e4) : F(e4) ? a2[r3] = e4.slice() : a2[r3] = e4;
        }, r2 = 0, i2 = arguments.length; r2 < i2; r2++)
          arguments[r2] && $(arguments[r2], o2);
        return a2;
      }, extend: function(n3, e3, t2) {
        var a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o2 = a2.allOwnKeys;
        return $(e3, function(e4, a3) {
          t2 && Q(e4) ? n3[a3] = q(e4, t2) : n3[a3] = e4;
        }, { allOwnKeys: o2 }), n3;
      }, trim: function(n3) {
        return n3.trim ? n3.trim() : n3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }, stripBOM: function(n3) {
        return 65279 === n3.charCodeAt(0) && (n3 = n3.slice(1)), n3;
      }, inherits: function(n3, e3, t2, a2) {
        n3.prototype = Object.create(e3.prototype, a2), n3.prototype.constructor = n3, Object.defineProperty(n3, "super", { value: e3.prototype }), t2 && Object.assign(n3.prototype, t2);
      }, toFlatObject: function(n3, e3, t2, a2) {
        var o2, r2, i2, l2 = {};
        if (e3 = e3 || {}, null == n3)
          return e3;
        do {
          for (r2 = (o2 = Object.getOwnPropertyNames(n3)).length; r2-- > 0; )
            i2 = o2[r2], a2 && !a2(i2, n3, e3) || l2[i2] || (e3[i2] = n3[i2], l2[i2] = true);
          n3 = false !== t2 && P(n3);
        } while (n3 && (!t2 || t2(n3, e3)) && n3 !== Object.prototype);
        return e3;
      }, kindOf: R, kindOfTest: Y, endsWith: function(n3, e3, t2) {
        n3 = String(n3), (void 0 === t2 || t2 > n3.length) && (t2 = n3.length), t2 -= e3.length;
        var a2 = n3.indexOf(e3, t2);
        return -1 !== a2 && a2 === t2;
      }, toArray: function(n3) {
        if (!n3)
          return null;
        if (F(n3))
          return n3;
        var e3 = n3.length;
        if (!H(e3))
          return null;
        for (var t2 = new Array(e3); e3-- > 0; )
          t2[e3] = n3[e3];
        return t2;
      }, forEachEntry: function(n3, e3) {
        for (var t2, a2 = (n3 && n3[Symbol.iterator]).call(n3); (t2 = a2.next()) && !t2.done; ) {
          var o2 = t2.value;
          e3.call(n3, o2[0], o2[1]);
        }
      }, matchAll: function(n3, e3) {
        for (var t2, a2 = []; null !== (t2 = n3.exec(e3)); )
          a2.push(t2);
        return a2;
      }, isHTMLForm: ln, hasOwnProperty: sn, hasOwnProp: sn, reduceDescriptors: dn, freezeMethods: function(n3) {
        dn(n3, function(e3, t2) {
          if (Q(n3) && -1 !== ["arguments", "caller", "callee"].indexOf(t2))
            return false;
          var a2 = n3[t2];
          Q(a2) && (e3.enumerable = false, "writable" in e3 ? e3.writable = false : e3.set || (e3.set = function() {
            throw Error("Can not rewrite read-only method '" + t2 + "'");
          }));
        });
      }, toObjectSet: function(n3, e3) {
        var t2 = {}, a2 = function(n4) {
          n4.forEach(function(n5) {
            t2[n5] = true;
          });
        };
        return F(n3) ? a2(n3) : a2(String(n3).split(e3)), t2;
      }, toCamelCase: function(n3) {
        return n3.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function(n4, e3, t2) {
          return e3.toUpperCase() + t2;
        });
      }, noop: function() {
      }, toFiniteNumber: function(n3, e3) {
        return n3 = +n3, Number.isFinite(n3) ? n3 : e3;
      }, findKey: nn, global: an, isContextDefined: on, toJSONObject: function(n3) {
        var e3 = new Array(10);
        return function n4(t2, a2) {
          if (_(t2)) {
            if (e3.indexOf(t2) >= 0)
              return;
            if (!("toJSON" in t2)) {
              e3[a2] = t2;
              var o2 = F(t2) ? [] : {};
              return $(t2, function(e4, t3) {
                var r2 = n4(e4, a2 + 1);
                !W(r2) && (o2[t3] = r2);
              }), e3[a2] = void 0, o2;
            }
          }
          return t2;
        }(n3, 0);
      } };
      function An(n3, e3, t2, a2, o2) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n3, this.name = "AxiosError", e3 && (this.code = e3), t2 && (this.config = t2), a2 && (this.request = a2), o2 && (this.response = o2);
      }
      cn.inherits(An, Error, { toJSON: function() {
        return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: cn.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
      } });
      var un = An.prototype, yn = {};
      ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(function(n3) {
        yn[n3] = { value: n3 };
      }), Object.defineProperties(An, yn), Object.defineProperty(un, "isAxiosError", { value: true }), An.from = function(n3, e3, t2, a2, o2, r2) {
        var i2 = Object.create(un);
        return cn.toFlatObject(n3, i2, function(n4) {
          return n4 !== Error.prototype;
        }, function(n4) {
          return "isAxiosError" !== n4;
        }), An.call(i2, n3.message, e3, t2, a2, o2), i2.cause = n3, i2.name = n3.name, r2 && Object.assign(i2, r2), i2;
      };
      const mn = An, hn = t(937);
      function fn(n3) {
        return fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, fn(n3);
      }
      function bn(n3) {
        return cn.isPlainObject(n3) || cn.isArray(n3);
      }
      function gn(n3) {
        return cn.endsWith(n3, "[]") ? n3.slice(0, -2) : n3;
      }
      function vn(n3, e3, t2) {
        return n3 ? n3.concat(e3).map(function(n4, e4) {
          return n4 = gn(n4), !t2 && e4 ? "[" + n4 + "]" : n4;
        }).join(t2 ? "." : "") : e3;
      }
      var xn = cn.toFlatObject(cn, {}, null, function(n3) {
        return /^is[A-Z]/.test(n3);
      });
      const En = function(n3, e3, t2) {
        if (!cn.isObject(n3))
          throw new TypeError("target must be an object");
        e3 = e3 || new (hn || FormData)();
        var a2, o2 = (t2 = cn.toFlatObject(t2, { metaTokens: true, dots: false, indexes: false }, false, function(n4, e4) {
          return !cn.isUndefined(e4[n4]);
        })).metaTokens, r2 = t2.visitor || d2, i2 = t2.dots, l2 = t2.indexes, s2 = (t2.Blob || "undefined" != typeof Blob && Blob) && (a2 = e3) && cn.isFunction(a2.append) && "FormData" === a2[Symbol.toStringTag] && a2[Symbol.iterator];
        if (!cn.isFunction(r2))
          throw new TypeError("visitor must be a function");
        function p2(n4) {
          if (null === n4)
            return "";
          if (cn.isDate(n4))
            return n4.toISOString();
          if (!s2 && cn.isBlob(n4))
            throw new mn("Blob is not supported. Use a Buffer instead.");
          return cn.isArrayBuffer(n4) || cn.isTypedArray(n4) ? s2 && "function" == typeof Blob ? new Blob([n4]) : Buffer.from(n4) : n4;
        }
        function d2(n4, t3, a3) {
          var r3 = n4;
          if (n4 && !a3 && "object" === fn(n4)) {
            if (cn.endsWith(t3, "{}"))
              t3 = o2 ? t3 : t3.slice(0, -2), n4 = JSON.stringify(n4);
            else if (cn.isArray(n4) && function(n5) {
              return cn.isArray(n5) && !n5.some(bn);
            }(n4) || cn.isFileList(n4) || cn.endsWith(t3, "[]") && (r3 = cn.toArray(n4)))
              return t3 = gn(t3), r3.forEach(function(n5, a4) {
                !cn.isUndefined(n5) && null !== n5 && e3.append(true === l2 ? vn([t3], a4, i2) : null === l2 ? t3 : t3 + "[]", p2(n5));
              }), false;
          }
          return !!bn(n4) || (e3.append(vn(a3, t3, i2), p2(n4)), false);
        }
        var c2 = [], A2 = Object.assign(xn, { defaultVisitor: d2, convertValue: p2, isVisitable: bn });
        if (!cn.isObject(n3))
          throw new TypeError("data must be an object");
        return function n4(t3, a3) {
          if (!cn.isUndefined(t3)) {
            if (-1 !== c2.indexOf(t3))
              throw Error("Circular reference detected in " + a3.join("."));
            c2.push(t3), cn.forEach(t3, function(t4, o3) {
              true === (!(cn.isUndefined(t4) || null === t4) && r2.call(e3, t4, cn.isString(o3) ? o3.trim() : o3, a3, A2)) && n4(t4, a3 ? a3.concat(o3) : [o3]);
            }), c2.pop();
          }
        }(n3), e3;
      };
      function wn(n3) {
        var e3 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
        return encodeURIComponent(n3).replace(/[!'()~]|%20|%00/g, function(n4) {
          return e3[n4];
        });
      }
      function Cn(n3, e3) {
        this._pairs = [], n3 && En(n3, this, e3);
      }
      var kn = Cn.prototype;
      kn.append = function(n3, e3) {
        this._pairs.push([n3, e3]);
      }, kn.toString = function(n3) {
        var e3 = n3 ? function(e4) {
          return n3.call(this, e4, wn);
        } : wn;
        return this._pairs.map(function(n4) {
          return e3(n4[0]) + "=" + e3(n4[1]);
        }, "").join("&");
      };
      const Bn = Cn;
      function Sn(n3) {
        return encodeURIComponent(n3).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      function In(n3, e3, t2) {
        if (!e3)
          return n3;
        var a2, o2 = t2 && t2.encode || Sn, r2 = t2 && t2.serialize;
        if (a2 = r2 ? r2(e3, t2) : cn.isURLSearchParams(e3) ? e3.toString() : new Bn(e3, t2).toString(o2)) {
          var i2 = n3.indexOf("#");
          -1 !== i2 && (n3 = n3.slice(0, i2)), n3 += (-1 === n3.indexOf("?") ? "?" : "&") + a2;
        }
        return n3;
      }
      function Ln(n3) {
        return Ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Ln(n3);
      }
      function zn(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Ln(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Ln(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Ln(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Tn = function() {
        function n3() {
          !function(n4, e4) {
            if (!(n4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.handlers = [];
        }
        var e3, t2;
        return e3 = n3, t2 = [{ key: "use", value: function(n4, e4, t3) {
          return this.handlers.push({ fulfilled: n4, rejected: e4, synchronous: !!t3 && t3.synchronous, runWhen: t3 ? t3.runWhen : null }), this.handlers.length - 1;
        } }, { key: "eject", value: function(n4) {
          this.handlers[n4] && (this.handlers[n4] = null);
        } }, { key: "clear", value: function() {
          this.handlers && (this.handlers = []);
        } }, { key: "forEach", value: function(n4) {
          cn.forEach(this.handlers, function(e4) {
            null !== e4 && n4(e4);
          });
        } }], t2 && zn(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const qn = Tn, On = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, jn = "undefined" != typeof URLSearchParams ? URLSearchParams : Bn, Dn = FormData;
      var Pn, Rn = ("undefined" == typeof navigator || "ReactNative" !== (Pn = navigator.product) && "NativeScript" !== Pn && "NS" !== Pn) && "undefined" != typeof window && "undefined" != typeof document, Yn = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
      const Mn = { isBrowser: true, classes: { URLSearchParams: jn, FormData: Dn, Blob }, isStandardBrowserEnv: Rn, isStandardBrowserWebWorkerEnv: Yn, protocols: ["http", "https", "file", "blob", "url", "data"] }, Fn = function(n3) {
        function e3(n4, t3, a2, o2) {
          var r2 = n4[o2++], i2 = Number.isFinite(+r2), l2 = o2 >= n4.length;
          return r2 = !r2 && cn.isArray(a2) ? a2.length : r2, l2 ? (cn.hasOwnProp(a2, r2) ? a2[r2] = [a2[r2], t3] : a2[r2] = t3, !i2) : (a2[r2] && cn.isObject(a2[r2]) || (a2[r2] = []), e3(n4, t3, a2[r2], o2) && cn.isArray(a2[r2]) && (a2[r2] = function(n5) {
            var e4, t4, a3 = {}, o3 = Object.keys(n5), r3 = o3.length;
            for (e4 = 0; e4 < r3; e4++)
              a3[t4 = o3[e4]] = n5[t4];
            return a3;
          }(a2[r2])), !i2);
        }
        if (cn.isFormData(n3) && cn.isFunction(n3.entries)) {
          var t2 = {};
          return cn.forEachEntry(n3, function(n4, a2) {
            e3(function(n5) {
              return cn.matchAll(/\w+|\[(\w*)]/g, n5).map(function(n6) {
                return "[]" === n6[0] ? "" : n6[1] || n6[0];
              });
            }(n4), a2, t2, 0);
          }), t2;
        }
        return null;
      };
      var Wn = { "Content-Type": void 0 }, Un = { transitional: On, adapter: ["xhr", "http"], transformRequest: [function(n3, e3) {
        var t2, a2 = e3.getContentType() || "", o2 = a2.indexOf("application/json") > -1, r2 = cn.isObject(n3);
        if (r2 && cn.isHTMLForm(n3) && (n3 = new FormData(n3)), cn.isFormData(n3))
          return o2 && o2 ? JSON.stringify(Fn(n3)) : n3;
        if (cn.isArrayBuffer(n3) || cn.isBuffer(n3) || cn.isStream(n3) || cn.isFile(n3) || cn.isBlob(n3))
          return n3;
        if (cn.isArrayBufferView(n3))
          return n3.buffer;
        if (cn.isURLSearchParams(n3))
          return e3.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), n3.toString();
        if (r2) {
          if (a2.indexOf("application/x-www-form-urlencoded") > -1)
            return function(n4, e4) {
              return En(n4, new Mn.classes.URLSearchParams(), Object.assign({ visitor: function(n5, e5, t3, a3) {
                return Mn.isNode && cn.isBuffer(n5) ? (this.append(e5, n5.toString("base64")), false) : a3.defaultVisitor.apply(this, arguments);
              } }, e4));
            }(n3, this.formSerializer).toString();
          if ((t2 = cn.isFileList(n3)) || a2.indexOf("multipart/form-data") > -1) {
            var i2 = this.env && this.env.FormData;
            return En(t2 ? { "files[]": n3 } : n3, i2 && new i2(), this.formSerializer);
          }
        }
        return r2 || o2 ? (e3.setContentType("application/json", false), function(n4, e4, t3) {
          if (cn.isString(n4))
            try {
              return (0, JSON.parse)(n4), cn.trim(n4);
            } catch (n5) {
              if ("SyntaxError" !== n5.name)
                throw n5;
            }
          return (0, JSON.stringify)(n4);
        }(n3)) : n3;
      }], transformResponse: [function(n3) {
        var e3 = this.transitional || Un.transitional, t2 = e3 && e3.forcedJSONParsing, a2 = "json" === this.responseType;
        if (n3 && cn.isString(n3) && (t2 && !this.responseType || a2)) {
          var o2 = !(e3 && e3.silentJSONParsing) && a2;
          try {
            return JSON.parse(n3);
          } catch (n4) {
            if (o2) {
              if ("SyntaxError" === n4.name)
                throw mn.from(n4, mn.ERR_BAD_RESPONSE, this, null, this.response);
              throw n4;
            }
          }
        }
        return n3;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: Mn.classes.FormData, Blob: Mn.classes.Blob }, validateStatus: function(n3) {
        return n3 >= 200 && n3 < 300;
      }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
      cn.forEach(["delete", "get", "head"], function(n3) {
        Un.headers[n3] = {};
      }), cn.forEach(["post", "put", "patch"], function(n3) {
        Un.headers[n3] = cn.merge(Wn);
      });
      const Nn = Un;
      var Qn = cn.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
      function Hn(n3) {
        return Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Hn(n3);
      }
      function _n(n3, e3) {
        (null == e3 || e3 > n3.length) && (e3 = n3.length);
        for (var t2 = 0, a2 = new Array(e3); t2 < e3; t2++)
          a2[t2] = n3[t2];
        return a2;
      }
      function Kn(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Hn(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Hn(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Hn(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Zn = Symbol("internals");
      function Vn(n3) {
        return n3 && String(n3).trim().toLowerCase();
      }
      function Xn(n3) {
        return false === n3 || null == n3 ? n3 : cn.isArray(n3) ? n3.map(Xn) : String(n3);
      }
      function Jn(n3, e3, t2, a2) {
        return cn.isFunction(a2) ? a2.call(this, e3, t2) : cn.isString(e3) ? cn.isString(a2) ? -1 !== e3.indexOf(a2) : cn.isRegExp(a2) ? a2.test(e3) : void 0 : void 0;
      }
      var Gn = function(n3, e3) {
        function t2(n4) {
          !function(n5, e4) {
            if (!(n5 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), n4 && this.set(n4);
        }
        var a2, o2, r2;
        return a2 = t2, o2 = [{ key: "set", value: function(n4, e4, t3) {
          var a3 = this;
          function o3(n5, e5, t4) {
            var o4 = Vn(e5);
            if (!o4)
              throw new Error("header name must be a non-empty string");
            var r4 = cn.findKey(a3, o4);
            (!r4 || void 0 === a3[r4] || true === t4 || void 0 === t4 && false !== a3[r4]) && (a3[r4 || e5] = Xn(n5));
          }
          var r3, i2, l2, s2, p2, d2 = function(n5, e5) {
            return cn.forEach(n5, function(n6, t4) {
              return o3(n6, t4, e5);
            });
          };
          return cn.isPlainObject(n4) || n4 instanceof this.constructor ? d2(n4, e4) : cn.isString(n4) && (n4 = n4.trim()) && !/^[-_a-zA-Z]+$/.test(n4.trim()) ? d2((p2 = {}, (r3 = n4) && r3.split("\n").forEach(function(n5) {
            s2 = n5.indexOf(":"), i2 = n5.substring(0, s2).trim().toLowerCase(), l2 = n5.substring(s2 + 1).trim(), !i2 || p2[i2] && Qn[i2] || ("set-cookie" === i2 ? p2[i2] ? p2[i2].push(l2) : p2[i2] = [l2] : p2[i2] = p2[i2] ? p2[i2] + ", " + l2 : l2);
          }), p2), e4) : null != n4 && o3(e4, n4, t3), this;
        } }, { key: "get", value: function(n4, e4) {
          if (n4 = Vn(n4)) {
            var t3 = cn.findKey(this, n4);
            if (t3) {
              var a3 = this[t3];
              if (!e4)
                return a3;
              if (true === e4)
                return function(n5) {
                  for (var e5, t4 = /* @__PURE__ */ Object.create(null), a4 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; e5 = a4.exec(n5); )
                    t4[e5[1]] = e5[2];
                  return t4;
                }(a3);
              if (cn.isFunction(e4))
                return e4.call(this, a3, t3);
              if (cn.isRegExp(e4))
                return e4.exec(a3);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        } }, { key: "has", value: function(n4, e4) {
          if (n4 = Vn(n4)) {
            var t3 = cn.findKey(this, n4);
            return !(!t3 || e4 && !Jn(0, this[t3], t3, e4));
          }
          return false;
        } }, { key: "delete", value: function(n4, e4) {
          var t3 = this, a3 = false;
          function o3(n5) {
            if (n5 = Vn(n5)) {
              var o4 = cn.findKey(t3, n5);
              !o4 || e4 && !Jn(0, t3[o4], o4, e4) || (delete t3[o4], a3 = true);
            }
          }
          return cn.isArray(n4) ? n4.forEach(o3) : o3(n4), a3;
        } }, { key: "clear", value: function() {
          return Object.keys(this).forEach(this.delete.bind(this));
        } }, { key: "normalize", value: function(n4) {
          var e4 = this, t3 = {};
          return cn.forEach(this, function(a3, o3) {
            var r3 = cn.findKey(t3, o3);
            if (r3)
              return e4[r3] = Xn(a3), void delete e4[o3];
            var i2 = n4 ? function(n5) {
              return n5.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function(n6, e5, t4) {
                return e5.toUpperCase() + t4;
              });
            }(o3) : String(o3).trim();
            i2 !== o3 && delete e4[o3], e4[i2] = Xn(a3), t3[i2] = true;
          }), this;
        } }, { key: "concat", value: function() {
          for (var n4, e4 = arguments.length, t3 = new Array(e4), a3 = 0; a3 < e4; a3++)
            t3[a3] = arguments[a3];
          return (n4 = this.constructor).concat.apply(n4, [this].concat(t3));
        } }, { key: "toJSON", value: function(n4) {
          var e4 = /* @__PURE__ */ Object.create(null);
          return cn.forEach(this, function(t3, a3) {
            null != t3 && false !== t3 && (e4[a3] = n4 && cn.isArray(t3) ? t3.join(", ") : t3);
          }), e4;
        } }, { key: Symbol.iterator, value: function() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        } }, { key: "toString", value: function() {
          return Object.entries(this.toJSON()).map(function(n4) {
            var e4, t3, a3 = (t3 = 2, function(n5) {
              if (Array.isArray(n5))
                return n5;
            }(e4 = n4) || function(n5, e5) {
              var t4 = null == n5 ? null : "undefined" != typeof Symbol && n5[Symbol.iterator] || n5["@@iterator"];
              if (null != t4) {
                var a4, o3, r3, i2, l2 = [], s2 = true, p2 = false;
                try {
                  if (r3 = (t4 = t4.call(n5)).next, 0 === e5) {
                    if (Object(t4) !== t4)
                      return;
                    s2 = false;
                  } else
                    for (; !(s2 = (a4 = r3.call(t4)).done) && (l2.push(a4.value), l2.length !== e5); s2 = true)
                      ;
                } catch (n6) {
                  p2 = true, o3 = n6;
                } finally {
                  try {
                    if (!s2 && null != t4.return && (i2 = t4.return(), Object(i2) !== i2))
                      return;
                  } finally {
                    if (p2)
                      throw o3;
                  }
                }
                return l2;
              }
            }(e4, t3) || function(n5, e5) {
              if (n5) {
                if ("string" == typeof n5)
                  return _n(n5, e5);
                var t4 = Object.prototype.toString.call(n5).slice(8, -1);
                return "Object" === t4 && n5.constructor && (t4 = n5.constructor.name), "Map" === t4 || "Set" === t4 ? Array.from(n5) : "Arguments" === t4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t4) ? _n(n5, e5) : void 0;
              }
            }(e4, t3) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }());
            return a3[0] + ": " + a3[1];
          }).join("\n");
        } }, { key: Symbol.toStringTag, get: function() {
          return "AxiosHeaders";
        } }], r2 = [{ key: "from", value: function(n4) {
          return n4 instanceof this ? n4 : new this(n4);
        } }, { key: "concat", value: function(n4) {
          for (var e4 = new this(n4), t3 = arguments.length, a3 = new Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            a3[o3 - 1] = arguments[o3];
          return a3.forEach(function(n5) {
            return e4.set(n5);
          }), e4;
        } }, { key: "accessor", value: function(n4) {
          var e4 = (this[Zn] = this[Zn] = { accessors: {} }).accessors, t3 = this.prototype;
          function a3(n5) {
            var a4 = Vn(n5);
            e4[a4] || (function(n6, e5) {
              var t4 = cn.toCamelCase(" " + e5);
              ["get", "set", "has"].forEach(function(a5) {
                Object.defineProperty(n6, a5 + t4, { value: function(n7, t5, o3) {
                  return this[a5].call(this, e5, n7, t5, o3);
                }, configurable: true });
              });
            }(t3, n5), e4[a4] = true);
          }
          return cn.isArray(n4) ? n4.forEach(a3) : a3(n4), this;
        } }], o2 && Kn(a2.prototype, o2), r2 && Kn(a2, r2), Object.defineProperty(a2, "prototype", { writable: false }), t2;
      }();
      Gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]), cn.freezeMethods(Gn.prototype), cn.freezeMethods(Gn);
      const $n = Gn;
      function ne(n3, e3) {
        var t2 = this || Nn, a2 = e3 || t2, o2 = $n.from(a2.headers), r2 = a2.data;
        return cn.forEach(n3, function(n4) {
          r2 = n4.call(t2, r2, o2.normalize(), e3 ? e3.status : void 0);
        }), o2.normalize(), r2;
      }
      function ee(n3) {
        return !(!n3 || !n3.__CANCEL__);
      }
      function te(n3, e3, t2) {
        mn.call(this, null == n3 ? "canceled" : n3, mn.ERR_CANCELED, e3, t2), this.name = "CanceledError";
      }
      cn.inherits(te, mn, { __CANCEL__: true });
      const ae = te, oe = Mn.isStandardBrowserEnv ? { write: function(n3, e3, t2, a2, o2, r2) {
        var i2 = [];
        i2.push(n3 + "=" + encodeURIComponent(e3)), cn.isNumber(t2) && i2.push("expires=" + new Date(t2).toGMTString()), cn.isString(a2) && i2.push("path=" + a2), cn.isString(o2) && i2.push("domain=" + o2), true === r2 && i2.push("secure"), document.cookie = i2.join("; ");
      }, read: function(n3) {
        var e3 = document.cookie.match(new RegExp("(^|;\\s*)(" + n3 + ")=([^;]*)"));
        return e3 ? decodeURIComponent(e3[3]) : null;
      }, remove: function(n3) {
        this.write(n3, "", Date.now() - 864e5);
      } } : { write: function() {
      }, read: function() {
        return null;
      }, remove: function() {
      } };
      function re(n3, e3) {
        return n3 && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e3) ? function(n4, e4) {
          return e4 ? n4.replace(/\/+$/, "") + "/" + e4.replace(/^\/+/, "") : n4;
        }(n3, e3) : e3;
      }
      const ie = Mn.isStandardBrowserEnv ? function() {
        var n3, e3 = /(msie|trident)/i.test(navigator.userAgent), t2 = document.createElement("a");
        function a2(n4) {
          var a3 = n4;
          return e3 && (t2.setAttribute("href", a3), a3 = t2.href), t2.setAttribute("href", a3), { href: t2.href, protocol: t2.protocol ? t2.protocol.replace(/:$/, "") : "", host: t2.host, search: t2.search ? t2.search.replace(/^\?/, "") : "", hash: t2.hash ? t2.hash.replace(/^#/, "") : "", hostname: t2.hostname, port: t2.port, pathname: "/" === t2.pathname.charAt(0) ? t2.pathname : "/" + t2.pathname };
        }
        return n3 = a2(window.location.href), function(e4) {
          var t3 = cn.isString(e4) ? a2(e4) : e4;
          return t3.protocol === n3.protocol && t3.host === n3.host;
        };
      }() : function() {
        return true;
      };
      function le(n3, e3) {
        var t2 = 0, a2 = function(n4, e4) {
          n4 = n4 || 10;
          var t3, a3 = new Array(n4), o2 = new Array(n4), r2 = 0, i2 = 0;
          return e4 = void 0 !== e4 ? e4 : 1e3, function(l2) {
            var s2 = Date.now(), p2 = o2[i2];
            t3 || (t3 = s2), a3[r2] = l2, o2[r2] = s2;
            for (var d2 = i2, c2 = 0; d2 !== r2; )
              c2 += a3[d2++], d2 %= n4;
            if ((r2 = (r2 + 1) % n4) === i2 && (i2 = (i2 + 1) % n4), !(s2 - t3 < e4)) {
              var A2 = p2 && s2 - p2;
              return A2 ? Math.round(1e3 * c2 / A2) : void 0;
            }
          };
        }(50, 250);
        return function(o2) {
          var r2 = o2.loaded, i2 = o2.lengthComputable ? o2.total : void 0, l2 = r2 - t2, s2 = a2(l2);
          t2 = r2;
          var p2 = { loaded: r2, total: i2, progress: i2 ? r2 / i2 : void 0, bytes: l2, rate: s2 || void 0, estimated: s2 && i2 && r2 <= i2 ? (i2 - r2) / s2 : void 0, event: o2 };
          p2[e3 ? "download" : "upload"] = true, n3(p2);
        };
      }
      const se = "undefined" != typeof XMLHttpRequest && function(n3) {
        return new Promise(function(e3, t2) {
          var a2, o2 = n3.data, r2 = $n.from(n3.headers).normalize(), i2 = n3.responseType;
          function l2() {
            n3.cancelToken && n3.cancelToken.unsubscribe(a2), n3.signal && n3.signal.removeEventListener("abort", a2);
          }
          cn.isFormData(o2) && (Mn.isStandardBrowserEnv || Mn.isStandardBrowserWebWorkerEnv) && r2.setContentType(false);
          var s2 = new XMLHttpRequest();
          if (n3.auth) {
            var p2 = n3.auth.username || "", d2 = n3.auth.password ? unescape(encodeURIComponent(n3.auth.password)) : "";
            r2.set("Authorization", "Basic " + btoa(p2 + ":" + d2));
          }
          var c2 = re(n3.baseURL, n3.url);
          function A2() {
            if (s2) {
              var a3 = $n.from("getAllResponseHeaders" in s2 && s2.getAllResponseHeaders());
              !function(n4, e4, t3) {
                var a4 = t3.config.validateStatus;
                t3.status && a4 && !a4(t3.status) ? e4(new mn("Request failed with status code " + t3.status, [mn.ERR_BAD_REQUEST, mn.ERR_BAD_RESPONSE][Math.floor(t3.status / 100) - 4], t3.config, t3.request, t3)) : n4(t3);
              }(function(n4) {
                e3(n4), l2();
              }, function(n4) {
                t2(n4), l2();
              }, { data: i2 && "text" !== i2 && "json" !== i2 ? s2.response : s2.responseText, status: s2.status, statusText: s2.statusText, headers: a3, config: n3, request: s2 }), s2 = null;
            }
          }
          if (s2.open(n3.method.toUpperCase(), In(c2, n3.params, n3.paramsSerializer), true), s2.timeout = n3.timeout, "onloadend" in s2 ? s2.onloadend = A2 : s2.onreadystatechange = function() {
            s2 && 4 === s2.readyState && (0 !== s2.status || s2.responseURL && 0 === s2.responseURL.indexOf("file:")) && setTimeout(A2);
          }, s2.onabort = function() {
            s2 && (t2(new mn("Request aborted", mn.ECONNABORTED, n3, s2)), s2 = null);
          }, s2.onerror = function() {
            t2(new mn("Network Error", mn.ERR_NETWORK, n3, s2)), s2 = null;
          }, s2.ontimeout = function() {
            var e4 = n3.timeout ? "timeout of " + n3.timeout + "ms exceeded" : "timeout exceeded", a3 = n3.transitional || On;
            n3.timeoutErrorMessage && (e4 = n3.timeoutErrorMessage), t2(new mn(e4, a3.clarifyTimeoutError ? mn.ETIMEDOUT : mn.ECONNABORTED, n3, s2)), s2 = null;
          }, Mn.isStandardBrowserEnv) {
            var u2 = (n3.withCredentials || ie(c2)) && n3.xsrfCookieName && oe.read(n3.xsrfCookieName);
            u2 && r2.set(n3.xsrfHeaderName, u2);
          }
          void 0 === o2 && r2.setContentType(null), "setRequestHeader" in s2 && cn.forEach(r2.toJSON(), function(n4, e4) {
            s2.setRequestHeader(e4, n4);
          }), cn.isUndefined(n3.withCredentials) || (s2.withCredentials = !!n3.withCredentials), i2 && "json" !== i2 && (s2.responseType = n3.responseType), "function" == typeof n3.onDownloadProgress && s2.addEventListener("progress", le(n3.onDownloadProgress, true)), "function" == typeof n3.onUploadProgress && s2.upload && s2.upload.addEventListener("progress", le(n3.onUploadProgress)), (n3.cancelToken || n3.signal) && (a2 = function(e4) {
            s2 && (t2(!e4 || e4.type ? new ae(null, n3, s2) : e4), s2.abort(), s2 = null);
          }, n3.cancelToken && n3.cancelToken.subscribe(a2), n3.signal && (n3.signal.aborted ? a2() : n3.signal.addEventListener("abort", a2)));
          var y2, m2 = (y2 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(c2)) && y2[1] || "";
          m2 && -1 === Mn.protocols.indexOf(m2) ? t2(new mn("Unsupported protocol " + m2 + ":", mn.ERR_BAD_REQUEST, n3)) : s2.send(o2 || null);
        });
      };
      var pe = { http: null, xhr: se };
      cn.forEach(pe, function(n3, e3) {
        if (n3) {
          try {
            Object.defineProperty(n3, "name", { value: e3 });
          } catch (n4) {
          }
          Object.defineProperty(n3, "adapterName", { value: e3 });
        }
      });
      function de(n3) {
        if (n3.cancelToken && n3.cancelToken.throwIfRequested(), n3.signal && n3.signal.aborted)
          throw new ae(null, n3);
      }
      function ce(n3) {
        return de(n3), n3.headers = $n.from(n3.headers), n3.data = ne.call(n3, n3.transformRequest), -1 !== ["post", "put", "patch"].indexOf(n3.method) && n3.headers.setContentType("application/x-www-form-urlencoded", false), function(n4) {
          for (var e3, t2, a2 = (n4 = cn.isArray(n4) ? n4 : [n4]).length, o2 = 0; o2 < a2 && (e3 = n4[o2], !(t2 = cn.isString(e3) ? pe[e3.toLowerCase()] : e3)); o2++)
            ;
          if (!t2) {
            if (false === t2)
              throw new mn("Adapter ".concat(e3, " is not supported by the environment"), "ERR_NOT_SUPPORT");
            throw new Error(cn.hasOwnProp(pe, e3) ? "Adapter '".concat(e3, "' is not available in the build") : "Unknown adapter '".concat(e3, "'"));
          }
          if (!cn.isFunction(t2))
            throw new TypeError("adapter is not a function");
          return t2;
        }(n3.adapter || Nn.adapter)(n3).then(function(e3) {
          return de(n3), e3.data = ne.call(n3, n3.transformResponse, e3), e3.headers = $n.from(e3.headers), e3;
        }, function(e3) {
          return ee(e3) || (de(n3), e3 && e3.response && (e3.response.data = ne.call(n3, n3.transformResponse, e3.response), e3.response.headers = $n.from(e3.response.headers))), Promise.reject(e3);
        });
      }
      var Ae = function(n3) {
        return n3 instanceof $n ? n3.toJSON() : n3;
      };
      function ue(n3, e3) {
        e3 = e3 || {};
        var t2 = {};
        function a2(n4, e4, t3) {
          return cn.isPlainObject(n4) && cn.isPlainObject(e4) ? cn.merge.call({ caseless: t3 }, n4, e4) : cn.isPlainObject(e4) ? cn.merge({}, e4) : cn.isArray(e4) ? e4.slice() : e4;
        }
        function o2(n4, e4, t3) {
          return cn.isUndefined(e4) ? cn.isUndefined(n4) ? void 0 : a2(void 0, n4, t3) : a2(n4, e4, t3);
        }
        function r2(n4, e4) {
          if (!cn.isUndefined(e4))
            return a2(void 0, e4);
        }
        function i2(n4, e4) {
          return cn.isUndefined(e4) ? cn.isUndefined(n4) ? void 0 : a2(void 0, n4) : a2(void 0, e4);
        }
        function l2(t3, o3, r3) {
          return r3 in e3 ? a2(t3, o3) : r3 in n3 ? a2(void 0, t3) : void 0;
        }
        var s2 = { url: r2, method: r2, data: r2, baseURL: i2, transformRequest: i2, transformResponse: i2, paramsSerializer: i2, timeout: i2, timeoutMessage: i2, withCredentials: i2, adapter: i2, responseType: i2, xsrfCookieName: i2, xsrfHeaderName: i2, onUploadProgress: i2, onDownloadProgress: i2, decompress: i2, maxContentLength: i2, maxBodyLength: i2, beforeRedirect: i2, transport: i2, httpAgent: i2, httpsAgent: i2, cancelToken: i2, socketPath: i2, responseEncoding: i2, validateStatus: l2, headers: function(n4, e4) {
          return o2(Ae(n4), Ae(e4), true);
        } };
        return cn.forEach(Object.keys(n3).concat(Object.keys(e3)), function(a3) {
          var r3 = s2[a3] || o2, i3 = r3(n3[a3], e3[a3], a3);
          cn.isUndefined(i3) && r3 !== l2 || (t2[a3] = i3);
        }), t2;
      }
      function ye(n3) {
        return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, ye(n3);
      }
      var me = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n3, e3) {
        me[n3] = function(t2) {
          return ye(t2) === n3 || "a" + (e3 < 1 ? "n " : " ") + n3;
        };
      });
      var he = {};
      me.transitional = function(n3, e3, t2) {
        function a2(n4, e4) {
          return "[Axios v1.2.3] Transitional option '" + n4 + "'" + e4 + (t2 ? ". " + t2 : "");
        }
        return function(t3, o2, r2) {
          if (false === n3)
            throw new mn(a2(o2, " has been removed" + (e3 ? " in " + e3 : "")), mn.ERR_DEPRECATED);
          return e3 && !he[o2] && (he[o2] = true, console.warn(a2(o2, " has been deprecated since v" + e3 + " and will be removed in the near future"))), !n3 || n3(t3, o2, r2);
        };
      };
      const fe = { assertOptions: function(n3, e3, t2) {
        if ("object" !== ye(n3))
          throw new mn("options must be an object", mn.ERR_BAD_OPTION_VALUE);
        for (var a2 = Object.keys(n3), o2 = a2.length; o2-- > 0; ) {
          var r2 = a2[o2], i2 = e3[r2];
          if (i2) {
            var l2 = n3[r2], s2 = void 0 === l2 || i2(l2, r2, n3);
            if (true !== s2)
              throw new mn("option " + r2 + " must be " + s2, mn.ERR_BAD_OPTION_VALUE);
          } else if (true !== t2)
            throw new mn("Unknown option " + r2, mn.ERR_BAD_OPTION);
        }
      }, validators: me };
      function be(n3) {
        return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, be(n3);
      }
      function ge(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== be(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== be(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === be(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var ve = fe.validators, xe = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.defaults = e4, this.interceptors = { request: new qn(), response: new qn() };
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "request", value: function(n4, e4) {
          "string" == typeof n4 ? (e4 = e4 || {}).url = n4 : e4 = n4 || {};
          var t3, a2 = e4 = ue(this.defaults, e4), o2 = a2.transitional, r2 = a2.paramsSerializer, i2 = a2.headers;
          void 0 !== o2 && fe.assertOptions(o2, { silentJSONParsing: ve.transitional(ve.boolean), forcedJSONParsing: ve.transitional(ve.boolean), clarifyTimeoutError: ve.transitional(ve.boolean) }, false), void 0 !== r2 && fe.assertOptions(r2, { encode: ve.function, serialize: ve.function }, true), e4.method = (e4.method || this.defaults.method || "get").toLowerCase(), (t3 = i2 && cn.merge(i2.common, i2[e4.method])) && cn.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(n5) {
            delete i2[n5];
          }), e4.headers = $n.concat(t3, i2);
          var l2 = [], s2 = true;
          this.interceptors.request.forEach(function(n5) {
            "function" == typeof n5.runWhen && false === n5.runWhen(e4) || (s2 = s2 && n5.synchronous, l2.unshift(n5.fulfilled, n5.rejected));
          });
          var p2, d2 = [];
          this.interceptors.response.forEach(function(n5) {
            d2.push(n5.fulfilled, n5.rejected);
          });
          var c2, A2 = 0;
          if (!s2) {
            var u2 = [ce.bind(this), void 0];
            for (u2.unshift.apply(u2, l2), u2.push.apply(u2, d2), c2 = u2.length, p2 = Promise.resolve(e4); A2 < c2; )
              p2 = p2.then(u2[A2++], u2[A2++]);
            return p2;
          }
          c2 = l2.length;
          var y2 = e4;
          for (A2 = 0; A2 < c2; ) {
            var m2 = l2[A2++], h2 = l2[A2++];
            try {
              y2 = m2(y2);
            } catch (n5) {
              h2.call(this, n5);
              break;
            }
          }
          try {
            p2 = ce.call(this, y2);
          } catch (n5) {
            return Promise.reject(n5);
          }
          for (A2 = 0, c2 = d2.length; A2 < c2; )
            p2 = p2.then(d2[A2++], d2[A2++]);
          return p2;
        } }, { key: "getUri", value: function(n4) {
          return In(re((n4 = ue(this.defaults, n4)).baseURL, n4.url), n4.params, n4.paramsSerializer);
        } }]) && ge(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      cn.forEach(["delete", "get", "head", "options"], function(n3) {
        xe.prototype[n3] = function(e3, t2) {
          return this.request(ue(t2 || {}, { method: n3, url: e3, data: (t2 || {}).data }));
        };
      }), cn.forEach(["post", "put", "patch"], function(n3) {
        function e3(e4) {
          return function(t2, a2, o2) {
            return this.request(ue(o2 || {}, { method: n3, headers: e4 ? { "Content-Type": "multipart/form-data" } : {}, url: t2, data: a2 }));
          };
        }
        xe.prototype[n3] = e3(), xe.prototype[n3 + "Form"] = e3(true);
      });
      const Ee = xe;
      function we(n3) {
        return we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, we(n3);
      }
      function Ce(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== we(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== we(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === we(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var ke = function() {
        function n3(e4) {
          if (function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), "function" != typeof e4)
            throw new TypeError("executor must be a function.");
          var t3;
          this.promise = new Promise(function(n4) {
            t3 = n4;
          });
          var a3 = this;
          this.promise.then(function(n4) {
            if (a3._listeners) {
              for (var e5 = a3._listeners.length; e5-- > 0; )
                a3._listeners[e5](n4);
              a3._listeners = null;
            }
          }), this.promise.then = function(n4) {
            var e5, t4 = new Promise(function(n5) {
              a3.subscribe(n5), e5 = n5;
            }).then(n4);
            return t4.cancel = function() {
              a3.unsubscribe(e5);
            }, t4;
          }, e4(function(n4, e5, o2) {
            a3.reason || (a3.reason = new ae(n4, e5, o2), t3(a3.reason));
          });
        }
        var e3, t2, a2;
        return e3 = n3, t2 = [{ key: "throwIfRequested", value: function() {
          if (this.reason)
            throw this.reason;
        } }, { key: "subscribe", value: function(n4) {
          this.reason ? n4(this.reason) : this._listeners ? this._listeners.push(n4) : this._listeners = [n4];
        } }, { key: "unsubscribe", value: function(n4) {
          if (this._listeners) {
            var e4 = this._listeners.indexOf(n4);
            -1 !== e4 && this._listeners.splice(e4, 1);
          }
        } }], a2 = [{ key: "source", value: function() {
          var e4;
          return { token: new n3(function(n4) {
            e4 = n4;
          }), cancel: e4 };
        } }], t2 && Ce(e3.prototype, t2), a2 && Ce(e3, a2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Be = ke;
      function Se(n3, e3) {
        (null == e3 || e3 > n3.length) && (e3 = n3.length);
        for (var t2 = 0, a2 = new Array(e3); t2 < e3; t2++)
          a2[t2] = n3[t2];
        return a2;
      }
      var Ie = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
      Object.entries(Ie).forEach(function(n3) {
        var e3, t2, a2 = (t2 = 2, function(n4) {
          if (Array.isArray(n4))
            return n4;
        }(e3 = n3) || function(n4, e4) {
          var t3 = null == n4 ? null : "undefined" != typeof Symbol && n4[Symbol.iterator] || n4["@@iterator"];
          if (null != t3) {
            var a3, o3, r3, i2, l2 = [], s2 = true, p2 = false;
            try {
              if (r3 = (t3 = t3.call(n4)).next, 0 === e4) {
                if (Object(t3) !== t3)
                  return;
                s2 = false;
              } else
                for (; !(s2 = (a3 = r3.call(t3)).done) && (l2.push(a3.value), l2.length !== e4); s2 = true)
                  ;
            } catch (n5) {
              p2 = true, o3 = n5;
            } finally {
              try {
                if (!s2 && null != t3.return && (i2 = t3.return(), Object(i2) !== i2))
                  return;
              } finally {
                if (p2)
                  throw o3;
              }
            }
            return l2;
          }
        }(e3, t2) || function(n4, e4) {
          if (n4) {
            if ("string" == typeof n4)
              return Se(n4, e4);
            var t3 = Object.prototype.toString.call(n4).slice(8, -1);
            return "Object" === t3 && n4.constructor && (t3 = n4.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(n4) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? Se(n4, e4) : void 0;
          }
        }(e3, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()), o2 = a2[0], r2 = a2[1];
        Ie[r2] = o2;
      });
      const Le = Ie;
      var ze = function n3(e3) {
        var t2 = new Ee(e3), a2 = q(Ee.prototype.request, t2);
        return cn.extend(a2, Ee.prototype, t2, { allOwnKeys: true }), cn.extend(a2, t2, null, { allOwnKeys: true }), a2.create = function(t3) {
          return n3(ue(e3, t3));
        }, a2;
      }(Nn);
      ze.Axios = Ee, ze.CanceledError = ae, ze.CancelToken = Be, ze.isCancel = ee, ze.VERSION = "1.2.3", ze.toFormData = En, ze.AxiosError = mn, ze.Cancel = ze.CanceledError, ze.all = function(n3) {
        return Promise.all(n3);
      }, ze.spread = function(n3) {
        return function(e3) {
          return n3.apply(null, e3);
        };
      }, ze.isAxiosError = function(n3) {
        return cn.isObject(n3) && true === n3.isAxiosError;
      }, ze.mergeConfig = ue, ze.AxiosHeaders = $n, ze.formToJSON = function(n3) {
        return Fn(cn.isHTMLForm(n3) ? new FormData(n3) : n3);
      }, ze.HttpStatusCode = Le, ze.default = ze;
      const Te = ze, qe = { send: function(n3) {
        Te.post(n3.url, n3.data).then(function(e3) {
          var t2 = e3.data;
          t2 && 0 === t2.code ? n3.success && n3.success(t2) : n3.error && n3.error(t2 && t2.msg);
        }).catch(function(e3) {
          console.error(e3), n3.error && n3.error();
        });
      }, read: function(n3) {
        Te.get(n3.url).then(function(e3) {
          var t2 = e3.data;
          t2 && 0 === t2.code ? n3.success && n3.success(t2.data.map(function(n4) {
            return { time: n4[0], type: n4[1], color: n4[2], author: n4[3], text: n4[4] };
          })) : n3.error && n3.error(t2 && t2.msg);
        }).catch(function(e3) {
          console.error(e3), n3.error && n3.error();
        });
      } };
      function Oe(n3) {
        return Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Oe(n3);
      }
      function je(n3) {
        var e3 = this;
        this.lang = n3, this.fallbackLang = this.lang.includes("-") ? this.lang.split("-")[0] : this.lang, this.tran = function(n4) {
          return n4 = n4.toLowerCase(), Pe[e3.lang] && Pe[e3.lang][n4] ? Pe[e3.lang][n4] : Pe[e3.fallbackLang] && Pe[e3.fallbackLang][n4] ? Pe[e3.fallbackLang][n4] : De[n4] ? De[n4] : n4;
        };
      }
      var De = { "danmaku-loading": "Danmaku is loading", top: "Top", bottom: "Bottom", rolling: "Rolling", "input-danmaku-enter": "Input danmaku, hit Enter", "about-author": "About author", "dplayer-feedback": "DPlayer feedback", "about-dplayer": "About DPlayer", loop: "Loop", speed: "Speed", "opacity-danmaku": "Opacity for danmaku", normal: "Normal", "please-input-danmaku": "Please input danmaku content!", "set-danmaku-color": "Set danmaku color", "set-danmaku-type": "Set danmaku type", "show-danmaku": "Show danmaku", "video-failed": "Video load failed", "danmaku-failed": "Danmaku load failed", "danmaku-send-failed": "Danmaku send failed", "switching-quality": "Switching to %q quality", "switched-quality": "Switched to %q quality", ff: "FF %s s", rew: "REW %s s", "unlimited-danmaku": "Unlimited danmaku", "send-danmaku": "Send danmaku", setting: "Setting", fullscreen: "Full screen", "web-fullscreen": "Web full screen", send: "Send", screenshot: "Screenshot", airplay: "AirPlay", chromecast: "ChromeCast", subtitle: "Subtitle", off: "Off", "show-subs": "Show subtitle", "hide-subs": "Hide subtitle", volume: "Volume", live: "Live", "video-info": "Video info" }, Pe = { en: De, "zh-cn": { "danmaku-loading": "弹幕加载中", top: "顶部", bottom: "底部", rolling: "滚动", "input-danmaku-enter": "输入弹幕，回车发送", "about-author": "关于作者", "dplayer-feedback": "播放器意见反馈", "about-dplayer": "关于 DPlayer 播放器", loop: "洗脑循环", speed: "速度", "opacity-danmaku": "弹幕透明度", normal: "正常", "please-input-danmaku": "要输入弹幕内容啊喂！", "set-danmaku-color": "设置弹幕颜色", "set-danmaku-type": "设置弹幕类型", "show-danmaku": "显示弹幕", "video-failed": "视频加载失败", "danmaku-failed": "弹幕加载失败", "danmaku-send-failed": "弹幕发送失败", "switching-quality": "正在切换至 %q 画质", "switched-quality": "已经切换至 %q 画质", ff: "快进 %s 秒", rew: "快退 %s 秒", "unlimited-danmaku": "海量弹幕", "send-danmaku": "发送弹幕", setting: "设置", fullscreen: "全屏", "web-fullscreen": "页面全屏", send: "发送", screenshot: "截图", airplay: "无线投屏", chromecast: "ChromeCast", subtitle: "字幕", off: "关闭", "show-subs": "显示字幕", "hide-subs": "隐藏字幕", volume: "音量", live: "直播", "video-info": "视频统计信息" }, "zh-tw": { "danmaku-loading": "彈幕載入中", top: "頂部", bottom: "底部", rolling: "滾動", "input-danmaku-enter": "輸入彈幕，Enter 發送", "about-author": "關於作者", "dplayer-feedback": "播放器意見回饋", "about-dplayer": "關於 DPlayer 播放器", loop: "循環播放", speed: "速度", "opacity-danmaku": "彈幕透明度", normal: "正常", "please-input-danmaku": "請輸入彈幕內容啊！", "set-danmaku-color": "設定彈幕顏色", "set-danmaku-type": "設定彈幕類型", "show-danmaku": "顯示彈幕", "video-failed": "影片載入失敗", "danmaku-failed": "彈幕載入失敗", "danmaku-send-failed": "彈幕發送失敗", "switching-quality": "正在切換至 %q 畫質", "switched-quality": "已經切換至 %q 畫質", ff: "快進 %s 秒", rew: "快退 %s 秒", "unlimited-danmaku": "巨量彈幕", "send-danmaku": "發送彈幕", setting: "設定", fullscreen: "全螢幕", "web-fullscreen": "頁面全螢幕", send: "發送", screenshot: "截圖", airplay: "無線投屏", chromecast: "ChromeCast", subtitle: "字幕", off: "關閉", "show-subs": "顯示字幕", "hide-subs": "隱藏字幕", volume: "音量", live: "直播", "video-info": "影片統計訊息" }, "ko-kr": { "danmaku-loading": "Danmaku를 불러오는 중입니다.", top: "Top", bottom: "Bottom", rolling: "Rolling", "input-danmaku-enter": "Danmaku를 입력하고 Enter를 누르세요.", "about-author": "만든이", "dplayer-feedback": "피드백 보내기", "about-dplayer": "DPlayer 정보", loop: "반복", speed: "배속", "opacity-danmaku": "Danmaku 불투명도", normal: "표준", "please-input-danmaku": "Danmaku를 입력하세요!", "set-danmaku-color": "Danmaku 색상", "set-danmaku-type": "Danmaku 설정", "show-danmaku": "Danmaku 표시", "video-failed": "비디오를 불러오지 못했습니다.", "danmaku-failed": "Danmaku를 불러오지 못했습니다.", "danmaku-send-failed": "Danmaku 전송에 실패했습니다.", "Switching to": "", "Switched to": "", "switching-quality": "전환 %q 화질", "switched-quality": "전환 됨 %q 화질", ff: "앞으로 %s 초", rew: "뒤로 %s 초", "unlimited-danmaku": "끝없는 Danmaku", "send-danmaku": "Danmaku 보내기", setting: "설정", fullscreen: "전체 화면", "web-fullscreen": "웹 내 전체화면", send: "보내기", screenshot: "화면 캡쳐", airplay: "에어플레이", chromecast: "ChromeCast", subtitle: "부제", off: "끄다", "show-subs": "자막 보이기", "hide-subs": "자막 숨기기", Volume: "볼륨", live: "생방송", "video-info": "비디오 정보" }, de: { "danmaku-loading": "Danmaku lädt...", top: "Oben", bottom: "Unten", rolling: "Rollend", "input-danmaku-enter": "Drücke Enter nach dem Einfügen vom Danmaku", "about-author": "Über den Autor", "dplayer-feedback": "DPlayer Feedback", "about-dplayer": "Über DPlayer", loop: "Wiederholen", speed: "Geschwindigkeit", "opacity-danmaku": "Transparenz für Danmaku", normal: "Normal", "please-input-danmaku": "Bitte Danmaku Inhalt eingeben!", "set-danmaku-color": "Danmaku Farbe festlegen", "set-danmaku-type": "Danmaku Typ festlegen", "show-danmaku": "Zeige Danmaku", "video-failed": "Das Video konnte nicht geladen werden", "danmaku-failed": "Danmaku konnte nicht geladen werden", "danmaku-send-failed": "Das senden von Danmaku ist fehgeschlagen", "switching-quality": "Wechsle zur %q Qualität", "switched-quality": "Zur %q Qualität gewechselt", ff: "%s s Vorwärts", rew: "%s s Zurück", "unlimited-danmaku": "Unlimitiertes Danmaku", "send-danmaku": "Sende Danmaku", setting: "Einstellungen", fullscreen: "Vollbild", "web-fullscreen": "Browser Vollbild", send: "Senden", screenshot: "Screenshot", airplay: "AirPlay", "show-subs": "Zeige Untertitel", chromecast: "ChromeCast", subtitle: "Untertitel", off: "Schließung", "hide-subs": "Verstecke Untertitel", volume: "Lautstärke", live: "Live", "video-info": "Video Info" } }, Re = t(730), Ye = t.n(Re), Me = t(74), Fe = t.n(Me), We = t(437), Ue = t.n(We), Ne = t(644), Qe = t.n(Ne), He = t(324), _e = t.n(He), Ke = t(574), Ze = t.n(Ke), Ve = t(300), Xe = t.n(Ve), Je = t(934), Ge = t.n(Je), $e = t(428), nt = t.n($e), et = t(807), tt = t.n(et), at = t(338), ot = t.n(at), rt = t(254), it = t.n(rt), lt = t(965), st = t.n(lt), pt = t(113), dt = t.n(pt), ct = t(251), At = t.n(ct), ut = t(410), yt = t.n(ut), mt = t(182), ht = t.n(mt), ft = t(193), bt = t.n(ft);
      const gt = { play: Ye(), pause: Fe(), volumeUp: Ue(), volumeDown: Qe(), volumeOff: _e(), full: Ze(), fullWeb: Xe(), setting: Ge(), right: nt(), comment: tt(), commentOff: ot(), send: it(), pallette: st(), camera: dt(), subtitle: yt(), loading: ht(), airplay: At(), chromecast: bt() };
      var vt = t(916), xt = t.n(vt);
      function Et(n3) {
        return Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Et(n3);
      }
      function wt(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Et(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Et(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Et(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Ct = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.container = e4.container, this.options = e4.options, this.index = e4.index, this.tran = e4.tran, this.init();
        }
        var e3, t2, a2;
        return e3 = n3, a2 = [{ key: "NewNotice", value: function(n4, e4, t3) {
          var a3 = document.createElement("div");
          return a3.classList.add("dplayer-notice"), a3.style.opacity = e4, a3.innerText = n4, t3 && (a3.id = "dplayer-notice-".concat(t3)), a3;
        } }], (t2 = [{ key: "init", value: function() {
          this.container.innerHTML = xt()({ options: this.options, index: this.index, tran: this.tran, icons: gt, mobile: T.isMobile, video: { current: true, pic: this.options.video.pic, screenshot: this.options.screenshot, airplay: !(!T.isSafari || T.isChrome) && this.options.airplay, chromecast: this.options.chromecast, preload: this.options.preload, url: this.options.video.url, subtitle: this.options.subtitle } }), this.volumeBar = this.container.querySelector(".dplayer-volume-bar-inner"), this.volumeBarWrap = this.container.querySelector(".dplayer-volume-bar"), this.volumeBarWrapWrap = this.container.querySelector(".dplayer-volume-bar-wrap"), this.volumeButton = this.container.querySelector(".dplayer-volume"), this.volumeButtonIcon = this.container.querySelector(".dplayer-volume-icon"), this.volumeIcon = this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"), this.playedBar = this.container.querySelector(".dplayer-played"), this.loadedBar = this.container.querySelector(".dplayer-loaded"), this.playedBarWrap = this.container.querySelector(".dplayer-bar-wrap"), this.playedBarTime = this.container.querySelector(".dplayer-bar-time"), this.danmaku = this.container.querySelector(".dplayer-danmaku"), this.danmakuLoading = this.container.querySelector(".dplayer-danloading"), this.video = this.container.querySelector(".dplayer-video-current"), this.bezel = this.container.querySelector(".dplayer-bezel-icon"), this.playButton = this.container.querySelector(".dplayer-play-icon"), this.mobilePlayButton = this.container.querySelector(".dplayer-mobile-play"), this.videoWrap = this.container.querySelector(".dplayer-video-wrap"), this.controllerMask = this.container.querySelector(".dplayer-controller-mask"), this.ptime = this.container.querySelector(".dplayer-ptime"), this.settingButton = this.container.querySelector(".dplayer-setting-icon"), this.settingBox = this.container.querySelector(".dplayer-setting-box"), this.mask = this.container.querySelector(".dplayer-mask"), this.loop = this.container.querySelector(".dplayer-setting-loop"), this.loopToggle = this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"), this.showDanmaku = this.container.querySelector(".dplayer-setting-showdan"), this.showDanmakuToggle = this.container.querySelector(".dplayer-showdan-setting-input"), this.unlimitDanmaku = this.container.querySelector(".dplayer-setting-danunlimit"), this.unlimitDanmakuToggle = this.container.querySelector(".dplayer-danunlimit-setting-input"), this.speed = this.container.querySelector(".dplayer-setting-speed"), this.speedItem = this.container.querySelectorAll(".dplayer-setting-speed-item"), this.danmakuOpacityBar = this.container.querySelector(".dplayer-danmaku-bar-inner"), this.danmakuOpacityBarWrap = this.container.querySelector(".dplayer-danmaku-bar"), this.danmakuOpacityBarWrapWrap = this.container.querySelector(".dplayer-danmaku-bar-wrap"), this.danmakuOpacityBox = this.container.querySelector(".dplayer-setting-danmaku"), this.dtime = this.container.querySelector(".dplayer-dtime"), this.controller = this.container.querySelector(".dplayer-controller"), this.commentInput = this.container.querySelector(".dplayer-comment-input"), this.commentButton = this.container.querySelector(".dplayer-comment-icon"), this.commentSettingBox = this.container.querySelector(".dplayer-comment-setting-box"), this.commentSettingButton = this.container.querySelector(".dplayer-comment-setting-icon"), this.commentSettingFill = this.container.querySelector(".dplayer-comment-setting-icon path"), this.commentSendButton = this.container.querySelector(".dplayer-send-icon"), this.commentSendFill = this.container.querySelector(".dplayer-send-icon path"), this.commentColorSettingBox = this.container.querySelector(".dplayer-comment-setting-color"), this.browserFullButton = this.container.querySelector(".dplayer-full-icon"), this.webFullButton = this.container.querySelector(".dplayer-full-in-icon"), this.menu = this.container.querySelector(".dplayer-menu"), this.menuItem = this.container.querySelectorAll(".dplayer-menu-item"), this.qualityList = this.container.querySelector(".dplayer-quality-list"), this.camareButton = this.container.querySelector(".dplayer-camera-icon"), this.airplayButton = this.container.querySelector(".dplayer-airplay-icon"), this.chromecastButton = this.container.querySelector(".dplayer-chromecast-icon"), this.subtitleButton = this.container.querySelector(".dplayer-subtitle-icon"), this.subtitleButtonInner = this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"), this.subtitlesButton = this.container.querySelector(".dplayer-subtitles-icon"), this.subtitlesBox = this.container.querySelector(".dplayer-subtitles-box"), this.subtitlesItem = this.container.querySelectorAll(".dplayer-subtitles-item"), this.subtitle = this.container.querySelector(".dplayer-subtitle"), this.subtrack = this.container.querySelector(".dplayer-subtrack"), this.qualityButton = this.container.querySelector(".dplayer-quality-icon"), this.barPreview = this.container.querySelector(".dplayer-bar-preview"), this.barWrap = this.container.querySelector(".dplayer-bar-wrap"), this.noticeList = this.container.querySelector(".dplayer-notice-list"), this.infoPanel = this.container.querySelector(".dplayer-info-panel"), this.infoPanelClose = this.container.querySelector(".dplayer-info-panel-close"), this.infoVersion = this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"), this.infoFPS = this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"), this.infoType = this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"), this.infoUrl = this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"), this.infoResolution = this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"), this.infoDuration = this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"), this.infoDanmakuId = this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"), this.infoDanmakuApi = this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"), this.infoDanmakuAmount = this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data");
        } }]) && wt(e3.prototype, t2), a2 && wt(e3, a2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const kt = Ct;
      function Bt(n3) {
        return Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Bt(n3);
      }
      function St(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Bt(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Bt(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Bt(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var It = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.options = e4, this.player = this.options.player, this.container = this.options.container, this.danTunnel = { right: {}, top: {}, bottom: {} }, this.danIndex = 0, this.dan = [], this.showing = true, this._opacity = this.options.opacity, this.events = this.options.events, this.unlimited = this.options.unlimited, this._measure(""), this.load();
        }
        var e3, t2;
        return e3 = n3, t2 = [{ key: "load", value: function() {
          var n4, e4 = this;
          n4 = this.options.api.maximum ? "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id, "&max=").concat(this.options.api.maximum) : "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id);
          var t3 = (this.options.api.addition || []).slice(0);
          t3.push(n4), this.events && this.events.trigger("danmaku_load_start", t3), this._readAllEndpoints(t3, function(n5) {
            e4.dan = [].concat.apply([], n5).sort(function(n6, e5) {
              return n6.time - e5.time;
            }), window.requestAnimationFrame(function() {
              e4.frame();
            }), e4.options.callback(), e4.events && e4.events.trigger("danmaku_load_end");
          });
        } }, { key: "reload", value: function(n4) {
          this.options.api = n4, this.dan = [], this.clear(), this.load();
        } }, { key: "_readAllEndpoints", value: function(n4, e4) {
          for (var t3 = this, a2 = [], o2 = 0, r2 = function(r3) {
            t3.options.apiBackend.read({ url: n4[r3], success: function(t4) {
              a2[r3] = t4, ++o2 === n4.length && e4(a2);
            }, error: function(i3) {
              t3.options.error(i3 || t3.options.tran("danmaku-failed")), a2[r3] = [], ++o2 === n4.length && e4(a2);
            } });
          }, i2 = 0; i2 < n4.length; ++i2)
            r2(i2);
        } }, { key: "send", value: function(n4, e4) {
          var t3 = this, a2 = { token: this.options.api.token, id: this.options.api.id, author: this.options.api.user, time: this.options.time(), text: n4.text, color: n4.color, type: n4.type };
          this.options.apiBackend.send({ url: this.options.api.address + "v3/", data: a2, success: e4, error: function(n5) {
            t3.options.error(n5 || t3.options.tran("danmaku-failed"));
          } }), this.dan.splice(this.danIndex, 0, a2), this.danIndex++;
          var o2 = { text: this.htmlEncode(a2.text), color: a2.color, type: a2.type, border: "2px solid ".concat(this.options.borderColor) };
          this.draw(o2), this.events && this.events.trigger("danmaku_send", a2);
        } }, { key: "frame", value: function() {
          var n4 = this;
          if (this.dan.length && !this.paused && this.showing) {
            for (var e4 = this.dan[this.danIndex], t3 = []; e4 && this.options.time() > parseFloat(e4.time); )
              t3.push(e4), e4 = this.dan[++this.danIndex];
            this.draw(t3);
          }
          window.requestAnimationFrame(function() {
            n4.frame();
          });
        } }, { key: "opacity", value: function(n4) {
          if (void 0 !== n4) {
            for (var e4 = this.container.getElementsByClassName("dplayer-danmaku-item"), t3 = 0; t3 < e4.length; t3++)
              e4[t3].style.opacity = n4;
            this._opacity = n4, this.events && this.events.trigger("danmaku_opacity", this._opacity);
          }
          return this._opacity;
        } }, { key: "draw", value: function(n4) {
          var e4 = this;
          if (this.showing) {
            var t3 = this.options.height, a2 = this.container.offsetWidth, o2 = this.container.offsetHeight, r2 = parseInt(o2 / t3), i2 = function(n5) {
              var t4 = n5.offsetWidth || parseInt(n5.style.width), a3 = n5.getBoundingClientRect().right || e4.container.getBoundingClientRect().right + t4;
              return e4.container.getBoundingClientRect().right - a3;
            }, l2 = function(n5) {
              return (a2 + n5) / 5;
            }, s2 = function(n5, t4, o3) {
              for (var s3 = a2 / l2(o3), p3 = function(o4) {
                var p4 = e4.danTunnel[t4][o4 + ""];
                if (!p4 || !p4.length)
                  return e4.danTunnel[t4][o4 + ""] = [n5], n5.addEventListener("animationend", function() {
                    e4.danTunnel[t4][o4 + ""].splice(0, 1);
                  }), { v: o4 % r2 };
                if ("right" !== t4)
                  return "continue";
                for (var d4 = 0; d4 < p4.length; d4++) {
                  var c4 = i2(p4[d4]) - 10;
                  if (c4 <= a2 - s3 * l2(parseInt(p4[d4].style.width)) || c4 <= 0)
                    break;
                  if (d4 === p4.length - 1)
                    return e4.danTunnel[t4][o4 + ""].push(n5), n5.addEventListener("animationend", function() {
                      e4.danTunnel[t4][o4 + ""].splice(0, 1);
                    }), { v: o4 % r2 };
                }
              }, d3 = 0; e4.unlimited || d3 < r2; d3++) {
                var c3 = p3(d3);
                if ("continue" !== c3 && "object" === Bt(c3))
                  return c3.v;
              }
              return -1;
            };
            "[object Array]" !== Object.prototype.toString.call(n4) && (n4 = [n4]);
            for (var p2 = document.createDocumentFragment(), d2 = function() {
              n4[c2].type = T.number2Type(n4[c2].type), n4[c2].color || (n4[c2].color = 16777215);
              var o3 = document.createElement("div");
              o3.classList.add("dplayer-danmaku-item"), o3.classList.add("dplayer-danmaku-".concat(n4[c2].type)), n4[c2].border ? o3.innerHTML = '<span style="border:'.concat(n4[c2].border, '">').concat(n4[c2].text, "</span>") : o3.innerHTML = n4[c2].text, o3.style.opacity = e4._opacity, o3.style.color = T.number2Color(n4[c2].color), o3.addEventListener("animationend", function() {
                e4.container.removeChild(o3);
              });
              var r3, i3 = e4._measure(n4[c2].text);
              switch (n4[c2].type) {
                case "right":
                  (r3 = s2(o3, n4[c2].type, i3)) >= 0 && (o3.style.width = i3 + 1 + "px", o3.style.top = t3 * r3 + "px", o3.style.transform = "translateX(-".concat(a2, "px)"));
                  break;
                case "top":
                  (r3 = s2(o3, n4[c2].type)) >= 0 && (o3.style.top = t3 * r3 + "px");
                  break;
                case "bottom":
                  (r3 = s2(o3, n4[c2].type)) >= 0 && (o3.style.bottom = t3 * r3 + "px");
                  break;
                default:
                  console.error("Can't handled danmaku type: ".concat(n4[c2].type));
              }
              r3 >= 0 && (o3.classList.add("dplayer-danmaku-move"), o3.style.animationDuration = e4._danAnimation(n4[c2].type), p2.appendChild(o3));
            }, c2 = 0; c2 < n4.length; c2++)
              d2();
            return this.container.appendChild(p2), p2;
          }
        } }, { key: "play", value: function() {
          this.paused = false;
        } }, { key: "pause", value: function() {
          this.paused = true;
        } }, { key: "_measure", value: function(n4) {
          if (!this.context) {
            var e4 = getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0], null);
            this.context = document.createElement("canvas").getContext("2d"), this.context.font = e4.getPropertyValue("font");
          }
          return this.context.measureText(n4).width;
        } }, { key: "seek", value: function() {
          this.clear();
          for (var n4 = 0; n4 < this.dan.length; n4++) {
            if (this.dan[n4].time >= this.options.time()) {
              this.danIndex = n4;
              break;
            }
            this.danIndex = this.dan.length;
          }
        } }, { key: "clear", value: function() {
          this.danTunnel = { right: {}, top: {}, bottom: {} }, this.danIndex = 0, this.options.container.innerHTML = "", this.events && this.events.trigger("danmaku_clear");
        } }, { key: "htmlEncode", value: function(n4) {
          return n4.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;");
        } }, { key: "resize", value: function() {
          for (var n4 = this.container.offsetWidth, e4 = this.container.getElementsByClassName("dplayer-danmaku-item"), t3 = 0; t3 < e4.length; t3++)
            e4[t3].style.transform = "translateX(-".concat(n4, "px)");
        } }, { key: "hide", value: function() {
          this.showing = false, this.pause(), this.clear(), this.events && this.events.trigger("danmaku_hide");
        } }, { key: "show", value: function() {
          this.seek(), this.showing = true, this.play(), this.events && this.events.trigger("danmaku_show");
        } }, { key: "unlimit", value: function(n4) {
          this.unlimited = n4;
        } }, { key: "speed", value: function(n4) {
          this.options.api.speedRate = n4;
        } }, { key: "_danAnimation", value: function(n4) {
          var e4 = this.options.api.speedRate || 1, t3 = !!this.player.fullScreen.isFullScreen();
          return { top: "".concat((t3 ? 6 : 4) / e4, "s"), right: "".concat((t3 ? 8 : 5) / e4, "s"), bottom: "".concat((t3 ? 6 : 4) / e4, "s") }[n4];
        } }], t2 && St(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Lt = It;
      function zt(n3) {
        return zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, zt(n3);
      }
      function Tt(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== zt(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== zt(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === zt(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      const qt = function() {
        function n3() {
          !function(n4, e4) {
            if (!(n4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.events = {}, this.videoEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], this.playerEvents = ["screenshot", "thumbnails_show", "thumbnails_hide", "danmaku_show", "danmaku_hide", "danmaku_clear", "danmaku_loaded", "danmaku_send", "danmaku_opacity", "contextmenu_show", "contextmenu_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "webfullscreen", "webfullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change"];
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "on", value: function(n4, e4) {
          this.type(n4) && "function" == typeof e4 && (this.events[n4] || (this.events[n4] = []), this.events[n4].push(e4));
        } }, { key: "trigger", value: function(n4, e4) {
          if (this.events[n4] && this.events[n4].length)
            for (var t3 = 0; t3 < this.events[n4].length; t3++)
              this.events[n4][t3](e4);
        } }, { key: "type", value: function(n4) {
          return -1 !== this.playerEvents.indexOf(n4) ? "player" : -1 !== this.videoEvents.indexOf(n4) ? "video" : (console.error("Unknown event name: ".concat(n4)), null);
        } }]) && Tt(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      function Ot(n3) {
        return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Ot(n3);
      }
      function jt(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Ot(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Ot(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Ot(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Dt = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.lastScrollPosition = { left: 0, top: 0 }, this.player.events.on("webfullscreen", function() {
            t3.player.resize();
          }), this.player.events.on("webfullscreen_cancel", function() {
            t3.player.resize(), T.setScrollPosition(t3.lastScrollPosition);
          }), this.fullscreenchange = function() {
            t3.player.resize(), t3.isFullScreen("browser") ? t3.player.events.trigger("fullscreen") : (T.setScrollPosition(t3.lastScrollPosition), t3.player.events.trigger("fullscreen_cancel"));
          }, this.docfullscreenchange = function() {
            var n4 = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            n4 && n4 !== t3.player.container || (t3.player.resize(), n4 ? t3.player.events.trigger("fullscreen") : (T.setScrollPosition(t3.lastScrollPosition), t3.player.events.trigger("fullscreen_cancel")));
          }, /Firefox/.test(navigator.userAgent) ? (document.addEventListener("mozfullscreenchange", this.docfullscreenchange), document.addEventListener("fullscreenchange", this.docfullscreenchange)) : (this.player.container.addEventListener("fullscreenchange", this.fullscreenchange), this.player.container.addEventListener("webkitfullscreenchange", this.fullscreenchange), document.addEventListener("msfullscreenchange", this.docfullscreenchange), document.addEventListener("MSFullscreenChange", this.docfullscreenchange));
        }
        var e3, t2;
        return e3 = n3, t2 = [{ key: "isFullScreen", value: function() {
          var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
          switch (n4) {
            case "browser":
              return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            case "web":
              return this.player.container.classList.contains("dplayer-fulled");
          }
        } }, { key: "request", value: function() {
          var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser", e4 = "browser" === n4 ? "web" : "browser", t3 = this.isFullScreen(e4);
          switch (t3 || (this.lastScrollPosition = T.getScrollPosition()), n4) {
            case "browser":
              this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen ? this.player.video.webkitEnterFullscreen() : this.player.video.webkitEnterFullScreen ? this.player.video.webkitEnterFullScreen() : this.player.container.msRequestFullscreen && this.player.container.msRequestFullscreen();
              break;
            case "web":
              this.player.container.classList.add("dplayer-fulled"), document.body.classList.add("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen");
          }
          t3 && this.cancel(e4);
        } }, { key: "cancel", value: function() {
          var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
          switch (n4) {
            case "browser":
              document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitCancelFullscreen ? document.webkitCancelFullscreen() : document.msCancelFullScreen ? document.msCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
              break;
            case "web":
              this.player.container.classList.remove("dplayer-fulled"), document.body.classList.remove("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen_cancel");
          }
        } }, { key: "toggle", value: function() {
          var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
          this.isFullScreen(n4) ? this.cancel(n4) : this.request(n4);
        } }, { key: "destroy", value: function() {
          /Firefox/.test(navigator.userAgent) ? (document.removeEventListener("mozfullscreenchange", this.docfullscreenchange), document.removeEventListener("fullscreenchange", this.docfullscreenchange)) : (this.player.container.removeEventListener("fullscreenchange", this.fullscreenchange), this.player.container.removeEventListener("webkitfullscreenchange", this.fullscreenchange), document.removeEventListener("msfullscreenchange", this.docfullscreenchange), document.removeEventListener("MSFullscreenChange", this.docfullscreenchange));
        } }], t2 && jt(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Pt = Dt;
      function Rt(n3) {
        return Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Rt(n3);
      }
      function Yt(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Rt(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Rt(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Rt(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Mt = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.storageName = { opacity: "dplayer-danmaku-opacity", volume: "dplayer-volume", unlimited: "dplayer-danmaku-unlimited", danmaku: "dplayer-danmaku-show", subtitle: "dplayer-subtitle-show" }, this.default = { opacity: 0.7, volume: e4.options.hasOwnProperty("volume") ? e4.options.volume : 0.7, unlimited: (e4.options.danmaku && e4.options.danmaku.unlimited ? 1 : 0) || 0, danmaku: 1, subtitle: 1 }, this.data = {}, this.init();
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "init", value: function() {
          for (var n4 in this.storageName) {
            var e4 = this.storageName[n4];
            this.data[n4] = parseFloat(T.storage.get(e4) || this.default[n4]);
          }
        } }, { key: "get", value: function(n4) {
          return this.data[n4];
        } }, { key: "set", value: function(n4, e4) {
          this.data[n4] = e4, T.storage.set(this.storageName[n4], e4);
        } }]) && Yt(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Ft = Mt;
      function Wt(n3) {
        return Wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Wt(n3);
      }
      function Ut(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Wt(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Wt(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Wt(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Nt = function() {
        function n3(e4, t3, a2, o2) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.container = e4, this.video = t3, this.options = a2, this.events = o2, this.init();
        }
        var e3, t2;
        return e3 = n3, t2 = [{ key: "init", value: function() {
          var n4 = this;
          if (this.container.style.fontSize = this.options.fontSize, this.container.style.bottom = this.options.bottom, this.container.style.color = this.options.color, this.video.textTracks && this.video.textTracks[0]) {
            var e4 = this.video.textTracks[0];
            e4.oncuechange = function() {
              var t3 = e4.activeCues[e4.activeCues.length - 1];
              if (n4.container.innerHTML = "", t3) {
                var a2 = document.createElement("div");
                a2.appendChild(t3.getCueAsHTML());
                var o2 = a2.innerHTML.split(/\r?\n/).map(function(n5) {
                  return "<p>".concat(n5, "</p>");
                }).join("");
                n4.container.innerHTML = o2;
              }
              n4.events.trigger("subtitle_change");
            };
          }
        } }, { key: "show", value: function() {
          this.container.classList.remove("dplayer-subtitle-hide"), this.events.trigger("subtitle_show");
        } }, { key: "hide", value: function() {
          this.container.classList.add("dplayer-subtitle-hide"), this.events.trigger("subtitle_hide");
        } }, { key: "toggle", value: function() {
          this.container.classList.contains("dplayer-subtitle-hide") ? this.show() : this.hide();
        } }], t2 && Ut(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Qt = Nt;
      function Ht(n3) {
        return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Ht(n3);
      }
      function _t(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Ht(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Ht(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Ht(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Kt = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.player.template.mask.addEventListener("click", function() {
            t3.hide();
          }), this.player.template.subtitlesButton.addEventListener("click", function() {
            t3.adaptiveHeight(), t3.show();
          });
          for (var a2 = this.player.template.subtitlesItem.length - 1, o2 = function(n4) {
            t3.player.template.subtitlesItem[n4].addEventListener("click", function() {
              t3.hide(), t3.player.options.subtitle.index !== n4 && (t3.player.template.subtitle.innerHTML = "<p></p>", t3.player.template.subtrack.src = t3.player.template.subtitlesItem[n4].dataset.subtitle, t3.player.options.subtitle.index = n4, t3.player.template.subtitle.classList.contains("dplayer-subtitle-hide") && t3.subContainerShow());
            });
          }, r2 = 0; r2 < a2; r2++)
            o2(r2);
          this.player.template.subtitlesItem[a2].addEventListener("click", function() {
            t3.hide(), t3.player.options.subtitle.index !== a2 && (t3.player.template.subtitle.innerHTML = "<p></p>", t3.player.template.subtrack.src = "", t3.player.options.subtitle.index = a2, t3.subContainerHide());
          });
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "subContainerShow", value: function() {
          this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"), this.player.events.trigger("subtitle_show");
        } }, { key: "subContainerHide", value: function() {
          this.player.template.subtitle.classList.add("dplayer-subtitle-hide"), this.player.events.trigger("subtitle_hide");
        } }, { key: "hide", value: function() {
          this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.controller.disableAutoHide = false;
        } }, { key: "show", value: function() {
          this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = true;
        } }, { key: "adaptiveHeight", value: function() {
          var n4 = 30 * this.player.template.subtitlesItem.length + 14, e4 = 0.8 * this.player.template.videoWrap.offsetHeight;
          n4 >= e4 - 50 ? (this.player.template.subtitlesBox.style.bottom = "8px", this.player.template.subtitlesBox.style["max-height"] = e4 - 8 + "px") : (this.player.template.subtitlesBox.style.bottom = "50px", this.player.template.subtitlesBox.style["max-height"] = e4 - 50 + "px");
        } }]) && _t(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Zt = Kt;
      function Vt(n3) {
        return Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Vt(n3);
      }
      function Xt(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Vt(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Vt(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Vt(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Jt = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.elements = {}, this.elements.volume = e4.volumeBar, this.elements.played = e4.playedBar, this.elements.loaded = e4.loadedBar, this.elements.danmaku = e4.danmakuOpacityBar;
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "set", value: function(n4, e4, t3) {
          e4 = Math.max(e4, 0), e4 = Math.min(e4, 1), this.elements[n4].style[t3] = 100 * e4 + "%";
        } }, { key: "get", value: function(n4) {
          return parseFloat(this.elements[n4].style.width) / 100;
        } }]) && Xt(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Gt = Jt;
      function $t(n3) {
        return $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, $t(n3);
      }
      function na(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== $t(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== $t(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === $t(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var ea = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n4) {
            window.setTimeout(n4, 1e3 / 60);
          }, this.types = ["loading", "info", "fps"], this.init();
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "init", value: function() {
          var n4 = this;
          this.types.map(function(e4) {
            return "fps" !== e4 && n4["init".concat(e4, "Checker")](), e4;
          });
        } }, { key: "initloadingChecker", value: function() {
          var n4 = this, e4 = 0, t3 = 0, a2 = false;
          this.loadingChecker = setInterval(function() {
            n4.enableloadingChecker && (t3 = n4.player.video.currentTime, a2 || t3 !== e4 || n4.player.video.paused || (n4.player.container.classList.add("dplayer-loading"), a2 = true), a2 && t3 > e4 && !n4.player.video.paused && (n4.player.container.classList.remove("dplayer-loading"), a2 = false), e4 = t3);
          }, 100);
        } }, { key: "initfpsChecker", value: function() {
          var n4 = this;
          window.requestAnimationFrame(function() {
            if (n4.enablefpsChecker)
              if (n4.initfpsChecker(), n4.fpsStart) {
                n4.fpsIndex++;
                var e4 = /* @__PURE__ */ new Date();
                e4 - n4.fpsStart > 1e3 && (n4.player.infoPanel.fps(n4.fpsIndex / (e4 - n4.fpsStart) * 1e3), n4.fpsStart = /* @__PURE__ */ new Date(), n4.fpsIndex = 0);
              } else
                n4.fpsStart = /* @__PURE__ */ new Date(), n4.fpsIndex = 0;
            else
              n4.fpsStart = 0, n4.fpsIndex = 0;
          });
        } }, { key: "initinfoChecker", value: function() {
          var n4 = this;
          this.infoChecker = setInterval(function() {
            n4.enableinfoChecker && n4.player.infoPanel.update();
          }, 1e3);
        } }, { key: "enable", value: function(n4) {
          this["enable".concat(n4, "Checker")] = true, "fps" === n4 && this.initfpsChecker();
        } }, { key: "disable", value: function(n4) {
          this["enable".concat(n4, "Checker")] = false;
        } }, { key: "destroy", value: function() {
          var n4 = this;
          this.types.map(function(e4) {
            return n4["enable".concat(e4, "Checker")] = false, n4["".concat(e4, "Checker")] && clearInterval(n4["".concat(e4, "Checker")]), e4;
          });
        } }]) && na(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const ta = ea;
      function aa(n3) {
        return aa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, aa(n3);
      }
      function oa(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== aa(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== aa(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === aa(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      const ra = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.container = e4, this.container.addEventListener("animationend", function() {
            t3.container.classList.remove("dplayer-bezel-transition");
          });
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "switch", value: function(n4) {
          this.container.innerHTML = n4, this.container.classList.add("dplayer-bezel-transition");
        } }]) && oa(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      function ia(n3) {
        return ia = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, ia(n3);
      }
      function la(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== ia(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== ia(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === ia(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var sa = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.container = e4.container, this.barWidth = e4.barWidth, this.container.style.backgroundImage = "url('".concat(e4.url, "')"), this.events = e4.events;
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "resize", value: function(n4, e4, t3) {
          this.container.style.width = "".concat(n4, "px"), this.container.style.height = "".concat(e4, "px"), this.container.style.top = "".concat(2 - e4, "px"), this.barWidth = t3;
        } }, { key: "show", value: function() {
          this.container.style.display = "block", this.events && this.events.trigger("thumbnails_show");
        } }, { key: "move", value: function(n4) {
          this.container.style.backgroundPosition = "-".concat(160 * (Math.ceil(n4 / this.barWidth * 100) - 1), "px 0"), this.container.style.left = "".concat(Math.min(Math.max(n4 - this.container.offsetWidth / 2, -10), this.barWidth - 150), "px");
        } }, { key: "hide", value: function() {
          this.container.style.display = "none", this.events && this.events.trigger("thumbnails_hide");
        } }]) && la(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const pa = sa;
      function da(n3) {
        return da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, da(n3);
      }
      function ca(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== da(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== da(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === da(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Aa, ua = true, ya = false, ma = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.autoHideTimer = 0, T.isMobile || (this.setAutoHideHandler = this.setAutoHide.bind(this), this.player.container.addEventListener("mousemove", this.setAutoHideHandler), this.player.container.addEventListener("click", this.setAutoHideHandler), this.player.on("play", this.setAutoHideHandler), this.player.on("pause", this.setAutoHideHandler)), this.initPlayButton(), this.initThumbnails(), this.initPlayedBar(), this.initFullButton(), this.initQualityButton(), this.initScreenshotButton(), this.player.options.subtitle && "string" == typeof this.player.options.subtitle.url && this.initSubtitleButton(), this.initHighlights(), this.initAirplayButton(), this.initChromecastButton(), T.isMobile || this.initVolumeButton();
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "initPlayButton", value: function() {
          var n4 = this;
          this.player.template.playButton.addEventListener("click", function() {
            n4.player.toggle();
          }), this.player.template.mobilePlayButton.addEventListener("click", function() {
            n4.player.toggle();
          }), T.isMobile ? (this.player.template.videoWrap.addEventListener("click", function() {
            n4.toggle();
          }), this.player.template.controllerMask.addEventListener("click", function() {
            n4.toggle();
          })) : this.player.options.preventClickToggle || (this.player.template.videoWrap.addEventListener("click", function() {
            n4.player.toggle();
          }), this.player.template.controllerMask.addEventListener("click", function() {
            n4.player.toggle();
          }));
        } }, { key: "initHighlights", value: function() {
          var n4 = this;
          this.player.on("durationchange", function() {
            if (1 !== n4.player.video.duration && n4.player.video.duration !== 1 / 0 && n4.player.options.highlight) {
              var e4 = n4.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");
              [].slice.call(e4, 0).forEach(function(e5) {
                n4.player.template.playedBarWrap.removeChild(e5);
              });
              for (var t3 = 0; t3 < n4.player.options.highlight.length; t3++)
                if (n4.player.options.highlight[t3].text && n4.player.options.highlight[t3].time) {
                  var a2 = document.createElement("div");
                  a2.classList.add("dplayer-highlight"), a2.style.left = n4.player.options.highlight[t3].time / n4.player.video.duration * 100 + "%", a2.innerHTML = '<span class="dplayer-highlight-text">' + n4.player.options.highlight[t3].text + "</span>", n4.player.template.playedBarWrap.insertBefore(a2, n4.player.template.playedBarTime);
                }
            }
          });
        } }, { key: "initThumbnails", value: function() {
          var n4 = this;
          this.player.options.video.thumbnails && (this.thumbnails = new pa({ container: this.player.template.barPreview, barWidth: this.player.template.barWrap.offsetWidth, url: this.player.options.video.thumbnails, events: this.player.events }), this.player.on("loadedmetadata", function() {
            n4.thumbnails.resize(160, n4.player.video.videoHeight / n4.player.video.videoWidth * 160, n4.player.template.barWrap.offsetWidth);
          }));
        } }, { key: "initPlayedBar", value: function() {
          var n4 = this, e4 = function(e5) {
            var t4 = ((e5.clientX || e5.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n4.player.template.playedBarWrap)) / n4.player.template.playedBarWrap.clientWidth;
            t4 = Math.max(t4, 0), t4 = Math.min(t4, 1), n4.player.bar.set("played", t4, "width"), n4.player.template.ptime.innerHTML = T.secondToTime(t4 * n4.player.video.duration);
          }, t3 = function t4(a2) {
            document.removeEventListener(T.nameMap.dragEnd, t4), document.removeEventListener(T.nameMap.dragMove, e4);
            var o2 = ((a2.clientX || a2.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n4.player.template.playedBarWrap)) / n4.player.template.playedBarWrap.clientWidth;
            o2 = Math.max(o2, 0), o2 = Math.min(o2, 1), n4.player.bar.set("played", o2, "width"), n4.player.seek(n4.player.bar.get("played") * n4.player.video.duration), n4.player.timer.enable("progress");
          };
          this.player.template.playedBarWrap.addEventListener(T.nameMap.dragStart, function() {
            n4.player.timer.disable("progress"), document.addEventListener(T.nameMap.dragMove, e4), document.addEventListener(T.nameMap.dragEnd, t3);
          }), this.player.template.playedBarWrap.addEventListener(T.nameMap.dragMove, function(e5) {
            if (n4.player.video.duration) {
              var t4 = n4.player.template.playedBarWrap.getBoundingClientRect().left, a2 = (e5.clientX || e5.changedTouches[0].clientX) - t4;
              if (a2 < 0 || a2 > n4.player.template.playedBarWrap.offsetWidth)
                return;
              var o2 = n4.player.video.duration * (a2 / n4.player.template.playedBarWrap.offsetWidth);
              T.isMobile && n4.thumbnails && n4.thumbnails.show(), n4.thumbnails && n4.thumbnails.move(a2), n4.player.template.playedBarTime.style.left = "".concat(a2 - (o2 >= 3600 ? 25 : 20), "px"), n4.player.template.playedBarTime.innerText = T.secondToTime(o2), n4.player.template.playedBarTime.classList.remove("hidden");
            }
          }), this.player.template.playedBarWrap.addEventListener(T.nameMap.dragEnd, function() {
            T.isMobile && n4.thumbnails && n4.thumbnails.hide();
          }), T.isMobile || (this.player.template.playedBarWrap.addEventListener("mouseenter", function() {
            n4.player.video.duration && (n4.thumbnails && n4.thumbnails.show(), n4.player.template.playedBarTime.classList.remove("hidden"));
          }), this.player.template.playedBarWrap.addEventListener("mouseleave", function() {
            n4.player.video.duration && (n4.thumbnails && n4.thumbnails.hide(), n4.player.template.playedBarTime.classList.add("hidden"));
          }));
        } }, { key: "initFullButton", value: function() {
          var n4 = this;
          this.player.template.browserFullButton.addEventListener("click", function() {
            n4.player.fullScreen.toggle("browser");
          }), this.player.template.webFullButton.addEventListener("click", function() {
            n4.player.fullScreen.toggle("web");
          });
        } }, { key: "initVolumeButton", value: function() {
          var n4 = this, e4 = function(e5) {
            var t4 = e5 || window.event, a2 = ((t4.clientX || t4.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n4.player.template.volumeBarWrap) - 5.5) / 35;
            n4.player.volume(a2);
          }, t3 = function t4() {
            document.removeEventListener(T.nameMap.dragEnd, t4), document.removeEventListener(T.nameMap.dragMove, e4), n4.player.template.volumeButton.classList.remove("dplayer-volume-active");
          };
          this.player.template.volumeBarWrapWrap.addEventListener("click", function(e5) {
            var t4 = e5 || window.event, a2 = ((t4.clientX || t4.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(n4.player.template.volumeBarWrap) - 5.5) / 35;
            n4.player.volume(a2);
          }), this.player.template.volumeBarWrapWrap.addEventListener(T.nameMap.dragStart, function() {
            document.addEventListener(T.nameMap.dragMove, e4), document.addEventListener(T.nameMap.dragEnd, t3), n4.player.template.volumeButton.classList.add("dplayer-volume-active");
          }), this.player.template.volumeButtonIcon.addEventListener("click", function() {
            n4.player.video.muted ? (n4.player.video.muted = false, n4.player.switchVolumeIcon(), n4.player.bar.set("volume", n4.player.volume(), "width")) : (n4.player.video.muted = true, n4.player.template.volumeIcon.innerHTML = gt.volumeOff, n4.player.bar.set("volume", 0, "width"));
          });
        } }, { key: "initQualityButton", value: function() {
          var n4 = this;
          this.player.options.video.quality && this.player.template.qualityList.addEventListener("click", function(e4) {
            e4.target.classList.contains("dplayer-quality-item") && n4.player.switchQuality(e4.target.dataset.index);
          });
        } }, { key: "initScreenshotButton", value: function() {
          var n4 = this;
          this.player.options.screenshot && this.player.template.camareButton.addEventListener("click", function() {
            var e4, t3 = document.createElement("canvas");
            t3.width = n4.player.video.videoWidth, t3.height = n4.player.video.videoHeight, t3.getContext("2d").drawImage(n4.player.video, 0, 0, t3.width, t3.height), t3.toBlob(function(t4) {
              e4 = URL.createObjectURL(t4);
              var a2 = document.createElement("a");
              a2.href = e4, a2.download = "DPlayer.png", a2.style.display = "none", document.body.appendChild(a2), a2.click(), document.body.removeChild(a2), URL.revokeObjectURL(e4), n4.player.events.trigger("screenshot", e4);
            });
          });
        } }, { key: "initAirplayButton", value: function() {
          this.player.options.airplay && (window.WebKitPlaybackTargetAvailabilityEvent ? this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged", function(n4) {
            "available" === n4.availability ? this.template.airplayButton.disable = false : this.template.airplayButton.disable = true, this.template.airplayButton.addEventListener("click", function() {
              this.video.webkitShowPlaybackTargetPicker();
            }.bind(this));
          }.bind(this.player)) : this.player.template.airplayButton.style.display = "none");
        } }, { key: "initChromecast", value: function() {
          var n4 = window.document.createElement("script");
          n4.setAttribute("type", "text/javascript"), n4.setAttribute("src", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"), window.document.body.appendChild(n4), window.__onGCastApiAvailable = function(n5) {
            if (n5) {
              var e4 = new (Aa = window.chrome.cast).SessionRequest(Aa.media.DEFAULT_MEDIA_RECEIVER_APP_ID), t3 = new Aa.ApiConfig(e4, function() {
              }, function(n6) {
                n6 === Aa.ReceiverAvailability.AVAILABLE && console.log("chromecast: ", n6);
              });
              Aa.initialize(t3, function() {
              });
            }
          };
        } }, { key: "initChromecastButton", value: function() {
          var n4 = this;
          if (this.player.options.chromecast) {
            ua && (ua = false, this.initChromecast());
            var e4 = function(e5, t4) {
              n4.currentMedia = t4;
            }, t3 = function(n5) {
              console.error("Error launching media", n5);
            };
            this.player.template.chromecastButton.addEventListener("click", function() {
              ya ? (ya = false, n4.currentMedia.stop(), n4.session.stop(), n4.initChromecast()) : (ya = true, Aa.requestSession(function(a2) {
                var o2, r2, i2;
                n4.session = a2, o2 = n4.player.options.video.url, r2 = new Aa.media.MediaInfo(o2), i2 = new Aa.media.LoadRequest(r2), n4.session ? n4.session.loadMedia(i2, e4.bind(n4, "loadMedia"), t3).play() : window.open(o2);
              }, function(e5) {
                "cancel" === e5.code ? n4.session = void 0 : console.error("Error selecting a cast device", e5);
              }));
            });
          }
        } }, { key: "initSubtitleButton", value: function() {
          var n4 = this;
          this.player.events.on("subtitle_show", function() {
            n4.player.template.subtitleButton.dataset.balloon = n4.player.tran("hide-subs"), n4.player.template.subtitleButtonInner.style.opacity = "", n4.player.user.set("subtitle", 1);
          }), this.player.events.on("subtitle_hide", function() {
            n4.player.template.subtitleButton.dataset.balloon = n4.player.tran("show-subs"), n4.player.template.subtitleButtonInner.style.opacity = "0.4", n4.player.user.set("subtitle", 0);
          }), this.player.template.subtitleButton.addEventListener("click", function() {
            n4.player.subtitle.toggle();
          });
        } }, { key: "setAutoHide", value: function() {
          var n4 = this;
          this.show(), clearTimeout(this.autoHideTimer), this.autoHideTimer = setTimeout(function() {
            !n4.player.video.played.length || n4.player.paused || n4.disableAutoHide || n4.hide();
          }, 3e3);
        } }, { key: "show", value: function() {
          this.player.container.classList.remove("dplayer-hide-controller");
        } }, { key: "hide", value: function() {
          this.player.container.classList.add("dplayer-hide-controller"), this.player.setting.hide(), this.player.comment && this.player.comment.hide();
        } }, { key: "isShow", value: function() {
          return !this.player.container.classList.contains("dplayer-hide-controller");
        } }, { key: "toggle", value: function() {
          this.isShow() ? this.hide() : this.show();
        } }, { key: "destroy", value: function() {
          T.isMobile || (this.player.container.removeEventListener("mousemove", this.setAutoHideHandler), this.player.container.removeEventListener("click", this.setAutoHideHandler)), clearTimeout(this.autoHideTimer);
        } }]) && ca(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const ha = ma;
      function fa(n3) {
        return fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, fa(n3);
      }
      function ba(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== fa(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== fa(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === fa(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var ga = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.player.template.mask.addEventListener("click", function() {
            t3.hide();
          }), this.player.template.settingButton.addEventListener("click", function() {
            t3.show();
          }), this.loop = this.player.options.loop, this.player.template.loopToggle.checked = this.loop, this.player.template.loop.addEventListener("click", function() {
            t3.player.template.loopToggle.checked = !t3.player.template.loopToggle.checked, t3.player.template.loopToggle.checked ? t3.loop = true : t3.loop = false, t3.hide();
          }), this.showDanmaku = this.player.user.get("danmaku"), this.showDanmaku || this.player.danmaku && this.player.danmaku.hide(), this.player.template.showDanmakuToggle.checked = this.showDanmaku, this.player.template.showDanmaku.addEventListener("click", function() {
            t3.player.template.showDanmakuToggle.checked = !t3.player.template.showDanmakuToggle.checked, t3.player.template.showDanmakuToggle.checked ? (t3.showDanmaku = true, t3.player.danmaku.show()) : (t3.showDanmaku = false, t3.player.danmaku.hide()), t3.player.user.set("danmaku", t3.showDanmaku ? 1 : 0), t3.hide();
          }), this.unlimitDanmaku = this.player.user.get("unlimited"), this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku, this.player.template.unlimitDanmaku.addEventListener("click", function() {
            t3.player.template.unlimitDanmakuToggle.checked = !t3.player.template.unlimitDanmakuToggle.checked, t3.player.template.unlimitDanmakuToggle.checked ? (t3.unlimitDanmaku = true, t3.player.danmaku.unlimit(true)) : (t3.unlimitDanmaku = false, t3.player.danmaku.unlimit(false)), t3.player.user.set("unlimited", t3.unlimitDanmaku ? 1 : 0), t3.hide();
          }), this.player.template.speed.addEventListener("click", function() {
            t3.player.template.settingBox.classList.add("dplayer-setting-box-narrow"), t3.player.template.settingBox.classList.add("dplayer-setting-box-speed");
          });
          for (var a2 = function(n4) {
            t3.player.template.speedItem[n4].addEventListener("click", function() {
              t3.player.speed(t3.player.template.speedItem[n4].dataset.speed), t3.hide();
            });
          }, o2 = 0; o2 < this.player.template.speedItem.length; o2++)
            a2(o2);
          if (this.player.danmaku) {
            this.player.on("danmaku_opacity", function(n4) {
              t3.player.bar.set("danmaku", n4, "width"), t3.player.user.set("opacity", n4);
            }), this.player.danmaku.opacity(this.player.user.get("opacity"));
            var r2 = function(n4) {
              var e5 = n4 || window.event, a3 = ((e5.clientX || e5.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(t3.player.template.danmakuOpacityBarWrap)) / 130;
              a3 = Math.max(a3, 0), a3 = Math.min(a3, 1), t3.player.danmaku.opacity(a3);
            }, i2 = function n4() {
              document.removeEventListener(T.nameMap.dragEnd, n4), document.removeEventListener(T.nameMap.dragMove, r2), t3.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active");
            };
            this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click", function(n4) {
              var e5 = n4 || window.event, a3 = ((e5.clientX || e5.changedTouches[0].clientX) - T.getBoundingClientRectViewLeft(t3.player.template.danmakuOpacityBarWrap)) / 130;
              a3 = Math.max(a3, 0), a3 = Math.min(a3, 1), t3.player.danmaku.opacity(a3);
            }), this.player.template.danmakuOpacityBarWrapWrap.addEventListener(T.nameMap.dragStart, function() {
              document.addEventListener(T.nameMap.dragMove, r2), document.addEventListener(T.nameMap.dragEnd, i2), t3.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active");
            });
          }
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "hide", value: function() {
          var n4 = this;
          this.player.template.settingBox.classList.remove("dplayer-setting-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), setTimeout(function() {
            n4.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"), n4.player.template.settingBox.classList.remove("dplayer-setting-box-speed");
          }, 300), this.player.controller.disableAutoHide = false;
        } }, { key: "show", value: function() {
          this.player.template.settingBox.classList.add("dplayer-setting-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = true;
        } }]) && ba(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const va = ga;
      function xa(n3) {
        return xa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, xa(n3);
      }
      function Ea(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== xa(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== xa(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === xa(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var wa = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.player.template.mask.addEventListener("click", function() {
            t3.hide();
          }), this.player.template.commentButton.addEventListener("click", function() {
            t3.show();
          }), this.player.template.commentSettingButton.addEventListener("click", function() {
            t3.toggleSetting();
          }), this.player.template.commentColorSettingBox.addEventListener("click", function() {
            if (t3.player.template.commentColorSettingBox.querySelector("input:checked+span")) {
              var n4 = t3.player.template.commentColorSettingBox.querySelector("input:checked").value;
              t3.player.template.commentSettingFill.style.fill = n4, t3.player.template.commentInput.style.color = n4, t3.player.template.commentSendFill.style.fill = n4;
            }
          }), this.player.template.commentInput.addEventListener("click", function() {
            t3.hideSetting();
          }), this.player.template.commentInput.addEventListener("keydown", function(n4) {
            13 === (n4 || window.event).keyCode && t3.send();
          }), this.player.template.commentSendButton.addEventListener("click", function() {
            t3.send();
          });
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "show", value: function() {
          this.player.controller.disableAutoHide = true, this.player.template.controller.classList.add("dplayer-controller-comment"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.container.classList.add("dplayer-show-controller"), this.player.template.commentInput.focus();
        } }, { key: "hide", value: function() {
          this.player.template.controller.classList.remove("dplayer-controller-comment"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.container.classList.remove("dplayer-show-controller"), this.player.controller.disableAutoHide = false, this.hideSetting();
        } }, { key: "showSetting", value: function() {
          this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open");
        } }, { key: "hideSetting", value: function() {
          this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open");
        } }, { key: "toggleSetting", value: function() {
          this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open") ? this.hideSetting() : this.showSetting();
        } }, { key: "send", value: function() {
          var n4 = this;
          this.player.template.commentInput.blur(), this.player.template.commentInput.value.replace(/^\s+|\s+$/g, "") ? this.player.danmaku.send({ text: this.player.template.commentInput.value, color: T.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value), type: parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value) }, function() {
            n4.player.template.commentInput.value = "", n4.hide();
          }) : this.player.notice(this.player.tran("please-input-danmaku"));
        } }]) && Ea(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Ca = wa;
      function ka(n3) {
        return ka = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, ka(n3);
      }
      function Ba(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== ka(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== ka(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === ka(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Sa = function() {
        function n3(e4) {
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.doHotKeyHandler = this.doHotKey.bind(this), this.cancelFullScreenHandler = this.cancelFullScreen.bind(this), this.player.options.hotkey && document.addEventListener("keydown", this.doHotKeyHandler), document.addEventListener("keydown", this.cancelFullScreenHandler);
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "doHotKey", value: function(n4) {
          if (this.player.focus) {
            var e4 = document.activeElement.tagName.toUpperCase(), t3 = document.activeElement.getAttribute("contenteditable");
            if ("INPUT" !== e4 && "TEXTAREA" !== e4 && "" !== t3 && "true" !== t3) {
              var a2, o2 = n4 || window.event;
              switch (o2.keyCode) {
                case 32:
                  o2.preventDefault(), this.player.toggle();
                  break;
                case 37:
                  if (o2.preventDefault(), this.player.options.live)
                    break;
                  this.player.seek(this.player.video.currentTime - 5), this.player.controller.setAutoHide();
                  break;
                case 39:
                  if (o2.preventDefault(), this.player.options.live)
                    break;
                  this.player.seek(this.player.video.currentTime + 5), this.player.controller.setAutoHide();
                  break;
                case 38:
                  o2.preventDefault(), a2 = this.player.volume() + 0.1, this.player.volume(a2);
                  break;
                case 40:
                  o2.preventDefault(), a2 = this.player.volume() - 0.1, this.player.volume(a2);
              }
            }
          }
        } }, { key: "cancelFullScreen", value: function(n4) {
          27 === (n4 || window.event).keyCode && this.player.fullScreen.isFullScreen("web") && this.player.fullScreen.cancel("web");
        } }, { key: "destroy", value: function() {
          this.player.options.hotkey && document.removeEventListener("keydown", this.doHotKeyHandler), document.removeEventListener("keydown", this.cancelFullScreenHandler);
        } }]) && Ba(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Ia = Sa;
      function La(n3) {
        return La = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, La(n3);
      }
      function za(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== La(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== La(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === La(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Ta = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.player = e4, this.shown = false, Array.prototype.slice.call(this.player.template.menuItem).forEach(function(n4, e5) {
            t3.player.options.contextmenu[e5].click && n4.addEventListener("click", function() {
              t3.player.options.contextmenu[e5].click(t3.player), t3.hide();
            });
          }), this.contextmenuHandler = function(n4) {
            if (t3.shown)
              t3.hide();
            else {
              var e5 = n4 || window.event;
              e5.preventDefault();
              var a2 = t3.player.container.getBoundingClientRect();
              t3.show(e5.clientX - a2.left, e5.clientY - a2.top), t3.player.template.mask.addEventListener("click", function() {
                t3.hide();
              });
            }
          }, this.player.container.addEventListener("contextmenu", this.contextmenuHandler);
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "show", value: function(n4, e4) {
          this.player.template.menu.classList.add("dplayer-menu-show");
          var t3 = this.player.container.getBoundingClientRect();
          n4 + this.player.template.menu.offsetWidth >= t3.width ? (this.player.template.menu.style.right = t3.width - n4 + "px", this.player.template.menu.style.left = "initial") : (this.player.template.menu.style.left = n4 + "px", this.player.template.menu.style.right = "initial"), e4 + this.player.template.menu.offsetHeight >= t3.height ? (this.player.template.menu.style.bottom = t3.height - e4 + "px", this.player.template.menu.style.top = "initial") : (this.player.template.menu.style.top = e4 + "px", this.player.template.menu.style.bottom = "initial"), this.player.template.mask.classList.add("dplayer-mask-show"), this.shown = true, this.player.events.trigger("contextmenu_show");
        } }, { key: "hide", value: function() {
          this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.template.menu.classList.remove("dplayer-menu-show"), this.shown = false, this.player.events.trigger("contextmenu_hide");
        } }, { key: "destroy", value: function() {
          this.player.container.removeEventListener("contextmenu", this.contextmenuHandler);
        } }]) && za(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const qa = Ta;
      function Oa(n3) {
        return Oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Oa(n3);
      }
      function ja(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, (o2 = function(n4, e4) {
            if ("object" !== Oa(n4) || null === n4)
              return n4;
            var t3 = n4[Symbol.toPrimitive];
            if (void 0 !== t3) {
              var a3 = t3.call(n4, "string");
              if ("object" !== Oa(a3))
                return a3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(n4);
          }(a2.key), "symbol" === Oa(o2) ? o2 : String(o2)), a2);
        }
        var o2;
      }
      var Da = function() {
        function n3(e4) {
          var t3 = this;
          !function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, n3), this.container = e4.template.infoPanel, this.template = e4.template, this.video = e4.video, this.player = e4, this.template.infoPanelClose.addEventListener("click", function() {
            t3.hide();
          });
        }
        var e3, t2;
        return e3 = n3, (t2 = [{ key: "show", value: function() {
          this.beginTime = Date.now(), this.update(), this.player.timer.enable("info"), this.player.timer.enable("fps"), this.container.classList.remove("dplayer-info-panel-hide");
        } }, { key: "hide", value: function() {
          this.player.timer.disable("info"), this.player.timer.disable("fps"), this.container.classList.add("dplayer-info-panel-hide");
        } }, { key: "triggle", value: function() {
          this.container.classList.contains("dplayer-info-panel-hide") ? this.show() : this.hide();
        } }, { key: "update", value: function() {
          this.template.infoVersion.innerHTML = "v".concat("1.27.1", " ").concat("v1.27.0-12-g4f61091"), this.template.infoType.innerHTML = this.player.type, this.template.infoUrl.innerHTML = this.player.options.video.url, this.template.infoResolution.innerHTML = "".concat(this.player.video.videoWidth, " x ").concat(this.player.video.videoHeight), this.template.infoDuration.innerHTML = this.player.video.duration, this.player.options.danmaku && (this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id, this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api, this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length);
        } }, { key: "fps", value: function(n4) {
          this.template.infoFPS.innerHTML = "".concat(n4.toFixed(1));
        } }]) && ja(e3.prototype, t2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Pa = Da;
      var Ra = t(568), Ya = t.n(Ra);
      function Ma(n3) {
        return Ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n4) {
          return typeof n4;
        } : function(n4) {
          return n4 && "function" == typeof Symbol && n4.constructor === Symbol && n4 !== Symbol.prototype ? "symbol" : typeof n4;
        }, Ma(n3);
      }
      function Fa(n3, e3) {
        var t2 = Object.keys(n3);
        if (Object.getOwnPropertySymbols) {
          var a2 = Object.getOwnPropertySymbols(n3);
          e3 && (a2 = a2.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(n3, e4).enumerable;
          })), t2.push.apply(t2, a2);
        }
        return t2;
      }
      function Wa(n3, e3, t2) {
        return (e3 = Na(e3)) in n3 ? Object.defineProperty(n3, e3, { value: t2, enumerable: true, configurable: true, writable: true }) : n3[e3] = t2, n3;
      }
      function Ua(n3, e3) {
        for (var t2 = 0; t2 < e3.length; t2++) {
          var a2 = e3[t2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(n3, Na(a2.key), a2);
        }
      }
      function Na(n3) {
        var e3 = function(n4, e4) {
          if ("object" !== Ma(n4) || null === n4)
            return n4;
          var t2 = n4[Symbol.toPrimitive];
          if (void 0 !== t2) {
            var a2 = t2.call(n4, "string");
            if ("object" !== Ma(a2))
              return a2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n4);
        }(n3);
        return "symbol" === Ma(e3) ? e3 : String(e3);
      }
      var Qa = 0, Ha = [], _a = function() {
        function n3(e4) {
          var t3 = this;
          (function(n4, e5) {
            if (!(n4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          })(this, n3), this.options = function(n4) {
            var e5 = { container: n4.element || document.getElementsByClassName("dplayer")[0], live: false, autoplay: false, theme: "#b7daff", loop: false, lang: (navigator.language || navigator.browserLanguage).toLowerCase(), screenshot: false, airplay: true, chromecast: false, hotkey: true, preload: "metadata", volume: 0.7, playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], apiBackend: qe, video: {}, contextmenu: [], mutex: true, pluginOptions: { hls: {}, flv: {}, dash: {}, webtorrent: {} }, preventClickToggle: false };
            for (var t4 in e5)
              e5.hasOwnProperty(t4) && !n4.hasOwnProperty(t4) && (n4[t4] = e5[t4]);
            return n4.video && !n4.video.type && (n4.video.type = "auto"), "object" === Oe(n4.danmaku) && n4.danmaku && !n4.danmaku.user && (n4.danmaku.user = "DIYgod"), n4.subtitle && (!n4.subtitle.type && (n4.subtitle.type = "webvtt"), !n4.subtitle.fontSize && (n4.subtitle.fontSize = "20px"), !n4.subtitle.bottom && (n4.subtitle.bottom = "40px"), !n4.subtitle.color && (n4.subtitle.color = "#fff")), n4.video.quality && (n4.video.url = n4.video.quality[n4.video.defaultQuality].url), n4.lang && (n4.lang = n4.lang.toLowerCase()), n4.contextmenu = n4.contextmenu.concat([{ key: "video-info", click: function(n5) {
              n5.infoPanel.triggle();
            } }, { key: "about-author", link: "https://diygod.me" }, { text: "DPlayer v".concat("1.27.1"), link: "https://github.com/MoePlayer/DPlayer" }]), n4;
          }(function(n4) {
            for (var e5 = 1; e5 < arguments.length; e5++) {
              var t4 = null != arguments[e5] ? arguments[e5] : {};
              e5 % 2 ? Fa(Object(t4), true).forEach(function(e6) {
                Wa(n4, e6, t4[e6]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n4, Object.getOwnPropertyDescriptors(t4)) : Fa(Object(t4)).forEach(function(e6) {
                Object.defineProperty(n4, e6, Object.getOwnPropertyDescriptor(t4, e6));
              });
            }
            return n4;
          }({ preload: "webtorrent" === e4.video.type ? "none" : "metadata" }, e4)), this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality, this.quality = this.options.video.quality[this.options.video.defaultQuality]), this.tran = new je(this.options.lang).tran, this.events = new qt(), this.user = new Ft(this), this.container = this.options.container, this.noticeList = {}, this.container.classList.add("dplayer"), this.options.danmaku || this.container.classList.add("dplayer-no-danmaku"), this.options.live ? this.container.classList.add("dplayer-live") : this.container.classList.remove("dplayer-live"), T.isMobile && this.container.classList.add("dplayer-mobile"), this.arrow = this.container.offsetWidth <= 500, this.arrow && this.container.classList.add("dplayer-arrow"), this.options.subtitle && Array.isArray(this.options.subtitle.url) && (this.options.subtitle.url.push({ subtitle: "", lang: "off" }), this.options.subtitle.defaultSubtitle && ("string" == typeof this.options.subtitle.defaultSubtitle ? this.options.subtitle.index = this.options.subtitle.url.findIndex(function(n4) {
            return n4.lang === t3.options.subtitle.defaultSubtitle || n4.name === t3.options.subtitle.defaultSubtitle;
          }) : "number" == typeof this.options.subtitle.defaultSubtitle && (this.options.subtitle.index = this.options.subtitle.defaultSubtitle)), (-1 === this.options.subtitle.index || !this.options.subtitle.index || this.options.subtitle.index > this.options.subtitle.url.length - 1) && (this.options.subtitle.index = this.options.subtitle.url.findIndex(function(n4) {
            return n4.lang === t3.options.lang;
          })), -1 === this.options.subtitle.index && (this.options.subtitle.index = this.options.subtitle.url.length - 1)), this.template = new kt({ container: this.container, options: this.options, index: Qa, tran: this.tran }), this.video = this.template.video, this.bar = new Gt(this.template), this.bezel = new ra(this.template.bezel), this.fullScreen = new Pt(this), this.controller = new ha(this), this.options.danmaku && (this.danmaku = new Lt({ player: this, container: this.template.danmaku, opacity: this.user.get("opacity"), callback: function() {
            setTimeout(function() {
              t3.template.danmakuLoading.style.display = "none", t3.options.autoplay && t3.play();
            }, 0);
          }, error: function(n4) {
            t3.notice(n4);
          }, apiBackend: this.options.apiBackend, borderColor: this.options.theme, height: this.arrow ? 24 : 30, time: function() {
            return t3.video.currentTime;
          }, unlimited: this.user.get("unlimited"), api: { id: this.options.danmaku.id, address: this.options.danmaku.api, token: this.options.danmaku.token, maximum: this.options.danmaku.maximum, addition: this.options.danmaku.addition, user: this.options.danmaku.user, speedRate: this.options.danmaku.speedRate }, events: this.events, tran: function(n4) {
            return t3.tran(n4);
          } }), this.comment = new Ca(this)), this.setting = new va(this), this.plugins = {}, this.docClickFun = function() {
            t3.focus = false;
          }, this.containerClickFun = function() {
            t3.focus = true;
          }, document.addEventListener("click", this.docClickFun, true), this.container.addEventListener("click", this.containerClickFun, true), this.paused = true, this.timer = new ta(this), this.hotkey = new Ia(this), this.contextmenu = new qa(this), this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type), this.infoPanel = new Pa(this), !this.danmaku && this.options.autoplay && this.play(), Qa++, Ha.push(this);
        }
        var e3, t2, a2;
        return e3 = n3, t2 = [{ key: "seek", value: function(n4) {
          n4 = Math.max(n4, 0), this.video.duration && (n4 = Math.min(n4, this.video.duration)), this.video.currentTime < n4 ? this.notice("".concat(this.tran("ff").replace("%s", (n4 - this.video.currentTime).toFixed(0)))) : this.video.currentTime > n4 && this.notice("".concat(this.tran("rew").replace("%s", (this.video.currentTime - n4).toFixed(0)))), this.video.currentTime = n4, this.danmaku && this.danmaku.seek(), this.bar.set("played", n4 / this.video.duration, "width"), this.template.ptime.innerHTML = T.secondToTime(n4);
        } }, { key: "play", value: function(n4) {
          var e4 = this;
          if (this.paused = false, this.video.paused && !T.isMobile && this.bezel.switch(gt.play), this.template.playButton.innerHTML = gt.pause, this.template.mobilePlayButton.innerHTML = gt.pause, n4 || L.resolve(this.video.play()).catch(function() {
            e4.pause();
          }).then(function() {
          }), this.timer.enable("loading"), this.container.classList.remove("dplayer-paused"), this.container.classList.add("dplayer-playing"), this.danmaku && this.danmaku.play(), this.options.mutex)
            for (var t3 = 0; t3 < Ha.length; t3++)
              this !== Ha[t3] && Ha[t3].pause();
        } }, { key: "pause", value: function(n4) {
          this.paused = true, this.container.classList.remove("dplayer-loading"), this.video.paused || T.isMobile || this.bezel.switch(gt.pause), this.template.playButton.innerHTML = gt.play, this.template.mobilePlayButton.innerHTML = gt.play, n4 || this.video.pause(), this.timer.disable("loading"), this.container.classList.remove("dplayer-playing"), this.container.classList.add("dplayer-paused"), this.danmaku && this.danmaku.pause();
        } }, { key: "switchVolumeIcon", value: function() {
          this.volume() >= 0.95 ? this.template.volumeIcon.innerHTML = gt.volumeUp : this.volume() > 0 ? this.template.volumeIcon.innerHTML = gt.volumeDown : this.template.volumeIcon.innerHTML = gt.volumeOff;
        } }, { key: "volume", value: function(n4, e4, t3) {
          if (n4 = parseFloat(n4), !isNaN(n4)) {
            n4 = Math.max(n4, 0), n4 = Math.min(n4, 1), this.bar.set("volume", n4, "width");
            var a3 = "".concat((100 * n4).toFixed(0), "%");
            this.template.volumeBarWrapWrap.dataset.balloon = a3, e4 || this.user.set("volume", n4), t3 || this.notice("".concat(this.tran("volume"), " ").concat((100 * n4).toFixed(0), "%"), void 0, void 0, "volume"), this.video.volume = n4, this.video.muted && (this.video.muted = false), this.switchVolumeIcon();
          }
          return this.video.volume;
        } }, { key: "toggle", value: function() {
          this.video.paused ? this.play() : this.pause();
        } }, { key: "on", value: function(n4, e4) {
          this.events.on(n4, e4);
        } }, { key: "switchVideo", value: function(n4, e4) {
          this.pause(), this.video.poster = n4.pic ? n4.pic : "", this.video.src = n4.url, this.initMSE(this.video, n4.type || "auto"), e4 && (this.template.danmakuLoading.style.display = "block", this.bar.set("played", 0, "width"), this.bar.set("loaded", 0, "width"), this.template.ptime.innerHTML = "00:00", this.template.danmaku.innerHTML = "", this.danmaku && this.danmaku.reload({ id: e4.id, address: e4.api, token: e4.token, maximum: e4.maximum, addition: e4.addition, user: e4.user }));
        } }, { key: "initMSE", value: function(n4, e4) {
          var t3 = this;
          if (this.type = e4, this.options.video.customType && this.options.video.customType[e4])
            "[object Function]" === Object.prototype.toString.call(this.options.video.customType[e4]) ? this.options.video.customType[e4](this.video, this) : console.error("Illegal customType: ".concat(e4));
          else
            switch ("auto" === this.type && (/m3u8(#|\?|$)/i.exec(n4.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(n4.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(n4.src) ? this.type = "dash" : this.type = "normal"), "hls" === this.type && (n4.canPlayType("application/x-mpegURL") || n4.canPlayType("application/vnd.apple.mpegURL")) && (this.type = "normal"), this.type) {
              case "hls":
                if (window.Hls)
                  if (window.Hls.isSupported()) {
                    var a3 = this.options.pluginOptions.hls, o2 = new window.Hls(a3);
                    this.plugins.hls = o2, o2.loadSource(n4.src), o2.attachMedia(n4), this.events.on("destroy", function() {
                      o2.destroy(), delete t3.plugins.hls;
                    });
                  } else
                    this.notice("Error: Hls is not supported.");
                else
                  this.notice("Error: Can't find Hls.");
                break;
              case "flv":
                if (window.flvjs)
                  if (window.flvjs.isSupported()) {
                    var r2 = window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, { type: "flv", url: n4.src }), this.options.pluginOptions.flv.config);
                    this.plugins.flvjs = r2, r2.attachMediaElement(n4), r2.load(), this.events.on("destroy", function() {
                      r2.unload(), r2.detachMediaElement(), r2.destroy(), delete t3.plugins.flvjs;
                    });
                  } else
                    this.notice("Error: flvjs is not supported.");
                else
                  this.notice("Error: Can't find flvjs.");
                break;
              case "dash":
                if (window.dashjs) {
                  var i2 = window.dashjs.MediaPlayer().create().initialize(n4, n4.src, false), l2 = this.options.pluginOptions.dash;
                  i2.updateSettings(l2), this.plugins.dash = i2, this.events.on("destroy", function() {
                    window.dashjs.MediaPlayer().reset(), delete t3.plugins.dash;
                  });
                } else
                  this.notice("Error: Can't find dashjs.");
                break;
              case "webtorrent":
                if (window.WebTorrent)
                  if (window.WebTorrent.WEBRTC_SUPPORT) {
                    this.container.classList.add("dplayer-loading");
                    var s2 = this.options.pluginOptions.webtorrent, p2 = new window.WebTorrent(s2);
                    this.plugins.webtorrent = p2;
                    var d2 = n4.src;
                    n4.src = "", n4.preload = "metadata", n4.addEventListener("durationchange", function() {
                      return t3.container.classList.remove("dplayer-loading");
                    }, { once: true }), p2.add(d2, function(n5) {
                      n5.files.find(function(n6) {
                        return n6.name.endsWith(".mp4");
                      }).renderTo(t3.video, { autoplay: t3.options.autoplay, controls: false });
                    }), this.events.on("destroy", function() {
                      p2.remove(d2), p2.destroy(), delete t3.plugins.webtorrent;
                    });
                  } else
                    this.notice("Error: Webtorrent is not supported.");
                else
                  this.notice("Error: Can't find Webtorrent.");
            }
        } }, { key: "initVideo", value: function(n4, e4) {
          var t3 = this;
          this.initMSE(n4, e4), this.on("durationchange", function() {
            1 !== n4.duration && n4.duration !== 1 / 0 && (t3.template.dtime.innerHTML = T.secondToTime(n4.duration));
          }), this.on("progress", function() {
            var e5 = n4.buffered.length ? n4.buffered.end(n4.buffered.length - 1) / n4.duration : 0;
            t3.bar.set("loaded", e5, "width");
          }), this.on("error", function() {
            t3.video.error && t3.tran && t3.notice && "webtorrent" !== t3.type && t3.notice(t3.tran("video-failed"));
          }), this.on("ended", function() {
            t3.bar.set("played", 1, "width"), t3.setting.loop ? (t3.seek(0), t3.play()) : t3.pause(), t3.danmaku && (t3.danmaku.danIndex = 0);
          }), this.on("play", function() {
            t3.paused && t3.play(true);
          }), this.on("pause", function() {
            t3.paused || t3.pause(true);
          }), this.on("timeupdate", function() {
            t3.bar.set("played", t3.video.currentTime / t3.video.duration, "width");
            var n5 = T.secondToTime(t3.video.currentTime);
            t3.template.ptime.innerHTML !== n5 && (t3.template.ptime.innerHTML = n5);
          });
          for (var a3 = function(e5) {
            n4.addEventListener(t3.events.videoEvents[e5], function(n5) {
              t3.events.trigger(t3.events.videoEvents[e5], n5);
            });
          }, o2 = 0; o2 < this.events.videoEvents.length; o2++)
            a3(o2);
          this.volume(this.user.get("volume"), true, true), this.options.subtitle && (this.subtitle = new Qt(this.template.subtitle, this.video, this.options.subtitle, this.events), Array.isArray(this.options.subtitle.url) && (this.subtitles = new Zt(this)), this.user.get("subtitle") || this.subtitle.hide());
        } }, { key: "switchQuality", value: function(n4) {
          var e4 = this;
          if (n4 = "string" == typeof n4 ? parseInt(n4) : n4, this.qualityIndex !== n4 && !this.switchingQuality) {
            this.prevIndex = this.qualityIndex, this.qualityIndex = n4, this.switchingQuality = true, this.quality = this.options.video.quality[n4], this.template.qualityButton.innerHTML = this.quality.name;
            var t3 = this.video.paused;
            this.video.pause();
            var a3 = Ya()({ current: false, pic: null, screenshot: this.options.screenshot, preload: "auto", url: this.quality.url, subtitle: this.options.subtitle }), o2 = new DOMParser().parseFromString(a3, "text/html").body.firstChild;
            this.template.videoWrap.insertBefore(o2, this.template.videoWrap.getElementsByTagName("div")[0]), this.prevVideo = this.video, this.video = o2, this.initVideo(this.video, this.quality.type || this.options.video.type), this.seek(this.prevVideo.currentTime), this.notice("".concat(this.tran("switching-quality").replace("%q", this.quality.name)), -1, void 0, "switch-quality"), this.events.trigger("quality_start", this.quality), this.on("canplay", function() {
              if (e4.prevVideo) {
                if (e4.video.currentTime !== e4.prevVideo.currentTime)
                  return void e4.seek(e4.prevVideo.currentTime);
                e4.template.videoWrap.removeChild(e4.prevVideo), e4.video.classList.add("dplayer-video-current"), t3 || e4.video.play(), e4.prevVideo = null, e4.notice("".concat(e4.tran("switched-quality").replace("%q", e4.quality.name)), void 0, void 0, "switch-quality"), e4.switchingQuality = false, e4.events.trigger("quality_end");
              }
            }), this.on("error", function() {
              e4.video.error && e4.prevVideo && (e4.template.videoWrap.removeChild(e4.video), e4.video = e4.prevVideo, t3 || e4.video.play(), e4.qualityIndex = e4.prevIndex, e4.quality = e4.options.video.quality[e4.qualityIndex], e4.noticeTime = setTimeout(function() {
                e4.template.notice.style.opacity = 0, e4.events.trigger("notice_hide");
              }, 3e3), e4.prevVideo = null, e4.switchingQuality = false);
            });
          }
        } }, { key: "notice", value: function(n4) {
          var e4, t3, a3, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.8, i2 = arguments.length > 3 ? arguments[3] : void 0;
          if (i2 && ((e4 = document.getElementById("dplayer-notice-".concat(i2))) && (e4.innerHTML = n4), this.noticeList[i2] && (clearTimeout(this.noticeList[i2]), this.noticeList[i2] = null)), !e4) {
            var l2 = kt.NewNotice(n4, r2, i2);
            this.template.noticeList.appendChild(l2), e4 = l2;
          }
          this.events.trigger("notice_show", e4), o2 > 0 && (this.noticeList[i2] = setTimeout((t3 = e4, a3 = this, function() {
            t3.addEventListener("animationend", function() {
              a3.template.noticeList.removeChild(t3);
            }), t3.classList.add("remove-notice"), a3.events.trigger("notice_hide"), a3.noticeList[i2] = null;
          }), o2));
        } }, { key: "resize", value: function() {
          this.danmaku && this.danmaku.resize(), this.controller.thumbnails && this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth), this.events.trigger("resize");
        } }, { key: "speed", value: function(n4) {
          this.video.playbackRate = n4;
        } }, { key: "destroy", value: function() {
          Ha.splice(Ha.indexOf(this), 1), this.pause(), document.removeEventListener("click", this.docClickFun, true), this.container.removeEventListener("click", this.containerClickFun, true), this.fullScreen.destroy(), this.hotkey.destroy(), this.contextmenu.destroy(), this.controller.destroy(), this.timer.destroy(), this.video.src = "", this.container.innerHTML = "", this.events.trigger("destroy");
        } }], a2 = [{ key: "version", get: function() {
          return "1.27.1";
        } }], t2 && Ua(e3.prototype, t2), a2 && Ua(e3, a2), Object.defineProperty(e3, "prototype", { writable: false }), n3;
      }();
      const Ka = _a;
      console.log("\n".concat(" %c DPlayer v", "1.27.1", " ").concat("v1.27.0-12-g4f61091", " %c https://dplayer.diygod.dev ", "\n", "\n"), "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
      const Za = Ka;
    })(), a.default;
  })());
})(DPlayer_min);
var DPlayer_minExports = DPlayer_min.exports;
const DPlayer = /* @__PURE__ */ getDefaultExportFromCjs(DPlayer_minExports);
const viewer = "";
/*!
 * Viewer.js v1.11.6
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-09-17T03:16:38.052Z
 */
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var DEFAULTS = {
  /**
   * Enable a modal backdrop, specify `static` for a backdrop
   * which doesn't close the modal on click.
   * @type {boolean}
   */
  backdrop: true,
  /**
   * Show the button on the top-right of the viewer.
   * @type {boolean}
   */
  button: true,
  /**
   * Show the navbar.
   * @type {boolean | number}
   */
  navbar: true,
  /**
   * Specify the visibility and the content of the title.
   * @type {boolean | number | Function | Array}
   */
  title: true,
  /**
   * Show the toolbar.
   * @type {boolean | number | Object}
   */
  toolbar: true,
  /**
   * Custom class name(s) to add to the viewer's root element.
   * @type {string}
   */
  className: "",
  /**
   * Define where to put the viewer in modal mode.
   * @type {string | Element}
   */
  container: "body",
  /**
   * Filter the images for viewing. Return true if the image is viewable.
   * @type {Function}
   */
  filter: null,
  /**
   * Enable to request fullscreen when play.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
   * @type {boolean|FullscreenOptions}
   */
  fullscreen: true,
  /**
   * Define the extra attributes to inherit from the original image.
   * @type {Array}
   */
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  /**
   * Define the initial coverage of the viewing image.
   * @type {number}
   */
  initialCoverage: 0.9,
  /**
   * Define the initial index of the image for viewing.
   * @type {number}
   */
  initialViewIndex: 0,
  /**
   * Enable inline mode.
   * @type {boolean}
   */
  inline: false,
  /**
   * The amount of time to delay between automatically cycling an image when playing.
   * @type {number}
   */
  interval: 5e3,
  /**
   * Enable keyboard support.
   * @type {boolean}
   */
  keyboard: true,
  /**
   * Focus the viewer when initialized.
   * @type {boolean}
   */
  focus: true,
  /**
   * Indicate if show a loading spinner when load image or not.
   * @type {boolean}
   */
  loading: true,
  /**
   * Indicate if enable loop viewing or not.
   * @type {boolean}
   */
  loop: true,
  /**
   * Min width of the viewer in inline mode.
   * @type {number}
   */
  minWidth: 200,
  /**
   * Min height of the viewer in inline mode.
   * @type {number}
   */
  minHeight: 100,
  /**
   * Enable to move the image.
   * @type {boolean}
   */
  movable: true,
  /**
   * Enable to rotate the image.
   * @type {boolean}
   */
  rotatable: true,
  /**
   * Enable to scale the image.
   * @type {boolean}
   */
  scalable: true,
  /**
   * Enable to zoom the image.
   * @type {boolean}
   */
  zoomable: true,
  /**
   * Enable to zoom the current image by dragging on the touch screen.
   * @type {boolean}
   */
  zoomOnTouch: true,
  /**
   * Enable to zoom the image by wheeling mouse.
   * @type {boolean}
   */
  zoomOnWheel: true,
  /**
   * Enable to slide to the next or previous image by swiping on the touch screen.
   * @type {boolean}
   */
  slideOnTouch: true,
  /**
   * Indicate if toggle the image size between its natural size
   * and initial size when double click on the image or not.
   * @type {boolean}
   */
  toggleOnDblclick: true,
  /**
   * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
   * @type {boolean}
   */
  tooltip: true,
  /**
   * Enable CSS3 Transition for some special elements.
   * @type {boolean}
   */
  transition: true,
  /**
   * Define the CSS `z-index` value of viewer in modal mode.
   * @type {number}
   */
  zIndex: 2015,
  /**
   * Define the CSS `z-index` value of viewer in inline mode.
   * @type {number}
   */
  zIndexInline: 0,
  /**
   * Define the ratio when zoom the image by wheeling mouse.
   * @type {number}
   */
  zoomRatio: 0.1,
  /**
   * Define the min ratio of the image when zoom out.
   * @type {number}
   */
  minZoomRatio: 0.01,
  /**
   * Define the max ratio of the image when zoom in.
   * @type {number}
   */
  maxZoomRatio: 100,
  /**
   * Define where to get the original image URL for viewing.
   * @type {string | Function}
   */
  url: "src",
  /**
   * Event shortcuts.
   * @type {Function}
   */
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
};
var TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
var NAMESPACE = "viewer";
var ACTION_MOVE = "move";
var ACTION_SWITCH = "switch";
var ACTION_ZOOM = "zoom";
var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
var CLASS_FADE = "".concat(NAMESPACE, "-fade");
var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
var CLASS_IN = "".concat(NAMESPACE, "-in");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
var CLASS_MOVE = "".concat(NAMESPACE, "-move");
var CLASS_OPEN = "".concat(NAMESPACE, "-open");
var CLASS_SHOW = "".concat(NAMESPACE, "-show");
var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");
var EVENT_CLICK = "click";
var EVENT_DBLCLICK = "dblclick";
var EVENT_DRAG_START = "dragstart";
var EVENT_FOCUSIN = "focusin";
var EVENT_KEY_DOWN = "keydown";
var EVENT_LOAD = "load";
var EVENT_ERROR = "error";
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
var EVENT_RESIZE = "resize";
var EVENT_TRANSITION_END = "transitionend";
var EVENT_WHEEL = "wheel";
var EVENT_READY = "ready";
var EVENT_SHOW = "show";
var EVENT_SHOWN = "shown";
var EVENT_HIDE = "hide";
var EVENT_HIDDEN = "hidden";
var EVENT_VIEW = "view";
var EVENT_VIEWED = "viewed";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_ROTATE = "rotate";
var EVENT_ROTATED = "rotated";
var EVENT_SCALE = "scale";
var EVENT_SCALED = "scaled";
var EVENT_ZOOM = "zoom";
var EVENT_ZOOMED = "zoomed";
var EVENT_PLAY = "play";
var EVENT_STOP = "stop";
var DATA_ACTION = "".concat(NAMESPACE, "Action");
var REGEXP_SPACES = /\s\s*/;
var BUTTONS = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function isString(value) {
  return typeof value === "string";
}
var isNaN$1 = Number.isNaN || WINDOW.isNaN;
function isNumber(value) {
  return typeof value === "number" && !isNaN$1(value);
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}
var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty$6.call(prototype, "isPrototypeOf");
  } catch (error) {
    return false;
  }
}
function isFunction$3(value) {
  return typeof value === "function";
}
function forEach(data, callback) {
  if (data && isFunction$3(callback)) {
    if (Array.isArray(data) || isNumber(data.length)) {
      var length = data.length;
      var i;
      for (i = 0; i < length; i += 1) {
        if (callback.call(data, data[i], i, data) === false) {
          break;
        }
      }
    } else if (isObject(data)) {
      Object.keys(data).forEach(function(key) {
        callback.call(data, data[key], key, data);
      });
    }
  }
  return data;
}
var assign = Object.assign || function assign2(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isObject(obj) && args.length > 0) {
    args.forEach(function(arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function(key) {
          obj[key] = arg[key];
        });
      }
    });
  }
  return obj;
};
var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function(value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value += "px";
    }
    style[property] = value;
  });
}
function escapeHTMLEntities(value) {
  return isString(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : value;
}
function hasClass(element, value) {
  if (!element || !value) {
    return false;
  }
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
function addClass(element, value) {
  if (!element || !value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      addClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.add(value);
    return;
  }
  var className = element.className.trim();
  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
function removeClass(element, value) {
  if (!element || !value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      removeClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.remove(value);
    return;
  }
  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, "");
  }
}
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      toggleClass(elem, value, added);
    });
    return;
  }
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
function hyphenate(value) {
  return value.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase();
}
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }
  if (element.dataset) {
    return element.dataset[name];
  }
  return element.getAttribute("data-".concat(hyphenate(name)));
}
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(hyphenate(name)), data);
  }
}
var onceSupported = function() {
  var supported = false;
  if (IS_BROWSER) {
    var once = false;
    var listener = function listener2() {
    };
    var options = Object.defineProperty({}, "once", {
      get: function get() {
        supported = true;
        return once;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener("test", listener, options);
    WINDOW.removeEventListener("test", listener, options);
  }
  return supported;
}();
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (!onceSupported) {
      var listeners = element.listeners;
      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];
        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }
        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }
    element.removeEventListener(event, handler, options);
  });
}
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        listener.apply(element, args);
      };
      if (!listeners[event]) {
        listeners[event] = {};
      }
      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }
      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }
    element.addEventListener(event, _handler, options);
  });
}
function dispatchEvent(element, type, data, options) {
  var event;
  if (isFunction$3(Event) && isFunction$3(CustomEvent)) {
    event = new CustomEvent(type, _objectSpread2({
      bubbles: true,
      cancelable: true,
      detail: data
    }, options));
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, data);
  }
  return element.dispatchEvent(event);
}
function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function getTransforms(_ref) {
  var rotate2 = _ref.rotate, scaleX2 = _ref.scaleX, scaleY2 = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
  var values = [];
  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }
  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  }
  if (isNumber(rotate2) && rotate2 !== 0) {
    values.push("rotate(".concat(rotate2, "deg)"));
  }
  if (isNumber(scaleX2) && scaleX2 !== 1) {
    values.push("scaleX(".concat(scaleX2, ")"));
  }
  if (isNumber(scaleY2) && scaleY2 !== 1) {
    values.push("scaleY(".concat(scaleY2, ")"));
  }
  var transform = values.length ? values.join(" ") : "none";
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform
  };
}
function getImageNameFromURL(url) {
  return isString(url) ? decodeURIComponent(url.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var IS_SAFARI = WINDOW.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(WINDOW.navigator.userAgent);
function getImageNaturalSizes(image, options, callback) {
  var newImage = document.createElement("img");
  if (image.naturalWidth && !IS_SAFARI) {
    callback(image.naturalWidth, image.naturalHeight);
    return newImage;
  }
  var body = document.body || document.documentElement;
  newImage.onload = function() {
    callback(newImage.width, newImage.height);
    if (!IS_SAFARI) {
      body.removeChild(newImage);
    }
  };
  forEach(options.inheritedAttributes, function(name) {
    var value = image.getAttribute(name);
    if (value !== null) {
      newImage.setAttribute(name, value);
    }
  });
  newImage.src = image.src;
  if (!IS_SAFARI) {
    newImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
    body.appendChild(newImage);
  }
  return newImage;
}
function getResponsiveClass(type) {
  switch (type) {
    case 2:
      return CLASS_HIDE_XS_DOWN;
    case 3:
      return CLASS_HIDE_SM_DOWN;
    case 4:
      return CLASS_HIDE_MD_DOWN;
    default:
      return "";
  }
}
function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);
  var ratios = [];
  forEach(pointers, function(pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function(pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      ratios.push(ratio);
    });
  });
  ratios.sort(function(a, b) {
    return Math.abs(a) < Math.abs(b);
  });
  return ratios[0];
}
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX, pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    timeStamp: Date.now(),
    startX: pageX,
    startY: pageY
  }, end);
}
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function(_ref3) {
    var startX = _ref3.startX, startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX,
    pageY
  };
}
var render = {
  render: function render2() {
    this.initContainer();
    this.initViewer();
    this.initList();
    this.renderViewer();
  },
  initBody: function initBody() {
    var ownerDocument = this.element.ownerDocument;
    var body = ownerDocument.body || ownerDocument.documentElement;
    this.body = body;
    this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
    this.initialBodyPaddingRight = body.style.paddingRight;
    this.initialBodyComputedPaddingRight = window.getComputedStyle(body).paddingRight;
  },
  initContainer: function initContainer() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function initViewer() {
    var options = this.options, parent = this.parent;
    var viewerData;
    if (options.inline) {
      viewerData = {
        width: Math.max(parent.offsetWidth, options.minWidth),
        height: Math.max(parent.offsetHeight, options.minHeight)
      };
      this.parentData = viewerData;
    }
    if (this.fulled || !viewerData) {
      viewerData = this.containerData;
    }
    this.viewerData = assign({}, viewerData);
  },
  renderViewer: function renderViewer() {
    if (this.options.inline && !this.fulled) {
      setStyle(this.viewer, this.viewerData);
    }
  },
  initList: function initList() {
    var _this = this;
    var element = this.element, options = this.options, list = this.list;
    var items = [];
    list.innerHTML = "";
    forEach(this.images, function(image, index) {
      var src = image.src;
      var alt = image.alt || getImageNameFromURL(src);
      var url = _this.getImageURL(image);
      if (src || url) {
        var item = document.createElement("li");
        var img = document.createElement("img");
        forEach(options.inheritedAttributes, function(name) {
          var value = image.getAttribute(name);
          if (value !== null) {
            img.setAttribute(name, value);
          }
        });
        if (options.navbar) {
          img.src = src || url;
        }
        img.alt = alt;
        img.setAttribute("data-original-url", url || src);
        item.setAttribute("data-index", index);
        item.setAttribute("data-viewer-action", "view");
        item.setAttribute("role", "button");
        if (options.keyboard) {
          item.setAttribute("tabindex", 0);
        }
        item.appendChild(img);
        list.appendChild(item);
        items.push(item);
      }
    });
    this.items = items;
    forEach(items, function(item) {
      var image = item.firstElementChild;
      var onLoad;
      var onError;
      setData(image, "filled", true);
      if (options.loading) {
        addClass(item, CLASS_LOADING);
      }
      addListener(image, EVENT_LOAD, onLoad = function onLoad2(event) {
        removeListener(image, EVENT_ERROR, onError);
        if (options.loading) {
          removeClass(item, CLASS_LOADING);
        }
        _this.loadImage(event);
      }, {
        once: true
      });
      addListener(image, EVENT_ERROR, onError = function onError2() {
        removeListener(image, EVENT_LOAD, onLoad);
        if (options.loading) {
          removeClass(item, CLASS_LOADING);
        }
      }, {
        once: true
      });
    });
    if (options.transition) {
      addListener(element, EVENT_VIEWED, function() {
        addClass(list, CLASS_TRANSITION);
      }, {
        once: true
      });
    }
  },
  renderList: function renderList() {
    var index = this.index;
    var item = this.items[index];
    if (!item) {
      return;
    }
    var next2 = item.nextElementSibling;
    var gutter = parseInt(window.getComputedStyle(next2 || item).marginLeft, 10);
    var offsetWidth = item.offsetWidth;
    var outerWidth = offsetWidth + gutter;
    setStyle(this.list, assign({
      width: outerWidth * this.length - gutter
    }, getTransforms({
      translateX: (this.viewerData.width - offsetWidth) / 2 - outerWidth * index
    })));
  },
  resetList: function resetList() {
    var list = this.list;
    list.innerHTML = "";
    removeClass(list, CLASS_TRANSITION);
    setStyle(list, getTransforms({
      translateX: 0
    }));
  },
  initImage: function initImage(done) {
    var _this2 = this;
    var options = this.options, image = this.image, viewerData = this.viewerData;
    var footerHeight = this.footer.offsetHeight;
    var viewerWidth = viewerData.width;
    var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
    var oldImageData = this.imageData || {};
    var sizingImage;
    this.imageInitializing = {
      abort: function abort() {
        sizingImage.onload = null;
      }
    };
    sizingImage = getImageNaturalSizes(image, options, function(naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var initialCoverage = Math.max(0, Math.min(1, options.initialCoverage));
      var width = viewerWidth;
      var height = viewerHeight;
      _this2.imageInitializing = false;
      if (viewerHeight * aspectRatio > viewerWidth) {
        height = viewerWidth / aspectRatio;
      } else {
        width = viewerHeight * aspectRatio;
      }
      initialCoverage = isNumber(initialCoverage) ? initialCoverage : 0.9;
      width = Math.min(width * initialCoverage, naturalWidth);
      height = Math.min(height * initialCoverage, naturalHeight);
      var left = (viewerWidth - width) / 2;
      var top = (viewerHeight - height) / 2;
      var imageData = {
        left,
        top,
        x: left,
        y: top,
        width,
        height,
        oldRatio: 1,
        ratio: width / naturalWidth,
        aspectRatio,
        naturalWidth,
        naturalHeight
      };
      var initialImageData = assign({}, imageData);
      if (options.rotatable) {
        imageData.rotate = oldImageData.rotate || 0;
        initialImageData.rotate = 0;
      }
      if (options.scalable) {
        imageData.scaleX = oldImageData.scaleX || 1;
        imageData.scaleY = oldImageData.scaleY || 1;
        initialImageData.scaleX = 1;
        initialImageData.scaleY = 1;
      }
      _this2.imageData = imageData;
      _this2.initialImageData = initialImageData;
      if (done) {
        done();
      }
    });
  },
  renderImage: function renderImage(done) {
    var _this3 = this;
    var image = this.image, imageData = this.imageData;
    setStyle(image, assign({
      width: imageData.width,
      height: imageData.height,
      // XXX: Not to use translateX/Y to avoid image shaking when zooming
      marginLeft: imageData.x,
      marginTop: imageData.y
    }, getTransforms(imageData)));
    if (done) {
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(image, CLASS_TRANSITION)) {
        var onTransitionEnd = function onTransitionEnd2() {
          _this3.imageRendering = false;
          done();
        };
        this.imageRendering = {
          abort: function abort() {
            removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
          }
        };
        addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
          once: true
        });
      } else {
        done();
      }
    }
  },
  resetImage: function resetImage() {
    var image = this.image;
    if (image) {
      if (this.viewing) {
        this.viewing.abort();
      }
      image.parentNode.removeChild(image);
      this.image = null;
      this.title.innerHTML = "";
    }
  }
};
var events = {
  bind: function bind() {
    var options = this.options, viewer2 = this.viewer, canvas = this.canvas;
    var document2 = this.element.ownerDocument;
    addListener(viewer2, EVENT_CLICK, this.onClick = this.click.bind(this));
    addListener(viewer2, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
    addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
    addListener(document2, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
    addListener(document2, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
    addListener(document2, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
    addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    if (options.zoomable && options.zoomOnWheel) {
      addListener(viewer2, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }
    if (options.toggleOnDblclick) {
      addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }
  },
  unbind: function unbind() {
    var options = this.options, viewer2 = this.viewer, canvas = this.canvas;
    var document2 = this.element.ownerDocument;
    removeListener(viewer2, EVENT_CLICK, this.onClick);
    removeListener(viewer2, EVENT_DRAG_START, this.onDragStart);
    removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
    removeListener(document2, EVENT_POINTER_MOVE, this.onPointerMove);
    removeListener(document2, EVENT_POINTER_UP, this.onPointerUp);
    removeListener(document2, EVENT_KEY_DOWN, this.onKeyDown);
    removeListener(window, EVENT_RESIZE, this.onResize);
    if (options.zoomable && options.zoomOnWheel) {
      removeListener(viewer2, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }
    if (options.toggleOnDblclick) {
      removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
    }
  }
};
var handlers = {
  click: function click(event) {
    var options = this.options, imageData = this.imageData;
    var target = event.target;
    var action = getData(target, DATA_ACTION);
    if (!action && target.localName === "img" && target.parentElement.localName === "li") {
      target = target.parentElement;
      action = getData(target, DATA_ACTION);
    }
    if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
      clearTimeout(this.clickCanvasTimeout);
    }
    switch (action) {
      case "mix":
        if (this.played) {
          this.stop();
        } else if (options.inline) {
          if (this.fulled) {
            this.exit();
          } else {
            this.full();
          }
        } else {
          this.hide();
        }
        break;
      case "hide":
        if (!this.pointerMoved) {
          this.hide();
        }
        break;
      case "view":
        this.view(getData(target, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, true);
        break;
      case "zoom-out":
        this.zoom(-0.1, true);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(options.loop);
        break;
      case "play":
        this.play(options.fullscreen);
        break;
      case "next":
        this.next(options.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-imageData.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-imageData.scaleY || -1);
        break;
      default:
        if (this.played) {
          this.stop();
        }
    }
  },
  dblclick: function dblclick(event) {
    event.preventDefault();
    if (this.viewed && event.target === this.image) {
      if (IS_TOUCH_DEVICE && event.isTrusted) {
        clearTimeout(this.doubleClickImageTimeout);
      }
      this.toggle(event.isTrusted ? event : event.detail && event.detail.originalEvent);
    }
  },
  load: function load() {
    var _this = this;
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = false;
    }
    var element = this.element, options = this.options, image = this.image, index = this.index, viewerData = this.viewerData;
    removeClass(image, CLASS_INVISIBLE);
    if (options.loading) {
      removeClass(this.canvas, CLASS_LOADING);
    }
    image.style.cssText = "height:0;" + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + "max-width:none!important;position:relative;width:0;";
    this.initImage(function() {
      toggleClass(image, CLASS_MOVE, options.movable);
      toggleClass(image, CLASS_TRANSITION, options.transition);
      _this.renderImage(function() {
        _this.viewed = true;
        _this.viewing = false;
        if (isFunction$3(options.viewed)) {
          addListener(element, EVENT_VIEWED, options.viewed, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_VIEWED, {
          originalImage: _this.images[index],
          index,
          image
        }, {
          cancelable: false
        });
      });
    });
  },
  loadImage: function loadImage(event) {
    var image = event.target;
    var parent = image.parentNode;
    var parentWidth = parent.offsetWidth || 30;
    var parentHeight = parent.offsetHeight || 50;
    var filled = !!getData(image, "filled");
    getImageNaturalSizes(image, this.options, function(naturalWidth, naturalHeight) {
      var aspectRatio = naturalWidth / naturalHeight;
      var width = parentWidth;
      var height = parentHeight;
      if (parentHeight * aspectRatio > parentWidth) {
        if (filled) {
          width = parentHeight * aspectRatio;
        } else {
          height = parentWidth / aspectRatio;
        }
      } else if (filled) {
        height = parentWidth / aspectRatio;
      } else {
        width = parentHeight * aspectRatio;
      }
      setStyle(image, assign({
        width,
        height
      }, getTransforms({
        translateX: (parentWidth - width) / 2,
        translateY: (parentHeight - height) / 2
      })));
    });
  },
  keydown: function keydown(event) {
    var options = this.options;
    if (!options.keyboard) {
      return;
    }
    var keyCode = event.keyCode || event.which || event.charCode;
    switch (keyCode) {
      case 13:
        if (this.viewer.contains(event.target)) {
          this.click(event);
        }
        break;
    }
    if (!this.fulled) {
      return;
    }
    switch (keyCode) {
      case 27:
        if (this.played) {
          this.stop();
        } else if (options.inline) {
          if (this.fulled) {
            this.exit();
          }
        } else {
          this.hide();
        }
        break;
      case 32:
        if (this.played) {
          this.stop();
        }
        break;
      case 37:
        if (this.played && this.playing) {
          this.playing.prev();
        } else {
          this.prev(options.loop);
        }
        break;
      case 38:
        event.preventDefault();
        this.zoom(options.zoomRatio, true);
        break;
      case 39:
        if (this.played && this.playing) {
          this.playing.next();
        } else {
          this.next(options.loop);
        }
        break;
      case 40:
        event.preventDefault();
        this.zoom(-options.zoomRatio, true);
        break;
      case 48:
      case 49:
        if (event.ctrlKey) {
          event.preventDefault();
          this.toggle();
        }
        break;
    }
  },
  dragstart: function dragstart(event) {
    if (event.target.localName === "img") {
      event.preventDefault();
    }
  },
  pointerdown: function pointerdown(event) {
    var options = this.options, pointers = this.pointers;
    var buttons = event.buttons, button = event.button;
    this.pointerMoved = false;
    if (!this.viewed || this.showing || this.viewing || this.hiding || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
    (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
      return;
    }
    event.preventDefault();
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      pointers[event.pointerId || 0] = getPointer(event);
    }
    var action = options.movable ? ACTION_MOVE : false;
    if (options.zoomOnTouch && options.zoomable && Object.keys(pointers).length > 1) {
      action = ACTION_ZOOM;
    } else if (options.slideOnTouch && (event.pointerType === "touch" || event.type === "touchstart") && this.isSwitchable()) {
      action = ACTION_SWITCH;
    }
    if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
      removeClass(this.image, CLASS_TRANSITION);
    }
    this.action = action;
  },
  pointermove: function pointermove(event) {
    var pointers = this.pointers, action = this.action;
    if (!this.viewed || !action) {
      return;
    }
    event.preventDefault();
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }
    this.change(event);
  },
  pointerup: function pointerup(event) {
    var _this2 = this;
    var options = this.options, action = this.action, pointers = this.pointers;
    var pointer;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointer = pointers[touch.identifier];
        delete pointers[touch.identifier];
      });
    } else {
      pointer = pointers[event.pointerId || 0];
      delete pointers[event.pointerId || 0];
    }
    if (!action) {
      return;
    }
    event.preventDefault();
    if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
      addClass(this.image, CLASS_TRANSITION);
    }
    this.action = false;
    if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
      clearTimeout(this.clickCanvasTimeout);
      clearTimeout(this.doubleClickImageTimeout);
      if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
        if (this.imageClicked) {
          this.imageClicked = false;
          this.doubleClickImageTimeout = setTimeout(function() {
            dispatchEvent(_this2.image, EVENT_DBLCLICK, {
              originalEvent: event
            });
          }, 50);
        } else {
          this.imageClicked = true;
          this.doubleClickImageTimeout = setTimeout(function() {
            _this2.imageClicked = false;
          }, 500);
        }
      } else {
        this.imageClicked = false;
        if (options.backdrop && options.backdrop !== "static" && event.target === this.canvas) {
          this.clickCanvasTimeout = setTimeout(function() {
            dispatchEvent(_this2.canvas, EVENT_CLICK, {
              originalEvent: event
            });
          }, 50);
        }
      }
    }
  },
  resize: function resize() {
    var _this3 = this;
    if (!this.isShown || this.hiding) {
      return;
    }
    if (this.fulled) {
      this.close();
      this.initBody();
      this.open();
    }
    this.initContainer();
    this.initViewer();
    this.renderViewer();
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this3.renderImage();
      });
    }
    if (this.played) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      forEach(this.player.getElementsByTagName("img"), function(image) {
        addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
          once: true
        });
        dispatchEvent(image, EVENT_LOAD);
      });
    }
  },
  wheel: function wheel(event) {
    var _this4 = this;
    if (!this.viewed) {
      return;
    }
    event.preventDefault();
    if (this.wheeling) {
      return;
    }
    this.wheeling = true;
    setTimeout(function() {
      _this4.wheeling = false;
    }, 50);
    var ratio = Number(this.options.zoomRatio) || 0.1;
    var delta = 1;
    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }
    this.zoom(-delta * ratio, true, null, event);
  }
};
var methods = {
  /** Show the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
   * @returns {Viewer} this
   */
  show: function show() {
    var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var element = this.element, options = this.options;
    if (options.inline || this.showing || this.isShown || this.showing) {
      return this;
    }
    if (!this.ready) {
      this.build();
      if (this.ready) {
        this.show(immediate);
      }
      return this;
    }
    if (isFunction$3(options.show)) {
      addListener(element, EVENT_SHOW, options.show, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
      return this;
    }
    if (this.hiding) {
      this.transitioning.abort();
    }
    this.showing = true;
    this.open();
    var viewer2 = this.viewer;
    removeClass(viewer2, CLASS_HIDE);
    viewer2.setAttribute("role", "dialog");
    viewer2.setAttribute("aria-labelledby", this.title.id);
    viewer2.setAttribute("aria-modal", true);
    viewer2.removeAttribute("aria-hidden");
    if (options.transition && !immediate) {
      var shown2 = this.shown.bind(this);
      this.transitioning = {
        abort: function abort() {
          removeListener(viewer2, EVENT_TRANSITION_END, shown2);
          removeClass(viewer2, CLASS_IN);
        }
      };
      addClass(viewer2, CLASS_TRANSITION);
      viewer2.initialOffsetWidth = viewer2.offsetWidth;
      addListener(viewer2, EVENT_TRANSITION_END, shown2, {
        once: true
      });
      addClass(viewer2, CLASS_IN);
    } else {
      addClass(viewer2, CLASS_IN);
      this.shown();
    }
    return this;
  },
  /**
   * Hide the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
   * @returns {Viewer} this
   */
  hide: function hide() {
    var _this = this;
    var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var element = this.element, options = this.options;
    if (options.inline || this.hiding || !(this.isShown || this.showing)) {
      return this;
    }
    if (isFunction$3(options.hide)) {
      addListener(element, EVENT_HIDE, options.hide, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_HIDE) === false) {
      return this;
    }
    if (this.showing) {
      this.transitioning.abort();
    }
    this.hiding = true;
    if (this.played) {
      this.stop();
    } else if (this.viewing) {
      this.viewing.abort();
    }
    var viewer2 = this.viewer, image = this.image;
    var hideImmediately = function hideImmediately2() {
      removeClass(viewer2, CLASS_IN);
      _this.hidden();
    };
    if (options.transition && !immediate) {
      var onViewerTransitionEnd = function onViewerTransitionEnd2(event) {
        if (event && event.target === viewer2) {
          removeListener(viewer2, EVENT_TRANSITION_END, onViewerTransitionEnd2);
          _this.hidden();
        }
      };
      var onImageTransitionEnd = function onImageTransitionEnd2() {
        if (hasClass(viewer2, CLASS_TRANSITION)) {
          addListener(viewer2, EVENT_TRANSITION_END, onViewerTransitionEnd);
          removeClass(viewer2, CLASS_IN);
        } else {
          hideImmediately();
        }
      };
      this.transitioning = {
        abort: function abort() {
          if (_this.viewed && hasClass(image, CLASS_TRANSITION)) {
            removeListener(image, EVENT_TRANSITION_END, onImageTransitionEnd);
          } else if (hasClass(viewer2, CLASS_TRANSITION)) {
            removeListener(viewer2, EVENT_TRANSITION_END, onViewerTransitionEnd);
          }
        }
      };
      if (this.viewed && hasClass(image, CLASS_TRANSITION)) {
        addListener(image, EVENT_TRANSITION_END, onImageTransitionEnd, {
          once: true
        });
        this.zoomTo(0, false, null, null, true);
      } else {
        onImageTransitionEnd();
      }
    } else {
      hideImmediately();
    }
    return this;
  },
  /**
   * View one of the images with image's index
   * @param {number} index - The index of the image to view.
   * @returns {Viewer} this
   */
  view: function view() {
    var _this2 = this;
    var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    index = Number(index) || 0;
    if (this.hiding || this.played || index < 0 || index >= this.length || this.viewed && index === this.index) {
      return this;
    }
    if (!this.isShown) {
      this.index = index;
      return this.show();
    }
    if (this.viewing) {
      this.viewing.abort();
    }
    var element = this.element, options = this.options, title = this.title, canvas = this.canvas;
    var item = this.items[index];
    var img = item.querySelector("img");
    var url = getData(img, "originalUrl");
    var alt = img.getAttribute("alt");
    var image = document.createElement("img");
    forEach(options.inheritedAttributes, function(name) {
      var value = img.getAttribute(name);
      if (value !== null) {
        image.setAttribute(name, value);
      }
    });
    image.src = url;
    image.alt = alt;
    if (isFunction$3(options.view)) {
      addListener(element, EVENT_VIEW, options.view, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_VIEW, {
      originalImage: this.images[index],
      index,
      image
    }) === false || !this.isShown || this.hiding || this.played) {
      return this;
    }
    var activeItem = this.items[this.index];
    if (activeItem) {
      removeClass(activeItem, CLASS_ACTIVE);
      activeItem.removeAttribute("aria-selected");
    }
    addClass(item, CLASS_ACTIVE);
    item.setAttribute("aria-selected", true);
    if (options.focus) {
      item.focus();
    }
    this.image = image;
    this.viewed = false;
    this.index = index;
    this.imageData = {};
    addClass(image, CLASS_INVISIBLE);
    if (options.loading) {
      addClass(canvas, CLASS_LOADING);
    }
    canvas.innerHTML = "";
    canvas.appendChild(image);
    this.renderList();
    title.innerHTML = "";
    var onViewed = function onViewed2() {
      var imageData = _this2.imageData;
      var render3 = Array.isArray(options.title) ? options.title[1] : options.title;
      title.innerHTML = escapeHTMLEntities(isFunction$3(render3) ? render3.call(_this2, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " × ").concat(imageData.naturalHeight, ")"));
    };
    var onLoad;
    var onError;
    addListener(element, EVENT_VIEWED, onViewed, {
      once: true
    });
    this.viewing = {
      abort: function abort() {
        removeListener(element, EVENT_VIEWED, onViewed);
        if (image.complete) {
          if (_this2.imageRendering) {
            _this2.imageRendering.abort();
          } else if (_this2.imageInitializing) {
            _this2.imageInitializing.abort();
          }
        } else {
          image.src = "";
          removeListener(image, EVENT_LOAD, onLoad);
          if (_this2.timeout) {
            clearTimeout(_this2.timeout);
          }
        }
      }
    };
    if (image.complete) {
      this.load();
    } else {
      addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
        removeListener(image, EVENT_ERROR, onError);
        _this2.load();
      }, {
        once: true
      });
      addListener(image, EVENT_ERROR, onError = function onError2() {
        removeListener(image, EVENT_LOAD, onLoad);
        if (_this2.timeout) {
          clearTimeout(_this2.timeout);
          _this2.timeout = false;
        }
        removeClass(image, CLASS_INVISIBLE);
        if (options.loading) {
          removeClass(_this2.canvas, CLASS_LOADING);
        }
      }, {
        once: true
      });
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(function() {
        removeClass(image, CLASS_INVISIBLE);
        _this2.timeout = false;
      }, 1e3);
    }
    return this;
  },
  /**
   * View the previous image
   * @param {boolean} [loop=false] - Indicate if view the last one
   * when it is the first one at present.
   * @returns {Viewer} this
   */
  prev: function prev() {
    var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var index = this.index - 1;
    if (index < 0) {
      index = loop ? this.length - 1 : 0;
    }
    this.view(index);
    return this;
  },
  /**
   * View the next image
   * @param {boolean} [loop=false] - Indicate if view the first one
   * when it is the last one at present.
   * @returns {Viewer} this
   */
  next: function next() {
    var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var maxIndex = this.length - 1;
    var index = this.index + 1;
    if (index > maxIndex) {
      index = loop ? 0 : maxIndex;
    }
    this.view(index);
    return this;
  },
  /**
   * Move the image with relative offsets.
   * @param {number} x - The moving distance in the horizontal direction.
   * @param {number} [y=x] The moving distance in the vertical direction.
   * @returns {Viewer} this
   */
  move: function move(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var imageData = this.imageData;
    this.moveTo(isUndefined(x) ? x : imageData.x + Number(x), isUndefined(y) ? y : imageData.y + Number(y));
    return this;
  },
  /**
   * Move the image to an absolute point.
   * @param {number} x - The new position in the horizontal direction.
   * @param {number} [y=x] - The new position in the vertical direction.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  moveTo: function moveTo(x) {
    var _this3 = this;
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var _originalEvent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var element = this.element, options = this.options, imageData = this.imageData;
    x = Number(x);
    y = Number(y);
    if (this.viewed && !this.played && options.movable) {
      var oldX = imageData.x;
      var oldY = imageData.y;
      var changed = false;
      if (isNumber(x)) {
        changed = true;
      } else {
        x = oldX;
      }
      if (isNumber(y)) {
        changed = true;
      } else {
        y = oldY;
      }
      if (changed) {
        if (isFunction$3(options.move)) {
          addListener(element, EVENT_MOVE, options.move, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_MOVE, {
          x,
          y,
          oldX,
          oldY,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        imageData.x = x;
        imageData.y = y;
        imageData.left = x;
        imageData.top = y;
        this.moving = true;
        this.renderImage(function() {
          _this3.moving = false;
          if (isFunction$3(options.moved)) {
            addListener(element, EVENT_MOVED, options.moved, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_MOVED, {
            x,
            y,
            oldX,
            oldY,
            originalEvent: _originalEvent
          }, {
            cancelable: false
          });
        });
      }
    }
    return this;
  },
  /**
   * Rotate the image with a relative degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotate: function rotate(degree) {
    this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    return this;
  },
  /**
   * Rotate the image to an absolute degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotateTo: function rotateTo(degree) {
    var _this4 = this;
    var element = this.element, options = this.options, imageData = this.imageData;
    degree = Number(degree);
    if (isNumber(degree) && this.viewed && !this.played && options.rotatable) {
      var oldDegree = imageData.rotate;
      if (isFunction$3(options.rotate)) {
        addListener(element, EVENT_ROTATE, options.rotate, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_ROTATE, {
        degree,
        oldDegree
      }) === false) {
        return this;
      }
      imageData.rotate = degree;
      this.rotating = true;
      this.renderImage(function() {
        _this4.rotating = false;
        if (isFunction$3(options.rotated)) {
          addListener(element, EVENT_ROTATED, options.rotated, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_ROTATED, {
          degree,
          oldDegree
        }, {
          cancelable: false
        });
      });
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Viewer} this
   */
  scaleX: function scaleX(_scaleX) {
    this.scale(_scaleX, this.imageData.scaleY);
    return this;
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scaleY: function scaleY(_scaleY) {
    this.scale(this.imageData.scaleX, _scaleY);
    return this;
  },
  /**
   * Scale the image.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scale: function scale(scaleX2) {
    var _this5 = this;
    var scaleY2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX2;
    var element = this.element, options = this.options, imageData = this.imageData;
    scaleX2 = Number(scaleX2);
    scaleY2 = Number(scaleY2);
    if (this.viewed && !this.played && options.scalable) {
      var oldScaleX = imageData.scaleX;
      var oldScaleY = imageData.scaleY;
      var changed = false;
      if (isNumber(scaleX2)) {
        changed = true;
      } else {
        scaleX2 = oldScaleX;
      }
      if (isNumber(scaleY2)) {
        changed = true;
      } else {
        scaleY2 = oldScaleY;
      }
      if (changed) {
        if (isFunction$3(options.scale)) {
          addListener(element, EVENT_SCALE, options.scale, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_SCALE, {
          scaleX: scaleX2,
          scaleY: scaleY2,
          oldScaleX,
          oldScaleY
        }) === false) {
          return this;
        }
        imageData.scaleX = scaleX2;
        imageData.scaleY = scaleY2;
        this.scaling = true;
        this.renderImage(function() {
          _this5.scaling = false;
          if (isFunction$3(options.scaled)) {
            addListener(element, EVENT_SCALED, options.scaled, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_SCALED, {
            scaleX: scaleX2,
            scaleY: scaleY2,
            oldScaleX,
            oldScaleY
          }, {
            cancelable: false
          });
        });
      }
    }
    return this;
  },
  /**
   * Zoom the image with a relative ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  zoom: function zoom(ratio) {
    var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var imageData = this.imageData;
    ratio = Number(ratio);
    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }
    this.zoomTo(imageData.width * ratio / imageData.naturalWidth, showTooltip, pivot, _originalEvent);
    return this;
  },
  /**
   * Zoom the image to an absolute ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
   * @returns {Viewer} this
   */
  zoomTo: function zoomTo(ratio) {
    var _this6 = this;
    var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    var _zoomable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var element = this.element, options = this.options, pointers = this.pointers, imageData = this.imageData;
    var x = imageData.x, y = imageData.y, width = imageData.width, height = imageData.height, naturalWidth = imageData.naturalWidth, naturalHeight = imageData.naturalHeight;
    ratio = Math.max(0, ratio);
    if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
      if (!_zoomable) {
        var minZoomRatio = Math.max(0.01, options.minZoomRatio);
        var maxZoomRatio = Math.min(100, options.maxZoomRatio);
        ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
      }
      if (_originalEvent) {
        switch (_originalEvent.type) {
          case "wheel":
            if (options.zoomRatio >= 0.055 && ratio > 0.95 && ratio < 1.05) {
              ratio = 1;
            }
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            if (ratio > 0.99 && ratio < 1.01) {
              ratio = 1;
            }
            break;
        }
      }
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      var offsetWidth = newWidth - width;
      var offsetHeight = newHeight - height;
      var oldRatio = imageData.ratio;
      if (isFunction$3(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_ZOOM, {
        ratio,
        oldRatio,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }
      this.zooming = true;
      if (_originalEvent) {
        var offset = getOffset(this.viewer);
        var center = pointers && Object.keys(pointers).length > 0 ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };
        imageData.x -= offsetWidth * ((center.pageX - offset.left - x) / width);
        imageData.y -= offsetHeight * ((center.pageY - offset.top - y) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        imageData.x -= offsetWidth * ((pivot.x - x) / width);
        imageData.y -= offsetHeight * ((pivot.y - y) / height);
      } else {
        imageData.x -= offsetWidth / 2;
        imageData.y -= offsetHeight / 2;
      }
      imageData.left = imageData.x;
      imageData.top = imageData.y;
      imageData.width = newWidth;
      imageData.height = newHeight;
      imageData.oldRatio = oldRatio;
      imageData.ratio = ratio;
      this.renderImage(function() {
        _this6.zooming = false;
        if (isFunction$3(options.zoomed)) {
          addListener(element, EVENT_ZOOMED, options.zoomed, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_ZOOMED, {
          ratio,
          oldRatio,
          originalEvent: _originalEvent
        }, {
          cancelable: false
        });
      });
      if (showTooltip) {
        this.tooltip();
      }
    }
    return this;
  },
  /**
   * Play the images
   * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
   * @returns {Viewer} this
   */
  play: function play() {
    var _this7 = this;
    var fullscreen = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!this.isShown || this.played) {
      return this;
    }
    var element = this.element, options = this.options;
    if (isFunction$3(options.play)) {
      addListener(element, EVENT_PLAY, options.play, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_PLAY) === false) {
      return this;
    }
    var player = this.player;
    var onLoad = this.loadImage.bind(this);
    var list = [];
    var total = 0;
    var index = 0;
    this.played = true;
    this.onLoadWhenPlay = onLoad;
    if (fullscreen) {
      this.requestFullscreen(fullscreen);
    }
    addClass(player, CLASS_SHOW);
    forEach(this.items, function(item, i) {
      var img = item.querySelector("img");
      var image = document.createElement("img");
      image.src = getData(img, "originalUrl");
      image.alt = img.getAttribute("alt");
      image.referrerPolicy = img.referrerPolicy;
      total += 1;
      addClass(image, CLASS_FADE);
      toggleClass(image, CLASS_TRANSITION, options.transition);
      if (hasClass(item, CLASS_ACTIVE)) {
        addClass(image, CLASS_IN);
        index = i;
      }
      list.push(image);
      addListener(image, EVENT_LOAD, onLoad, {
        once: true
      });
      player.appendChild(image);
    });
    if (isNumber(options.interval) && options.interval > 0) {
      var prev2 = function prev3() {
        clearTimeout(_this7.playing.timeout);
        removeClass(list[index], CLASS_IN);
        index -= 1;
        index = index >= 0 ? index : total - 1;
        addClass(list[index], CLASS_IN);
        _this7.playing.timeout = setTimeout(prev3, options.interval);
      };
      var next2 = function next3() {
        clearTimeout(_this7.playing.timeout);
        removeClass(list[index], CLASS_IN);
        index += 1;
        index = index < total ? index : 0;
        addClass(list[index], CLASS_IN);
        _this7.playing.timeout = setTimeout(next3, options.interval);
      };
      if (total > 1) {
        this.playing = {
          prev: prev2,
          next: next2,
          timeout: setTimeout(next2, options.interval)
        };
      }
    }
    return this;
  },
  // Stop play
  stop: function stop() {
    var _this8 = this;
    if (!this.played) {
      return this;
    }
    var element = this.element, options = this.options;
    if (isFunction$3(options.stop)) {
      addListener(element, EVENT_STOP, options.stop, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_STOP) === false) {
      return this;
    }
    var player = this.player;
    clearTimeout(this.playing.timeout);
    this.playing = false;
    this.played = false;
    forEach(player.getElementsByTagName("img"), function(image) {
      removeListener(image, EVENT_LOAD, _this8.onLoadWhenPlay);
    });
    removeClass(player, CLASS_SHOW);
    player.innerHTML = "";
    this.exitFullscreen();
    return this;
  },
  // Enter modal mode (only available in inline mode)
  full: function full() {
    var _this9 = this;
    var options = this.options, viewer2 = this.viewer, image = this.image, list = this.list;
    if (!this.isShown || this.played || this.fulled || !options.inline) {
      return this;
    }
    this.fulled = true;
    this.open();
    addClass(this.button, CLASS_FULLSCREEN_EXIT);
    if (options.transition) {
      removeClass(list, CLASS_TRANSITION);
      if (this.viewed) {
        removeClass(image, CLASS_TRANSITION);
      }
    }
    addClass(viewer2, CLASS_FIXED);
    viewer2.setAttribute("role", "dialog");
    viewer2.setAttribute("aria-labelledby", this.title.id);
    viewer2.setAttribute("aria-modal", true);
    viewer2.removeAttribute("style");
    setStyle(viewer2, {
      zIndex: options.zIndex
    });
    if (options.focus) {
      this.enforceFocus();
    }
    this.initContainer();
    this.viewerData = assign({}, this.containerData);
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this9.renderImage(function() {
          if (options.transition) {
            setTimeout(function() {
              addClass(image, CLASS_TRANSITION);
              addClass(list, CLASS_TRANSITION);
            }, 0);
          }
        });
      });
    }
    return this;
  },
  // Exit modal mode (only available in inline mode)
  exit: function exit() {
    var _this10 = this;
    var options = this.options, viewer2 = this.viewer, image = this.image, list = this.list;
    if (!this.isShown || this.played || !this.fulled || !options.inline) {
      return this;
    }
    this.fulled = false;
    this.close();
    removeClass(this.button, CLASS_FULLSCREEN_EXIT);
    if (options.transition) {
      removeClass(list, CLASS_TRANSITION);
      if (this.viewed) {
        removeClass(image, CLASS_TRANSITION);
      }
    }
    if (options.focus) {
      this.clearEnforceFocus();
    }
    viewer2.removeAttribute("role");
    viewer2.removeAttribute("aria-labelledby");
    viewer2.removeAttribute("aria-modal");
    removeClass(viewer2, CLASS_FIXED);
    setStyle(viewer2, {
      zIndex: options.zIndexInline
    });
    this.viewerData = assign({}, this.parentData);
    this.renderViewer();
    this.renderList();
    if (this.viewed) {
      this.initImage(function() {
        _this10.renderImage(function() {
          if (options.transition) {
            setTimeout(function() {
              addClass(image, CLASS_TRANSITION);
              addClass(list, CLASS_TRANSITION);
            }, 0);
          }
        });
      });
    }
    return this;
  },
  // Show the current ratio of the image with percentage
  tooltip: function tooltip() {
    var _this11 = this;
    var options = this.options, tooltipBox = this.tooltipBox, imageData = this.imageData;
    if (!this.viewed || this.played || !options.tooltip) {
      return this;
    }
    tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");
    if (!this.tooltipping) {
      if (options.transition) {
        if (this.fading) {
          dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
        }
        addClass(tooltipBox, CLASS_SHOW);
        addClass(tooltipBox, CLASS_FADE);
        addClass(tooltipBox, CLASS_TRANSITION);
        tooltipBox.removeAttribute("aria-hidden");
        tooltipBox.initialOffsetWidth = tooltipBox.offsetWidth;
        addClass(tooltipBox, CLASS_IN);
      } else {
        addClass(tooltipBox, CLASS_SHOW);
        tooltipBox.removeAttribute("aria-hidden");
      }
    } else {
      clearTimeout(this.tooltipping);
    }
    this.tooltipping = setTimeout(function() {
      if (options.transition) {
        addListener(tooltipBox, EVENT_TRANSITION_END, function() {
          removeClass(tooltipBox, CLASS_SHOW);
          removeClass(tooltipBox, CLASS_FADE);
          removeClass(tooltipBox, CLASS_TRANSITION);
          tooltipBox.setAttribute("aria-hidden", true);
          _this11.fading = false;
        }, {
          once: true
        });
        removeClass(tooltipBox, CLASS_IN);
        _this11.fading = true;
      } else {
        removeClass(tooltipBox, CLASS_SHOW);
        tooltipBox.setAttribute("aria-hidden", true);
      }
      _this11.tooltipping = false;
    }, 1e3);
    return this;
  },
  /**
   * Toggle the image size between its current size and natural size
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  toggle: function toggle() {
    var _originalEvent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    if (this.imageData.ratio === 1) {
      this.zoomTo(this.imageData.oldRatio, true, null, _originalEvent);
    } else {
      this.zoomTo(1, true, null, _originalEvent);
    }
    return this;
  },
  // Reset the image to its initial state
  reset: function reset() {
    if (this.viewed && !this.played) {
      this.imageData = assign({}, this.initialImageData);
      this.renderImage();
    }
    return this;
  },
  // Update viewer when images changed
  update: function update() {
    var _this12 = this;
    var element = this.element, options = this.options, isImg = this.isImg;
    if (isImg && !element.parentNode) {
      return this.destroy();
    }
    var images = [];
    forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
      if (isFunction$3(options.filter)) {
        if (options.filter.call(_this12, image)) {
          images.push(image);
        }
      } else if (_this12.getImageURL(image)) {
        images.push(image);
      }
    });
    if (!images.length) {
      return this;
    }
    this.images = images;
    this.length = images.length;
    if (this.ready) {
      var changedIndexes = [];
      forEach(this.items, function(item, i) {
        var img = item.querySelector("img");
        var image = images[i];
        if (image && img) {
          if (image.src !== img.src || image.alt !== img.alt) {
            changedIndexes.push(i);
          }
        } else {
          changedIndexes.push(i);
        }
      });
      setStyle(this.list, {
        width: "auto"
      });
      this.initList();
      if (this.isShown) {
        if (this.length) {
          if (this.viewed) {
            var changedIndex = changedIndexes.indexOf(this.index);
            if (changedIndex >= 0) {
              this.viewed = false;
              this.view(Math.max(Math.min(this.index - changedIndex, this.length - 1), 0));
            } else {
              var activeItem = this.items[this.index];
              addClass(activeItem, CLASS_ACTIVE);
              activeItem.setAttribute("aria-selected", true);
            }
          }
        } else {
          this.image = null;
          this.viewed = false;
          this.index = 0;
          this.imageData = {};
          this.canvas.innerHTML = "";
          this.title.innerHTML = "";
        }
      }
    } else {
      this.build();
    }
    return this;
  },
  // Destroy the viewer
  destroy: function destroy() {
    var element = this.element, options = this.options;
    if (!element[NAMESPACE]) {
      return this;
    }
    this.destroyed = true;
    if (this.ready) {
      if (this.played) {
        this.stop();
      }
      if (options.inline) {
        if (this.fulled) {
          this.exit();
        }
        this.unbind();
      } else if (this.isShown) {
        if (this.viewing) {
          if (this.imageRendering) {
            this.imageRendering.abort();
          } else if (this.imageInitializing) {
            this.imageInitializing.abort();
          }
        }
        if (this.hiding) {
          this.transitioning.abort();
        }
        this.hidden();
      } else if (this.showing) {
        this.transitioning.abort();
        this.hidden();
      }
      this.ready = false;
      this.viewer.parentNode.removeChild(this.viewer);
    } else if (options.inline) {
      if (this.delaying) {
        this.delaying.abort();
      } else if (this.initializing) {
        this.initializing.abort();
      }
    }
    if (!options.inline) {
      removeListener(element, EVENT_CLICK, this.onStart);
    }
    element[NAMESPACE] = void 0;
    return this;
  }
};
var others = {
  getImageURL: function getImageURL(image) {
    var url = this.options.url;
    if (isString(url)) {
      url = image.getAttribute(url);
    } else if (isFunction$3(url)) {
      url = url.call(this, image);
    } else {
      url = "";
    }
    return url;
  },
  enforceFocus: function enforceFocus() {
    var _this = this;
    this.clearEnforceFocus();
    addListener(document, EVENT_FOCUSIN, this.onFocusin = function(event) {
      var viewer2 = _this.viewer;
      var target = event.target;
      if (target === document || target === viewer2 || viewer2.contains(target)) {
        return;
      }
      while (target) {
        if (target.getAttribute("tabindex") !== null || target.getAttribute("aria-modal") === "true") {
          return;
        }
        target = target.parentElement;
      }
      viewer2.focus();
    });
  },
  clearEnforceFocus: function clearEnforceFocus() {
    if (this.onFocusin) {
      removeListener(document, EVENT_FOCUSIN, this.onFocusin);
      this.onFocusin = null;
    }
  },
  open: function open() {
    var body = this.body;
    addClass(body, CLASS_OPEN);
    if (this.scrollbarWidth > 0) {
      body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
    }
  },
  close: function close() {
    var body = this.body;
    removeClass(body, CLASS_OPEN);
    if (this.scrollbarWidth > 0) {
      body.style.paddingRight = this.initialBodyPaddingRight;
    }
  },
  shown: function shown() {
    var element = this.element, options = this.options, viewer2 = this.viewer;
    this.fulled = true;
    this.isShown = true;
    this.render();
    this.bind();
    this.showing = false;
    if (options.focus) {
      viewer2.focus();
      this.enforceFocus();
    }
    if (isFunction$3(options.shown)) {
      addListener(element, EVENT_SHOWN, options.shown, {
        once: true
      });
    }
    if (dispatchEvent(element, EVENT_SHOWN) === false) {
      return;
    }
    if (this.ready && this.isShown && !this.hiding) {
      this.view(this.index);
    }
  },
  hidden: function hidden() {
    var element = this.element, options = this.options, viewer2 = this.viewer;
    if (options.fucus) {
      this.clearEnforceFocus();
    }
    this.close();
    this.unbind();
    addClass(viewer2, CLASS_HIDE);
    viewer2.removeAttribute("role");
    viewer2.removeAttribute("aria-labelledby");
    viewer2.removeAttribute("aria-modal");
    viewer2.setAttribute("aria-hidden", true);
    this.resetList();
    this.resetImage();
    this.fulled = false;
    this.viewed = false;
    this.isShown = false;
    this.hiding = false;
    if (!this.destroyed) {
      if (isFunction$3(options.hidden)) {
        addListener(element, EVENT_HIDDEN, options.hidden, {
          once: true
        });
      }
      dispatchEvent(element, EVENT_HIDDEN, null, {
        cancelable: false
      });
    }
  },
  requestFullscreen: function requestFullscreen(options) {
    var document2 = this.element.ownerDocument;
    if (this.fulled && !(document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
      var documentElement = document2.documentElement;
      if (documentElement.requestFullscreen) {
        if (isPlainObject(options)) {
          documentElement.requestFullscreen(options);
        } else {
          documentElement.requestFullscreen();
        }
      } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (documentElement.mozRequestFullScreen) {
        documentElement.mozRequestFullScreen();
      } else if (documentElement.msRequestFullscreen) {
        documentElement.msRequestFullscreen();
      }
    }
  },
  exitFullscreen: function exitFullscreen() {
    var document2 = this.element.ownerDocument;
    if (this.fulled && (document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
      if (document2.exitFullscreen) {
        document2.exitFullscreen();
      } else if (document2.webkitExitFullscreen) {
        document2.webkitExitFullscreen();
      } else if (document2.mozCancelFullScreen) {
        document2.mozCancelFullScreen();
      } else if (document2.msExitFullscreen) {
        document2.msExitFullscreen();
      }
    }
  },
  change: function change(event) {
    var options = this.options, pointers = this.pointers;
    var pointer = pointers[Object.keys(pointers)[0]];
    if (!pointer) {
      return;
    }
    var offsetX = pointer.endX - pointer.startX;
    var offsetY = pointer.endY - pointer.startY;
    switch (this.action) {
      case ACTION_MOVE:
        if (offsetX !== 0 || offsetY !== 0) {
          this.pointerMoved = true;
          this.move(offsetX, offsetY, event);
        }
        break;
      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), false, null, event);
        break;
      case ACTION_SWITCH: {
        this.action = "switched";
        var absoluteOffsetX = Math.abs(offsetX);
        if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
          this.pointers = {};
          if (offsetX > 1) {
            this.prev(options.loop);
          } else if (offsetX < -1) {
            this.next(options.loop);
          }
        }
        break;
      }
    }
    forEach(pointers, function(p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  },
  isSwitchable: function isSwitchable() {
    var imageData = this.imageData, viewerData = this.viewerData;
    return this.length > 1 && imageData.x >= 0 && imageData.y >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
  }
};
var AnotherViewer = WINDOW.Viewer;
var getUniqueID = function(id) {
  return function() {
    id += 1;
    return id;
  };
}(-1);
var Viewer = /* @__PURE__ */ function() {
  function Viewer2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Viewer2);
    if (!element || element.nodeType !== 1) {
      throw new Error("The first argument is required and must be an element.");
    }
    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.action = false;
    this.fading = false;
    this.fulled = false;
    this.hiding = false;
    this.imageClicked = false;
    this.imageData = {};
    this.index = this.options.initialViewIndex;
    this.isImg = false;
    this.isShown = false;
    this.length = 0;
    this.moving = false;
    this.played = false;
    this.playing = false;
    this.pointers = {};
    this.ready = false;
    this.rotating = false;
    this.scaling = false;
    this.showing = false;
    this.timeout = false;
    this.tooltipping = false;
    this.viewed = false;
    this.viewing = false;
    this.wheeling = false;
    this.zooming = false;
    this.pointerMoved = false;
    this.id = getUniqueID();
    this.init();
  }
  _createClass(Viewer2, [{
    key: "init",
    value: function init() {
      var _this = this;
      var element = this.element, options = this.options;
      if (element[NAMESPACE]) {
        return;
      }
      element[NAMESPACE] = this;
      if (options.focus && !options.keyboard) {
        options.focus = false;
      }
      var isImg = element.localName === "img";
      var images = [];
      forEach(isImg ? [element] : element.querySelectorAll("img"), function(image) {
        if (isFunction$3(options.filter)) {
          if (options.filter.call(_this, image)) {
            images.push(image);
          }
        } else if (_this.getImageURL(image)) {
          images.push(image);
        }
      });
      this.isImg = isImg;
      this.length = images.length;
      this.images = images;
      this.initBody();
      if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
        options.transition = false;
      }
      if (options.inline) {
        var count = 0;
        var progress = function progress2() {
          count += 1;
          if (count === _this.length) {
            var timeout;
            _this.initializing = false;
            _this.delaying = {
              abort: function abort() {
                clearTimeout(timeout);
              }
            };
            timeout = setTimeout(function() {
              _this.delaying = false;
              _this.build();
            }, 0);
          }
        };
        this.initializing = {
          abort: function abort() {
            forEach(images, function(image) {
              if (!image.complete) {
                removeListener(image, EVENT_LOAD, progress);
                removeListener(image, EVENT_ERROR, progress);
              }
            });
          }
        };
        forEach(images, function(image) {
          if (image.complete) {
            progress();
          } else {
            var onLoad;
            var onError;
            addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
              removeListener(image, EVENT_ERROR, onError);
              progress();
            }, {
              once: true
            });
            addListener(image, EVENT_ERROR, onError = function onError2() {
              removeListener(image, EVENT_LOAD, onLoad);
              progress();
            }, {
              once: true
            });
          }
        });
      } else {
        addListener(element, EVENT_CLICK, this.onStart = function(_ref) {
          var target = _ref.target;
          if (target.localName === "img" && (!isFunction$3(options.filter) || options.filter.call(_this, target))) {
            _this.view(_this.images.indexOf(target));
          }
        });
      }
    }
  }, {
    key: "build",
    value: function build() {
      if (this.ready) {
        return;
      }
      var element = this.element, options = this.options;
      var parent = element.parentNode;
      var template = document.createElement("div");
      template.innerHTML = TEMPLATE;
      var viewer2 = template.querySelector(".".concat(NAMESPACE, "-container"));
      var title = viewer2.querySelector(".".concat(NAMESPACE, "-title"));
      var toolbar = viewer2.querySelector(".".concat(NAMESPACE, "-toolbar"));
      var navbar = viewer2.querySelector(".".concat(NAMESPACE, "-navbar"));
      var button = viewer2.querySelector(".".concat(NAMESPACE, "-button"));
      var canvas = viewer2.querySelector(".".concat(NAMESPACE, "-canvas"));
      this.parent = parent;
      this.viewer = viewer2;
      this.title = title;
      this.toolbar = toolbar;
      this.navbar = navbar;
      this.button = button;
      this.canvas = canvas;
      this.footer = viewer2.querySelector(".".concat(NAMESPACE, "-footer"));
      this.tooltipBox = viewer2.querySelector(".".concat(NAMESPACE, "-tooltip"));
      this.player = viewer2.querySelector(".".concat(NAMESPACE, "-player"));
      this.list = viewer2.querySelector(".".concat(NAMESPACE, "-list"));
      viewer2.id = "".concat(NAMESPACE).concat(this.id);
      title.id = "".concat(NAMESPACE, "Title").concat(this.id);
      addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
      addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
      toggleClass(button, CLASS_HIDE, !options.button);
      if (options.keyboard) {
        button.setAttribute("tabindex", 0);
      }
      if (options.backdrop) {
        addClass(viewer2, "".concat(NAMESPACE, "-backdrop"));
        if (!options.inline && options.backdrop !== "static") {
          setData(canvas, DATA_ACTION, "hide");
        }
      }
      if (isString(options.className) && options.className) {
        options.className.split(REGEXP_SPACES).forEach(function(className) {
          addClass(viewer2, className);
        });
      }
      if (options.toolbar) {
        var list = document.createElement("ul");
        var custom = isPlainObject(options.toolbar);
        var zoomButtons = BUTTONS.slice(0, 3);
        var rotateButtons = BUTTONS.slice(7, 9);
        var scaleButtons = BUTTONS.slice(9);
        if (!custom) {
          addClass(toolbar, getResponsiveClass(options.toolbar));
        }
        forEach(custom ? options.toolbar : BUTTONS, function(value, index) {
          var deep = custom && isPlainObject(value);
          var name = custom ? hyphenate(index) : value;
          var show2 = deep && !isUndefined(value.show) ? value.show : value;
          if (!show2 || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
            return;
          }
          var size = deep && !isUndefined(value.size) ? value.size : value;
          var click2 = deep && !isUndefined(value.click) ? value.click : value;
          var item = document.createElement("li");
          if (options.keyboard) {
            item.setAttribute("tabindex", 0);
          }
          item.setAttribute("role", "button");
          addClass(item, "".concat(NAMESPACE, "-").concat(name));
          if (!isFunction$3(click2)) {
            setData(item, DATA_ACTION, name);
          }
          if (isNumber(show2)) {
            addClass(item, getResponsiveClass(show2));
          }
          if (["small", "large"].indexOf(size) !== -1) {
            addClass(item, "".concat(NAMESPACE, "-").concat(size));
          } else if (name === "play") {
            addClass(item, "".concat(NAMESPACE, "-large"));
          }
          if (isFunction$3(click2)) {
            addListener(item, EVENT_CLICK, click2);
          }
          list.appendChild(item);
        });
        toolbar.appendChild(list);
      } else {
        addClass(toolbar, CLASS_HIDE);
      }
      if (!options.rotatable) {
        var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
        addClass(rotates, CLASS_INVISIBLE);
        forEach(rotates, function(rotate2) {
          toolbar.appendChild(rotate2);
        });
      }
      if (options.inline) {
        addClass(button, CLASS_FULLSCREEN);
        setStyle(viewer2, {
          zIndex: options.zIndexInline
        });
        if (window.getComputedStyle(parent).position === "static") {
          setStyle(parent, {
            position: "relative"
          });
        }
        parent.insertBefore(viewer2, element.nextSibling);
      } else {
        addClass(button, CLASS_CLOSE);
        addClass(viewer2, CLASS_FIXED);
        addClass(viewer2, CLASS_FADE);
        addClass(viewer2, CLASS_HIDE);
        setStyle(viewer2, {
          zIndex: options.zIndex
        });
        var container = options.container;
        if (isString(container)) {
          container = element.ownerDocument.querySelector(container);
        }
        if (!container) {
          container = this.body;
        }
        container.appendChild(viewer2);
      }
      if (options.inline) {
        this.render();
        this.bind();
        this.isShown = true;
      }
      this.ready = true;
      if (isFunction$3(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_READY) === false) {
        this.ready = false;
        return;
      }
      if (this.ready && options.inline) {
        this.view(this.index);
      }
    }
    /**
     * Get the no conflict viewer class.
     * @returns {Viewer} The viewer class.
     */
  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Viewer = AnotherViewer;
      return Viewer2;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
  return Viewer2;
}();
assign(Viewer.prototype, render, events, handlers, methods, others);
/*!
 * v-viewer v3.0.11
 * https://github.com/mirari/v-viewer#readme
 *
 * Copyright 2022 mirari
 * Released under the MIT license
 *
 * Date: 2022-10-25T08:49:33.301Z
 */
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax$1 = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$3;
var root$2 = _root;
var Symbol$3 = root$2.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
var nativeObjectToString$1 = objectProto$7.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$5.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$6 = Object.prototype;
var nativeObjectToString = objectProto$6.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$3 = _baseGetTag, isObject$6 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$6(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$5 = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$5 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$5(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$1;
var getNative = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$2(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$2;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var eq$1 = eq_1, isArrayLike$1 = isArrayLike_1, isIndex$1 = _isIndex, isObject$4 = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject$4(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$1(object) && isIndex$1(index2, object.length) : type == "string" && index2 in object) {
    return eq$1(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$4(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$4;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var argsTag$1 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;
var isBuffer$1 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$1, isBuffer$1.exports);
var baseGetTag$1 = _baseGetTag, isLength = isLength_1, isObjectLike$1 = isObjectLike_1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray = isArray_1, isBuffer = isBuffer$1.exports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$2 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$2;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$1;
var baseRest = _baseRest, eq = eq_1, isIterateeCall = _isIterateeCall, keysIn = keysIn_1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
baseRest(function(object, sources) {
  object = Object(object);
  var index2 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index2 < length) {
    var source = sources[index2];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
const inBrowser = typeof window !== "undefined" && window !== null;
checkIntersectionObserver();
function checkIntersectionObserver() {
  if (inBrowser && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get() {
          return this.intersectionRatio > 0;
        }
      });
    }
    return true;
  }
  return false;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "Viewer",
  props: {
    images: {
      type: Array,
      default: () => []
    },
    rebuild: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: () => null
    }
  },
  emits: ["inited"],
  setup(props, { emit }) {
    let $viewer;
    const root2 = ref();
    function createViewer() {
      $viewer = new Viewer(root2.value, props.options);
      emit("inited", $viewer);
    }
    function destroyViewer() {
      $viewer && $viewer.destroy();
    }
    function rebuildViewer() {
      destroyViewer();
      createViewer();
    }
    function updateViewer() {
      if ($viewer) {
        $viewer.update();
        emit("inited", $viewer);
      } else {
        createViewer();
      }
    }
    function changeViewer() {
      if (props.rebuild) {
        rebuildViewer();
      } else {
        updateViewer();
      }
    }
    const options = { deep: true };
    watch(() => props.images, () => nextTick(() => changeViewer()), options);
    watch(() => props.trigger, () => nextTick(() => changeViewer()), options);
    watch(() => props.options, () => nextTick(() => rebuildViewer()), options);
    onMounted(() => createViewer());
    onUnmounted(() => destroyViewer());
    return {
      root: root2,
      createViewer,
      rebuildViewer,
      updateViewer,
      destroyViewer
    };
  }
});
const _hoisted_1$1 = { ref: "root" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default", {
      images: _ctx.images,
      options: _ctx.options
    })
  ], 512);
}
var component = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const ShowMedia_vue_vue_type_style_index_0_scoped_8e792bcd_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-8e792bcd"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "media-window" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "win-title drag" }, null, -1));
const _hoisted_3 = { class: "media-op no-drag" };
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "media-panel" };
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  key: 1,
  class: "file-panel"
};
const _hoisted_8 = { class: "file-item" };
const _hoisted_9 = { class: "file-item" };
const _hoisted_10 = { class: "file-item donwload" };
const _hoisted_11 = {
  key: 2,
  class: "loading"
};
const _sfc_main = {
  __name: "ShowMedia",
  setup(__props) {
    getCurrentInstance();
    useRouter();
    useGlobalInfoStore();
    const options = ref({
      inline: true,
      toolbar: false,
      navbar: false,
      button: false,
      title: false,
      zoomRatio: 0.1,
      zoomOnWheel: false
    });
    const viewerMy = ref(null);
    const inited = (e) => {
      viewerMy.value = e;
    };
    const changeSize = (zoomRatio) => {
      viewerMy.value.zoom(zoomRatio, true);
    };
    const rotate2 = () => {
      viewerMy.value.rotate(90, true);
    };
    const isOne2One = ref(false);
    const resize2 = () => {
      isOne2One.value = !isOne2One.value;
      if (!isOne2One.value) {
        viewerMy.value.zoomTo(viewerMy.value.initialImageData.ratio, true);
      } else {
        viewerMy.value.zoomTo(1, true);
      }
    };
    const onWheel = (e) => {
      if (fileList.value[0].fileType !== 0) {
        return;
      }
      if (e.deltaY < 0) {
        changeSize(0.1);
      } else {
        changeSize(-0.1);
      }
    };
    const player = ref();
    const dPlayer = ref();
    const initPlayer = () => {
      dPlayer.value = new DPlayer({
        element: player.value,
        theme: "#b7daff",
        screenshot: true,
        video: {
          url: ""
        }
      });
    };
    const localServerPort = ref();
    const currentIndex = ref(0);
    const allFileList = ref([]);
    const fileList = ref([{ fileType: 0, status: 0 }]);
    onMounted(() => {
      initPlayer();
      window.addEventListener("wheel", onWheel);
      window.ipcRenderer.on("pageInitData", (e, data) => {
        localServerPort.value = data.localServerPort;
        allFileList.value = data.fileList;
        let index = 0;
        if (data.currentFileId) {
          index = data.fileList.findIndex((item) => item.fileId === data.currentFileId);
          index = index == -1 ? 0 : index;
        }
        currentIndex.value = index;
        getCurrentFile();
      });
    });
    onUnmounted(() => {
      window.ipcRenderer.removeAllListeners("pageInitData");
      window.ipcRenderer.removeAllListeners("checkFileCallback");
    });
    const getCurrentFile = () => {
      if (dPlayer.value) {
        dPlayer.value.pause();
      }
      const curFile = allFileList.value[currentIndex.value];
      const url = getUrl(curFile);
      fileList.value.splice(0, 1, {
        url,
        fileType: curFile.fileType,
        status: 1,
        fileSize: curFile.fileSize,
        fileName: curFile.fileName
      });
      if (curFile.fileType == 1) {
        dPlayer.value.switchVideo({
          url
        });
      }
    };
    const next2 = (index) => {
      if (currentIndex.value + index < 0 || currentIndex.value + index >= allFileList.value.length) {
        return;
      }
      currentIndex.value = currentIndex.value + index;
      getCurrentFile();
    };
    const getUrl = (curFile) => {
      return `http://localhost:${localServerPort.value}/file?fileId=${curFile.fileId}&partType=${curFile.partType}&fileType=${curFile.fileType}&forceGet=${curFile.forceGet}&${(/* @__PURE__ */ new Date()).getTime()}`;
    };
    onUnmounted(() => {
      window.removeEventListener("wheel", onWheel);
    });
    const saveAs = () => {
      const curFile = allFileList.value[currentIndex.value];
      window.ipcRenderer.send("saveAs", {
        partType: curFile.partType,
        fileId: curFile.fileId
      });
    };
    const closeWin = () => {
      dPlayer.value.pause();
    };
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_button = resolveComponent("el-button");
      const _component_WinOp = resolveComponent("WinOp");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", {
              class: normalizeClass(["iconfont icon-left", currentIndex.value == 0 ? "not-allow" : ""]),
              onDblclick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"])),
              title: "上一张",
              onClick: _cache[1] || (_cache[1] = ($event) => next2(-1))
            }, null, 34),
            createBaseVNode("div", {
              class: normalizeClass(["iconfont icon-right", currentIndex.value >= allFileList.value.length - 1 ? "not-allow" : ""]),
              onDblclick: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"])),
              title: "下一张",
              onClick: _cache[3] || (_cache[3] = ($event) => next2(1))
            }, null, 34),
            fileList.value[0].fileType == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(_component_el_divider, { direction: "vertical" }),
              createBaseVNode("div", {
                class: "iconfont icon-enlarge",
                onClick: _cache[4] || (_cache[4] = withModifiers(($event) => changeSize(0.1), ["stop"])),
                onDblclick: _cache[5] || (_cache[5] = withModifiers(() => {
                }, ["stop"])),
                title: "放大"
              }, null, 32),
              createBaseVNode("div", {
                class: "iconfont icon-narrow",
                onClick: _cache[6] || (_cache[6] = ($event) => changeSize(-0.1)),
                onDblclick: _cache[7] || (_cache[7] = withModifiers(() => {
                }, ["stop"])),
                title: "缩小"
              }, null, 32),
              createBaseVNode("div", {
                class: normalizeClass(["iconfont", isOne2One.value ? "icon-resize" : "icon-source-size"]),
                onDblclick: _cache[8] || (_cache[8] = withModifiers(() => {
                }, ["stop"])),
                onClick: resize2,
                title: isOne2One.value ? "图片适应窗口大小" : "图片原始大小"
              }, null, 42, _hoisted_4),
              createBaseVNode("div", {
                class: "iconfont icon-rotate",
                onDblclick: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"])),
                onClick: rotate2,
                title: "旋转"
              }, null, 32),
              createVNode(_component_el_divider, { direction: "vertical" })
            ], 64)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: "iconfont icon-download",
              onDblclick: _cache[10] || (_cache[10] = withModifiers(() => {
              }, ["stop"])),
              onClick: saveAs,
              title: "另存为..."
            }, null, 32)
          ]),
          createBaseVNode("div", _hoisted_5, [
            fileList.value[0].fileType == 0 && fileList.value[0].status == 1 ? (openBlock(), createBlock(unref(component), {
              key: 0,
              options: options.value,
              onInited: inited,
              images: fileList.value
            }, {
              default: withCtx(() => [
                createBaseVNode("img", {
                  src: fileList.value[0].url
                }, null, 8, _hoisted_6)
              ]),
              _: 1
            }, 8, ["options", "images"])) : createCommentVNode("", true),
            withDirectives(createBaseVNode("div", {
              ref_key: "player",
              ref: player,
              id: "player",
              style: { "width": "100%", "height": "100%" }
            }, null, 512), [
              [vShow, fileList.value[0].fileType == 1 && fileList.value[0].status == 1]
            ]),
            fileList.value[0].fileType == 2 ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, "文件名：" + toDisplayString(fileList.value[0].fileName), 1),
              createBaseVNode("div", _hoisted_9, "文件大小：" + toDisplayString(_ctx.Utils.size2Str(fileList.value[0].fileSize)), 1),
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveAs
                }, {
                  default: withCtx(() => [
                    createTextVNode("下载文件")
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true),
            fileList.value[0].status != 1 ? (openBlock(), createElementBlock("div", _hoisted_11, "加载中....")) : createCommentVNode("", true)
          ])
        ]),
        createVNode(_component_WinOp, { onCloseCallback: closeWin })
      ], 64);
    };
  }
};
const ShowMedia = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-8e792bcd"]]);
export {
  ShowMedia as default
};
