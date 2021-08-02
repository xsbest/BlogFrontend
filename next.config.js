// next.config.js
const withLess = require('next-with-less')

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@primary-color': '#f74a49',
        '@border-radius-base': '.5em',
      },
    },
  },
})
