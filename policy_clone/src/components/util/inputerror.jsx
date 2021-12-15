import * as React from "react";
import TextField from "@mui/material/TextField";

const MAX_LENGTH = 10;

 function Inputerror() {
  const [text, setText] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (text.length >= MAX_LENGTH) {
      setErrorMessage(
        "The input has exceeded the maximum number of characters"
      );
    }
  }, [text]);

  React.useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (text.length < MAX_LENGTH && errorMessage) {
      setErrorMessage("");
    }
  }, [text, errorMessage]);

  return (
    <TextField
      error={text.length >= MAX_LENGTH}
      id="outlined-error"
      label="Error"
      helperText={errorMessage}
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
  );
}

export {Inputerror}