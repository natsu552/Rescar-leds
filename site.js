import { db } from './firebase.js';
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function carregar(){
  const snap = await getDocs(collection(db,'produtos','led-rescar','items'));
  snap.forEach(p=>{
    // renderiza card com dados do banco
  });
}

carregar();