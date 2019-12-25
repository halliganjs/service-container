import { Singleton } from '../../../src/bindings/Singleton'

describe('bindings: Singleton: setValue()', function () {
  it('should return the binding', function () {
    const test = new Singleton(() => {})

    this.assert.equal(test.setValue(''), test)
  })

  it('should set the binding\'s value', function () {
    const value = {}
    const test = new Singleton(() => {})

    test.setValue(value)

    this.assert.equal(test.getValue(), value)
  })
})
