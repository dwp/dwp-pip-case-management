const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Route for filtering case by status or case manager

router.post('/filter-cases', function(req, res) {
    if (req.body['filter-cases'] === 'caseload') {
      res.redirect('choose-caseload');
    } else if (req.body['filter-cases'] === 'status') {
      res.redirect('choose-status');
    }
  });

  // Route for assigning cases or creating a new caseload

  router.post('/assign-cases', function(req, res) {
    if (req.body['case-manager'] === 'Jack Barnes') {
      res.redirect('case-assigned-confirm');
    } if (req.body['case-manager'] === 'create-caseload') {
      res.redirect('create-new-caseload');
    }
  });

module.exports = router
