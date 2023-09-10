// AtCoder本用ファイル
// 81 B問題 Shift Only
// やること
// 1回できるごとにカウントするカウンターを用意　すみ
// arrayの要素を1つずつ半分にする処理　すみ
// 結果が全て偶数かどうかを判定　すみ
// 偶数だった場合再度arrayの要素を半分にする処理を行う　
// カウンターに１追加　
// 結果が奇数になったら終了　


function cutHalf(array) {
}

// function main(input) {
//   const num = input.trim().split('\n')
//   const array = num[1].split(' ')
//   console.log(array)
//   let counter = 0
//   let result = []
//   console.log(result)
//   const isEvenArray = (result) => result & 2 === 0
//   console.log(array.every(isEvenArray))
//   while(array.every(isEvenArray)) {
//     array.map((item) => result.push(item / 2))
//     if (array.every(isEvenArray)) {
//       counter++
//       return result
//     } else {
//       console.log(counter)
//       return
//     }
//   }
// }

function main(input) {
  const inputNum = input.trim().split('\n')
  console.log(inputNum)
  let num = inputNum[1].split(' ')
  console.log(num)
  const count = inputNum[0]
  let counter = 0

  let canDo = true
  while (canDo) {
    for (let i = 0; i < count; i++) {
      if (num[i] % 2 == 1) {
        console.log(num[i])
        canDo = false
      }
    }
    if (!canDo) {
      console.log('false通った')
      break
    }
    result = []
    for (let i = 0; i < num.length; i++) {
      console.log(num.length)
      num.map((item) => result.push(item[i] / 2))
    }
    num = result
    counter++
  }
  console.log(counter)
}



console.log(main(`
6
382253568 723152896 37802240 379425024 404894720 471526144
`))
