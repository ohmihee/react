const path = require('path')
const webpackplugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
// import webpack from webpack  => 여기는 nodejs 공간이므로  js구문인 import 불가
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    name:'algml',
    mode:'development', //production
    devtool:'eval',  //hidden-source-map

    resolve:{
        extensions:['.js','.jsx']// 여러개의 확장명을 알아보기 위해 배열로
        // 배열 즉 복수로 받는 애들은 거의 대부분 끝에 s를 주어 복수형으로
    },
    // 입력받을 내용들
    entry:{
        app:['./index.jsx']
    },


// json형태이므로 ,는 반드시

    module:{// rules의 첫번재 인자값에는 babel에 대한 것
            // 듀번째 인자에는 css 등에 관한 것
        rules:[{ // 배열안에 객체가 들어간 상태
             test:/\.jsx?$/,    // jsx인지 아닌지 확인
             loader:'babel-loader',  // webpack과 babel을 이어주는 역할
             options:{
                 presets:[
                     ['@babel/preset-env',{
                         targets:{
                             browsers:['> 5% in KR','last 2 chrome versions']
                         },
                         debug:true,

                     }],
                     '@babel/preset-react',
                 ],
                 plugins:[
                     'react-refresh/babel',
                 ]
             }
        },{
            test:/\.css$/,   // webpack이 css파일을 읽을 수 있도록
            use:[MiniCssExtractPlugin.loader,"css-loader"]// style-loader먼저 주고, 그 뒤에 style-loader를 주어야 한다.
        }]// 배열안에 객체 형태로
    },
    plugins:[
        new webpackplugin(),
        new webpack.LoaderOptionsPlugin({debug:true}),
        new MiniCssExtractPlugin({filename:'app.css'})
    ],
    // 내보낼 내용들
    output:{
        path:path.join(__dirname,'dist'), // 현재 디렉토리 + dist까지
        filename:'app.js',
        publicPath:'/dist'
    },
    devServer:{
        publicPath:'/dist',
        hot:true,

    }
}