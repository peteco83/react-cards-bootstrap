import React, { Component } from 'react'

import SubCard from './SubCard'
import "./Card.css"


export default class MyCard extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            dogs: [ {
                    name: "West Highland White Terrier",

                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/West_Highland_White_Terrier_Krakow.jpg/800px-West_Highland_White_Terrier_Krakow.jpg", 
                    
                    description: "Die ersten Linien der West Highland White Terrier werden der Familie Malcolm in Poltalloch in Argyllshire zugeschrieben."},
                {
                    name: "Shih Tzu",

                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Struppi_shih_tzu.JPG/300px-Struppi_shih_tzu.JPG",
                    
                    description: "Bereits im 7. Jahrhundert soll es den Hund in den Klöstern Tibets gegeben haben. Die Mönche legten Wert darauf, dass der Shih Tzu einem kleinen Löwen ähnelte."

                },

                {
                    name: "Schäferhund",

                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/DSC_0346_%2810096362833%29.jpg/800px-DSC_0346_%2810096362833%29.jpg",

                    description: "Die Vorfahren des Deutschen Schäferhundes gehen auf kurz- und stockhaarige Schläge von Hütehunden aus Deutschland zurück, wie sie Ende des 19."

                }
            ]
        }        
    }

    deleteCard = (i) => {
        let newState = [...this.state.dogs]
        newState.splice(i, 1)
        this.setState({
          dogs : newState
        })
      }


    render() {
        let allCards = this.state.dogs.map((dog, i) => {
            return (
                <SubCard key={i} dogs={dog} index={i} deleteCard={this.deleteCard}/>
            )
        })

        return (
            <div>
                <h1 className="dogs">Dogs</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-around"

                }}>
                    {allCards}
                </div>
            </div>
        )
    }
}
