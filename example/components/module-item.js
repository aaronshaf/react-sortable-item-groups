import React from 'react'
import ModuleItemActions from '../actions/module-item'
import Item from '../../item.es6'
import findIndex from 'lodash-node/modern/array/findIndex'
import PublishButton from './publish-button'
import SettingsButton from './settings-button'
import classSet from 'class-set'

Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}

let ModuleItem = React.createClass({
  getInitialState () {
    return {
      dragging: false
    }
  },

  handleAcceptTest () {
    return true
  },

  handleDrop (dropTarget, position, event) {
    // Mutating props and then doing forceUpdate is bad and temporary
    let items = this.props.items
    ModuleItemActions.drop(dropTarget, position, event)
  },

  handleDragStart (event) {
    setTimeout(() => {
      this.setState({
        dragging: true
      })
    }, 20)
  },

  handleDragEnd (event) {
    setTimeout(() => {
      this.setState({
        dragging: false
      })
    }, 20)
  },

  render () {
    const moduleItemClasses = classSet('ModuleItem', {
      'ModuleItem--dragging': this.state.dragging
    })

    return (
      <Item
          className="test"
          type={this.props.type}
          data={this.props.href}
          key={this.props.id}
          handleDrop={this.handleDrop}
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
          handleAcceptTest={this.handleAcceptTest}>
        <div className={moduleItemClasses}>
          <div className='ModuleItem__title'>
            {this.props.title}
          </div>
          <div className='ModuleItem__availability'>
            {this.props.availabilityDate}
          </div>
          <div className='ModuleItem__due-date'>
            {this.props.dueDate}
          </div>
          <div className='ModuleItem__points'>
          {this.props.points ? `${this.props.points} pts` : ''}
          </div>
          <div className='ModuleItem__published'>
            <PublishButton />
          </div>
          <div className='ModuleItem__admin'>
            <SettingsButton />
          </div>
        </div>
      </Item>
    )
  }
})

export default ModuleItem
