import { Container } from '../../src/Container'
import { Binding } from '../../src/Binding'

describe('Binding: resolve()', function () {
  describe('for an instance', function () {
    it('should return the value', function () {
      const value = {}
      const binding = new Binding(value)

      const container = new Container()

      this.assert.equal(binding.resolve(container), value)
    })
  })

  describe('for a singleton', function () {
    it('should return the resolver\'s value', function () {
      const value = {}
      const resolver = () => value
      const binding = new Binding(null, resolver)

      const container = new Container()

      this.assert.equal(binding.resolve(container), value)
    })

    it('should return the resolver\'s value for subsequent resolutions', function () {
      const value = {}
      const resolver = () => value
      const binding = new Binding(null, resolver)

      const container = new Container()

      binding.resolve(container)

      this.assert.equal(binding.resolve(container), value)
    })
  })

  describe('for a factory', function () {
    it('should return the resolver\'s value', function () {
      const resolver = () => Object.create({})
      const binding = new Binding(null, resolver, true)

      const container = new Container()

      this.assert.deepEqual(binding.resolve(container), {})
    })

    it('should return a new value for subsequent resolutions', function () {
      const resolver = () => Object.create({})
      const binding = new Binding(null, resolver, true)

      const container = new Container()

      const value = binding.resolve(container)

      this.assert.notEqual(binding.resolve(container), value)
    })
  })
})
