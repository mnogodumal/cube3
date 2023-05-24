# Начало работы

Перед началом работы сборки необходимо установить зависимости

    npm i

При это необходимы установленные Node.js и npm


# Структура

Найстройки webpack'a находятся в директории **build/**


# Команды сборки

Режим разработки **development**

    npm run dev

также нужно поменять значение свойства **output.publicPath** в файле **build/webpack.base.conf.js** на '/'

***

Сборка для **production**

    npm run build

также нужно поменять значение свойства **output.publicPath** в файле **build/webpack.base.conf.js** на './'



# Минификация файлов

## HTML

В файле **build/webpack.base.conf.js** в плагине ***HtmlWebpackPlugin*** свойство **minify.collapseWhitespace** установить **true** для минификации, и наоборот


## CSS

В файле **build/webpack.base.conf.js** в лоадере ***sass-loader*** свойство **options.outputStyle** установить **compressed** для минификации, и **uncompressed** что бы ее отключить. Так же в конфиге ***PostCSS*** (**postcss.config.js**) включить модуль **cssnano** для минификации и наоборот

#### Возможные ошибки

Если при сборке выходит ошибка об отсутствии свойства **options.outputStyle**, то необходимо откатить версию ***sass-loader*** до 7.1.0

команды

    npm uninstall --save-dev sass-loader
    npm install --save-dev sass-loader@7.1.0


## JS

В файле **build/webpack.base.conf.js** в свойство **optimization.minimize** установить **true** для минификации, и наоборот.

