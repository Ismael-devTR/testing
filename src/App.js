import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import BookListContainer from "./components/BookListContainer";

function App() {
 
  return (
    <div className="App">
      <Typography variant="h2" component={"h2"} data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}

export default App;
