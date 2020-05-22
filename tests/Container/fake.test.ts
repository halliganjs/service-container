import { Container } from '../../src/Container'
import { Instance } from '../../src/bindings/Instance'

describe('Container: fake()', function () {
  it('should add the fake binding to the collection of fake bindings', function () {
    const value = {}
    const container = new Container()

    this.assert.notProperty(container.getFakes(), 'testing')

    container.fake('testing', value)

    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Instance)
  })

  it('should replace the fake binding in the collection of fake bindings', function () {
    const firstValue = {}
    const secondValue = {}

    const container = new Container()

    container.fake('testing', firstValue)

    const firstFake = container.getFakes().get('testing')

    container.fake('testing', secondValue)

    this.assert.hasAnyKeys(container.getFakes(), ['testing'])
    this.assert.instanceOf(container.getFakes().get('testing'), Instance)
    this.assert.notEqual(container.getFakes().get('testing'), firstFake)
  })
})
