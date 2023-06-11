import { RouterApp } from "./router.app"
import { RouterAuth } from "./router.auth"
import { useContext } from "react"
import { AuthContext } from "../context/auth"

export const Routes = () => {

    const { ativo } = useContext(AuthContext);
    // return ativo ? <RouterAuth /> : <RouterApp />
    return <RouterAuth />

}