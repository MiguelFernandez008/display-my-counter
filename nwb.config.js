module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    rules: {
      'css': {
        modules: {
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }        
      }
    }
  }
}
