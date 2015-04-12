import React from 'react'
import './xhr-stubs'
import ModuleActions from './actions/modules'
import Modules from './components/modules'

import '../style.css'
import './example.css'
import 'react-publish-toggle/style.css'

React.render(
  <div>
    <h1>react-sortable-item-group</h1>
    <Modules />
  </div>,
  document.getElementById('example')
)

ModuleActions.load()
