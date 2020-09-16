import React from "react";
import {
    Row,
    Col,
    Button
} from "shards-react"

const OrganisationItem = ({ name, onClick, icon}) => {
    return (
        <Row>
            <Col>{name || "Name"}</Col>
            {icon ?
                <Button theme="light" onClick={onClick} style={{ padding: "0.5rem" }}>
                    {icon}
                </Button> : <div style={{ height: "2em" }} />
            }
        </Row >

    )
}

export default OrganisationItem