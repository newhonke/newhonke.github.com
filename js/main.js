// ----------------------------------------
// サイト基本情報（ここを編集）
// ----------------------------------------
const SITE_CONSTANTS = {
  NAME: "神の罪の情報",
  SUBTITLE: "（ここにサブタイトルを入力）",
  YEAR: "2025" // コピーライトの発行年
};

// ----------------------------------------
// DOM読み込み完了時の処理
// ----------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. 定数に基づきサイト情報を自動入力 ---
  // サイト情報を反映させる要素を取得
  const elements = {
    pageTitle: document.getElementById('page-title'),
    brandLink: document.getElementById('brand-link'),
    siteTitle: document.getElementById('site-title'),
    siteSubtitle: document.getElementById('site-subtitle'),
    copyright: document.getElementById('copyright')
  };

  // 各要素に定数の値を設定
  if (elements.pageTitle) {
    elements.pageTitle.textContent = SITE_CONSTANTS.NAME;
  }
  if (elements.brandLink) {
    elements.brandLink.setAttribute('aria-label', `${SITE_CONSTANTS.NAME} トップ`);
  }
  if (elements.siteTitle) {
    elements.siteTitle.textContent = SITE_CONSTANTS.NAME;
  }
  if (elements.siteSubtitle) {
    elements.siteSubtitle.textContent = SITE_CONSTANTS.SUBTITLE;
  }
  if (elements.copyright) {
    elements.copyright.textContent = `© ${SITE_CONSTANTS.YEAR} ${SITE_CONSTANTS.NAME}`;
  }


  // --- 2. 独自ギミック：ロゴのインタラクション ---
  const logo = document.querySelector('.logo');
  const subtitle = document.getElementById('site-subtitle');

  if (logo && subtitle) {
    // マウスがロゴに乗った時
    logo.addEventListener('mouseover', () => {
      logo.classList.add('active');
      subtitle.classList.add('blinking');
    });

    // マウスがロゴから離れた時
    logo.addEventListener('mouseout', () => {
      logo.classList.remove('active');
      subtitle.classList.remove('blinking');
    });
  }

});
