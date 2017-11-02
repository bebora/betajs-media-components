/*!
betajs-media-components - v0.0.77 - 2017-11-02
Copyright (c) Ziggeo,Oliver Friedmann
Apache-2.0 Software License.
*/
(function () {

var Scoped = this.subScope();

Scoped.binding("browser", "global:BetaJS.Browser");
Scoped.binding("dynamics", "global:BetaJS.Dynamics");
Scoped.binding("module", "global:BetaJS.MediaComponents");

Scoped.extend("module:Assets.playerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''": function (obj) { with (obj) { return activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''; } }, "title": function (obj) { with (obj) { return title; } }, "submittable": function (obj) { with (obj) { return submittable; } }, "string('submit-video')": function (obj) { with (obj) { return string('submit-video'); } }, "rerecordable": function (obj) { with (obj) { return rerecordable; } }, "string('rerecord-video')": function (obj) { with (obj) { return string('rerecord-video'); } }, "!playing": function (obj) { with (obj) { return !playing; } }, "string('play-video')": function (obj) { with (obj) { return string('play-video'); } }, "disablepause ? css + '-disabled' : ''": function (obj) { with (obj) { return disablepause ? css + '-disabled' : ''; } }, "playing": function (obj) { with (obj) { return playing; } }, "disablepause ? string('pause-video-disabled') : string('pause-video')": function (obj) { with (obj) { return disablepause ? string('pause-video-disabled') : string('pause-video'); } }, "string('elapsed-time')": function (obj) { with (obj) { return string('elapsed-time'); } }, "formatTime(position)": function (obj) { with (obj) { return formatTime(position); } }, "formatTime(duration || position)": function (obj) { with (obj) { return formatTime(duration || position); } }, "fullscreen": function (obj) { with (obj) { return fullscreen; } }, "fullscreened ? string('exit-fullscreen-video') : string('fullscreen-video')": function (obj) { with (obj) { return fullscreened ? string('exit-fullscreen-video') : string('fullscreen-video'); } }, "fullscreened ? 'small' : 'full'": function (obj) { with (obj) { return fullscreened ? 'small' : 'full'; } }, "airplaybuttonvisible": function (obj) { with (obj) { return airplaybuttonvisible; } }, "castbuttonvisble": function (obj) { with (obj) { return castbuttonvisble; } }, "streams.length > 1 && currentstream": function (obj) { with (obj) { return streams.length > 1 && currentstream; } }, "string('change-resolution')": function (obj) { with (obj) { return string('change-resolution'); } }, "currentstream_label": function (obj) { with (obj) { return currentstream_label; } }, "startUpdateVolume(domEvent)": function (obj) { with (obj) { return startUpdateVolume(domEvent); } }, "stopUpdateVolume(domEvent)": function (obj) { with (obj) { return stopUpdateVolume(domEvent); } }, "progressUpdateVolume(domEvent)": function (obj) { with (obj) { return progressUpdateVolume(domEvent); } }, "{width: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}": function (obj) { with (obj) { return {width: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}; } }, "string('volume-button')": function (obj) { with (obj) { return string('volume-button'); } }, "string(volume > 0 ? 'volume-mute' : 'volume-unmute')": function (obj) { with (obj) { return string(volume > 0 ? 'volume-mute' : 'volume-unmute'); } }, "css + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off'))": function (obj) { with (obj) { return css + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off')); } }, "disableseeking ? css + '-disabled' : ''": function (obj) { with (obj) { return disableseeking ? css + '-disabled' : ''; } }, "startUpdatePosition(domEvent)": function (obj) { with (obj) { return startUpdatePosition(domEvent); } }, "stopUpdatePosition(domEvent)": function (obj) { with (obj) { return stopUpdatePosition(domEvent); } }, "progressUpdatePosition(domEvent)": function (obj) { with (obj) { return progressUpdatePosition(domEvent); } }, "{width: Math.round(duration ? cached / duration * 100 : 0) + '%'}": function (obj) { with (obj) { return {width: Math.round(duration ? cached / duration * 100 : 0) + '%'}; } }, "{width: Math.round(duration ? position / duration * 100 : 0) + '%'}": function (obj) { with (obj) { return {width: Math.round(duration ? position / duration * 100 : 0) + '%'}; } }, "string('video-progress')": function (obj) { with (obj) { return string('video-progress'); } }, "submit()": function (obj) { with (obj) { return submit(); } }, "rerecord()": function (obj) { with (obj) { return rerecord(); } }, "play()": function (obj) { with (obj) { return play(); } }, "pause()": function (obj) { with (obj) { return pause(); } }, "toggle_fullscreen()": function (obj) { with (obj) { return toggle_fullscreen(); } }, "show_airplay_devices()": function (obj) { with (obj) { return show_airplay_devices(); } }, "toggle_stream()": function (obj) { with (obj) { return toggle_stream(); } }, "toggle_volume()": function (obj) { with (obj) { return toggle_volume(); } }/**/ });
    return {
        "modern": {
            css: "ba-videoplayer-theme-modern",
            tmplcontrolbar: "<div data-selector=\"video-title-block\" class=\"{{css}}-video-title-container {{activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''}}\" ba-if=\"{{title}}\">\n\t<p class=\"{{css}}-video-title\">\n\t\t{{title}}\n\t</p>\n</div>\n\n<div class=\"{{css}}-dashboard {{activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''}}\">\n        <div data-selector=\"submit-video-button\" class=\"{{css}}-leftbutton-container\" ba-if=\"{{submittable}}\"  ba-click=\"submit()\">\n            <div class=\"{{css}}-button-inner\">\n                {{string('submit-video')}}\n            </div>\n        </div>\n       <div data-selector=\"button-icon-ccw\" class=\"{{css}}-leftbutton-container\" ba-if=\"{{rerecordable}}\" ba-click=\"rerecord()\" title=\"{{string('rerecord-video')}}\">\n           <div class=\"{{css}}-button-inner\">\n               <i class=\"{{css}}-icon-ccw\"></i>\n           </div>\n       </div>\n\t<div data-selector=\"button-icon-play\" class=\"{{css}}-leftbutton-container\" ba-if=\"{{!playing}}\" ba-click=\"play()\" title=\"{{string('play-video')}}\">\n\t\t<div class=\"{{css}}-button-inner\">\n\t\t\t<i class=\"{{css}}-icon-play\"></i>\n\t\t</div>\n\t</div>\n\t<div data-selector=\"button-icon-pause\" class=\"{{css}}-leftbutton-container {{disablepause ? css + '-disabled' : ''}}\"\n\t\t ba-if=\"{{playing}}\" ba-click=\"pause()\" title=\"{{disablepause ? string('pause-video-disabled') : string('pause-video')}}\">\n\t\t<div class=\"{{css}}-button-inner\">\n\t\t\t<i class=\"{{css}}-icon-pause\"></i>\n\t\t</div>\n\t</div>\n\t<div class=\"{{css}}-time-container\">\n\t\t<div class=\"{{css}}-time-value\" title=\"{{string('elapsed-time')}}\">{{formatTime(position)}}/{{formatTime(duration || position)}}</div>\n\t</div>\n\n\t<div data-selector=\"button-icon-resize-full\" class=\"{{css}}-rightbutton-container\"\n\t\tba-if=\"{{fullscreen}}\" ba-click=\"toggle_fullscreen()\" title=\"{{ fullscreened ? string('exit-fullscreen-video') : string('fullscreen-video') }}\" >\n\t\t<div class=\"{{css}}-button-inner {{css}}-full-screen-btn-inner\">\n\t\t\t<i class=\"{{css}}-icon-resize-{{fullscreened ? 'small' : 'full'}}\"></i>\n\t\t</div>\n\t</div>\n\n\t<div data-selector=\"button-airplay\" class=\"{{css}}-rightbutton-container {{css}}-airplay-container\" ba-show=\"{{airplaybuttonvisible}}\" ba-click=\"show_airplay_devices()\">\n\t\t<svg width=\"16px\" height=\"11px\" viewBox=\"0 0 16 11\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t<!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->\n\t\t\t<title>Airplay</title>\n\t\t\t<desc>Airplay icon.</desc>\n\t\t\t<defs></defs>\n\t\t\t<g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n\t\t\t\t<path d=\"M4,11 L12,11 L8,7 L4,11 Z M14.5454545,0 L1.45454545,0 C0.654545455,0 0,0.5625 0,1.25 L0,8.75 C0,9.4375 0.654545455,10 1.45454545,10 L4.36363636,10 L4.36363636,8.75 L1.45454545,8.75 L1.45454545,1.25 L14.5454545,1.25 L14.5454545,8.75 L11.6363636,8.75 L11.6363636,10 L14.5454545,10 C15.3454545,10 16,9.4375 16,8.75 L16,1.25 C16,0.5625 15.3454545,0 14.5454545,0 L14.5454545,0 Z\" sketch:type=\"MSShapeGroup\"></path>\n\t\t\t</g>\n\t\t</svg>\n\t</div>\n\n\t<div data-selector=\"button-chromecast\" class=\"{{css}}-rightbutton-container {{css}}-cast-button-container\" ba-show=\"{{castbuttonvisble}}\">\n\t\t<button class=\"{{css}}-gcast-button\" is=\"google-cast-button\"></button>\n\t</div>\n\n\t<div data-selector=\"button-stream-label\" class=\"{{css}}-rightbutton-container\" ba-if=\"{{streams.length > 1 && currentstream}}\" ba-click=\"toggle_stream()\" title=\"{{string('change-resolution')}}\">\n\t\t<div class=\"{{css}}-button-inner\">\n\t\t\t<span class=\"{{css}}-button-text\">{{currentstream_label}}</span>\n\t\t</div>\n\t</div>\n\t<div class=\"{{css}}-volumebar\">\n\t\t<div data-selector=\"button-volume-bar\" class=\"{{css}}-volumebar-inner\"\n\t\t        onmousedown=\"{{startUpdateVolume(domEvent)}}\"\n                onmouseup=\"{{stopUpdateVolume(domEvent)}}\"\n                onmouseleave=\"{{stopUpdateVolume(domEvent)}}\"\n                onmousemove=\"{{progressUpdateVolume(domEvent)}}\">\n\t\t\t<div class=\"{{css}}-volumebar-position\" ba-styles=\"{{{width: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}}}\" title=\"{{string('volume-button')}}\"></div>\n\t\t</div>\n\t</div>\n\t<div data-selector=\"button-icon-volume\" class=\"{{css}}-rightbutton-container {{css}}-volume-button-container\" ba-click=\"toggle_volume()\" title=\"{{string(volume > 0 ? 'volume-mute' : 'volume-unmute')}}\">\n\t\t<div class=\"{{css}}-button-inner\">\n\t\t\t<i class=\"{{css + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off')) }}\"></i>\n\t\t</div>\n\t</div>\n\t<div class=\"{{css}}-progressbar {{disableseeking ? css + '-disabled' : ''}}\">\n\t\t<div data-selector=\"progress-bar-inner\" class=\"{{css}}-progressbar-inner\"\n\t\t     onmousedown=\"{{startUpdatePosition(domEvent)}}\"\n\t\t     onmouseup=\"{{stopUpdatePosition(domEvent)}}\"\n\t\t     onmouseleave=\"{{stopUpdatePosition(domEvent)}}\"\n\t\t     onmousemove=\"{{progressUpdatePosition(domEvent)}}\">\n\t\t<div class=\"{{css}}-progressbar-cache\" ba-styles=\"{{{width: Math.round(duration ? cached / duration * 100 : 0) + '%'}}}\"></div>\n\t\t<div class=\"{{css}}-progressbar-position\" ba-styles=\"{{{width: Math.round(duration ? position / duration * 100 : 0) + '%'}}}\" title=\"{{string('video-progress')}}\"></div>\n\t</div>\n</div>\n",
            cssloader: ie8 ? "ba-videoplayer" : "",
            cssmessage: "ba-videoplayer",
            cssplaybutton: ie8 ? "ba-videoplayer" : ""
        }
    };
});
Scoped.extend("module:Assets.recorderthemes", [
    "dynamics:Parser"
], function(Parser) {
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "primaryrecord ? 'videocam' : 'upload'": function (obj) { with (obj) { return primaryrecord ? 'videocam' : 'upload'; } }, "has_primary": function (obj) { with (obj) { return has_primary; } }, "enable_primary_select && primary_select_capture": function (obj) { with (obj) { return enable_primary_select && primary_select_capture; } }, "primary_select(domEvent)": function (obj) { with (obj) { return primary_select(domEvent); } }, "primary_accept_string": function (obj) { with (obj) { return primary_accept_string; } }, "enable_primary_select && !primary_select_capture": function (obj) { with (obj) { return enable_primary_select && !primary_select_capture; } }, "primary_label": function (obj) { with (obj) { return primary_label; } }, "has_secondary": function (obj) { with (obj) { return has_secondary; } }, "enable_secondary_select && secondary_select_capture": function (obj) { with (obj) { return enable_secondary_select && secondary_select_capture; } }, "secondary_select(domEvent)": function (obj) { with (obj) { return secondary_select(domEvent); } }, "secondary_accept_string": function (obj) { with (obj) { return secondary_accept_string; } }, "enable_secondary_select && !secondary_select_capture": function (obj) { with (obj) { return enable_secondary_select && !secondary_select_capture; } }, "secondary_label": function (obj) { with (obj) { return secondary_label; } }, "primary()": function (obj) { with (obj) { return primary(); } }, "secondary()": function (obj) { with (obj) { return secondary(); } }/**/ });
    return {
        "modern": {
            css: "ba-videorecorder-theme-modern",
            cssmessage: "ba-videorecorder",
            cssloader: "ba-videorecorder",
            tmplchooser: "<div class=\"{{css}}-chooser-container\">\n\n\t<div class=\"{{css}}-chooser-button-container\">\n\n\t\t<div class=\"{{css}}-chooser-icon-container\">\n\t\t\t<i class=\"{{css}}-icon-{{primaryrecord ? 'videocam' : 'upload'}}\"></i>\n\t\t</div>\n\t\t<div>\n\t\t\t<div data-selector=\"chooser-primary-button\" class=\"{{css}}-chooser-primary-button\"\n\t\t\t     ba-click=\"primary()\"\n\t\t\t     ba-if=\"{{has_primary}}\">\n\t\t\t\t<input data-selector=\"file-input-opt1\" ba-if=\"{{enable_primary_select && primary_select_capture}}\"\n\t\t\t\t       type=\"file\"\n\t\t\t\t       class=\"{{css}}-chooser-file\"\n\t\t\t\t       style=\"height:100\"\n\t\t\t\t       onchange=\"{{primary_select(domEvent)}}\"\n\t\t\t\t       accept=\"{{primary_accept_string}}\"\n\t\t\t\t       capture />\n\t\t\t\t<input data-selector=\"file-input-opt2\" ba-if=\"{{enable_primary_select && !primary_select_capture}}\"\n\t\t\t\t       type=\"file\"\n\t\t\t\t       class=\"{{css}}-chooser-file\"\n\t\t\t\t       style=\"height:100\"\n\t\t\t\t       onchange=\"{{primary_select(domEvent)}}\"\n\t\t\t\t       accept=\"{{primary_accept_string}}\" />\n\t\t\t\t<span>\n\t\t\t\t\t{{primary_label}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<div data-selector=\"chooser-secondary-button\" class=\"{{css}}-chooser-secondary-button\"\n\t\t\t     ba-click=\"secondary()\"\n\t\t\t     ba-if=\"{{has_secondary}}\">\n\t\t\t\t<input data-selector=\"file-input-secondary-opt1\" ba-if=\"{{enable_secondary_select && secondary_select_capture}}\"\n\t\t\t\t       type=\"file\"\n\t\t\t\t       class=\"{{css}}-chooser-file\"\n\t\t\t\t       style=\"height:100\"\n\t\t\t\t       onchange=\"{{secondary_select(domEvent)}}\"\n\t\t\t\t       accept=\"{{secondary_accept_string}}\" />\n\t\t\t\t<input data-selector=\"file-input-secondary-opt2\" ba-if=\"{{enable_secondary_select && !secondary_select_capture}}\"\n\t\t\t\t       type=\"file\"\n\t\t\t\t       class=\"{{css}}-chooser-file\"\n\t\t\t\t       style=\"height:100\"\n\t\t\t\t       onchange=\"{{secondary_select(domEvent)}}\"\n\t\t\t\t       accept=\"{{secondary_accept_string}}\" />\n\t\t\t\t<span>\n\t\t\t\t\t{{secondary_label}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"
        }
    };
});
}).call(Scoped);