'use strict';

// 要素の取得
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li a'); // aタグまで取得

// アニメーションのオプション
const menuOptions = {
  duration: 500, // 少し速くして操作性を向上
  easing: 'ease-in-out',
  fill: 'forwards',
};

/**
 * メニューを開く関数
 */
const openMenu = () => {
  // アクセシビリティ属性を更新
  menuOpen.setAttribute('aria-expanded', 'true');
  menuPanel.setAttribute('aria-hidden', 'false');

  // パネルを開くアニメーション
  menuPanel.animate({ translate: ['100vw', 0] }, menuOptions);

  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['1rem', 0],
      },
      {
        duration: 1000,
        delay: 200 * index, // 少し短縮
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
};

/**
 * メニューを閉じる関数
 */
const closeMenu = () => {
  // アクセシビリティ属性を更新
  menuOpen.setAttribute('aria-expanded', 'false');
  menuPanel.setAttribute('aria-hidden', 'true');
  
  // パネルを閉じるアニメーション
  menuPanel.animate({ translate: [0, '100vw'] }, menuOptions);

  // メニュー項目のアニメーションはパネルと同時に動くため不要
};

// イベントリスナーの設定
menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// 各メニュー項目がクリックされたらメニューを閉じる
menuItems.forEach((item) => {
  item.addEventListener('click', closeMenu);
});
