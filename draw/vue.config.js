const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    hot:true,
    // open:true,
    // host:'192.168.0.102',
    // port:8080
  }
})
