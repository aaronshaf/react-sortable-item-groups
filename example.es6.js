import React from 'react'
import SortableItem from 'react-sortable-item'
import loremHipsum from 'lorem-hipsum'
import range from 'lodash-node/modern/utility/range'
import random from 'lodash-node/modern/number/random'
// import casual from 'casual'
// import SortableItemGroup from '../index.es6'

let ItemGroup = React.createClass({
  getInitialState() {
    return {
      expanded: true
    }
  },

  handleExpandToggle() {
    this.setState({expanded: !this.state.expanded})
  },

  render() {
    let hasExpandedChildren = this.props.children && this.state.expanded

    return (
      <li className="ItemGroup-group">
        <div>
          <button onClick={this.handleExpandToggle}>▼</button>
          <div className="ItemGroup-title">{this.props.title}</div>
          {hasExpandedChildren && this.props.children}
        </div>
      </li>
    )
  }
})

let modules = range(0, 5).map(() => {
  return {
    id: Math.random(),
    title: loremHipsum({count: random(3, 14), units: 'words'}),
    items: range(0, 5).map(() => ({
      id: Math.random(),
      title: loremHipsum({count: random(3, 14), units: 'words'})
    }))
  }
}).map((module) => {
  let items = module.items.map((item) => {
    return (
      <li key={item.id}>
        {item.title}
      </li>
    )
  })

  return (
    <ItemGroup key={module.id} {...module}>
      <ol>
        {items}
      </ol>
    </ItemGroup>
  )
})

function update() {
  React.render(
    <div>
      <h1>react-sortable-item-group</h1>
      <ol>{modules}</ol>
    </div>,
    document.getElementById('example')
  )
}
update()
