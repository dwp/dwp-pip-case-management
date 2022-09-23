const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/filter-cases', function(req, res) {
    if (req.body['filter-cases'] === 'caseload') {
      res.redirect('choose-caseload');
    } else if (req.body['filter-cases'] === 'status') {
      res.redirect('choose-status');
    }
  });

module.exports = router
