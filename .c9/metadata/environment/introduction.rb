{"filter":false,"title":"introduction.rb","tooltip":"/introduction.rb","undoManager":{"mark":22,"position":22,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["class Introduction"," "," end"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["class Introduction"," "," end"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":17},"action":"insert","lines":[" # クラス定義"," class Introduction","   def initialize","     puts \"initializeメソッドがよばれた！\"","   end"," end"," "," # newメソッド呼び出し"," Introduction.new"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":17},"action":"remove","lines":[" # クラス定義"," class Introduction","   def initialize","     puts \"initializeメソッドがよばれた！\"","   end"," end"," "," # newメソッド呼び出し"," Introduction.new"],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":17},"action":"insert","lines":[" class Introduction","   #インスタンス生成時に渡された名前と年齢をインスタンス変数に保存する","   def initialize(name, age)","     @name = name","     @age = age","   end"," end"," "," Introduction.new"],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":17},"action":"remove","lines":[" class Introduction","   #インスタンス生成時に渡された名前と年齢をインスタンス変数に保存する","   def initialize(name, age)","     @name = name","     @age = age","   end"," end"," "," Introduction.new"],"id":6}],[{"start":{"row":0,"column":0},"end":{"row":19,"column":16},"action":"insert","lines":[" class Introduction","   # インスタンス生成時に渡された名前と年齢をインスタンス変数に保存する","   def initialize(name, age)","     @name = name","     @age = age","   end"," ","   def call_name","     puts \"私の名前は#{@name}です。よろしくお願いします!\"","   end"," ","   def call_age","     puts \"#{@age}歳です！\"","   end"," end"," "," # Introductionクラスのインスタンスを生成しtaroという変数に代入"," taro = Introduction.new(\"Taro\",25)"," taro.call_name()"," taro.call_age()"],"id":7}],[{"start":{"row":8,"column":39},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":9,"column":0},"end":{"row":9,"column":5},"action":"insert","lines":["     "]}],[{"start":{"row":9,"column":5},"end":{"row":9,"column":23},"action":"insert","lines":["puts \"#{@age}歳です！\""],"id":9}],[{"start":{"row":12,"column":3},"end":{"row":12,"column":5},"action":"insert","lines":["# "],"id":10},{"start":{"row":13,"column":3},"end":{"row":13,"column":5},"action":"insert","lines":["# "]},{"start":{"row":14,"column":3},"end":{"row":14,"column":5},"action":"insert","lines":["# "]}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":3},"action":"insert","lines":["# "],"id":11}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":3},"action":"insert","lines":["# "],"id":12},{"start":{"row":1,"column":1},"end":{"row":1,"column":3},"action":"insert","lines":["# "]},{"start":{"row":2,"column":1},"end":{"row":2,"column":3},"action":"insert","lines":["# "]},{"start":{"row":3,"column":1},"end":{"row":3,"column":3},"action":"insert","lines":["# "]},{"start":{"row":4,"column":1},"end":{"row":4,"column":3},"action":"insert","lines":["# "]},{"start":{"row":5,"column":1},"end":{"row":5,"column":3},"action":"insert","lines":["# "]},{"start":{"row":7,"column":1},"end":{"row":7,"column":3},"action":"insert","lines":["# "]},{"start":{"row":8,"column":1},"end":{"row":8,"column":3},"action":"insert","lines":["# "]},{"start":{"row":9,"column":1},"end":{"row":9,"column":3},"action":"insert","lines":["# "]},{"start":{"row":10,"column":1},"end":{"row":10,"column":3},"action":"insert","lines":["# "]},{"start":{"row":12,"column":1},"end":{"row":12,"column":3},"action":"insert","lines":["# "]},{"start":{"row":13,"column":1},"end":{"row":13,"column":3},"action":"insert","lines":["# "]},{"start":{"row":14,"column":1},"end":{"row":14,"column":3},"action":"insert","lines":["# "]},{"start":{"row":15,"column":1},"end":{"row":15,"column":3},"action":"insert","lines":["# "]},{"start":{"row":17,"column":1},"end":{"row":17,"column":3},"action":"insert","lines":["# "]},{"start":{"row":18,"column":1},"end":{"row":18,"column":3},"action":"insert","lines":["# "]},{"start":{"row":19,"column":1},"end":{"row":19,"column":3},"action":"insert","lines":["# "]},{"start":{"row":20,"column":1},"end":{"row":20,"column":3},"action":"insert","lines":["# "]}],[{"start":{"row":20,"column":20},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":21,"column":0},"end":{"row":21,"column":1},"action":"insert","lines":[" "]},{"start":{"row":21,"column":1},"end":{"row":22,"column":0},"action":"insert","lines":["",""]},{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"insert","lines":[" "]},{"start":{"row":22,"column":1},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":23,"column":1},"end":{"row":48,"column":16},"action":"insert","lines":["class Introduction","   def initialize(name, age)","     #インスタンス生成時に渡された名前と年齢をインスタンス変数に保持","     @name = name","     @age = age","   end"," ","   def call_name","     puts \"私の名前は#{@name}です。よろしくお願いします!\"","   end"," ","   def call_age","     puts \"#{@age}歳です！\"","   end"," end"," "," taro = Introduction.new(\"Taro\",25)"," hana = Introduction.new(\"Hana\",23)"," "," #call_name呼び出し"," taro.call_name()"," hana.call_name()"," "," #call_age呼び出し"," taro.call_age()"," hana.call_age()"],"id":14}],[{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["@"],"id":17}],[{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["@"],"id":18}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["@"],"id":19}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["@"],"id":20}],[{"start":{"row":48,"column":16},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":[" "]},{"start":{"row":49,"column":1},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"insert","lines":[" "]},{"start":{"row":50,"column":1},"end":{"row":51,"column":0},"action":"insert","lines":["",""]},{"start":{"row":51,"column":0},"end":{"row":51,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":51,"column":1},"end":{"row":68,"column":16},"action":"insert","lines":["class Introduction","   def initialize(name, age)","     @name = name","     @age = age","   end"," ","   def call_name","     puts \"私の名前は#{@name}です。よろしくお願いします!\"","   end"," ","   def call_age","     puts \"#{@age}歳です！\"","   end"," end"," "," taro = Introduction.new(\"Taro\",25)"," taro.call_name() #インスタンス.メソッド名で呼び出し"," taro.call_age()"],"id":22}],[{"start":{"row":23,"column":1},"end":{"row":23,"column":3},"action":"insert","lines":["# "],"id":23},{"start":{"row":24,"column":1},"end":{"row":24,"column":3},"action":"insert","lines":["# "]},{"start":{"row":25,"column":1},"end":{"row":25,"column":3},"action":"insert","lines":["# "]},{"start":{"row":26,"column":1},"end":{"row":26,"column":3},"action":"insert","lines":["# "]},{"start":{"row":27,"column":1},"end":{"row":27,"column":3},"action":"insert","lines":["# "]},{"start":{"row":28,"column":1},"end":{"row":28,"column":3},"action":"insert","lines":["# "]},{"start":{"row":30,"column":1},"end":{"row":30,"column":3},"action":"insert","lines":["# "]},{"start":{"row":31,"column":1},"end":{"row":31,"column":3},"action":"insert","lines":["# "]},{"start":{"row":32,"column":1},"end":{"row":32,"column":3},"action":"insert","lines":["# "]},{"start":{"row":34,"column":1},"end":{"row":34,"column":3},"action":"insert","lines":["# "]},{"start":{"row":35,"column":1},"end":{"row":35,"column":3},"action":"insert","lines":["# "]},{"start":{"row":36,"column":1},"end":{"row":36,"column":3},"action":"insert","lines":["# "]},{"start":{"row":37,"column":1},"end":{"row":37,"column":3},"action":"insert","lines":["# "]},{"start":{"row":39,"column":1},"end":{"row":39,"column":3},"action":"insert","lines":["# "]},{"start":{"row":40,"column":1},"end":{"row":40,"column":3},"action":"insert","lines":["# "]},{"start":{"row":42,"column":1},"end":{"row":42,"column":3},"action":"insert","lines":["# "]},{"start":{"row":43,"column":1},"end":{"row":43,"column":3},"action":"insert","lines":["# "]},{"start":{"row":44,"column":1},"end":{"row":44,"column":3},"action":"insert","lines":["# "]},{"start":{"row":46,"column":1},"end":{"row":46,"column":3},"action":"insert","lines":["# "]},{"start":{"row":47,"column":1},"end":{"row":47,"column":3},"action":"insert","lines":["# "]},{"start":{"row":48,"column":1},"end":{"row":48,"column":3},"action":"insert","lines":["# "]}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":[" "],"id":24},{"start":{"row":21,"column":1},"end":{"row":22,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"remove","lines":[" "],"id":25},{"start":{"row":47,"column":18},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":660,"scrollleft":0,"selection":{"start":{"row":47,"column":18},"end":{"row":47,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":43,"state":"start","mode":"ace/mode/ruby"}},"timestamp":1643352947919,"hash":"c7e73546af5fcab89807da3f4c713d75e46329d8"}