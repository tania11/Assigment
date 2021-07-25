
import {FC } from 'react';
import { UserInterface } from './../interfaces/customInterfaces';
import { Card } from 'react-bootstrap';

// TodoItem component
const User : FC<UserInterface> = (props: UserInterface) => {
  const { name, username, address, email, phone, website, company} = props;
  return (

    <Card style={{  margin:'30px 0px 0px' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         <strong>{username}</strong>
        </Card.Text>
        <Card.Text>
         <strong>{email}</strong>
        </Card.Text>
         <Card.Text>
         <strong>{address}</strong>
        </Card.Text>
      </Card.Body>
       <Card.Body>
         <Card.Text>
         <strong>{phone}</strong>
        </Card.Text>
        <Card.Text>
         <strong>{company}</strong>
        </Card.Text>
        <Card.Link href="#">{website}</Card.Link>
        </Card.Body>
    </Card>
  )
}

export default User;
