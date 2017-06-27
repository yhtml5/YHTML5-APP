我来介绍下有赞前端团队
31 July 2016 on 有赞, 前端
一、有赞是干嘛的

2012年11月27日，有赞在杭州贝塔咖啡开始孵化，现在已经成为服务罗辑思维、读库、良品铺子等200万商户的中国领先的移动零售服务商。目前有赞的业务有：有赞批发、有赞分销、有赞微商城、有赞C端入口等。几乎所有的微信用户，他关注的微信公众号里就至少有一个是使用有赞来搭建、维护、管理的。此外还有大量第三方独立APP在使用有赞。

“第三方独立APP” 怎么使用有赞？举个例子：很多独立的APP，比如喜马拉雅、比如一些母婴APP，它有流量，如何变现呢？如何让用户的积分发挥作用呢？—— 在有赞开一个移动商城，然后把H5页面嵌到APP里，就可以直接卖东西了，也可以让用户在这个移动商城里使用积分。
二、有赞前端团队是一群什么样的人
1、我们

我们一共22个人，出生年份分布在87年~95年之间，其中89年的最多且基本上都是单身。曾经有很长一段时间，在有赞前端团队存在一个“89汪诅咒” —— 所有89年的都是单身的，所有单身的都是89年的。

我们一半来自国内大的互联网公司：网易、淘宝、美团、去哪儿。还有1/4是在这儿实习了一年转正或者刚毕业过来工作才一两年的，都已经成为独当一面的老司机。

我们做了下统计，我们所有的前端刚好有 50% 是毕业自 985、211 的院校，77% 是计算机及相关专业的，这个比例还是比较高的。
2、我们是怎么做事儿的？
创意精英

如果你看过前 Google CEO Eric Schmidt 写的 How Google Works。你大概会比较容易理解我们是怎么做事儿的。很多做事风格和理念我们和 Google 是差不多的。

我们大部分人都在前端大团队里，按照业务职责分了若干个业务小组，业务小组之间会互相调剂 —— 前端这个工种总是容易一会儿这儿很忙那儿很闲，一会儿这儿闲那儿忙。印象中没有出现过有人以 “这不是我的职责范围” 为由而推卸事情，这是最基本的。

这样安排的好处是：大家可以在专业上很方便地互相学习、沟通、提高，也比较方便互相review代码给自己找到备份。除了日常的业务开发，几乎每个人都会有并行的性能优化、代码优化、组件库建设、完善测试脚本、工程化等工作。

这样安排的坏处是：前端跟业务有一定距离，不容易对业务有长期的跟进和深入的把握。

所以，我们要求我们的小伙伴是 “创意精英”（至少是这么要求自己）。“创意精英” 会自我驱动地主动地去接事情做、去找事情做，并不断去优化。
做事儿

我们的前端会比较主动地参与项目过程，很多业务项目、技术项目是前端驱动的，甚至有多个前端在项目中兼这PM的职责。我们推崇用最优雅的方式解决问题，而不是仅仅用前端的方式解决问题，所以我们会参与一部分后端的开发、会和运维部门密切配合改进性能和安全性、会在产品部门提出正式的视觉规范前先把UI组件库建设好。

如果一个前端参与的项目因为各种原因出问题了，我们是不接受这个前端说：我之前就知道xxx。我们的逻辑是这样的：如果你作为一个前端知道这个项目哪里是有问题的（哪怕跟前端无关），你没有提出来，没有去推动项目组去做调整，你就是错了。
实习生

我们发现我们这儿的实习生待的时间都很长 —— 最近刚有2个实习了1年的实习生毕业转正了。为什么会这样呢？有个小伙伴给了个理由：我们把实习生当正式员工用。
3、我们的 TL 是咋样的？

我（德来）现在 暂时 是这个团队的TL，平时主要工作就是招人，然后把招进来的人当爷一样伺候好：）。如果需要，你可以通过我的 博客 更多了解我。

为什么要强调 暂时 呢？因为据说如果我能招到一个人能把我现在干的活儿给接了，我就可以升职加薪走上人生巅峰带更大一个团队。你应该感受到了 —— 我是一个很有野心的人。

    所以，有赞前端团队也是个傲娇的、有野心的团队。

三、我们做了哪些傲娇的事情

    每年都组团参加前端技术会议。
    我们去年做了全站HTTPS，为HTTP2做好了准备。
    我们之前在PC端和移动端大量使用Backbone，并积累了完整的基于Backbone的前端架构和组件库。
    我们做了自己的PC端和移动端的UI库。
    我们对移动端的页面性能做了优化，平均页面打开时间（loaded）是1.15s。
    我们开发了大量的公司内部开发辅助工具、管理工具。
    我们有大量的React项目，并初步形成了自己的React组件库：Zent（几乎每个人都参与了这个组件库的开发）。
    写了几篇 文章
    开源了几个项目：TinyLoader、felint

四、我们最近在做什么&将要做什么

    补全单元测试、完善自动UI-Test流程。
    优雅的 线上js错误收集和报警 机制。
    接着完善 React 组件库并落地到更多业务中，尽早达到开源的水准。
    尝试把 Polymer 在内部项目中落地。
    Node 脚手架、通用模块的建设。
    完善新人培训体系、完善团队梯度建设。
    开源更多项目。

下个月，我们会组团，一共7个人，去参加 NingJs，公司报销，22333。

当然，最重要的，大量的新业务等着我们利用上面这些积累去更好地实现。