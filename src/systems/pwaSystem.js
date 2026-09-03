export function isStandaloneMode() {
  return window.matchMedia?.('(display-mode: standalone)')?.matches || window.navigator.standalone === true;
}

export function isIosDevice() {
  const ua = window.navigator.userAgent || '';
  const platform = window.navigator.platform || '';
  return /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
}

export function pwaInstallState() {
  const standalone = isStandaloneMode();
  const ios = isIosDevice();
  const promptAvailable = Boolean(window.__robotLabPwaPrompt);
  const secureContext = window.isSecureContext || ['localhost', '127.0.0.1'].includes(window.location.hostname);
  return {
    standalone,
    ios,
    promptAvailable,
    secureContext,
    serviceWorkerSupported: 'serviceWorker' in window.navigator,
  };
}

export async function requestPwaInstall() {
  const prompt = window.__robotLabPwaPrompt;
  if (!prompt) return { outcome: 'unavailable' };
  await prompt.prompt();
  const choice = await prompt.userChoice;
  window.__robotLabPwaPrompt = null;
  return choice ?? { outcome: 'dismissed' };
}

export function pwaInstallMessage(state = pwaInstallState()) {
  if (state.standalone) return 'ホーム画面 / アプリとして起動中です。';
  if (state.promptAvailable) return 'この端末ではアプリとしてインストールできます。';
  if (state.ios) return 'Safariの共有メニューから「ホーム画面に追加」→「Webアプリとして開く」を選んでください。';
  if (!state.secureContext) return 'ホーム画面アプリ化にはHTTPS（GitHub Pages推奨）またはlocalhostが必要です。';
  return 'ブラウザのメニューに「インストール」または「ホーム画面に追加」が表示される場合があります。';
}
