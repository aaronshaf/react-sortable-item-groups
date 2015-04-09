import React from 'react'
import ModuleItemActions from '../actions/module-item'
import Item from '../../item.es6'
import findIndex from 'lodash-node/modern/array/findIndex'

Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}

let ModuleItem = React.createClass({
  handleAcceptTest () {
    return true
  },

  handleDrop (dropTarget, position, event) {
    // Mutating props and then doing forceUpdate is bad and temporary
    let items = this.props.items
    console.log('handleDrop')
    ModuleItemActions.drop(dropTarget, position, event)
  },

  render () {
    return (
      <Item
          type={this.props.type}
          data={this.props.href}
          key={this.props.id}
          handleDrop={this.handleDrop}
          handleAcceptTest={this.handleAcceptTest}>
        {this.props.title}
      </Item>
    )
  }
})

export default ModuleItem
