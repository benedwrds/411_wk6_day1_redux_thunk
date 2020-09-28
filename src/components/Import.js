import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell, Container} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons';
import SimpleMenu from '../components/Menu';
import DeleteIcon from '@material-ui/icons/Delete'
import MenuItem from '@material-ui/core/MenuItem'
import Total from '../components/Total'


const Import = (props) => {

    return (
        <Container maxWidth="lg" className="car-container">
        {/* <div style={{marginLeft : "15%", marginRight: "15%", marginTop: "4%"}}> */}
    <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
     {/* <Total/>  */}
    <h2>COUNT: {props.makes.length}</h2>
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
    {props.makes.map((row, index) => (
    <TableRow >
        <TableCell component="th" scope="row"> {row.MakeId}</TableCell>
        <TableCell> {row.MakeName}</TableCell>
        <TableCell>
            <DeleteIcon
            className="icon text-red"
            onClick={() => props.deleteMake(index)}/>
        </TableCell>
    </TableRow>

    ))}
    
    </TableBody>
</Table>
 {/* </div> */}
</Container>
    
    )
}

export default Import

{/* <TableRow key={car.id}>
<TableCell component="th" scope="row">
    {car.id}
</TableCell>
<TableCell>{car["name"]}</TableCell>
<TableCell>{car["mpg"]}</TableCell>
<TableCell>{car["cylinders"]}</TableCell>
<TableCell>{car["horsepower"]}</TableCell> */}