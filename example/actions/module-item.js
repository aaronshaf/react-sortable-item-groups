import Uniflow from 'uniflow'

var ModuleItemActions = Uniflow.createActions({
  drop(dropTargetHref, position, event) {
    const itemDroppedHref = event.dataTransfer.getData('text/plain')
    console.log({dropTarget, position, event, itemDropped})

    /*
    const origin = findIndex(items, item => data === item.href)
    const destination = findIndex(items, item => dropTargetHref === item.href)

    if(destination > origin) {
      items.move(origin, destination + position - 1)
    } else {
      items.move(origin, destination + position)
    }
    */

    if(1 /* Is the dropped item from this page? */) {
      // remove it from its list

      // move it to destination
    }

    // Is the dropped item from elsewhere?
  }
})

export default ModuleItemActions
