import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "types";
import ItemsList from "../../components/ItemsList";
import { fetchPosts } from "../../data/redux/actions";

const PostPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { userId } = useParams();
    const posts = useSelector((state: RootState) => state.posts.list);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [userId, dispatch]);

    return <ItemsList items={posts} action="posts" />;
};

export default memo(PostPage);
