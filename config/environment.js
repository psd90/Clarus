'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'clarus',
    environment,
    firebase: {
      apiKey: 'AIzaSyCfIURukUI3lnk3UBXb4eUosOH4jcF9I4A',
      authDomain: 'clarustechtest.firebaseapp.com',
      databaseURL:
        'https://clarustechtest-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'clarustechtest',
      storageBucket: 'clarustechtest.appspot.com',
      messagingSenderId: '1085515312703',
      appId: '1:1085515312703:web:77af2978123a69b752528a',
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
