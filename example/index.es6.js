import React from 'react'
import './xhr-stubs'
import ModuleActions from './actions/modules'
import Modules from './components/modules'

React.render(
  <div>
    <h1>react-sortable-item-group</h1>
    <Modules />
  </div>,
  document.getElementById('example')
)

ModuleActions.load()
