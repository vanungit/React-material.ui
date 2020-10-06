import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import RegionsDialog from "./RegionsDialog";

const regions = [
    { state: "New York", county: "Kings County" },
    { state: "Washington", county: "Adams County" }
];

function Regions() {
    const [open, setOpen] = React.useState(false);

    function openDialog() {
        setOpen(true);
    }

    function closeDialog() {
        setOpen(false);
    }
    const AddCounty = (county) => {
        debugger;
        if (county) {
            regions.push(county);
            debugger;
            setOpen(false);
        }
    };

    return (
        <Container>
            <header>
                <Typography variant="h5">Regions</Typography>
            </header>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>State</TableCell>
                        <TableCell>County</TableCell>
                        <TableCell align="right">
                            <Button onClick={openDialog}>+ Add</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {regions.map((item) => (
                        <TableRow key={`${item.county}, ${item.state}`}>
                            <TableCell>{item.state}</TableCell>
                            <TableCell>{item.county}</TableCell>
                            <TableCell align="right">
                                <Button style={{ marginTop: -12, marginBottom: -12 }}>x</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <RegionsDialog AddCounty={AddCounty} open={open} onClose={closeDialog} />
        </Container>
    );
}

export default Regions;
