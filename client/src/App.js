import { React, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPhone from "./pages/AddPhone";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import config from "./config";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

function App(props) {
  const [errorMessage, setError] = useState(null);

  const handleAddPhone = (event) => {
    event.preventDefault();

    let uploadForm = new FormData();
    uploadForm.append("imageUrl", event.target.imageUrl.files[0]);
    uploadForm.append("name", event.target.name.value);
    uploadForm.append("manufacturer", event.target.manufacturer.value);
    uploadForm.append("description", event.target.description.value);
    uploadForm.append("color", event.target.color.value);
    uploadForm.append("price", event.target.price.value);
    uploadForm.append("screen", event.target.screen.value);
    uploadForm.append("processor", event.target.processor.value);
    uploadForm.append("ram", event.target.ram.value);

    axios
      .post(`${config.API_URL}/api/add-phone`, uploadForm, {
        withCredentials: true,
      })
      .then((response) => {
        props.history.push("/");
      })
      .catch((err) => setError(err.response.data));
  };

  return (
    <div className="App">
      <MyNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/addPhone"
          render={() => {
            return <AddPhone onAdd={handleAddPhone} error={errorMessage} />;
          }}
        />
      </Switch>
      <MyFooter />
    </div>
  );
}

export default withRouter(App);
