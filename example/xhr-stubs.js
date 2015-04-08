import Interceptor from 'xhr-interceptor'
import loremHipsum from 'lorem-hipsum'
import flatten from 'lodash-node/modern/array/flatten'
import range from 'lodash-node/modern/utility/range'
import random from 'lodash-node/modern/number/random'

const app = new Interceptor

app.get('/api/v1/courses/:course_id/modules', (req, res) => {
  // TODO: check for include[]=items,content_details

  const modules = range(0, 5).map(() => {
    return {
      id: Math.random(),
      title: loremHipsum({count: random(3, 14), units: 'words'}),
      items: range(0, 5).map(() => {
        let id = Math.random()
        return {
          id,
          path: `item.${id}`,
          type: 'text/plain',
          title: loremHipsum({count: random(3, 14), units: 'words'})
        }
      })
    }
  })

  res.json(modules)
})

