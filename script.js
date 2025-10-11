const channels = {
    aniplus: { name: "Aniplus", type: "hls", manifestUri: "https://amg18481-amg18481c1-amgplt0352.playout.now3.amagi.tv/playlist/amg18481-amg18481c1-amgplt0352/playlist.m3u8", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJj494OpI0bKrTrvcHqEkzMYzqtfLNdWjQrg&s" },
    A2Z: { name: "A2Z", type: "hls", manifestUri: "https://corsproxy.io/?https://z2g2g7n2.stackpathcdn.com/live/ch22/playlist.m3u8", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A2Z_Channel_11_logo.svg/250px-A2Z_Channel_11_logo.svg.png"},
    ABC_AUSTRALIA: { name: "ABC AUSTRALIA", manifestUri: "https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1ce2f5dbb44326a273c7c113459032/index.m3u8", logo: "https://i.imgur.com/Ddt3I7C.png"},
    ALJAZEERA: { name: "ALJAZEERA", manifestUri: "https://live-hls-web-aja.getaj.net/AJA/01.m3u8", logo: "https://i.imgur.com/I392g9H.png"},
    animalplanet: { name: "Animal Planet", type: "clearkey", manifestUri: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd", keyId: "436b69f987924fcbbc06d40a69c2799a", key: "c63d5b0d7e52335b61aeba4f6537d54d", logo: "https://i.imgur.com/SkpFpW4.png" },
    nasa: { name: "NASA TV", manifestUri: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-Public/master.m3u8", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" },
    ARIRANG: { name: "ARIRANG", manifestUri: "https://arirang.dms.llnwd.net/arirang/arirangtv_1/index.m3u8", logo: "https://i.imgur.com/kPwxo3x.png"},
    AXN: { name: "AXN", manifestUri: "http://159.138.243.158/axn/axn.m3u8", logo: "https://i.imgur.com/9l33SGL.png"},
    BBC_EARTH: { name: "BBC EARTH", manifestUri: "https://bcovlive-a.akamaihd.net/e2197262f3a2489d8176b63d2744155b/as-east-1/6232014856001/playlist.m3u8", logo: "https://i.imgur.com/X2WkTS0.png"},
    BLOOMBERG: { name: "BLOOMBERG", manifestUri: "https://cdn-b-02.bltv.me/btv/live/master.m3u8", logo: "https://i.imgur.com/9Y1l1aX.png"},
    discovery: { name: "Discovery Channel", type: "clearkey", manifestUri: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/discovery/default/index.mpd", keyId: "d9ac48f5131641a789328257e778ad3a", key: "b6e67c37239901980c6e37e0607ceee6", logo: "https://i.imgur.com/XsvAk5H.png" },
    nickelodeon: { name: "Nickelodeon", type: "clearkey", manifestUri: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickelodeon/default/index.mpd", keyId: "9ce58f37576b416381b6514a809bfd8b", key: "f0fbb758cdeeaddfa3eae538856b4d72", logo: "https://i.imgur.com/4o5dNZA.png" },
    nickjr: { name: "Nick Jr", type: "clearkey", manifestUri: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd", keyId: "bab5c11178b646749fbae87962bf5113", key: "0ac679aad3b9d619ac39ad634ec76bc8", logo: "https://i.imgur.com/iIVYdZP.png" },
    pbo: { name: "PBO", type: "clearkey", manifestUri: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd", keyId: "dcbdaaa6662d4188bdf97f9f0ca5e830", key: "31e752b441bd2972f2b98a4b1bc1c7a1", logo: "https://i.imgur.com/550RYpJ.png" },
    iqiyi: { name: "iQIYI", type: "clearkey", manifestUri: "https://linearjitp-playback.astro.com.my/dash-wv/linear/1006/default_ott.mpd", keyId: "7ef7e913ce85a1131b27036069169a10", key: "77d98ed71db7524c27875a09a975f9e6", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3X1_D_GkWQbMiZzbmaoFets_gAeM6zKGhvtuAD7y46OH9zcqWCnLoG3K&s=10", userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" },
    tv5: { name: "TV 5 HD", type: "clearkey", manifestUri: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd", keyId: "2615129ef2c846a9bbd43a641c7303ef", key: "07c7f996b1734ea288641a68e1cfdc4d", logo: "https://vignette.wikia.nocookie.net/russel/images/f/f9/TV5_Logo_2011.png/revision/latest?cb=20161204035016" },
    kapamilya: { name: "Kapamilya Channel HD", type: "clearkey", manifestUri: "https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd", keyId: "bd17afb5dc9648a39be79ee3634dd4b8", key: "3ecf305d54a7729299b93a3d69c02ea5", logo: "https://cms.cignal.tv/Upload/Images/Kapamilya Channel Logo alpha.png" },
};

const EPG_URLS = [
    "https://raw.githubusercontent.com/AqFad2811/epg/main/epg.xml", "https://raw.githubusercontent.com/AqFad2811/epg/main/unifitv.xml", "https://raw.githubusercontent.com/AqFad2811/epg/main/astro.xml", "https://raw.githubusercontent.com/azimabid00/epg/main/unifi_epg.xml", "https://i.mjh.nz/PlutoTV/all.xml", "https://raw.githubusercontent.com/azimabid00/epg/main/astro_epg.xml", "https://azimabid00.github.io/epg/astro_epg.xml", "https://corsproxy.io/?https://epgshare01.online/epgshare01/epg_ripper_PH1.xml.gz", "https://corsproxy.io/?https://epgshare01.online/epgshare01/epg_ripper_PH2.xml.gz", "https://corsproxy.io/?https://epgshare01.online/epgshare01/epg_ripper_ID1.xml.gz", "https://corsproxy.io/?https://epgshare01.online/epgshare01/epg_ripper_MY1.xml.gz", "https://corsproxy.io/?https://epgshare01.online/epgshare01/epg_ripper_HK1.xml.gz", "https://corsproxy.io/?https://epgshare01.online/epgshare01/epg_ripper_US1.xml.gz", "https://raw.githubusercontent.com/atone77721/CIGNAL_EPG/refs/heads/main/cignal_epg.xml", "https://raw.githubusercontent.com/atone77721/CIGNAL_EPG/refs/heads/main/sky_epg.xml"
];
const i18n = {
    en: {
        guideControls: "<li><kbd>M</kbd> - Settings</li><li><kbd>E</kbd> - EPG</li><li><kbd>H</kbd> - User Manual</li><li><kbd>&#8593;</kbd>/<kbd>&#8595;</kbd> - Change channel</li><li><kbd>&#8592;</kbd> - open channel list</li><li><kbd>&#8592;</kbd><kbd>&#8592;</kbd> - open group list</li><li><kbd>&#8594;</kbd> - open channel settings</li><li><kbd>OK</kbd>/<kbd>Enter</kbd> - Show info</li><li><kbd>ESC</kbd> - Go Back</li>",
        settings_menu: "Settings", allChannels: "ALL CHANNELS", epg_menu: "EPG", guide_menu: "GUIDE", guideControlsHeadline: "Controls", groups: "GROUPINGS", channelSettings: "Channel settings", channelSettingSubtitle: "subtitle / audio", channelSettingFavs: "Add to Favorites", favourites: "FAVORITE"
    }
};
const channelSettingsOptions = [
    { id: 'channel-setting-subs', langid: 'channelSettingSubtitle'},
    { id: 'channel-setting-favourite', langid: 'channelSettingFavs'}
];

/* --------------------- App State & DOM refs --------------------- */
document.addEventListener('DOMContentLoaded', () => {

const DEFAULT_CHANNEL_KEY = 'aniplus'; // autoplay Aniplus
let playerHls = null; // hls.js instance
let iCurrentChannel = 0, aFilteredChannelKeys = [], sSelectedGroup = '__all';
let bNavOpened = false, bGroupsOpened = false, bGuideOpened = false, bChannelSettingsOpened = false;
let iChannelSettingsIndex = 0, channelNameTimeout;
let isInitialLoad = true;
let isFirstActionDone = false;
const EPG_INDEX = { byId: {}, byName: {} };

const oBody = document.body, getEl = (id) => document.getElementById(id);
const oAvPlayer = getEl("player"), oNav = getEl("nav"), oChannelSettings = getEl("channel_settings"), oChannelSettingsList = getEl("channel_settings_list"), oChannelList = getEl("channel_list"), oChannelInfo = getEl("channel_info"), oStreamInfo = getEl("stream-info"), oGuide = getEl("guide"), oLoader = getEl("loader"), oSearchField = getEl("search_field"), oIdleAnimation = getEl("idle_animation");

/* --------------------- Helpers --------------------- */
function showIdleAnimation(){ if(oIdleAnimation) oIdleAnimation.classList.remove('HIDDEN'); }
function hideIdleAnimation(){ if(oIdleAnimation) oIdleAnimation.classList.add('HIDDEN'); }
function showSkeletonLoader(container,count){ container.innerHTML=''; for(let i=0;i<count;i++){ const skeleton=document.createElement('li'); skeleton.className='skeleton-item'; container.appendChild(skeleton);} }
function loadFavoritesFromStorage(){ const stored = JSON.parse(localStorage.getItem("iptvFavoriteChannels") || "[]"); Object.keys(channels).forEach(key=>{ channels[key].favorite = stored.includes(key); }); }
function saveFavoritesToStorage(){ const favorites = Object.entries(channels).filter(([k,ch])=>ch.favorite).map(([k])=>k); localStorage.setItem("iptvFavoriteChannels", JSON.stringify(favorites)); }
function normalizeForMatch(s){ if(!s) return ""; return s.toString().toLowerCase().replace(/[^a-z0-9]/g,''); }

/* --------------------- EPG fetch & parse (unchanged) --------------------- */
async function fetchTextOrGz(url){try{const res=await fetch(url);if(!res.ok)throw new Error('bad response '+res.status);const contentType=res.headers.get('content-type')||'';if(contentType.includes('xml')||contentType.includes('text')||contentType.includes('charset')){return await res.text()}const buf=await res.arrayBuffer();try{const text=(new TextDecoder('utf-8',{fatal:false})).decode(buf);if(text.trim().startsWith('<'))return text}catch(e){}try{const u8=new Uint8Array(buf);const inflated=pako.ungzip(u8);return(new TextDecoder).decode(inflated)}catch(e){console.warn('gzip decode failed for',url,e);return(new TextDecoder).decode(buf)}}catch(err){console.warn('Failed to fetch EPG url:',url,err);return null}}
function parseXmlStringToDoc(xmlStr){try{return(new DOMParser).parseFromString(xmlStr,"application/xml")}catch(e){console.warn('XML parse error',e);return null}}
function parseXmltvTime(str){if(!str)return null;const m=str.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);if(!m)return new Date(str);const[_,y,mo,d,hh,mm,ss]=m;return new Date(Date.UTC(+y,+mo-1,+d,+hh,+mm,+ss))}
function storeProgramme(channelKey,prog){if(!channelKey)return;if(!EPG_INDEX.byId[channelKey])EPG_INDEX.byId[channelKey]=[];EPG_INDEX.byId[channelKey].push(prog)}
function indexByDisplayName(name,prog){if(!name)return;const key=normalizeForMatch(name);if(!EPG_INDEX.byName[key])EPG_INDEX.byName[key]=[];EPG_INDEX.byName[key].push(prog)}
async function loadAllEpg(){ const promises = EPG_URLS.map(async(u)=>{ const xmlText = await fetchTextOrGz(u); if(!xmlText) return; const doc = parseXmlStringToDoc(xmlText); if(!doc) return; doc.querySelectorAll('channel').forEach(chNode=>{ const id = chNode.getAttribute('id')||chNode.getAttribute('tvg-id')||null; const names = Array.from(chNode.querySelectorAll('display-name')).map(n=>n.textContent).filter(Boolean); if(id){ names.forEach(n=>indexByDisplayName(n,{channelId:id,displayName:n,from:u})) } else { names.forEach(n=>indexByDisplayName(n,{channelId:null,displayName:n,from:u})) } }); doc.querySelectorAll('programme').forEach(pn=>{ const ch=pn.getAttribute('channel')||pn.getAttribute('channelid')||pn.getAttribute('tvg-id')||null; const start=parseXmltvTime(pn.getAttribute('start')||pn.getAttribute('begin')||pn.getAttribute('date')); const stop=parseXmltvTime(pn.getAttribute('stop')||pn.getAttribute('end')); const titleNode=pn.querySelector('title'); const subNode=pn.querySelector('sub-title')||pn.querySelector('desc')||pn.querySelector('description'); const title=titleNode?titleNode.textContent.trim():(pn.getAttribute('title')||''); const sub=subNode?subNode.textContent.trim():''; const prog={start,stop,title,sub,rawNode:pn}; if(ch) storeProgramme(ch,prog); const dn=pn.querySelector('display-name'); if(dn) indexByDisplayName(dn.textContent,prog); }); }); await Promise.all(promises); for(const id in EPG_INDEX.byId){EPG_INDEX.byId[id].sort((a,b)=>(a.start?.getTime()||0)-(b.start?.getTime()||0))} for(const nm in EPG_INDEX.byName){EPG_INDEX.byName[nm].sort((a,b)=>(a.start?.getTime()||0)-(b.start?.getTime()||0))} console.info('EPG loaded: ids:',Object.keys(EPG_INDEX.byId).length,'names:',Object.keys(EPG_INDEX.byName).length) }
function findEpgForChannel(channelObj){ if(channelObj.tvgId&&EPG_INDEX.byId[channelObj.tvgId]) return EPG_INDEX.byId[channelObj.tvgId]; if(channelObj.key&&EPG_INDEX.byId[channelObj.key]) return EPG_INDEX.byId[channelObj.key]; const n=normalizeForMatch(channelObj.name); if(n&&EPG_INDEX.byName[n]){ const arr=EPG_INDEX.byName[n]; const progs=[]; arr.forEach(item=>{ if(item.channelId&&EPG_INDEX.byId[item.channelId]){ EPG_INDEX.byId[item.channelId].forEach(p=>progs.push(p)) } else if(item.title){ progs.push(item) } }); if(progs.length) return progs.sort((a,b)=>(a.start?.getTime()||0)-(b.start?.getTime()||0)) } for(const nameKey in EPG_INDEX.byName){ if(!n) continue; if(nameKey.includes(n)||n.includes(nameKey)||nameKey.startsWith(n)||n.startsWith(nameKey)){ const arr=EPG_INDEX.byName[nameKey]; const progs=[]; arr.forEach(item=>{ if(item.channelId&&EPG_INDEX.byId[item.channelId]){ EPG_INDEX.byId[item.channelId].forEach(p=>progs.push(p)) } else if(item.title){ progs.push(item) } }); if(progs.length) return progs.sort((a,b)=>(a.start?.getTime()||0)-(b.start?.getTime()||0)) } } return null }
function getNowAndNextFromProgList(progs){ if(!progs||progs.length===0) return {now:null,next:null}; const nowTime=Date.now(); let nowProg=null; let nextProg=null; for(let i=0;i<progs.length;i++){ const p=progs[i]; const s=p.start?p.start.getTime():null; const e=p.stop?p.stop.getTime():null; if(s&&e&&nowTime>=s&&nowTime<e){ nowProg=p; nextProg=progs[i+1]||null; break } if(s&&nowTime<s){ nextProg=p; break } } return {now:nowProg,next:nextProg} }

/* --------------------- Playback (hls.js) & UI --------------------- */
function setupHlsForUrl(url) {
    // Clean previous instance
    if (playerHls) {
        try { playerHls.destroy(); } catch (e) {}
        playerHls = null;
    }
    // If browser native HLS (Safari/iOS) then use .src directly
    if (oAvPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        oAvPlayer.src = url;
        oAvPlayer.load();
        return;
    }
    // else use hls.js
    if (window.Hls && Hls.isSupported()) {
        playerHls = new Hls();
        playerHls.loadSource(url);
        playerHls.attachMedia(oAvPlayer);
        playerHls.on(Hls.Events.ERROR, (event, data) => {
            console.warn('hls.js error', data);
        });
    } else {
        // fallback: attempt to set src and let browser try
        oAvPlayer.src = url;
        oAvPlayer.load();
    }
}

/* toggle favourite */
function toggleFavourite() {
    const currentKey = aFilteredChannelKeys[iCurrentChannel];
    if (!currentKey || !channels[currentKey]) return;
    channels[currentKey].favorite = !channels[currentKey].favorite;
    saveFavoritesToStorage();
    renderChannelSettings();
    const lastChannelKey = aFilteredChannelKeys[iCurrentChannel];
    buildNav();
    const newIndex = aFilteredChannelKeys.indexOf(lastChannelKey);
    if (newIndex !== -1) {
        iCurrentChannel = newIndex;
    } else if (sSelectedGroup === '__fav' && aFilteredChannelKeys.length > 0) {
        iCurrentChannel = 0;
    } else if (aFilteredChannelKeys.length === 0) {
        // stop playback
        try { oAvPlayer.pause(); } catch(e) {}
        showIdleAnimation();
    }
    updateSelectedChannelInNav();
}

/* user first gesture: unmute & hide overlay */
function onFirstUserAction() {
    if (isFirstActionDone) return;
    isFirstActionDone = true;
    try { oAvPlayer.muted = false; oAvPlayer.removeAttribute('muted'); } catch (e) {}
    if (oIdleAnimation) oIdleAnimation.classList.add('HIDDEN');
}

/* load channel by index (works for HLS; DASH/clearkey channels will be skipped with console warning) */
async function loadChannel(index) {
    if (aFilteredChannelKeys.length === 0) return;
    if (index < 0) index = aFilteredChannelKeys.length - 1;
    if (index >= aFilteredChannelKeys.length) index = 0;
    iCurrentChannel = index;

    const channelKey = aFilteredChannelKeys[iCurrentChannel];
    const channel = channels[channelKey];
    if (!channel) return;

    oLoader.classList.remove('HIDDEN');
    oBody.classList.add('channel-is-loading');
    showChannelName();
    updateSelectedChannelInNav();

    try {
        if (channel.type === 'clearkey' || (channel.manifestUri && channel.manifestUri.endsWith('.mpd'))) {
            // DASH/ClearKey stream - not supported by hls.js fallback.
            console.warn('This stream appears to be DASH / ClearKey and will not play with hls.js. You need Shaka or JWPlayer for DRM streams:', channel.manifestUri);
            // optionally: show overlay or message
            showIdleAnimation();
            oLoader.classList.add('HIDDEN');
            oBody.classList.remove('channel-is-loading');
            return;
        }
        // Use hls.js or native HLS
        setupHlsForUrl(channel.manifestUri);

        // attempt autoplay (muted start)
        try { await oAvPlayer.play(); } catch (playErr) { console.warn('Autoplay prevented:', playErr); }
    } catch (error) {
        console.error('Error loading channel', channel.name, error);
        showIdleAnimation();
    } finally {
        oLoader.classList.add('HIDDEN');
        oBody.classList.remove('channel-is-loading');
    }
}

/* build channel list UI */
function buildNav() {
    showSkeletonLoader(oChannelList, 15);
    setTimeout(() => {
        const searchTerm = (oSearchField && oSearchField.value) ? oSearchField.value.toLowerCase() : '';
        aFilteredChannelKeys = Object.keys(channels).filter(key => {
            const ch = channels[key];
            const inGroup = sSelectedGroup === '__all' || (sSelectedGroup === '__fav' && ch.favorite);
            const inSearch = !searchTerm || (ch.name && ch.name.toLowerCase().includes(searchTerm));
            return inGroup && inSearch;
        }).sort((a,b)=> (channels[a].number||0) - (channels[b].number||0));

        oChannelList.innerHTML = '';
        if (aFilteredChannelKeys.length === 0) {
            oChannelList.innerHTML = `<li style="justify-content:center; color:#888;">No channels found.</li>`;
            return;
        }

        const fragment = document.createDocumentFragment();
        aFilteredChannelKeys.forEach((key, index) => {
            const channel = channels[key];
            const item = document.createElement('li');
            item.className = 'channel-item';
            item.dataset.key = key;
            item.tabIndex = 0;
            item.onclick = () => {
                onFirstUserAction();
                loadChannel(index);
                setTimeout(hideNav, 100);
            };
            item.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter') { ev.preventDefault(); item.click(); }
            });
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                iCurrentChannel = index;
                toggleFavourite();
            });

            let pressTimer;
            item.addEventListener('touchstart', (e) => {
                if (e.touches.length > 1) { clearTimeout(pressTimer); return; }
                pressTimer = setTimeout(() => {
                    e.preventDefault();
                    iCurrentChannel = index;
                    toggleFavourite();
                    if (navigator.vibrate) navigator.vibrate(50);
                }, 500);
            });
            item.addEventListener('touchend', () => clearTimeout(pressTimer));
            item.addEventListener('touchmove', () => clearTimeout(pressTimer));

            const logoHtml = channel.logo ? `<div class="nav_logo"><img src="${channel.logo}" alt=""></div>` : '<div class="nav_logo"></div>';
            const favHtml = channel.favorite ? `<span class="fav-star">⭐</span>` : '';
            item.innerHTML = `${favHtml}<span class="list-ch">${channel.number||''}</span><span class="list-title">${channel.name}</span>${logoHtml}`;
            fragment.appendChild(item);
        });
        oChannelList.appendChild(fragment);

        updateSelectedChannelInNav();

        // autoplay initial channel (Aniplus) on first load
        if (isInitialLoad && aFilteredChannelKeys.length > 0) {
            isInitialLoad = false;
            let initialIndex = aFilteredChannelKeys.indexOf(DEFAULT_CHANNEL_KEY);
            if (initialIndex === -1) initialIndex = 0;
            // ensure video element exists, then load
            try {
                // start muted autoplay, show overlay until user interacts
                oAvPlayer.muted = true;
                oAvPlayer.setAttribute('muted','');
                loadChannel(initialIndex);
            } catch (e) {
                console.warn('Error during initial autoplay', e);
                showIdleAnimation();
            }
        } else if (isInitialLoad) {
            isInitialLoad = false;
            showIdleAnimation();
        }
    }, 150);
}

/* render channel settings list */
function renderChannelSettings(){
    oChannelSettingsList.innerHTML='';
    if(aFilteredChannelKeys.length===0) return;
    const currentKey = aFilteredChannelKeys[iCurrentChannel];
    const channel = channels[currentKey];
    channelSettingsOptions.forEach((opt, index) => {
        const item = document.createElement('li');
        item.id = opt.id;
        let text = getLang(opt.langid);
        if(opt.id === 'channel-setting-favourite'){
            text = channel && channel.favorite ? 'Remove from Favourites' : 'Add to Favorites';
        }
        item.textContent = text;
        if(index === iChannelSettingsIndex) item.classList.add('selected');
        oChannelSettingsList.appendChild(item);
    });
}

/* update stream info - limited since hls.js */
function updateStreamInfo(){
    // hls.js active level info could be queried, but for simplicity:
    if(!oStreamInfo) return;
    oStreamInfo.innerHTML = 'Stream: ' + (aFilteredChannelKeys[iCurrentChannel] ? channels[aFilteredChannelKeys[iCurrentChannel]].name : 'N/A');
}

/* show/hide channel name & next show */
function showChannelName(){
    clearTimeout(channelNameTimeout);
    if(aFilteredChannelKeys.length===0) return;
    const key = aFilteredChannelKeys[iCurrentChannel];
    if(!key) return;
    const channel = channels[key];
    if(!channel) return;
    getEl('channel_name').textContent = channel.name;
    const epgProgs = findEpgForChannel(channel);
    let epgText = 'EPG not available';
    if (epgProgs) {
        const { now, next } = getNowAndNextFromProgList(epgProgs);
        if(next) {
            const t = next.start ? next.start : null;
            if(t){
                const local = new Date(t.getTime());
                const hh = String(local.getHours()).padStart(2,'0');
                const mm = String(local.getMinutes()).padStart(2,'0');
                epgText = `Next: ${next.title}${next.sub ? ' - '+next.sub : ''} (${hh}:${mm})`;
            } else {
                epgText = `Next: ${next.title||'Unknown'}`;
            }
        } else {
            epgText = 'EPG not available';
        }
    }
    getEl('channel_epg').innerHTML = epgText;
    getEl('ch_logo').innerHTML = channel.logo?`<img src="${channel.logo}" alt="">`:'';
    oChannelInfo.classList.add('visible');
    channelNameTimeout = setTimeout(hideChannelName, 5000);
}
function hideChannelName(){ oChannelInfo.classList.remove('visible'); }

function getLang(sKey){ return (i18n.en && i18n.en[sKey]) ? i18n.en[sKey] : sKey; }
function applyLang(){ document.querySelectorAll('[data-langid]').forEach(el=>{ el.innerHTML = getLang(el.dataset.langid); }); }

function clearUi(exclude){ if(exclude!=='nav') hideNav(); if(exclude!=='channelSettings') hideChannelSettings(); if(exclude!=='guide') hideGuide(); if(exclude!=='channelName') hideChannelName(); }
function showNav(){ clearUi('nav'); bNavOpened=true; oSearchField.disabled=false; oNav.classList.add('visible'); if(oChannelList){ oChannelList.classList.remove('fade-out'); oChannelList.classList.add('fade-in'); oChannelList.style.opacity=''; oChannelList.style.pointerEvents=''} hideGroups(); buildNav(); }
function hideNav(){ bNavOpened=false; bGroupsOpened=false; oSearchField.disabled=true; oNav.classList.remove('visible'); }
function showGroups(){ if(bNavOpened){ bGroupsOpened=true; getEl('list_container').classList.add('groups-opened'); navigateGroupList() } }
function hideGroups(){ bGroupsOpened=false; getEl('list_container').classList.remove('groups-opened'); }
function showChannelSettings(){ clearUi('channelSettings'); bChannelSettingsOpened=true; iChannelSettingsIndex=0; renderChannelSettings(); oStreamInfo.classList.remove('HIDDEN'); updateStreamInfo(); oChannelSettings.classList.add('visible'); }
function hideChannelSettings(){ bChannelSettingsOpened=false; oStreamInfo.classList.add('HIDDEN'); oChannelSettings.classList.remove('visible'); }
function showGuide(){ bGuideOpened=true; renderGuideContent(); oGuide.style.display='block'; oGuide.setAttribute('aria-hidden','false'); }
function hideGuide(){ bGuideOpened=false; oGuide.style.display='none'; oGuide.setAttribute('aria-hidden','true'); }
function renderGuideContent(){ const container=getEl('guide_content'); container.innerHTML=` <h2>${getLang('guideControlsHeadline')}</h2> <ul>${getLang('guideControls')}</ul> `; }

function animateChannelListSwap(callback){ if(!oChannelList){ try{ callback() }catch(e){} return } oChannelList.classList.remove('fade-in'); oChannelList.classList.add('fade-out'); const onEnd = ()=>{ oChannelList.removeEventListener('transitionend', onEnd); try{ callback() }catch(e){ console.error(e) } requestAnimationFrame(()=>{ oChannelList.classList.remove('fade-out'); oChannelList.classList.add('fade-in') }) }; oChannelList.addEventListener('transitionend', onEnd); setTimeout(()=>{ if(oChannelList.classList.contains('fade-out')) onEnd() },800); }

function selectGroupListItem(item){ if(!item) item=document.querySelector('#group_list li.selected'); if(!item) return; document.querySelectorAll('#group_list li.selected').forEach(el=>el.classList.remove('selected')); item.classList.add('selected'); if(item.id==='epg_group'){ hideNav(); alert("Full EPG screen placeholder.") } else if(item.id==='guide_group'){ showGuide() } else { const lastChannelKey = aFilteredChannelKeys.length>iCurrentChannel ? aFilteredChannelKeys[iCurrentChannel] : null; sSelectedGroup = item.dataset.group; preventAutoPlay=true; animateChannelListSwap(()=>{ buildNav(); if(lastChannelKey){ const newIndex = aFilteredChannelKeys.indexOf(lastChannelKey); iCurrentChannel = (newIndex!==-1)?newIndex:0 } else { iCurrentChannel = 0 } updateSelectedChannelInNav() }); hideGroups(); setTimeout(()=>{ preventAutoPlay=false },350) } }

function navigateGroupList(direction){ const items=document.querySelectorAll('#group_list ul > li'); if(!items||items.length===0) return; let currentIndex=Array.from(items).findIndex(item=>item.classList.contains('selected')); if(currentIndex===-1) currentIndex=0; items[currentIndex].classList.remove('selected'); if(direction==='up'){ currentIndex=(currentIndex>0)?currentIndex-1:items.length-1 } else if(direction==='down'){ currentIndex=(currentIndex<items.length-1)?currentIndex+1:0 } items[currentIndex].classList.add('selected'); items[currentIndex].scrollIntoView({behavior:'smooth',block:'center'}) }

document.addEventListener('keydown', e => {
    // If search has focus, let it handle Escape/Enter/etc
    if (document.activeElement === oSearchField) {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === 'ArrowDown') { oSearchField.blur(); }
        return;
    }

    // if guide open
    if (bGuideOpened) {
        if (e.key === 'Escape') hideGuide();
        return;
    }

    // consume navigation keys when relevant
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Enter',' '].includes(e.key)) {
        e.preventDefault();
    }

    // NAV open handling
    if (bNavOpened) {
        if (bGroupsOpened) {
            switch(e.key){
                case 'ArrowUp': navigateGroupList('up'); break;
                case 'ArrowDown': navigateGroupList('down'); break;
                case 'ArrowRight': hideGroups(); break;
                case 'Escape': hideNav(); break;
                case 'Enter': selectGroupListItem(); break;
            }
        } else {
            switch(e.key){
                case 'ArrowUp': if(iCurrentChannel>0){ loadChannel(iCurrentChannel-1) } else { oSearchField.focus() }; break;
                case 'ArrowDown': loadChannel(iCurrentChannel+1); break;
                case 'ArrowRight': hideNav(); break;
                case 'ArrowLeft': showGroups(); break;
                case 'Enter': loadChannel(iCurrentChannel); setTimeout(hideNav,100); break;
                case 'Escape': hideNav(); break;
            }
        }
    } else if (bChannelSettingsOpened) {
        switch(e.key){
            case 'ArrowUp': iChannelSettingsIndex = (iChannelSettingsIndex>0)?iChannelSettingsIndex-1:channelSettingsOptions.length-1; renderChannelSettings(); break;
            case 'ArrowDown': iChannelSettingsIndex = (iChannelSettingsIndex<channelSettingsOptions.length-1)?iChannelSettingsIndex+1:0; renderChannelSettings(); break;
            case 'ArrowLeft': case 'Escape': hideChannelSettings(); break;
            case 'Enter':
                if(channelSettingsOptions[iChannelSettingsIndex].id === 'channel-setting-favourite') {
                    toggleFavourite();
                } else {
                    alert(`Action for: ${channelSettingsOptions[iChannelSettingsIndex].langid}`);
                    hideChannelSettings();
                }
                break;
        }
    } else {
        switch(e.key){
            case 'ArrowLeft': showNav(); break;
            case 'ArrowRight': showChannelSettings(); break;
            case 'Enter':
                if (oChannelInfo.classList.contains('visible')) { hideChannelName() } else { showChannelName(); }
                break;
            case 'ArrowUp': loadChannel(iCurrentChannel-1); break;
            case 'ArrowDown': loadChannel(iCurrentChannel+1); break;
            case 'h': showGuide(); break;
            case 'Escape': if (oChannelInfo.classList.contains('visible')) hideChannelName(); break;
            case ' ': // Space - toggle play/pause
                if (oAvPlayer.paused) { oAvPlayer.play().catch(e=>console.warn(e)) } else { oAvPlayer.pause() }
                break;
            case 'm':
            case 'M':
                oAvPlayer.muted = !oAvPlayer.muted;
                break;
        }
    }
});

/* Search input handler */
oSearchField && oSearchField.addEventListener('input', () => {
    iCurrentChannel = 0;
    buildNav();
});

/* Touch handling (keeps same behavior) */
let touchStartX = 0, touchStartY = 0, touchEndX = 0, touchEndY = 0;
function handleTouchStart(e){ const firstTouch = e.touches[0]; touchStartX = firstTouch.clientX; touchStartY = firstTouch.clientY; touchEndX = firstTouch.clientX; touchEndY = firstTouch.clientY; }
function handleTouchMove(e){ if(e.touches.length>0){ touchEndX = e.touches[0].clientX; touchEndY = e.touches[0].clientY; } }
function handleTouchEnd(e){
    if(touchStartX===0) return;
    const deltaX = touchEndX - touchStartX, deltaY = touchEndY - touchStartY;
    const absDeltaX = Math.abs(deltaX), absDeltaY = Math.abs(deltaY);
    const swipeThreshold = 50, tapThreshold = 10;
    const target = e.target;
    const isInsideScrollable = oNav.contains(target) && target.closest('.custom-scrollbar');

    if (isInsideScrollable) {
        if (absDeltaX>absDeltaY && absDeltaX>swipeThreshold) {
            if (deltaX>0) { /* swipe right inside list */ } else { /* swipe left inside list */ }
        }
    } else if (absDeltaX < tapThreshold && absDeltaY < tapThreshold) {
        if (bGuideOpened && !oGuide.querySelector('.fullscreen-popup').contains(target)) {
            hideGuide();
        } else if (bNavOpened && !oNav.contains(target)) {
            hideNav();
        } else if (bChannelSettingsOpened && !oChannelSettings.contains(target)) {
            hideChannelSettings();
        } else if (!bNavOpened && !bChannelSettingsOpened && !bGuideOpened && !target.closest('#play_button_overlay')) {
            showChannelName();
        }
    } else if (absDeltaX > swipeThreshold || absDeltaY > swipeThreshold) {
        if (absDeltaX > absDeltaY) {
            if (deltaX > 0) {
                if (bChannelSettingsOpened) hideChannelSettings();
                else if (bNavOpened && !bGroupsOpened) showGroups();
                else showNav();
            } else {
                if (bNavOpened && bGroupsOpened) hideGroups();
                else if (bNavOpened) hideNav();
                else showChannelSettings();
            }
        } else {
            if (!bNavOpened && !bChannelSettingsOpened && !bGuideOpened) {
                if (deltaY > 0) { loadChannel(iCurrentChannel-1) } else { loadChannel(iCurrentChannel+1) }
            }
        }
    }
    touchStartX=touchStartY=touchEndX=touchEndY=0;
}
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

/* Play overlay click + keyboard + remote handling */
const oPlayButton = getEl("play_button_overlay");
if (oPlayButton) {
    function overlayActivate(e){
        if (e.type === 'keydown' && e.key !== 'Enter') return;
        e.preventDefault();
        onFirstUserAction();
        oPlayButton.classList.add('HIDDEN');
        try { oAvPlayer.play().catch(()=>{}); } catch(e){}
    }
    oPlayButton.addEventListener('click', overlayActivate);
    oPlayButton.addEventListener('touchstart', (e)=>{ e.preventDefault(); overlayActivate(e); });
    oPlayButton.addEventListener('keydown', overlayActivate);
}

/* Playback controls wiring (play/pause, mute, volume) */
(function setupPlaybackControls(){
    const ICONS = {
        play: '<svg viewBox="0 0 24 24"><path d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>',
        pause: '<svg viewBox="0 0 24 24"><path d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>',
        volumeHigh: '<svg viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
        volumeMuted: '<svg viewBox="0 0 24 24"><path d="M12,4L7,9H3V15H7L12,20V4M21.2,12A6.5,6.5 0 0,1 19,15.18L17.59,13.77A4.5,4.5 0 0,0 19,12A4.5,4.5 0 0,0 17.59,10.23L19,8.82A6.5,6.5 0 0,1 21.2,12M14,3.23V5.29L16.42,7.71L16.42,7.71A2.5,2.5 0 0,1 16.5,12A2.5,2.5 0 0,1 14,14.72V16.71A4.5,4.5 0 0,0 16.42,16.29L19.23,19.1L20.64,17.69L3.36,4.41L1.95,5.82L14,17.87V20.77C18,19.86 21,16.28 21,12A6.4,6.4 0 0,0 20.25,9.85L19.12,8.72L14,3.23Z" /></svg>'
    };

    const video = oAvPlayer;
    const playPauseBtn = getEl('play_pause_button');
    const muteUnmuteBtn = getEl('mute_unmute_button');
    const volumeSlider = getEl('volume_slider');

    function updatePlayPauseIcon() {
        if (!playPauseBtn) return;
        playPauseBtn.innerHTML = video.paused ? ICONS.play : ICONS.pause;
    }
    function updateMuteIcon() {
        if (!muteUnmuteBtn) return;
        muteUnmuteBtn.innerHTML = (video.muted || video.volume === 0) ? ICONS.volumeMuted : ICONS.volumeHigh;
    }

    if (playPauseBtn) playPauseBtn.addEventListener('click', () => {
        if (video.paused) video.play().catch(()=>{});
        else video.pause();
    });

    if (muteUnmuteBtn) muteUnmuteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
    });

    if (volumeSlider) volumeSlider.addEventListener('input', (e) => {
        video.volume = parseFloat(e.target.value);
        video.muted = (video.volume === 0);
    });

    video.addEventListener('play', updatePlayPauseIcon);
    video.addEventListener('pause', updatePlayPauseIcon);
    video.addEventListener('volumechange', () => {
        if (volumeSlider) volumeSlider.value = video.volume;
        updateMuteIcon();
    });

    // initial
    updatePlayPauseIcon();
    updateMuteIcon();
})();

/* update selected channel highlight in nav */
function updateSelectedChannelInNav() {
    if (!oChannelList) return;
    const currentSelected = oChannelList.querySelector('.selected');
    if (currentSelected) currentSelected.classList.remove('selected');
    const listItems = oChannelList.querySelectorAll('li.channel-item');
    const newSelected = listItems[iCurrentChannel];
    if (newSelected) {
        newSelected.classList.add('selected');
        if (bNavOpened) {
            newSelected.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

/* --------------------- Initialization --------------------- */
(function initApp(){
    // number channels
    let i = 1;
    for (const key in channels) { channels[key].number = i++; channels[key].key = key; }
    loadFavoritesFromStorage();
    // initial UI state
    const allGroup = document.getElementById('all_channels_group');
    if (allGroup) allGroup.classList.add('selected');
    if (oChannelList) { oChannelList.classList.remove('fade-out'); oChannelList.classList.add('fade-in'); }
    applyLang();
    buildNav();
    // load EPG in background
    loadAllEpg().catch(err => console.warn('EPG load failed', err));
})();

Array.from(document.querySelectorAll('#group_list li')).forEach(li => li.addEventListener('click', (e) => selectGroupListItem(e.currentTarget)));

}); // DOMContentLoaded end
