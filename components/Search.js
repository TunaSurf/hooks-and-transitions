const Search = props => {
  return (
    <input type="text" placeholder='search' onChange={props.searchPosts} />
  )
}

export default Search