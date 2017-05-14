module.exports = {
  template: `
    <div class="left-pane pane pane-sm sidebar">
      <ul class="list-group">
        <li v-for="hostItem in hostList"
          class="host-item list-group-item" :class="{ active: hostItem === selectedHostItem }"
          @click="$emit('select', hostItem)" >
          <div class="host-item__name pull-left">{{ hostItem.name }}</div>
          <div class="host-item__checkbox pull-right"><input type="checkbox" :checked="hostItem.isActive()"></div>
        </li>
      </ul>
      <button class="host-add-btn btn btn-default" @click="$emit('add')"><span class="icon icon-plus host-add-btn__icon"></span></button>
    </div>
  `,
  props: {
    hostList: {
      type: Array,
      default: () => []
    },
    selectedHostItem: {
      type: Object,
      default: null
    }
  }
}
