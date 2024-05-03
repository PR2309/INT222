import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { provideHttpClient, withFetch } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(),provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'myreader-e432b',
          appId: '1:969894711811:web:0454c4f274165d78eb7436',
          storageBucket: 'myreader-e432b.appspot.com',
          apiKey: 'AIzaSyC0BQ94f6bmz0vA8gkha9OVP5N0YPVRDHc',
          authDomain: 'myreader-e432b.firebaseapp.com',
          messagingSenderId: '969894711811',
          measurementId: 'G-EWNQBHC5Y8',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"myreader-e432b","appId":"1:969894711811:web:0454c4f274165d78eb7436","storageBucket":"myreader-e432b.appspot.com","apiKey":"AIzaSyC0BQ94f6bmz0vA8gkha9OVP5N0YPVRDHc","authDomain":"myreader-e432b.firebaseapp.com","messagingSenderId":"969894711811","measurementId":"G-EWNQBHC5Y8"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"myreader-e432b","appId":"1:969894711811:web:0454c4f274165d78eb7436","storageBucket":"myreader-e432b.appspot.com","apiKey":"AIzaSyC0BQ94f6bmz0vA8gkha9OVP5N0YPVRDHc","authDomain":"myreader-e432b.firebaseapp.com","messagingSenderId":"969894711811","measurementId":"G-EWNQBHC5Y8"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"myreader-e432b","appId":"1:969894711811:web:0454c4f274165d78eb7436","storageBucket":"myreader-e432b.appspot.com","apiKey":"AIzaSyC0BQ94f6bmz0vA8gkha9OVP5N0YPVRDHc","authDomain":"myreader-e432b.firebaseapp.com","messagingSenderId":"969894711811","measurementId":"G-EWNQBHC5Y8"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
