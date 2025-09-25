// カラーピッカー
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = `カラーコード：${color.value}`;

const colorBg = () => {
  
  const backColor = document.body.style.background = color.value
  
  backColor;
  
  text.textContent = `カラーコード：${color.value}`;
}




// カラーピッカーが変更されたらcolorBgを発動させる
color.addEventListener('input', colorBg);





// ローディングから画面遷移
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  
  //ローディングスクリーン(グレー)
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
    },
  );
  
  //ローディングスクリーン(緑)
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    },
  );
  
  //ローディング中テキスト
  loadingText.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    },
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
  menuPanel.animate({translate: ['100vh', '0']}, menuOptions);
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
document.getElementById('form').onsubmit = function(event) {
  event.preventDefault();
  const word = document.getElementById('form').word.value;
  if(word === "冬から脱出"){
    const gage = `<div>
    <progress id="myProgress" value="0" max="100">0%</progress>
  </div>
  <input type="button" id="myButton" onclick="func1()" value="スタート">`;
      document.getElementById('gage').insertAdjacentHTML('beforeend', gage)
    }else {
      alert("エラー")
    }
  
};
  // プログレスバーの進捗値
  var val;
  // 一定間隔で処理を行うintervalのIDを保持
  var intervalID;

  // ボタンを押した時に動く関数
  function func1() {
    val = 0;
    // ボタンを無効にする(何回も押せないように)
    document.getElementById("myButton").disabled = true;
    // 50msおきにプログレスバーを更新する
    intervalID = setInterval("updateProgress()", 50);
  }

  // プログレスバーを更新する
  function updateProgress() {
    // プログレスバーの進捗値を更新し、プログレスバーに反映させる
    val += 1;
    document.getElementById("myProgress").value = val;
    document.getElementById("myProgress").innerText = val + "%";
    console.log("progress:", val, "%");

    // 最大値まで達したら終了
    if (val == 100) {
      clearInterval(intervalID);
      document.getElementById("myButton").disabled = false;
    }
  }
