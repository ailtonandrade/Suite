import './style.css'
import {fb, db} from './js/firebaseConfiguration.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const authFs = getAuth(fb);
export {getAuth, signInWithEmailAndPassword, authFs, db}
