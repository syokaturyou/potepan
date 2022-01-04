    
     function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "AC") {
        document.dentaku.display.value = "";
      } else {
        document.dentaku.display.value += btn.value;
      }
    };  
    
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
    
    
   
     // $(document).ready(function(){
  //     $(".button0").click(function() {
  //     let value = $(".button0").text(); //テキストを取得し変数に入れています
  //     $(".target").text(value); //テキストを変更する処理
  //     });
 
  //     $(".button1").click(function() {
  //     let value1 = 1;
  //     let value = value + value1
  //     $(".target").text(value); 
  //     });
      
  //     $(".button2").click(function() {
  //     let value2 = 2; 
  //     let value = value + value2
  //      $(".target").text(value); 
  //     });
 
  //     $(".button3").click(function() {
  //     let value = 3;
  //      $(".target").text(value); 
  //     });
 
  //     $(".button4").click(function() {
  //     let value = 4; 
  //      $(".target").text(value); 
  //     });
      
  //     $(".button5").click(function() {
  //     let value = $(".button5").number(); 
  //      $(".target").number(value); 
  //     });
 
  //     $(".button6").click(function() {
  //     let value = $(".button6").text(); 
  //      $(".target").text(value); 
  //     });
      
  //     $(".button7").click(function() {
  //     let value = $(".button7").text(); 
  //      $(".target").text(value); 
  //     });
      
  //     $(".button8").click(function() {
  //     let value = $(".button8").text(); 
  //      $(".target").text(value); 
  //     });
 
  //     $(".button9").click(function() {
  //     let value = $(".button9").text(); 
  //      $(".target").text(value); 
  //     });
      
  //     $(".buttonreset").click(function() {
  //      $(".target").text(0); 
  //     });
      
  // });
  