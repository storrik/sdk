# Changelog

## 1.16.0 (2026-04-20)

Full Changelog: [v1.15.0...v1.16.0](https://github.com/storrik/sdk/compare/v1.15.0...v1.16.0)

### Features

* **api:** manual updates ([fab6acb](https://github.com/storrik/sdk/commit/fab6acbe1e8abd00374ebac3c2ba6ccb7800acea))

## 1.15.0 (2026-04-20)

Full Changelog: [v1.14.0...v1.15.0](https://github.com/storrik/sdk/compare/v1.14.0...v1.15.0)

### Features

* **api:** api update ([891158b](https://github.com/storrik/sdk/commit/891158b8b602e7107dd40640a144b709de902d82))

## 1.14.0 (2026-04-19)

Full Changelog: [v1.13.0...v1.14.0](https://github.com/storrik/sdk/compare/v1.13.0...v1.14.0)

### Features

* **api:** api update ([bbfb8f1](https://github.com/storrik/sdk/commit/bbfb8f111e7cece6498d91ee9c34cea895c50fca))

## 1.13.0 (2026-04-18)

Full Changelog: [v1.12.0...v1.13.0](https://github.com/storrik/sdk/compare/v1.12.0...v1.13.0)

### Features

* **api:** api update ([e6975a9](https://github.com/storrik/sdk/commit/e6975a90bee2cd6db762d24d55f3d15e68354f25))

## 1.12.0 (2026-04-17)

Full Changelog: [v1.11.1...v1.12.0](https://github.com/storrik/sdk/compare/v1.11.1...v1.12.0)

### Features

* **api:** manual updates ([efff8e9](https://github.com/storrik/sdk/commit/efff8e9970923729511d74af8f63400e232ed10f))

## 1.11.1 (2026-04-16)

Full Changelog: [v1.11.0...v1.11.1](https://github.com/storrik/sdk/compare/v1.11.0...v1.11.1)

### Chores

* update SDK settings ([b5f23ab](https://github.com/storrik/sdk/commit/b5f23ab8040ab6f1b597a111016ff36c325e8ee8))

## 1.11.0 (2026-04-16)

Full Changelog: [v1.10.0...v1.11.0](https://github.com/storrik/sdk/compare/v1.10.0...v1.11.0)

### Features

* **api:** api update ([abf2162](https://github.com/storrik/sdk/commit/abf2162debb428f95c8ec2f63fd585fed7b9ae4c))
* **api:** api update ([1943d70](https://github.com/storrik/sdk/commit/1943d702b5ba62f598d892720548878894d9affe))
* **api:** manual updates ([7ff4a42](https://github.com/storrik/sdk/commit/7ff4a42213b5562050d67e9005d8d93fc668d628))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([008a989](https://github.com/storrik/sdk/commit/008a9898d1c5a2f005fa2f7cee3df1729aa3c532))
* **client:** avoid removing abort listener too early ([6f8e62e](https://github.com/storrik/sdk/commit/6f8e62efa65b7de813a7d6bcb562d2c56875303a))
* **client:** preserve URL params already embedded in path ([b4c831e](https://github.com/storrik/sdk/commit/b4c831e44b695cdfe7a3a345d04311d0e85b3ec0))
* **docs/contributing:** correct pnpm link command ([fe40bab](https://github.com/storrik/sdk/commit/fe40bab625ca7eb2d65b44de51f9e74eeedd08f8))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([46a3aef](https://github.com/storrik/sdk/commit/46a3aef96927fafca2ed045a11902b37b94a2894))
* **ci:** upgrade `actions/github-script` ([cc0cdcb](https://github.com/storrik/sdk/commit/cc0cdcbc4ce1d1e5ed49a449ca4ce8b6543b2c5c))
* **client:** do not parse responses with empty content-length ([b9fbc6e](https://github.com/storrik/sdk/commit/b9fbc6e04eaf11d3bc6897dc3785daa73f549ce7))
* **client:** restructure abort controller binding ([f54d801](https://github.com/storrik/sdk/commit/f54d80150f71bc1c70ad91d2b673aa851d08a0b3))
* **internal/client:** fix form-urlencoded requests ([047c7f9](https://github.com/storrik/sdk/commit/047c7f921cfd2b0e6576c1cfaa50c8f73b9fdeda))
* **internal:** avoid type checking errors with ts-reset ([b9cb38d](https://github.com/storrik/sdk/commit/b9cb38d5a04c5cd54a1c03dda9f9eda2594963bc))
* **internal:** codegen related update ([136f329](https://github.com/storrik/sdk/commit/136f329ee5226d5b8f86bb173223712d49b3b853))
* **internal:** codegen related update ([99b8503](https://github.com/storrik/sdk/commit/99b8503b93d0fcdda2380a5f48fdcd6b603f1049))
* **internal:** move stringifyQuery implementation to internal function ([1790088](https://github.com/storrik/sdk/commit/17900886385b63f201bc4bc263f3dfb03d45ad6e))
* **internal:** remove mock server code ([0db8378](https://github.com/storrik/sdk/commit/0db8378b2d215d5ddbbc0708654fa2838e513123))
* **internal:** update `actions/checkout` version ([46f9912](https://github.com/storrik/sdk/commit/46f99120441059060aa7a06df1c7794cc7054a6c))
* **internal:** update dependencies to address dependabot vulnerabilities ([4218181](https://github.com/storrik/sdk/commit/4218181911e59e7ea9fe0409190380b0f6d59792))
* **internal:** update lock file ([6dc2cef](https://github.com/storrik/sdk/commit/6dc2cef3d0b09c4b141c12f66a8f29c36596b040))
* **internal:** upgrade babel, qs, js-yaml ([dc92877](https://github.com/storrik/sdk/commit/dc9287731b93ae297fd799843e30d9d4b9c63c0e))
* **internal:** upgrade brace-expansion and @babel/helpers ([95ff234](https://github.com/storrik/sdk/commit/95ff2349f35b990970ea007224fdf9736570d592))
* **internal:** upgrade pnpm ([4eafba3](https://github.com/storrik/sdk/commit/4eafba3ab540db32b55bfda225acfd23b840d043))
* **internal:** upgrade pnpm version ([9f68a93](https://github.com/storrik/sdk/commit/9f68a93b82368499fb695813cea2a46eb3e0a66c))
* update mock server docs ([61d8e14](https://github.com/storrik/sdk/commit/61d8e1470af5a466bacb6ca67d1eaac8a34e0fae))

## 1.10.0 (2026-01-14)

Full Changelog: [v1.9.0...v1.10.0](https://github.com/storrik/sdk/compare/v1.9.0...v1.10.0)

### Features

* **api:** manual updates ([0ba9d4f](https://github.com/storrik/sdk/commit/0ba9d4f42286834b9b48ea385df8d8f3225654dd))


### Chores

* update SDK settings ([6923326](https://github.com/storrik/sdk/commit/692332644852a8914d031935f357045ea2e40501))

## 1.9.0 (2026-01-14)

Full Changelog: [v1.8.0...v1.9.0](https://github.com/storrik/sdk/compare/v1.8.0...v1.9.0)

### Features

* **api:** manual updates ([fc56f60](https://github.com/storrik/sdk/commit/fc56f60aac29b64d987dcbc34fb32b260cb8d2a1))

## 1.8.0 (2026-01-14)

Full Changelog: [v1.7.0...v1.8.0](https://github.com/storrik/sdk/compare/v1.7.0...v1.8.0)

### Features

* **api:** manual updates ([30be31b](https://github.com/storrik/sdk/commit/30be31b0af97bfdd097cf472a4c329923de255af))

## 1.7.0 (2026-01-13)

Full Changelog: [v1.6.2...v1.7.0](https://github.com/storrik/sdk/compare/v1.6.2...v1.7.0)

### Features

* **api:** api update ([75044d1](https://github.com/storrik/sdk/commit/75044d1908bec4d3d6450921e1cc4229a17931e1))

## 1.6.2 (2026-01-07)

Full Changelog: [v1.6.1...v1.6.2](https://github.com/storrik/sdk/compare/v1.6.1...v1.6.2)

### Chores

* break long lines in snippets into multiline ([9d0af5c](https://github.com/storrik/sdk/commit/9d0af5c06c532c6adf6e4f58f18f88f78d92361f))
* **internal:** codegen related update ([e6f25f1](https://github.com/storrik/sdk/commit/e6f25f1bd7f6c6c251dd6cc8316b20965d2202c1))
* **internal:** codegen related update ([3012a07](https://github.com/storrik/sdk/commit/3012a0787764c91b7445b1b0c1c6e098857175b5))

## 1.6.1 (2025-12-06)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/storrik/sdk/compare/v1.6.0...v1.6.1)

### Bug Fixes

* **mcp:** correct code tool API endpoint ([0bc3808](https://github.com/storrik/sdk/commit/0bc3808b50fce5156adfe242df29b5bc2079927b))
* **mcp:** return correct lines on typescript errors ([cb8c873](https://github.com/storrik/sdk/commit/cb8c873c486d4589dd6152e321361f68e4488d51))


### Chores

* **client:** fix logger property type ([1b6ed31](https://github.com/storrik/sdk/commit/1b6ed31227b042941f1236da2a20ef18016a4052))
* **internal:** codegen related update ([8640b42](https://github.com/storrik/sdk/commit/8640b42b694c608f9469842758ae89b198a0aa34))
* **internal:** upgrade eslint ([0ceb7ca](https://github.com/storrik/sdk/commit/0ceb7ca4b4a5e6d9cafca22bc9cb6fb81850a62d))

## 1.6.0 (2025-11-26)

Full Changelog: [v1.5.0...v1.6.0](https://github.com/storrik/sdk/compare/v1.5.0...v1.6.0)

### Features

* **api:** manual updates ([55f54d4](https://github.com/storrik/sdk/commit/55f54d47dc89133bec3a0cc187ad8b8a61ed00ba))

## 1.5.0 (2025-11-26)

Full Changelog: [v1.4.0...v1.5.0](https://github.com/storrik/sdk/compare/v1.4.0...v1.5.0)

### Features

* **api:** manual updates ([868c322](https://github.com/storrik/sdk/commit/868c3228991726169644673bad0189f03a41fa2c))

## 1.4.0 (2025-11-26)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/storrik/sdk/compare/v1.3.0...v1.4.0)

### Features

* **api:** manual updates ([8cd6a81](https://github.com/storrik/sdk/commit/8cd6a819999a4d344127ff5c5288b0b2af062286))

## 1.3.0 (2025-11-06)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/storrik/sdk/compare/v1.2.0...v1.3.0)

### Features

* **api:** manual updates ([9baad14](https://github.com/storrik/sdk/commit/9baad145c8c1e1bb5b62ef571769494017e24213))
* **api:** manual updates ([d6464af](https://github.com/storrik/sdk/commit/d6464aff346a97972ab1a1947bf71f16c90ff1f5))

## 1.2.0 (2025-10-12)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/storrik/sdk/compare/v1.1.0...v1.2.0)

### Features

* **api:** manual updates ([c4d3894](https://github.com/storrik/sdk/commit/c4d3894b9f0aad346b9579caf503423bf70495fa))


### Chores

* **internal:** remove .eslintcache ([64abfd1](https://github.com/storrik/sdk/commit/64abfd1726ead9f327ce05da69d410866fe7efbf))
* **internal:** use npm pack for build uploads ([c832a27](https://github.com/storrik/sdk/commit/c832a27e3cc6ee5052d5c001f043e55d10f71556))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([d081ed6](https://github.com/storrik/sdk/commit/d081ed61d460b92f980167d6ace6b82bf0b4111c))

## 1.1.0 (2025-09-27)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/storrik/sdk/compare/v1.0.0...v1.1.0)

### Features

* **api:** manual updates ([0b45ecb](https://github.com/storrik/sdk/commit/0b45ecb116ab0bb8def2187d4a4521066db37b19))


### Performance Improvements

* faster formatting ([21ae414](https://github.com/storrik/sdk/commit/21ae414ec270c34d83e579d8246f28fe154a8e02))


### Chores

* **internal:** codegen related update ([614bccd](https://github.com/storrik/sdk/commit/614bccd34c0d4cc1d535334a039bbecd7a9e7dee))
* **internal:** fix incremental formatting in some cases ([7fd5ec9](https://github.com/storrik/sdk/commit/7fd5ec917871b576b197410c7148e4a16ed66795))
* **internal:** ignore .eslintcache ([908a232](https://github.com/storrik/sdk/commit/908a2328ddce39542f39bee10c27fd0e76f7a375))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([2493811](https://github.com/storrik/sdk/commit/24938113c6c2c11d9ab7cc97aa1a5f0a67d07ea2))

## 1.0.0 (2025-09-23)

Full Changelog: [v0.0.1-alpha.0...v1.0.0](https://github.com/storrik/sdk/compare/v0.0.1-alpha.0...v1.0.0)

### Features

* **api:** manual updates ([0e82ea2](https://github.com/storrik/sdk/commit/0e82ea223b7766d2a70f72faaaac1152f110f947))
* **api:** manual updates ([2206222](https://github.com/storrik/sdk/commit/2206222bafd68b24530d8dc87ee194101eca00ec))


### Chores

* **internal:** codegen related update ([7518b08](https://github.com/storrik/sdk/commit/7518b08269fc75a6043075e1dbaf60d71f9d101f))
* **internal:** remove redundant imports config ([f882b31](https://github.com/storrik/sdk/commit/f882b31f290c4ea93bf95dac0243765af251c6da))
* make some internal functions async ([ed6b6da](https://github.com/storrik/sdk/commit/ed6b6dab68dbbbd6b8310a53a180318b478478d2))
* **ts:** reorder package.json imports ([e9e9e7d](https://github.com/storrik/sdk/commit/e9e9e7d040cae0e2dc3562fe8d14da738c505e1e))
* update SDK settings ([ef8ce34](https://github.com/storrik/sdk/commit/ef8ce3463a2139230e0556d93d64c65d7e683e9e))
* update SDK settings ([3d9ba7f](https://github.com/storrik/sdk/commit/3d9ba7fe911e0fc0e72b80c7dc527e5cfb53d053))
