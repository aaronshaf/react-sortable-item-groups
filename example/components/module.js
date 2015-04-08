import React from 'react'
import Group from '../../group.es6'
import ModuleItem from './module-item'

class Module extends React.Component {
  render () {
    let items = this.props.items.map((item) => {
      return (
        <ModuleItem key={item.id} {...item} items={this.props.items} />
      )
    })

    return (
      <Group key={this.props.id} {...this.props}>
        {items}
      </Group>
    )
  }
}

export default Module
