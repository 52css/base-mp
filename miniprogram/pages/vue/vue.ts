import { Page, ref, computed, reactive, toRefs, watch } from "@/utils/vue";

Page(() => {
  // 定义ref
  const count = ref(0);
  const onClick = () => {
    count.value++;
  };
  // 习惯computed属性开头get，以区分其他响应式数据
  const getDoubleCount = computed(() => count.value * 2);
  // 定义reactive
  const user = reactive({
    id: 123,
    name: "张三",
  });
  const onClick2 = () => {
    user.name = user.name === "李四" ? "张三" : "李四";
  };

  // watch监听, 可监听ref, reactive, computed对应的响应式数据
  watch(
    () => [count.value, getDoubleCount.value, user.name],
    (newVal: any, oldVal: any) => {
      console.log("newVal", newVal, oldVal);
    },
    {
      immediate: true,
    }
  );

  return { count, getDoubleCount, onClick, user, onClick2 };
});
