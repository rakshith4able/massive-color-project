import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(props => {
    const { classes, handleClick, name, color } = props;
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span> {name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    );
});
export default withStyles(styles)(DraggableColorBox);
