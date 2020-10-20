import React from "react";
import TableRow from "../TableRow";
import TableCell from "../TableCell";
import style from "./style.css"
function DefaultTable() {

    return (
    <div>
 <table className="hover stack">
            <caption>Menu Title <button className="button edit">Edit</button></caption>
            <thead>
                <TableRow>
                 <th style={style.th}>
                    Section Title
                </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}><button className="button edit">Edit</button> </th>
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
                <TableRow>
                <TableCell>pizza</TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell>$X.00 </TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </tbody>
            <thead>
                <TableRow>
                 <th style={style.th}>
                    Section Title
                </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}><button className="button edit">Edit</button> </th>
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
                <TableRow>
                <TableCell>pizza</TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell>$X.00 </TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </tbody>
            <thead>
                <TableRow>
                 <th style={style.th}>
                    Section Title
                </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}> </th>
                 <th style={style.th}><button className="button edit">Edit</button> </th>
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
                <TableRow>
                <TableCell>pizza</TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell>$X.00 </TableCell>
                    <TableCell><button className="button edit">Edit</button>  </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </tbody>
            </table>
    </div>
        
            
    )
}

export default DefaultTable;