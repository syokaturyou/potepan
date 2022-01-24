# booksハッシュにオブジェクトを格納する
 books = {
   title: "Rubyでハッシュを学ぼう！",
   company: "プログラミングを学ぶ社",
   page: 321,
   price: 2980
 }
 
 # booksハッシュに格納された要素を確認
 p books
 
 # ハッシュにキーを指定して出力をする
 puts books[:title]
 puts books[:price]
 
 # キーを文字列で定義
    hash_a = { "title" => "文字列型で定義をしています" }
    # キーを数値型で定義
    hash_b = { 1 => "数値形で定義をしています" }
    
    p hash_a["title"] #参照できる
    # p hash_a[title] #参照できない
 
    # 数値型と文字列型は区別される
    p hash_b[1] #参照できる
    # p hash_b["1"] #参照できない
 
 # booksハッシュのキーがtitleのオブジェクトを更新する
 books[:title] = "Rubyで配列を作ろう！"
 # booksハッシュのキーがpriceのオブジェクトを更新する
 books[:price] = 3800
 
 # ハッシュにキーを指定して出力をする
 puts books[:title]
 puts books[:price]