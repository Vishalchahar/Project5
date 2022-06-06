import React from 'react';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link';



const SearchResults = (props) =>{
  // const router = useRouter()
  // const {id}=router.query;
    return <>

    {props.movies.map(movie => {
        return (<Link href={`/components/${movie.imdbID}`}>
            <img className={styles.poster} src={movie['Poster']}

            alt="hhhh"/>
        </Link>)
    })}
  </>
};


export default SearchResults;
