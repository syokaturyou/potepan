  // 　function update( _v ) {
  //       document.querySelector( 'input' ).value = _v // 「AC」ボタン押下時にinput tag を更新する関数
  //   }function append( _v ) {　　　　　　　　　　　　　// 数字ボタンが押されたので数字を後ろに追加する
  //       document.querySelector( 'input' ).value += _v 
  //   }function calc() {　　　　　　　　　　　　　　　　　// 「＝」ボタン押下時に計算
  //       let v = document.querySelector( 'input' ).value 
  //       let f = new Function( 'return ' + v )
  //       update(f().toString())
  //   }
    
    function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else {
        document.dentaku.display.value += btn.value;
      }
    };  
    
    function get_update(btn) {
      document.dentaku.display.value = "";
    }
    
    
    // function calc(btn) {
    //   if(btn.value == "=") {
    //     document.dentaku.display.value = eval(document.dentaku.display.value);
    //   } else {
    //     document.dentaku.display.value += btn.value;
    //   }
    // };
    // // function append(btn) {
    // //   document.dentaku.display.value += btn.value;
    // // }
    // function update(btn) {
    //   document.dentaku.display.value = "";
    // }
    