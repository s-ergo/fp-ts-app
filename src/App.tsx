import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import "./configs/axios.config";
import { FrontendRoutes } from "./data/constants/FrontendRoutes";
import HomePage from "./pages/homePage/HomePage";
import PostPage from "./pages/postPage/PostPage";

const App = () => {
    return (
        <>
            <CssBaseline />
            <Container sx={{ p: 3 }} maxWidth={false}>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={FrontendRoutes.POST_PAGE()} element={<PostPage />} />
                </Routes>
            </Container>
        </>
    );
};

export default memo(App);
