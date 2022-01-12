  // 　function update( _v ) {
  //       document.querySelector( 'input' ).value = _v // 「AC」ボタン押下時にinput tag を更新する関数
  //   }function append( _v ) {　　　　　　　　　　　　　// 数字ボタンが押されたので数字を後ろに追加する
  //       document.querySelector( 'input' ).value += _v 
  //   }function calc() {　　　　　　　　　　　　　　　　　// 「＝」ボタン押下時に計算
  //       const v = document.querySelector( 'input' ).value 
  //       const f = new Function( 'return ' + v )
  //       update(f().toString())
  //   }
    
    function append(btn) {                      // ボタン押下時に後ろに追加する。数字、四則演算、小数点等
      document.dentaku.display.value += btn.value;
    } function calc(btn) {                      // 「＝」ボタン押下時に計算
      document.dentaku.display.value = eval(document.dentaku.display.value);
    } function update(btn) {                    // 「AC」ボタン押下時にinput tag を更新する関数
      document.dentaku.display.value = "";
    }
    
  