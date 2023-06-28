export const FrontendRoutes = {
    HOME_PAGE: "/",
    POST_PAGE: (userId: string): string => `/posts/${userId || ":userId"}`,
};
