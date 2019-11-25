import { ContainerInterface } from './Container'
import { ResolverInterface } from './Resolver'

export interface BindingInterface {
  getResolver (): ResolverInterface|null

  getValue (): any

  hasResolved (): boolean

  isFactory (): boolean

  resolve (container: ContainerInterface): any
}
