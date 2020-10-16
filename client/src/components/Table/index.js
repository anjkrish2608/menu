import React from "react";
import TableRow from "../TableRow";
import TableCell from "../TableCell";

function Table() {

    return (
        <table>
            <caption>Menu Title</caption>
            <thead>
                <TableRow>
                <th>
                    Section Title
                </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                <TableCell>Item</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </tbody>
            <thead>
                <TableRow>
                    <th>Add new section title</th>
                    <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                <th> </th>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </tbody>
        </table>
    )
}

export default Table;