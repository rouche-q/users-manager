import React from "react"
import {
    Card,
    CardBody,
    CardHeader,
} from "shards-react"

const BoringCard = ({ children, title }) => {
    return (
        <Card>
            <CardHeader>{title || "Boring Title"}</CardHeader>
            <CardBody>
            {children}
            </CardBody>
        </Card>
    )
}

export default BoringCard 