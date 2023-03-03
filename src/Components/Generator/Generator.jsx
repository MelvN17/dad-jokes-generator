import { useState} from 'react'
import axios from "axios"
import styles from "../Generator/Generator.module.scss"
const Generator = () => {

  // FETCHES THE API
  const [joke, setJoke] = useState("");
  const fetchData = () => {
   axios.get("https://icanhazdadjoke.com/", {
    headers: {
      Accept: 'application/json'
    }
   }).then((res) => {
    setJoke(res.data.joke);
    console.log(res.data.joke);
   }).catch((error) => {
    console.log(error);
   });
   
  }

  return (
    <div className={styles.wrapper}>
        <h1>CELEBRATING FATHER'S DAY WITH DAD JOKES 😆</h1>
        <button onClick={fetchData}>Generate Dad Joke</button>
        <div className={styles.container}>
          <p>{joke}</p>
        </div>
    </div>
  )
}

export default Generator