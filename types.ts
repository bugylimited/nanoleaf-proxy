interface Value<T> {
  value: T
}

interface MinMaxValue extends Value<number> {
  min: number
  max: number
}

export interface State {
  brightness?: MinMaxValue
  colorMode?: string
  ct?: MinMaxValue
  hue?: MinMaxValue
  on?: Value<boolean>
  sat?: MinMaxValue
  error?: string
}
