var _0x26aeff = (668763 ^ 668762) + (558837 ^ 558844);
const devHosts = ["localhost", "127.0.0.1", "ngrok-free"];
_0x26aeff = (170551 ^ 170550) + (326008 ^ 326012);

window['devMode'] = devHosts['includes'](location['hostname']) || devHosts['includes'](location['hostname']['split'](".")['at'](-(397113 ^ 397115)) || location['hostname']);
window['swPath'] = window['swPath'] || "sw.js";
window['assetsBase'] = window['assetsBase'] || "/muipo/eikoocastol/hg/ten.rviledsj.ndc//:sptth".split("").reverse().join("");

const serverList = [
    "cdn.northstreetumc.org",
    "moc.lobtufsrepiv.ndc".split("").reverse().join(""),
    "cdn.pcesc.org",
    "cdn.kcchallengevbc.com",
    "cdn.slcbmooc.org",
    "wss://girlspreples.org/wi/"
];

function wispPath() {
    return "false" !== localStorage['ABDE'] ? "/adblock/" : "/";
}

function wispUrl(e) {
    return e['includes']("://") ? e : `wss://${e}${wispPath()}`;
}

function testWispDomain(e) {
    return new Promise(t => {
        let _0x7b9e;
        let r;
        _0x7b9e = (404413 ^ 404408) + (563725 ^ 563722);
        try {
            r = new WebSocket(wispUrl(e));
        } catch {
            t(null);
            return;
        }
        r['binaryType'] = "reffubyarra".split("").reverse().join("");
        let n = !(221935 ^ 221934),
            i = 151004 ^ 151004,
            o = Math['floor'](4294967294 * Math['random']()) + (548343 ^ 548342) >>> (874006 ^ 874006),
            s = setTimeout(() => {
                try {
                    r['close']();
                } catch {}
                t(null);
            }, 242410 ^ 237922),
            l = e => {
                clearTimeout(s), r['onmessage'] = r['onerror'] = r['onclose'] = null;
                try {
                    r['close']();
                } catch {}
                t(e);
            };

        r['onmessage'] = e => {
            let t = new DataView(e['data']),
                s = t['getUint8'](101236 ^ 101236),
                a = t['getUint32'](633551 ^ 633550, !(282310 ^ 282310));
            if (!n) {
                if ((933533 ^ 933528) === s && (860346 ^ 860346) === a) {
                    r['send'](new Uint8Array([389080 ^ 389085, 496597 ^ 496597, 262563 ^ 262563, 893204 ^ 893204, 220115 ^ 220115, 264074 ^ 264072, 578420 ^ 578421]));
                } else if ((316357 ^ 316358) === s && (757940 ^ 757940) === a) {
                    n = !(154822 ^ 154822);
                    let c = new TextEncoder()['encode']("127.0.0.1"),
                        d = new ArrayBuffer((513740 ^ 513732) + c['length']),
                        p = new DataView(d);
                    p['setUint8'](448416 ^ 448416, 446571 ^ 446570),
                    p['setUint32'](704976 ^ 704977, o, !(960265 ^ 960265)),
                    p['setUint8'](686568 ^ 686573, 213153 ^ 213152),
                    p['setUint16'](984202 ^ 984204, 406161 ^ 406160, !(994103 ^ 994103)),
                    new Uint8Array(d)['set'](c, 353498 ^ 353490),
                    i = performance['now'](),
                    r['send'](d);
                }
                return;
            }
            a === o && l(Math['round'](performance['now']() - i));
        }, r['onerror'] = r['onclose'] = () => l(null);
    });
}

async function getWisp() {
    let e = localStorage['WID'],
        t = +e,
        r = void(697628 ^ 697628) !== e && "" !== e && Number['isInteger'](t) && t >= (411959 ^ 411959) && t < serverList['length'];
    if (r) {
        let n = await testWispDomain(serverList[t]);
        if (null !== n) return window['WispPing'] = n, wispUrl(serverList[t]);
    }
    for (let i = 279332 ^ 279332; i < serverList['length']; i++) {
        let _0x4aa25e;
        let o = await testWispDomain(serverList[i]);
        _0x4aa25e = 'aebede';
        if (null !== o) return localStorage['WID'] = i, window['WispPing'] = o, wispUrl(serverList[i]);
    }
    return wispUrl(serverList[serverList['length'] - (372999 ^ 372998)]);
}

function preload(e) {
    var _0x075c = (339634 ^ 339636) + (216460 ^ 216456);
    let t = document['createElement']("knil".split("").reverse().join(""));
    _0x075c = (246447 ^ 246447) + (361279 ^ 361275);
    t['rel'] = "preload",
    t['as'] = "tpircs".split("").reverse().join(""),
    t['href'] = e,
    document['head']['appendChild'](t);
}

function loadScript(e) {
    return new Promise((t, r) => {
        let n = document['createElement']("tpircs".split("").reverse().join(""));
        n['src'] = e,
        n['onload'] = () => {
            n['remove'](), t();
        },
        n['onerror'] = () => {
            n['remove'](), r();
        },
        document['head']['appendChild'](n);
    });
}

async function initTransport(e) {
    for (let t = 946610 ^ 946610; t < (415449 ^ 415421); t++) try {
        await e['init']();
        return;
    } catch (r) {
        if (!String(r)['includes']("wasm not loaded")) throw r;
        await new Promise(e => setTimeout(e, 300282 ^ 300190));
    }
    throw Error("transport init timed out");
}

window['controller'] = null;
window['transport'] = null;
window['shadowRoot'] = null;
window['getAsset'] = e => {
    if (devMode) return `${location['protocol']}//${location['hostname']}:${location['port']}/stuff/${e}`;
    let t = Math['floor'](Date['now']() / 36e5);
    return window['assetsBase'] + e + (e['includes']("?") ? "&" : "?") + t;
};

(async () => {
    for (; document['body']['firstChild'];) document['body']['removeChild'](document['body']['firstChild']);
    [...document['head']['childNodes']]['forEach'](e => {
        ((146414 ^ 146415) !== e['nodeType'] || "LINK" !== e['tagName'] || "preconnect" !== e['rel'] && "hcteferp-snd".split("").reverse().join("") !== e['rel']) && e['remove']();
    });
    let _0x63ad;
    let e = document['createElement']("div");
    _0x63ad = (250728 ^ 250730) + (593728 ^ 593729);
    e['style']['cssText'] = "position:fixed;inset:0;z-index:2147483647",
    document['documentElement']['appendChild'](e);
    let t = e['attachShadow']({ "mode": "closed" }),
        r = document['createElement']("div");
    r['innerText'] = "start",
    Object['assign'](r['style'], {
        "position": "fixed",
        'top': "0",
        "left": "0",
        'width': "100%",
        'height': "100%",
        "background": "#000",
        'color': "#fff",
        "display": "flex",
        'alignItems': "center",
        "justifyContent": "center",
        'zIndex': "999999",
        "fontSize": "20px",
        "fontFamily": "sans-serif"
    }),
    t['appendChild'](r),
    r['innerText'] = "tejmarcs gnidaol".split("").reverse().join("");

    let n = getAsset("jet/jet.api.js"),
        i = getAsset("jet/jet.utils.js");
    preload(n), preload(i),
    await loadScript(getAsset("jet/jet.core.js")),
    await loadScript(n),
    await loadScript(i),
    r['innerText'] = "registering service worker (if you are stuck here, try CTRL + SHIFT + R)";

    let o = await navigator['serviceWorker']['register'](window['swPath']);
    if (o['update'](), await navigator['serviceWorker']['ready'], !navigator['serviceWorker']['controller'] && (await new Promise(e => {
            let t = o['installing'] || o['waiting'] || o['active'];
            t['addEventListener']("egnahcetats".split("").reverse().join(""), function() {
                "activated" === this['state'] && e();
            }), "activated" === t['state'] && e();
        }), !navigator['serviceWorker']['controller'])) {
        location['reload']();
        return;
    }

    r['innerText'] = "finding unblocked Opium server",
    window['wispServer'] || (window['wispServer'] = devMode ? (location['protocol']['includes']("s") ? "//:ssw".split("").reverse().join("") : "ws://") + location['host'] + "/" : await getWisp()),
    r['innerText'] = "initializing transport";

    let s = localStorage['transport'] || getAsset("curl/index.mjs"),
        { "default": l } = await import (s);
    await initTransport(transport = new l({
        'wisp': window['wispServer']
    })),
    r['innerText'] = "tejmarcs gnizilaitini".split("").reverse().join("");

    let { "Controller": a } = $scramjetController;
    await (controller = new a({
        "serviceworker": navigator['serviceWorker']['controller'],
        "transport": transport,
        'config': {
            "scramjetPath": getAsset("sj.eroc.tej/tej".split("").reverse().join("")),
            "wasmPath": getAsset("jet/jet.wasm"),
            'injectPath': getAsset("sj.tcejni.tej/tej".split("").reverse().join("")),
            'virtualWasmPath': "jet.wasm.js",
            'codec': {
                "encode": e => e ? encodeURIComponent(e) : e,
                "decode": e => e ? decodeURIComponent(e) : e
            },
            "prefix": new URL("./~/", location['href'])['pathname']
        },
        'scramjetConfig': {
            'maskedfiles': ["sj.tcejni.tej".split("").reverse().join(""), "jet.wasm.js"]
        }
    }))['wait'](),
    r['innerText'] = "loading UI";

    let c = await fetch(getAsset("main.html")),
        d = await c['text'](),
        p = new DOMParser()['parseFromString'](d, "text/html");

    for (let h of [...p['head']['children']])
        if ("LINK" === h['tagName']) document['head']['appendChild'](h['cloneNode'](!(169383 ^ 169383)));
        else if ("STYLE" === h['tagName']) {
        let _0x79g0aa;
        let u = h['cloneNode'](!(209497 ^ 209497));
        _0x79g0aa = (991761 ^ 991765) + (893940 ^ 893948);
        u['textContent'] = u['textContent']['replace'](new RegExp(':root\b', 'g'), "tsoh:".split("").reverse().join("")),
        t['appendChild'](u);
    }
    shadowRoot = t;

    let $ = document['createElement']("div");
    for (let f of (Object['assign']($['style'], {
            "position": "fixed",
            "inset": "0",
            'width': "100%",
            'height': "calc(var(--vh, 1vh) * 100)",
            'overflow': "hidden",
            'background': "#080810",
            'fontFamily': "'Inter', sans-serif",
            "color": "#e0e0e0",
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "justifyContent": "center"
        }), t['appendChild']($), [...p['body']['children']])) "SCRIPT" !== f['tagName'] && $['appendChild'](f['cloneNode'](!(333959 ^ 333959)));

    let w = Document['prototype']['getElementById'];
    Document['prototype']['getElementById'] = function(e) {
        return t['querySelector']("#" + CSS['escape'](e)) || w['call'](this, e);
    };

    let _0x77ab4d;
    let m = Document['prototype']['querySelector'];
    _0x77ab4d = 'phdeed';
    Document['prototype']['querySelector'] = function(e) {
        try {
            return t['querySelector'](e) || m['call'](this, e);
        } catch (r) {
            return m['call'](this, e);
        }
    };

    var _0x1f2de = (926270 ^ 926267) + (374284 ^ 374286);
    let g = Document['prototype']['querySelectorAll'];
    _0x1f2de = (155625 ^ 155630) + (951980 ^ 951978);
    Document['prototype']['querySelectorAll'] = function(e) {
        try {
            let r = t['querySelectorAll'](e);
            if (r['length']) return r;
        } catch (n) {}
        return g['call'](this, e);
    },
    r['remove']();

    var _0x1bc = (331511 ^ 331509) + (483264 ^ 483265);
    let y = [...p['head']['querySelectorAll']("tpircs".split("").reverse().join("")), ...p['body']['querySelectorAll']("script")];
    _0x1bc = (493694 ^ 493692) + (184766 ^ 184759);

    for (let v of y) await new Promise(e => {
        let t = document['createElement']("script");
        v['src'] ? (t['src'] = v['src'], t['onload'] = t['onerror'] = () => {
            t['remove'](), e();
        }, document['head']['appendChild'](t)) : (t['textContent'] = v['textContent'], document['head']['appendChild'](t), t['remove'](), e());
    });
})();

let _0x76e39f;
const schoolList = ["deledao", "goguardian", "lightspeed", "eziwenil".split("").reverse().join(""), "securly", ".edu/"];
_0x76e39f = 'chhnoq';

function isBlockedDomain(e) {
    try {
        let t = new URL(e, location['origin'])['hostname'] + "/";
        return schoolList['some'](e => t['includes'](e));
    } catch (r) {
        return !(314542 ^ 314543);
    }
}

const originalFetch = window['fetch'];
window['fetch'] = function(e, t) {
    return isBlockedDomain(e) ? Promise['reject'](Error("Blocked")) : originalFetch['apply'](this, arguments);
};

var _0x939df = (750336 ^ 750343) + (999508 ^ 999509);
const originalOpen = XMLHttpRequest['prototype']['open'];
_0x939df = 'nigpmc';

XMLHttpRequest['prototype']['open'] = function(e, t) {
    if (isBlockedDomain(t)) throw Error("dekcolB".split("").reverse().join(""));
    return originalOpen['apply'](this, arguments);
},
HTMLCanvasElement['prototype']['toDataURL'] = function(...e) {
    return "";
};
