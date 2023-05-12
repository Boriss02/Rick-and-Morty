import { useState } from "react";

const SearchBar = ({onSearch})=> {
   const [id, setId] = useState("");

   const handleChange = (event)=>{
      setId(event.target.value);
   }

   return (
      <div>
         <input name="search" value={id} onChange={handleChange} type='search' />
         <button onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;