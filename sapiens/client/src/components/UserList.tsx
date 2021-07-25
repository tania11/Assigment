

import {  FC, useEffect, useState } from 'react';
import { UserInterface, UserListInterface } from './../interfaces/customInterfaces';
import User from './User';
import {Row, Col, Container} from 'react-bootstrap';

const UserList: FC<UserListInterface> = () => {
  
const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    fetchUsers().then((userList: UserInterface[] | any) => {

      setUsers([...userList ]);
    })
    
  }, [])

  async function fetchUsers(): Promise<UserInterface[]> {
    let res = await fetch('/userApi/user/getUsers');
    return await res.json();
  }

  return (
    <Container>
       <Row>
       {users && users.map((user: UserInterface) => (
            <Col xs={6} md={4} key={user.id}>
                <User {...user}/>
            </Col>
        ))} 
      </Row>
    </Container>
  )
}

export default UserList;