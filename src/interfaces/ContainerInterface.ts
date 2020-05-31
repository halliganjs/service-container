import { BindingMapInterface } from './BindingMapInterface'
import { Provider } from '../types/Provider'
import { Resolver } from '../types/Resolver'

export interface ContainerInterface {
  /**
   * Bind a single instance or value into the container under the provided key.
   *
   * @param  {any} key
   * @param  {any} value
   * @return {this}
   */
  instance (key: any, value: any): this

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run once and the resulting value will be returned for all
   * subsequent resolutions.
   *
   * @param  {any}      key
   * @param  {Resolver} resolver
   * @return {this}
   */
  singleton (key: any, resolver: Resolver): this

  /**
   * Bind a resolver function into the container under the provided key. The
   * resolver will be run each time the key is resolved resulting in new
   * instances each resolution.
   *
   * @param  {any}      key
   * @param  {Resolver} resolver
   * @return {this}
   */
  binding (key: any, resolver: Resolver): this

  /**
   * Bind a fake value into the container for the provided key. When the key is
   * requested, the fake will be provided until reset() is called.
   *
   * @param  {any} key
   * @param  {any} value
   * @return {this}
   */
  fake (key: any, value: any): this

  /**
   * Alias method for fake().
   *
   * @param  {any} key
   * @param  {any} value
   * @return {this}
   */
  fakeInstance (key: any, value: any): this

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
  fakeSingleton (key: any, resolver: Resolver): this

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
  fakeBinding (key: any, resolver: Resolver): this

  /**
   * Resolve a value from the container by its key.
   *
   * @param  {any} key
   * @return {any}
   */
  make (key: any): any

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit.
   *
   * @param  {Provider} provider
   * @return {this}
   */
  provider (provider: Provider): this

  /**
   * Reset the container so that all fake bindings are removed and all original
   * bindings will be used when requested. If a hard request is run, then both
   * the fakes and the bindings will be cleared.
   *
   * @param  {boolean} hard
   * @return {this}
   */
  reset (hard: boolean): this
}
