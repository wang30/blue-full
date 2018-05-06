const runner = require('yield-runner-blue')

runner(function *read() {
  const data1 = yield $.ajax({
    url: '/package.json',
    dataType: 'json'
  })
  console.log(data1)

  const data2 = yield $.ajax({
    url: '1.json',
    dataType: 'json'
  })
  console.log(data2)
})