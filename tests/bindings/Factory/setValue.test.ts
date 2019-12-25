import { Factory } from '../../../src/bindings/Factory'

describe('bindings: Factory: setValue()', function () {
  it('should return the binding', function () {
    const test = new Factory(() => {})

    this.assert.equal(test.setValue(''), test)
  })

  it('should set the binding\'s value', function () {
    const value = {}
    const test = new Factory(() => {})

    test.setValue(value)

    this.assert.equal(test.getValue(), value)
  })
})
