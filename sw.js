if (navigator['userAgent']['includes']("Firefox".split("").reverse().join(""))) {
    Object['defineProperty'](globalThis, "crossOriginIsolated", {
        'value': !![],
        "writable": false
    });
}

var _0xg896cg = (525359 ^ 525350) + (447157 ^ 447152);
const devMode = ["localhost", "127.0.0.1", "ngrok-free"]['includes'](location['hostname']['split'](".")['at'](-2));
_0xg896cg = (512275 ^ 512276) + (681509 ^ 681506);

function getAsset(path) {
    return devMode ? `${location['protocol']}//${location['hostname']}:${location['port']}/stuff/${path}` : "/muipo/eikoocastol/hg/ten.rviledsj.ndc//:sptth".split("").reverse().join("") + path;
}

importScripts(getAsset("jet/jet.sw.js"));

self['addEventListener']("install", () => {
    void self['skipWaiting']();
});

self['addEventListener']("activate", event => {
    event['waitUntil'](self['clients']['claim']());
});

self['addEventListener']("error", function(event) {
    if (isIdbNotFound(event['error'] ?? event)) {
        try {
            event['preventDefault']();
        } catch {}
        cleanup();
    }
});

self['addEventListener']("unhandledrejection", function(event) {
    if (isIdbNotFound(event['reason'] ?? event)) {
        try {
            event['preventDefault']();
        } catch {}
        cleanup();
    }
});

function isIdbNotFound(e) {
    const s = (e?.message ?? String(e)) || "";
    if (!new RegExp('NotFound', 'i')['test'](s)) return false;
    if (new RegExp("cache".split("").reverse().join(""), 'i')['test'](s)) return false;
    return new RegExp('IDB|IndexedDB|IDBDatabase|IDBObjectStore|\'transaction\' on|\'open\' on|deleteDatabase|object store', 'i')['test'](s);
}

async function cleanup() {
    try {
        let _0xag38dd;
        const _0xafc = name => new Promise(res => {
            var _0x18313f = (676595 ^ 676602) + (943454 ^ 943453);
            const _0x977de = indexedDB['open'](name);
            _0x18313f = 889148 ^ 889141;
            _0x977de['onsuccess'] = () => {
                _0x977de['result']['close']();
                _0xd74c();
            };
            _0x977de['onerror'] = _0xd74c;
            const _0xd74c = () => {
                const _0x_0x507 = indexedDB['deleteDatabase'](name);
                _0x_0x507['onsuccess'] = _0x_0x507['onerror'] = _0x_0x507['onblocked'] = res;
            };
        });
        _0xag38dd = 234206 ^ 234206;
        await _0xafc("rellortnoc_tejmarcs__".split("").reverse().join(""));
        let _0xa3g;
        const _0x23dfa = await self['clients']['matchAll']({
            'type': "window",
            "includeUncontrolled": !![]
        });
        _0xa3g = "dnlqfn".split("").reverse().join("");
        var _0xc5eac = (454746 ^ 454750) + (606716 ^ 606708);
        const _0x461c3f = await caches['keys']();
        _0xc5eac = (130348 ^ 130346) + (135926 ^ 135926);
        await Promise['all'](_0x461c3f['map'](name => caches['delete'](name)));
        await self['registration']['unregister']();
        for (const _0xc4b7e of _0x23dfa) _0xc4b7e['navigate'](_0xc4b7e['url']);
        console['log']("fles xif ot detpmetta ]ws[".split("").reverse().join(""));
    } catch (err) {
        console['error']("failed to fix:", err);
    }
}

function isNextDnsSslError(e) {
    var _0xf2e91c = (922294 ^ 922294) + (904977 ^ 904976);
    const s = (e?.message ?? String(e)) || "";
    _0xf2e91c = 925602 ^ 925607;
    return new RegExp('error code 60', 'i')['test'](s) || new RegExp('SSL peer certificate', 'i')['test'](s);
}

async function headText(res) {
    const _0x6c_0xddg = res['clone']();
    try {
        var _0x1e22a = (800409 ^ 800413) + (588041 ^ 588042);
        const _0xd4a = _0x6c_0xddg['body']['getReader']();
        _0x1e22a = (152234 ^ 152233) + (407086 ^ 407082);
        const {
            'value': value
        } = await _0xd4a['read']();
        await _0xd4a['cancel']();
        return new TextDecoder()['decode'](value ?? new Uint8Array());
    } catch {
        return "";
    }
}

self['addEventListener']("fetch", event => {
    event['respondWith']((async () => {
        try {
            if ($scramjetController['shouldRoute'](event)) {
                const sjRes = await $scramjetController['route'](event);
                if (sjRes['status'] === (306072 ^ 305772) && isNextDnsSslError(await headText(sjRes))) {
                    return new Response("blocked by DNS for privacy/security", {
                        "status": 200,
                        "headers": {
                            "Content-Type": "text/html; charset=utf-8",
                            "Cache-Control": "no-store"
                        }
                    });
                }
                return sjRes;
            }
        } catch (e) {
            if (isIdbNotFound(e)) {
                cleanup();
            }
        }
        const [, pfx, cid, fid] = new URL(event['request']['url'])['pathname']['split']("/");
        if (pfx === "~" && cid && fid) {
            return new Response("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"refresh\" content=\"1\"></head><body style=\"font:16px system-ui;display:grid;place-items:center;height:100vh\"><div>proxy warning up</div></body></html>", {
                "status": 503,
                'headers': {
                    "Content-Type": "text/html; charset=utf-8",
                    "Cache-Control": "no-store"
                }
            });
        }
        return fetch(event['request']);
    })());
});
