    
    //  function get_calc(btn) {
    //   if(btn.value == "=") {
    //     document.dentaku.display.value = eval(document.dentaku.display.value);
    //   } else if (btn.value == "AC") {
    //     document.dentaku.display.value = "";
    //   } else {
    //     document.dentaku.display.value += btn.value;
    //   }
    // };  
    
    //   function get_calc(btn) {
    //   if(btn.value == "=") {
    //     document.dentaku.display.value = eval(document.dentaku.display.value);
    //   } else if (btn.value == "AC") {
    //     document.dentaku.display.value = "";
    //   } else {
    //     if (btn.value == "×") {
    //       btn.value = "*";
    //     } else if (btn.value == "÷") {
    //       btn.value = "/";
    //     } 
    //     document.dentaku.display.value += btn.value;
    //     document.dentaku.multi_btn.value = "×";
    //     document.dentaku.div_btn.value = "÷";
    //   }
    // };  
   
  
  function update( _v ) {
        document.querySelector( 'input' ).value = _v // input tag を更新する関数
    }
  function append( _v ) {
        document.querySelector( 'input' ).value += _v // 数字ボタンが押されたので数字を後ろに追加する
    }
  function calc() {
        const v = document.querySelector( 'input' ).value // 「＝」ボタンが押されたので計算する
    try {
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ) {
          update( _error ) // 計算に失敗した場合は、そのエラーの内容を表示する
        }
    }
    
  
  "use strict";
 
window.addEventListener( "DOMContentLoaded" , ()=> {
    /**
     * @param watchCallBack 経過時間報告用コールバック
     * @param wrapCallBack ラップ報告用コールバック
     */
    const getStopWatch = function ( watchCallBack , wrapCallBack ){
        let accumulatedTime = 0,    // 積算時間
            currentTime=null,       // タイマー開示タイムスタンプ
            timerId=null;           // setInterval() の返り値
 
            // リセット処理
        const reset = () =>{
            timerOff(); accumulatedTime = 0; currentTime=null;
                // リセットされたことをnullで通知
            watchCallBack( null ); wrapCallBack ( null );
        };
            // 開始処理
        const start = () =>{ currentTime = Date.now();timerOn(); };
            // 一時停止処理
        const pause = () =>{
                // これまでの経過時間を退避
            accumulatedTime = getNowTime();
            timerOff();
            currentTime = null;
        };
            // 再開処理
        const resume = () =>start();
            // ラップ報告処理
        const wrap = () =>wrapCallBack( getNowTime() );
            // 経過時間の算出
        const getNowTime = () =>accumulatedTime + Date.now() - currentTime;
 
            // タイマー停止処理
        const timerOff = () => {
            if( timerId === null ) return;
            clearInterval(timerId);
            timerId = null;
        };
            // タイマー開始処理
        const timerOn = () => {
            if( timerId !== null ) clearTimeout(timerId);
            timerId = setInterval(()=>watchCallBack( getNowTime() ),10);
        };
 
        reset();
 
            // 必要な機能だけ返す
        return Object.freeze({
            start:()=> currentTime === null && accumulatedTime === 0 ?   start()  : reset(),
            pause:()=> currentTime === null ? ( accumulatedTime === 0 ? false : resume() ) : pause(),
            wrap:()=> currentTime === null ?  false : wrap(),
        });
    };
 
        // ミリ秒を画面表示する形式に変換
    const timeString = time =>`${
        Math.floor(time / 60000).toString().padStart(2,"00")
    }:${
        Math.floor(time % 60000 / 1000).toString().padStart(2,"00")
    }.${
        Math.floor(time % 1000).toString().padStart(3,"000").slice(0,2)
    }`;
 
    const watchArea = document.getElementById("watchArea");
    const wrapArea = document.getElementById("wrapArea");
 
    const stopWatchObj = getStopWatch(
         time => watchArea.textContent = time === null ? "00:00.00" : timeString( time ) ,
         time => wrapArea.value = time === null ? "" : wrapArea.value + "\n" + timeString( time )
    );
 
    const buttonDefine = [
            { id:"start" , listener:()=>stopWatchObj.start() },
            { id:"pause" , listener:()=>stopWatchObj.pause() },
            { id:"wrap"  , listener:()=>stopWatchObj.wrap()  }
        ];
    buttonDefine.forEach( e => document.getElementById(e.id).addEventListener("click",e.listener));
});
 