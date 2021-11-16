import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {

  // Initialize state to hold bookmarks
  const [bookmarks, setBookmarks] = useState(null);

  // API url 
  const URL = "https://bsm-penguin-bookmarkd-backend.herokuapp.com/bookmark/"

  // Function to call API
  const getBookmarks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmarks(data)
  }

  // Function to create new bookmarks 
  const createBookmark = async (newBookmark) => {
    // make post request 
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBookmark)
    })

    // make another call to API to update list of bookmarks
    getBookmarks()
  }

  // function to update a bookmark
  const updateBookmark = async (bookmark, id) => {
    // make the put request
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookmark)
    })
    // update the list of bookmarks
    getBookmarks()
  }

  // create a function to delete a bookmark
  const deleteBookmark = async (id) => {
    // make the delete request
    await fetch(URL + id, {
      method: "delete"
    })
    // update the list of Bookmarks
    getBookmarks()
  }

  // useEffect to make initial call for bookmark list 
  useEffect(() => getBookmarks(), [])

  return (
    <main>
      <Routes>
        <Route path="/" element={
        <Index bookmarks={bookmarks} createBookmark={createBookmark}/>
        }/>
        <Route path="/bookmark/:id" element={
        <Show bookmarks={bookmarks}
        updateBookmark={updateBookmark}
        deleteBookmark={deleteBookmark}/>
        }/>
      </Routes>
    </main>
  )
}

export default Main;