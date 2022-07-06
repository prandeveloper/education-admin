import React from "react";
import "../../../assets/scss/pages/loader.scss";
import { Button, Spinner } from "reactstrap";
import { Route } from "react-router-dom";

const Loader = () => {
  // const [load, setLoad] = useState(false);
  return (
    <Route
      render={({ history }) => (
        <Button disabled className="LoaderButton">
          <div className="spinner">
            <Spinner
              as="span"
              className=""
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
          Loading...
        </Button>
      )}
    />
  );
};

export default Loader;
