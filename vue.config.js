function toAliasObj(attrs) {
    var ret = {};
    for (var i = 0, len = attrs.length; i < len; i++) {
        ret[attrs[i]] = '@/' + attrs[i];
    }
    return ret;
}
const PORT = 1337
module.exports = {
    publicPath: './',
    assetsDir: "static",
    outputDir: "E:/GitHub/202103/templates",
    devServer: {
        disableHostCheck: false,
        host: "127.0.0.1",
        port: PORT,
        https: false,
        hotOnly: false,
        proxy: null
    },
    configureWebpack: {
        resolve: {
            alias: toAliasObj(['assets', 'components', 'views'])
        }
    }
}