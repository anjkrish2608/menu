import React from "react";
import TableRow from "../TableRow";
import TableCell from "../TableCell";
import "./style.css";
function Table(props) {

    return (
    
 <table className="hover stack">
            <caption>{props.menuTitle}<button className="button edit">Edit</button></caption>
            <thead>
                <TableRow>
                 <th>
                 {props.sectionTitle}
                </th>
                 <th> </th>
                 <th> </th>
                 <th> </th>
                 <th> </th>
                 <th><button className="button edit">Edit</button> </th>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                <TableCell>Item</TableCell>
                    <TableCell> </TableCell>
                    <TableCell>Price </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                {props.items.map(item=>
                <TableRow>
                <TableCell>{item.item}</TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                    )}
                
            </tbody>
            </table>
   
        
            
    )
}

export default Table;