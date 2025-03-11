import React, { useState } from 'react';

const SimpleComponent = () => {
  const [activeTab, setActiveTab] = useState('热点资讯');
  
  // 主导航选项
  const navTabs = [
    '热点资讯',
    '人设定位', 
    '运营计划', 
    '平台选题', 
    '内容库',
    '智能创作'
  ];
  
  // 模拟热点数据
  const hotTopics = [
    { id: 1, title: '元宇宙发展新动向', score: 92, trend: 'up', lifespan: '3天' },
    { id: 2, title: 'AI绘画引发版权争议', score: 87, trend: 'up', lifespan: '5天' },
    { id: 3, title: '新一代折叠屏手机对比', score: 78, trend: 'stable', lifespan: '2天' }
  ];
  
  // 内容库数据
  const libraryItems = [
    { id: 1, title: 'AI绘画版权争议分析', type: '深度解析', status: 'ready', date: '2025-03-05' },
    { id: 2, title: '手机折叠屏技术革新', type: '科技前沿', status: 'draft', date: '2025-03-04' }
  ];
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 左侧边栏 */}
      <div className="w-64 bg-white shadow-lg">
        {/* Logo区域 */}
        <div className="p-4 border-b flex items-center">
          <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">AI</div>
          <h1 className="ml-3 text-xl font-bold text-gray-800">智媒助手</h1>
        </div>
        
        {/* 导航菜单 */}
        <nav className="p-2">
          {navTabs.map((tab) => (
            <button 
              key={tab}
              className={`w-full text-left px-4 py-3 rounded-lg mb-1 text-sm font-medium ${
                activeTab === tab 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
        
        {/* 快捷操作区 */}
        <div className="p-4 border-t border-b mt-4">
          <h3 className="text-xs font-medium text-gray-500 uppercase mb-3">快捷操作</h3>
          <div className="space-y-2">
            <button 
              className="w-full py-2 px-3 bg-indigo-600 text-white rounded-md text-sm font-medium"
            >
              快速创建选题
            </button>
            <button 
              className="w-full py-2 px-3 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium"
            >
              AI一键创作
            </button>
          </div>
        </div>
      </div>
      
      {/* 右侧内容区域 */}
      <div className="flex-1 p-6 overflow-auto">
        {/* 顶部操作栏 */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{activeTab}</h2>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
              内容库
            </button>
            <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">
              智能创作
            </button>
          </div>
        </div>
        
        {/* 热点资讯 */}
        {activeTab === '热点资讯' && (
          <div className="space-y-6">
            {/* 顶部主要内容 */}
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-indigo-700">实时热搜聚合</h3>
                  <div className="flex space-x-4 mb-6">
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">全部</button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">微博</button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">抖音</button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">知乎</button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">小红书</button>
                  </div>
                  
                  <div className="space-y-4">
                    {hotTopics.map((topic) => (
                      <div key={topic.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">
                          {topic.score}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="font-medium">{topic.title}</div>
                          <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                            <span>相关度评分: {topic.score}/100</span>
                            <span>趋势: {topic.trend === 'up' ? '上升' : topic.trend === 'down' ? '下降' : '稳定'}</span>
                            <span>预计热度持续: {topic.lifespan}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                            添加选题
                          </button>
                          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            直接创作
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="col-span-1">
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-indigo-700">内容框架推荐</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">选择热点话题</label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border">
                      <option>AI绘画引发版权争议</option>
                      <option>元宇宙发展新动向</option>
                      <option>新一代折叠屏手机对比</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="p-3 border rounded-lg bg-green-50 border-green-200">
                      <h4 className="font-medium text-green-800">深度分析框架</h4>
                      <p className="text-xs text-green-700 mt-1">背景介绍 → 关键问题 → 多方观点 → 技术分析 → 未来展望</p>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium">观点评论框架</h4>
                      <p className="text-xs text-gray-600 mt-1">开场引入 → 鲜明观点 → 三点论证 → 案例支持 → 行动建议</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full py-2 bg-indigo-600 text-white rounded-md text-sm font-medium">
                      保存到内容库
                    </button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4 text-indigo-700">平台匹配度</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">小红书</span>
                        <span className="text-sm font-medium text-green-600">92%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: "92%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">抖音</span>
                        <span className="text-sm font-medium text-green-600">85%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{width: "85%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 平台热门视频与框架分析 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-indigo-700">近期平台热门内容分析</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">抖音</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">小红书</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">知乎</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">微信</button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500">热门视频预览图</div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium mb-1">10分钟带你理解AI绘画版权之争</h4>
                    <div className="flex space-x-4 text-xs text-gray-500 mb-2">
                      <span>播放量: 320万</span>
                      <span>点赞: 42.6万</span>
                      <span>评论: 3.8万</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">科技博主"未来派"解析AI绘画版权问题，从技术原理到法律争议全面分析</p>
                    <div className="mt-2">
                      <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">参考此框架</button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3">内容框架分析</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs flex items-center justify-center mr-2 mt-0.5">1</span>
                      <div>
                        <div className="text-sm font-medium">引入冲突 (0:00-0:45)</div>
                        <div className="text-xs text-gray-600">艺术家与AI公司的对立立场，使用具体案例引入</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs flex items-center justify-center mr-2 mt-0.5">2</span>
                      <div>
                        <div className="text-sm font-medium">技术原理简化讲解 (0:45-2:30)</div>
                        <div className="text-xs text-gray-600">使用简单比喻解释AI学习过程，配合动画</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs flex items-center justify-center mr-2 mt-0.5">3</span>
                      <div>
                        <div className="text-sm font-medium">法律争议核心 (2:30-5:15)</div>
                        <div className="text-xs text-gray-600">对比传统著作权与AI创作，邀请律师观点</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs flex items-center justify-center mr-2 mt-0.5">4</span>
                      <div>
                        <div className="text-sm font-medium">多方案例展示 (5:15-8:00)</div>
                        <div className="text-xs text-gray-600">展示3个不同国家的处理方式，对比异同</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-xs flex items-center justify-center mr-2 mt-0.5">5</span>
                      <div>
                        <div className="text-sm font-medium">平衡观点与展望 (8:00-10:00)</div>
                        <div className="text-xs text-gray-600">提出折中解决方案，预测政策走向</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <div className="text-sm font-medium mb-1">互动设计亮点:</div>
                    <div className="text-xs text-gray-600">评论区预设3个有争议性的问题引导讨论，增加互动率</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 热议话题与竞品分析 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4 text-indigo-700">热议话题</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">AI艺术是否应支付版税给原创艺术家?</h4>
                      <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs">热议</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>该话题在知乎引发超过500万阅读，3.6万关注，正反方观点评论量接近</p>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-gray-500">
                      <span>情绪: 对立性强</span>
                      <span>参与人群: 艺术家/技术人/法律从业者</span>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">添加为选题</button>
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">分析观点分布</button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">AI模型训练使用公共数据是否需授权?</h4>
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">上升中</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>相关法律法规讨论激增，涉及科技伦理、数据隐私、知识产权等跨领域讨论</p>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-gray-500">
                      <span>情绪: 专业性强</span>
                      <span>参与人群: 政策制定者/学者/企业代表</span>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">添加为选题</button>
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">分析观点分布</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4 text-indigo-700">竞品账号内容动态</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="ml-3">
                        <div className="font-medium">科技前沿观察</div>
                        <div className="text-xs text-gray-500">200万粉丝 | 科技内容创作者</div>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">高互动率</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-medium">近期高赞内容:</div>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">AI绘画十大优质场景应用指南</span>
                          <span className="text-xs text-gray-500">2.5万赞</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">与艺术家共存:AI创作者的道德准则</span>
                          <span className="text-xs text-gray-500">1.8万赞</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-600">
                      <div className="font-medium">竞品策略分析:</div>
                      <p className="mt-1">注重实用主义内容，结合伦理讨论，平衡技术与人文视角</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="ml-3">
                        <div className="font-medium">数字艺术评论</div>
                        <div className="text-xs text-gray-500">150万粉丝 | 艺术内容创作者</div>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">高转化率</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm font-medium">近期发布节奏:</div>
                      <div className="mt-2 text-xs text-gray-600">
                        <p>每周2篇深度文章 + 3个短视频，固定周三、周六发布长内容</p>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-600">
                      <div className="font-medium">运营亮点:</div>
                      <p className="mt-1">建立AI艺术社区，粉丝提交作品获点评，形成良性互动循环</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* 内容库 */}
        {activeTab === '内容库' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-indigo-700">选题内容库</h3>
              <div className="flex space-x-2">
                <input type="text" placeholder="搜索内容..." className="px-3 py-1 border rounded-md text-sm" />
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
                  新建选题
                </button>
              </div>
            </div>
            
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">选题名称</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建日期</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {libraryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status === 'ready' ? '可创作' : '草稿'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">创作</button>
                      <button className="text-gray-600 hover:text-gray-900">编辑</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* 智能创作 */}
        {activeTab === '智能创作' && (
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-indigo-700">内容创作</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">选择创作类型</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 border rounded-lg text-center bg-indigo-50 border-indigo-300">
                      <div className="font-medium">小红书笔记</div>
                      <div className="text-xs text-gray-500 mt-1">种草、测评、经验分享</div>
                    </button>
                    <button className="p-3 border rounded-lg text-center">
                      <div className="font-medium">抖音脚本</div>
                      <div className="text-xs text-gray-500 mt-1">短视频文案与拍摄脚本</div>
                    </button>
                    <button className="p-3 border rounded-lg text-center">
                      <div className="font-medium">知乎回答</div>
                      <div className="text-xs text-gray-500 mt-1">专业问答与深度解析</div>
                    </button>
                    <button className="p-3 border rounded-lg text-center">
                      <div className="font-medium">营销文案</div>
                      <div className="text-xs text-gray-500 mt-1">朋友圈、公众号推广</div>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">选择内容主题</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm p-2 border">
                    <option>AI绘画引发版权争议</option>
                    <option>元宇宙发展新动向</option>
                    <option>新一代折叠屏手机对比</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">创作要求</label>
                  <textarea className="w-full border-gray-300 rounded-md shadow-sm p-2 border" rows="3" 
                    placeholder="例：希望从技术角度分析，突出创新性，加入2-3个案例..."></textarea>
                </div>
                
                <div className="pt-4">
                  <button className="w-full py-2 bg-indigo-600 text-white rounded-md text-sm font-medium">
                    开始创作
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-indigo-700">创作预览</h3>
              <div className="bg-gray-50 p-4 rounded-md h-64 flex items-center justify-center text-gray-400">
                点击"开始创作"生成内容
              </div>
              
              <div className="mt-4 space-y-3 opacity-50 pointer-events-none">
                <h4 className="font-medium">内容改写</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">提升专业度</button>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">增加互动感</button>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">精简文字</button>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm">增加案例</button>
                </div>
                
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">返回编辑</button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm ml-2">保存内容</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleComponent;
