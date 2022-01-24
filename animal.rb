# animals配列を定義する
  animals = ["パンダ", "コアラ", "カンガルー"]
 
  puts animals[0]
  puts animals[1]
  puts animals[2]
 
  puts "---------------"
#インデックスが1のオブジェクトを更新する
  animals[1] = "キリン"
 
  animals << "ライオン"
  animals.push("wani")
 
  puts animals[0]
  puts animals[1]
  puts animals[2]
  puts animals[3]
  puts animals[4]
    
  p animals
    animals.delete_at(0)
  p animals