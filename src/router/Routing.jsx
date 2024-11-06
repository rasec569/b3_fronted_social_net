import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../components/layouts/public/PublicLayout";
import { PrivateLayout } from "../components/layouts/private/PrivateLayout";
import { Login } from "../components/layouts/public/Login";
import { Feed } from "../components/publication/Feed";
import { People } from "../components/user/People";
import { Config } from "../components/user/Config";
import { Error404 } from "../components/layouts/Error404";
import { Register } from "../components/user/Register";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicLayout />} >
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>    


                <Route path="/rsocial" element={<PrivateLayout />} >
                    <Route index element={<Feed />} />
                    <Route path='feed' element={<Feed />} />
                    <Route path='gente' element={<People />} />
                    <Route path='ajustes' element={<Config />} />
                </Route>

                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}
