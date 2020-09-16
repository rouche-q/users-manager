import React, { useState } from "react"
import { FormInput, FormGroup, Col, Row, FormSelect, Button } from "shards-react";
import { MdPerson, MdClose } from "react-icons/md"

const UserForm = ({ onSubmit, user }) => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [organisation, setOrganisation] = useState("")
    const [squad, setSquad] = useState("")
    const [role, setRole] = useState("Leader")

    let submit = () => {
        onSubmit(firstname, lastname, email, organisation, squad, role)
    }

    return (
        <>
            <Row>
                <Col>
                    <FormGroup>
                        <label>First Name</label>
                        <FormInput onChange={(event) => setFirstName(event.target.value)}></FormInput>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <label>Last Name</label>
                        <FormInput onChange={(event) => setLastName(event.target.value)}></FormInput>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <label>Email</label>
                        <FormInput onChange={(event) => setEmail(event.target.value)}></FormInput>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <label>Organisation</label>
                        <FormInput onChange={(event) => setOrganisation(event.target.value)}></FormInput>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <label>Squad</label>
                        <FormInput onChange={(event) => setSquad(event.target.value)}></FormInput>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <label>Role</label>
                        <FormSelect onChange={(event) => setRole(event.target.value)}>
                            <option value="Leader">Leader</option>
                            <option value="Member">Member</option>
                            <option value="Minion">Minion</option>
                        </FormSelect>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={submit}>
                        {"Create new user "}
                        <MdPerson size="2em" />
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default UserForm