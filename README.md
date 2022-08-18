# sm-net
Spacemesh devnets and testnets community releases

## Publishing new network release

To publish a new network release you need to
1. update `release.json`
2. open a pull request and wait for checks
3. create a tag that equals to Network Id
   
   `prepublish.yml` workflow should create a release draft
4. check the draft
5. merge PR
6. publish the release

You can release only one network per tag.

### [release.json](./release.json)

Required fields:
- `id: number` — network id
- `name: string` — visible name
- `description: string` — first row in the release notes
- `versions: {`
  - `go-spacemesh: string`,
  - `smrepl: string`,
  - `smapp: string`
  `}`
