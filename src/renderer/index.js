const Vue = require('vue/dist/vue.common.js')
const leftPane = require('./components/left-pane')
const rightPane = require('./components/right-pane')

module.exports = new Vue({
  el: '#app',
  template: `
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <left-pane
            :host-list="hostList" :selected-host-item="selectedHostItem"
            @select="selectHostItem" @add="addHostItem" @editname="editHostItemName" @activate="activateHostItem" @deactivate="deactivateHostItem">
          </left-pane>
          <right-pane
            v-model="selectedHostItem.draftContent"
            :selected-host-item="selectedHostItem"
            @editcontent="editHostItemContent" @delete="deleteHostItem">
          </right-pane>
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
    },
    editHostItemName () {
    },
    activateHostItem () {
    },
    deactivateHostItem () {
    },
    editHostItemContent () {
    },
    deleteHostItem () {
    }
  },
  created: function () {
    this.hostList = [
      {
        name: 'default',
        content: 'aaa',
        draftContent: 'aaa',
        isActive () {
          return true
        }
      },
      {
        name: 'second',
        content: 'bbb',
        draftContent: 'bbb',
        isActive () {
          return false
        }
      }
    ]
    this.selectedHostItem = this.hostList[0]
  },
  components: {
    leftPane,
    rightPane
  }
})
