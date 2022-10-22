const RESOURCE_PATH = '/fruits'

// only for views which we only got four
// this is an object literal but you can also make a controller class and pass these functions as an argument and make a n object out of the class

const viewController = {
  index (req, res, next) {
    res.render('fruits/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('fruits/New')
  },
  edit (req, res, next) {
    res.render('fruits/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('fruits/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/${res.locals.data.fruit.id}`)
  }

}

module.exports = viewController
