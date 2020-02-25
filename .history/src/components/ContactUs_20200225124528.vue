<template>
  <form class="form-horizontal">
    <fieldset>
      <legend>書籍登録</legend>
      <div :class="errorClassObject('title')" class="form-group">
        <label for="inputTitle" class="col-md-2 control-label">タイトル</label>
        <div class="col-md-10">
          <input v-model="edit.title" type="text" class="form-control" id="inputTitle" placeholder="書籍タイトル">
        </div>
      </div>
      <div :class="errorClassObject('summary')" class="form-group">
        <label for="inputSummary" class="col-md-2 control-label">サマリ</label>
        <div class="col-md-10">
          <textarea v-model="edit.summary" class="form-control" rows="3" id="inputSummary"></textarea>
        </div>
      </div>
      <div :class="errorClassObject('isbn')" class="form-group">
        <label for="inputIsbn" class="col-md-2 control-label">ISBN</label>
        <div class="col-md-10">
          <input v-model="edit.isbn" type="text" class="form-control" id="inputIsbn" placeholder="ISBN">
        </div>
      </div>
      <div :class="errorClassObject('release')" class="form-group">
        <label for="inputRelease" class="col-md-2 control-label">発売日</label>
        <div class="col-md-10">
          <input v-model="edit.release" type="date" class="form-control" id="inputRelease">
        </div>
      </div>
      <div class="form-group">
        <div class="col-md-10 col-md-offset-2">
          <button
            @click="doSubmit"
            :disabled="isValid == false"
            type="submit" class="btn btn-primary center-block">Submit</button>
        </div>
      </div>
    </fieldset>
  </form>
</template>


<script>
const isbn10RE = /^[0-9]{9}[0-9X]$/
const dateRE   = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
export default {
  name: "ContactUs",
  data() {
    return {
      edit: {
        title  : "",
        summary: "",
        isbn   : "",
        release: ""
      },
      maxLength: 10
    }
  },
  computed: {
    validation() {
      const edit = this.edit
      return {
        title  : (!!edit.title && edit.title.length <= this.maxLength),
        summary: (!!edit.summary),
        isbn   : (!!edit.isbn    && isbn10RE.test(edit.isbn)),
        release: (!!edit.release && dateRE.test(edit.release))
      }
    },
    isValid() {
      const validation = this.validation
      return Object
        .keys(validation)
        .every(function (key) {
          return validation[key]
      })
    }
  },
  methods: {
    errorClassObject(key) {
      return {
        'has-error': (this.validation[key] == false)
      }
    },
    doSubmit() {
      // 美しさに感動してしまうPOST処理
    }
  }
}
</script>

};
</script>

<style scoped>
</style>