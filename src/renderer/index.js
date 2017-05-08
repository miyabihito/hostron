const Vue = require('vue/dist/vue.common.js')
const leftPane = require('./components/left-pane')
const rightPane = require('./components/right-pane')

module.exports = new Vue({
  el: '#app',
  template: `
    <div class="window">
      <div class="window-content">
        <div class="pane-group">
          <left-pane></left-pane>
          <right-pane></right-pane>
        </div>
      </div>
    </div>
  `,
  components: {
    leftPane,
    rightPane
  }
})
