import { Binding } from './Binding'
import { BindingInterface } from './interfaces/Binding'
import { BindingResolutionError } from './errors/BindingResolutionError'
import { ContainerInterface } from './interfaces/Container'
import { ProviderInterface } from './interfaces/Provider'
import { ResolverInterface } from './interfaces/Resolver'

export class Container implements ContainerInterface {
  /**
   * @prop {{ [key: string]: BindingInterface }} _bindings
   */
  protected _bindings: { [key: string]: BindingInterface } = {}

  /**
   * @prop {Array<ProviderInterface>}
   */
  protected _providers: Array<ProviderInterface> = []

  public instance (key: string, value: any): this {
    this._bindings[key] = new Binding(value)
    return this
  }

  public singleton (key: string, resolver: ResolverInterface): this {
    this._bindings[key] = new Binding(null, resolver)
    return this
  }

  public binding (key: string, resolver: ResolverInterface): this {
    this._bindings[key] = new Binding(null, resolver, true)
    return this
  }

  public make (key: string): any {
    if (this._bindings[key] !== undefined) {
      return this._bindings[key].resolve(this)
    }

    throw new BindingResolutionError(key)
  }

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit. Provider instances are stored for soft resets.
   *
   * @param  {ProviderInterface} provider
   * @return {this}
   */
  public provider (provider: ProviderInterface): this {
    this._providers.push(provider)

    provider.register(this)

    return this
  }

  /**
   * Reset the container so that existing bindings are removed and stored
   * providers are re-run. If a hard request is run, the both the bindings and
   * providers will be emptied.
   *
   * @param  {boolean} hard
   * @return {this}
   */
  public reset (hard: boolean = false): this {
    this._bindings = {}

    if (hard) {
      this._providers = []
    } else {
      this._providers.forEach(provider => provider.register(this))
    }

    return this
  }
}
