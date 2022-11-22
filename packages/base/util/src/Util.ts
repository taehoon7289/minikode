import dayjs from 'dayjs'

export const nowDate = (format = 'YY-MM-DD'): string => {
  return dayjs().format(format)
}
