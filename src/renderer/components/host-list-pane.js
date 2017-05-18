module.exports = {
  template: `
    <div class="host-list-pane pane pane-sm sidebar">
      <ul class="host-list list-group">
        <li v-for="hostItem in hostList"
          class="host-item list-group-item" :class="{ 'host-item_selected': hostItem === selectedHostItem }"
          @click="$emit('select', hostItem)" >
          <div v-if="hostItem !== hostItemInEdit"
            class="host-item__name pull-left"
            @click="editName(hostItem)">
            {{ hostItem.name !== '' ? hostItem.name : '&nbsp;' }}
          </div>
          <input v-else ref="input" type="text" class="host-item__input pull-left"
            :value="hostItem.name"
            @change="onInputChange" @blur="onInputBlur">
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
  },
  data: function () {
    return {
      hostItemInEdit: null,
    }
  },
  methods: {
    editName (hostItem) {
      if (this.selectedHostItem === hostItem) {
        this.hostItemInEdit = hostItem
        this.$nextTick(function () {
          this.$refs.input[0].focus()
        })
      }
    },
    onInputChange (event) {
      this.hostItemInEdit = null
      this.$emit('savename', event.target.value)
    },
    onInputBlur () {
      this.hostItemInEdit = null
    }
  }
}
