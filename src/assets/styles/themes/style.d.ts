import light from './light'
import 'styled-components'

type Theme = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
