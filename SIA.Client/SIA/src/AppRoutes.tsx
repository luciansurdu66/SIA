import React from "react"
import { Route, Routes } from "react-router-dom"
import { routesNames } from "./routes/routes"
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'))
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={routesNames.home} element={<HomePage />} /> 
            <Route path={routesNames.login} element={<LoginPage />} />   
            <Route path={routesNames.profile} element={<ProfilePage />} />           
        </Routes>
    )
}

export default AppRoutes