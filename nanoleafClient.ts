import axios from 'axios'
import { State } from './types'

const { NANOLEAF_HOST: host, NANOLEAF_API_KEY: apiKey } = process.env
const url = `http://${host}:16021/api/v1/${apiKey}/state`

export const getState = (): Promise<State> =>
  axios
    .get<State>(url)
    .then((res) => res.data)
    .catch((err) => {
      return { error: err.code }
    })

export const setOn = (value: boolean) => {
  return axios.put(url, { on: { value } })
}
