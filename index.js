const { errorMap } = require("gatsby-cli/lib/structured-errors/error-map");

const firebaseConfig = {
    apiKey: "AIzaSyBZeTNDAYqL4NvU4BEPA6_xIn1YK-j1gIw",
    authDomain: "deans-ecommerce.firebaseapp.com",
    projectId: "deans-ecommerce",
    storageBucket: "deans-ecommerce.appspot.com",
    messagingSenderId: "126114304821",
    appId: "1:126114304821:web:ed358cc1ea2ac27f2b727c",
    measurementId: "G-V0ZSM46TS5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  ///set up register function.
  function register(){
    email = document.getElementById('email').value
    password = document.getElementById('pass').value
    console.log(email, password)
  }

  function validate(){
    if(email.length < 6){
      alert('Please enter a valid email address')
    }
    else if(password.length < 6){
      alert('Please enter a password with at least 6 characters')
    }
    else{
      register()
    }
  }

  function validate_password(password){
    if(password.length < 6){
      alert('Please enter a password with at least 6 characters')
    }
  }

  function validate_field(field){
    if(field == null){
      return false
    }
    if(field.length <= 0){
      return false
    }
    return true
  }

  if(validate_field(email) == false || validate_field(password)== false){
    validate()
  }