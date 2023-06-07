### Follow these steps for the release:

- Checkout main branch
- Run `npm run build` script and make sure there's no change to the `./build/index.js` file.
  - If there is any change to the build folder, create a PR against `develop` branch with the changes.
- Make sure that `package.json`'s `version` property is already updated with right version number for the upcoming release.
- Run `npm run pub` script
  - Navigate to npm page for the package ([link](https://www.npmjs.com/package/minimal-react-components)) and make sure the latest release gets reflected on npm registry.
- From the main branch, create a new tag for the release and push it to remote
  - `git tag v1.0.0`
  - `git push origin v1.0.0`
- Go to the repo home page and create a new release using latest tag.
