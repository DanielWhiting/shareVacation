const VacationController = require('../controllers/vacation.controller');

module.exports = (app) => {
    app.get('/api', VacationController.index);
    app.get('/api/vacations', VacationController.allVacations);
    app.post('/api/vacations', VacationController.createVacation);
    app.get('/api/vacations/:id', VacationController.oneVacation);
    app.put('/api/vacations/:id', VacationController.updateVacation);
    app.delete('/api/vacations/:id', VacationController.deleteVacation);
}