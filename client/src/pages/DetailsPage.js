import React from "react"
import {useParams} from "react-router-dom"
import "./DetailsPage.css"
import NFTdetail from "../components/NFTdetail"
import data from "../resources/dummyNFT";

const DetailsPage = ()=>{
    let {id} = useParams();
    const filteredNFT = data.filter((e)=>e.id===id)
    return(
        
        <div id="detailsContainer">
            <h1>hi</h1>
            <NFTdetail imgUrl={filteredNFT.imgUrl} name={filteredNFT.name} collection={filteredNFT.collection} price={filteredNFT.price} id={filteredNFT.id} description={filteredNFT.description}/>
        </div>
    )
}


export default DetailsPage