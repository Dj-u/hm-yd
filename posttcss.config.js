module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      // 因为是手机
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
