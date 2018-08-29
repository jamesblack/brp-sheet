import * as R from 'ramda'

const applyStatDefaults = R.merge({
  STR: 10,
  DEX: 10,
  CON: 10,
  INT: 10,
  POW: 10,
  CHA: 10
})

export const base = R.useWith(R.__, [applyStatDefaults])