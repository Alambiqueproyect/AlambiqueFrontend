import { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { eventHandler } from '../handlers/eventHandler';
import "../components/styles/events.css"

const EventCard = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await eventHandler.loadEvents();
    setEvents(data);
  }

  let eventlist = events

  return (


    <CardGroup className='CardGroup'>
      {
        eventlist.map(e => (

          <Card className='cardStyle' style={{ width: '10rem' }} key={e.id}>
            <CardHeader id="cardHeatherID">{e.name}</CardHeader>
            <Card.Img variant="top" src={e.image} />
            <Card.Body>
              <Card.Text>{e.description}
              </Card.Text>

            </Card.Body>
          </Card>
        ))
      }
    </CardGroup>
  );
}

export default EventCard;