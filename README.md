# Bookmark'd Project
#### By Sarah Carter, Bijan Saniee, and Matthew Laude

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## COMPONENTS
- Header 
- Main
- Index
- Show

## REACT COMPONENT ARCHITECTURE
```
-> App
  -> Header
  -> Main |state: bookmarks|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: bookmarks, createBookmark|
      -> Route |path="/bookmarks/:id|
        -> Show |Props: bookmarks, updateBookmark, deleteBookmark|
```

## REACT ROUTER ROUTE TABLE
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all books (index)||
| / | Index | post | posting a new book (create) |
| /bookmark/:id | Show | put | updating a book (update) |
| /bookmark/:id | Show | delete | delete a book (destroy) |

## User Stories
As a user, I can see a list of all my bookmarks when I visit the page \
As a user, I can click on one of my bookmarks and have it take me to the linked website \
As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark \
As a user, I can delete a bookmark so I can keep my list relevant \
As a user, I can update a bookmark in case I made a typo or the URL changed

## Technologies
REACT, react-router-dom, Sass
