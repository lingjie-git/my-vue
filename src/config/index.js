// 环境配置文件  
//开发
//测试
//线上

//当前环境
const env =import.meta.env.MODE || 'prod'

const EnvConfig={
    development:{
        baseApi:'api',
        mockApi: 'https://www.fastmock.site/mock/01c4434fb5d7159b618b5e83aa327bf2/api'
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/01c4434fb5d7159b618b5e83aa327bf2/api'
    },
    pro: {
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/01c4434fb5d7159b618b5e83aa327bf2/api'
    },
}
export default{
    env,
    mock:false,
    ...EnvConfig[env]
}