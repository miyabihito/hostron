module.exports = {
  template: `
    <div class="hosts-editor-pane pane">
      <textarea
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="hosts-editor-pane__textarea" placeholder="xxx.xxx.xxx.xxx   example.com">
      </textarea>
      <div class="hosts-editor-pane__btn-pane">
        <button title="save" class="hosts-editor-pane__btn btn btn-large btn-default"
          :disabled="! editing"
          @click="$emit('save')">
          <span class="hosts-editor-pane__btn-icon icon icon-pencil"></span>
        </button>
        <button title="reset" class="hosts-editor-pane__btn btn btn-large btn-default"
          :disabled="! editing"
          @click="$emit('reset')">
          <span class="hosts-editor-pane__btn-icon icon icon-back"></span>
        </button>
        <button title="delete" class="hosts-editor-pane__btn btn btn-large btn-default"
          @click="$emit('delete')">
          <span class="hosts-editor-pane__btn-icon icon icon-trash"></span>
        </button>
      </div>
    </div>
  `,
  props: {
    value: {
      type: String,
      default: ''
    },
    selectedHostsItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    editing: function () {
      return this.selectedHostsItem.draftContent !== this.selectedHostsItem.content
    }
  }
}
