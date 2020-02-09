import React, { useState } from "react"
import ReactDOM from "react-dom"


function Search() {
  const [tags, setTags] = useState([])
  const [query, setQuery] = useState("")

  const handleClick = () => {
    setTags(tags => tags.concat(query))
  }

  const updateQuery = ({ target }) => {
    setQuery(target.value)
  }

  const removeTag = tag => {
    var array = tags;
    var index = array.indexOf(tag.target.innerText)
    if (index !== -1) {
      array.splice(index, 1);
      setTags(array);
    }
  }

  const keyPressed = ({ key }) => {
    if (key === ",") {
      handleClick()
    }
  }



  const Tag = ({ query }) => <button onClick={removeTag}> <li>{query}</li> </button>
  return (
    <div>
      <input type="text" id="searchBox" onChange={updateQuery} onKeyPress={keyPressed} placeholder="Filter tasks, separate tags with commas..."></input>
      <ul id="tagsList" className="previousSearch">
        {tags.map((query, i) => (
          <Tag
            query={query}
            key={query + i}
          />

        ))}
      </ul>
    </div>
  );
}

export default Search
