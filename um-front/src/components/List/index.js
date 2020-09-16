import React, { cloneElement } from "react"
import { Container } from "shards-react"
import "./ContainersList.css"

import UserItem from "./UserItem"
import OrganisationItem from "./OrganisationItem"

const List = ({data, header, component}) => {

    let renderItems = () => {
        if (data && component)
        return data.map((item, index) => cloneElement(component(item), {key: index}))
    }

    return (
        <Container fluid className="list">
            {header}
            {renderItems()}
        </Container>
    )
}

export {List, UserItem, OrganisationItem}