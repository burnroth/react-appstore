import api from "./api.json";
import {
  Row,
  Container,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Jumbotron,

} from "reactstrap";

// const api = fetch("https://api.lime-bootstrap.com/addons/?page=1").then(response => response.json()).then(res => console.log)

import React, { Component } from "react";
import Search from "./components/Search.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  // Populating the state with the names of the addons
  componentDidMount() {
    for (let key of api.addons) {
      this.setState({
        [key.name]: true
      });
    }
  }

  // SImple search function which loops over the state and checks if each value includes the search query
  handleSearch(e) {
    e.persist();
    for (let key in this.state) {
      if (!key.includes(e.target.value.toLowerCase())) {
        this.setState({
          [key]: false
        });
      } else {
        this.setState({
          [key]: true
        });
      }
    }
  }

  showModal(e) {
    this.setState({
      modal: true
    });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Limestore</h1>
          <Search handleSearch={this.handleSearch} />
        </Jumbotron>
        <Container>
          <Row>
            {api.addons.map(addon => {
              if (this.state[addon.name]) {
                return (
                  <Col key={addon.id} name={addon.displayName} xs="4">
                    <Card>
                      {addon.thumbnail ? (
                        <CardImg
                          top
                          width="100%"
                          src={
                            "data:image/png;base64," +
                            addon.thumbnail.replace("b'", "").replace("'", "")
                          }
                          alt="Card image cap"
                        />
                      ) : null}

                      <CardBody>
                        <CardTitle>
                          <h4>{addon.displayName}</h4>
                        </CardTitle>
                        <CardText>{addon.shortDesc} </CardText>
                        <Button onClick={this.showModal}>Button</Button>
                      </CardBody>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
