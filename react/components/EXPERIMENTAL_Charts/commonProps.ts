import { ChartConfig } from './types'

export const defaultContainerAspect = 4.0 / 3.0
export const commonDefaultProps: ChartConfig = {
  container: {
    height: '100%',
    width: '100%',
  },
  xAxis: {
    axisLine: false,
    tickLine: false,
    tick: true,
    tickMargin: 5,
    hide: false,
    type: 'category',
  },
  yAxis: {
    axisLine: false,
    tickLine: false,
    tick: true,
    tickMargin: 5,
    hide: false,
    type: 'number',
  },
  zAxis: {
    type: 'number',
  },
  grid: {
    horizontal: false,
    vertical: false,
  },
}

export const colors = ['#EE7850', '#4CAABF', '#9F50B6', '#479A5E', '#0000FF']

export const tooltipProps = {
  cursor: false,
  labelStyle: { color: '#828282' },
}
