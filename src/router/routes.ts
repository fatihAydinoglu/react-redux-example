export const routePaths = {
  blogPosts: '/blog',
  post: '/post/:id/:title',
  login: '/login',
  signup: '/signup',
}
const routes = {
  blogPosts: () => routePaths.blogPosts,
  post: (id: number, title: string = '') =>
    routePaths.post
      .replace(':id', id.toString())
      .replace(':title', encodeURIComponent(title.split(' ').join('_'))),
  login: () => routePaths.login,
  signup: () => routePaths.signup,
}

export default routes
