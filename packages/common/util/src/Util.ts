import dayjs from 'dayjs'

export const nowDate = (format = 'YYYY-MM-DD'): string => {
  return dayjs().format(format)
}
