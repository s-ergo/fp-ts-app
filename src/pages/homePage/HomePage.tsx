import Button from "@mui/material/Button";
import { flow } from "fp-ts/function";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch, RootState } from "types";
import ItemsList from "../../components/ItemsList";
import { FrontendRoutes } from "../../data/constants/FrontendRoutes";
import { fetchAlbums, fetchUsers } from "../../data/redux/actions";
import ModalList from "./ModalList";

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const users = useSelector((state: RootState) => state.users.list);
    const albums = useSelector((state: RootState) => state.albums.list);
    const [open, setOpen] = useState(false);

    const handlePosts = flow(FrontendRoutes.POST_PAGE, navigate);
    const handleAlbums = flow(fetchAlbums, dispatch, () => setOpen(true));

    return (
        <>
            <Button variant="contained" onClick={() => dispatch(fetchUsers())}>Fetch users</Button>
            <ItemsList items={users} action="users" handlePosts={handlePosts} handleAlbums={handleAlbums} />
            <ModalList open={open} setOpen={setOpen} albums={albums} />
        </>
    );
};

export default memo(HomePage);
