import React from "react";
const TeamCard = ({nombre, escudo, poster}) => {
    // funcionalidad
 return (
    // contenido
    <>
                        <div className="card bg-dark text-white">
                        <img className="card-img" src={poster}
                            alt="Title" />
                        <div className="card-img-overlay text-center">
                            <div className="w-25 text-center rounded-circle p-2 bg-dark bg-opacity-85">
                             <img src={escudo} alt="" width="100" height="100"/>
                            <h4 className="card-title">{nombre}</h4>
                            </div>
                        </div>
                    </div>
    </>
 );
}
export default TeamCard;
