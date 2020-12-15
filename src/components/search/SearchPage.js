import React, { useMemo } from 'react'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHerosByName } from '../../selectors/getHeroByName';

export const SearchPage = ({history}) => {

    const {search} = useLocation();
    // const {q = ''} = queryString.parse( search);
    const {q = ''} = useMemo(() => queryString.parse( search ), [search])

    const [ values, handleInputChange ] = useForm({
        searchTex:q
    });
    
    const { searchTex } = values;

    const heroesFiltered = useMemo(() => getHerosByName(q), [q]);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchTex}`);
    }

    return (
        <div>
            <h1>Search Page</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form
                        onSubmit={ handleSubmit }
                    >
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Find your hero"
                            name="searchTex"
                            value={searchTex}
                            onChange={   handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary m-1 btn-block"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    { 
                        (q==='') && 
                        <div className="alert alert-info">
                        Search a hero
                        </div>
                    }
                     { 
                        (q !=='' && heroesFiltered.length ===0) && 
                        <div className="alert alert-danger">
                        there is not a hero with {q}
                        </div>
                    }
                    {
                       heroesFiltered.map( hero => (
                           <HeroCard  
                           key={hero.id}
                           {...hero}
                           />
                       )) 
                    }
                </div>
            </div>
        </div>
    )
}
