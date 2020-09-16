import React from "react";
import {
    Row,
    Col,
    Button
} from "shards-react"

const UserItem = ({ name, email, organisation, squad, role, onClick, icon}) => {
    return (
        <Row>
            <Col>{name || "Name"}</Col>
            <Col xs={3}>{email || "Email"}</Col>
            <Col>{organisation || "Organisation"}</Col>
            <Col>{squad || "Squad"}</Col>
            <Col>{role || "Role"}</Col>
            {icon ?
                <Button theme="light" onClick={onClick} style={{ padding: "0.5rem" }}>
                    {icon}
                </Button> : <div style={{ height: "2em" }} />
            }
        </Row >

    )
}

export default UserItem