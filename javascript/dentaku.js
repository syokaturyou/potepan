  // 数字ボタン押下時処理
  function number(btn) {                       
    if ( document.dentaku.display.value == 0 && document.dentaku.display.value.endsWith(0)){  //「0」の後に数字を押せないようにする
       document.dentaku.display.value += ""; 
    }else{
       document.dentaku.display.value += btn.value;
    }
  } 
  
  //演算子ボタン押下時処理
  function enzan(btn) {                    
    if( document.dentaku.display.value == 0 && btn.value != "-" ){
      document.dentaku.display.value = null; //「-」以外は最初に演算子を入力できないようnullにする
    } else if( document.dentaku.display.value.endsWith("+") || document.dentaku.display.value.endsWith("-") || document.dentaku.display.value.endsWith("*") || document.dentaku.display.value.endsWith("/") ) {
      document.dentaku.display.value += ""; //連続で演算子を入力できないようnullにする
    } else if( document.dentaku.display.value.endsWith(".")){
      document.dentaku.display.value += ""; //小数点の後は演算子を入力できないようnullにする
    } else {
      document.dentaku.display.value += btn.value;
    }
  } 
  
  // 少数点ボタン押下時処理
  function decimal(btn) {                         
    if ( document.dentaku.display.value == "" ){  //最初に小数点を押せないようnullにする
       document.dentaku.display.value += "";
    }else if( document.dentaku.display.value.endsWith("+") || document.dentaku.display.value.endsWith("-") || document.dentaku.display.value.endsWith("*") || document.dentaku.display.value.endsWith("/") || document.dentaku.display.value.endsWith(".")) {
       document.dentaku.display.value += ""; //演算子,小数点を入力後は小数点入力不可
    } else {
       document.dentaku.display.value += btn.value;
    }
  } 
  
  // 「＝」ボタン押下時に計算
  function calc() {       
    if ( document.dentaku.display.value == "" ){  //最初に「=」を押せないようにする
      document.dentaku.display.value += "";
    } else {
      document.dentaku.display.value = eval(document.dentaku.display.value);
    }
  } 
  
  // 「AC」ボタン押下時処理
  function update(btn) {      
    document.dentaku.display.value = "";
  }
    
    