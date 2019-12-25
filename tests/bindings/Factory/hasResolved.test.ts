import { Factory } from '../../../src/bindings/Factory'

describe('bindings: Factory: hasResolved()', function () {
  it('should return the value of the hasResolved property', function () {
    const resolver = () => {}
    const test = new Factory(resolver)

    test.setHasResolved(true)

    this.assert.isTrue(test.hasResolved())
  })
})
