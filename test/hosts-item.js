const assert = require('assert')
const HostsItem = require('../src/hosts-item')

describe('HostsItem', function () {
  describe('.constructor()', function () {
    context('when called with no argument', function () {
      it('should have empty name', function () {
        const hostsItem = new HostsItem()
        assert.strictEqual(hostsItem.name, '')
      })
      it('should have empty content', function () {
        const hostsItem = new HostsItem()
        assert.strictEqual(hostsItem.content, '')
      })
      it('should have empty draft content', function () {
        const hostsItem = new HostsItem()
        assert.strictEqual(hostsItem.draftContent, '')
      })
      it('should be inactive', function () {
        const hostsItem = new HostsItem()
        assert.strictEqual(hostsItem.isActive(), false)
      })
    })
    context('when called with an argument', function () {
      it('should have the specified name', function () {
        const hostsItem = new HostsItem({name: 'test name'})
        assert.strictEqual(hostsItem.name, 'test name')
      })
      it('should have the specified content', function () {
        const hostsItem = new HostsItem({content: 'test content'})
        assert.strictEqual(hostsItem.content, 'test content')
      })
      it('should have the same draft content as content', function () {
        const hostsItem = new HostsItem({content: 'test content'})
        assert.strictEqual(hostsItem.draftContent, 'test content')
      })
      it('should have the specified state', function () {
        const hostsItem = new HostsItem({active: true})
        assert.strictEqual(hostsItem.isActive(), true)
      })
    })
  })

  describe('.name', function () {
    it('should be string', function () {
      const hostsItem = new HostsItem()
      hostsItem.name = 123
      assert.strictEqual(hostsItem.name, '123')
    })
  })

  describe('.content', function () {
    it('should be string', function () {
      const hostsItem = new HostsItem()
      hostsItem.content = 123
      assert.strictEqual(hostsItem.content, '123')
    })
  })

  describe('.draftContent', function () {
    it('should be string', function () {
      const hostsItem = new HostsItem()
      hostsItem.draftContent = 123
      assert.strictEqual(hostsItem.draftContent, '123')
    })
  })

  describe('.isActive()', function () {
    context('called after activated', function () {
      it('should return true', function () {
        const hostsItem = new HostsItem()
        hostsItem.activate()
        assert.strictEqual(hostsItem.isActive(), true)
      })
    })
    context('called after deactivated', function () {
      it('should return false', function () {
        const hostsItem = new HostsItem()
        hostsItem.deactivate()
        assert.strictEqual(hostsItem.isActive(), false)
      })
    })
  })
})
