import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import CustomModal from './CustomModal'

import { useUser } from "../../redux/hooks/User";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Users() {
  const classes = useStyles();
  const { actions, users } = useUser();

  useEffect(() => {
    actions.getUsers();
  }, []);

  return (
    <>
    <CustomModal />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="right">Tên tài khoản</TableCell>
            <TableCell align="right">Họ và tên</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.data.map((row, index) => (
            <TableRow key={index.toString()}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.user_name}</TableCell>
              <TableCell align="right">{row.dull_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
