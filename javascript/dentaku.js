  function update( _v ) {
        document.querySelector( 'input' ).value = _v // input tag を更新する関数
    }
  function append( _v ) {
        document.querySelector( 'input' ).value += _v // 数字ボタンが押されたので数字を後ろに追加する
    }
  function calc() {
        const v = document.querySelector( 'input' ).value // 「＝」ボタンが押されたので計算する
    try {
        const f = new Function( 'return ' + v )
        update( f().toString() )
        } catch( _error ) {
          update( _error ) // 計算に失敗した場合は、そのエラーの内容を表示する
        }
    }
    