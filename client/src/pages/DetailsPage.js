import React from "react"
import {useParams} from "react-router-dom"
import "./DetailsPage.css"
import NFTdetail from "../components/NFTdetail"
import data from "../resources/dummyNFT";

const DetailsPage = ()=>{
    let id = Number(useParams().id);
    console.log(data)
    let filteredNFT = data.filter((e) => e.id===id)
    console.log(filteredNFT.id)
    return(
        <div id="detailsContainer">
            {filteredNFT.map((el)=>{
                return <NFTdetail imgUrl={el.imgUrl} name={el.name} collection={el.collection} price={el.price} id={el.id} description={el.description}/>
            })}
            
        </div>
    )
}


export default DetailsPage