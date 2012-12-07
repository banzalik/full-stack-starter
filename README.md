Минимальный набор для использования БЭМ стека
================================================

### Использование

    › git clone git://github.com/banzalik/full-stack-starter.git myproject
    › cd myproject
    › make

После чего, заходим по ссылке [http://localhost:8080/pages/index/index.html](http://localhost:8080/pages/index/index.html).

Любые изменения в исходных кодах автоматически подтянутся при обновлении страницы в браузере.

### О файловой структуре

#### Папка blocks

Тут создаем блоки, их CSS, JS, IMG и BEMHTML шаблоны.

#### Папка pages

Тут создаем (описываем) страницы проекта в формате .bemjson.

Каждая страница должна находиться в отдельной директории.

Название директории, *.bemjson, *.css, *.js файлов, находящихся внутри папки, должны совпадать.

### Экспорт в нормальную структуру

Будет позже...

### Cloud9.io

Проект умеет работать на  Cloud9 IDE.

 * Делаем форк этого репозитория
 * Заходим в [Cloud9 IDE](http://c9.io) через свой проофль Github
 * Выбираем проект full-stack-starter
 * В консоле набираем 

      › make

 * Ждем пока не появится сообщение

      › info: Server is listening on port 8080. Point your browser to http://localhost:8080/

 * Переходим по ссылке `http://full-stack-starter.USERNAME.c9.io/pages/index/index.html`, где `USERNAME` - ваш логин

### Больше ссылок
 * Подробнее о БЭМ [bem.info](http://ru.bem.info).
 * Если надо проект с [блэкджеком и шлюхами](https://github.com/bem/full-stack-starter).