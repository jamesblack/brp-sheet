import Skills, { GET_PRIMARY_STAT_BONUS, GET_SECONDARY_STAT_BONUS } from '@/data/skills'

describe('Skills', () => {
  describe('GET_PRIMARY_STAT_BONUS', () => {
    it('can get a positive stat bonus', () => {
      const actual = GET_PRIMARY_STAT_BONUS('DEX')({DEX: 17})
      expect(actual).toEqual(7)
    })
    it('can get a negative stat bonus', () => {
      const actual = GET_PRIMARY_STAT_BONUS('DEX')({DEX: 7})
      expect(actual).toEqual(-3)
    })
  })

  describe('GET_SECONDARY_STAT_BONUS', () => {
    it('can get a positive stat bonus', () => {
      const actual = GET_SECONDARY_STAT_BONUS('DEX')({DEX: 17})
      expect(actual).toEqual(4)
    })
    it('can get a negative stat bonus', () => {
      const actual = GET_SECONDARY_STAT_BONUS('DEX')({DEX: 7})
      expect(actual).toEqual(-1)
    })
  })
})