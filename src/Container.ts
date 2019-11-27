import { Binding } from './Binding'
import { BindingInterface } from './interfaces/BindingInterface'
import { BindingResolutionError } from './errors/BindingResolutionError'
import { ContainerInterface } from './interfaces/ContainerInterface'
import { Provider } from './types/Provider'
import { Resolver } from './types/Resolver'

export class Container implements ContainerInterface {
  /**
   * @var {{ [key: string]: BindingInterface }} _bindings
   */
  protected _bindings: { [key: string]: BindingInterface } = {}

  /**
   * @var {Array<Provider>} _providers
   */
  protected _providers: Array<Provider> = []

  /**
   * Bind a single instance or value into the container under the provided key.
   *
   * @param  {string} key
   * @param  {any}    value
   * @return {this}
   */
  public instance (key: string, value: any): this {
    this._bindings[key] = new Binding(value)
    return this
  }

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run once and the resulting value will be returned for all
   * subsequent resolutions.
   *
   * @param  {string}   key
   * @param  {Resolver} resolver
   * @return {this}
   */
  public singleton (key: string, resolver: Resolver): this {
    this._bindings[key] = new Binding(null, resolver)
    return this
  }

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run each time the key is resolved resulting in new
   * instances each resolution.
   *
   * @param  {string}   key
   * @param  {Resolver} resolver
   * @return {this}
   */
  public binding (key: string, resolver: Resolver): this {
    this._bindings[key] = new Binding(null, resolver, true)
    return this
  }

  /**
   * Resolve a value from the container by its key.
   *
   * @param  {string} key
   * @return {any}
   */
  public make (key: string): any {
    if (this._bindings[key] !== undefined) {
      return this._bindings[key].resolve(this)
    }

    throw new BindingResolutionError(key)
  }

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit. Provider functions are stored for soft resets.
   *
   * @param  {Provider} provider
   * @return {this}
   */
  public provider (provider: Provider): this {
    // Run the provider immediately
    provider(this)

    // Store the provider for use in resets
    this._providers.push(provider)

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
      this._providers.forEach(provider => provider(this))
    }

    return this
  }
}
