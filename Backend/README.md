# Github Bookmarks

Simple API for searching and bookmarking Github repositories.

### Overview

> The main goal is a small HTTP API that is being used by a React frontend.

### Example usage
* Search for repositories by keyword:

Read more about query parameters [here.](https://developer.github.com/v3/search/#search-repositories)

![](https://i.imgur.com/6cKlFJa.png)

* Add repositories to your bookmarks by repo's id:

![](https://i.imgur.com/Qs3UWsA.png)

![](https://i.imgur.com/ka0cg0w.png)

### Getting started

1. Download repository
2. Install dependencies:

```
yarn
# or
npm install
```

To start the app:
```
yarn dev
# or
npm dev
```

### Endpoints

#### GET
* bookmarks/
* search
#### POST
* bookmarks/:id
#### DELETE
* bookmarks/:id




