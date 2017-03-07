import Vue from 'vue';
// import App from './app.vue'
import './index.css';

Vue.component('todo-item', {
  template: '\
    <li>\
    {{ title }}\
    <button @click="$emit(\'remove\')">X</button>\
    </li>\
    ',
  props: ['title',],
});

/**
 * 
 * @param {*} children 
 */
const getChildrenTextContent = function getChildrenTextContent(children) {
  return children.map(node => node.children ?
    getChildrenTextContent(node.children) :
    node.text).join('');
};
Vue.component('anchored-heading', {
  render: function render(createElement) {
    // create kebabCase id
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '');
    return createElement(
      'h' + this.level, [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId,
          },
        }, this.$slots.default),
      ]
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

const child = {
  props: ['items',],
  template: '\
    <ul>\
      <slot name="item" v-for="item in items" :text="item.text">\
      </slot>\
    </ul>\
    ',
};

const app = new Vue({ // eslint-disable-line
  el: '#app',
  data: {
    level: 2,
    title: 'title',
    message: 'hello',
    appStyle: {
      color: 'red',
    },
    number: '2',
    isActive: true,
    items: [
      {
        message: 'Foo',
        text: 'foo',
      },
      {
        message: 'Bar',
        text: 'bar',
      },
      {
        message: 'Fun',
      },
    ],
    newTodoText: '',
    todos: [
      'Do the dishes',
      'Take out the trash',
      'Mow the lawn',
    ],
    show: true,
  },
  filters: {
    capitalize(value) {
      if (!value) return;
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  methods: {
    addNewTodo() {
      this.todos.push(this.newTodoText);
      this.newTodoText = '';
    },
    changeBox() {
      this.title = 'title-2';
    },
  },
  components: {
    'my-awesome-list': child,
  },
  // beforeCreate() { // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  //   this.message = 'hello'
  //   window.console.log('before create ' + this.message)
  //   window.console.log(this.$el)
  // },
  // created() { // 实例已经创建完成之后被调用。
  //   window.console.log('create ' + this.message)
  //   window.console.log(this.$el)
  // },
  // // 该钩子在服务器端渲染期间不被调用。
  // beforeMount() { // 在挂载开始之前被调用：相关的 render 函数首次被调用
  //   window.console.log('befor mount ' + this.message)
  //   window.console.log(this.$el)
  // },
  // mounted() { // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。该钩子在服务器端渲染期间不被调用。
  //   window.console.log('mounted ' + this.message)
  //   window.console.log(this.$el)
  // },
  // // 该钩子在服务器端渲染期间不被调用。
  // beforeUpdate() { // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  //   window.console.log('befor updata ' + this.message)
  //   this.message = '"hello"'
  //   window.console.log(this.$el)
  // },
  // updated() { // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。该钩子在服务器端渲染期间不被调用。
  //   window.console.log('updataed ' + this.message)
  //   window.console.log(this.$el)
  // },
  // deactivated() { // keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。
  //   window.console.log(this.$el)
  // },
  // activated() { // keep-alive 组件激活时调用,该钩子在服务器端渲染期间不被调用。
  //   window.console.log(this.$el)
  // },
  // beforeDestroy() { // 实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。
  //   window.console.log(this.$el)
  // },
  // destroyed() { // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。
  //   window.console.log(this.$el)
  // }

});
