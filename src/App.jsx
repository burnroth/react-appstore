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
  CardSubtitle,
  Button,
  Jumbotron,
  ContainerFluid,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

// const api = fetch("https://api.lime-bootstrap.com/addons/?page=1").then(response => response.json()).then(res => console.log)

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSearch = this.handleSearch.bind(this)
  }

  // Populating the state with the names of the addons
  componentDidMount() {
    for (let key of api.addons) {
      this.setState({
        [key.name]: false
      });
    }
  }

  handleSearch(e){
    e.persist()
    for( let key in this.state ) {
      if(key.includes(e.target.value)){
        this.setState({
          [key]: true
        })
      }
    }
    console.log(e)
  }


  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
          <Form onChange={this.handleSearch} >
            <FormGroup>
              <Label>Label</Label>
              <Input type="search" />
            </FormGroup>
          </Form>
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
                        <Button>Button</Button>
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
