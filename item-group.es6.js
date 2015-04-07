import React from 'react'

const ItemGroup = React.createClass({
  displayName: 'ItemGroup',

  getInitialState() {
    return {
      expanded: true
    }
  },

  handleExpandToggle() {
    this.setState({expanded: !this.state.expanded})
  },

  render() {
    const hasExpandedChildren = this.props.children && this.state.expanded

    return (
      <li className="ItemGroup">
        <div className="ItemGroup-header">
          <button onClick={this.handleExpandToggle}>▼</button>
          <div className="ItemGroup-title">{this.props.title}</div>
        </div>
        {hasExpandedChildren && this.props.children}
      </li>
    )
  }
})

export default ItemGroup
