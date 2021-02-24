import mergeBase from 'lodash/merge'

import { ChartConfig, LineProps, BarProps } from './types'
import { commonDefaultProps, defaultContainerAspect } from './commonProps'
import { defaultProps as defaultLineProps } from './LineChart/constants'
import { defaultProps as defaultBarProps } from './BarChart/constants'

const merge = (defaultProps: ChartConfig, userProps: ChartConfig) => {
  const props = defaultProps
  userProps &&
    Object.keys(userProps).forEach(
      key => (props[key] = mergeBase(props[key], userProps[key]))
    )
  return props
}

const getRangeOfZAxis = (key: string | number, data: object[]) => {
  const values = data.map(item => item[key])
  const min = Math.min(...values)
  const max = Math.max(...values)
  return [min, max]
}

const getChartDefaultProps = (
  userProps: ChartConfig,
  customConfig = commonDefaultProps
) => {
  if (!userProps?.container?.height) {
    customConfig.container.aspect = defaultContainerAspect
  }

  return {
    configs: merge(merge(commonDefaultProps, customConfig), userProps),
  }
}

const getLineDefaultProps = (
  userProps: LineProps
): { lineConfigs: LineProps } => ({
  lineConfigs: { ...defaultLineProps, ...userProps },
})

const getBarDefaultProps = (userProps: BarProps) => ({
  barConfigs: { ...defaultBarProps, ...userProps },
})

export {
  getChartDefaultProps,
  getLineDefaultProps,
  getBarDefaultProps,
  getRangeOfZAxis,
}
