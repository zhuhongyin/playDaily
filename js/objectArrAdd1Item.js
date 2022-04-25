function a() {
  let values = { test: 'v222', asdasd: 'v1', "build.tool": 'v3' };
  let arr = [
    { defaultValue: 'v1', key: 'asdasd', label: 'labe1', description: 'asdasd', required: true },
    { defaultValue: 'v2', key: 'test', label: 'lab2', description: 'asdasd', required: true },
    { defaultValue: 'v3', key: 'build.tool', label: 'lab3', description: '33333', required: true }
  ]
  const configKeys = Object.keys(values);
  const config = configKeys.map((key) => {
    const item = arr.find(item => item.key === key)
    return { value: values[key], ...item }
  });
  let body = { config };
  console.log("a", body);

}
a();

function b() {
  let values = { test: 'v2', "build.tool": 'v3', asdasd: 'v1' };
  let arr = [
    { defaultValue: 'v1', key: 'asdasd', label: 'labe1', description: 'asdasd', required: true },
    { defaultValue: 'v2', key: 'test', label: 'lab2', description: 'asdasd', required: true },
    { defaultValue: 'v3', key: 'build.tool', label: 'lab3', description: '33333', required: true }
  ];

  const config = arr.map(item => {
    return {
      value: values[item.key],
      ...item
    }
  });
  let body = { config: config };
  console.log("b", body);
}
b();