import { Binding } from './Binding'
import { Resolver } from '../types/Resolver'
import { ResolverBindingInterface } from '../interfaces/bindings/ResolverBindingInterface'

export abstract class ResolverBinding extends Binding implements ResolverBindingInterface {
  /**
   * @var {boolean} hasResolved
   */
  public hasResolved: boolean = false

  /**
   * @var {Resolver|null} _resolver
   */
  protected _resolver: Resolver

  /**
   * Retrieve the value of the resolver property.
   *
   * @return {Resolver}
   */
  get resolver (): Resolver {
    return this._resolver
  }

  /**
   * Create a new instance of ResolverBinding.
   *
   * @param {Resolver} resolver
   */
  public constructor (resolver: Resolver) {
    super()

    this._resolver = resolver
  }
}
