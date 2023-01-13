const {VacationGem} = require('../models/vacation.model');

// Test Route

module.exports.index = (req, res) => {
    res.json({message: "Hello this is working"});
}

// Get All

module.exports.allVacations = (req, res) => {
    VacationGem.find()
        .then((allVacations) => res.json(allVacations))
        .catch((err) => res.status(400).json(err))
}

// Get One

module.exports.oneVacation = (req, res) => {
    VacationGem.findOne({ _id: req.params.id })
      .then((oneVacation) => res.json(oneVacation))
      .catch((err) => res.status(400).json(err));
  };

// Create

module.exports.createVacation = (req, res) => {
    VacationGem.create(req.body)
    .then((newVacation) => res.json(newVacation))
    .catch((err) => res.status(400).json(err))
}

// Update

module.exports.updateVacation = (req, res) => {
    VacationGem.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true}
    )
        .then((updatedVaction) => res.json(updatedVaction))
        .catch((err) => res.status(400).json(err))
}

// Delete

module.exports.deleteVacation = (req, res) => {
    VacationGem.deleteOne({_id: req.params.id})
        .then((status) => res.json(status))
        .catch((err) => res.status(400).json(err))
}