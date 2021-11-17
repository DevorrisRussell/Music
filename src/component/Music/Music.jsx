import React from "react";


const Music = (props) => {
  
  console.log(props);
    
  
    return ( 
    <div>
         
    <table>
      <thead>
        <th>Id</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Genre</th>
        <th>Release Date</th>
      </thead>
       <tbody>
         {props.newMusic.map(function(song){
           return (
             <tr>
               <td>{song.id}</td>
               <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                 <td>{song.releaseDate}</td>
             </tr>
           )
         })}
       </tbody>
      </table>
      </div>  )
      
}
 
export default Music;