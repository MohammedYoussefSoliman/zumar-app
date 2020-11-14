import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#111",
    fontSize: "1em",
    fontWeight: "500",
    minWidth: "150px",
    direction: "rtl",
    textTransform: "capitalize",
    "& .MuiSelect-icon": {
        color: "#111", 
    },
    "&:before": {
        border: "none"
    },
    '&:hover:not(.Mui-disabled):before': {
        border: "none"
    },
    "&:after": {
        border: "none"
    },
    "&:focus": {
        backgroundColor: "transparent"
    }
  },
  menu: {
      color: "#111",
      fontSize: "1em",
      fontWeight: "500"
  }
});

const SelectCat = () => {

    const [cat, setCat] = useState('all');
    const classes = useStyles();
      const handleChange = (event) => {
        setCat(event.target.value);
      };

    return (
        <FormControl>
            <Select value={cat} defaultValue={cat} onChange={handleChange} className={classes.root}>
                <MenuItem className={classes.menu} value="all">all</MenuItem>
                <MenuItem className={classes.menu} value="arts">Arts & crafts</MenuItem>
                <MenuItem className={classes.menu} value="elect">Electronics</MenuItem>
                <MenuItem className={classes.menu} value="Books">Books</MenuItem>
                <MenuItem className={classes.menu} value="computers">Computers</MenuItem>
                <MenuItem className={classes.menu} value="kids">kids</MenuItem>
                <MenuItem className={classes.menu} value="beauty">beauty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectCat;