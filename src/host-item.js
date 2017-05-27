class HostItem {
  constructor ({name = '', content = '', active = false} = {}) {
    this.name = name
    this.content = content
    this.draftContent = this.content
    active ? this.activate() : this.deactivate()
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = String(name)
    return this
  }

  get content () {
    return this._content
  }

  set content (content) {
    this._content = String(content)
    return this
  }

  get draftContent () {
    return this._draftContent
  }

  set draftContent (draftContent) {
    this._draftContent = String(draftContent)
    return this
  }

  isActive () {
    return this._active
  }

  activate () {
    this._active = true
    return this
  }

  deactivate () {
    this._active = false
    return this
  }
}

module.exports = HostItem
