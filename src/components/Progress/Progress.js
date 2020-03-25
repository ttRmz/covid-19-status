import classNames from 'classnames'
import React from 'react'

export function Progress({ className, ...rest }) {
  return <div {...rest} className={classNames(className, 'Progress')} />
}
