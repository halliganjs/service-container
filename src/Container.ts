import { Binding } from './Binding'
import { BindingInterface } from './interfaces/Binding'
import { BindingResolutionError } from './errors/BindingResolutionError'
import { ContainerInterface } from './interfaces/Container'
import { ResolverInterface } from './interfaces/Resolver'

export class Container implements ContainerInterface {
  protected bindings: { [key: string]: BindingInterface } = {}

  public instance (key: string, value: any): this {
    this.bindings[key] = new Binding(value)
    return this
  }

  public singleton (key: string, resolver: ResolverInterface): this {
    this.bindings[key] = new Binding(null, resolver)
    return this
  }

  public binding (key: string, resolver: ResolverInterface): this {
    this.bindings[key] = new Binding(null, resolver, true)
    return this
  }

  public make (key: string): any {
    if (this.bindings[key] !== undefined) {
      return this.bindings[key].resolve(this)
    }

    throw new BindingResolutionError(key)
  }
}
