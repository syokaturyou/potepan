(function(){
    //htmlファイルのidを定義
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

   // jsファイル内で定義
    var startTime; //スタートボタン押下時変数
    var elapsedTime = 0; //経過時刻更新用 初期値0
    var teisi; //タイマーを止めるためにclearTimeoutを使う必要があり、そのための変数用意
    var timeToadd = 0; //タイマー再開時に0にさせないための関数

    function updateTimeText(){
        var m = Math.floor(elapsedTime / 60000); 
        var s = Math.floor(elapsedTime % 60000 / 1000); 
        var ms = elapsedTime % 1000; 
        // 桁数調整
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);
        timer.textContent = m + ':' + s + ':' + ms; //変数timerに表示　
    }

    function countUp(){
        //teisi変数はsetTimeoutの返り値になるので代入する
        teisi = setTimeout(function(){
            elapsedTime = Date.now() - startTime + timeToadd; //現在時刻を示すDate.now()からstartTimeを引いて経過時間表示
            updateTimeText()
            countUp(); //countUp関数を入れることでカウント中の時間も表示できる
        });
    }

    //スタートボタン押下時のイベント追加
    start.addEventListener('click',function(){
        startTime = Date.now();
        countUp();
    });

    //ストップボタン押下時のイベント追加
    stop.addEventListener('click',function(){
       clearTimeout(teisi); 
        //タイマーに表示される時間elapsedTimeが現在時刻からスタートボタンを押した時刻を引いた
       timeToadd += Date.now() - startTime;
    });

    //リセットボタン押下時のイベント追加
    reset.addEventListener('click',function(){
        elapsedTime = 0;   //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
        timeToadd = 0;     //リセット時0に
        updateTimeText(); //updateTimetTextで0になったタイムを表示
    });
})();

// // 使用メソッド,関数
// var //定義
// document //htmlの記述を読みこむ
// textContent //内容を出力
// Math.floor() //与えられた数値以下の最大の整数を返す
// slice //
// setTimeout // 一定時間後に一度だけ特定の処理をおこなう
// clearTimeout() // 
// Date.now() //
// countUp() // カウント用関数
// update //
// start //
// stop //
// reset //リセット