const fs = require('fs')

/**
 * @description: 用于生成周报文件，node 执行此文件即可生成 commits.md
 * @param {
 *    commitFlow: String, 要处理的 commit 流
 *    commitType: Array, 要包含的 commit 类型
 *    gitUserName: String 要筛选的用户名
 * }
 * @return: undefined
 */
let transferToMd = ({ commitFlow, commitType, gitUserName }) => {
  // 匹配 提交类型 + :
  let regStr = commitType.map(item => item + ':').join('|')

  // 正则表达式
  let reg = new RegExp(`(${regStr})(.)*(?=(\n)?${gitUserName})`, 'gm')
  let arr = commitFlow.match(reg)
  // 去掉重复的元素
  arr = [...new Set(arr)]

  let obj
  obj = {}
  commitType.forEach(item => {
    // TODO 可以考虑优化算法，此处反复遍历
    obj[item] = arr.filter(commit => {
      return commit.indexOf(item) !== -1
    })
  })

  for (let key in obj) {
    // 元素增加 markdown 列表语法
    obj[key] = obj[key].map(item => '- ' + item)
  }

  let markdownFlow = ''
  for (let key in obj) {
    // 类别用二级标题
    markdownFlow = markdownFlow + '## ' + key + '\n\n'
    obj[key].forEach(item => {
      // 每一种类型最后一条 commit 需要多一行换行和其他类型间隔出来
      markdownFlow =
        markdownFlow +
        item +
        (obj[key].indexOf(item) === obj[key].length - 1 ? '\n\n' : '\n')
    })
  }
  // 最终结果写入文件
  fs.writeFile('./commits.md', markdownFlow, function (err) {
    console.log(markdownFlow)
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
}

// 输入任何你需要提取的类型
// fix\feat\perf\refactor\style...
let commitType = ['feat', 'fix', 'perf', 'refactor']

// 输入你的提交记录比如
// feat: 集群复制规则支持选择角色
// user on 2020/4/10 下午3:35:22
// 70fa3aeba  SoftHardTagBranchMore
// perf: 集群规则获取初始化选项改进
// user on 2020/4/10 上午11:05:10
// a67a05c72  SoftHardTagBranchMore
// feat: I2应用IP地址，改为集群IP地址
// user on 2020/4/10 上午10:07:51
let gitFlowCommits = `
`

transferToMd({
  commitFlow: gitFlowCommits,
  commitType: commitType,
  gitUserName: 'ganglin.chen'
})
