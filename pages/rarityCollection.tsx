import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// IMPORTS THE BOOTSTRAP COMPONENTS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const rarityCollection: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR */}
      <Navbar
        className={styles.navbar}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">NFT COLLECTION 1 TITLE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="#">RARITY/COLLECTION</Nav.Link>
              <Nav.Link href="/roadmap">ROADMAP</Nav.Link>
            </Nav>
            <Nav>
              <Button
                className={styles.connectBtn}
                variant="primary outline-success"
                id="connect-btn"
              >
                CONNECT WALLET
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MAIN */}
      <main className={styles.main}>
        <Container className="find">
          <div className={styles.collectionContainer}>
            <h1 className={styles.center}>COLLECTION TITLE</h1>
            <Col>
              <Row className={styles.rowClass}>
                {/* NFT-1 */}
                <Card className={styles.cardClass} style={{ width: "12rem" }}>
                  <Card.Img variant="top" src="nft-card-placeholder.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">MINT NFT</Button>
                  </Card.Body>
                </Card>
                {/* NFT-2 */}
                <Card className={styles.cardClass} style={{ width: "12rem" }}>
                  <Card.Img variant="top" src="nft-card-placeholder.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">MINT NFT</Button>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </div>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default rarityCollection;