const { resolve, join, relative } = require('path');
const { lstatSync, readdirSync, existsSync, mkdirSync } = require('fs');

const libs = [
'feature-home',
'feature-restaurant',
'feature-order',
'feature-profile', 
'feature-search']

function generateLib(lib) {
  const generatedDirPath = `libs/${lib}/src/lib/generated`;
  if (!existsSync(generatedDirPath)) {
    mkdirSync(generatedDirPath);
  }
  return {
    output: resolve(__dirname, `libs/${lib}/src/lib/generated/graphql.ts`),
    config: {
      documents: `./libs/${lib}/src/lib/graphql/**/*.graphql`,
      plugins: [
        'typescript-common',
        'typescript-client',
        'typescript-apollo-angular'
      ]
    }
  };
}

module.exports = {
  schema: "https://kmeal-api.herokuapp.com/v1alpha1/graphql",
  overwrite: true,
  generates: libs
    .map(generateLib)
    .reduce(
      (generates, lib) => ({
        ...generates,
        [lib.output]: lib.config
      }),
      {}
    )
};
