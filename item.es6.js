import React from 'react'
import SortableItem from 'react-sortable-item'
// import classSet from 'class-set'

const ItemGroupItem = React.createClass({
  displayName: 'ItemGroupItem',

  render() {
    return (
      <SortableItem
          type={this.props.type}
          data={this.props.data}
          handleDrop={this.props.handleDrop}
          handleAcceptTest={this.props.handleAcceptTest}>
        <li className="ItemGroup-item">
          {this.props.children}
        </li>
      </SortableItem>
    )
  }
})

export default ItemGroupItem
