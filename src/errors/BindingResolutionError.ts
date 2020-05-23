import { BindingResolutionErrorInterface } from '../interfaces/errors/BindingResolutionErrorInterface'

export class BindingResolutionError extends Error implements BindingResolutionErrorInterface {
  /**
   * Create a new instance of BindingResolutionError.
   *
   * @param {any} key
   */
  constructor (key: any) {
    let value = ''

    switch (true) {
      case key === undefined:
        value = 'undefined'
        break
      case key === null:
        value = 'null'
        break
      case typeof key === 'function': {
        const funcName = key.name ? `: ${key.name}` : ''
        value = `[Function${funcName}]`
        break
      }
      case typeof key === 'object': {
        value = `[Object: ${key.constructor.name}]`
        break
      }
      case typeof key === 'string':
        value = `type ${typeof key} with a value of '${key}'`
        break
      case typeof key === 'symbol':
        value = key.toString()
        break
      default:
        value = `type ${typeof key} with a value of ${key}`
        break
    }

    super(`Failed to resolve a binding with a key of ${value} from the service container.`)
  }
}
