const ipUrl = 'http://localhost:7001/'
const servicePath = {
  getArticleList: ipUrl + 'getArticleList',  //  首页文章列表接口
  getArticleById: ipUrl + 'getArticleById',  // 文章详细页内容接口 ,需要接收参数
  getTypeInfo: ipUrl + 'getTypeInfo',  // 文章类别接口
  getArticleListById: ipUrl + 'getArticleListById',
}

export default servicePath