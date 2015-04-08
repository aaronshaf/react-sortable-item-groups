import React from 'react'
import Item from '../../item.es6'
import findIndex from 'lodash-node/modern/array/findIndex'

Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}

let ModuleItem = React.createClass({
  handleAcceptTest () {
    return true
  },

  handleDrop (dropPath, position, event) {
    // Mutating props and then doing forceUpdate is bad and temporary
    let items = this.props.items

    const data = event.dataTransfer.getData('text/plain')
    const origin = findIndex(items, item => data === item.path)
    const destination = findIndex(items, item => dropPath === item.path)
    if(destination > origin) {
      items.move(origin, destination + position - 1)
    } else {
      items.move(origin, destination + position)
    }
    update()
    this.forceUpdate()
  },

  render () {
    return (
      <Item
          type={this.props.type}
          data={this.props.path}
          key={this.props.id}
          handleDrop={this.handleDrop}
          handleAcceptTest={this.handleAcceptTest}>
        {this.props.title}
      </Item>
    )
  }
})
