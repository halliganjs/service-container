import { Container } from '../../../src/Container'
import { Factory } from '../../../src/bindings/Factory'

describe('bindings: Factory: getValue()', function () {
  it('should return null by default', function () {
    const value = () => {}
    const test = new Factory(value)

    this.assert.isNull(test.getValue())
  })

  it('should return null after resolution', function () {
    const container = new Container()
    const resolver = () => {}
    const test = new Factory(resolver)

    test.resolve(container)

    this.assert.isNull(test.getValue())
  })
})
