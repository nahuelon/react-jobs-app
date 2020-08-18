import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const JobsList : React.FC = () => (
  <ListGroup>
    <ListGroup.Item>
      Link 1
    </ListGroup.Item>
    <ListGroup.Item>
      Link 2
    </ListGroup.Item>
    <ListGroup.Item>
      This one is a button
    </ListGroup.Item>
  </ListGroup>
)

export default JobsList;