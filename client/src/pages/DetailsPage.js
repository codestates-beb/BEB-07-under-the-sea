import React from "react"
import {useParams} from "react-router-dom"
import "./DetailsPage.css"
import Item from "../components/NFTitem"
import data from "../resources/dummyNFT";

const DetailsPage = (props)=>{
    let {id} = useParams();

    return(
        <div>{props.id}</div>
    )
}


export default DetailsPage