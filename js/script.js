// カラーピッカー
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// 初期カラーコードを表示
text.textContent = `カラーコード：${color.value}`;

const colorBg = () => {
  // 背景色とカラーコードのテキストを更新
  document.body.style.background = color.value;
  text.textContent = `カラーコード：${color.value}`;
}

// カラーピッカーが変更されたらcolorBgを発動
color.addEventListener('input', colorBg);


// ローディングから画面遷移
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディングスクリーン(グレー)
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  
  // ローディングスクリーン(緑)
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  
  // ローディング中テキスト
  loadingText.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});


//サイドバー
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  // 横方向のスライドアニメーションのため、単位を 'vh' から 'vw' に修正
  menuPanel.animate({translate: ['100vw', '0']}, menuOptions);

  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});
