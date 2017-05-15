module.exports = {
  template: `
    <div class="host-list-pane pane pane-sm sidebar">
      <ul class="host-list list-group">
        <li v-for="hostItem in hostList"
          class="host-item list-group-item" :class="{ 'host-item_selected': hostItem === selectedHostItem }"
          @click="$emit('select', hostItem)" >
          <div class="host-item__name pull-left">{{ hostItem.name }}</div>
          <div class="host-item__checkbox pull-right">
            <input type="checkbox" :checked="hostItem.isActive()" @click.stop="$emit('togglestatus', hostItem)">
          </div>
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
