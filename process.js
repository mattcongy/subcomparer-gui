const {
  dialog
} = require('electron').remote;


document.querySelector('#selectInputButton').addEventListener('click', function(event) {
  dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections']
  }, function(files) {
    if (files !== undefined) {
      document.querySelector('#sourcePathArea').innerHTML = files
    }
  });

});


/* Functions */
