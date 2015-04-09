import Uniflow from 'uniflow'

var ModuleItemActions = Uniflow.createActions({
  drop(dropTarget, position, event) {
    const itemDropped = event.dataTransfer.getData('text/plain')
    console.log({dropTarget, position, event, itemDropped})

    /*
    const origin = findIndex(items, item => data === item.path)
    const destination = findIndex(items, item => dropPath === item.path)

    if(destination > origin) {
      items.move(origin, destination + position - 1)
    } else {
      items.move(origin, destination + position)
    }
    */
  }
})

export default ModuleItemActions
