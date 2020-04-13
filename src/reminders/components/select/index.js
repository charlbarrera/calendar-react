import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export default function ControlledOpenSelect({ title, defaultColor, options, onColorSelected }) {
  const classes = useStyles();
  const [color, setcolor] = React.useState('');
  const [open, setOpen] = React.useState(false);


  React.useEffect(() => setcolor(defaultColor), [defaultColor]);

  const handleChange = (event) => {
    setcolor(event.target.value);
    onColorSelected(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{gridArea: 'select'}}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          style={{background: color, color: 'white'}}
          onClose={handleClose}
          onOpen={handleOpen}
          value={color}
          onChange={handleChange}
        >
          {
              options.map((option) => <MenuItem key={`color-${option.color}`} style={{background: option.color, color: 'white'}} value={option.color ? option.color : ''}>{option.title}</MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}