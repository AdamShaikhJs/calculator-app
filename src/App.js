import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Paper, Box, OutlinedInput } from "@mui/material";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    margin: "6px !important",
    fontSize: "20px !important",
  },
});

export default function App() {
  const classes = useStyles();
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log(e.target.name);
  };
  const clear = () => {
    setResult("");
  };
  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = async () => {
    try {
      await setResult(eval(result).toString());
    } catch {
      setResult("invalid input");
    }
  };

  return (
    <>
      <h1
        style={{
          width: "180px",
          margin: "auto",
          color: "blue",
          textShadow: "2px 2px 1px gray",
        }}
      >
        Calce App
      </h1>
      <Paper style={{ width: "306px", margin: "auto" }}>
        <OutlinedInput
          value={result}
          sx={{ mx: "10px", width: "286px", mt: "4px" }}
        />
        <Box>
          <Button
            variant="contained"
            className={classes.root}
            onClick={clear}
            sx={{
              width: "140px",
              fontWeight: "600",
            }}
          >
            clear
          </Button>
          <Button
            variant="contained"
            className={classes.root}
            sx={{ fontWeight: "600" }}
            onClick={backSpace}
          >
            c
          </Button>
          <Button
            name="="
            onClick={calculate}
            variant="contained"
            className={classes.root}
            sx={{ fontWeight: "600" }}
          >
            =
          </Button>
        </Box>
        <Box>
          <Button name="1" className={classes.root} onClick={handleClick}>
            1
          </Button>
          <Button name="2" className={classes.root} onClick={handleClick}>
            2
          </Button>
          <Button name="3" className={classes.root} onClick={handleClick}>
            3
          </Button>
          <Button
            variant="contained"
            className={classes.root}
            onClick={handleClick}
            name="/"
            sx={{ fontWeight: "600" }}
          >
            &divide;
          </Button>
        </Box>
        <Box>
          <Button name="4" className={classes.root} onClick={handleClick}>
            4
          </Button>
          <Button name="5" className={classes.root} onClick={handleClick}>
            5
          </Button>
          <Button name="6" className={classes.root} onClick={handleClick}>
            6
          </Button>
          <Button
            variant="contained"
            className={classes.root}
            onClick={handleClick}
            sx={{ fontWeight: "600" }}
            name="*"
          >
            &times;
          </Button>
        </Box>
        <Box>
          <Button name="7" className={classes.root} onClick={handleClick}>
            7
          </Button>
          <Button name="8" className={classes.root} onClick={handleClick}>
            8
          </Button>
          <Button name="9" className={classes.root} onClick={handleClick}>
            9
          </Button>
          <Button
            variant="contained"
            className={classes.root}
            onClick={handleClick}
            name="+"
            sx={{ fontWeight: "600" }}
          >
            +
          </Button>
        </Box>
        <Box>
          <Button name="0" className={classes.root} onClick={handleClick}>
            0
          </Button>
          <Button name="." className={classes.root} onClick={handleClick}>
            .
          </Button>
          <Button
            name="%"
            sx={{ fontWeight: "600" }}
            className={classes.root}
            onClick={handleClick}
            variant="contained"
          >
            %
          </Button>
          <Button
            variant="contained"
            className={classes.root}
            onClick={handleClick}
            name="-"
          >
            -
          </Button>
        </Box>
      </Paper>
    </>
  );
}
