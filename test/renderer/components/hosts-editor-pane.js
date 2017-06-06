const assert = require('assert')
const Vue = require('vue/dist/vue.common.js')
const HostsEditorPane = require('../../../src/renderer/components/hosts-editor-pane')
const HostsItem = require('../../../src/hosts-item')

describe('HostsEditorPane', function () {
  describe('editing', function () {
    context('when draft is not the same as content', function () {
      it('should be true', function () {
        const item = new HostsItem({content: 'test'})
        const Pane = Vue.extend(HostsEditorPane)
        const vm = new Pane({
          propsData: {
            selectedHostsItem: item
          }
        })
        vm.selectedHostsItem.draftContent = 'editing'
        assert.strictEqual(vm.editing, true)
      })
    })
    context('when draft is the same as content', function () {
      it('should be false', function () {
        const item = new HostsItem({content: 'test'})
        const Pane = Vue.extend(HostsEditorPane)
        const vm = new Pane({
          propsData: {
            selectedHostsItem: item
          }
        })
        assert.strictEqual(vm.editing, false)
      })
    })
  })
})
