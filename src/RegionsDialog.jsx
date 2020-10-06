import clsx from "clsx";
import React, { useEffect, useState } from "react";
import search from "./search";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    TableRow,
    TableCell,
    FormControlLabel,
    Checkbox

    //Checkbox
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// Эмуляция поискового запроса к серверу

const useStyles = makeStyles((theme) => ({
    root: {}
}));

function RegionsDialog(props) {
    const { className, ...other } = props;
    const classes = useStyles(props);
    const [state, setState] = useState([]);
    useEffect(() => {
        setState(state);
    }, [state]);

    const onChange = (e) => {
        new Promise((resolve) => {
            resolve(search(e.target.value));
        }).then((res) => {
            setState(res);
        });
    };
    const [countyStae, setCountyState] = useState([]);

    function onNull() {
        setCountyState({});
    }

    return (
        <Dialog className={clsx(classes.root, className)} {...other}>
            <DialogTitle>Add a County</DialogTitle>
            <DialogTitle>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label={"Search for a county "}
                        onChange={onChange}
                    />
                </form>
            </DialogTitle>
            <DialogActions>
                <Button
                    disabled={!countyStae.county}
                    onClick={() => {
                        props.AddCounty(countyStae);
                        onNull();
                    }}
                >
                    ADD
                </Button>
                <Button onClick={props.onClose}>Cancel</Button>
            </DialogActions>

            <DialogActions>
                <DialogContent>
                    {state
                        ? state.map((item) => (
                            <TableRow key={`${item.county}, ${item.state}`}>
                                <TableCell>{item.state} </TableCell>
                                <TableCell>{item.county}</TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onClick={() =>
                                                    setCountyState((countyStae) => ({
                                                        ...countyStae,
                                                        county: `${item.county}`,
                                                        state: `${item.state}`
                                                    }))
                                                }
                                            />
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                        : null}
                </DialogContent>
            </DialogActions>
        </Dialog>
    );
}

export default RegionsDialog;
