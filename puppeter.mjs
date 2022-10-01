
import{initializeApp} from 'firebase/app';
import { getFirestore, collection,doc, getDocs, setDoc, addDoc, updateDoc } from 'firebase/firestore/lite';
import * as puppeteer from 'puppeteer';
const test= async()=>{
    const firebaseConfig = {
  apiKey: "AIzaSyDAmtbshWB4jWXXRJCuAylh_UvZZnh7vcg",
  authDomain: "testdeploysales.firebaseapp.com",
  projectId: "testdeploysales",
  storageBucket: "testdeploysales.appspot.com",
  messagingSenderId: "377454969011",
  appId: "1:377454969011:web:e98ce65b5f506b2e8b70c6"
};
   const firebaseApp =initializeApp(firebaseConfig);
    const db =getFirestore(firebaseApp);
    const store = await getDocs(collection(db,"stores"));  
     console.log("nhfedghfdfhgdh");
    const browser=await puppeteer.launch({
      headless:true,
      args:['--no-sandbox','--disable-setuid-sandbox']
    });
    // headless:false;
       console.log("browser");
    let page=await browser.newPage();
       console.log("page   flipkart");
   let status= await page.goto('https://www.flipkart.com/',{timeout:0});
   status=status.status();
   if(status!=404){
      console.log(status);
   let images= await page.evaluate(()=>{
   return Array.from(document.querySelectorAll(".aA9eLq")).map(x=>x.src);  
   });
   await setDoc(doc(db,"stores","flipkart"),{
      links:images
   });
  console.log(images+" flipkart") 
 }
      await browser.close(); 
      return "done";
 } 
module.exports=test;

