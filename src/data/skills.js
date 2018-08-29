import * as R from 'ramda'
import { base } from './shared'

export const GET_PRIMARY_STAT_BONUS = R.curry((statKey, stats) => {
  return R.pipe(
    R.prop(statKey),
    R.subtract(R.__, 10)
  )(stats)
})

export const GET_SECONDARY_STAT_BONUS = R.curry((statKey, stats) => {
  return R.pipe(
    R.prop(statKey),
    R.subtract(R.__, 10),
    R.divide(R.__, 2),
    Math.ceil
  )(stats)
})

export default [
  {
    label: 'Communication',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('CHA', stats) + GET_SECONDARY_STAT_BONUS('INT', stats) + GET_SECONDARY_STAT_BONUS('CON', stats)),
    skills: [
      { label: 'Barter', base: R.always(10) },
      { label: 'Command', base: R.always(5) },
      { label: 'Disguise', base: R.always(5) },
      { label: 'Fast Talk', base: R.always(5) },
      { label: 'Perform', base: R.always(5) },
      { label: 'Persuade', base: R.always(15) },
      { label: 'Status', base: R.always(15) },
      { label: 'Teach', base: R.always(10) },
    ]
  },
  {
    label: 'Physical',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('DEX', stats) + GET_SECONDARY_STAT_BONUS('STR', stats) + GET_SECONDARY_STAT_BONUS('CON', stats)),
    skills: [
      { label: 'Athletics', base: R.always(20) },
      { label: 'Climb', base: R.always(40) },
      { label: 'Drive', base: R.always(20) },
      { label: 'Pilot', base: R.always(1) },
      { label: 'Stealth', base: R.always(10) },
      { label: 'Swim', base: R.always(10) },
    ]
  },
  {
    label: 'Manipulation',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('DEX', stats) + GET_SECONDARY_STAT_BONUS('STR', stats) + GET_SECONDARY_STAT_BONUS('INT', stats)),
    skills: [
      { label: 'Art', base: R.always(5) },
      { label: 'Hide/Conceal', base: R.always(10) },
      { label: 'Explosives', base: R.always(5) },
      { label: 'Fine Manipulation', base: R.always(5) },
      { label: 'Operate Machinery', base: R.always(1) },
      { label: 'Repair/Craft', base: R.always(15) },
      { label: 'Sleight of Hand', base: R.always(5) },
    ]
  },
  {
    label: 'Mental',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('INT', stats) + GET_SECONDARY_STAT_BONUS('POW', stats)),
    skills: [
      { label: 'First Aid', base: R.always(30) },
      { label: 'Gaming', base: base(({INT, POW}) => INT + POW) },
      { label: 'Knowledge', base: R.always(5) },
      { label: 'Business', base: R.always(10) },
      { label: 'History', base: R.always(20) },
      { label: 'Streetwise', base: R.always(25) },
      { label: 'Medicine', base: R.always(1) },
      { label: 'Science', base: R.always(1) },
      { label: 'Mathmatics', base: R.always(5) },
      { label: 'Strategy', base: R.always(1) },    
      { label: 'Sensors', base: R.always(15) },
      { label: 'Technical Skill', base: R.always(1) },
    ]
  },
  {
    label: 'Perception',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('POW', stats) + GET_SECONDARY_STAT_BONUS('CON', stats) + GET_SECONDARY_STAT_BONUS('INT', stats)),
    skills: [
      { label: 'Insight', base: R.always(5) },
      { label: 'Perception', base: R.always(25) },
      { label: 'Navigate', base: R.always(10) },
      { label: 'Research', base: R.always(25) },
      { label: 'Track', base: R.always(10) },
    ]
  },
  {
    label: 'Combat (STR)',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('STR', stats) + GET_SECONDARY_STAT_BONUS('DEX', stats) + GET_SECONDARY_STAT_BONUS('CON', stats)),
    skills: [
      { label: 'Martial Arts', base: R.always(0) },
      { label: 'Unarmed', base: R.always(25) },
      { label: 'Melee Weapon', base: R.always(15) },
    ]
  },
  {
    label: 'Combat (DEX)',
    base: base((stats) => GET_PRIMARY_STAT_BONUS('DEX', stats) + GET_SECONDARY_STAT_BONUS('STR', stats) + GET_SECONDARY_STAT_BONUS('INT', stats)),
    skills: [
      { label: 'Small Arms', base: R.always(20) },
      { label: 'Energy Weapons', base: R.always(20) },
      { label: 'Energy Blades', base: R.always(0) },
      { label: 'Heavy Weapons', base: R.always(10) },
      { label: 'Gunnery/Artillery', base: R.always(5) },
      { label: 'Evade', base: base((stats) => stats.DEX * 2) },
    ]
  },
  {
    label: 'Psionics',
    base: base(GET_PRIMARY_STAT_BONUS('POW')), 
    skills: [
      { label: 'Kinetic Burst', base: base(({STR}) => Math.ceil(STR / 2)) },
      { label: 'Psionic Blast', base: base(({CHA}) => Math.ceil(CHA / 2)) },
      { label: 'Psi Storm', base: base(({CON}) => Math.ceil(CON / 2)) },
      { label: 'Mind Spear', base: base(({INT}) => Math.ceil(INT / 2)) },
      { label: 'Temporal Celerity', base: base(({DEX}) => Math.ceil(DEX / 2 )) },
      { label: 'Precog Parry', base: base(({POW}) => Math.ceil(POW / 2)) },
    ]
  }
]