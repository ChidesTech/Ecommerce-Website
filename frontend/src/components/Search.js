import React from "react";
import { useState } from "react";


const Search =(props)=>{
    const [name, setName] = useState("");
    const submitHandler=(event)=>{
       event.preventDefault();
       props.history.push(`/search/product/${name}`);
    }
    return <div className="search-container">
    <form action="" onSubmit={submitHandler} >
<input type="search" name="search" id="search" onChange={(e)=>setName(e.target.value)} placeholder="Search For Product . . ."/>

<button onClick={submitHandler} type="submit" ><img className="search" src="/search-solid.svg" style={{height:'4rem', width:"2rem"}} alt=""/></button>
</form>
  </div>
}

export default Search;