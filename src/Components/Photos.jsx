import utsbldg5 from './images/uts-bldg5r.jpg';
import hps from './images/hps1.jpg';
import acupy from './images/acupy.jpg';
import { useState } from 'react';

const images = [acupy, utsbldg5, hps] 
const desc = [
   'Australian Catholic University, Strathfield campus, Sydney, Australia',
   'UTS Haymarket Building 5, University of Technology Sydney, Australia',
   'Homebush Public School, Homebush, NSW, Australia'
]
const alt = [ 'acu', 'uts', 'hps' ]

export default function Photos() {
   const [count, setCount] = useState(0);
  
   function handleClick() {
      setCount((count + 1) % 3); 
   }	

   function acu() {
      setCount(0); 
   }
   
   function uts() {
      setCount(1); 
   }
   
   function hps() {
      setCount(2); 
   }
   
   return (
      <div>
      <h2 className="text-2xl py-2 text-teal-500">Photos</h2>
	  <h2>Click Next photo button or select a photo with the name on the button</h2>
	  
      <button className="px-5 border-2 bg-blue-100" onClick={handleClick}>
      Next photo
      </button> 
	  <button className="px-5 border-2 bg-blue-100" onClick={acu}>
      Australian Catholic University
      </button> 
	  <button className="px-5 border-2 bg-blue-100" onClick={uts}>
      University of Technology Sydney
      </button> 
	  <button className="px-5 border-2 bg-blue-100" onClick={hps}>
      Homebush Public School
      </button>
	  <br /> <br />
      <h4>{desc[count]}</h4>
      <img src={images[count]} alt={alt[count]} />
      <br />
      </div>
   );
}
