<template>
<div id="app" v-clock>
  <div class="container bg-dark text-white p-5">
    <h2 class="text-center border-bottom border-white pb-3 mb-5">
      自動見積もりフォーム
    </h2>
    <form>
      <!-- ムービーの種類 -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label pt-0">制作したいムービー
          <span class="badge badge-danger">必須</span>
        </label>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-5">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="movie_type" id="type1" value="余興ムービー" v-model="movieType">
                <label class="form-check-label" for="type1">余興ムービー</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="movie_type" id="type2" value="サプライズムービー" v-model="movieType">
                <label class="form-check-label" for="type2">サプライズムービー</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="movie_type" id="type3" value="生い立ちムービー" v-model="movieType">
                <label class="form-check-label" for="type3">生い立ちムービー</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="movie_type" id="type4" value="オープニングムービー" v-model="movieType">
                <label class="form-check-label" for="type4">オープニングムービー</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 挙式日 -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label pt-0" for="wedding_date">挙式日
          <span class="badge badge-danger">必須</span>
        </label>
        <div class="col-md-9">
          <input class="form-control" type="date" id="wedding_date" placeholder="日付をお選びください。" v-model="wedding_date">
          <small class="form-text">結婚式のお日にちを選択してください。</small>
        </div>
      </div>
      <!-- DVD仕上がり予定日 -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label pt-0" for="delivery_date">DVD仕上がり予定日
          <span class="badge badge-danger">必須</span>
        </label>
        <div class="col-md-9">
          <input class="form-control" type="date" id="delivery_date" v-bind:min="tommorow" placeholder="日付をお選びください。" v-model="delivery_date">
          <small class="form-text">挙式日の１週間前までにDVDが必要な場合が多いため、仕上がり予定日を挙式日の１週間前に設定しております。</small>
        </div>
      </div>
      <!-- 小計：基本料金 -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label pt-0">基本料金（税込）</label>
          <div class="col-md-9">
            <div class="input-group">
              <input type="text" class="form-control text-right" id="sum_base" v-bind:value="taxedBasePrice | number_format" readonly>
              <div class="input-group-append">
                <label class="input-group-text">円</label>
              </div>
            </div>
          </div>
        </div>
        <!-- オプションメニュー -->
        <div class="form-group row">
          <label class="col-md-3 col-form-label pt-0">オプションメニュー
            <span class="badge badge-info">任意</span>
          </label>
          <div class="col-md-9">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="opt1" v-model="opt1_use">
              <label class="form-check-label" for="opt1">BGM手配 + {{ taxedOpt1 | number_format }}円</label>
              <small class="form-text">当社で曲を手配させていただく場合は、1曲あたり {{ taxedOpt1 | number_format }}円（税込）がかかります。</small>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="opt2" v-model="opt2_use">
              <label class="form-check-label" for="opt2">撮影 + {{ taxedOpt2 | number_format }}円</label>
              <small class="form-text">当社に撮影を依頼する場合の料金です。</small>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="opt3" v-model="opt3_use">
              <label class="form-check-label" for="opt3">DVD盤面撮影 + {{ taxedOpt3 | number_format }}円</label>
              <small class="form-text">当社でDVDの盤面をデザインさせていただく場合は、 {{ taxedOpt3 | number_format }}円（税込）がかかります。</small>
            </div>
            <div class="form-row mb-3 align-center">
              <div class="col-auto">
                <label class="form-check-label" for="opt4">写真スキャニング + {{ taxedOpt4 | number_format }}円</label>
              </div>
              <div class="col-auto">
                <div class="input-group">
                  <input class="form-control" type="number" id="opt4" v-model.number="opt4_num" min="0" max="30">
                  <div class="input-group-append">
                    <label class="input-group-text" for="opt4">円</label>
                  </div>
                </div>
              </div>
              <small class="form-text">プリントアウトした写真のスキャニングをご希望の方は、1枚あたり {{ taxedOpt4 | number_format }}円にて挙ります。</small>
            </div>
          </div>
        </div>
        <!-- 小計：オプション料金 -->
        <div class="form-group row">
          <label class="col-md-3 col-form-label pt-0">オプション料金（税込）</label>
          <div class="col-md-9">
            <div class="input-group">
              <input type="text" class="form-control text-right" id="sum_opt" v-bind:value="taxedOptPrice | number_format" readonly>
              <div class="input-group-append">
                <label class="input-group-text">円</label>
              </div>
            </div>
          </div>
        </div>
        <!-- 合計：基本料金＋オプション料金 -->
        <div class="form-group row">
          <label class="col-md-3 col-form-label pt-0">合計（税込）</label>
          <div class="col-md-9">
            <div class="input-group">
              <input type="text" class="form-control text-right" id="sum_total" v-bind:value="taxedTotalPrice | number_format" readonly>
              <div class="input-group-append">
                <label class="input-group-text">円</label>
              </div>
            </div>
          </div>
        </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: "OrderTop",
  data() {
    // 消費税率
    taxRate: 0.08,
    // 制作したいムービー
    movieType: '余興ムービー',
    // 基本料金（税抜き）
    basePrice: 30000,
    // 割増料金
    addPrice1: 5000,            // 納期が1ヵ月未満の場合
    addPrice2: 10000,           // 納期が3週間未満の場合
    addPrice3: 15000,           // 納期が2週間未満の場合
    addPrice4: 20000,           // 納期が1週間未満の場合
    addPrice5: 40000,           // 納期が3日後の場合
    addPrice6: 45000,           // 納期が2日後の場合
    addPrice7: 50000,           // 納期が翌日の場合
    // オプション料金（税抜き）
    optPrice: 0,
    // 合計金額（税抜き）
    totalPrice: 0,
    // 挙式日（日付）
    wedding_date: '',
    // DVD仕上がり予定日（日付）
    delivery_date: '',
    // オプション「BGM手配」
    opt1_use: false,             // true : 利用する、false : 利用しない
    opt1_price: 5000,            // 料金（税抜き）
    // オプション「撮影」
    opt2_use: false,             // true : 利用する、false : 利用しない
    opt2_price: 5000,            // 料金（税抜き）
    // オプション「DVD盤面印刷」
    opt3_use: false,             // true : 利用する、false : 利用しない
    opt3_price: 5000,            // 料金（税抜き）
    // オプション「写真スキャニング」
    opt4_num: 0,                 // 利用枚数
    opt4_price: 500,             // 料金（税抜き）
  },
  methods: {
    // 税抜金額を税込金額に変換するメソッド
    incTax: function(untaxed) {
      return Math.floor(untaxed * (1 + this.taxRate));
    },
    // 日付の差を求めるメソッド
    getDateDiff: function(dateString1, dateString2) {
      // 日付を表す文字列から日付オブジェクトを生成
      var date1 = new Date(dateString1);
      var date2 = new Date(dateString2);
      // 2つの日付の差分（ミリ秒）を計算
      var msDiff = date1.getTime() - date2.getTime();
      // 求めた差分（ミリ秒）を日付に変換
      // 差分 ÷（1000ミリ秒 × 60秒 × 60分 × 24時間）
      return Math.ceil(msDiff / (1000 * 60 * 60 * 24));
    },
    // 日付をYYYY-MM-DDの書式で返すメソッド
    formatDate: function(dt) {
      var y = dt.getFullYear();
      var m = ('00' + (dt.getMonth() +1 )).slice(-2);
      var d = ('00' + dt.getDate()).slice(-2);
      return (y + '-' + m + '-' + d);
    }
  },
  computed: {
    // オプション「BGM手配」の税込金額を返す算出プロパティ
    taxedOpt1: function() {
      return this.incTax(this.opt1_price);
    },
    // オプション「撮影」の税込金額を返す算出プロパティ
    taxedOpt2: function() {
      return this.incTax(this.opt2_price);
    },
    // オプション「DVD盤面印刷」の税込金額を返す算出プロパティ
    taxedOpt3: function() {
      return this.incTax(this.opt3_price);
    },
    // オプション「写真スキャニング」の税込金額を返す算出プロパティ
    taxedOpt4: function() {
      return this.incTax(this.opt4_price);
    },
    // 基本料金（税込）を返す算出プロパティ
    taxedBasePrice: function() {
      // 割増料金
      var addPrice = 0;
      // 納期までの残り日数を計算
      var dateDiff = this.getDateDiff(this.delivery_date, (new Date()).toLocaleString());
      // 割増料金を求める
      if (21 <= dateDiff && dateDiff < 30) {
        // 納期が1ヵ月未満の場合
        addPrice = this.addPrice1;
      } else if (14 <= dateDiff && dateDiff < 21) {
        // 納期が3週間未満の場合
        addPrice = this.addPrice2;
      } else if (7 <= dateDiff && dateDiff < 14) {
        // 納期が2週間未満の場合
        addPrice = this.addPrice3;
      } else if (3 < dateDiff && dateDiff < 7) {
        // 納期が1週間未満の場合
        addPrice = this.addPrice4;
      } else if (dateDiff == 3) {
        // 納期が3日後の場合
        addPrice = this.addPrice5;
      } else if (dateDiff == 2) {
        // 納期が2日後の場合
        addPrice = this.addPrice6;
      } else if (dateDiff == 1) {
        // 納期が翌日の場合
        addPrice = this.addPrice7;
      }
      // 基本料金（税込）を返す
      return this.incTax(this.basePrice + addPrice);
    },
    // オプション料金（税込）を返す算出プロパティ
    taxedOptPrice: function() {
      // オプション料金
      var optPrice = 0;
      // BGM手配
      if (this.opt1_use) {
        optPrice += this.opt1_price;
      }
      // 撮影
      if (this.opt2_use) {
        optPrice += this.opt2_price;
      }
      // DVD盤面印刷
      if (this.opt3_use) {
        optPrice += this.opt3_price;
      }
      // 写真スキャニング
      if (this.opt4_num == '') {
        this.opt4_num = 0;
      }
      optPrice += this.opt4_num * this.opt4_price;
      // オプション料金（税込）を返す
      return this.incTax(optPrice);
    },
    // 合計金額（税込）を返す算出プロパティ
    taxedTotalPrice: function() {
      // 基本料金（税込）とオプション料金（税込）の合計を返す
      return (this.taxedBasePrice + this.taxedOptPrice);
    },
    // 明日の日付をYYYY-MM-DDの書式で返す算出プロパティ
    tommorow: function() {
      var dt = new Date();
      dt.setDate(dt.getDate() + 1);
      return this.formatDate(dt);
    }
  },
  created: function() {
    // 今日の日付を取得
    var dt = new Date();
    // 挙式日に2ヵ月後の日付を設定
    dt.setMonth(dt.getMonth() + 2);
    this.wedding_date = this.formatDate(dt);
    // DVD仕上がり予定日に、挙式日の1週間前の日付を設定
    dt.setDate(dt.getDate() - 7);
    this.delivery_date = this.formatDate(dt);
  }
};
</script>

<style scoped>
.about_top {
  width:300px;
}
</style>