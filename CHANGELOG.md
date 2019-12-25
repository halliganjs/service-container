# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `Binding` _abstract_ class with `BindingInterface`
- `ResolverBinding` _abstract_ class with `ResolverBindingInterface`
- `Instance` class with `InstanceInterface`
- `Singleton` class with `SingletonInterface`
- `Factory` class with `FactoryInterface`

### Changed
- Implemented subclasses for `Binding` class in `Container`

### Removed
- `Binding` class with `BindingInterface`

## [0.1.0]
### Added
- `BindingResolutionError` error class
- `Resolver` function type
- `Provider` function type
- `Binding` class with `BindingInterface`
- `Container` class with `ContainerInterface`

[Unreleased]: https://github.com/halliganjs/service-container/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/halliganjs/service-container/releases/tag/v0.1.0
