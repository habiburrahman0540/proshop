import React from 'react';
import {Container,Row,Col} from "react-bootstrap"
function Footer() {
    return (
            <footer>
                <Container>
                    <Row>
                        <Col className="footer text-center py-3">Copyright &copy; Pro-shop || Design and develop by Habibur Rahman</Col>
                    </Row>
                </Container>
            </footer>
    );
}

export default Footer;