import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Home.css';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardDeck,
  CardFooter,
} from 'reactstrap';

class Home extends Component {
  render() {
    const med = this.props.medicine.map((meds, index) => {
      return (
        <div className='home' key={index}>
          <Card className='cards'>
            <CardHeader>
              <h3>{meds.name}</h3>
            </CardHeader>
            <CardBody>
              <CardText>
                <h5>Directions:</h5> {meds.directions}
              </CardText>
              <CardText>
                <h5>Servings:</h5> {meds.servings}
              </CardText>
              <CardText>
                <h5>Refill Left:</h5> {meds.refill_left}{' '}
              </CardText>
            </CardBody>
            <CardFooter>
              <Link to={'/medicine-detail/' + meds.id}>More Details</Link>
            </CardFooter>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <CardDeck>{med}</CardDeck>
      </div>
    );
  }
}

export default withRouter(Home);
