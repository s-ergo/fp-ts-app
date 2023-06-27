export const FrontendRoutes = {
    HOME_PAGE: "/",
    POST_PAGE: (userId) => `/posts/${userId || ":userId"}`,
};
