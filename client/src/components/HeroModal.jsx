import React from 'react'
import { withStyles, Modal, Paper } from '@material-ui/core'
import { ExpandableInfo } from "./"
import { modalStyles } from "../styles"
function HeroModal({ classes, info, close }) {
    const renderExpandables = (type) => {
        if (info[type] && info[type].items && info[type].items.length > 0) return <ExpandableInfo info={info[type].items} key={type} type={type} />
        return null
    }
    return (
        <Modal
            className={classes.modal}
            open={true}
            onClose={() => close()}
        >
            <Paper className={classes.container}>
                <img src={`${info.thumbnail.path}/portrait_incredible.${info.thumbnail.extension}`}
                    alt={info.name}
                />
                <div className={classes.infoContainer}>
                    <h3>{info.name || info.fullName || info.title}</h3>
                    <p>{info.description}</p>
                    <div className={classes.expandables}>
                        {
                            ["creators", "stories", "series", "events"].map(renderExpandables)
                        }
                    </div>
                </div>
            </Paper>
        </Modal>
    )
}

export default withStyles(modalStyles)(HeroModal)