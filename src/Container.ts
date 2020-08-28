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
   * @var {BindingMapInterface} _fakes
   */
  protected _fakes: BindingMapInterface = new BindingMap()

  /**
   * Retrieve the value of the bindings property.
   *
   * @return {BindingMapInterface}
   */
  public get bindings (): BindingMapInterface {
    return this._bindings
  }

  /**
   * Retrieve the value of the fakes property.
   *
   * @return {BindingMapInterface}
   */
  public get fakes (): BindingMapInterface {
    return this._fakes
  }

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
   * Bind a fake value into the container for the provided key. When the key is
   * requested, the fake will be provided until reset() is called.
   *
   * @param  {any} key
   * @param  {any} value
   * @return {this}
   */
  public fake (key: any, value: any): this {
    this._fakes.set(key, new Instance(value))
    return this
  }

  /**
   * Alias method for fake().
   *
   * @param  {any} key
   * @param  {any} value
   * @return {this}
   */
  public fakeInstance (key: any, value: any): this {
    return this.fake(key, value)
  }

  /**
   * Bind a fake resolver function into the container under the provided key.
   * The resolver will be run once and the resulting value will be returned for
   * all subsequent resolutions of the key until reset() is called and the
   * original resolver will be used again.
   *
   * @param  {any}      key
   * @param  {Resolver} resolver
   * @return {this}
   */
  public fakeSingleton (key: any, resolver: Resolver): this {
    this._fakes.set(key, new Singleton(resolver))
    return this
  }

  /**
   * Bind a fake resolver function into the container under the provided key.
   * The resolver will be run each time the key is resolved resulting in new
   * instances each resolution of the key until reset() is called and the
   * original resolver will be used again.
   *
   * @param  {any}      key
   * @param  {Resolver} resolver
   * @return {this}
   */
  public fakeBinding (key: any, resolver: Resolver): this {
    this._fakes.set(key, new Factory(resolver))
    return this
  }

  /**
   * Resolve a value from the container by its key.
   *
   * @param  {any} key
   * @return {any}
   */
  public make <T = any> (key: any): T {
    // First check if there is a fake registered
    if (this._fakes.has(key)) {
      return this._fakes.get(key)!.resolve(this)
    }

    // Second check if a standard binding is registered
    if (this._bindings.has(key)) {
      return this._bindings.get(key)!.resolve(this)
    }

    // Nothing found, throw an error
    throw new BindingResolutionError(key)
  }

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit.
   *
   * @param  {Provider} provider
   * @return {this}
   */
  public provider (provider: Provider): this {
    // Run the provider immediately
    provider(this)

    return this
  }

  /**
   * Reset the container so that all fake bindings are removed and all original
   * bindings will be used when requested. If a hard request is run, then both
   * the fakes and the bindings will be cleared.
   *
   * @param  {boolean} hard
   * @return {this}
   */
  public reset (hard: boolean = false): this {
    this._fakes.clear()

    if (hard) {
      this._bindings.clear()
    }

    return this
  }
}
