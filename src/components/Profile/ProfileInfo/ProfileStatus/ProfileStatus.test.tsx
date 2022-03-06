import React from "react"
import {create} from 'react-test-renderer';
import {ProfileStatus} from "./ProfileStatus";


describe("Status component", () => {

    test("status from props should be in the state", () => {
        const testRenderer = create(
            <ProfileStatus
                status="Kawabanga!"
            />
        )
        console.log(testRenderer.toJSON());
    })
})
