import './style.css'
import {fb, db} from './js/firebaseConfiguration.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { sdb } from './js/configuration.js';
const authFs = getAuth(fb);
export {sdb, getAuth, signInWithEmailAndPassword, authFs, db}
