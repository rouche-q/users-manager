import React, { useState } from "react"
import { FormInput, FormGroup, Col, Row, Button } from "shards-react";
import { MdPerson } from "react-icons/md"

const OrganisationForm = ({ onSubmit }) => {
    const [name, setName] = useState("")

    let submit = () => {
        onSubmit(name)
    }

    return (
        <>
            <Row>
                <Col>
                    <FormGroup>
                        <label>Organisation Name</label>
                        <FormInput onChange={(event) => setName(event.target.value)}></FormInput>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={submit}>
                        {"Create new organisation "}
                        <MdPerson size="2em" />
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default OrganisationForm