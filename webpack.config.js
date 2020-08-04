const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
//将打包到js里的css文件进行一个拆分,单独提取css
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// 打包前先清空
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV == 'development'
const webpack = require('webpack')

const config = {
  target: 'web',
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'main.js', // 出口文件
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        include: /src/, // 只转化src目录下的js
        exclude: /node_modules/ //排除掉node_modules,优化打包速度

      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }) //从右向左解析
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.less$/,
        use: [
          'style-loader', //将js文件中的样式应用到dom中
          'css-loader', //将css编译到js文件中
          'less-loader' //将less编译成css
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|eot|ttf|woff)$/,
        use:[
          {
              loader: "url-loader",
              options: {
                  name: "[name].[hash:5].[ext]",
                  limit: 8192,
                  outputPath: "img",
                  esModule: false
              }
          }
        ]
      },
      // {
      //   test: /\.(htm|html)$/,
      //   use: 'html-withimg-loader'
      // } // 与html-webpack-plugin插件冲突
    ]
  },
  plugins: [
    // 判断当前环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"',
      }
    }),
    new HTMLPlugin({
      // 在src目录下创建一个index.html页面当做模板来用
      template: './src/index.html',
      // hash: true, // 会在打包好的bundle.js后面加上hash串
    }),
    new ExtractTextPlugin('css/style.css'), // 单独提取css
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(), // 打印更新的模块路径
    new webpack.HotModuleReplacementPlugin() // 热更新
  ],
  resolve: {
    // 别名
    alias: {
      pages:path.join(__dirname,'src/pages'),
      component:path.join(__dirname,'src/components'),
      common:path.join(__dirname,'src/common'),
      // actions:path.join(__dirname,'src/redux/actions'),
      // reducers:path.join(__dirname,'src/redux/reducers'),
    },
    // 省略后缀
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
}
}

// 当处于开发环境时，添加额外的devServer配置
if (isDev) {
  config.devtool = '#cheap-module-eval-source-map', // 选择一种 source map 格式来增强调试过程
  config.devtool = 'inline-source-map'//  转换为 DataUrl 后添加到 bundle 中
  config.devServer = {
    open: true, // 自动打开浏览器
    port: 8000,
    host: '0.0.0.0', // 既可以通过localhost，也可以通过内网ip（便于同局域网内的其他设备访问）
    overlay: {
      errors: true // 所有错误都显示到网页上
    },
    hot: true // 热更新
  }
}

module.exports = config