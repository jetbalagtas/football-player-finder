import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import classes from './FootballPlayers.module.css';

export default function FootballPlayers(props) {
  const players = props.players;

  return (
    <Paper className={classes.Root}>
      <Table className={classes.Table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">Jersey Number</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(player => (
            <TableRow key={player.name}>
              <TableCell component="th" scope="player">
                {player.name}
              </TableCell>
              <TableCell align="right">{player.position}</TableCell>
              <TableCell align="right">{player.nationality}</TableCell>
              <TableCell align="right">{player.jerseyNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
