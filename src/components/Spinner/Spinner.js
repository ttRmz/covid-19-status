import classNames from 'classnames'
import React from 'react'

export function Spinner({ className, ...rest }) {
  return (
    <div className={classNames('Spinner', className)} {...rest}>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="28"
        />
      </svg>
    </div>
  )
}
