import db from './models/index.mjs';

// import your controllers here
import initBugsController from './controllers/bugs.mjs';

const bugController = initBugsController(db);

export default function bindRoutes(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });
  app.post('/create', bugController.bugCreation);
}
