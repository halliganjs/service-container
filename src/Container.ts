import { BindingMap } from './BindingMap'
import { BindingMapInterface } from './interfaces/BindingMapInterface'
import { BindingResolutionError } from './errors/BindingResolutionError'
import { ContainerInterface } from './interfaces/ContainerInterface'
import { Factory } from './bindings/Factory'
import { Instance } from './bindings/Instance'
import { Provider } from './types/Provider'
import { Resolver } from './types/Resolver'
import { Singleton } from './bindings/Singleton'

export class Container implements ContainerInterface {
  /**
   * @var {BindingMapInterface} _bindings
   */
  protected _bindings: BindingMapInterface = new BindingMap()

  /**
   * @var {Array<Provider>} _providers
   */
  protected _providers: Array<Provider> = []

  /**
   * Bind a single instance or value into the container under the provided key.
   *
   * @param  {any} key
   * @param  {any} value
   * @return {this}
   */
  public instance (key: any, value: any): this {
    this._bindings.set(key, new Instance(value))
    return this
  }

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run once and the resulting value will be returned for all
   * subsequent resolutions.
   *
   * @param  {any}      key
   * @param  {Resolver} resolver
   * @return {this}
   */
  public singleton (key: any, resolver: Resolver): this {
    this._bindings.set(key, new Singleton(resolver))
    return this
  }

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run each time the key is resolved resulting in new
   * instances each resolution.
   *
   * @param  {any}      key
   * @param  {Resolver} resolver
   * @return {this}
   */
  public binding (key: any, resolver: Resolver): this {
    this._bindings.set(key, new Factory(resolver))
    return this
  }

  /**
   * Resolve a value from the container by its key.
   *
   * @param  {any} key
   * @return {any}
   */
  public make (key: any): any {
    if (this._bindings.has(key)) {
      return this._bindings.get(key)!.resolve(this)
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
    this._bindings.clear()

    if (hard) {
      this._providers = []
    } else {
      this._providers.forEach(provider => provider(this))
    }

    return this
  }

  /**
   * Retrieve the value of the bindings property.
   *
   * @return {BindingMapInterface}
   */
  getBindings (): BindingMapInterface {
    return this._bindings
  }

  /**
   * Retrieve the value of the providers property.
   *
   * @return {Array<Provider>}
   */
  getProviders (): Array<Provider> {
    return this._providers
  }
}
