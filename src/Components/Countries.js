import React,{useState,useEffect} from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Filter from './Filter';

const Countries = () => {
    const [countries,setCountries] =useState([]);
  const[search,setSearch] =useState('');
  const[filteredCounties,setFilteredCounties] =useState([]);



useEffect(() => {
  setFilteredCounties(
    countries.filter(country =>{
      return  country.name.toLowerCase().includes(search.toLowerCase())
     })
  )
 
}, [search,countries])
 
   console.log(countries)
    const countryData = async () =>{
        const res = await fetch("https://restcountries.com/v2/all")
        const allCountries =await res.json()
        setCountries(allCountries)
         }

    useEffect(()=>{
        countryData();
    },[])



    return (
        <div>
            {search}
          <Filter onChange={e=>setSearch(e.target.value)}/>
          <div className="country-container">
            {filteredCounties.map((country,i) =>{
             return   <Card  body outline color="secondary" className="card-main" key={i}>
             <CardImg top width="100px" src={country.flag} alt="Card image cap" />
             <CardBody>
               <CardTitle tag="h5">{country.name}</CardTitle>
               <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
               <CardText>
                 <small className="text-muted">Last updated 3 mins ago</small>
               </CardText>
             </CardBody>
           </Card>
            } )}
        </div>
        </div>
    )
}

export default Countries
