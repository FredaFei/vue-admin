export const formItems1 = [
  {
    tag: "input",
    itemAttrs: {
      label: "用户名"
    },
    attrs: {
      key: "name",
      value: "",
      placeholder: "请输入用户名"
    },
  },
  {
    tag: "input",
    itemAttrs: {
      label: "密码"
    },
    attrs: {
      key: "password",
      type: 'password',
      value: '',
      placeholder: "请输入密码"
    }
  },
];

function validatePassword(rule, value, callback) {
  if (!/^(?![^a-zA-Z]+$)(?!\D+$).{6}$/.test(value)) {
    callback(new Error('密码格式需字母数字混合'));
  } else {
    callback();
  }
}

export const formItems2 = [
  {
    tag: "input",
    itemAttrs: {
      label: "用户名",
      rules: [{required: true, message: "用户名不能为空", trigger: "blur"}]
    },
    attrs: {
      key: "name",
      value: "",
      placeholder: "请输入用户名"
    },
  },
  {
    tag: "input",
    itemAttrs: {
      label: "密码",
      rules: [
        {required: true, message: "密码不能为空", trigger: "blur"},
        {validator: validatePassword, trigger: "blur"},
      ]
    },
    attrs: {
      key: "password",
      type: 'password',
      value: '',
      placeholder: "请输入密码"
    }
  },
  {
    tag: "radio",
    itemAttrs: {
      label: "性别",
      rules: [{required: true, message: '请选择性别', trigger: 'change'}]
    },
    attrs: {
      value: "",
      key: "radio",
      options: [
        {value: "1", label: "男"},
        {value: "2", label: "女"}
      ]
    }
  },
  {
    tag: "checkbox-group",
    itemAttrs: {
      label: "话题",
      rules: [{required: true, message: '请至少选择一个话题', trigger: 'change'}]
    },
    attrs: {
      value: [],
      key: "checkboxGroup",
      options: [
        {value: "1", label: "科技"},
        {value: "2", label: "音乐"},
        {value: "3", label: "体育"}
      ]
    }
  },
];

const whiteList = ['lily', 'bob']

function createableAccount({name}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (whiteList.includes(name.toLocaleLowerCase())) {return reject(`${name}已被占用`)}
      return resolve()
    }, 1000)
  })
}

export function validateUsername(rule, value, callback) {
  createableAccount({name: value}).then(() => {
    callback()
  }, err => {
    callback(err)
  })
}

export const formItems3 = [
  {
    tag: "input",
    itemAttrs: {
      label: "用户名",
      rules: [
        {required: true, message: "用户名不能为空", trigger: "blur"},
        {validator: validateUsername, trigger: "blur"},
      ]
    },
    attrs: {
      key: "name",
      value: "",
      placeholder: "请输入用户名"
    },
  },
  {
    tag: "input",
    itemAttrs: {
      label: "密码",
      rules: [
        {required: true, message: "密码不能为空", trigger: "blur"},
        {validator: validatePassword, trigger: "blur"},
      ]
    },
    attrs: {
      key: "password",
      type: 'password',
      value: '',
      placeholder: "请输入密码"
    }
  },
];

export const formItems4 = [
  {
    tag: "input",
    itemAttrs: {
      label: "用户名"
    },
    attrs: {
      key: "name",
      value: "",
      placeholder: "请输入用户名"
    },
    getAttrs(Model) {
      //返回一个被合并到当前attrs属性里的对象
      return Model.age === "22" ? {disabled: true} : null;
    }
  },
  {
    tag: "input",
    itemAttrs: {
      label: "年龄",
      rules: [{required: true, message: "年龄不能为空", trigger: "click"}]
    },
    attrs: {
      key: "age",
      value: 12,
      placeholder: "请输入年龄"
    },
    ifRender(Model) {
      //爱好为2时隐藏年龄
      return Model.hobby === "2";
    }
  },
  {
    tag: "select",
    itemAttrs: {
      label: "兴趣"
    },
    attrs: {
      key: "hobby",
      value: "2",
      placeholder: "请输入兴趣",
      options: [
        {value: "1", label: "吃饭"},
        {value: "2", label: "睡觉"},
        {value: "3", label: "打豆豆"}
      ]
    }
  },
  {
    tag: "date",
    itemAttrs: {
      label: "日期"
    },
    attrs: {
      key: "date",
      value: "2019/11/12"
    }
  },
];

export const formItems5 = [
  {
    tag: "radio",
    itemAttrs: {
      label: "调用后端接口-单选框"
    },
    attrs: {
      value: "1",
      key: "asyncRadio",
      options: []
    }
  },
  {
    tag: "cascader",
    itemAttrs: {
      label: "级联选择器"
    },
    attrs: {
      key: "cascader",
      value: [],
      options: []
    }
  },
  {
    tag: "textarea",
    itemAttrs: {
      label: "文本框"
    },
    attrs: {
      key: "textarea"
    }
  }
];

export const formItems6 = [
  {
    tag: "input",
    itemAttrs: {
      label: "用户名"
    },
    attrs: {
      key: "name",
      value: "",
      placeholder: "请输入用户名"
    },
  },
  {
    tag: "input",
    itemAttrs: {
      label: "密码"
    },
    attrs: {
      key: "password",
      type: 'password',
      value: '',
      placeholder: "请输入密码"
    }
  },
  {
    slot: "slotCheckBox",
    itemAttrs: {
      label: "插槽复选框"
    }
  },
];
