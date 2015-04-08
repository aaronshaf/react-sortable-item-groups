import React from 'react'

const Groups = React.createClass({
  displayName: 'Groups',

  render() {
    return (
      <li className="ItemGroup-item">
        {this.props.children}
      </li>
    )
  }
})

export default Groups
