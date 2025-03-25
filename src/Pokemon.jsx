import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
import './index.css'

const Pokemon = ()=>{
      const [pokemon, setPokemon] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");
      const [search, setSearch] = useState("");
    
      const Api = "https://pokeapi.co/api/v2/pokemon?limit=24";
    
      const fetchPokemon = async ()=>{
        try{

            const res = await fetch(Api);
            const data = await res.json();
            const responsePokemon = data.results.map( async (curData)=>{
            const res = await fetch(curData.url);
            const data = res.json();
            return data;
          })
          const updatedPokemon = await Promise.all(responsePokemon);
          console.log(updatedPokemon);
          setPokemon(updatedPokemon);
          setLoading(false);
    
        }catch(error){
          console.log(error);
          setLoading(false);
          setError(error);
        }
      }
      useEffect(()=>{
        fetchPokemon();
    
      },[])

      const searchData = pokemon.filter((curSearch)=> curSearch.name.toLowerCase().includes(search.toLowerCase()))

    
      if(loading){
        return(
          <div>
            <h1>Loading....</h1>
          </div>
        )
      }
    
      if(error){
        return(
          <div>
            <h1 style={{marginLeft:"300px"}}>{error.message}</h1>
          </div>
        )
      }
    return(
        <>
        <section className="main-section">
            <h1>Lets Catch Pokemon</h1>

            <input type="text" placeholder="search pokemon" value={search} onChange={(event)=> setSearch(event.target.value)} className="pokemon-input"/>
            <section>
                <ul className="grid-ul">
                    {
                        searchData.map((curPokemon)=>{
                            return <PokemonCards pokemonData={curPokemon} key={curPokemon.id} />  
                        })
                    }

                 </ul>

            </section>
        </section>

        </>
    )
}
export default Pokemon