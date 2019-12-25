import { Instance } from '../../../src/bindings/Instance'

describe('bindings: Instance: getValue()', function () {
  it('should return the binding\'s value', function () {
    const value = {}
    const test = new Instance(value)

    this.assert.equal(test.getValue(), value)
  })
})
