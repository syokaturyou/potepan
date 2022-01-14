(function(){
    //htmlのidを関数に指定
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

   // jsファイル内で定義
    var startTime; //クリック時の時間を保持するため変数
    var elapsedTime = 0; //経過時刻更新用 初期値0
    var timerId; //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    var timeToadd = 0; //タイマー再開時にさせたら0にさせないための関数

    function updateTimetText(){
        var m = Math.floor(elapsedTime / 60000); 
        var s = Math.floor(elapsedTime % 60000 / 1000); 
        var ms = elapsedTime % 1000; 
        // 桁数調整
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);
        timer.textContent = m + ':' + s + ':' + ms; //変数timerに表示　
    }

    //再帰的使用するための関数
    function countUp(){
        //timerId変数はsetTimeoutの返り値になるので代入する
        timerId = setTimeout(function(){
            elapsedTime = Date.now() - startTime + timeToadd; //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
            updateTimetText()
            countUp(); //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
        //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
        },10);
    }

    //startボタンにクリック時のイベントを追加(タイマースタートイベント)
    start.addEventListener('click',function(){
        startTime = Date.now();
        countUp();
    });

    stop.addEventListener('click',function(){
       clearTimeout(timerId); 
        //タイマーに表示される時間elapsedTimeが現在時刻からスタートボタンを押した時刻を引いた
       timeToadd += Date.now() - startTime;
    });

    //resetボタンにクリック時のイベントを追加(タイマーリセットイベント)
    reset.addEventListener('click',function(){
        elapsedTime = 0; //経過時刻を更新するための変数elapsedTimeを0にしてあげつつ、updateTimetTextで0になったタイムを表示。
        timeToadd = 0;         //リセット時0に初期化
        updateTimetText(); //updateTimetTextで0になったタイムを表示
    });
})();
