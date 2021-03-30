function toAliasObj(attrs) {
    var ret = {};
    for (var i = 0, len = attrs.length; i < len; i++) {
        ret[attrs[i]] = '@/' + attrs[i];
    }
    return ret;
}
const PORT = 1337
module.exports = {
    devServer: {
        port: PORT
    },
    configureWebpack: {
        resolve: {
            alias: toAliasObj(['assets', 'components', 'views'])
        }
    }
}