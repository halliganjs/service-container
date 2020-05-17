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
   * Resolve a value from the container by its key.
   *
   * @param  {any} key
   * @return {any}
   */
  make (key: any): any

  /**
   * Add a service provider into the container to register one or many bindings
   * as a unit. Provider functions are stored for soft resets.
   *
   * @param  {Provider} provider
   * @return {this}
   */
  provider (provider: Provider): this

  /**
   * Reset the container so that existing bindings are removed and stored
   * providers are re-run. If a hard request is run, the both the bindings and
   * providers will be emptied.
   *
   * @param  {boolean} hard
   * @return {this}
   */
  reset (hard: boolean): this

  /**
   * Retrieve the value of the bindings property.
   *
   * @return {BindingMapInterface}
   */
  getBindings (): BindingMapInterface

  /**
   * Retrieve the value of the providers property.
   *
   * @return {Array<Provider>}
   */
  getProviders (): Array<Provider>
}
