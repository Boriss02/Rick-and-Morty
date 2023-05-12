import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      isFav? removeFav(id) : addFav(id, name, status, species, gender, origin, image);
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}

         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='' />
         <button onClick={()=>{onClose(id)}}>X</button>
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: ()=> dispatch(addFav()),
      removeFav: ()=> dispatch(removeFav()) 
   }
}

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);