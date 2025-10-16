// Controls
var bKeyboardVisible = false,
  bControlsOpened = false,
  bUiOpened = false,
  bPipActive = false,
  oVolume = false,
  oVolumeBar = false,
  bVolumeChange = false,
  iVolumeVisibleTimeout = false,
  bMouseOpenedNav = false,
  bMouseOpenedEpg = false,
  bControlsArrowVisible = false,
  oProgressBar = getEl("progress"),
  bMoveChannelFieldActive = false,
  oMoveChannelInput = false,
  oNavMoveChannel = false,
  bAdConsentOpened = false;

// Playlist
var bPlaylistsLoaded = false,
  bPlaylistSelectorOpened = false,
  sPlaylistArchiveType = false,
  sFilterCategory = false,
  aLoadedPlaylists = [],
  oCurrentPlaylist = false,
  oCurrentEditPlaylist = false,
  sPlaylistNav = "",
  bSeriesSelectorOpened = false;

// Player
var aCurrentChannel = false,
  iCurrentChannel = false,
  sCurrentChannelName = false,
  sCurrentChannelGroup = false,
  sCurrentChannelLogo = false,
  sPlayingUrl = false,
  iPreviousChannel = false,
  bChannelWasAlreadyPlaying = false,
  bSmartControlsEnabled = false,
  bChannelNameGenerated = false,
  iDownloadId = false,
  iChannelInputNumber = "",
  sSelectedGroup = false,
  sUserAgent = "Mozilla/5.0 (m3u-ip.tv " + sAppVersion + ") " + sDeviceFamily,
  iSelectedAudioTrack = false,
  iSelectedSubtitleTrack = false,
  iSelectedVideoTrack = false,
  bPlayerLoaded = false,
  iCurrentPlaylistId = 0,
  bPlaying = false,
  bChannelSettingsOpened = false,
  sChannelSetting = false,
  iChannelSettingsFocusedField = 0,
  sFilter = false,
  bIsBooting = true,
  oClock = getEl("clock"),
  aSubTitleTracks = [],
  aAudioTracks = [],
  aVideoTracks = [],
  bTrackInfoLoaded = false,
  iContextMenuEditChannel = false,
  oVideoFormatSetting = getEl("video_format_setting"),
  // EPG
  bEpgLoaded = false,
  bEpgOpened = false,
  bEpgOverviewOpened = false,
  sPlaylistEpgUrl = false,
  bChannelHasEpg = false,
  bPlaylistEpgCompatible = false,
  bEpgBooted = false,
  aLazyLoadedEpgChannels = [],
  iSecondsSinceEpgOverviewRefresh = 0,
  iSecondsSinceEpgNavListRefresh = 0,
  iSecondsSinceEpgChannelRefresh = 0,
  bEpgNavListBuilt = false,
  iEpgNavListClockTimer = false,
  iSelectedEpgOverviewChannel = false,
  iEpgOverviewScrollMin = 0,
  iEpgOverviewScrollMax = 0,
  iLastOverviewScrollPos = 0,
  aLazyLoadedOverviewItems = [],
  iEpgOverviewItemHeight = 64,
  aFavourites = false,
  iVisibleChannels = 0,
  iFavChannels = false,
  bPlaylistHasFavs = false,
  aPlaylistHistory = false,
  aActiveChannelList = [],
  aFilteredChannelList = [],
  oSelectedItem = false,
  iChannelNameTimer = false,
  iZapTimer = false,
  iChannelInputTimer = false,
  bGuideOpened = false,
  iReconnectTimer = false,
  iReconnectTryAfter = 1000,
  bStreamWasInterrupted = false,
  iRetryChannelLoad = 0,
  bChannelNameOpened = false,
  bChannelInputOpened = false,
  bNavOpened = false,
  bGroupsOpened = false,
  bAdvancedNavOpened = false,
  bProtectionUnlocked = false,
  bHideProtected = true,
  bSubtitlesActive = false,
  bDebuggerActive = false,
  bChannelErrorOpened = false,
  bSearchFocused = false,
  sLocalCacheFile = "downloads/herber-playlist.m3u",
  bNeedNavRefresh = false,
  iNavChannelHeight = 64,
  aLazyLoadedChannels = [],
  aChannelOrder = [],
  bChannelEditModeActive = false,
  sChannelEditMode = false,
  bFrameworkLoaded = false,
  oHlsApi = false,
  bHlsFrameworkLoaded = false,
  oHlsOptions = {},
  oAvPlayer = getEl("player"),
  oDashApi = false,
  bDashFrameworkLoaded = false,
  sCurrentVideoEngine = "hls",
  // Some DOM-Elements
  oSearchField = getEl("search_field"),
  oContextNav = getEl("context_channel_nav"),
  oContextHeadline = getEl("context_headline"),
  oEpgChannelList = getEl("epg_nav_list"),
  oLoader = getEl("loader"),
  oNav = getEl("nav"),
  oGroupsNav = getEl("group_list"),
  oChannelList = getEl("channel_list"),
  oChannelListUl = getEl("channel_list_ul"),
  iChannelListHeight = 0,
  oChannelSettingsList = getEl("channel_settings_list"),
  oChannelSubDubSettings = getEl("channel_settings_subs");

// Channel info
var oChannelInfo = getEl("channel_info"),
  oChannelTrack = getEl("channel_tracking"),
  oChannelName = getEl("channel_name"),
  oChannelNum = getEl("channel_number"),
  oChannelLogo = getEl("channel_logo"),
  oChannelGroup = getEl("channel_group"),
  oChannelEpg = getEl("channel_epg"),
  oSmartEpg = getEl("smart_epg"),
  oPrevChannel = getEl("channel_prev"),
  oNextChannel = getEl("channel_next"),
  oChannelNumberInput = getEl("channel_input");

// License stuff
var iTrialSecondsLeft = 0,
  iSecondsUntilAd = 0,
  bShowAd = false;

function showLoader() {
  oLoader.style.display = "block";
}

function hideLoader() {
  oLoader.style.display = "none";
  oLoader.classList.remove("soft");
}

function showGuide() {
  showControlsGuide(sDeviceFamily);
}

function hideGuide() {
  bGuideOpened = false;
  document.body.classList.remove("showguide");
}

function showControlsGuide(sPlatForm) {
  getEl("modal_content").style.width = "70%";
  getEl("modal_content").style.maxWidth = "1100px";
  var sGuide =
    '<ul id="keys_guide" class="unordered-list ALIGNLEFT" style="margin-bottom: 0">' +
    getLang("guideControls") +
    "</ul>";
  showModal(sGuide);
}

function showChannelError(sError, sErrorCode) {
  bChannelErrorOpened = true;
  getEl("channel_error_content").innerHTML =
    sError + '<br><br><span class="small">' + sErrorCode + "</span>";
  showElement("channel_error");
  hideLoader();
}

function hideChannelError() {
  if (bChannelErrorOpened) {
    bChannelErrorOpened = false;
    hideElement("channel_error");
  }
}

// Check network status
function checkNetwork() {
  if (sDeviceFamily === "Samsung") {
    try {
      // Check network status
      webapis.network.addNetworkStateChangeListener(function (value) {
        if (value == webapis.network.NetworkState.GATEWAY_DISCONNECTED) {
          showModal(getLang("connectionLost"));
          debug("GATEWAY_DISCONNECTED");
          if (bPlayerLoaded && iCurrentChannel) {
            webapis.avplay.pause();
          }
        } else if (value == webapis.network.NetworkState.GATEWAY_CONNECTED) {
          hideModal();
          debug("GATEWAY_CONNECTED");
          if (bPlayerLoaded && iCurrentChannel) {
            webapis.avplay.play();
          }
        }
      });
    } catch (e) {
      debugError(e);
    }
  }
}

function fireRequest(sUrl, sOnSuccess, sOnFailure) {
  var oHttp = new XMLHttpRequest(),
    bFailureFired = false;
  oHttp.timeout = 600000; // 10 min timeout
  oHttp.onload = function () {
    if (!oHttp.status || oHttp.status > 399) {
      if (!bFailureFired) {
        bFailureFired = true;
        sOnFailure(oHttp);
      }
    } else {
      sOnSuccess(oHttp);
    }
  };

  oHttp.addEventListener("error", function () {
    if (!bFailureFired) {
      bFailureFired = true;
      sOnFailure(oHttp);
    }
  });
  oHttp.addEventListener("abort", function () {
    if (!bFailureFired) {
      bFailureFired = true;
      sOnFailure(oHttp);
    }
  });
  oHttp.addEventListener("timeout", function () {
    if (!bFailureFired) {
      bFailureFired = true;
      sOnFailure(oHttp);
    }
  });

  if (
    sUrl &&
    typeof sOnSuccess === "function" &&
    typeof sOnFailure === "function"
  ) {
    try {
      oHttp.open("GET", sUrl, true);
      oHttp.send();
    } catch (e) {
      if (!bFailureFired) {
        bFailureFired = true;
        sOnFailure(e);
      }
      debugError(e);
      return false;
    }
    return true;
  }

  return false;
}

function setAdditionalHeaders() {
  if (!aCurrentChannel) {
    return false;
  }

  var sChannelUserAgent = "",
    sChannelReferrer = "",
    sHeaders = "";
  if (aCurrentChannel.ref) {
    sChannelReferrer = aCurrentChannel.ref;
  }

  if (aCurrentChannel.ua) {
    sChannelUserAgent = aCurrentChannel.ua;
  }

  if (aCurrentChannel.headers) {
    sHeaders = aCurrentChannel.headers;
  }

  switch (sDeviceFamily) {
    case "Browser":
      if (window.chrome && typeof window.chrome.webview === "object") {
        window.chrome.webview.postMessage({
          action: "setChannelCustomData",
          sUa: sUserAgent,
          sChannelUa: sChannelUserAgent,
          sChannelRef: sChannelReferrer,
          sChannelHeaders: sHeaders,
        });
      }
      break;

    case "Android":
      m3uConnector.setChannelCustomData(
        sChannelUserAgent,
        sChannelReferrer,
        sHeaders
      );
      break;
  }
}

function applyUserAgent() {
  if (!sUserAgent) {
    return;
  }

  switch (sDeviceFamily) {
    case "Browser":
    case "LG":
      if (typeof window.chrome.webview === "object") {
        window.chrome.webview.postMessage({
          action: "setUserAgent",
          sUa: sUserAgent,
        });
      }

      break;
    case "Samsung":
      var sState = webapis.avplay.getState();
      if (sState === "PLAYING") {
        stopVideo();
        sState = webapis.avplay.getState();
      }

      if (sState === "IDLE") {
        var aCurrentChannel = aActiveChannelList[iCurrentChannel];
        if (aCurrentChannel && aCurrentChannel.ua) {
          webapis.avplay.setStreamingProperty("USER_AGENT", aCurrentChannel.ua);
        } else {
          webapis.avplay.setStreamingProperty("USER_AGENT", sUserAgent);
        }
      }

      break;
    case "Android":
      m3uConnector.setUserAgent(sUserAgent);
      break;
  }
}

// Settings
function applyPlayerSettings() {
  var oCameraCutoutSetting = getEl("camera_cutout_setting");
  if (oCameraCutoutSetting) {
    var sCameraCutoutSetting = getCameraCutoutSetting();
    oCameraCutoutSetting.value = sCameraCutoutSetting;
    switchCameraCutout(sCameraCutoutSetting);
  }

  if (oVideoFormatSetting) {
    var sVideoFormatSetting = getVideoFormatSetting();
    oVideoFormatSetting.value = sVideoFormatSetting;
    switchVideoFormat(sVideoFormatSetting);
  }

  sUserAgent = getUserAgentSetting();
  applyUserAgent();

  if (sDeviceFamily === "Android" && m3uConnector) {
    m3uConnector.setPipEnabled(AppSettings.isActive("pip"));
    m3uConnector.setLandscapeOrientation(
      AppSettings.isActive("landscape-orientation")
    );
    m3uConnector.setSkipStepsSize(
      AppSettings.getNumberSetting("skip-step-size", 30)
    );
  }

  sProtectionPassword = AppSettings.getSetting("password-groups");
  bEpgEnabled = AppSettings.isActive("epg-enabled");
  bSmartControlsEnabled = AppSettings.isActive("enable-smart-controls");
  bHideProtected = AppSettings.isActive("hide-protected-channels");

  if (localStorage.getItem("channelProtection")) {
    toggleProtectionLock(true);
  }

  if (AppSettings.isActive("compact-channel-info")) {
    document.body.classList.add("compact-channel-info");
  }

  if (AppSettings.isActive("unlock-ads-premium")) {
    if (sDeviceFamily === "Android") {
      m3uConnector.checkAdsConsent();
    }
  }
}

// First init function
function boot() {
  checkNetwork();

  initControls();

  initDb(
    function () {
      showLoader();

      applyPlayerSettings();

      var bIsPremiumLicense = true;
      checkAdsPremium();

      iCurrentPlaylistId = localStorage.getItem("iCurrentPlaylistId");
      if (!iCurrentPlaylistId) {
        iCurrentPlaylistId = 0;
      }
      iCurrentPlaylistId = parseInt(iCurrentPlaylistId);

      bootPlaylistReady(
        function (sPlaylistId, aActiveChannelList) {
          sPlaylistArchiveType = aLoadedPlaylists[sPlaylistId].archiveType;
          if (!sPlaylistArchiveType || sPlaylistArchiveType == "-") {
            sPlaylistArchiveType = false;
          }

          playlistReadyHandler();

          setTimeout(epgBoot, 1000);
          localStorage.removeItem("coming-from-settings");
          document.body.classList.remove("booting");
          bBootComplete = true;
        },
        function () {
          openSettings();
        }
      );
    },
    function () {
      // DB failure
    }
  );
}

function setPreferredTrackLanguage() {
  switch (sDeviceFamily) {
    case "LG":
      break;
    case "Samsung":
      break;
    case "Apple":
      break;
    case "Android":
      m3uConnector.setPreferredTrackLanguage(getLangId());
      break;
    default:
  }
}

function getClearKeyJsonKeys(sDrmKeyString) {
  var aClearkeys = {};

  if (sDrmKeyString.indexOf("{") === 0) {
    var oParsed = JSON.parse(sDrmKeyString);
    if (oParsed.keys) {
      oParsed.keys.forEach(function (sKey) {
        aClearkeys[sKey.kid] = sKey.k;
      });
    } else {
      for (var sItemKey in oParsed) {
        var sKid = hexToBase64(sItemKey),
          sKey = hexToBase64(oParsed[sItemKey]);
        aClearkeys[sKid] = sKey;
        break;
      }
    }
  } else if (sDrmKeyString.length == 65 && sDrmKeyString.indexOf(":") == 32) {
    var aKeyParts = sDrmKeyString.split(":");
    var sKid = hexToBase64(aKeyParts[0]),
      sKey = hexToBase64(aKeyParts[1]);
    aClearkeys[sKid] = sKey;
  }

  return aClearkeys;
}

function setDrmHandler() {
  if (!aCurrentChannel) {
    return false;
  }

  switch (sDeviceFamily) {
    case "Browser":
    case "LG":
      if (sCurrentVideoEngine === "dash") {
        if (!bDashFrameworkLoaded) {
          loadDashFramework();
        }
      }

      if (aCurrentChannel.drmT && aCurrentChannel.drmK) {
        oHlsApi.config.emeEnabled = true;
        switch (aCurrentChannel.drmT) {
          case "com.widevine.alpha":
          case "widevine":
            if (sCurrentVideoEngine === "dash" && oDashApi) {
              oDashApi.setProtectionData({
                "com.widevine.alpha": {
                  serverURL: aCurrentChannel.drmK,
                  priority: 1,
                },
              });
              return;
            }

            oHlsApi.config.drmSystems = {
              "com.widevine.alpha": {
                licenseUrl: aCurrentChannel.drmK,
              },
            };
            break;
          case "com.microsoft.playready":
          case "playready":
            if (sCurrentVideoEngine === "dash" && oDashApi) {
              oDashApi.setProtectionData({
                "com.microsoft.playready": {
                  serverURL: aCurrentChannel.drmK,
                  priority: 1,
                },
              });
              return;
            }

            oHlsApi.config.drmSystems = {
              "com.microsoft.playready": {
                licenseUrl: aCurrentChannel.drmK,
              },
            };
            break;
          case "com.apple.fps":
          case "fairplay":
            oHlsApi.config.drmSystems = {
              "com.apple.fps": {
                licenseUrl: aCurrentChannel.drmK,
              },
            };
            break;
          case "org.w3.clearkey":
          case "clearkey":
            if (sCurrentVideoEngine === "dash" && oDashApi) {
              if (aCurrentChannel.drmK.indexOf("http") === 0) {
                oDashApi.setProtectionData({
                  "org.w3.clearkey": {
                    serverURL: aCurrentChannel.drmK,
                    priority: 1,
                  },
                });
              } else {
                oDashApi.setProtectionData({
                  "org.w3.clearkey": {
                    clearkeys: getClearKeyJsonKeys(aCurrentChannel.drmK),
                    priority: 1,
                  },
                });
              }

              return;
            }

            oHlsApi.config.drmSystems = {
              "org.w3.clearkey": {
                licenseUrl: aCurrentChannel.drmK,
              },
            };
            break;
        }

        return {};
      }

      if (oHlsApi) {
        oHlsApi.config.emeEnabled = false;
        oHlsApi.config.drmSystems = {};
      }

      break;
    case "Samsung":
      if (
        webapis.avplay.getState() === "IDLE" &&
        aCurrentChannel.drmT &&
        aCurrentChannel.drmK
      ) {
        switch (aCurrentChannel.drmT) {
          case "com.widevine.alpha":
          case "widevine":
            var aDrmParam = {
              AppSession: sDrmSessionId,
              LicenseServer: aCurrentChannel.drmK,
            };
            webapis.avplay.setDrm(
              "WIDEVINE_CDM",
              "SetProperties",
              JSON.stringify(aDrmParam)
            );
            break;
          case "com.microsoft.playready":
          case "playready":
            var aDrmParam = {
              DeleteLicenseAfterUse: true,
              GetChallenge: true,
            };
            webapis.avplay.setDrm(
              "PLAYREADY",
              "SetProperties",
              JSON.stringify(aDrmParam)
            );
            break;
          case "com.apple.fps":
          case "fairplay":
            break;
          case "org.w3.clearkey":
          case "clearkey":
            break;
        }
      }
      break;
    case "Android":
      if (aCurrentChannel.drmT) {
        m3uConnector.setDrmLicense(aCurrentChannel.drmT, aCurrentChannel.drmK);
      } else {
        m3uConnector.setDrmLicense("-", "-");
      }
      break;
  }

  return {};
}

function resetPlayer() {
  try {
    switch (sDeviceFamily) {
      case "Browser":
      case "LG":
        if (sCurrentVideoEngine === "dash" && oDashApi) {
          oDashApi.attachSource(null);
        } else if (oHlsApi) {
          oHlsApi.stopLoad();
          oHlsApi.detachMedia();
        }
        break;
      case "Samsung":
        stopVideo();
        getEl("subtitles").innerHTML = "";
        break;
      case "Android":
      case "Apple":
        m3uConnector.resetPlayer();
        break;
    }
  } catch (e) {
    debugError(e);
  }
}

function stopStream() {
  switch (sDeviceFamily) {
    case "Browser":
    case "LG":
      if (sCurrentVideoEngine === "dash" && oDashApi) {
        oDashApi.attachSource(null);
      } else if (oHlsApi) {
        oHlsApi.stopLoad();
        oHlsApi.detachMedia();
      }
      break;
    case "Samsung":
      webapis.avplay.close();
      getEl("subtitles").innerHTML = "";
      break;
    case "Android":
      if (bPlaying) {
        m3uConnector.stopVideo();
      }
      break;
    case "Apple":
      break;
  }
}

function playDashVideo(sUrl) {
  if (!sUrl) {
    return false;
  }

  if (!bDashFrameworkLoaded) {
    loadDashFramework();
  }

  if (oDashApi) {
    oDashApi.attachView(oAvPlayer);
    oDashApi.attachSource(sUrl);
    oDashApi.updateSettings({
      streaming: { text: { defaultEnabled: bSubtitlesActive } },
    });
  }
}

function playHlsVideo(sUrl) {
  if (!sUrl) {
    return false;
  }

  if (!bHlsFrameworkLoaded) {
    loadHlsFramework();
  }

  if (oHlsApi) {
    oHlsApi.attachMedia(oAvPlayer);
    oHlsApi.loadSource(sUrl);
    oHlsApi.subtitleDisplay = bSubtitlesActive;
    if (sDeviceFamily === "LG") {
      playVideo();
    }
  } else if (oAvPlayer.canPlayType("application/vnd.apple.mpegurl")) {
    oAvPlayer.src = sUrl;
  }
}

// Catchup / Archive
var iArchiveCurrentTime = 0,
  iUtcArchiveStarted = 0,
  aArchiveData = false;
function setArchiveData() {}

function pad(num) {
  var s = String(num);
  while (s.length < 2) s = "0" + s;
  return s;
}

function formatDate(date, format) {
  return format
    .replace(/yyyy/g, date.getFullYear())
    .replace(/YYYY/g, date.getFullYear())
    .replace(/MM/g, pad(date.getMonth() + 1))
    .replace(/dd/g, pad(date.getDate()))
    .replace(/HH/g, pad(date.getHours()))
    .replace(/mm/g, pad(date.getMinutes()))
    .replace(/ss/g, pad(date.getSeconds()))
    .replace(/Y/g, date.getFullYear())
    .replace(/m/g, pad(date.getMonth() + 1))
    .replace(/d/g, pad(date.getDate()))
    .replace(/H/g, pad(date.getHours()))
    .replace(/M/g, pad(date.getMinutes()))
    .replace(/S/g, pad(date.getSeconds()));
}

function addFlussonicArchiveTime(sUrl, startTimestamp, durationSeconds) {
  var oUrl = new URL(sUrl),
    sPathname = oUrl.pathname;

  var match = sPathname.match(/^(.*\/)?([^\/]+)\.(m3u8|mp4|ts|mpd)$/i);
  if (!match) {
    return false;
  }

  var prefix = match[1] || "",
    base = match[2],
    ext = match[3];
  var archiveName =
    base + "-" + startTimestamp + "-" + durationSeconds + "." + ext;
  oUrl.pathname = prefix + archiveName;

  return oUrl.toString();
}

function loadArchiveChannel(aData, iUtcStart) {
  var oStartTime = getEpgDateObject(aData.start),
    iUtcBegin = Math.floor(oStartTime.getTime() / 1000);
  var oUtcNow = new Date(),
    iUtcNow = Math.floor(oUtcNow.getTime() / 1000);
  var oEndTime = getEpgDateObject(aData.end),
    iUtcEnd = Math.floor(oEndTime.getTime() / 1000);

  if (!iUtcStart) {
    iUtcStart = iUtcBegin;
    iArchiveCurrentTime = 0;
  }

  iUtcStart = Math.floor(iUtcStart);
  var sForceUrl = false,
    sParams = "",
    iCh = aData.channelnum;

  iUtcArchiveStarted = iUtcStart;

  switch (aData.catchup) {
    case "shift":
      sParams = "utc=" + iUtcStart + "&lutc=" + iUtcNow;
      break;
    case "archive":
      sParams = "archive=" + iUtcStart + "&archive_end=" + iUtcEnd;
      break;
    case "timeshift":
      sParams = "timeshift=" + iUtcStart + "&timenow=" + iUtcNow;
      break;

    case "flussonic":
    case "flussonic-hls":
    case "flussonic-ts":
    case "fs":
    case "flussonic-dash":
      var sChUrl = aActiveChannelList[iCh].url;
      if (sChUrl) {
        var sUrl = addFlussonicArchiveTime(
          sChUrl,
          iUtcStart,
          Math.floor(iUtcEnd - iUtcBegin)
        );
        if (sUrl && sUrl != sChUrl) {
          sParams = sUrl;
          sForceUrl = sUrl;
        }
      }
      break;
    case "xc":
      if (oCurrentPlaylist && oCurrentPlaylist.type === "xtream" && aData.xid) {
        sParams =
          oCurrentPlaylist.server +
          "streaming/timeshift.php?username=" +
          oCurrentPlaylist.xtreamUser +
          "&password=" +
          oCurrentPlaylist.xtreamPw +
          "&stream=" +
          aData.xid +
          "&start=" +
          formatDate(oStartTime, "Y-m-d-H:M") +
          "&duration=" +
          Math.floor(iUtcEnd - iUtcBegin) / 60;
        sForceUrl = sParams;
      }
      break;
    case "default":
    case "append":
    case "vod":
      var aCurrentChannel = aActiveChannelList[iCh],
        oChannelCatchup = aCurrentChannel.catchup;
      if (oChannelCatchup && oChannelCatchup.source) {
        sParams = oChannelCatchup.source;

        try {
          sParams = sParams.replace(/^[?&]/, "");
          var aReplacements = {
            "{Y}": oStartTime.getFullYear(),
            "{m}": pad(oStartTime.getMonth() + 1),
            "{d}": pad(oStartTime.getDate()),
            "{H}": pad(oStartTime.getHours()),
            "{M}": pad(oStartTime.getMinutes()),
            "{S}": pad(oStartTime.getSeconds()),
            "{utc}": iUtcBegin,
            "${start}": iUtcBegin,
            "{lutc}": iUtcNow,
            "${now}": iUtcNow,
            "${timestamp}": iUtcNow,
            "{utcend}": iUtcEnd,
            "${end}": iUtcEnd,
          };

          if (sParams.indexOf("yyyyMMddHHmmss") !== -1) {
            aReplacements["${(b)yyyyMMddHHmmss}"] = formatDate(
              oStartTime,
              "yyyyMMddHHmmss"
            );
            aReplacements["${(e)yyyyMMddHHmmss}"] = formatDate(
              oEndTime,
              "yyyyMMddHHmmss"
            );
          } else if (sParams.indexOf("YmdHMS") !== -1) {
            aReplacements["${start:YmdHMS}"] = formatDate(oStartTime, "YmdHMS");
            aReplacements["${end:YmdHMS}"] = formatDate(oEndTime, "YmdHMS");
            aReplacements["{utc:YmdHMS}"] = formatDate(oStartTime, "YmdHMS");
            aReplacements["{lutc:YmdHMS}"] = formatDate(oUtcNow, "YmdHMS");
            aReplacements["{utcend:YmdHMS}"] = formatDate(oEndTime, "YmdHMS");
          } else if (sParams.indexOf("YmdHM") !== -1) {
            aReplacements["${start:YmdHM}"] = formatDate(oStartTime, "YmdHM");
            aReplacements["${end:YmdHM}"] = formatDate(oEndTime, "YmdHM");
            aReplacements["{utc:YmdHM}"] = formatDate(oStartTime, "YmdHM");
            aReplacements["{lutc:YmdHM}"] = formatDate(oUtcNow, "YmdHM");
            aReplacements["{utcend:YmdHM}"] = formatDate(oEndTime, "YmdHM");
          } else if (sParams.indexOf("Ymd-H-M") !== -1) {
            aReplacements["${start:Ymd-H-M}"] = formatDate(
              oStartTime,
              "Ymd-H-M"
            );
            aReplacements["${end:Ymd-H-M}"] = formatDate(oEndTime, "Ymd-H-M");
            aReplacements["{utc:Ymd-H-M}"] = formatDate(oStartTime, "Ymd-H-M");
            aReplacements["{lutc:Ymd-H-M}"] = formatDate(oUtcNow, "Ymd-H-M");
            aReplacements["{utcend:Ymd-H-M}"] = formatDate(oEndTime, "Ymd-H-M");
          }

          if (sParams.indexOf("_iso}") !== -1) {
            aReplacements["{start_iso}"] = oStartTime.toISOString();
            aReplacements["{end_iso}"] = oEndTime.toISOString();
            aReplacements["{now_iso}"] = oUtcNow.toISOString();
          }

          for (var i in aReplacements) {
            sParams = sParams.replace(i, aReplacements[i]);
          }
        } catch (e) {
          debugError(e);
        }

        if (aData.catchup === "default") {
          sForceUrl = sParams;
        }
      }
  }

  aData.originStartUtc = iUtcBegin;
  aData.originEndUtc = iUtcEnd;
  aData.duration = Math.floor(iUtcEnd - iUtcBegin);
  aArchiveData = aData;

  hideEpgOverview();

  if (sSmartControlActive) {
    var oEpgElapsed = getEl("channel_info_epg_elapsed");
    if (oEpgElapsed) {
      var iElapsedPct = Math.round(
        ((iUtcArchiveStarted - iUtcBegin) / (iUtcEnd - iUtcBegin)) * 100
      );
      oEpgElapsed.style.width = iElapsedPct + "%";
    }
  }

  if (!sParams) {
    showModal("Channel does not support archive type: " + aData.catchup);
    return;
  }

  loadChannel(iCh, sParams, sForceUrl);
}

function jumpArchiveStream(iSeconds) {
  if (aArchiveData) {
    loadArchiveChannel(aArchiveData, iUtcArchiveStarted + iSeconds);
  }
}

function loadXtreamSeriesUrl() {
  if (
    oCurrentPlaylist &&
    oCurrentPlaylist.type === "xtream" &&
    aCurrentChannel.x_series_id
  ) {
    var sServerUrl = oCurrentPlaylist.server,
      sLogin = oCurrentPlaylist.xtreamUser,
      sPw = oCurrentPlaylist.xtreamPw;
    var sAuthUrl =
      sServerUrl + "player_api.php?username=" + sLogin + "&password=" + sPw;
    var sUrl =
      sAuthUrl +
      "&action=get_series_info&series_id=" +
      aCurrentChannel.x_series_id;

    hideLoader();
    hideChannelName();

    getEl("series_selector").classList.add("active", "loading-series");
    bSeriesSelectorOpened = true;

    fireRequest(
      sUrl,
      function (oHttp) {
        var oJson = JSON.parse(oHttp.responseText);
        if (oJson) {
          showXstreamSeriesSelector(oJson);
          getEl("series_selector").classList.remove("loading-series");
        } else {
          showModal("Could not load series");
          hideSeriesSelector();
        }
      },
      function (oHttp) {
        showModal("Could not load series", oHttp.message);
        hideSeriesSelector();
      }
    );

    return true;
  }

  setSeriesPlayStatus(false);
  return false;
}

function getChannelUrl(aCh, sArchiveParams, sForceUrl) {
  var sUrl = aCh.url;
  if (typeof sUrl !== "string") {
    return "no url provided";
  }

  if (sArchiveParams) {
    if (sForceUrl) {
      return sForceUrl;
    }
    if (sUrl.indexOf("?") > 1) {
      sUrl += "&" + sArchiveParams;
    } else {
      sUrl += "?" + sArchiveParams;
    }
  } else {
    aArchiveData = false;
    iArchiveCurrentTime = 0;
    iUtcArchiveStarted = 0;
  }

  return sUrl;
}

// ---- Player
function loadAndPlayChannelUrl() {
  if (aCurrentChannel.x_series_id) {
    return loadXtreamSeriesUrl();
  }

  setSeriesPlayStatus(false);
  return playChannelUrl();
}

function playChannelUrl() {
  if (!sPlayingUrl) {
    return false;
  }

  try {
    switch (sDeviceFamily) {
      case "Browser":
      case "LG":
        applyBufferSetting();
        setAdditionalHeaders();

        setDrmHandler();

        if (sCurrentVideoEngine === "html") {
          oAvPlayer.src = sPlayingUrl;
          oAvPlayer.play();
        } else if (sCurrentVideoEngine === "dash") {
          playDashVideo(sPlayingUrl);
        } else {
          playHlsVideo(sPlayingUrl);
        }

        break;
      case "Samsung":
        webapis.avplay.open(sPlayingUrl);
        try {
          webapis.avplay.setDisplayRect(0, 0, 1920, 1080);
          applyUserAgent();
          applyBufferSetting();
        } catch (e) {
          debugError(e);
        }

        setDrmHandler();
        playVideo();
        break;
      case "Android":
        setAdditionalHeaders();
        setDrmHandler();
        m3uConnector.loadVideo(
          sPlayingUrl,
          iCurrentChannel + ". " + sCurrentChannelName,
          sCurrentChannelGroup,
          sCurrentChannelLogo
        );
        bPlaying = true;
        if (getEl("playpause")) {
          changeButtonState("playpause");
        }
        break;
    }
  } catch (e) {
    debug("loadChannel. Something went wrong!!! " + e.message);

    if (sDeviceFamily === "Samsung") {
      tryReconnect();
    }
  }

  return true;
}

function setVideoEngine() {
  if (
    sPlayingUrl.indexOf(".mpd") > 5 ||
    sPlayingUrl.indexOf("type=mpd") > 5 ||
    sPlayingUrl.indexOf("/dash/") > 5
  ) {
    sCurrentVideoEngine = "dash";
  } else if (
    sPlayingUrl.indexOf(".mp4") > 5 ||
    sPlayingUrl.indexOf(".avi") > 5 ||
    sPlayingUrl.indexOf(".webm") > 5 ||
    sPlayingUrl.indexOf(".mkv") > 5
  ) {
    sCurrentVideoEngine = "html";
  } else {
    sCurrentVideoEngine = "hls";
  }
}

function loadChannel(iNum, sArchiveParams, sForceUrl) {
  iNum = parseInt(iNum);
  if (iNum < 0) {
    return false;
  }

  if (iNum === iCurrentChannel && !sArchiveParams && !bSeriesPlaying) {
    return false;
  }

  if (iReconnectTimer) {
    clearTimeout(iReconnectTimer);
    iReconnectTimer = false;
  }

  aSubTitleTracks = [];
  aAudioTracks = [];
  aVideoTracks = [];
  bTrackInfoLoaded = false;
  oChannelTrack.innerHTML = "";

  oCurrentEpisode = false;
  getEl("channel_episode_name").innerHTML = "";
  getEl("series_nav_list_container").innerHTML = "";

  iRetryChannelLoad = 0;
  iSelectedAudioTrack = false;
  iSelectedVideoTrack = false;
  iReconnectTryAfter = 1000;
  bChannelHasEpg = false;
  oChannelInfo.className = "";

  hideChannelError();
  hideEpgOverview();
  hideChannelSettings();

  if (sDeviceFamily !== "Android") {
    showLoader();
  }

  if (iNum > aActiveChannelList.length) {
    iNum = aActiveChannelList.length;
  }

  iPreviousChannel = iCurrentChannel;
  iCurrentChannel = iNum;

  aCurrentChannel = aActiveChannelList[iCurrentChannel];
  if (!aCurrentChannel) {
    aCurrentChannel = aActiveChannelList[0];
    iCurrentChannel = 0;
  }

  if (!aCurrentChannel) {
    return false;
  }

  sPlayingUrl = getChannelUrl(aCurrentChannel, sArchiveParams, sForceUrl);

  sCurrentChannelName = aCurrentChannel.cname
    ? aCurrentChannel.cname
    : aCurrentChannel.name;
  sCurrentChannelGroup = aCurrentChannel.group;
  sCurrentChannelLogo = false;
  if (typeof aCurrentChannel.logo === "string") {
    sCurrentChannelLogo = aCurrentChannel.logo;
  }

  if (sCurrentChannelGroup !== sSelectedGroup && sSelectedGroup !== "__fav") {
    var bFound = false;
    if (sCurrentChannelGroup && sCurrentChannelGroup.indexOf(";") > 1) {
      var aChannelGroups = sCurrentChannelGroup.split(";");
      aChannelGroups.forEach(function (sGr) {
        if (sSelectedGroup === sGr) {
          bFound = true;
        }
      });
      if (!bFound) {
        removeGroupFilter();
      }
    } else {
      removeGroupFilter();
    }
  }

  try {
    stopStream();
  } catch (e) {
    debugError(e);
  }

  if (!sPlayingUrl) {
    showChannelError("This channel has no URL", "Code: NO_CHANNEL_URL");
    return false;
  }

  setVideoEngine();
  lazyLoadChannel(iCurrentChannel);

  var oNavChannel = getNavChannel(iCurrentChannel);
  var oLastSelectedNavItem = oChannelList.querySelector("li.selected");
  if (oLastSelectedNavItem) {
    oLastSelectedNavItem.classList.remove("selected");
  }

  var oOldNavChannel = oChannelList.querySelector("li.active");
  if (oOldNavChannel) {
    oOldNavChannel.classList.remove("active");
  }

  if (oNavChannel) {
    oSelectedItem = oNavChannel;
    oNavChannel.classList.add("active", "selected");
    scrollToListItem(oNavChannel);
  }

  sLoadingFromDb = false;
  bChannelNameGenerated = false;

  if (typeof loadChannelEpgCallback === "function") {
    loadChannelEpgCallback();
  }

  if (sSmartControlActive) {
    loadChannelEpg(aArchiveData !== false);
    setSmartEpg();
  } else {
    showChannelName();
  }

  if (aCurrentChannel.protect && !bProtectionUnlocked) {
    hideLoader();
    showProtectionInput("channelload");
    return false;
  }

  hideProtectionInput();
  bChannelWasAlreadyPlaying = false;

  if (bShowAd) {
    showRewardedAdConsent();
    return false;
  }

  return loadAndPlayChannelUrl();
}

var successLoadCallback = function () {
  localStorage.setItem("iCurrentChannel", iCurrentChannel);
  iRetryChannelLoad = 0;
  iReconnectTryAfter = 1000;
  bStreamWasInterrupted = false;
  bChannelWasAlreadyPlaying = true;

  if (bChannelSettingsOpened) {
    buildSubDubForm();
  }

  bPlayerLoaded = true;
  webapis.avplay.play();
  bPlaying = true;
};

var errorLoadCallback = function () {
  bPlayerLoaded = false;
  debug("The media has failed to prepare");
  stopVideo();
};

function openUiElement(sElement) {
  var aUiElements = [
    "Nav",
    "Epg",
    "EpgOverview",
    "ChannelName",
    "ChannelSettings",
    "Controls",
  ];

  for (var i; i < aUiElements.length; i++) {
    if (aUiElements[i] == sElement) {
    } else {
    }
  }
}

function clearUi(sExclude) {
  if (sExclude !== "epgOverview") hideEpgOverview();
  if (sExclude !== "nav") hideNav();
  if (sExclude !== "channelName") hideChannelName();
  if (sExclude !== "channelSettings") hideChannelSettings();
  if (sExclude !== "controls") hideControls();
  if (sExclude !== "smartControls") hideSmartControls();
  if (sExclude !== "context") hideContextMenu();
}

// ---- channel list
function toggleNav() {
  if (bNavOpened) {
    showNav();
  } else {
    hideNav();
  }
}

function showNav() {
  clearUi("nav");
  bNavOpened = true;

  if (bNeedNavRefresh) {
    bNeedNavRefresh = false;
    buildNav();
  } else {
    buildEpgNavList();
    syncScrollEpgList(oChannelList);
  }

  hideControlsArrow();

  var oSelected = getCurrentSelectedItem();
  if (oSelected) {
    oSelected.classList.remove("selected");
  }
  selectNavChannel();
  channelScrollEvent();

  document.body.classList.add("nav-opened");

  oSearchField.removeAttribute("disabled");

  if (sSelectedGroup === "__fav" && !getFavsCount()) {
    removeGroupFilter();
    buildNav();
    return false;
  }
}

function hideNav() {
  oSearchField.setAttribute("disabled", "disabled");
  hideGroups();
  hideAdvancedNav();
  bNavOpened = false;
  bMouseOpenedNav = false;
  document.body.classList.remove("nav-opened");

  if (bMoveChannelFieldActive) {
    hideChannelPosInput();
  }

  if (aLazyLoadedChannels.length > 200) {
    bNeedNavRefresh = true;
    buildNav();
  }
}

function showGroups() {
  hideAdvancedNav();
  bGroupsOpened = true;
  bMouseOpenedNav = false;
  oSearchField.removeAttribute("disabled");
  oSelectedItem = getCurrentSelectedItem();
  oSelectedItem.classList.add("selected");
  document.body.classList.add("groups-opened");
  scrollToListItem(oSelectedItem);
}

function hideGroups() {
  bGroupsOpened = false;
  document.body.classList.remove("groups-opened");
}

function showAdvancedNav() {
  hideGroups();
  bAdvancedNavOpened = true;

  oSelectedItem = getCurrentSelectedItem();
  oSelectedItem.classList.add("selected");
  document.body.classList.add("advanced-nav-opened");
  scrollToListItem(oSelectedItem);
}

function hideAdvancedNav() {
  bAdvancedNavOpened = false;
  document.body.classList.remove("advanced-nav-opened");
}

function toggleControlsSettings() {
  if (bChannelSettingsOpened) {
    hideChannelSettings();
  } else {
    showChannelSettings();
  }
}

var bCastConnected = false;
function googleCast() {
  if (sDeviceFamily === "Android") {
    hideChannelSettings();
    m3uConnector.initGoogleCast();
  }
}

function castConnected() {
  bCastConnected = true;
  document.body.classList.add("cast-connected");
}

function castDisconnected() {
  bCastConnected = false;
  document.body.classList.remove("cast-connected");
}

/* Channel settings */
var iRetryTrackLoading = false;

function updateVideoTrackInfo() {
  var sInfo =
    " - " +
    getLang("channelSettingResolution") +
    ": " +
    oPlayerEngine.videoWidth() +
    "x" +
    oPlayerEngine.videoHeight();
  oChannelTrack.innerHTML = sInfo;
}

function loadTrackInfo() {
  if (bTrackInfoLoaded) {
    return true;
  }

  var sInfo = "";

  try {
    switch (sDeviceFamily) {
      case "Browser":
      case "LG":
        aSubTitleTracks = [];
        aAudioTracks = [];
        aVideoTracks = [];

        if (sCurrentVideoEngine === "dash" && oDashApi) {
          var oTrackInfo = oDashApi.getTracksFor("text");
          if (oTrackInfo) {
            var iTrackInfoCount = oTrackInfo.length;
            for (var i = 0; i < iTrackInfoCount; i++) {
              aSubTitleTracks.push({
                id: i,
                index: oTrackInfo[i].index,
                name: oTrackInfo[i].lang,
              });
            }
          }

          var oTrackInfo = oDashApi.getTracksFor("audio");
          if (oTrackInfo) {
            var oCurrentTrack = oDashApi.getCurrentTrackFor("audio");
            var iTrackInfoCount = oTrackInfo.length;
            for (var i = 0; i < iTrackInfoCount; i++) {
              if (oCurrentTrack == oTrackInfo[i]) {
                iSelectedAudioTrack = i;
              }
              aAudioTracks.push({
                id: i,
                index: oTrackInfo[i].index,
                name: oTrackInfo[i].lang,
              });
            }
          }

          var oTrackInfo = oDashApi.getTracksFor("video");
          if (oTrackInfo) {
            var oCurrentTrack = oDashApi.getCurrentTrackFor("video");
            var iTrackInfoCount = oTrackInfo.length;
            for (var i = 0; i < iTrackInfoCount; i++) {
              if (oCurrentTrack == oTrackInfo[i]) {
                iSelectedVideoTrack = i;
              }
              var sName = oTrackInfo[i].lang;
              if (sName) {
                sName += " - ";
              }
              sName += oTrackInfo[i].codec;
              aVideoTracks.push({
                id: i,
                index: oTrackInfo[i].index,
                name: sName,
              });
            }
          }
        } else if (sCurrentVideoEngine === "html") {
        } else if (oHlsApi) {
          var oTrackInfo = oHlsApi.subtitleTracks;
          if (oTrackInfo) {
            var iTrackInfoCount = oTrackInfo.length;
            for (var i = 0; i < iTrackInfoCount; i++) {
              aSubTitleTracks.push({
                id: oTrackInfo[i].id,
                name: oTrackInfo[i].lang + " - " + oTrackInfo[i].name,
              });
            }
          }

          var oTrackInfo = oHlsApi.audioTracks;
          if (oTrackInfo) {
            var iTrackInfoCount = oTrackInfo.length;
            for (var i = 0; i < iTrackInfoCount; i++) {
              aAudioTracks.push({
                id: oTrackInfo[i].id,
                name: oTrackInfo[i].lang + " - " + oTrackInfo[i].name,
              });
            }
          }
        }

        break;

      case "Samsung":
        if (webapis.avplay.getState() === "IDLE") {
          return false;
        }

        var oTrackInfo = webapis.avplay.getTotalTrackInfo();
        if (oTrackInfo) {
          var iTrackInfoCount = oTrackInfo.length;

          aSubTitleTracks = [];
          aAudioTracks = [];
          aVideoTracks = [];

          for (var i = 0; i < iTrackInfoCount; i++) {
            var oExtraInfo = JSON.parse(oTrackInfo[i].extra_info);
            if (oExtraInfo) {
              if (oExtraInfo.fourCC) {
                if (oTrackInfo[i].type === "VIDEO") {
                  sInfo += (sInfo ? "<br>" : "") + oExtraInfo.fourCC;
                  if (
                    oExtraInfo.Bit_rate &&
                    oExtraInfo.Bit_rate != "99999999"
                  ) {
                    var iMbits = (oExtraInfo.Bit_rate / 1000000).toFixed(3);
                    sInfo += " (" + iMbits + " Mbit/s)";
                  }
                  if (oExtraInfo.Width && oExtraInfo.Height) {
                    sInfo +=
                      " - " +
                      getLang("channelSettingResolution") +
                      ": " +
                      oExtraInfo.Width +
                      "x" +
                      oExtraInfo.Height;
                  }
                } else if (i < 3) {
                  sInfo += (sInfo ? "<br>" : "") + oExtraInfo.fourCC;
                  if (
                    oExtraInfo.bit_rate &&
                    oExtraInfo.bit_rate != "99999999"
                  ) {
                    var iMbits = (oExtraInfo.bit_rate / 1000000).toFixed(3);
                    sInfo += " (" + iMbits + " Mbit/s)";
                    if (oExtraInfo.language) {
                      sInfo += " - " + oExtraInfo.language;
                    }
                  }
                } else if (i === 3) {
                  sInfo += "<br>...";
                }
              }

              switch (oTrackInfo[i].type) {
                case "TEXT":
                  var sTrackName = oExtraInfo.track_lang;
                  if (!sTrackName) {
                    sTrackName = "-- unknown --";
                  }
                  aSubTitleTracks.push({
                    id: oTrackInfo[i].index,
                    name: sTrackName,
                  });
                  break;
                case "VIDEO":
                  aVideoTracks.push({
                    id: oTrackInfo[i].index,
                    name: oExtraInfo.fourCC,
                  });
                  break;
                case "AUDIO":
                  var sName = oExtraInfo.language
                    ? oExtraInfo.language
                    : getLang("channelSettingAudioDefault");
                  if (oExtraInfo.bit_rate) {
                    var iMbits = (oExtraInfo.bit_rate / 1000000).toFixed(3);
                    sName +=
                      " - " + oExtraInfo.fourCC + " (" + iMbits + " Mbit/s)";
                  }
                  aAudioTracks.push({ id: oTrackInfo[i].index, name: sName });
                  break;
              }
            }
          }

          oChannelTrack.innerHTML = sInfo;
        }
        break;

      case "Android":
      case "Apple":
        break;
    }

    bTrackInfoLoaded = true;
  } catch (e) {
    debug("loadTrackInfo error: " + e.message);
  }

  return bTrackInfoLoaded;
}

function switchVideoFormat(sMode) {
  if (sMode === false) {
    sMode = getVideoFormatSetting();
  }

  try {
    switch (sDeviceFamily) {
      case "LG":
      case "Browser":
        var sCss = "contain";
        if (sMode == "fill") {
          sCss = "fill";
        } else if (sMode == "zoom") {
          sCss = "cover";
        }

        oAvPlayer.style.objectFit = sCss;
        break;
      case "Samsung":
        if (sMode == "fill") {
          webapis.avplay.setDisplayMethod("PLAYER_DISPLAY_MODE_FULL_SCREEN");
        } else {
          webapis.avplay.setDisplayMethod(
            "PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO"
          );
        }
        break;
      case "Android":
      case "Apple":
        m3uConnector.setAspectMode(sMode);
    }
  } catch (e) {
    debug("switchPlayerAspectMode error: " + e.message);
  }
}

function switchCameraCutout(sValue) {
  if (sDeviceFamily === "Android") {
    m3uConnector.setCameraCutoutMode(sValue === "on");
  }
}

function switchVideoTrack(iTrackId) {
  if (sChannelSetting !== "sub-dub") {
    debug("switchVideoTrack not allowed");
    return false;
  }

  iTrackId = parseInt(iTrackId);

  try {
    if (sCurrentVideoEngine === "dash" && oDashApi) {
      var oVideoTracks = oDashApi.getTracksFor("video");
      if (oVideoTracks && oVideoTracks[iTrackId]) {
        oDashApi.setCurrentTrack(oVideoTracks[iTrackId]);
      }
    } else if (oHlsApi) {
    } else if (sDeviceFamily === "Samsung" && aVideoTracks.length) {
    } else if (sDeviceFamily === "Android" && aVideoTracks.length) {
    }
    iSelectedVideoTrack = iTrackId;
    debug("Switched video track: " + iTrackId);
  } catch (e) {
    debugError(e);
  }
}

function switchAudioTrack(iTrackId) {
  if (sChannelSetting !== "sub-dub") {
    debug("switchAudioTrack not allowed");
    return false;
  }

  iTrackId = parseInt(iTrackId);

  try {
    if (sCurrentVideoEngine === "dash" && oDashApi) {
      var oAudioTracks = oDashApi.getTracksFor("audio");
      if (oAudioTracks && oAudioTracks[iTrackId]) {
        oDashApi.setCurrentTrack(oAudioTracks[iTrackId]);
      }
    } else if (oHlsApi) {
      oHlsApi.audioTrack = iTrackId;
    } else if (sDeviceFamily === "Samsung" && aAudioTracks.length) {
      webapis.avplay.setSelectTrack("AUDIO", iTrackId);
    } else if (sDeviceFamily === "Android" && aAudioTracks.length) {
      m3uConnector.setSelectTrack("AUDIO", iTrackId);
    }
    iSelectedAudioTrack = iTrackId;
    debug("Switched audio track: " + iTrackId);
  } catch (e) {
    debugError(e);
  }
}

function switchSubtitleTrack(iTrackId) {
  if (sChannelSetting !== "sub-dub") {
    debug("switchSubtitleTrack not allowed");
    return false;
  }

  try {
    if (iTrackId == "OFF") {
      hideSubtitles();
      return false;
    }

    iTrackId = parseInt(iTrackId);

    showSubtitles();
    if (sCurrentVideoEngine === "dash" && oDashApi) {
      oDashApi.setTextTrack(iTrackId);
    } else if (sCurrentVideoEngine === "html") {
    } else if (oHlsApi) {
      oHlsApi.subtitleTrack = iTrackId;
    } else if (sDeviceFamily === "Samsung" && aSubTitleTracks.length) {
      webapis.avplay.setSelectTrack("TEXT", iTrackId);
    } else if (sDeviceFamily === "Android" && aSubTitleTracks.length) {
      m3uConnector.setSelectTrack("TEXT", iTrackId);
    }
    iSelectedSubtitleTrack = iTrackId;
    debug("Switched subtitle track: " + iTrackId);
  } catch (e) {
    debugError(e);
  }
}

function buildSubDubForm() {
  if (sDeviceFamily === "Samsung") {
    var sState = webapis.avplay.getState();
    if (
      sState !== "READY" &&
      sState !== "PLAYING" &&
      sState !== "PAUSED" &&
      !iRetryTrackLoading
    ) {
      oChannelSubDubSettings.innerHTML =
        '<p style="margin-top: 60px;">' + getLang("loading") + "</p>";
      return false;
    }
  }

  if (sDeviceFamily === "Android") {
    sHtml =
      '<button class="setting-button" onclick="toggleAudio();">' +
      getLang("audioTrack") +
      "</button>";
    sHtml +=
      '<button class="setting-button" onclick="toggleSubtitles();">' +
      getLang("subtitleTrack") +
      "</button>";
    oChannelSubDubSettings.innerHTML = sHtml;

    sHtml =
      '<button class="setting-button" onclick="toggleVideo();">' +
      getLang("videoTrack") +
      "</button>";
    getEl("channel_settings_video_codecs").innerHTML = sHtml;

    return true;
  }

  loadTrackInfo();

  var sHtml = "";
  if (aAudioTracks || aSubTitleTracks) {
    sHtml +=
      '<div class="channel-setting form-row"><label>' +
      getLang("audioTrack") +
      "</label>";
    var iCount = aAudioTracks.length;
    if (iCount > 1) {
      sHtml +=
        '<select class="selection setting-button" onchange="switchAudioTrack(this.value);">';
      for (var i = 0; i < iCount; i++) {
        var sSelectedAttr = "";
        if (iSelectedAudioTrack == aAudioTracks[i].id) {
          sSelectedAttr = 'selected="selected"';
        }
        sHtml +=
          '<option value="' +
          aAudioTracks[i].id +
          '" ' +
          sSelectedAttr +
          ">" +
          aAudioTracks[i].name +
          "</option>";
      }
      sHtml += "</select>";
    } else if (iCount === 1) {
      sHtml += '<p class="selection">' + aAudioTracks[0].name + "</p>";
    } else {
      sHtml +=
        '<p class="selection">' +
        getLang("channelSettingAudioDefault") +
        "</p>";
    }

    sHtml += '</div><div class="HR"></div>';

    sHtml +=
      '<div class="channel-setting form-row"><label>' +
      getLang("subtitleTrack") +
      "</label>";
    var iCount = aSubTitleTracks.length;
    if (iCount) {
      sHtml +=
        '<select class="selection setting-button" onchange="switchSubtitleTrack(this.value);">';
      sHtml +=
        '<option value="OFF">' + getLang("channelSettingSubOff") + "</option>";
      for (var i = 0; i < iCount; i++) {
        var sSelectedAttr = "";
        if (
          bSubtitlesActive &&
          iSelectedSubtitleTrack == aSubTitleTracks[i].id
        ) {
          sSelectedAttr = 'selected="selected"';
        }
        sHtml +=
          '<option value="' +
          aSubTitleTracks[i].id +
          '" ' +
          sSelectedAttr +
          ">" +
          aSubTitleTracks[i].name +
          "</option>";
      }
      sHtml += "</select>";
    } else {
      sHtml +=
        '<p class="selection">' + getLang("channelSettingSubNoTrack") + "</p>";
    }

    sHtml += "</div>";
  }

  oChannelSubDubSettings.innerHTML = sHtml;

  if (aVideoTracks) {
    var iCount = aVideoTracks.length;
    if (iCount) {
      sHtml =
        '<div class="HR"></div><div class="channel-setting form-row"><label>' +
        getLang("videoTrack") +
        "</label>";
      sHtml +=
        '<select class="selection setting-button" onchange="switchVideoTrack(this.value);">';
      for (var i = 0; i < iCount; i++) {
        var sSelectedAttr = "";
        if (iSelectedVideoTrack == aVideoTracks[i].id) {
          sSelectedAttr = 'selected="selected"';
        }
        sHtml +=
          '<option value="' +
          aVideoTracks[i].id +
          '" ' +
          sSelectedAttr +
          ">" +
          aVideoTracks[i].name +
          "</option>";
      }
      sHtml += "</select></div>";
      getEl("channel_settings_video_codecs").innerHTML = sHtml;
    }
  }
}

function showChannelSetting(sSetting) {
  sChannelSetting = sSetting;
  iChannelSettingsFocusedField = 0;

  var sChannelSettingContainerId = false;
  switch (sSetting) {
    case "video":
      sChannelSettingContainerId = "#channel_settings_video";
      break;
    case "sub-dub":
      sChannelSettingContainerId = "#channel_settings_subs";
      break;
    default:
      sChannelSettingContainerId = "#channel_settings_content";
  }

  var oSettingSelectBoxes = document.querySelectorAll(
    sChannelSettingContainerId + " .setting-button"
  );
  if (oSettingSelectBoxes && oSettingSelectBoxes.length) {
    setTimeout(function () {
      oSettingSelectBoxes[iChannelSettingsFocusedField].focus();
    }, 50);
  }

  getEl("list_container_right").className = "edit-" + sSetting;
  document.body.classList.add("channel-setting-edit");
}

function hideChannelSetting() {
  sChannelSetting = false;
  defocus();
  getEl("list_container_right").className = "";
  document.body.classList.remove("channel-setting-edit");
}

function showChannelSettings() {
  clearUi("channelSettings");

  if (sChannelSetting) {
    hideChannelSetting();
  }

  if (!bChannelSettingsOpened) {
    bChannelSettingsOpened = true;
    oSelectedItem = getCurrentSelectedItem();
    oSelectedItem.classList.add("selected");
    document.body.classList.add("channel-settings-opened");
    buildSubDubForm();
  }
}

function hideChannelSettings() {
  if (bChannelSettingsOpened) {
    bChannelSettingsOpened = false;
    document.body.classList.remove("channel-settings-opened");
  }
  hideChannelSetting();
}

function toggleChannelEditMode(sMode) {
  document.body.classList.remove(
    "channel-edit",
    "channel-edit-move",
    "channel-edit-delete"
  );

  if (sMode == "exit") {
    sChannelEditMode = false;
    bChannelEditModeActive = false;
    showGroups();
    buildNav(true);
    iSecondsSinceEpgNavListRefresh = 9999;
    iSecondsSinceEpgOverviewRefresh = 9999;
    return false;
  }

  sChannelEditMode = sMode;
  bChannelEditModeActive = true;

  switch (sMode) {
    case "move":
      document.body.classList.add("channel-edit", "channel-edit-move");
      showNav();
      break;
    case "delete":
      document.body.classList.add("channel-edit", "channel-edit-delete");
      showNav();
      break;
    default:
      showNav();
      break;
  }

  return true;
}

function removeChannel(iChNum) {
  aActiveChannelList.splice(iChNum - 1, 1);
  var oSelected = getCurrentSelectedItem();
  moveListDown();
  oSelected.remove();
}

function removeGroupFilter() {
  sSelectedGroup = false;
  bNeedNavRefresh = true;
  localStorage.removeItem("sSelectedGroup");
  getEl("active_group").innerText = "";
  getEl("search_input").classList.remove("group-filter");
}

function setGroupFilter(sGroup) {
  sSelectedGroup = sGroup;
  localStorage.setItem("sSelectedGroup", sGroup);
  var sGroupTitle = "";

  switch (sGroup) {
    case "__all":
      break;
    case "__fav":
      sGroupTitle = getLang("favourites");
      break;
    default:
      if (sGroup) {
        sGroupTitle = "&#9660;" + sGroup;
      }
  }

  getEl("active_group").innerHTML = sGroupTitle;
  if (sGroupTitle) {
    getEl("search_input").classList.add("group-filter");
  } else {
    getEl("search_input").classList.remove("group-filter");
  }
}

function openContextMenu(sType) {
  var iCh = -1;

  switch (sType) {
    case "channellist":
      var oSelected = document.querySelector("#channel_list li.selected");
      if (oSelected) {
        iCh = oSelected.dataset.channelnum;
      }
      break;
    case "channel":
      iCh = iCurrentChannel;
  }

  iCh = parseInt(iCh);
  if (iCh < 0) {
    return false;
  }

  var oCh = aActiveChannelList[iCh];
  var sHeadline = getChannelHtml(iCh, "context_menu_title");
  if (oCh.protect) {
    oContextHeadline.className = "icon icon-locked";
  }

  oContextHeadline.classList.toggle("fav", isFavourite(iCh));
  oContextHeadline.innerHTML =
    '<div id="context_channel_headline">' + sHeadline + "</div>";

  hideChannelSettings();
  iContextMenuEditChannel = iCh;
  showElement("context_menu");

  oSelectedItem = oContextNav.querySelector("li.selected");
}

function hideContextMenu() {
  bRenameFieldActive = false;
  iContextMenuEditChannel = false;
  hideElement("context_menu");
}

function scrollToListItem(oListItem, bSmooth) {
  var oParentBox = oListItem.parentElement.parentElement,
    iBoxHeight = oParentBox.offsetHeight;

  if (bSmooth) {
    oParentBox.classList.add("smooth-scrolling");
  }

  oParentBox.scrollTop = oListItem.offsetTop - iBoxHeight * 0.5;

  if (bSmooth) {
    oParentBox.classList.remove("smooth-scrolling");
  }
}

function filterCategory(oFilterItem) {
  removeGroupFilter();
  removeFilterCategory();

  sFilterCategory = oFilterItem.id.replace("category_", "");
  oFilterItem.classList.add("active-category");
  hideGroups();
  buildNav();
}

function removeFilterCategory() {
  sFilterCategory = false;
  var oFilterItem = getEl("category_list").querySelector(".active-category");
  if (oFilterItem) {
    oFilterItem.classList.remove("active-category");
  }
}

function getCurrentSelectedItem() {
  var oSelected = false;

  if (iContextMenuEditChannel !== false) {
    oSelected = oContextNav.querySelector("li.selected");
    if (!oSelected) {
      oSelected = oContextNav.querySelector("li:first-child");
    }

    return oSelected;
  } else if (bSeriesSelectorOpened) {
    oSelected = oSeriesNavSelector.querySelector("li.selected");
    if (!oSelected) {
      oSelected = oSeriesNavSelector.querySelector("li:first-child");
    }

    return oSelected;
  } else if (bPlaylistSelectorOpened) {
    oSelected = oPlaylistNavSelector.querySelector("li.selected");
    if (!oSelected) {
      oSelected = oPlaylistNavSelector.querySelector("li:first-child");
    }

    return oSelected;
  } else if (bChannelSettingsOpened) {
    oSelected = document.querySelector("#channel_settings_nav li.selected");
    if (!oSelected) {
      oSelected = document.querySelector(
        "#channel_settings_nav li:first-child"
      );
    }

    return oSelected;
  } else if (bAdvancedNavOpened) {
    oSelected = document.querySelector("#advanced_list li.selected");
    if (!oSelected) {
      oSelected = document.querySelector("#advanced_list li:first-child");
    }

    return oSelected;
  } else if (bGroupsOpened) {
    oSelected = document.querySelector("#group_list li.selected");
    if (!oSelected && sSelectedGroup) {
      switch (sSelectedGroup) {
        case "__all":
          oSelected = getEl("all_channels_group");
          break;
        case "__fav":
          oSelected = getEl("favourites_group");
          break;
        default:
          oSelected = getEl("nav_gr_" + sSelectedGroup);
      }
    }
    if (!oSelected) {
      oSelected = document.querySelector("#group_list li:first-child");
    }

    return oSelected;
  } else {
    oSelected = document.querySelector("#channel_list li.selected");
    if (!oSelected && iCurrentChannel) {
      oSelected = getNavChannel(iCurrentChannel);
    }
  }

  if (!oSelected) {
    oSelected = getNavChannel(aChannelOrder[0]);
  }

  return oSelected;
}

function moveListUp(iSteps) {
  iSteps = iSteps || 1;
  var oSelected = getCurrentSelectedItem();

  if (oSelected) {
    oSelected.classList.remove("selected");
    oSelectedItem = oSelected;
    var iChannelOrderPos = oSelectedItem.dataset.order;

    if (typeof iChannelOrderPos !== "undefined") {
      iChannelOrderPos = parseInt(iChannelOrderPos) - iSteps;
      if (iChannelOrderPos < -1) {
        iChannelOrderPos = 0;
      } else if (iChannelOrderPos == -1) {
        iChannelOrderPos = aChannelOrder.length - 1;
      }

      var iNewChannelNum = aChannelOrder[iChannelOrderPos];
      oSelectedItem = getNavChannel(iNewChannelNum);
    } else if (oSelected.dataset.prev) {
      oSelectedItem = document.querySelector(
        "#" + oSelected.dataset.prev + " li:last-child"
      );
    } else {
      for (var i = 1; i <= iSteps; i++) {
        if (!oSelectedItem.previousElementSibling) {
          if (i === 1) {
            oSelectedItem = oSelected.parentElement.lastElementChild;
          }
          break;
        }
        oSelectedItem = oSelectedItem.previousElementSibling;
      }
    }

    scrollToListItem(oSelectedItem, iSteps > 3);
    oSelectedItem.classList.add("selected");
    focusListItem(oSelectedItem);
  }

  return oSelectedItem;
}

function moveListDown(iSteps) {
  iSteps = iSteps || 1;
  var oSelected = getCurrentSelectedItem();

  if (oSelected) {
    oSelected.classList.remove("selected");
    oSelectedItem = oSelected;
    var iChannelOrderPos = oSelectedItem.dataset.order;

    if (typeof iChannelOrderPos !== "undefined") {
      iChannelOrderPos = parseInt(iChannelOrderPos) + iSteps;
      if (iChannelOrderPos > aChannelOrder.length) {
        iChannelOrderPos = aChannelOrder.length - 1;
      } else if (iChannelOrderPos == aChannelOrder.length) {
        iChannelOrderPos = 0;
      }

      var iNewChannelNum = aChannelOrder[iChannelOrderPos];
      oSelectedItem = getNavChannel(iNewChannelNum);
    } else if (oSelected.dataset.next) {
      oSelectedItem = document.querySelector(
        "#" + oSelected.dataset.next + " li:first-child"
      );
    } else {
      for (var i = 1; i <= iSteps; i++) {
        if (!oSelectedItem.nextElementSibling) {
          if (i === 1) {
            oSelectedItem = oSelected.parentElement.firstElementChild;
          }
          break;
        }
        oSelectedItem = oSelectedItem.nextElementSibling;
      }
    }

    scrollToListItem(oSelectedItem, iSteps > 3);
    oSelectedItem.classList.add("selected");
    focusListItem(oSelectedItem);
  }

  return oSelectedItem;
}

function focusListItem(oSelectedItem) {
  if (oSelectedItem && oSelectedItem.dataset.channelnum) {
    var iChNum = oSelectedItem.dataset.channelnum,
      aCurChannel = aActiveChannelList[iChNum],
      sImage = "";
    if (
      aCurChannel &&
      aCurChannel.logo &&
      oSelectedItem.classList.contains("movie")
    ) {
      document.body.classList.add("movie-desc-opened");
      sImage = '<img src="' + aCurChannel.logo + '" alt="" />';
    } else {
      document.body.classList.remove("movie-desc-opened");
    }

    getEl("series_nav_list_container").innerHTML = sImage;
  }
}

function selectListItem() {
  var oLastSelected = getCurrentSelectedItem();
  if (oLastSelected && oLastSelected != oSelectedItem) {
    oLastSelected.classList.remove("selected");
    oSelectedItem.classList.add("selected");
  }

  if (iContextMenuEditChannel !== false) {
    var oCh = aActiveChannelList[iContextMenuEditChannel];

    switch (oSelectedItem.id) {
      case "context-add-fav":
        var bFavAdded = toggleFavourite(iContextMenuEditChannel);
        oContextHeadline.classList.toggle("fav", bFavAdded);
        return false;
      case "context-rename":
        showRenameInput(iContextMenuEditChannel);
        return false;
        break;
      case "context-move":
        enableChannelMoveMode(iContextMenuEditChannel);
        return false;
        break;
      case "context-protect":
        if (!bProtectionUnlocked) {
          showProtectionInput(iContextMenuEditChannel);
          return false;
        }

        if (oCh.protect) {
          delete oCh.protect;
          oContextHeadline.classList.remove("icon", "icon-locked");
        } else {
          oCh.protect = true;
          oContextHeadline.classList.add("icon", "icon-locked");
        }

        saveChannel(oCh);

        if (bNavOpened) {
          recreateNavChannel(iContextMenuEditChannel);
        }

        break;
      case "context-delete":
        if (aActiveChannelList.length === 1) {
          showModal("😡");
          return false;
        }

        oCh.deleted = true;
        saveChannel(oCh);
        aActiveChannelList.splice(iContextMenuEditChannel, 1);

        if (iContextMenuEditChannel < iCurrentChannel) {
          iCurrentChannel--;
          localStorage.setItem("iCurrentChannel", iCurrentChannel);
        } else if (iContextMenuEditChannel === iCurrentChannel) {
          iCurrentChannel = -1;
          loadChannel(iContextMenuEditChannel);
        }

        if (bNavOpened) {
          buildNav(true);
          selectNavChannel(iContextMenuEditChannel);
          hideContextMenu();
        }

        break;
    }

    bChannelNameGenerated = false;
    bNeedNavRefresh = true;

    return false;
  }

  if (bSeriesSelectorOpened) {
    pickSeriesSelector(oSelectedItem);
    return false;
  }

  if (bPlaylistSelectorOpened) {
    if (oSelectedItem.id === "selector_open_playlist_manager") {
      hidePlaylistSelector();
      openSettings("playlists");
    } else if (oSelectedItem.dataset.pid) {
      pickPlaylistSelector(oSelectedItem);
    }

    return false;
  }

  if (bGroupsOpened || bAdvancedNavOpened) {
    var sLastSelectedGroup = sSelectedGroup;
    if (oSelectedItem.dataset.group) {
      sSelectedGroup = oSelectedItem.dataset.group;
    }

    if (sSelectedGroup === "__all") {
    }

    if (sSelectedGroup === "__fav") {
      countFavChannels();
      if (!bPlaylistHasFavs) {
        showModal(getLang("errorNoFavouritesYet"));
        sSelectedGroup = sLastSelectedGroup;
        return false;
      }
    }

    if (sSelectedGroup) {
      setGroupFilter(sSelectedGroup);
    }

    switch (oSelectedItem.id) {
      case "category_series":
        if (!oCurrentPlaylist.seriesCount) {
          return false;
        }
        filterCategory(oSelectedItem);
        break;
      case "category_movie":
        if (!oCurrentPlaylist.movieCount) {
          return false;
        }
        filterCategory(oSelectedItem);
        break;
      case "category_live":
        if (!oCurrentPlaylist.liveCount) {
          return false;
        }
        filterCategory(oSelectedItem);
        break;
      case "settings_group":
        openSettings();
        break;
      case "nav_epg_overview":
        showEpgOverview();
        break;
      case "nav_debug":
        toggleDebugger();
        break;
      case "nav_search":
        focusSearchField();
        break;
      case "open_guide":
        showControlsGuide(sDeviceFamily);
        break;
      case "nav_channel_edit":
        toggleChannelEditMode("move");
        break;
      case "open_debugger":
        toggleDebugger();
        break;
      case "nav_protection":
        toggleProtectionLock();
        break;
      case "current_playlist":
        showPlaylistSelector();
        break;
      default:
        if (sSelectedGroup === "__fav" && !getFavsCount()) {
          showModal(getLang("errorNoFavouritesYet"));
          return false;
        }

        hideGroups();
        buildNav();
    }

    return false;
  }

  if (oSelectedItem && oSelectedItem.dataset.channelnum) {
    loadChannel(oSelectedItem.dataset.channelnum);
    hideNav();
    return false;
  }

  if (bChannelSettingsOpened) {
    if (oSelectedItem.dataset.setting) {
      showChannelSetting(oSelectedItem.dataset.setting);
      return false;
    }

    switch (oSelectedItem.id) {
      case "channel-setting-audio":
        toggleAudio();
        break;
      case "channel-setting-subs":
        toggleSubtitles();
        break;
      case "channel-setting-favourite":
        toggleFavourite(iCurrentChannel);
        break;
      case "channel-setting-playback":
        toggleControls();
        break;
      case "channel-setting-cast":
        googleCast();
        break;
      case "open-channel-edit":
        openContextMenu("channel");
        break;
      case "open-overview":
        showEpgOverview();
        break;
      default:
        oSelectedItem.click();
    }

    return false;
  }
}

function refreshFavStatus() {
  if (iCurrentChannel === false) {
    return false;
  }

  if (isFavourite(iCurrentChannel)) {
    document.body.classList.add("is-favourite-channel");
  } else {
    document.body.classList.remove("is-favourite-channel");
  }
}

function displayChannelNumber(iChNum) {
  return parseInt(iChNum) + 1;
}

function generateChannelName() {
  var iNext = getNextChannelNum(true),
    iPrev = getPrevChannelNum(true);
  var iChannelNumber = displayChannelNumber(iCurrentChannel),
    sChannelLogo = "";

  if (sCurrentChannelLogo) {
    sChannelLogo = '<img id="ch_logo" src="' + sCurrentChannelLogo + '">';
  }

  oChannelLogo.innerHTML = sChannelLogo;

  var sOutput =
    '<span id="ch_name">' +
    sCurrentChannelName +
    '</span><span id="ch_num">' +
    iChannelNumber +
    "</span>";

  if (!sCurrentChannelGroup || sCurrentChannelGroup == "-") {
    oChannelGroup.innerHTML = "";
  } else {
    oChannelGroup.innerHTML = "&#9654; " + sCurrentChannelGroup;
  }

  if (iCurrentChannel !== iPrev && aActiveChannelList[iPrev]) {
    oPrevChannel.innerHTML =
      aActiveChannelList[iPrev].name +
      " <span>⇣ " +
      displayChannelNumber(iPrev) +
      "</span>";
  } else {
    oPrevChannel.innerHTML = "";
  }

  if (iCurrentChannel !== iNext && aActiveChannelList[iNext]) {
    oNextChannel.innerHTML =
      aActiveChannelList[iNext].name +
      " <span>⇡ " +
      displayChannelNumber(iNext) +
      "</span>";
  } else {
    oNextChannel.innerHTML = "";
  }

  oChannelName.className = aActiveChannelList[iCurrentChannel].protect
    ? "icon icon-lock"
    : "";
  oChannelName.innerHTML = sOutput;

  bChannelNameGenerated = true;

  if (sSmartControlActive) {
    setSmartEpg();
  }
}

function showChannelName(bShowSmartControls) {
  clearUi("channelName");

  if (iCurrentChannel === false) {
    return false;
  }

  bChannelNameOpened = true;

  if (!bChannelNameGenerated) {
    generateChannelName();
  }

  refreshFavStatus();

  if (oCurrentEpisode) {
    var sName = oCurrentEpisode.title;
    if (oCurrentEpisode.episode_num) {
      sName = "EP " + oCurrentEpisode.episode_num + " | " + sName;
    }
    getEl("channel_episode_name").innerHTML =
      '<div id="episode_name">' + sName + "</div>";
  } else {
    loadChannelEpg(aArchiveData !== false);
  }

  if (sSmartControlActive) {
    return;
  }

  if (bSmartControlsEnabled && bShowSmartControls) {
    showSmartControls("player");
  }

  oChannelInfo.appendChild(oChannelEpg);
  oChannelInfo.classList.add("visible");
  oClock.classList.add("visible");

  if (typeof showChannelNameCallback === "function") {
    try {
      showChannelNameCallback();
    } catch (e) {
      debugError(e);
    }
  }

  if (iChannelNameTimer) {
    clearTimeout(iChannelNameTimer);
  }
  iChannelNameTimer = setTimeout(function () {
    hideChannelName();
  }, 3000);
}

function hideChannelName() {
  bChannelNameOpened = false;
  oChannelInfo.classList.remove("visible");
  oClock.classList.remove("visible");
}

function channelInput(iNumber) {
  clearUi();

  if (iChannelInputTimer) {
    clearTimeout(iChannelInputTimer);
  }

  var iTimeout = 3000;
  oChannelNumberInput.classList.add("visible");
  bChannelInputOpened = true;

  if (iChannelInputNumber.length >= 5) {
    iTimeout = 0;
  } else {
    iChannelInputNumber += iNumber.toString();
    oChannelNumberInput.innerHTML =
      '<div id="channel_input_numbers">' + iChannelInputNumber + "</div>";
  }

  iChannelInputTimer = setTimeout(function () {
    iChannelInputNumber = parseInt(iChannelInputNumber) - 1;
    loadChannel(iChannelInputNumber);
    hideChannelInput();
  }, iTimeout);
}

function hideChannelInput() {
  if (iChannelInputTimer) {
    clearTimeout(iChannelInputTimer);
  }
  bChannelInputOpened = false;
  iChannelInputNumber = "";
  oChannelNumberInput.classList.remove("visible");
}

function getNextChannel(bUseCurrentChannel) {
  var oSelected = bUseCurrentChannel
    ? getNavChannel(iCurrentChannel)
    : getCurrentSelectedItem();
  var iOrderNumber = oSelected ? oSelected.dataset.order : false;

  if (iOrderNumber !== false) {
    iOrderNumber = parseInt(iOrderNumber) + 1;
    var iNewChNum = aChannelOrder[iOrderNumber];
    oSelectedItem = getNavChannel(iNewChNum);
  }

  if (!oSelectedItem) {
    oSelectedItem = getNavChannel(aChannelOrder[0]);
  }
  return oSelectedItem;
}

function getPrevChannel(bUseCurrentChannel) {
  var oSelected = bUseCurrentChannel
    ? getNavChannel(iCurrentChannel)
    : getCurrentSelectedItem();
  var iOrderNumber = oSelected ? oSelected.dataset.order : false;

  if (iOrderNumber !== false) {
    iOrderNumber = parseInt(iOrderNumber) - 1;

    var iNewChNum = aChannelOrder[iOrderNumber];
    oSelectedItem = getNavChannel(iNewChNum);
  }

  if (!oSelectedItem) {
    oSelectedItem = getNavChannel(aChannelOrder[aChannelOrder.length - 1]);
  }
  return oSelectedItem;
}

function channelUp() {
  loadChannel(getNextChannelNum(true));
}

function getNextChannelNum(bUseCurrentChannel) {
  if (true || sSelectedGroup) {
    var oItem = getNextChannel(bUseCurrentChannel);
    if (oItem) {
      return parseInt(oItem.dataset.channelnum);
    }
  }

  var iNewChannel = iCurrentChannel + 1;
  if (iNewChannel >= aActiveChannelList.length) {
    iNewChannel = 0;
  }

  return iNewChannel;
}

function channelDown() {
  loadChannel(getPrevChannelNum(true));
}

function getPrevChannelNum(bUseCurrentChannel) {
  if (true || sSelectedGroup) {
    var oItem = getPrevChannel(bUseCurrentChannel);
    if (oItem) {
      return parseInt(oItem.dataset.channelnum);
    }
  }

  var iNewChannel = iCurrentChannel - 1;
  if (iNewChannel < 0) {
    iNewChannel = aActiveChannelList.length - 1;
  }

  return iNewChannel;
}

function initPlayer() {
  var iLastStoredChannel = getLastPlayedChannel();
  loadPlayerFrameworkOnce();
  initClock();
  loadChannel(iLastStoredChannel);
}

var bFirstPlayStatus = 0;
function playVideo() {
  if (sDeviceFamily === "Samsung") {
    try {
      webapis.avplay.prepareAsync(successLoadCallback, errorLoadCallback);
      switchVideoFormat(false);
    } catch (e) {
      debugError(e);
    }
    return;
  }

