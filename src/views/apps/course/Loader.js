import React from "react";
import "../../../assets/scss/pages/loader.scss";
import { Button, Spinner } from "reactstrap";

const Loader = () => {
  // const [load, setLoad] = useState(false);
  return (
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
  );
};

export default Loader;
