{"filter":false,"title":"dentaku.js","tooltip":"/javascript/dentaku.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["  function update( _v ) {","        document.querySelector( 'input' ).value = _v // input tag を更新する関数","    }","  function append( _v ) {","        document.querySelector( 'input' ).value += _v // 数字ボタンが押されたので数字を後ろに追加する","    }","  function calc() {","        const v = document.querySelector( 'input' ).value // 「＝」ボタンが押されたので計算する","    try {","        const f = new Function( 'return ' + v )","        update( f().toString() )","        } catch( _error ) {","          update( _error ) // 計算に失敗した場合は、そのエラーの内容を表示する","        }","    }","    "],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":4},"end":{"row":15,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1641798812299,"hash":"6a74b8baafe1c04bdfc47bbce864f6415f271fce"}