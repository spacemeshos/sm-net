# sm-net
Spacemesh devnets and testnets community releases

## Publishing new network release

To publish a new network release you need to update `release.json`
and merge pull request into the `main` branch. Github Actions
workflow will automatically create a tag and release notes.

You can release only one network per pull request.

### [release.json](./release.json)
- `net-id` — network id
- `config` — URL