import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
// import {Row, Col,Form, Button } from "react-bootstrap";

import {
  Badge,
  ButtonGroup,
  Card,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import Image from "next/image";
import { setCookie, deleteCookie } from "cookies-next";
import { Button } from "react-bootstrap";
import Script from "next/script";

export const NavbarComponent = () => {
  const [Authentication, setAuthentication] = useState(false);
  const [Username, setUsername] = useState("Guest");
  const [Point, setPoint] = useState(0);
  const [Rank, setRank] = useState("");
  const handleLogout = async (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    deleteCookie("token");
    setAuthentication(false);
    setUsername("Guest");
    return Swal.fire({
      icon: "success",
      title: "ออกจากระบบแล้ว",
      text: "ขอบคุณที่มาใช้บริการครับ/ค่ะ",
      timer: 2000,
      buttonsStyling: false,
      confirmButtonText: "Bye...",
      customClass: {
        confirmButton: "btn button-62-success",
      },
      showClass: {
        popup: "animate__animated animate__slideInDown",
      },
      hideClass: {
        popup: "animate__animated animate__lightSpeedOutLeft animate__faster",
      },
    });
  };
  // useEffect(() => {
  //   async function checkToken() {
  //     if (!localStorage.getItem("token")) {
  //       console.log("You don't have a token");
  //       deleteCookie("token");
  //       return;
  //     }
  //     axios({
  //       method: "GET",
  //       url: "http://localhost:8080/apiV1/user/authentication",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.status == 200) {
  //           setAuthentication(true);
  //           setUsername(res.data.data.data.username);
  //           setPoint(res.data.data.data.point);
  //           setRank(res.data.data.data.Stats);
  //           setCookie("token", localStorage.getItem("token"));
  //           localStorage.setItem("username", res.data.data.data.username);
  //         }
  //       })
  //       .catch((err) => {
  //         if (err.status == 401) {
  //           console.log("User unauthorized");
  //           if (localStorage.getItem("token") != "") {
  //             localStorage.removeItem("token");
  //             deleteCookie("token");
  //           }
  //         } else {
  //           localStorage.removeItem("token");
  //           deleteCookie("token");
  //         }
  //         setAuthentication(false);
  //         setUsername("Guest");
  //       });
  //   }
  //   checkToken();
  // });
  if (!Authentication) {
    return (
      <>
        <Script src="https://code.jquery.com/jquery-3.6.3.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />
        {[false].map((expand) => (
          <Navbar
            key={expand}
            bg="[#AEDEFC]"
            expand={expand}
            data-aos="fade-down"
            lassName="mb-3 rounded-top-lg border-radius-10"
          >
            <div
              data-aos="fade-down"
              className="mx-auto myContainer relative flex flex-col md:flex-row justify-between items-center"
            >
              {/* bg-[#AEDEFC] */}
              {/* <Navbar
            key={expand}
            bg="white"
            expand={expand}
            className="flex md:h-[80px] text-blue-400 bg-gray-100/80 backdrop-blur-md"
          > */}
              <div class="item-center center justify-center flex text-xl font-semibold transition ease-in hover:drop-shadow-md hover:-translate-y-0.5">
                <li className="md:p-4 py-2 md:block">
                  <Link
                    href="/home"
                    className="router-link-active router-link-exact-active"
                  >
                    <img
                      src="https://www.kornpitack.ac.th/img/logo.png"
                      width="65"
                      height="65"
                      className="item-center justify-center"
                      alt="test"
                    />
                  </Link>
                </li>
              </div>
            </div>
            <div className="">
              <Link
                href="/login"
                className="bg-gradient-to-t from-pink-500 to-pink-300 text-white p-2 rounded-md shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <i className="0 mdi mdi-login"></i>
                {""} เข้าสู่ระบบ{""}
              </Link>     {""}
            </div>     {""}
          </Navbar>
        ))}
      </>
    );
  } else {
    return (
      <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="/home">
                <Image
                  src=""
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                  alt="test"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="bg-white text-dark"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                className=" text-white"
              >
                <Offcanvas.Header></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Card className="ml-3 text-center text-dark" bg="white">
                      <div className="d-flex justify-content-center">
                        <Image
                          src="/imgs/profile.png"
                          width="100"
                          height="100"
                          alt="test"
                        />
                      </div>
                      <br></br>
                      <h6>
                        🙍‍♂️ชื่อผู้ใช้งาน: <Badge bg="success">{Username}</Badge>
                      </h6>
                      <h6>
                        💰จำนวน: <Badge bg="success">{Point} ₱</Badge>
                      </h6>
                      <h6>
                        🔴สถานะ: <Badge bg="success">{Rank}</Badge>
                      </h6>
                      <Dropdown className="d-inline mx-2" autoClose="outside">
                        <div className="d-grid gap-2">
                          <Dropdown.Toggle
                            id="dropdown-autoclose-outside"
                            variant="success"
                          >
                            <i className="mdi mdi-history"></i>{" "}
                            ประวัติการทำรายการ
                          </Dropdown.Toggle>
                        </div>
                        <Dropdown.Menu>
                          <div className="d-grid gap-2">
                            <Link href="/history/stock" className="btn ml-5">
                              <i className="mdi mdi-store"></i>{" "}
                              ประวัติการสั่งซื้อ
                            </Link>
                            <Link href="/history/topup" className="btn ml-5">
                              <i className="mdi mdi-currency-usd"></i>{" "}
                              ประวัติการเติมเงิน
                            </Link>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                      <br></br>
                      <Button variant="outline-danger" onClick={handleLogout}>
                        <i className="mdi mdi-logout-variant"></i> ออกจากระบบ
                      </Button>
                    </Card>
                    <hr></hr>
                    <>
                      <Link
                        href="/"
                        className="border-2 border-green-500 text-center btn-hakko2"
                      >
                        🏠<br></br>หน้าหลัก
                      </Link>
                      <br></br>
                      <Link
                        href="/shop"
                        className="border-2 border-green-500 text-center btn-hakko2"
                      >
                        🛒<br></br>Vote
                      </Link>
                      <br></br>
                      <Link
                        href="/topup"
                        className="border-2 border-green-500 text-center btn-hakko2"
                      >
                        💰<br></br>
                      </Link>
                      <br></br>
                      <Link
                        href=""
                        className="border-2 border-green-500 text-center btn-hakko2"
                      >
                        ☎<br></br>ติดต่อ
                      </Link>
                      <br></br>
                      <Link
                        href=""
                        className="border-2 border-green-500 text-center btn-hakko2"
                      >
                        🤖<br></br>ดิสคอร์ด
                      </Link>
                    </>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
};
