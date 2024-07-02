# BaseMp 

## 响应式API

### Page 页面

```ts
import { Page } from '@52css/weapp-vue3'

Page(() => {
  // 里面使用hooks方法
})
```

### Component 组件

```ts
import { Component } from '@52css/weapp-vue3'

// 方式一，直接是hooks方法
Component(() => {
  // 里面使用hooks方法
})

// 方式二，传递options
Component({
  props: {
    type: String
  },
  setup(props, ctx) {
    // 这里是hooks方法
  }
})
```

### 定义常量、方法

ts

```ts
import { Page } from '@52css/weapp-vue3'

Page(() => {
  const text = 'hello weapp vue3'
  const handleClick = () => {
    console.log('text', text)
  }

  // 所有定义必须返回
  return { text, handleClick }
})
```

wxml

```html
<view bind:tap="handleClick">
  text:{{text}}
</view>
```

效果，待补充

### ref

ts

```ts
import { Page, ref } from '@52css/weapp-vue3'

Page(() => {
  const count = ref(0)
  const handleClick = () => {
    count.value ++
  }

  // 所有定义必须返回
  return { count, handleClick }
})
```

wxml

```html
<view bind:tap="handleClick">
  count: {{count}}
</view>
```

效果，待补充

### reactive

ts

```ts
import { Page, reactive, toRefs } from '@52css/weapp-vue3'

Page(() => {
  const state = reactive({loading: false})
  const handleClick = () => {
      state.loading = !state.loading
  }

  // 所有定义必须返回
  return { ...toRefs(state), handleClick }
})
```

wxml

```html
<view bind:tap="handleClick">
  loading:{{loading}}
</view>
```

效果，待补充

### computed

ts

```ts
import { Page, ref, computed } from '@52css/weapp-vue3'

Page(() => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const handleClick = () => {
    count.value ++
  }

  // 所有定义必须返回
  return { count, doubleCount, handleClick }
})
```

wxml

```html
<view bind:tap="handleClick">
    <view>count: {{count}}</view>
    <view>doubleCount: {{doubleCount}}</view>
</view>
```

效果，待补充

### watch

ts

```ts
import { Page, ref, watch } from '@52css/weapp-vue3'

Page(() => {
  const count = ref(0)
  const handleClick = () => {
    count.value ++
  }

  watch(count, (newVal, oldVal) => {
    console.log('newVal', newVal, 'oldVal', oldVal)
  })

  // 所有定义必须返回
  return { count, handleClick }
})
```

wxml

```html
<view bind:tap="handleClick">
    count: {{count}}
</view>
```

效果，待补充

### 完成的生命周期

| 分类         | 名称              | 说明 |
| ------------ | ----------------- | ---- |
| 页面生命周期 | onLoad            |      |
|              | onShow            |      |
|              | onReady           |      |
|              | onHide            |      |
|              | onRouteDone       |      |
|              | onPullDownRefresh |      |
|              | onReachBottom     |      |
|              | onPageScroll      |      |
|              | onAddToFavorites  |      |
|              | onShareAppMessage |      |
|              | onShareTimeline   |      |
|              | onResize          |      |
|              | onTabItemTap      |      |
|              | onSaveExitState   |      |
| 组件生命周期 | created           |      |
|              | attached          |      |
|              | ready             |      |
|              | moved             |      |
|              | detached          |      |
|              | error             |      |

