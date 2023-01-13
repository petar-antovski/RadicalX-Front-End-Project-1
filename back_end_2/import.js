const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    
    var admin = require("firebase-admin");
    
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    
    console.log('Firebase Initialized');

    await firestoreService.restore('./newinternship.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();