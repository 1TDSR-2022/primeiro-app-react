import React from "react";

export default function Carro(props){
    return {
        <div>
            <figure>
                <img src={props.pathImgprops} alt={props.infoCarroProps} width={props.infoImgProps} />
                <figcaption>
                {props.legProps}
                </figcaption>
            </figure>

        </div>
    }
}