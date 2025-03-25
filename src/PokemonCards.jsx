import './index.css'

const PokemonCards = ({pokemonData})=>{
    return(
        <>
        <li className="li-contain">
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} className='pokemon-img'/>
            </figure>
            <h2 className='pokemon-h2'>{pokemonData.name}</h2>
            <span className='pokemon-span'>{pokemonData.types.map((curData)=>{
                return curData.type.name

            }).join(",")}
            </span>

            <div className='outer-div'>
                <div className='inner-div'>
                <div>
                    <p><span className='span-bold'>Height:</span>{pokemonData.height}</p>
                </div>

                <div>
                    <p><span className='span-bold'>Weight:</span>{pokemonData.weight}</p>
                </div>

                <div>
                    <p><span className='span-bold'>Speed:</span>{pokemonData.stats[5].base_stat}</p>
                </div>
                </div>
                <div className='inner-div'>
                    <div className='flex-span'>
                        <span>{pokemonData.base_experience}</span>
                        <span className='span-bold  top'>Experience</span>
                    </div>
                    <div className='flex-span'>
                        <span>{pokemonData.stats[0].base_stat}</span>
                        <span className='span-bold top'>Attack</span>
                    </div>
                    <div className='flex-span'>
                        <span>{pokemonData.abilities.map((curAbility)=>{
                            return curAbility.ability.name

                        }).slice(0, 1).join(",")}</span>
                        <span className='span-bold top'>Ability</span>
                    </div>
                </div>
            </div>
        
        </li>
       
        </>
    )
}
export default PokemonCards