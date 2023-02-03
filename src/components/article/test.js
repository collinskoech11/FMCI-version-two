fetch('https://api.hashnode.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
    query GetUserArticles {
        user(username: "xenia555") {
          publication {
            posts {
              title
              brief
              slug
              coverImage
            }
          }
        }
      }
      `,
    variables: {
      now: new Date().toISOString(),
    },
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result.data.user.publication));