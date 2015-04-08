import React from 'react'
import SortableItem from 'react-sortable-item'
import loremHipsum from 'lorem-hipsum'
import random from 'lodash-node/modern/number/random'
import findIndex from 'lodash-node/modern/array/findIndex'
import range from 'lodash-node/modern/utility/range'
// import SortableItemGroup from '../index.es6'

import ItemGroup from './item-group.es6'

Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}

let ModuleItem = React.createClass({
  handleAcceptTest () {
    return true
  },

  handleDrop (event) {
    console.log(arguments)
    // var data = event.dataTransfer.getData('text/plain')
    //var origin = findIndex(modules, module => data === module.path)
  },

  render () {
    return (
      <SortableItem
          type={this.props.type}
          data={this.props.data}
          key={this.props.id}
          handleDrop={this.handleDrop}
          handleAcceptTest={this.handleAcceptTest}>
        <li className="ItemGroup-item">
          {this.props.title}
        </li>
      </SortableItem>
    )

  }
})

let modules = range(0, 5).map(() => {
  return {
    id: Math.random(),
    title: loremHipsum({count: random(3, 14), units: 'words'}),
    items: range(0, 5).map(() => {
      let id = Math.random()
      return {
        id,
        path: `${module}.${id}`,
        type: 'text/plain',
        title: loremHipsum({count: random(3, 14), units: 'words'})
      }
    })
  }
})

class Module extends React.Component {
  render () {
    let items = this.props.items.map((item) => {
      return (
        <ModuleItem key={item.id} {...item} />
      )
    })

    return (
      <ItemGroup key={this.props.id} {...this.props}>
        {items}
      </ItemGroup>
    )
  }
}

function update() {
  let moduleComponents = modules.map((module) => (
    <Module title="Test" key={module.id} {...module} />
  ))

  React.render(
    <div>
      <h1>react-sortable-item-group</h1>
      <ol className="ItemGroup-list">{moduleComponents}</ol>
    </div>,
    document.getElementById('example')
  )
}
update()
