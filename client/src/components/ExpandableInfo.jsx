import React from 'react'
import { withStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeItem, TreeView } from '@material-ui/lab';
import { expandableStyle } from "../styles"
function ExpandableInfo({ classes, info, type }) {
    return (
        <TreeView
            className={classes.tree}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            <TreeItem label={`${type}`} nodeId={type}>
                {info.map((item, index) => <TreeItem key={index} nodeId={index + type} label={`${item.name}  ${item.role || item.type ? `(${item.role || item.type})` : ""}`} />)}
            </TreeItem>
        </TreeView>
    )
}

export default withStyles(expandableStyle)(ExpandableInfo)