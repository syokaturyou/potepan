{"filter":false,"title":"exception.rb","tooltip":"/exception.rb","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":23},"action":"insert","lines":[" number = 100 + nil # 数値にnilは足すことができないため例外（エラー）となる"," puts number"," puts \"処理が最後まで実行されました。\""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["#"],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["#"]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["#"]}],[{"start":{"row":2,"column":24},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":4,"column":0},"end":{"row":13,"column":23},"action":"insert","lines":[" begin","   number = 100 + nil # 数値にnilは足すことができないため例外（エラー）となる","   puts number"," rescue","   puts $! # 例外オブジェクトを出力する","   puts $@ # 例外が発生した位置情報を出力する","   puts \"例外が発生したのでrescue文の処理が通っています。\""," end"," "," puts \"処理が最後まで実行されました。\""],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":23},"end":{"row":13,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1643293581835,"hash":"21cb88c9f1d178410fd977d6fec09845045aeb6d"}