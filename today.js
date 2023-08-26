// ゴールまで残りの日数を表示する関数
function diffDate(tYear, tMonth, tDay) {
  const nowDate = new Date()
  const timeNowDate = nowDate.getTime()

  const goalDate = new Date(tYear, tMonth - 1, tDay)
  const timeGoalDate = goalDate.getTime()

  const diffTime = timeGoalDate - timeNowDate
  const diffDate = diffTime / (1000 * 60 * 60 * 24)
  const result = Math.ceil(diffDate)
  return result
}

// 今日の日付表示
function today() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const date = today.getDate()
  const dayName = ['日', '月', '火', '水', '木', '金', '土',]
  const day = today.getDay()
  return `${year}年${month + 1}月${date}日 (${dayName[day]})`
}

let date = document.querySelector(`input[type="date"][name="date"]`)
date.addEventListener('change', () => {
  const [tYear, tMonth, tDate] = date.value.split('-')
  const leftDay = diffDate(tYear, tMonth, tDate)
  document.querySelector('.leftDay').innerHTML = ` ${leftDay} `
})

window.addEventListener('load', () => {
  document.querySelector('.today').innerHTML = today()
})