import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemsList from "../../components/ItemsList";
import { fetchPosts } from "../../data/redux/actions";

const PostPage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const posts = useSelector((state) => state.posts.list);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [userId, dispatch]);

    return <ItemsList items={posts} action="posts" />;
};

export default memo(PostPage);
