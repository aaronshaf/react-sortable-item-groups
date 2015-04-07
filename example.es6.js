import React from 'react'
import SortableItem from 'react-sortable-item'
import loremHipsum from 'lorem-hipsum'
import range from 'lodash-node/modern/utility/range'
import random from 'lodash-node/modern/number/random'
// import casual from 'casual'
// import SortableItemGroup from '../index.es6'

let ItemGroup = React.createClass({
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
    let hasExpandedChildren = this.props.children && this.state.expanded

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

let ModuleItem = React.createClass({
  handleAcceptTest () {
    return true
  },

  handleDrop () {
    console.log('dropped')
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
}).map((module) => {
  let items = module.items.map((item) => {
    return (
      <ModuleItem key={item.id} {...item} />
    )
  })

  return (
    <ItemGroup key={module.id} {...module}>
      <ol className="ItemGroup-itemlist">
        {items}
      </ol>
    </ItemGroup>
  )
})

function update() {
  React.render(
    <div>
      <h1>react-sortable-item-group</h1>
      <ol className="ItemGroup-list">{modules}</ol>
    </div>,
    document.getElementById('example')
  )
}
update()
