import React from 'react';
import { Button, Card } from 'react-bootstrap';
const News = () => {
    return (
        <Card className="text-center bg-light" style={{ margin: "10px 0" }}>
            <Card.Header>Top Product</Card.Header>
            <Card.Body>
                <Card.Title>Sei Phone</Card.Title>
                <Card.Text>This is from future!</Card.Text>
                <Button variant="danger">Buy it now!</Button>
            </Card.Body>
        </Card>
    );
};

export default News;