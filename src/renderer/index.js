const Vue = require('vue/dist/vue.common.js')
const leftPane = require('./components/left-pane')
const rightPane = require('./components/right-pane')

module.exports = new Vue({
  el: '#app',
  template: `
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <left-pane :host-list="hostList" :selected-host-item="selectedHostItem"></left-pane>
          <right-pane :selected-host-item="selectedHostItem"></right-pane>
        </div>
      </div>
    </div>
  `,
  data: {
    hostList: [],
    selectedHostItem: {}
  },
  created: function () {
    this.hostList = [
      {
        name: 'default',
        content: 'aaa',
        isActive () {
          return true
        }
      },
      {
        name: 'second',
        content: 'bbb',
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
