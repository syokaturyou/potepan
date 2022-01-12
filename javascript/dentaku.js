  // 計算時にevalを使用するものとしない物の二通り用意。
  
  　function append( _v ) {　　　　　　　　　　　　 // 数字・演算子・小数点ボタン等が押された際に内容追加
        document.querySelector( 'input' ).value += _v 
    }function update( _v ) {　　　　　　　　　　　　// 「AC」ボタン押下時にinput tag を更新する関数
        document.querySelector( 'input' ).value = _v 
    }function calc() {　　　　　　　　　　　　　　　// 「＝」ボタン押下時に計算
        const v = document.querySelector( 'input' ).value 
        const f = new Function( 'return ' + v )
        update(f().toString())
    }
    
    // function append(btn) {                       // 数字・演算子・小数点ボタン等が押された際に内容追加
    //   document.dentaku.display.value += btn.value;
    // } function calc() {                          // 「＝」ボタン押下時に計算
    //   document.dentaku.display.value = eval(document.dentaku.display.value);
    // } function update(btn) {                     // 「AC」ボタン押下時にinput tag を更新する関数
    //   document.dentaku.display.value = "";
    // }
    
  