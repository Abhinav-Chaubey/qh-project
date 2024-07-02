<template>
    <div>
    <v-container style="border: 1px solid #80808030;border-radius:5px; border-bottom:none" class="mt-5 pl-0 pr-0 pt-0">
      <div class="bg-498a3a white--text text-left" style="border-radius: 5px 5px 0 0;padding:10px">
        <span>Banner Systems Settings</span>
      </div>
      <v-row style="padding: 0 12px;">
        <v-col cols="11" style="border-right: 1px solid #80808030;border-bottom: 1px solid #80808030;">
          <v-row>
        <!-- Second Column: Text Fields -->
        <v-col cols="8" style="border-right: 1px solid #80808030;" class="text-left">
          <span class="am-table-sub-title-small-grey">Text Area</span>
        </v-col>
  
        <!-- Third Column: Upload Logo and Text Area -->
        <v-col cols="4" class="text-left">
          <span class="am-table-sub-title-small-grey">Bottom Text</span>
        </v-col>
      </v-row>
    </v-col>
  
    <v-col cols="1" style="border-bottom: 1px solid #80808030;">
    </v-col>
      </v-row>
      <v-row v-for="(item, key) in contents" :key="key" style="padding: 0 12px;">
        <v-col cols="11" style="border-right: 1px solid #80808030;border-bottom: 1px solid rgba(128, 128, 128, 0.19);" :style="contents && contents.length -1 === key ? 'background-color:#80808024' : ''">
          <v-row>
  
        <!-- Second Column: Text Fields -->
        <v-col cols="8"  class="pb-7" style="border-right: 1px solid #80808030;">
          <v-text-field v-model="item.title" label="Title" hide-details></v-text-field>
          <v-text-field v-model="item.subTitle" label="Sub Title" hide-details></v-text-field>
          <v-text-field v-model="item.link" label="link" hide-details></v-text-field>
          <v-text-field v-model="item.Link" label="Link" hide-details></v-text-field>
        </v-col>
  
        <!-- Third Column: Upload Logo and Text Area -->
        <v-col cols="4">
          <div class="mb-2 text-left">
            <span class="am-banner-title ">Banner Image</span>
          </div>
          <div>
          <div v-if="!item.bannerIconData" class="d-flex align-center mb-5" style="height: 60px; border: 1px dashed #737070; border-radius:4px; position: relative;background-color:#80808054;">
            <!-- Drop area -->
            <input type="file" name="candidateUploader" ref="candidateUploader"
              class="custom-upload"
              id="candidateUploader"
              style="opacity: 0; position: absolute; height: 100%; width: 100%; cursor: pointer; z-index: 2;"
              accept="image/png, image/jpg, image/jpeg"
              @change="handleFileUpload($event.target.files, key, 'icon')"
              />
          
            <!-- Text and button container -->
            <div class="text-center d-flex align-center justify-center" style="position: absolute; height: 100%; width: 100%; z-index: 1;">
              <span class="am-table-sub-title">Drop image to upload</span>
              <div class="vertical-line"></div>
              <v-btn color="#498a3a" class="white--text custom-btn text-center cursor-pointer elevation-0">
                <span  class="am-table-sub-title-small">CHOOSE FILE</span>
              </v-btn>
            </div>
            
          </div>
          <div v-if="item.bannerIconData" class="d-flex">
            <img :src="item.bannerIconData" style="max-width: 150px; max-height: 150px; border-radius: 4px;">
            <div class="text-center margin--20">
              <span class="remove1" @click="removeimage(key, 'icon')">&minus;</span>
            </div>
          </div>
        </div>
        <div class="mb-2 text-left">
            <span class="am-banner-title ">Tag Image</span>
          </div>
          <div>
          <div v-if="!item.bannerTagData" class="d-flex align-center mb-5" style="height: 60px; border: 1px dashed #737070; border-radius:4px; position: relative;background-color:#80808054;">
            <!-- Drop area -->
            <input type="file" name="candidateUploader" ref="candidateUploader"
              class="custom-upload"
              id="candidateUploader"
              style="opacity: 0; position: absolute; height: 100%; width: 100%; cursor: pointer; z-index: 2;"
              accept="image/png, image/jpg, image/jpeg"
              @change="handleFileUpload($event.target.files, key, 'tag')"
              />
          
            <!-- Text and button container -->
            <div class="text-center d-flex align-center justify-center" style="position: absolute; height: 100%; width: 100%; z-index: 1;">
              <span class="am-table-sub-title">Drop image to upload</span>
              <div class="vertical-line"></div>
              <v-btn color="#498a3a" class="white--text custom-btn text-center cursor-pointer elevation-0">
                <span  class="am-table-sub-title-small">CHOOSE FILE</span>
              </v-btn>
            </div>
            
          </div>
          <div v-if="item.bannerTagData" class="d-flex">
            <img :src="item.bannerTagData" style="max-width: 150px; max-height: 150px; border-radius: 4px;">
            <div class="text-center margin--20">
              <span class="remove1" @click="removeimage(key, 'tag')">&minus;</span>
            </div>
          </div>
        </div>
          <v-text-field v-model="item.bannerIconText" label="Add Text"></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="1" style="border-bottom: 1px solid rgba(128, 128, 128, 0.19);" :style="contents && contents.length -1 === key ? 'background-color:#80808024' : ''">
      <v-row class="h-100">
        <!-- Fourth Column: Thanks Text -->
        <v-col cols="12" class="self-center">
          <div class="text-center">
            <span class="remove" @click="removeElem(key)">&minus;</span>
          </div>
        </v-col>
      </v-row>
    </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-right pr-0">
          <v-btn color="#498a3a" class="white--text custom-btn text-center cursor-pointer elevation-0" @click="addRow()">
            <span  class="am-table-sub-title-small" >Add row</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </template>
  
  <script>
     import {mapState} from 'vuex';
  export default {
    name: 'HomeSystems',
    data() {
      return {
        imageUrl: null,
        contents: [
          {
            title: '',
            subTitle: '',
            link: '',
            Link: '',
            bannerIconData: '',
            bannerTagData: '',
            bannerIconText: ''
          }
        ],
      };
    },
    mounted () {
    this.contents = this.bannerDataSettings;
  },
    computed: {
    ...mapState({
        bannerDataSettings: state => state.bannerDataSettings
    })
  },
  watch: {
    contents () {
        this.$store.dispatch('bannerDataSettings', this.contents);
    }
  },
    methods: {
      addRow () {
        this.contents.push(
        {
            title: '',
            subTitle: '',
            link: '',
            Link: '',
            bannerIconData: '',
            bannerTagData: '',
            bannerIconText: ''
          }
        );
      },
      removeElem (key) {
        this.contents.splice(key, 1);
      },
      handleFileUpload(event, key, type) {
        const file = event[0];
        console.log(event)
        if (file) {
          // Assuming you want to display image preview
          const reader = new FileReader();
          reader.onload = (e) => {
            if (type === 'banner') {
              this.contents[`${key}`].bannerImageData = e.target.result;
            } else {
                if (type === 'tag') {
                    this.contents[`${key}`].bannerTagData = e.target.result;
                } else {
                    this.contents[`${key}`].bannerIconData = e.target.result;
                }
              
            }
          };
          reader.readAsDataURL(file);
        }
      },
      removeimage (key, type) {
        if (type === 'banner') {
          this.contents[`${key}`].bannerImageData = '';
        } else {
            if (type === 'tag') {
                this.contents[`${key}`].bannerTagData = '';
            } else {
                this.contents[`${key}`].bannerIconData = '';
            }
          
        }
      }
    },
  };
  </script>
  
  <style lang="css">
  .custom-btn {
    font-size: xx-small !important;
    padding: 3px 5px !important;
    height: 20px !important;
  }
  .vertical-line {
      height: 20%;
      margin: 0 9px;
      width: 1px;
      background-color: #8080806e;
      z-index: 2;
  }
  .margin--20 {
    margin-left: 50px;
    margin-top: -20px;
  }
  </style>