import { Binding } from '../../src/bindings/Binding'
import { Container } from '../../src/Container'

describe('Container: getBindings()', function () {
  it('should return the bindings', function () {
    const container = new Container()

    const value = {}

    container.instance('testing', value)

    this.assert.isObject(container.getBindings())
    this.assert.property(container.getBindings(), 'testing')
    this.assert.instanceOf(container.getBindings().testing, Binding)
    this.assert.equal(container.getBindings().testing.getValue(), value)
  })
})
