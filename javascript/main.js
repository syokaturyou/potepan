 
 
 $(document).ready(function(){
      $(".buttonA").click(function() {
      let get_text = $(".target").text(); //テキストを取得し変数に入れています。
      $(".target").text("aaa");
      // alert(get_text); //テキストが取得できたかアラートで確認をします。
      });
 
      $(".buttonB").click(function() {
       $(".target").text("bbbb"); //テキストを変更する処理です。
      });
 
      $(".buttonC").click(function() {
       $(".target").text("cccc"); //テキストを変更する処理です。
      });
      
      $(".buttonreset").click(function() {
       $(".target").text("|"); //テキストを変更する処理です。
      });
  });
  
  
//   document.querySelectorAll('.button').forEach(function (button) {
// 	button.addEventListener('click', {value: `${button.value}`, handleEvent: onClickButton});
// })

// function onClickButton() {
// 	console.log(`${this.value}がクリックされました`)
// }
 
//   $(document).ready(function(){
//   $(".button_a").click(function() {
//     $(".box_a").addClass("add_color_yellow"); //クラスの追加の処理です。
//   });
 
//   $(".button_b").click(function() {
//     $(".box_a").removeClass("add_color_yellow"); //クラスの削除の処理です。
//   });
 
//   $(".button_c").click(function() {
//     $(".box_b").addClass("add_hidden"); //display: none:のクラスを追加する処理です。
//   });
 
//   $(".button_d").click(function() {
//     $(".box_b").removeClass("add_hidden"); //display: none:のクラスを削除する処理です。
//   });
// });
