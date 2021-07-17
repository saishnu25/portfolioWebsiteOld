import {styled} from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { ThemeConsumer } from "styled-components"

export const NavbarButton = styled(Button)({
    padding: "10% 10%",
    color: "white",
    background: "Transparent",
    transition: "ease-in 0.2s",

    '&:hover': {
        backgroundColor: "Transparent",
        color: "gray",
    }

})