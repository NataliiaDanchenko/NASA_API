
{/*import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


 //const a = start.getFullYear() + (start.getMonth() + 1) + start.getDate();
    //const b = end.getFullYear() + (end.getMonth() + 1) + end.getDate();

    //const myDate1 = new Date(a + Math.random() * (b - a))

//console.log(myDate1)
   //console.log(`${myDate.getFullYear()}:${myDate.getMonth() + 1}:${myDate.getDate()}`)

   // let x = `${myDate.getFullYear()}-0${myDate.getMonth() + 1}-0${myDate.getDate()}`

    //const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2012-06-16')

function App() {
    const [nasa, setNasa] = useState({});

    //useEffect(() => {
    const randomDate = (start, end) => {
        const myDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        console.log(myDate)
        console.log(`${myDate.getFullYear()}:${myDate.getMonth() + 1}:${myDate.getDate()}`)

        //let x = `${myDate.getFullYear()}-0${myDate.getMonth() + 1}-0${myDate.getDate()}` 
        //let x1 = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}` 
        // let x2 = `${myDate.getFullYear()}-0${myDate.getMonth() + 1}-${myDate.getDate()}` 
        //let x3 = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-0${myDate.getDate()}`

        /*if (myDate.getMonth > 9 && myDate.getDate > 9) {
          let x = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
        }
        if (myDate.getMonth > 9 && myDate.getDate < 9) {
          let x = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-0${myDate.getDate()}`
        }
        if (myDate.getMonth < 9 && myDate.getDate < 9) {
          let x = `${myDate.getFullYear()}-0${myDate.getMonth() + 1}-0${myDate.getDate()}`
        }
        if (myDate.getMonth < 9 && myDate.getDate > 9) {
          let x = `${myDate.getFullYear()}-0${myDate.getMonth() + 1}-${myDate.getDate()}`
        }*/
        //console.log(x)
        //const myDate = randomDate(new Date(2012, 0, 1), new Date());
        /*fetchData();
        async function fetchData() {
            const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=${x}`)
            //const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2012-06-16')
            const data = await resp.json();
            console.log(data);
            setNasa(data);
        }
        /*if (myDate.getMonth < 9 && myDate.getDate < 9) {
          const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=${x1}`)
          //const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2012-06-16')
          const data = await resp.json();
          console.log(data);
          setNasa(data);
        }
        if (myDate.getMonth > 9 && myDate.getDate < 9) {
          const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=${x2}`)
          //const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2012-06-16')
          const data = await resp.json();
          console.log(data);
          setNasa(data);
        }
        if (myDate.getMonth < 9 && myDate.getDate > 9) {
          const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=${x3}`)
          //const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2012-06-16')
          const data = await resp.json();
          console.log(data);
          setNasa(data);
        }*/



        //setNasa({ myDate });
        //return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    

//}, [])





// console.log(myDate.getFullYear() + '-' + ('0' + (myDate.getMonth() + 1)) + '-' + ('0' + myDate.getDate())

//.slice(-2)

//.slice(-2)
// + ' '
//+ ('0' + myDate.getHours()).slice(-2)
//+ ':' + ('0' + myDate.getMinutes()).slice(-2)
//+ ':' + ('0' + myDate.getSeconds()).slice(-2)


//date = Math.random(new Date());

/*useEffect(() => {
    fetchData();
    async function fetchData() {
        const resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&`)
        //const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=9PW48ezQ7aa0gK9SWPQQ20mFgCEs4cldZ9fSxv2u&date=2012-06-16')
        const data = await resp.json();
        console.log(data);
        setNasa(data);

    }
}, [])


return (
    <div className="App">
        <img src={nasa.hdurl} />
        <div>{nasa.date}</div>
        <button onClick={() => randomDate(new Date(2000, 0, 1), new Date())}>Get Date</button>
    </div>
);
  }



export default App;*/}