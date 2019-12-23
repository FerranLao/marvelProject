import React, { useState, Fragment } from 'react'
import { withStyles, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { cardStyle } from "../styles"
import HeroModal from './HeroModal'

function HeroCard({ classes, info }) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <Fragment>
            <Card className={classes.card}>
                <CardActionArea onClick={() => setOpenModal(true)}>
                    <CardMedia
                        className={classes.media}
                        image={`${info.thumbnail.path}/landscape_xlarge.${info.thumbnail.extension}`}
                        title={info.name}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2" >
                            {info.name || info.fullName || info.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            {openModal && <HeroModal info={info} close={() => setOpenModal(false)} />}
        </Fragment>
    )
}
export default withStyles(cardStyle)(HeroCard)