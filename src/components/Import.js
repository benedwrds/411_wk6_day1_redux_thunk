import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell, Container} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons';
import SimpleMenu from '../components/Menu';
import DeleteIcon from '@material-ui/icons/Delete'
import MenuItem from '@material-ui/core/MenuItem'


const Import = (props) => {

    return (
        <div>
    <Button variant="contained" color="primary" onClick={props.fetchMakes} >Import</Button>

<Table>
    <TableBody>
    {props.makes.map((row, index) => (
    <div>
        <TableCell> {row.MakeId}</TableCell>
        <TableCell> {row.MakeName}</TableCell>
    <TableCell>
    <DeleteIcon
    className="icon text-red"
     onClick={() => props.deleteMake(index)}/>
    </TableCell>
      
    </div>
    ))}
    
    </TableBody>
</Table>
</div>
    )
}

export default Import

{/*<Button onClick={handleClick}>Hello
            <Menu open={Boolean(anchorEl)}>
            onClose={handleClose}
                 <MenuItem>Delete</MenuItem> 
            </Menu>
            </Button> */}