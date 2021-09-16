const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');
const databaseURL = 'YOUR DATABASE URL'
const path = './your_data.json'
const appName = '[DEFAULT]';
const fs = require('fs');
 
firestoreService.initializeApp(serviceAccount, databaseURL, appName);
 
console.log('here we go......')

firestoreService
  .backup('uri')
  .then((data) => {
  
    fs.writeFile("headlines.json", JSON.stringify(data), function(err) {
      if (err) {console.log(err);}
    });

    try {
        
        if (fs.existsSync(path)) {
          console.log('looks like we made it :) ')
        }

    } catch(err) {console.error(err)}

  });