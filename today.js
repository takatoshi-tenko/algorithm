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

