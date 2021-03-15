# 你不知道的 BFC

## 什么是 BFC
BFC: block formatting context（块级格式化上下文）

MDN: 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

可以理解为一个独立渲染区域，只有 block-box(块级盒子) 参与，规定内部的 block-box 如何布局，里面如何布局都不会影响到 BFC 外面。就是一个管理块级元素的容器。

---

## 如何触发 BFC

首先我想表述的是，BFC 可以认作是一个隐藏的样式属性，你无法像其他样式属性一样去显示改变它，但是它在一些情况下会被触发。

- float: 不是 none
- overflow: 不是 visible
- position: absolute || fixed
- display: table-cell || inline-block || flex 等
- 根元素 html
- [更多](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

---

## BFC 有什么用

- 解决 margin 的重叠和穿透（BFC下最上方和最下方的子元素穿透，同一个 BFC 下出现重叠）
- 解决浮动的影响（父元素坍塌、兄弟元素被覆盖）

个人观点：其实 margin 在垂直方向上的穿透和重叠原因是一样的。默认盒子是没有占位内容的，也就是没有一个真正占位的元素让设置 margin 的盒子去做 margin 定位。
一句话就是： 没有内容将父元素和后代元素分开。

MDN 对重叠穿透对解释：如果没有边框border，内边距padding，行内内容，也没有创建块级格式上下文或清除浮动来分开一个块级元素的上边界margin-top 与其内一个或多个后代块级元素的上边界margin-top；或没有边框，内边距，行内内容，高度height，最小高度min-height或 最大高度max-height 来分开一个块级元素的下边界margin-bottom与其内的一个或多个后代后代块元素的下边界margin-bottom，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。[（#链接）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

张鑫旭对 margin 重叠的原因解释为：考虑到阅读，margin 这么设计是为了确保每个段落之间的间隔比例一致。[（#链接）](https://www.zhangxinxu.com/wordpress/2009/08/css-margin%e7%9a%84%e7%9b%b8%e5%85%b3%e5%b1%9e%e6%80%a7%ef%bc%8c%e9%97%ae%e9%a2%98%e5%8f%8a%e5%ba%94%e7%94%a8/)

