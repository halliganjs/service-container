import { Instance } from '../../../src/bindings/Instance'

describe('bindings: Instance: setValue()', function () {
  it('should return the binding', function () {
    const test = new Instance()

    this.assert.equal(test.setValue(''), test)
  })

  it('should set the binding\'s value', function () {
    const value = {}
    const test = new Instance()

    test.setValue(value)

    this.assert.equal(test.getValue(), value)
  })
})
