const userList = [
  {
    id: 1,
    phoneNumber: '1415174638',
    userName: '飞翔的小土豆',
    password: 'becauseofyou.123'
  },
  {
    id: 2,
    phoneNumber: '2765673108',
    userName: '飞翔的小茄子',
    password: '191021ting'
  }
]
export const matchUser = function (target) {
  return new Promise((resolve, reject) => {
    if (shallowEqual1(target).id) {
      let response = shallowEqual1(target)
      sessionStorage.setItem('token', target.phoneNumber + 'token' + target.id + new Date().valueOf())
      resolve(response)
    } else {
      reject('用户名与密码不匹配')
    }
  })
}




function shallowEqual1(target) {
  let result = {}
  for (let i = 0; i < userList.length; i++) {
    if (shallowEqual(userList[i], target)) {
      result = userList[i]
      break
    } else {
      result = {}
    }
  }
  return result
}

function shallowEqual(object1, object2) {
  const phone1 = object1.phoneNumber || ''
  const phone2 = object2.phoneNumber || ''
  const password1 = object1.password || ''
  const password2 = object2.password || ''

  if (phone1 === phone2 && password1 === password2) {
    return true
  } else {
    return false
  }
}