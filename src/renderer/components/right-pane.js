module.exports = {
  template: `
    <div class="right-pane pane">
      <textarea
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="right-pane__textarea" placeholder="xxx.xxx.xxx.xxx   example.com">
      </textarea>
      <div class="right-pane__btn-pane">
        <button title="save" class="right-pane__btn btn btn-large btn-default"
          :disabled="! editing"
          @click="$emit('editcontent')">
          <span class="icon icon-pencil"></span>
        </button>
        <button title="cancel" class="right-pane__btn btn btn-large btn-default" :disabled="! editing">
          <span class="icon icon-back"></span>
        </button>
        <button title="delete" class="right-pane__btn btn btn-large btn-default">
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
