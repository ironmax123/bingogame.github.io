alert('注意:リロードをしてしまうと数字が変わってしまうよ!')
//alert('注意:戻るボタンは一つ前のボタンしか戻せないよ！')
alert('ビンゴ！！は一度しかならないよ!')
const buttons = document.querySelectorAll('.clickableButton');
//const bButton = document.getElementById('backbutton');
let flg1 = 0, flg2 = 0, flg3 = 0, flg4 = 0, flg5 = 0, flg6 = 0, flg7 = 0, flg8 = 0, flg9 = 0, flg10 = 0, flg11 = 0, flg12 = 0, flg13 = 0, flg14 = 0, flg15 = 0, flg16 = 0, flg17 = 0, flg18 = 0, flg19 = 0, flg20 = 0, flg21 = 0, flg22 = 0, flg23 = 0, flg24 = 0, flg25 = 0;
let bkflg1 = 0, bkflg2 = 0, bkflg3 = 0, bkflg4 = 0, bkflg5 = 0, bkflg6 = 0, bkflg7 = 0, bkflg8 = 0, bkflg9 = 0, bkflg10 = 0, bkflg11 = 0, bkflg12 = 0, bkflg13 = 0, bkflg14 = 0, bkflg15 = 0, bkflg16 = 0, bkflg17 = 0, bkflg18 = 0, bkflg19 = 0, bkflg20 = 0, bkflg21 = 0, bkflg22 = 0, bkflg23 = 0, bkflg24 = 0, bkflg25 = 0;
let bflg=0;
const music = new Audio('./rfan.mp3');
const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

// Fisher-Yatesアルゴリズムを使用して配列の要素をシャッフルする
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 配列の要素をシャッフルする
shuffleArray(numbers);

// ボタンにランダムな数字を割り当てる
buttons.forEach((button, index) => {
  button.textContent = numbers[index];
});

// 各ボタンにクリックイベントを追加する
buttons.forEach(button => {
  button.addEventListener('click', function() {
    this.disabled = true;
    prevButton = this;
    switch (this.textContent) {
        case String(numbers[0]):
            flg1 = 1;
            bkflg1=1;
            break;
        case String(numbers[1]):
            flg2 = 1;
            bkflg2=1;
            break;
        case String(numbers[2]):
            flg3 = 1;
            break;
        case String(numbers[3]):
            flg4 = 1;
            break;
        case String(numbers[4]):
            flg5 = 1;
            break;
        case String(numbers[5]):
            flg6 = 1;
            break;
        case String(numbers[6]):
            flg7 = 1;
            break;
        case String(numbers[7]):
            flg8 = 1;
            break;
        case String(numbers[8]):
            flg9 = 1;
            break;
        case String(numbers[9]):
            flg10 = 1;
            break;
        case String(numbers[10]):
            flg11 = 1;
            break;
        case String(numbers[11]):
            flg12 = 1;
            break;
        case String(numbers[12]):
            flg13 = 1;
            break;
        case String(numbers[13]):
            flg14 = 1;
            break;
        case String(numbers[14]):
            flg15 = 1;
            break;
        case String(numbers[15]):
            flg16 = 1;
            break;
        case String(numbers[16]):
            flg17 = 1;
            break;
        case String(numbers[17]):
            flg18 = 1;
            break;
        case String(numbers[18]):
            flg19 = 1;
            break;
        case String(numbers[19]):
            flg20 = 1;
            break;
        case String(numbers[20]):
            flg21 = 1;
            break;
        case String(numbers[21]):
            flg22 = 1;
            break;
        case String(numbers[22]):
            flg23 = 1;
            break;        
        case String(numbers[23]):
            flg24 = 1;
            break;
        case String(numbers[24]):
          flg25 = 1;
          break;
        default:
          break;
      }
      if(bflg==0&&flg1==1&&flg2==1&&flg3==1&&flg4==1&&flg5==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg6==1&&flg7==1&&flg8==1&&flg9==1&&flg10==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg11==1&&flg12==1&&flg13==1&&flg14==1&&flg15==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        b
        bflg=1;
      }
      if(bflg==0&&flg16==1&&flg17==1&&flg18==1&&flg19==1&&flg20==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg21==1&&flg22==1&&flg23==1&&flg24==1&&flg25==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg1==1&&flg6==1&&flg11==1&&flg16==1&&flg21==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg2==1&&flg7==1&&flg12==1&&flg17==1&&flg22==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg3==1&&flg8==1&&flg13==1&&flg18==1&&flg23==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg4==1&&flg9==1&&flg14==1&&flg19==1&&flg24==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg5==1&&flg10==1&&flg15==1&&flg20==1&&flg25==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg1==1&&flg7==1&&flg13==1&&flg19==1&&flg25==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
      if(bflg==0&&flg5==1&&flg9==1&&flg13==1&&flg17==1&&flg21==1){
        music.play();
        alert('おめでとう!!ビンゴ!!')
        bflg=1;
      }
  });
});
/*bButton.addEventListener('click', function() {
  if(bkflg1==1){
    bkflg1=0;
    flg1=0;
    document.getElementById("button1").disabled = null;
  }
});*/