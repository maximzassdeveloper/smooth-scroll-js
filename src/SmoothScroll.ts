import { SmoothScrollProps } from './types'

export class SmoothScroll implements SmoothScrollProps {
  containerHeight: number

  constructor(height: number) {
    this.containerHeight = height
  }
}
