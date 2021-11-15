import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {
  
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const bookmarks = props.bookmarks;
  
  // create state for form
  const [editForm, setEditForm] = useState({})
  // useEffect to set state to the existing bookmark, when the data is available
  useEffect(() => {
      if(props.bookmarks){
          const bookmark = bookmarks.find((b) => b._id === id);
          setEditForm(bookmark)
      }
  }, [props.bookmarks])
  
  if (props.bookmarks) {
    // grab the target from the bookmarks array
    const bookmark = bookmarks.find((b) => b._id === id);

    // handleChange function for form
    const handleChange = (event) => {
      const newState = {...editForm}
      newState[event.target.name] = event.target.value
      setEditForm(newState)
    }

    // handleSubmit for form
    const handleSubmit = (event) => {
      // prevent the refresh
      event.preventDefault()
      props.updateBookmark(editForm, bookmark._id)
      navigate("/")
    }

    const removeBookmark = () => {
      props.deleteBookmark(bookmark._id)
      navigate("/")
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editForm.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.url}
        name="url"
        placeholder="URL Link"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.description}
        name="description"
        placeholder="Describe the website!"
        onChange={handleChange}
      />
      <input type="submit" value="Update" />
    </form>
  );

    return (
      <div className="bookmark-show">
        <a href={bookmark.url} target="_blank">
          <h1>{bookmark.title}</h1>
        </a>
        <h3>{bookmark.description}</h3>
        {form}
        <div className="btn-container">
          <button onClick={removeBookmark}>Delete Bookmark</button>
        </div>
      </div>
    );
  } else {
    return <h1>No Bookmark...</h1>;
  }
};

export default Show;