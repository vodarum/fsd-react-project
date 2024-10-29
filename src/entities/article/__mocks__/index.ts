import type { State } from '@/app/providers/store-provider';
import { mockUsers } from '@/entities/user/testing';
import { ArticleViewTypes } from '../model/const';
import type { Article, ArticleListState, ArticleState } from '../model/types';
import ImageJava from './java.jpg';
import ImageJS from './js.png';
import ImageJSCode from './js-code.png';
import ImagePHP from './php.png';
import ImageLoremIpsum from './lorem-ipsum.jpg';

const mockArticles: Article[] = [
    {
        id: 1,
        title: 'JS news',
        subtitle: 'Что нового в JS за 2024 год?',
        img: ImageJS,
        views: 1022,
        createdAt: '2024-09-24',
        userId: 1,
        user: mockUsers[0],
        type: ['IT'],
        blocks: [
            {
                id: 1,
                type: 'text',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: 4,
                type: 'code',
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id='hello'></p>\n\n    <script>\n      document.getElementById('hello').innerHTML = 'Hello, world!';\n    </script>\n  </body>\n</html>;",
            },
            {
                id: 5,
                type: 'text',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: 2,
                type: 'image',
                src: ImageJSCode,
                title: 'Рисунок 1 - скриншот сайта',
            },
            {
                id: 3,
                type: 'code',
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
            },
            {
                id: 7,
                type: 'text',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: 8,
                type: 'image',
                src: ImageJSCode,
                title: 'Рисунок 1 - скриншот сайта',
            },
            {
                id: 9,
                type: 'text',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'Java news',
        subtitle: 'Что нового в Java за 2024 год?',
        img: ImageJava,
        views: 1022,
        createdAt: '2024-09-24',
        userId: 2,
        user: mockUsers[1],
        type: ['IT'],
        blocks: [
            {
                id: 1,
                type: 'text',
                title: 'Cras luctus ipsum purus',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus at mauris eu luctus. Suspendisse pellentesque elit turpis, ultricies vulputate leo ultricies ut. Nulla dignissim varius sollicitudin. Mauris suscipit non felis in venenatis. Pellentesque ac orci in massa rutrum bibendum. In nibh leo, suscipit nec suscipit id, ullamcorper eu quam. Curabitur quis tempor lacus. Maecenas quam justo, imperdiet non massa pretium, lacinia porttitor lectus. Nulla id posuere felis. Nunc tellus lacus, fringilla quis leo sit amet, eleifend laoreet quam. Cras porttitor sodales enim, eget fermentum dolor ultrices vel. Aenean metus augue, maximus quis risus ut, placerat egestas sem. Ut posuere sed ante vitae condimentum. Cras nec purus eu odio imperdiet lacinia. Integer aliquet quam elit, in luctus sem vehicula sit amet. Suspendisse vel hendrerit ligula, sit amet fermentum ante.',
                    'Cras luctus ipsum purus, nec gravida urna semper auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis neque. Sed dapibus nisl vel dolor lacinia sodales. Praesent in tristique orci. Mauris at volutpat nulla. Praesent pretium id nulla et congue.',
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'PHP news',
        subtitle: 'Что нового в PHP за 2024 год?',
        img: ImagePHP,
        views: 1022,
        createdAt: '2024-09-24',
        userId: 3,
        user: mockUsers[2],
        type: ['IT'],
        blocks: [
            {
                id: 1,
                type: 'text',
                title: 'Cras luctus ipsum purus',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus at mauris eu luctus. Suspendisse pellentesque elit turpis, ultricies vulputate leo ultricies ut. Nulla dignissim varius sollicitudin. Mauris suscipit non felis in venenatis. Pellentesque ac orci in massa rutrum bibendum. In nibh leo, suscipit nec suscipit id, ullamcorper eu quam. Curabitur quis tempor lacus. Maecenas quam justo, imperdiet non massa pretium, lacinia porttitor lectus. Nulla id posuere felis. Nunc tellus lacus, fringilla quis leo sit amet, eleifend laoreet quam. Cras porttitor sodales enim, eget fermentum dolor ultrices vel. Aenean metus augue, maximus quis risus ut, placerat egestas sem. Ut posuere sed ante vitae condimentum. Cras nec purus eu odio imperdiet lacinia. Integer aliquet quam elit, in luctus sem vehicula sit amet. Suspendisse vel hendrerit ligula, sit amet fermentum ante.',
                    'Cras luctus ipsum purus, nec gravida urna semper auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis neque. Sed dapibus nisl vel dolor lacinia sodales. Praesent in tristique orci. Mauris at volutpat nulla. Praesent pretium id nulla et congue.',
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor sit amet',
        img: ImageLoremIpsum,
        views: 1954,
        createdAt: '2024-09-27',
        userId: 3,
        user: mockUsers[2],
        type: ['IT'],
        blocks: [
            {
                id: 1,
                type: 'text',
                title: 'Cras luctus ipsum purus',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus at mauris eu luctus. Suspendisse pellentesque elit turpis, ultricies vulputate leo ultricies ut. Nulla dignissim varius sollicitudin. Mauris suscipit non felis in venenatis. Pellentesque ac orci in massa rutrum bibendum. In nibh leo, suscipit nec suscipit id, ullamcorper eu quam. Curabitur quis tempor lacus. Maecenas quam justo, imperdiet non massa pretium, lacinia porttitor lectus. Nulla id posuere felis. Nunc tellus lacus, fringilla quis leo sit amet, eleifend laoreet quam. Cras porttitor sodales enim, eget fermentum dolor ultrices vel. Aenean metus augue, maximus quis risus ut, placerat egestas sem. Ut posuere sed ante vitae condimentum. Cras nec purus eu odio imperdiet lacinia. Integer aliquet quam elit, in luctus sem vehicula sit amet. Suspendisse vel hendrerit ligula, sit amet fermentum ante.',
                    'Cras luctus ipsum purus, nec gravida urna semper auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis neque. Sed dapibus nisl vel dolor lacinia sodales. Praesent in tristique orci. Mauris at volutpat nulla. Praesent pretium id nulla et congue.',
                ],
            },
        ],
    },
    {
        id: 5,
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor sit amet',
        img: ImageLoremIpsum,
        views: 1952,
        createdAt: '2024-09-27',
        userId: 3,
        user: mockUsers[2],
        type: ['IT'],
        blocks: [
            {
                id: 1,
                type: 'text',
                title: 'Cras luctus ipsum purus',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus at mauris eu luctus. Suspendisse pellentesque elit turpis, ultricies vulputate leo ultricies ut. Nulla dignissim varius sollicitudin. Mauris suscipit non felis in venenatis. Pellentesque ac orci in massa rutrum bibendum. In nibh leo, suscipit nec suscipit id, ullamcorper eu quam. Curabitur quis tempor lacus. Maecenas quam justo, imperdiet non massa pretium, lacinia porttitor lectus. Nulla id posuere felis. Nunc tellus lacus, fringilla quis leo sit amet, eleifend laoreet quam. Cras porttitor sodales enim, eget fermentum dolor ultrices vel. Aenean metus augue, maximus quis risus ut, placerat egestas sem. Ut posuere sed ante vitae condimentum. Cras nec purus eu odio imperdiet lacinia. Integer aliquet quam elit, in luctus sem vehicula sit amet. Suspendisse vel hendrerit ligula, sit amet fermentum ante.',
                    'Cras luctus ipsum purus, nec gravida urna semper auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis neque. Sed dapibus nisl vel dolor lacinia sodales. Praesent in tristique orci. Mauris at volutpat nulla. Praesent pretium id nulla et congue.',
                ],
            },
        ],
    },
    {
        id: 6,
        title: 'Lorem Ipsum',
        subtitle: 'Lorem ipsum dolor sit amet',
        img: ImageLoremIpsum,
        views: 1987,
        createdAt: '2024-09-28',
        userId: 3,
        user: mockUsers[2],
        type: ['IT'],
        blocks: [
            {
                id: 1,
                type: 'text',
                title: 'Cras luctus ipsum purus',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus at mauris eu luctus. Suspendisse pellentesque elit turpis, ultricies vulputate leo ultricies ut. Nulla dignissim varius sollicitudin. Mauris suscipit non felis in venenatis. Pellentesque ac orci in massa rutrum bibendum. In nibh leo, suscipit nec suscipit id, ullamcorper eu quam. Curabitur quis tempor lacus. Maecenas quam justo, imperdiet non massa pretium, lacinia porttitor lectus. Nulla id posuere felis. Nunc tellus lacus, fringilla quis leo sit amet, eleifend laoreet quam. Cras porttitor sodales enim, eget fermentum dolor ultrices vel. Aenean metus augue, maximus quis risus ut, placerat egestas sem. Ut posuere sed ante vitae condimentum. Cras nec purus eu odio imperdiet lacinia. Integer aliquet quam elit, in luctus sem vehicula sit amet. Suspendisse vel hendrerit ligula, sit amet fermentum ante.',
                    'Cras luctus ipsum purus, nec gravida urna semper auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis neque. Sed dapibus nisl vel dolor lacinia sodales. Praesent in tristique orci. Mauris at volutpat nulla. Praesent pretium id nulla et congue.',
                ],
            },
        ],
    },
];

const mockArticleState: ArticleState = {
    loading: false,
};

const mockArticleListEntityState: Pick<ArticleListState, 'entities' | 'ids'> = {
    ids: mockArticles.map((a) => a.id),
    entities: mockArticles.reduce(
        (accumulator, a) => ({ ...accumulator, [a.id]: a }),
        {},
    ),
};

const mockArticleListState: ArticleListState = {
    loading: false,
    view: ArticleViewTypes.grid,
    page: 1,
    hasMore: true,
    ids: [],
    entities: {},
    _inited: false,
};

const mockAppState: State = {
    article: mockArticleState,
    articleList: mockArticleListState,
} as State;

const mockInitialAppState: State = {} as State;

export {
    mockAppState,
    mockArticles,
    mockArticleListEntityState,
    mockArticleListState,
    mockArticleState,
    mockInitialAppState,
};
