const Vue = require('vue/dist/vue.common.js')
const hostsListPane = require('./components/hosts-list-pane')
const hostsEditorPane = require('./components/hosts-editor-pane')

const HostsItem = require('../hosts-item')

module.exports = new Vue({
  el: '#app',
  template: `
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <hosts-list-pane
            :hosts-items="hostsItems" :selected-hosts-item="selectedHostsItem"
            @select="selectHostsItem" @add="addHostsItem" @savename="saveHostsItemName" @togglestatus="toggleStatus">
          </hosts-list-pane>
          <hosts-editor-pane
            v-model="selectedHostsItem.draftContent"
            :selected-hosts-item="selectedHostsItem"
            @save="saveHostsItemContent" @reset="resetHostsItemDraftContent" @delete="deleteHostsItem">
          </hosts-editor-pane>
        </div>
      </div>
    </div>
  `,
  data: {
    hostsItems: [],
    selectedHostsItem: {}
  },
  methods: {
    selectHostsItem (hostsItem) {
      this.selectedHostsItem = hostsItem
    },
    addHostsItem () {
      const newItem = new HostsItem()
      this.hostsItems.push(newItem)
      this.selectedHostsItem = newItem
    },
    saveHostsItemName (name) {
      this.selectedHostsItem.name = name
    },
    toggleStatus (hostsItem) {
      if (hostsItem.isActive()) {
        hostsItem.deactivate()
      } else {
        hostsItem.activate()
      }
    },
    saveHostsItemContent () {
      this.selectedHostsItem.content = this.selectedHostsItem.draftContent
    },
    resetHostsItemDraftContent () {
      this.selectedHostsItem.draftContent = this.selectedHostsItem.content
    },
    deleteHostsItem () {
      const selectedHostsItem = this.selectedHostsItem
      this.hostsItems = this.hostsItems.filter(function (hostsItem) {
        return hostsItem !== selectedHostsItem
      })
      this.selectedHostsItem = this.hostsItems[0]
    }
  },
  created: function () {
    this.hostsItems = [
      new HostsItem({name: 'original', content: 'aaa', active: true}),
      new HostsItem({name: 'second', content: 'bbb'})
    ]
    this.selectedHostsItem = this.hostsItems[0]
  },
  components: {
    hostsListPane,
    hostsEditorPane
  }
})
