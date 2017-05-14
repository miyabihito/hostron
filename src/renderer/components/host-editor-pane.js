module.exports = {
  template: `
    <div class="host-editor-pane pane">
      <textarea
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="host-editor-pane__textarea" placeholder="xxx.xxx.xxx.xxx   example.com">
      </textarea>
      <div class="host-editor-pane__btn-pane">
        <button title="save" class="host-editor-pane__btn btn btn-large btn-default"
          :disabled="! editing"
          @click="$emit('editcontent')">
          <span class="icon icon-pencil"></span>
        </button>
        <button title="reset" class="host-editor-pane__btn btn btn-large btn-default"
          :disabled="! editing"
          @click="$emit('resetcontent')">
          <span class="icon icon-back"></span>
        </button>
        <button title="delete" class="host-editor-pane__btn btn btn-large btn-default"
          @click="$emit('delete')">
          <span class="icon icon-trash"></span>
        </button>
      </div>
    </div>
  `,
  props: {
    value: {
      type: String,
      default: ''
    },
    selectedHostItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    editing: function () {
      return this.selectedHostItem.draftContent !== this.selectedHostItem.content
    }
  }
}
