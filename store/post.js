export const actions = {
  async FETCH_ADMIN() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: 'Post1',
            date: new Date(),
            views: 22,
            comments: [1, 2],
            id: Math.random(),
          },
          {
            title: 'Post2',
            date: new Date(),
            views: 22,
            comments: [1, 2, 3, 4],
            id: Math.random(),
          },
        ])
      }, 500)
    })
  },
  // async REMOVE({}, id) {},
}
