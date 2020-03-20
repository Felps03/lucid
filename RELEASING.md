# Releasing Lucid UI

Lucid UI is released to NPM as a public module.

## Installation requirements

- `node@10.x.x`: You can use `nvm` or otherwise to manage node versions.
- `npm@>=6.0.0`: Use `npm i -g npm` to update your npm version.
- `git`: You probably already have this.

## Release requirements

- An authorized corporate npm account.
- `ssh` setup on GitHub. To check your credentials: `git remote -v`.

## Prerelease check

Before updating the documentation and releasing to npm, follow these steps:

1. `git pull origin master`: Ensure that `master` is clean and in sync with GitHub.
2. `npm install`: Ensure that you have the latest dependencies.
3. `npm run test`: Run the test suite--if you need to update the Jest snapshots: `npm run snapshot`.
4. `npm login`: Ensure that you're logged into npm.

## Update documentation

After ensuring the release is production-ready, determine a suitable version number based on the types of changes in the release.

We follow [semver](https://semver.org/), which prescribes that:

- `semver-major`: Breaking changes are "major" (the left-most number).
- `semver-minor`: Features are "minor" versions (the middle number).
- `semver-patch`: Fixes are a "patch" version (the right-most number).
- `semver-none`: Changes to documentation, or other changes that don't impact the api or consumers get a "none" label.

Document, stage and push the changes contained in the release:

1. `git log`. Find and add each merged pull request (PR) since the last release and add it to the changelog.
2. `CHANGELOG.md`: Add details about the release--each PR gets a GitHub PR label, semver label, and short description.
3. Update the value of the `"version"` field for Lucid UI in `package-json` and `package-lock.json`.
4. Commit the documentation and `package-` changes. For example: `git commit -a -m "release v5.4.0"`
5. Push the release to GitHub: `git push origin master`.

## Update version number

The recommended option is to update the version number using `npm version`:

1. Use `npm` to publish the new NPM version that matches the version number and type of change (major, minor or patch) in `package.json`--this process creates a tag automatically.

- `npm version major`
- `npm version minor`
- `npm version patch`

2. Push the changes and tags: `git push origin master --follow-tags`. Note that by default, the `git push` command doesn't transfer tags to remote serves.

Another option is to update the version number manually:

1. Create a tag: `git tag {version number}`. For example: `git tag v5.4.0`.
2. Push the tags. For example: `git push origin v5.4.0`.

## Publish Lucid UI to npm

1. Publish the new version to npm: `npm publish`.
