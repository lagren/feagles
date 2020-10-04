import React from 'react';
import Table from "@material-ui/core/Table";
import {TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Chip from "@material-ui/core/Chip";

export default function () {
    return (
        <div>
            <h1>Users</h1>

            <Table size={"small"}>
                <TableHead>
                    <TableRow>
                        <TableCell width={"75px"}/>
                        <TableCell>Username</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Last active</TableCell>
                        <TableCell>2FA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell width={"75px"}><Avatar src="https://www.gravatar.com/avatar/ecd2e62252ed99dbc3642c072177733e?d=mp" /></TableCell>
                        <TableCell><Link href="foo@example.com">foo@example.com</Link></TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell><Chip label="Owner" variant="outlined" size="small" /></TableCell>
                        <TableCell>Yesterday</TableCell>
                        <TableCell><CheckBoxIcon color="secondary" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={"75px"}><Avatar src="https://www.gravatar.com/avatar/ecd2e62252ed99dbc3642c072177733X?d=robohash" /></TableCell>
                        <TableCell><Link href="bar@example.com">bar@example.com</Link></TableCell>
                        <TableCell>Bar Doe</TableCell>
                        <TableCell><Chip label="Editor" variant="outlined" size="small" /></TableCell>
                        <TableCell>Today</TableCell>
                        <TableCell><CheckBoxOutlineBlankIcon color="secondary" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={"75px"}><Avatar src="https://www.gravatar.com/avatar/ecd2e62252ed99dbc3642c072177733c?d=robohash" /></TableCell>
                        <TableCell><Link href="baz@example.com">baz@example.com</Link></TableCell>
                        <TableCell>Baz Smith Jones</TableCell>
                        <TableCell></TableCell>
                        <TableCell>43 days ago</TableCell>
                        <TableCell><CheckBoxOutlineBlankIcon color="secondary" /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

