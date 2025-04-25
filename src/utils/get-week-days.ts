interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  })

  return Array.from(Array(7).keys()).map((day) => {
    const date = new Date(Date.UTC(2021, 5, day))
    const formattedDay = formatter.format(date)

    if (short) {
      return formattedDay.substring(0, 3).toUpperCase()
    }

    return formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1)
  })
}
