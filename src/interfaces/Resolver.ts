import { ContainerInterface } from './Container'

export interface ResolverInterface {
  (container: ContainerInterface): any
}
