<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped v-if="$vuetify.breakpoint.smAndDown">
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="grey--text text--darken-2" @click="drawer=!drawer"><!--class=”title”で文字の大きさと太さ変更 文字の色を濃いグレーに変更-->
              <v-icon>mdi-close</v-icon>Close
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider><!--仕切り-->
        <v-list nav dense><!--dense=文字を小さく、高さを低く nav=v-list-itemの幅を減らし、角を丸くする-->
            <!--no-action=下の階層の左側のpadding-->
            <!--:append-icon=”nav_list.lists ? undefined:””=下の階層がないメニューに矢印が表示されなくなる。nav_listにlistsが存在するかどうかで判別しなければ””、あればundefinedの設定を行う。-->
          <v-list-group 
            v-for="nav_list in nav_lists"
            :key="nav_list.name"
            :prepend-icon="nav_list.icon"
            no-action
            :append-icon="nav_list.lists ? undefined : ''"> 
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item 
              v-for="list in nav_list.lists" 
              :key="list.name" 
              :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="white" app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title to="/" v-if="$vuetify.breakpoint.mdOnly">Vuetify</v-toolbar-title> --><!--mdのときだけ表示-->
      <v-spacer></v-spacer>
      <!-- <v-btn text to="/">a</v-btn> -->
      <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- ホーム -->
      <v-btn text to="/" class="hidden-sm-and-down">Home</v-btn>
      <!-- ### about ボタン ### -->
      <v-btn text to="/about" class="hidden-sm-and-down">About</v-btn>

      <!-- ### オーダー ボタン ### -->
      <v-btn text to="/order" class="hidden-sm-and-down">オーダー</v-btn>

      <!-- <v-menu open-on-hover offset-y>
        <template v-slot:activator="{on}">
        <v-btn v-on="on" text to="/order" class="hidden-sm-and-down">オーダー<v-icon>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-subheader>ORDER</v-subheader>
          <v-list-item v-for="support in supports" :key="support.name" :to="support.link">
            <v-list-item-icon>
              <v-icon>{{ support.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ support.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <!-- ### コレクション ボタン ### -->
      <v-btn text to="/collection" class="hidden-sm-and-down">コレクション</v-btn>
      <!-- <v-menu open-on-hover offset-y>
        <template v-slot:activator="{on}">
        <v-btn v-on="on" text to="/collection" class="hidden-sm-and-down">コレクション<v-icon>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-subheader>COLLECTION</v-subheader>
          <v-list-item v-for="support in supports" :key="support.name" :to="support.link">
            <v-list-item-icon>
              <v-icon>{{ support.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ support.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{on}">
        <v-btn v-on="on" text to="/care" class="hidden-sm-and-down">お手入れ方法<v-icon>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-subheader>Care</v-subheader>
          <v-list-item v-for="care_support in care_supports" :key="care_support.name" :to="care_support.link">
            <v-list-item-icon>
              <v-icon>{{ care_support.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ care_support.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{on}">
        <v-btn v-on="on" text to="/contact" class="hidden-sm-and-down">お問合わせ<v-icon>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-subheader>Contact</v-subheader>
          <v-list-item v-for="contact_support in contact_supports" :key="contact_support.name" :to="contact_support.link">
            <v-list-item-icon>
              <v-icon>{{ contact_support.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ contact_support.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      appTitle: 'PARSER',
      drawer: false,
      supports:[
        {
          name: 'お手入れ方法',
          icon: '',
          link:'/care'
        },
        {
          name: '修理について',
          icon: 'mdi-auto-fix',
          link:'/care/repair'}
      ],
      care_supports:[
        {
          name: 'お手入れの方法',
          icon: 'mdi-auto-fix',
          link:'/care'
        },
        {
          name: '修理について',
          icon: 'mdi-content-cut',
          link:'/care/repair'}
      ],
      contact_supports:[
        {
          name: 'お支払い・送料について',
          icon: 'mdi-package-variant-closed',
          link:'/payment-shipping'
        },
        {
          name: '返品・交換について',
          icon: 'mdi-clipboard-arrow-left',
          link: '/preturns-exchanges'
        },
        {
          name: 'お問合わせ',
          icon: 'mdi-email',
          link:'/contact'
        },
      ],
      // ハンバーガーメニュー
      nav_lists:[
        {
          name: 'HOME',
          icon: '',
          link: 'https://parser.jp'
        },
        {
          name: 'About',
          icon: '',
          link: '/about'
        },
        {
          name: 'Order',
          icon: '',
          lists:[
            {name: 'Colors'},
            {name: 'Content'},
            {name: 'Display'}
          ]
        },
        {
          name: 'Collection',
          icon: 'mdi-view-dashboard',
          lists:[
            {name: 'API explorer'},
            {name: 'Alerts'}
          ]
        },
        {
          name: 'Directives',
          icon: 'mdi-function'
        },
        {
        name: 'お手入れ方法',
        icon: 'mdi-auto-fix',
        lists: [
            {
              name: 'お手入れ方法',
              icon: 'mdi-auto-fix',
              link:'/care'
            },
            {
              name: '修理について',
              icon: 'mdi-content-cut',
              link:'/care/repair'
            }
          ]
        },
        {
          name: 'お問合わせ',
          icon: 'mdi-email',
          lists:[
            
            {
              name: 'お支払い・送料について',
              icon: 'mdi-package-variant-closed',
              link:'/payment-shipping'
            },
            {
              name: '返品・交換について',
              icon: 'mdi-clipboard-arrow-left',
              link: '/preturns-exchanges'
            },
            // {
            //   name: '会社概要',
            //   icon: 'mdi-office-building',
            //   link:'/CompanyProfile'
            // },
            {
              name: 'お問合わせ',
              icon: 'mdi-email',
              link:'/contact'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-toolbar__title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: black;
  font-size: 2.1em;
  letter-spacing: 2px;
  padding-right: 50px;
}
.v-btn {
  width: 140px;
}
</style>