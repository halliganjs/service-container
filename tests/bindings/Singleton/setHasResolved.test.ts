import { Singleton } from '../../../src/bindings/Singleton'

describe('bindings: Singleton: setHasResolved()', function () {
  it('should return the binding', function () {
    const test = new Singleton(() => {})

    this.assert.equal(test.setHasResolved(true), test)
  })

  it('should set the value of the hasResolved property', function () {
    const resolver = () => {}
    const test = new Singleton(resolver)

    test.setHasResolved(true)

    this.assert.isTrue(test.hasResolved())

    test.setHasResolved(false)

    this.assert.isFalse(test.hasResolved())
  })
})
