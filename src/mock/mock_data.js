// 导航站数据文件
// 说明：
// 1. 这里的数据是“兜底数据”。部署时若配置了 VITE_SITE_TITLE 等环境变量，会以环境变量为准。
// 2. 也可以通过 /admin 后台可视化编辑，保存后会自动写回本文件并触发重新部署。
// 3. 站点图标统一使用 DuckDuckGo 的 favicon 服务（https://icons.duckduckgo.com/ip3/<域名>.ico），
//    加载失败时前端会自动回退到 /favicon.ico。
//
// 图标快捷写法：icon: "https://icons.duckduckgo.com/ip3/<站点域名>.ico"

const fav = (domain) => `https://icons.duckduckgo.com/ip3/${domain}.ico`

export const mockData = {
  categories: [
    {
      id: 'recommend',
      name: '常用推荐',
      icon: '🔥',
      order: 0,
      sites: [
        { id: 'baidu', name: '百度', url: 'https://www.baidu.com', description: '全球最大中文搜索引擎', icon: fav('www.baidu.com') },
        { id: 'bilibili', name: '哔哩哔哩', url: 'https://www.bilibili.com', description: '国内知名视频弹幕网站', icon: fav('www.bilibili.com') },
        { id: 'taobao', name: '淘宝', url: 'https://www.taobao.com', description: '阿里巴巴旗下网购零售平台', icon: fav('www.taobao.com') },
        { id: 'zhihu', name: '知乎', url: 'https://www.zhihu.com', description: '中文互联网高质量问答社区', icon: fav('www.zhihu.com') },
        { id: 'github', name: 'GitHub', url: 'https://github.com', description: '全球最大的代码托管平台', icon: fav('github.com') },
        { id: 'chatgpt', name: 'ChatGPT', url: 'https://chat.openai.com', description: 'OpenAI 智能对话助手', icon: fav('chat.openai.com') },
        { id: 'douyin', name: '抖音', url: 'https://www.douyin.com', description: '记录美好生活的短视频平台', icon: fav('www.douyin.com') },
        { id: 'jd', name: '京东', url: 'https://www.jd.com', description: '正品低价自营电商', icon: fav('www.jd.com') }
      ]
    },
    {
      id: 'search',
      name: '搜索引擎',
      icon: '🔍',
      order: 1,
      sites: [
        { id: 'baidu2', name: '百度', url: 'https://www.baidu.com', description: '中文搜索引擎', icon: fav('www.baidu.com') },
        { id: 'google', name: 'Google', url: 'https://www.google.com', description: '全球搜索引擎', icon: fav('www.google.com') },
        { id: 'bing', name: 'Bing', url: 'https://www.bing.com', description: '微软搜索引擎', icon: fav('www.bing.com') },
        { id: 'sogou', name: '搜狗', url: 'https://www.sogou.com', description: '搜狗搜索引擎', icon: fav('www.sogou.com') },
        { id: '360', name: '360搜索', url: 'https://www.so.com', description: '360 安全搜索引擎', icon: fav('www.so.com') },
        { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com', description: '注重隐私的搜索引擎', icon: fav('duckduckgo.com') }
      ]
    },
    {
      id: 'video',
      name: '影视娱乐',
      icon: '🎬',
      order: 2,
      sites: [
        { id: 'iqiyi', name: '爱奇艺', url: 'https://www.iqiyi.com', description: '海量影视综艺在线观看', icon: fav('www.iqiyi.com') },
        { id: 'youku', name: '优酷', url: 'https://www.youku.com', description: '阿里大文娱视频平台', icon: fav('www.youku.com') },
        { id: 'qqvideo', name: '腾讯视频', url: 'https://v.qq.com', description: '腾讯视频门户', icon: fav('v.qq.com') },
        { id: 'mgtv', name: '芒果TV', url: 'https://www.mgtv.com', description: '湖南卫视旗下视频', icon: fav('www.mgtv.com') },
        { id: 'bilibili2', name: '哔哩哔哩', url: 'https://www.bilibili.com', description: '弹幕视频网站', icon: fav('www.bilibili.com') },
        { id: 'doubanmovie', name: '豆瓣电影', url: 'https://movie.douban.com', description: '电影评分与资料', icon: fav('movie.douban.com') },
        { id: 'sohutv', name: '搜狐视频', url: 'https://tv.sohu.com', description: '搜狐视频门户', icon: fav('tv.sohu.com') },
        { id: 'miguvideo', name: '咪咕视频', url: 'https://www.miguvideo.com', description: '中国移动视频平台', icon: fav('www.miguvideo.com') }
      ]
    },
    {
      id: 'music',
      name: '音乐电台',
      icon: '🎵',
      order: 3,
      sites: [
        { id: 'netease', name: '网易云音乐', url: 'https://music.163.com', description: '有态度的音乐平台', icon: fav('music.163.com') },
        { id: 'qqmusic', name: 'QQ音乐', url: 'https://y.qq.com', description: '腾讯音乐平台', icon: fav('y.qq.com') },
        { id: 'kugou', name: '酷狗音乐', url: 'https://www.kugou.com', description: '酷狗音乐盒子', icon: fav('www.kugou.com') },
        { id: 'kuwo', name: '酷我音乐', url: 'https://www.kuwo.cn', description: '酷我音乐平台', icon: fav('www.kuwo.cn') },
        { id: 'migu music', name: '咪咕音乐', url: 'https://music.migu.cn', description: '中国移动音乐', icon: fav('music.migu.cn') },
        { id: 'ximalaya', name: '喜马拉雅', url: 'https://www.ximalaya.com', description: '在线音频分享平台', icon: fav('www.ximalaya.com') },
        { id: 'qingting', name: '蜻蜓FM', url: 'https://www.qingting.fm', description: '广播电台聚合', icon: fav('www.qingting.fm') }
      ]
    },
    {
      id: 'social',
      name: '社交社区',
      icon: '💬',
      order: 4,
      sites: [
        { id: 'weibo', name: '微博', url: 'https://weibo.com', description: '随时随地发现新鲜事', icon: fav('weibo.com') },
        { id: 'zhihu2', name: '知乎', url: 'https://www.zhihu.com', description: '有问题，就会有答案', icon: fav('www.zhihu.com') },
        { id: 'tieba', name: '百度贴吧', url: 'https://tieba.baidu.com', description: '全球最大中文社区', icon: fav('tieba.baidu.com') },
        { id: 'xiaohongshu', name: '小红书', url: 'https://www.xiaohongshu.com', description: '标记你的生活', icon: fav('www.xiaohongshu.com') },
        { id: 'douban2', name: '豆瓣', url: 'https://www.douban.com', description: '我们的精神角落', icon: fav('www.douban.com') },
        { id: 'jike', name: '即刻', url: 'https://web.okjike.com', description: '年轻世代的兴趣社区', icon: fav('web.okjike.com') },
        { id: 'tianya', name: '天涯社区', url: 'https://www.tianya.cn', description: '全球华人网上家园', icon: fav('www.tianya.cn') }
      ]
    },
    {
      id: 'shopping',
      name: '购物商城',
      icon: '🛒',
      order: 5,
      sites: [
        { id: 'taobao2', name: '淘宝', url: 'https://www.taobao.com', description: '淘！我喜欢', icon: fav('www.taobao.com') },
        { id: 'tmall', name: '天猫', url: 'https://www.tmall.com', description: '品质购物之城', icon: fav('www.tmall.com') },
        { id: 'jd2', name: '京东', url: 'https://www.jd.com', description: '多快好省', icon: fav('www.jd.com') },
        { id: 'pdd', name: '拼多多', url: 'https://www.pinduoduo.com', description: '拼着买更便宜', icon: fav('www.pinduoduo.com') },
        { id: 'suning', name: '苏宁易购', url: 'https://www.suning.com', description: '智慧零售', icon: fav('www.suning.com') },
        { id: 'vip', name: '唯品会', url: 'https://www.vip.com', description: '品牌特卖', icon: fav('www.vip.com') },
        { id: 'xianyu', name: '闲鱼', url: 'https://www.goofish.com', description: '闲置交易社区', icon: fav('www.goofish.com') },
        { id: 'amazon', name: '亚马逊', url: 'https://www.amazon.cn', description: '综合网购商城', icon: fav('www.amazon.cn') }
      ]
    },
    {
      id: 'news',
      name: '新闻资讯',
      icon: '📰',
      order: 6,
      sites: [
        { id: 'sina', name: '新浪', url: 'https://www.sina.com.cn', description: '门户新闻资讯', icon: fav('www.sina.com.cn') },
        { id: '163news', name: '网易新闻', url: 'https://news.163.com', description: '有态度的新闻', icon: fav('news.163.com') },
        { id: 'qqnews', name: '腾讯新闻', url: 'https://news.qq.com', description: '腾讯新闻门户', icon: fav('news.qq.com') },
        { id: 'sohu2', name: '搜狐', url: 'https://www.sohu.com', description: '搜狐门户', icon: fav('www.sohu.com') },
        { id: 'ifeng', name: '凤凰网', url: 'https://www.ifeng.com', description: '凤凰新媒体', icon: fav('www.ifeng.com') },
        { id: 'people', name: '人民网', url: 'http://www.people.com.cn', description: '人民日报旗下', icon: fav('www.people.com.cn') },
        { id: 'xinhua', name: '新华网', url: 'https://www.news.cn', description: '新华社门户', icon: fav('www.news.cn') },
        { id: 'cctv', name: '央视网', url: 'https://www.cctv.com', description: '中央广播电视总台', icon: fav('www.cctv.com') }
      ]
    },
    {
      id: 'mail',
      name: '邮箱服务',
      icon: '✉️',
      order: 7,
      sites: [
        { id: 'qqmail', name: 'QQ邮箱', url: 'https://mail.qq.com', description: '腾讯QQ邮箱', icon: fav('mail.qq.com') },
        { id: '163mail', name: '网易163', url: 'https://mail.163.com', description: '网易邮箱', icon: fav('mail.163.com') },
        { id: '126mail', name: '126邮箱', url: 'https://mail.126.com', description: '网易126邮箱', icon: fav('mail.126.com') },
        { id: 'outlook', name: 'Outlook', url: 'https://outlook.live.com', description: '微软邮箱', icon: fav('outlook.live.com') },
        { id: 'gmail', name: 'Gmail', url: 'https://mail.google.com', description: '谷歌邮箱', icon: fav('mail.google.com') },
        { id: 'alimail', name: '阿里邮箱', url: 'https://mail.aliyun.com', description: '阿里云邮箱', icon: fav('mail.aliyun.com') }
      ]
    },
    {
      id: 'travel',
      name: '出行旅游',
      icon: '✈️',
      order: 8,
      sites: [
        { id: 'ctrip', name: '携程', url: 'https://www.ctrip.com', description: '携程旅行网', icon: fav('www.ctrip.com') },
        { id: 'quna', name: '去哪儿', url: 'https://www.qunar.com', description: '旅游搜索平台', icon: fav('www.qunar.com') },
        { id: 'feizhu', name: '飞猪', url: 'https://www.fliggy.com', description: '阿里旅行', icon: fav('www.fliggy.com') },
        { id: '12306', name: '12306', url: 'https://www.12306.cn', description: '中国铁路客户中心', icon: fav('www.12306.cn') },
        { id: 'amap', name: '高德地图', url: 'https://www.amap.com', description: '高德地图导航', icon: fav('www.amap.com') },
        { id: 'baidumap', name: '百度地图', url: 'https://map.baidu.com', description: '百度地图', icon: fav('map.baidu.com') },
        { id: 'meituan', name: '美团', url: 'https://www.meituan.com', description: '吃喝玩乐一站式', icon: fav('www.meituan.com') },
        { id: 'didi', name: '滴滴出行', url: 'https://www.didiglobal.com', description: '移动出行平台', icon: fav('www.didiglobal.com') }
      ]
    },
    {
      id: 'life',
      name: '生活服务',
      icon: '🏠',
      order: 9,
      sites: [
        { id: 'alipay', name: '支付宝', url: 'https://www.alipay.com', description: '蚂蚁集团支付平台', icon: fav('www.alipay.com') },
        { id: 'meituan2', name: '美团', url: 'https://www.meituan.com', description: '本地生活服务', icon: fav('www.meituan.com') },
        { id: 'dianping', name: '大众点评', url: 'https://www.dianping.com', description: '餐饮娱乐点评', icon: fav('www.dianping.com') },
        { id: 'eleme', name: '饿了么', url: 'https://www.ele.me', description: '本地即时外卖', icon: fav('www.ele.me') },
        { id: '58', name: '58同城', url: 'https://www.58.com', description: '本地生活服务', icon: fav('www.58.com') },
        { id: 'lianjia', name: '链家', url: 'https://www.lianjia.com', description: '房产交易服务', icon: fav('www.lianjia.com') },
        { id: 'beike', name: '贝壳找房', url: 'https://www.ke.com', description: '居住服务平台', icon: fav('www.ke.com') }
      ]
    },
    {
      id: 'edu',
      name: '教育学习',
      icon: '📚',
      order: 10,
      sites: [
        { id: 'icourse', name: '中国大学MOOC', url: 'https://www.icourse163.org', description: '国家精品课程', icon: fav('www.icourse163.org') },
        { id: 'xuetang', name: '学堂在线', url: 'https://www.xuetangx.com', description: '清华大学发起MOOC', icon: fav('www.xuetangx.com') },
        { id: 'open163', name: '网易公开课', url: 'https://open.163.com', description: '名校公开课', icon: fav('open.163.com') },
        { id: 'wenku', name: '百度文库', url: 'https://wenku.baidu.com', description: '文档资料分享', icon: fav('wenku.baidu.com') },
        { id: 'cnki', name: '中国知网', url: 'https://www.cnki.net', description: '学术文献数据库', icon: fav('www.cnki.net') },
        { id: 'zhihu3', name: '知乎', url: 'https://www.zhihu.com', description: '知识分享社区', icon: fav('www.zhihu.com') }
      ]
    },
    {
      id: 'finance',
      name: '财经股票',
      icon: '💰',
      order: 11,
      sites: [
        { id: 'eastmoney', name: '东方财富', url: 'https://www.eastmoney.com', description: '财经资讯门户', icon: fav('www.eastmoney.com') },
        { id: '10jqka', name: '同花顺', url: 'https://www.10jqka.com.cn', description: '股票行情软件', icon: fav('www.10jqka.com.cn') },
        { id: 'xueqiu2', name: '雪球', url: 'https://xueqiu.com', description: '投资社区', icon: fav('xueqiu.com') },
        { id: 'sina finance', name: '新浪财经', url: 'https://finance.sina.com.cn', description: '新浪财经', icon: fav('finance.sina.com.cn') },
        { id: 'hexun', name: '和讯', url: 'https://www.hexun.com', description: '财经资讯', icon: fav('www.hexun.com') },
        { id: 'qq finance', name: '腾讯财经', url: 'https://finance.qq.com', description: '腾讯财经', icon: fav('finance.qq.com') }
      ]
    },
    {
      id: 'game',
      name: '游戏娱乐',
      icon: '🎮',
      order: 12,
      sites: [
        { id: 'steam', name: 'Steam', url: 'https://store.steampowered.com', description: '全球游戏平台', icon: fav('store.steampowered.com') },
        { id: '4399', name: '4399', url: 'https://www.4399.com', description: '小游戏平台', icon: fav('www.4399.com') },
        { id: '7k7k', name: '7k7k', url: 'https://www.7k7k.com', description: '小游戏平台', icon: fav('www.7k7k.com') },
        { id: 'txgame', name: '腾讯游戏', url: 'https://game.qq.com', description: '腾讯游戏门户', icon: fav('game.qq.com') },
        { id: 'netease game', name: '网易游戏', url: 'https://game.163.com', description: '网易游戏', icon: fav('game.163.com') },
        { id: 'gamersky', name: '游民星空', url: 'https://www.gamersky.com', description: '游戏资讯', icon: fav('www.gamersky.com') },
        { id: '3dm', name: '3DM', url: 'https://www.3dmgame.com', description: '游戏资源下载', icon: fav('www.3dmgame.com') }
      ]
    },
    {
      id: 'dev',
      name: '开发技术',
      icon: '💻',
      order: 13,
      sites: [
        { id: 'github2', name: 'GitHub', url: 'https://github.com', description: '代码托管平台', icon: fav('github.com') },
        { id: 'gitlab', name: 'GitLab', url: 'https://gitlab.com', description: 'DevOps 平台', icon: fav('gitlab.com') },
        { id: 'stackoverflow', name: 'Stack Overflow', url: 'https://stackoverflow.com', description: '程序员问答社区', icon: fav('stackoverflow.com') },
        { id: 'csdn', name: 'CSDN', url: 'https://www.csdn.net', description: '专业开发者社区', icon: fav('www.csdn.net') },
        { id: 'juejin', name: '掘金', url: 'https://juejin.cn', description: '面向开发者的社区', icon: fav('juejin.cn') },
        { id: 'oschina', name: '开源中国', url: 'https://www.oschina.net', description: '开源技术社区', icon: fav('www.oschina.net') },
        { id: 'gitee', name: 'Gitee', url: 'https://gitee.com', description: '码云代码托管', icon: fav('gitee.com') },
        { id: 'mdn', name: 'MDN', url: 'https://developer.mozilla.org', description: 'Web 技术文档', icon: fav('developer.mozilla.org') }
      ]
    },
    {
      id: 'ai',
      name: 'AI 工具',
      icon: '🤖',
      order: 14,
      sites: [
        { id: 'chatgpt2', name: 'ChatGPT', url: 'https://chat.openai.com', description: 'OpenAI 对话模型', icon: fav('chat.openai.com') },
        { id: 'claude', name: 'Claude', url: 'https://claude.ai', description: 'Anthropic AI 助手', icon: fav('claude.ai') },
        { id: 'wenxin', name: '文心一言', url: 'https://yiyan.baidu.com', description: '百度大模型', icon: fav('yiyan.baidu.com') },
        { id: 'tongyi', name: '通义千问', url: 'https://tongyi.aliyun.com', description: '阿里大模型', icon: fav('tongyi.aliyun.com') },
        { id: 'doubao', name: '豆包', url: 'https://www.doubao.com', description: '字节跳动 AI', icon: fav('www.doubao.com') },
        { id: 'zhipu', name: '智谱清言', url: 'https://chatglm.cn', description: '智谱 AI', icon: fav('chatglm.cn') },
        { id: 'midjourney', name: 'Midjourney', url: 'https://www.midjourney.com', description: 'AI 绘画', icon: fav('www.midjourney.com') },
        { id: 'xinghuo', name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', description: '讯飞大模型', icon: fav('xinghuo.xfyun.cn') }
      ]
    },
    {
      id: 'design',
      name: '设计创意',
      icon: '🎨',
      order: 15,
      sites: [
        { id: 'figma', name: 'Figma', url: 'https://www.figma.com', description: '在线 UI 设计工具', icon: fav('www.figma.com') },
        { id: 'zcool', name: '站酷', url: 'https://www.zcool.com.cn', description: '设计师社区', icon: fav('www.zcool.com.cn') },
        { id: 'huaban', name: '花瓣网', url: 'https://huaban.com', description: '图片采集素材', icon: fav('huaban.com') },
        { id: 'lanhu', name: '蓝湖', url: 'https://lanhuapp.com', description: '产品设计协作', icon: fav('lanhuapp.com') },
        { id: 'canva', name: 'Canva', url: 'https://www.canva.com', description: '在线设计平台', icon: fav('www.canva.com') },
        { id: 'jsdesign', name: '即时设计', url: 'https://js.design', description: '国产在线设计', icon: fav('js.design') }
      ]
    },
    {
      id: 'cloud',
      name: '云服务',
      icon: '☁️',
      order: 16,
      sites: [
        { id: 'aliyun', name: '阿里云', url: 'https://www.aliyun.com', description: '阿里云计算', icon: fav('www.aliyun.com') },
        { id: 'tencentcloud', name: '腾讯云', url: 'https://cloud.tencent.com', description: '腾讯云', icon: fav('cloud.tencent.com') },
        { id: 'huaweicloud', name: '华为云', url: 'https://www.huaweicloud.com', description: '华为云', icon: fav('www.huaweicloud.com') },
        { id: 'qiniu', name: '七牛云', url: 'https://www.qiniu.com', description: '对象存储 CDN', icon: fav('www.qiniu.com') },
        { id: 'cloudflare', name: 'Cloudflare', url: 'https://www.cloudflare.com', description: '全球 CDN 与安全', icon: fav('www.cloudflare.com') },
        { id: 'vercel', name: 'Vercel', url: 'https://vercel.com', description: '前端部署平台', icon: fav('vercel.com') },
        { id: 'baiducloud', name: '百度智能云', url: 'https://cloud.baidu.com', description: '百度云', icon: fav('cloud.baidu.com') }
      ]
    },
    {
      id: 'tools',
      name: '实用工具',
      icon: '🧰',
      order: 17,
      sites: [
        { id: 'baidutrans', name: '百度翻译', url: 'https://fanyi.baidu.com', description: '在线翻译', icon: fav('fanyi.baidu.com') },
        { id: 'youdaotrans', name: '有道翻译', url: 'https://fanyi.youdao.com', description: '网易有道翻译', icon: fav('fanyi.youdao.com') },
        { id: 'json', name: 'JSON 格式化', url: 'https://www.json.cn', description: 'JSON 在线解析', icon: fav('www.json.cn') },
        { id: 'caoliu', name: '草料二维码', url: 'https://cli.im', description: '二维码生成', icon: fav('cli.im') },
        { id: 'regex', name: '正则表达式', url: 'https://regex101.com', description: '正则在线测试', icon: fav('regex101.com') },
        { id: 'tinypng', name: 'TinyPNG', url: 'https://tinypng.com', description: '图片压缩', icon: fav('tinypng.com') },
        { id: 'caniuse', name: 'Can I Use', url: 'https://caniuse.com', description: '浏览器兼容查询', icon: fav('caniuse.com') }
      ]
    }
  ],
  title: '云汇导航',
  _fileSha: '',
  search: 'bing'
}
