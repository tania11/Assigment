
import {FC } from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';

const Navbar: FC = () =>  {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#"><Link to="/users">Users</Link></Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        <Link to="/addUser">Add User</Link>
      </Breadcrumb.Item>
    </Breadcrumb>   
  );
};

export default Navbar;