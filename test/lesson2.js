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