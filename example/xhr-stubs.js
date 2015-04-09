import Interceptor from 'xhr-interceptor'
import loremHipsum from 'lorem-hipsum'
import flatten from 'lodash-node/modern/array/flatten'
import range from 'lodash-node/modern/utility/range'
import random from 'lodash-node/modern/number/random'

const app = new Interceptor

app.get('/api/v1/courses/:course_id/modules', (req, res) => {
  // TODO: check for include[]=items,content_details

  const courseId = 1

  const modules = range(0, 5).map(() => {
    const moduleId = Math.random()
    const moduleHref = `https://myschool.instructure.com/courses/${courseId}/modules/${moduleId}`

    return {
      id: moduleId,
      href: moduleHref,
      title: loremHipsum({count: random(3, 10), units: 'words'}),
      items: range(0, 5).map(() => {
        let itemId = Math.random()
        return {
          id: itemId,
          moduleHref,
          href: `https://myschool.instructure.com/courses/${courseId}/modules/${moduleId}/items/${itemId}`,
          type: 'text/plain',
          points: random(0, 1) && random(1, 100), // half the time 0, otherwise from 1-100
          title: loremHipsum({count: random(3, 10), units: 'words'})
        }
      })
    }
  })

  res.json(modules)
})

