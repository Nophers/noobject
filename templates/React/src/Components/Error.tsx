import React from "react";
import { Helmet } from "react-helmet";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { Button, Link } from "@material-ui/core";
import "./Styles/Web/Error.css";

function Alert(props: JSX.IntrinsicAttributes & AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>

const Error = () => {
  return (
    <div className="Error">
      <h1>Error</h1>

      <div>
        <Alert severity="error">This Page was not found on our Server.</Alert>
      </div>

      <Helmet>
        <style>{"body { background-color: grey; }"}</style>
      </Helmet>

      <Button variant="contained" href="/" onClick={() => console.log("Someone returned from death")}>
        Home
      </Button>

    </div>
  );
};

export default Error;
