# NelJS

## Todo

- App.js van naam veranderen
  - app.css uiteraard ook dan
- beslissen welke database er gebruikt zal worden
- beslissen welke icoontjes ik ga gebruiken --> liefst zelf gemaakte misschien? --> andere icoontjes werken wel gwn
- basic look en componenten maken voor de NelWeb
  - font kiezen
  - kleuren kiezen
  - DONE navigation maken
    - DONE nav api maken
  - css style maken 
- manifest deftig invullen (https://developers.google.com/web/fundamentals/web-app-manifest/)
  - html metatags nakijken en deftig invullen
- react dom routing --> deftig configuren

## Ideetje

- api = backend
  - NelNet
- database gebruiken? --> ja
- font awesome icoontjes gebruiken? --> misschien is kijken naar andere icoontjes ook
- zelf icoontjes maken? --> als ik dit doe, bijhouden in database voor "makkelijk" gebruik --> Nee
- NelWeb is een soort hub
  - Successor van the_void
    - blog hierop verder zetten / opnieuw beginnen
      - file uploads?
      - personal blog en dev logs --> leuk voor tijdens het programmeren
        - devlog: project tags (zodat je kan filteren op project)
        - devlog: geschreven in markdown?
    - startpagina voor firefox --> links naar andere nuttige sites

## topologie

```
.
├── NelWeb/
│   ├── home
│   ├── firefox
│   ├── devlog/
│   │   └── :id
│   ├── blog/
│   │   └── :id
│   └── readme
└── NelNet/
    ├── nav [get]
    ├── devlog [GET]/
    │   ├── :id [GET]
    │   ├── add [POST]
    │   ├── remove [POST]
    │   └── tags [GET]/
    │       ├── :name [GET]
    │       ├── add [POST]
    │       └── remove [POST]
    └── blog [GET]/
        ├── :id [GET]
        ├── add [POST]
        └── remove [POST]
```