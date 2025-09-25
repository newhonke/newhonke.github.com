'use strict';

/**
 * ---------------------------
 * 時間帯に合わせた挨拶機能
 * ---------------------------
 */
// 現在時刻の時間を取得
const hour = new Date().getHours();

// 時間に応じてアラートを出し分ける
if (hour === 10 || hour === 15) {
  alert('おやつの時間です！');
} else if (hour >= 5 && hour < 11) { // 朝の範囲を5時〜10時台に
  alert('おはようございます！');
} else if (hour >= 11 && hour < 18) { // 昼の範囲を11時〜17時台に
  alert('こんにちは！');
} else {
  alert('こんばんは！');
}

/**
 * ---------------------------
 * カラーピッカー機能
 * ---------------------------
 */
const colorText = document.querySelector('#colorText');
const colorPicker = document.querySelector('#colorPicker');

// 背景色とカラーコード表示を更新する関数
const updateColor = () => {
  document.body.style.backgroundColor = colorPicker.value;
  colorText.textContent = `カラーコード：${colorPicker.value}`;
};

// 初期表示を設定
updateColor();
// カラーピッカーの値が変更されたら関数を実行
colorPicker.addEventListener('input', updateColor);

/**
 * ---------------------------
 * ローディング画面アニメーション
 * ---------------------------
 */
window.addEventListener('load', () => {
  const loadingAreaGrey = document.querySelector('#loading');
  const loadingAreaGreen = document.querySelector('#loading-screen');
  const loadingText = document.querySelector('#loading p');

  // グレー背景のフェードアウト
  loadingAreaGrey.animate(
    { opacity: [1, 0], visibility: 'hidden' },
    { duration: 2000, delay: 1200, easing: 'ease', fill: 'forwards' }
  );
  
  // 緑スクリーンのスライド
  loadingAreaGreen.animate(
    { translate: ['0 100vh', '0 0', '0 -100vh'] },
    { duration: 2000, delay: 800, easing: 'ease', fill: 'forwards' }
  );
  
  // テキストのフェードアウト
  loadingText.animate(
    { opacity: [1, 0] },
    { duration: 1200, easing: 'ease', fill: 'forwards' }
  );
});

/**
 * ---------------------------
 * サイドバーメニュー機能
 * ---------------------------
 */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li a');

const menuOptions = {
  duration: 500, // アニメーション速度を少し速く
  easing: 'ease-in-out',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({ translate: ['100vw', '0'] }, menuOptions);
  menuItems.forEach((item, index) => {
    item.animate(
      { opacity: [0, 1], translate: ['2rem', 0] },
      { duration: 1000, delay: 200 * index, easing: 'ease', fill: 'forwards' }
    );
  });
});

// メニューを閉じる関数
const closeMenu = () => {
  menuPanel.animate({ translate: ['0', '100vw'] }, menuOptions);
};

menuClose.addEventListener('click', closeMenu);
// メニュー項目クリック時にもメニューを閉じる
menuItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});

/**
 * ---------------------------
 * 隠しゲーム機能（プログレスバー）
 * ---------------------------
 */
const gameForm = document.getElementById('form');
const gageContainer = document.getElementById('gage');
let intervalID = null; // インターバルIDを保持する変数

// フォームが送信されたときの処理
gameForm.addEventListener('submit', (event) => {
  event.preventDefault(); // ページの再読み込みを防止
  const word = gameForm.word.value;

  if (word === "冬から脱出") {
    // 既存のゲーム要素があれば削除して初期化
    gageContainer.innerHTML = '';
    
    // ゲーム要素をHTMLに追加
    const gameElements = `
      <div>
        <progress id="myProgress" value="0" max="100"></progress>
      </div>
      <input type="button" id="myButton" value="スタート">
    `;
    gageContainer.insertAdjacentHTML('beforeend', gameElements);

    // 追加された要素を取得してイベントリスナーを設定
    const startButton = document.getElementById('myButton');
    startButton.addEventListener('click', startGame);

  } else {
    alert("キーワードが違います");
  }
});

// ゲームを開始する関数
function startGame() {
  const startButton = document.getElementById('myButton');
  const progressBar = document.getElementById('myProgress');
  let value = 0;

  startButton.disabled = true; // ボタンを無効化

  // 50msごとにプログレスバーを更新
  intervalID = setInterval(() => {
    value += 1;
    progressBar.value = value;
    
    // 100%に達したらインターバルを停止
    if (value >= 100) {
      clearInterval(intervalID);
      startButton.disabled = false; // ボタンを再度有効化
    }
  }, 50);
}
