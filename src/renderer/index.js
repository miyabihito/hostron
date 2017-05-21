const Vue = require('vue/dist/vue.common.js')
const hostListPane = require('./components/host-list-pane')
const hostEditorPane = require('./components/host-editor-pane')

const HostItem = require('../host-item')

module.exports = new Vue({
  el: '#app',
  template: `
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <host-list-pane
            :host-list="hostList" :selected-host-item="selectedHostItem"
            @select="selectHostItem" @add="addHostItem" @savename="saveHostItemName" @togglestatus="toggleStatus">
          </host-list-pane>
          <host-editor-pane
            v-model="selectedHostItem.draftContent"
            :selected-host-item="selectedHostItem"
            @save="saveHostItemContent" @reset="resetHostItemDraftContent" @delete="deleteHostItem">
          </host-editor-pane>
        </div>
      </div>
    </div>
  `,
  data: {
    hostList: [],
    selectedHostItem: {}
  },
  methods: {
    selectHostItem (hostItem) {
      this.selectedHostItem = hostItem
    },
    addHostItem () {
      const newItem = new HostItem()
      this.hostList.push(newItem)
      this.selectedHostItem = newItem
    },
    saveHostItemName (name) {
      this.selectedHostItem.name = name
    },
    toggleStatus (hostItem) {
      if (hostItem.isActive()) {
        hostItem.deactivate()
      } else {
        hostItem.activate()
      }
    },
    saveHostItemContent () {
      this.selectedHostItem.content = this.selectedHostItem.draftContent
    },
    resetHostItemDraftContent () {
      this.selectedHostItem.draftContent = this.selectedHostItem.content
    },
    deleteHostItem () {
      const selectedHostItem = this.selectedHostItem
      this.hostList = this.hostList.filter(function (hostItem) {
        return hostItem !== selectedHostItem
      })
      this.selectedHostItem = this.hostList[0]
    }
  },
  created: function () {
    this.hostList = [
      new HostItem({name: 'original', content: 'aaa', active: true}),
      new HostItem({name: 'second', content: 'bbb'})
    ]
    this.selectedHostItem = this.hostList[0]
  },
  components: {
    hostListPane,
    hostEditorPane
  }
})
