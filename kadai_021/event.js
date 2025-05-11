// "btn"をいうidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

const text = document.getElementById('text');

// HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {


// 2秒後にテキストを表示させる
setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
}, 2000);  
});
  