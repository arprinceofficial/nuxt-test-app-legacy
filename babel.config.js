module.exports = {
    presets: [
        ['@vue/app', {
            polyfills: [
                'es.promise',
                'es.symbol'
            ]
        }]
    ]
}