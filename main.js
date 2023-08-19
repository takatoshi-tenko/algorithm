// 1以上N以下の整数のうち、十進法での各桁の和がA以上B以下であるものの総和を求める
// 14 2 4
// →45

// 手順
// n = 4649 の場合
// n % 10 をする → 9 になる
// n / 10 小数点切り捨て → 464
// n % 10 → 4
// n / 10 → 46
// n % 10 → 6
// n / 10 → 4
// n % 10 → 4
// n / 10 → 0

// const sum = 0

const calcSumDigits = (num) => {
  let sum = 0
  while(num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
    console.log(`${num}回目`)
  }
  return sum
}

const Main = (input) => {
  const [N, A, B] = input.split(' ')
  let result = 0
  for (let i = 0; i < N; i++) {
    let x = calcSumDigits(i)
    if (A <= x && x <= B) {
      result += i
    }
  }
  return result
}

console.log(calcSumDigits(14))
console.log(Main('14 2 4'))