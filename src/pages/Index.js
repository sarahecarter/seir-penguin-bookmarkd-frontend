import { useState } from "react";
import { Link } from "react-router-dom";

const Index = (props) => {
  // state to hold form data 
  const [newForm, setNewForm] = useState({
    title: "",
    url: "", 
    description: ""
  })

  // handleChange function for form inputs
  const handleChange = (event) => {
    // make a copy of state
    const newState = {...newForm}
    // update the newState
    newState[event.target.name] = event.target.value
    // update the state
    setNewForm(newState)
  }

  // handleSubmit function for form 
  const handleSubmit = (event) => {
    // prevent the page from default refreshing
    event.preventDefault()
    // pass the form data to the createBookmark function
    props.createBookmark(newForm)
    // reset the form to empty 
    setNewForm({
      title: "",
      url: "",
      description: ""
    })
  }

  // form JSX
  const form = (
    <form onSubmit={handleSubmit}>
      <legend>Save new bookmark:</legend>
      <input 
        type="text"
        value={newForm.title}
        name="title"
        placeholder="Site Name"
        onChange={handleChange}
      />
      <input 
        type="text"
        value={newForm.url}
        name="url"
        placeholder="Link"
        onChange={handleChange}
      />
      <input 
        type="text"
        value={newForm.description}
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input type="submit" value="Save Bookmark" />
    </form>
  )

  if (props.bookmarks) {
    return (
      <section>
        {form}
        {props.bookmarks.map((bookmark) => {
          return (<div key={bookmark._id} className="bookmark">
            <Link to={`/bookmark/${bookmark._id}`}>
              <h1>{bookmark.title}</h1>
            </Link>
            <a href={bookmark.url}>Go to site</a>
          </div>)
        })}
      </section>
    )
  }
  else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
}

export default Index;