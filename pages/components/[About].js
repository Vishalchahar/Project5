import react from "react";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";





export default function Page() {

  const [movieDetail, setMovieDetail] = useState([])
  const router = useRouter()
const {About} = router.query
async function fetchAbout(){
  const responseAbout = await fetch(`http://www.omdbapi.com/?i=${About}&apikey=98f8c28b&type=movie&plot=full`);
  const dataAbout = await responseAbout.json();

  setMovieDetail(dataAbout)
}
useEffect(()=>{
  fetchAbout();
},[])
  return (
    <div >
      
      <img src={movieDetail['Poster']}/>
      <p>{movieDetail['Title']}</p>
      <p>{movieDetail['Year']}</p>
      <p>{movieDetail['Plot']}</p>
    </div>
  )
}