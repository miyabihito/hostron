module.exports = {
  template: `
    <div class="right-pane pane">
      <textarea v-model="hostContent" class="right-pane__textarea" placeholder="xxx.xxx.xxx.xxx   example.com">
      </textarea>
      <div class="right-pane__btn-pane">
        <button title="save" class="right-pane__btn btn btn-large btn-default" :disabled="! isHostContentChanged">
          <span class="icon icon-pencil"></span>
        </button>
        <button title="cancel" class="right-pane__btn btn btn-large btn-default" :disabled="! isHostContentChanged">
          <span class="icon icon-back"></span>
        </button>
        <button title="delete" class="right-pane__btn btn btn-large btn-default">
          <span class="icon icon-trash"></span>
        </button>
      </div>
    </div>
  `,
  props: {
    selectedHostItem: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      hostContent: this.selectedHostItem.content
    }
  },
  computed: {
    isHostContentChanged: function () {
      return this.hostContent !== this.selectedHostItem.content
    }
  }
}
