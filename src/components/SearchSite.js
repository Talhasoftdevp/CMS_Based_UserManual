import React from 'react'
import { navigate } from 'gatsby'

class SearchBar extends React.Component {
  state = {
    search_string: '',
  }

  handleChange = e => {
    this.setState({
      search_string: e.target.value,
    })
    navigate('/UserSearchResults', {
      state: { value: this.state.search_string },
    })
  }

  passSetState = () => {
    this.handleChange
  }

  render() {
    return (
      <input
        className="input"
        type="text"
        aria-label="Search"
        placeholder="Search Site..."
        value={this.state.search_string}
        onChange={this.handleChange}
      />
    )
  }
}
export default SearchBar
