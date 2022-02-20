# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.2]
### Security
- Bump dependency `ajv` to 6.12.6
- Bump dependency `path-parse` to 1.0.7

## [1.1.1]
### Security
- Bump dependency `glob-parent` to 5.1.2
- Bump dependency `browserslist` to 4.16.6

## [1.1.0]
### Changed
- `make()` method in `Container` class - now supports a generic type to be used as the return type for type-hinting. _[TypeScript only]_

## [1.0.0]
### Removed
- `getBindings()` method from `Container` class
- `getFakes()` method from `Container` class
- `getValue()` method from `Binding` class
- `setValue()` method from `Binding` class
- `getResolver()` method from `ResolverBinding` class
- `hasResolved()` method from `ResolverBinding` class
- `setHasResolved()` method from `ResolverBinding` class

## [0.4.0]
### Added
- `fake()` method to `Container` class
- `fakeInstance()` method to the `Container` class
- `fakeSingleton()` method to the `Container` class
- `fakeBinding()` method to the `Container` class
- `getFakes()` method to the `Container` class
- `BindingResolutionErrorInterface` interface for the `BindingResolutionError` class

### Changed
- `make()` method in `Container` class - now returns a fake if found before a real binding
- `provider()` method in `Container` class - no longer stores providers
- `reset()` method in `Container` class - now clears all fakes by default, or all fakes and all real bindings if `hard` is passed as `true`
- `BindingResolutionError` class - implements `BindingResolutionErrorInterface` and supports generating messages specific to the type of key that is provided

### Removed
- `getProviders()` method from `Container` class

## [0.3.0]
### Added
- `BindingMap` class with `BindingMapInterface`

### Changed
- Replaced generic object with `BindingMap` for holding bindings in `Container`

## [0.2.1]
### Changed
- Bumped version of nested dependency `acorn` (Security patch)
- Bumped version of nested dependency `minimist` (Security patch)

## [0.2.0]
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

[Unreleased]: https://github.com/halliganjs/service-container/compare/v1.1.2...HEAD
[1.1.2]: https://github.com/halliganjs/service-container/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/halliganjs/service-container/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/halliganjs/service-container/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/halliganjs/service-container/compare/v0.4.0...v1.0.0
[0.4.0]: https://github.com/halliganjs/service-container/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/halliganjs/service-container/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/halliganjs/service-container/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/halliganjs/service-container/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/halliganjs/service-container/releases/tag/v0.1.0
