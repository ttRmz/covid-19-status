import { select } from '@storybook/addon-knobs'
import { ICONS } from '../src/components/Icon/_internals/constants'

export const NONE_OPTION = 'none'

export function knobOptionalSelect(
  label,
  options,
  defaultValue = NONE_OPTION,
  groupID,
) {
  const value = select(label, [NONE_OPTION, ...options], defaultValue, groupID)
  return value === NONE_OPTION ? undefined : value
}

export function knobIcon(label, defaultValue, groupID) {
  return knobOptionalSelect(label, ICONS, defaultValue, groupID)
}
