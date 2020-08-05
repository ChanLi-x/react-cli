module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': ['error', 2], // 缩进2个空格
    'semi': ['warn', 'never'], // 不加分号
    'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    'eqeqeq': [2, 'allow-null'], // 使用 === 替代 == allow-null允许null和undefined==
    'no-else-return': 0, // 禁止 if 语句中有 return 之后有 else
    'no-multi-spaces': 2, // 禁止使用多个空格
    'camelcase': 2, // 驼峰命名
    'comma-dangle': [1, 'always-multiline'], // 多行模式必须带逗号，单行模式不能带逗号
    'keyword-spacing':2, // 强制在关键字前后使用一致的空格
    'spaced-comment': [2, 'always'], // 注释后面空格
    'jsx-quotes': 0, // 强制在 JSX 属性中一致地使用双引号或单引号
    'max-params':[1, 4], // 强制 function 定义中最多允许的参数数量
    'new-parens': 2, // 要求调用无参构造函数时有圆括号
    'no-nested-ternary': 0, // 不允许使用嵌套的三元表达式
    'no-trailing-spaces': 2, // 禁用行尾空格
    'space-before-function-paren': [2, 'always'], // 强制在 function的左括号之前使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-var': 0, // 要求使用 let 或 const 而不是 var
    'prefer-template': 0, // 要求使用模板字面量而非字符串连接
    // 'quotes': [2, 'single'], // 使用单引号
    'array-bracket-spacing': [2, 'never'], // 数组之间的空格
    'react/jsx-indent-props': [2,2], // 验证JSX中的props缩进
    'max-len': ['error', 150], // 强制一行最大长度
    'react/require-default-props': 'off', // 非require的propTypes必须制定默认值
    'react/no-set-state': 2, // 不必要的组件改写成无状态组件
    'react/no-direct-mutation-state': 2, // 禁止直接this.state = 方式修改state 必须使用setState
    'react/self-closing-comp': 2, // 没有children的组件和html必须使用自闭和标签
    'react/jsx-equals-spacing': 2, // 属性赋值不允许有空格
    'react/jsx-first-prop-new-line': 2, // 只有一个属性情况下单行
    'react/jsx-key': 2, // 强制遍历出来的jsx加key
    'no-underscore-dangle': 'off', // 避免多行表达式
    'react/no-children-prop': 'off', // 禁止使用children作为prop
    'object-curly-newline': 'off', // 强制将对象的属性放在不同的行上
    'react/sort-comp': 'off',// 强制组件方法顺序
    'react/no-array-index-key': 'off', // 遍历出来的节点必须加key
    // 'linebreak-style': ['off', 'windows'], // 强制使用一致的换行风格
    'no-confusing-arrow': 'off', // 禁止在可能与比较操作符相混淆的地方使用箭头函数
  },
  'globals': {
    'document': true,
    'localStorage': true,
  },
}
