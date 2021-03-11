import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
	// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	// measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

	apiKey: 'AIzaSyCG-fesVOHPhdBusMPD8_H511OBOegxuBc',
	authDomain: 'itscarlosecp-dev-fs.firebaseapp.com',
	projectId: 'itscarlosecp-dev-fs',
	storageBucket: 'itscarlosecp-dev-fs.appspot.com',
	messagingSenderId: '188930368253',
	appId: '1:188930368253:web:19921d3a3673d7f4539494',
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export const analytics = firebase.analytics
export const firestore = firebase.firestore()
