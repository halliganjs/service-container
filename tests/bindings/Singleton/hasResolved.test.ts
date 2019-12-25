import { Singleton } from '../../../src/bindings/Singleton'

describe('bindings: Singleton: hasResolved()', function () {
  it('should return the value of the hasResolved property', function () {
    const resolver = () => {}
    const test = new Singleton(resolver)

    test.setHasResolved(true)

    this.assert.isTrue(test.hasResolved())
  })
})
