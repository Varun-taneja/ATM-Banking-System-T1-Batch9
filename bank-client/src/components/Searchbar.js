// import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import {
//   MDBCol,
//   MDBFormInline,
//   MDBBtn,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbar,
//   MDBCollapse,
//   MDBNavbarNav,
// } from "mdbreact";

// class Searchbar extends Component {
//   state = {
//     collapsed: false,
//   };

//   handleTogglerClick = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   handleNavbarClick = () => {
//     this.setState({
//       collapsed: false,
//     });
//   };

//   render() {
//     return (
//       <MDBCol md="12">
//         <MDBNavbar
//           color="deep-purple"
//           className="text-white darken-3"
//           dark
//           expand="md"
//         >
//           <MDBNavbarBrand>Navbar</MDBNavbarBrand>
//           <MDBNavbarToggler onClick={this.handleTogglerClick} />
//           <Router>
//             <MDBCollapse isOpen={this.state.collapsed} navbar>
//               <MDBNavbarNav right onClick={this.handleNavbarClick}>
//                 <MDBFormInline className="md-form mr-auto m-0">
//                   <input
//                     className="form-control mr-sm-2"
//                     type="text"
//                     placeholder="Search"
//                     aria-label="Search"
//                   />
//                   <MDBBtn
//                     outline
//                     color="white"
//                     size="sm"
//                     type="submit"
//                     className="mr-auto"
//                   >
//                     Search
//                   </MDBBtn>
//                 </MDBFormInline>
//               </MDBNavbarNav>
//             </MDBCollapse>
//           </Router>
//         </MDBNavbar>
//       </MDBCol>
//     );
//   }
// }

// export default Searchbar;

import {
    Form,
    FormControl,
    InputGroup,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  
  export default function SearchBar() {
    return (
      <Container className="mt-5">
        <Row>
          <Col sm={10}>
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text className="bg-grey">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.5 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM1 9.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16.853 16.854a.5.5 0 0 0 .707 0l3.793-3.793a.5.5 0 0 0 0-.707l-3.793-3.793a.5.5 0 0 0-.707.707L19.293 12H10.5a.5.5 0 0 0 0 1h8.793l-2.646 2.646a.5.5 0 0 0 0 .707z"
                    />
                  </svg>
                </InputGroup.Text>
                <FormControl type="search" className="me-2" placeholder="Search" />
              </InputGroup>
              
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }