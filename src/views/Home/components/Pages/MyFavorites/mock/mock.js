const favoriteData = [
  {
    id: 1,
    path: "../../../../../../../images/newsInfomation/30@2x.png",
    name: '腾讯新闻',
    webUrl: 'https://www.qq.com/'
  },
  {
    id: 2,
    path: "../../../../../../../images/newsInfomation/32@2x.png",
    name: '新浪微博',
    webUrl: 'https://www.sina.com.cn/'
  },
]

export const getFavoriteData = new Promise((resolve) => {
  resolve(favoriteData)
})



