import React, { Component, useState, useEffect } from 'react'

export class Test extends Component {  
    render() {
        const list = [
            {id: 1, word: 'welcome'},
            {id: 2, word: 'to'},
            {id: 3, word: 'Flavortown'}
        ];

        return (
            list.map((element) => {
                return (
                    <div>
                        {`${element.word} with id:${element.id}`}
                    </div>
                )
            })
        )
    }
}

export default Test;
