
    function number(btn) {                       // 数字ボタン押下時処理
      document.dentaku.display.value += btn.value;
      if ( document.dentaku.display.value == 0){  //最初に「0」を押せないようnullにする
         document.dentaku.display.value = null; 
      }
    } 
    function enzan(btn) {                     //演算子ボタン押下時処理
      if( document.dentaku.display.value == "+" || document.dentaku.display.value == "-" || document.dentaku.display.value == "*" || document.dentaku.display.value == "/" ){
        document.dentaku.display.value = null; //最初に演算子を入力できないようnullにする
      } else if( document.dentaku.display.value.endsWith("+") || document.dentaku.display.value.endsWith("-") || document.dentaku.display.value.endsWith("*") || document.dentaku.display.value.endsWith("/") ) {
            document.dentaku.display.value += ""; //連続で演算子を入力できないようnullにする
      } else {
          document.dentaku.display.value += btn.value;
      }
    } 
    function decimal(btn) {                          // 少数点ボタン押下時処理
      if ( document.dentaku.display.value == 0 ){  //最初に小数点を押せないようnullにする
         document.dentaku.display.value += "";
      }else if( document.dentaku.display.value.endsWith("+") || document.dentaku.display.value.endsWith("-") || document.dentaku.display.value.endsWith("*") || document.dentaku.display.value.endsWith("/") ) {
         document.dentaku.display.value += ""; //演算子を入力後は小数点入力不可
      } else {
         document.dentaku.display.value += btn.value;
      }
    } 
    function calc() {                          // 「＝」ボタン押下時に計算
      document.dentaku.display.value = eval(document.dentaku.display.value);
    } 
    function update(btn) {                     // 「AC」ボタン押下時処理
      document.dentaku.display.value = "";
    }
    
    
    
  