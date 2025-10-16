var AppSettings = {
  storageKey: "settings",
  settings: {},

  init: function () {
    this.loadSettings();
    this.applyAction("color");
    this.applyAction("font-size");
  },

  loadSettings: function () {
    var savedSettings = localStorage.getItem(this.storageKey);
    if (savedSettings) {
      this.settings = JSON.parse(savedSettings);
    } else {
      openSettings();
    }
  },

  saveSettings: function () {
    localStorage.setItem(this.storageKey, JSON.stringify(this.settings));
  },

  updateSetting: function (sKey, sValue, sType) {
    if (!sType) {
      sType = "hidden";
    }
    this.settings[sKey] = { type: sType, value: sValue };
    this.saveSettings();
    this.applyAction(sKey);
    return true;
  },

  applyAction: function (sKey) {
    var sValue = this.getSetting(sKey);
    switch (sKey) {
      case "color":
        applyTheme(sValue);
        break;
      case "font-size":
        applyFontsize(sValue);
        break;
    }
  },

  getSetting: function (sKey, sDefaultValue) {
    if (this.settings[sKey]) {
      return this.settings[sKey].value;
    }

    if (typeof sDefaultValue !== "undefined") {
      return sDefaultValue;
    }

    return "";
  },

  getNumberSetting(sKey, sDefaultValue) {
    return parseInt(this.getSetting(sKey, sDefaultValue));
  },

  isActive(sKey) {
    if (this.settings[sKey] && this.settings[sKey].type === "checkbox") {
      return this.settings[sKey].value === "on";
    }

    return false;
  },
};

function openSettings(sMenu) {
  stopStream();
  document.body.classList.add("booting");
  setBootStatusText("Loading settings");

  var sUrl = "../settings/index.html";
  if (sMenu) {
    sUrl += "#" + sMenu;
  }
  window.location.href = sUrl;
}

function applyBufferSetting() {
  var iBufferLength = AppSettings.getNumberSetting("buffer", 15);

  switch (sDeviceFamily) {
    case "Browser":
    case "LG":
      if (oHlsApi) {
        oHlsApi.config.maxBufferLength = iBufferLength;
        oHlsApi.config.maxBufferSize = iBufferLength * 2000000;
      }
      break;
    case "Samsung":
      var sState = webapis.avplay.getState();
      if (sState === "PLAYING") {
        webapis.avplay.stop();
        sState = webapis.avplay.getState();
      }

      if (sState === "IDLE") {
        webapis.avplay.setTimeoutForBuffering(iBufferLength);
        webapis.avplay.setBufferingParam(
          "PLAYER_BUFFER_FOR_PLAY",
          "PLAYER_BUFFER_SIZE_IN_SECOND",
          iBufferLength
        );
        webapis.avplay.setBufferingParam(
          "PLAYER_BUFFER_FOR_RESUME",
          "PLAYER_BUFFER_SIZE_IN_SECOND",
          iBufferLength + 15
        );
      }

      break;
    case "Android":
      m3uConnector.setBufferLength(iBufferLength);
      break;
  }
}

function getBufferSetting() {
  return AppSettings.getNumberSetting("buffer", 15);
}

function getUserAgentSetting() {
  return AppSettings.getSetting("user-agent", sUserAgent);
}

function setCameraCutoutSetting(sValue) {
  AppSettings.updateSetting("camera-cutout", sValue, "checkbox");
  switchCameraCutout(sValue);
}

function getCameraCutoutSetting() {
  return AppSettings.getSetting("camera-cutout", "on");
}

function setVideoFormatSetting(sMode) {
  AppSettings.updateSetting("video-format", sMode);
  switchVideoFormat(sMode);
}

function getVideoFormatSetting() {
  return AppSettings.getSetting("video-format", "fit");
}

function getEnabledEpgSetting() {
  return AppSettings.isActive("epg-enabled");
}

function getLastPlayedChannel() {
  var iChannel = 0;
  if (AppSettings.isActive("startup-last-channel")) {
    iChannel = localStorage.getItem("iCurrentChannel");
    if (!iChannel) {
      iChannel = 0;
    }
  }

  return iChannel;
}

function getLicenseType() {
  if (localStorage.getItem("bIsPremiumApp")) {
    return "Premium";
  }

  if (typeof bIsPremiumApp === "boolean" && bIsPremiumApp) {
    return "Premium";
  }

  var sType = AppSettings.getSetting("license-type");
  if (!sType) {
    sType = "Free";
  }

  return sType;
}

function isAdsPremiumActive() {
  return AppSettings.isActive("unlock-ads-premium");
}

function isTrialActive() {
  var iTrialSecondsLeft = localStorage.getItem("iTrialPremiumTime");
  if (iTrialSecondsLeft) {
    return parseInt(iTrialSecondsLeft) > 10;
  }
  return false;
}

function isPremiumAccessAllowed() {
  return true;
}

var bAdsPremiumActive = false;
function disableAdsPremium() {
  bAdsPremiumActive = false;
  AppSettings.updateSetting("unlock-ads-premium", "off", "checkbox");
  localStorage.removeItem("iSecondsUntilAd");
}

function checkAdsPremium() {
  bAdsPremiumActive = AppSettings.isActive("unlock-ads-premium");
}

function consentErrorCallback(sReason) {
  if (typeof remoteConsentErrorCallback === "function") {
    remoteConsentErrorCallback(sReason);
  }
}
