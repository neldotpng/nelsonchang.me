const isMobileDevice = () => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const isSafari = () => {
  return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window['safari'] !== 'undefined' && window['safari'].pushNotification));
};

const isFirefox = () => {
  return typeof InstallTrigger !== 'undefined';
};

const isChrome = () => {
  return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
};

export { isMobileDevice, isSafari, isFirefox, isChrome };
