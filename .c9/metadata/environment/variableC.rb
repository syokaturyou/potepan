{"filter":false,"title":"variableC.rb","tooltip":"/variableC.rb","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":30,"column":21},"action":"insert","lines":["class SuperClass","   # クラス変数を定義する","   @@class_name = \"クラス変数\""," ","   def set_name(name)","     # インスタンス変数を定義する","     @instance_name = name","     call()","   end"," ","   def call","     puts \"callメソッドで呼び出した[#{@instance_name}]です\"","     puts \"--------------\"","     puts \"callメソッドで呼び出した[#{@@class_name}]です\"","     puts \"--------------\"","   end"," end"," "," class SubClass < SuperClass","   def sub_call","     puts \"sub_callメソッドで呼び出した[#{@instance_name}]です\"","     puts \"--------------\"","     puts \"sub_callメソッドで呼び出した[#{@@class_name}]です\"","   end"," end"," "," super_class = SuperClass.new"," super_class.set_name(\"インスタンス変数\")"," "," sub_class = SubClass.new"," sub_class.sub_call()"],"id":1}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["l"],"id":2},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":["l"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":["a"]},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"remove","lines":["c"]}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["t"],"id":3},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["o"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["m"]}],[{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"remove","lines":["l"],"id":4},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"remove","lines":["l"]},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"remove","lines":["a"]},{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"remove","lines":["c"]}],[{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["t"],"id":5},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["o"]},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["m"]}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"remove","lines":["l"],"id":6},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"remove","lines":["l"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"remove","lines":["a"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"remove","lines":["c"]}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["t"],"id":7},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["o"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["m"]}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"remove","lines":["l"],"id":8},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"remove","lines":["l"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"remove","lines":["a"]},{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"remove","lines":["c"]}],[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["t"],"id":9},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["o"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["m"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":4},"end":{"row":16,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1643349711785,"hash":"ba6a834048b3302464648987b34cd8f3e269f04c"}