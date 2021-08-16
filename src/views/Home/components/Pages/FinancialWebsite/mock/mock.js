const webData = [
  {
    id: 1,
    path: "../../../../../../../images/financialWebsite/财联社.png",
    name: '财联社',
    webUrl: 'https://www.qq.com/'
  },
  {
    id: 2,
    path: "../../../../../../../images/financialWebsite/东方财富.png",
    name: '东方财富',
    webUrl: 'https://www.sina.com.cn/'
  },
  {
    id: 3,
    path: "../../../../../../../images/financialWebsite/工信部.png",
    name: '工信部',
    webUrl: 'https://www.sohu.com/'
  },
  {
    id: 4,
    path: "../../../../../../images/financialWebsite/搜狐财经.png",
    name: '搜狐财经',
    webUrl: 'https://www.163.com/'
  },
  {
    id: 5,
    path: "../../../../../../../images/financialWebsite/同花顺.png",
    name: '同花顺',
    webUrl: 'http://www.xinhuanet.com/'
  },
  {
    id: 6,
    path: "../../../../../../../images/financialWebsite/央视财经.png",
    name: '央视财经',
    webUrl: 'https://www.cctv.com/'
  }
]

export const getFinWebsite = new Promise((resolve) => {
  resolve(webData)
})



