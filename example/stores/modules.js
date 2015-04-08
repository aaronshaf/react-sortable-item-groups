import Uniflow from 'uniflow'
import ModulesActions from '../actions/modules'

const ModulesStore = Uniflow.createStore({
  state: {
    modules: []
  }
})

ModulesActions.on('modules-fetch-success', function (modules) {
  ModulesStore.setState({modules})
})

export default ModulesStore
