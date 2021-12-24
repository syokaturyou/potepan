 
 
 $(document).ready(function(){
      $(".buttonA").click(function() {
      let get_text = $(".target_textA").text(); //テキストを取得し変数に入れています。
      alert(get_text); //テキストが取得できたかアラートで確認をします。
      });
 
      $(".buttonB").click(function() {
       $(".target_textB").text("文章が変更された！"); //テキストを変更する処理です。
      });
 
      $(".buttonC").click(function() {
       $(".target_textB").text("文章が変わったぞ！"); //テキストを変更する処理です。
     });
  });
  
 
  $(document).ready(function(){
   $(".button_a").click(function() {
     $(".box_a").addClass("add_color_yellow"); //クラスの追加の処理です。
   });
 
   $(".button_b").click(function() {
     $(".box_a").removeClass("add_color_yellow"); //クラスの削除の処理です。
   });
 
   $(".button_c").click(function() {
     $(".box_b").addClass("add_hidden"); //display: none:のクラスを追加する処理です。
   });
 
   $(".button_d").click(function() {
     $(".box_b").removeClass("add_hidden"); //display: none:のクラスを削除する処理です。
   });
 });
