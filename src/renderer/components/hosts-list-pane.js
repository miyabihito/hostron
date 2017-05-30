module.exports = {
  template: `
    <div class="hosts-list-pane pane pane-sm sidebar">
      <ul class="hosts-list list-group">
        <li v-for="hostsItem in hostsItems"
          class="hosts-item list-group-item" :class="{ 'hosts-item_selected': hostsItem === selectedHostsItem }"
          @click="$emit('select', hostsItem)">
          <div v-if="hostsItem !== hostsItemInEdit"
            class="hosts-item__name pull-left"
            @click="editName(hostsItem)">
            {{ hostsItem.name !== '' ? hostsItem.name : '&nbsp;' }}
          </div>
          <input v-else ref="input" type="text" class="hosts-item__input pull-left"
            :value="hostsItem.name"
            @change="onInputChange" @blur="onInputBlur">
          <div class="hosts-item__checkbox pull-right">
            <input type="checkbox" :checked="hostsItem.isActive()" @click.stop="$emit('togglestatus', hostsItem)">
          </div>
        </li>
      </ul>
      <button class="hosts-add-btn btn btn-default" @click="addHostsItem"><span class="icon icon-plus hosts-add-btn__icon"></span></button>
    </div>
  `,
  props: {
    hostsItems: {
      type: Array,
      default: () => []
    },
    selectedHostsItem: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      hostsItemInEdit: null
    }
  },
  methods: {
    async addHostsItem () {
      this.$emit('add')
      await this.$nextTick()
      this.hostsItemInEdit = this.selectedHostsItem
      await this.$nextTick()
      this.$refs.input[0].focus()
    },
    editName (hostsItem) {
      if (this.selectedHostsItem === hostsItem) {
        this.hostsItemInEdit = hostsItem
        this.$nextTick(function () {
          this.$refs.input[0].focus()
        })
      }
    },
    onInputChange (event) {
      this.hostsItemInEdit = null
      this.$emit('savename', event.target.value)
    },
    onInputBlur () {
      this.hostsItemInEdit = null
    }
  }
}
