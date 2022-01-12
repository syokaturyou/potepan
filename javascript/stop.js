'use strict';
 (function(){
    // 'use strict';

    //htmlのidからデータを取得
    //取得したデータを変数に代入

    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var startTime; //クリック時の時間を保持するための変数定義
    var elapsedTime = 0; //経過時刻を更新するための変数。 初期値0
    var timerId; //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    var timeToadd = 0; //タイマーをストップ -> 再開させたら0になってしまうのを避けるための変数。

   
    function updateTimetText(){
        var m = Math.floor(elapsedTime / 60000); 
        var s = Math.floor(elapsedTime % 60000 / 1000); 
        var ms = elapsedTime % 1000; 

        //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);

        timer.textContent = m + ':' + s + ':' + ms; //HTMLのid　timer部分に表示させる　
    }

    //再帰的に使える用の関数
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
