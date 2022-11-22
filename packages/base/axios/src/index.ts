import axios, { AxiosResponse } from 'axios'

export interface Config {
  url: string
  header: any
  method: string
  parameter: any
}

const init = async ({
  url,
  header,
  method,
  parameter
}: Config): Promise<AxiosResponse> => {
  return await axios({
    headers: {},
    url,
    method,
    data: { ...parameter }
  })
}

export const request = async (config: Config): Promise<any> => {
  const res = await init(config)
  console.log('res', res)
  return res.data
}
