import { base } from './shared'

export default [
  {
    key: 'STR',
    attribute: {
      label: 'STR'
    },
    roll: {
      label: "Effort",
      base: base(({STR}) => STR * 5)
    }
  },
  {
    key: 'DEX',
    attribute: {
      label: 'DEX'
    },
    roll: {
      label: "Agility",
      base: base(({DEX}) => DEX * 5)
    }
  },
  {
    key: 'CON',
    attribute: {
      label: 'CON'
    },
    roll: {
      label: "Stamina",
      base: base(({CON}) => CON * 5)
    }
  },
  {
    key: 'INT',
    attribute: {
      label: 'INT'
    },
    roll: {
      label: "Idea",
      base: base(({INT}) => INT * 5)
    }
  },
  {
    key: 'POW',
    attribute: {
      label: 'POW'
    },
    roll: {
      label: "Will",
      base: base(({POW}) => POW * 5)
    }
  },
  {
    key: 'CHA',
    attribute: {
      label: 'CHA'
    },
    roll: {
      label: "Influence",
      base: base(({CHA}) => CHA * 5)
    }
  }
]