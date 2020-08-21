import React from 'react'
import RecipeList from '../shared/recipes.json'
import styles from './Items.module.css'
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

export default function Items  () {
    const recipes = RecipeList.map(item => {
        return(
            <Card key={item.id} className={styles.item}>
                <CardImg src={item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle><h3>{item.title}</h3></CardTitle>
                    <CardText>{item.description}</CardText>
                    <CardText><span id={styles.itemInd}>Ingredients:</span> {item.ingredient}</CardText>
                </CardBody>
            </Card>
        )
    })
    return(
        <>
            <div className={styles.container}>
                {recipes}
            </div>
        </>
    )
}