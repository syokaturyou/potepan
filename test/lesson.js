// let userName = "ポテパン太郎";// 変数を宣言する
// let userAge = 28; // 変数を宣言する
 
// console.log(userName);
// console.log(userAge);
 
// let message = "誕生日がきた！！"; // 新たに変数を宣言する
// userAge = 29; // 変数の中の値を変更する
 
// console.log(message);
// console.log(userAge);
 
// message = "おめでとう！！"; // 新たに変数の中身を変更する
 
// console.log(message);
// console.log(message);
// console.log(message);

// let name = "ポテパン太郎";
// console.log("こんにちは！" + name + "さん");
// console.log(name + "さんの注文履歴はこちらです");
// console.log(name + "さんにおすすめの商品はこちらです");
    
// let message = "こんにちは！";
// console.log(message + "ポテパン太郎さん");
// console.log(message + "佐藤javascriptさん");
// console.log(message + "html鈴木さん");
    
    
// let number1 = 100 + 200;
// let number2 = 400;
// let number3 = 600;
 
// let sumNumber = number2 + number3; //変数と変数も足すことができる

// console.log(number1);
// console.log(sumNumber);

// let text1 = "文章で" + "書かれています"; //文字どうし
// let text2 = "500" + "500"; //数字の文字どうし
// let text3 = 100 + "文字"; //数値と文字
// let text4 = text3 + "の" + text1; //変数を含めた足し算
 
// console.log(text1);
// console.log(text2);
// console.log(text3);
// console.log(text4);

// let number = 300 - 200;
 
// console.log(number);

// let number = 100 * 5;
 
// console.log(number);

// let number = 800 / 4;
 
// console.log(number);

// let number = 10 % 3;
 
// console.log(number);
    
// let number1 = 13 / 5; //答えは2.6となります。
// let number2 = 13 % 5; //答えは2あまり3となります。
 
// console.log(number1);
// console.log(number2);

// let message1 = "プログラミングは肩が凝る確率";
// let message2 = 80 + "%";
 
// console.log(message1);
// console.log(message2);

// let number1 = 300;
// number1 += 200; //ここで300を200に変更するのではなく200を足すということができる
 
// console.log(number1);
 
// let number2 = 500;
// number2 -= 100; //ここで500を100に変更するのではなく100で引くということができる
 
// console.log(number1);
// console.log(number2);
    

//数値型の100と文字列型の100は値とデータの型が同じですよねの意味
    // if ( 100 === "100" ) {
    //   console.log("式の結果はtrueです");
    // } else {
    //   console.log("式の結果はfalseです");
    // }
    
//   //数値型の100と文字列型の100は値とデータの型が同じではないですよね（間違っていますよね）の意味
//     if ( 100 !== "100" ) {
//       console.log("式の結果はtrueです");
//     } else {
//       console.log("式の結果はfalseです");
//     }

// let number = 100;
 
//     if (number > 200) {
//       console.log("numberは200より大きいです。");
//     } else if(number > 50) {
//       console.log("numberは50より大きいです。");
//     } else {
//       console.log("numberは50より小さいです。");
//     }


//   let number = 300;
 
//     if (number > 80) { //この式はtrueとなる
//       console.log("numberは80より大きいです。");
//     } else if (number > 50) { //判定結果はtrueとなるが、その前の条件分岐（if(number > 80)）で既に判定がtrueとなっているため、処理は実行されない
//       console.log("numberは50より大きいです。");
//     } else {
//       console.log("numberは50より小さいです。");
//     }

// let gender = "男";
//     let age = 20;
 
//     if (gender === "男") {
//       if (age >= 20) {
//         console.log("20歳以上の男性です");
//       }
//     }

//   let gender = "男";
//     let age = 20;
 
//     if (gender === "男") {
//       if (age >= 20) {
//         console.log("20歳以上の男性です");
//       }
//     }
    
    // let gender = "男";
    // let age = 20;
 
    // if (gender === "男" && age >= 20) {
    //   console.log("20歳以上の男性です");
    // }
    
//   let number1 = 100;
//     let number2 = "100";
//     let boolean_flag = false;
    
//     if (number1 > 100) {
//         number1 = 200;
//     } else if (number1 !== number2) {
//         boolean_flag = true;
//         number1 += 300;
//     } else {
//         boolean_flag = true;
//         number1 = 300;
//     }
    
//     if (number1 >= 400 && boolean_flag) {
//         console.log("出力結果A");
//     } else {
//         console.log("出力結果B");
//     }

//  for (let i = 0; i < 10; i++) { //i++はカウンタ変数に「1」を足す場合の特殊記法
//       console.log("この表示を10回出力したい"); //この箇所が繰り返し実行される
//     }

//   for (let i = 0; i < 10; i++) {
//       console.log("ただいまは" + i + "回目の処理です");
//       //文字列型と数値型（変数iには数値が代入されている）は全て文字列として結合されましたね。
//     }
//     console.log("処理が終了しました");
    
    //     for (let i = 0; i <= 20; i++) {
    //   if (i % 2 == 0){
    //     console.log(i);
    //   }
    // }
    
    // let output_count = 1; //カウンタ変数とは別に出力数をカウントする変数を用意
    // for (let i = 0; i <= 20; i++) {
    //   if (i % 2 == 0) {
    //     console.log(i);
    //     console.log("出力回数は" + output_count + "回目です"); //出力した数を確認する
        
    //     if (output_count >= 5) { //コンソールに５つ分出力してはじめてここの処理を通る
    //       console.log("処理を抜けます");
    //       break; //breakによってfor分の繰り返しを抜け、for分の外の処理に移る
    //     }
 
    //     output_count++; //出力回数が5になるまでカウントアップする
    //   }
    // }
    // console.log("処理が終了しました");
    
    
    // let i = 0;
    // while (i <= 20) {
    //   if (i % 2 == 0) {
    //     console.log(i);
    //   }
    //   i++;
    // }
    
    //   let i = 0;
    // while (i <= 20) {
    //   console.log("カウンタ変数が" + i + "のままで終わらない！");
    //   //while文の中にカウンタ変数がない！！
    // }
    
     for (let i = 0; 0 < 10; i++){
      console.log("どうしてカウンタ変数が" + i "に戻るの？");
      i--; //カウンタ変数を１引く
    }