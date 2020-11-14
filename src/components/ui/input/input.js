import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '../../../Assets/images/search.svg';

const useStyle = makeStyles({
    root: {
        width: "100%",
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
        },
        "&::placeholder": {
            color: "#111",
            fontSize: "0.75em",
            fontWeight: "400",
        }
    }
})


const InputSearch = () => {
    const classes = useStyle();
    return (
        <FormControl>
            <Input className={classes.root}
                placeholder="Search by product name or seller"
                startAdornment={
                    <InputAdornment position="start">
                        <img src={SearchIcon} alt=""/>
                    </InputAdornment>
                }
            />
      </FormControl>
    )
}

export default InputSearch