import React from 'react'
import UniflowComponent from 'uniflow-component'

import ModulesStore from '../stores/modules'
import Groups from '../../groups.es6'
import Module from './module'

class SubscribedModules extends React.Component {
  render () {
    return (
      <UniflowComponent storeState={ModulesStore}>
        <Modules />
      </UniflowComponent>
    )
  }
}

class Modules extends React.Component {
  render () {
    return <div>[Modules]</div>

    const moduleComponents = this.props.storeState.modules.map((module) => (
      <Module key={module.id} {...module} />
    ))

    return moduleComponents
  }
}

export default SubscribedModules
