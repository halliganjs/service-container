import { Container } from '../../../src/Container'
import { Singleton } from '../../../src/bindings/Singleton'

describe('bindings: Singleton: getValue()', function () {
  it('should return null by default', function () {
    const value = () => {}
    const test = new Singleton(value)

    this.assert.isNull(test.getValue())
  })

  it('should return the resolved value after resolution', function () {
    const container = new Container()
    const value = {}
    const resolver = () => value
    const test = new Singleton(resolver)

    test.resolve(container)

    this.assert.equal(test.getValue(), value)
  })
})
