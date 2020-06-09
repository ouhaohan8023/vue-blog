<template>
  <div class="index">
    <div>
      <el-row :gutter="20">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/', query: { classify: path.id } }" v-for="path in paths" :key=path.id>
            {{path.name}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-col :span="18" v-if="slips.length !== 0">
          <el-col class="lists" :span="8" v-for="(slip) in slips" :key="slip.id">
            <Card :slip=slip></Card>
          </el-col>

          <el-col :span="12" :offset="6">
            <el-pagination background layout="prev, pager, next" :total="totoalSlips"
                           :hide-on-single-page="hideOnSinglePage" :page-size="pageSize"
                           @current-change="handleCurrentChange" :current-page.sync="currentPage">
            </el-pagination>
          </el-col>
        </el-col>
        <el-col :span="18" v-if="slips.length === 0">
          <el-alert title="努力获取数据中...." type="error" effect="dark" :closable="false" show-icon center>
          </el-alert>
        </el-col>
        <el-col :span="6">
          <el-carousel :interval="5000" arrow="nerver" height="200px" indicator-position="none" direction="horizontal">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>

          <el-card class="tags" shadow="always">
            <el-row>
              <el-tag v-for="(tag) in tags" :key="tag.id" class="tag" :span="4" effect="dark" :type="tagsColor(tag.id)"
                      @click="handleTagsClick(tag.id)">
                {{ tag.name }}
              </el-tag>
            </el-row>
          </el-card>

          <el-card class="classify">
            <el-tree :data="classify" :props="defaultProps" accordion @node-click="handleNodeClick">
            </el-tree>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Card from '@/components/Card.vue'

  export default {
    name: 'Index',
    components: {
      Card
    },
    watch: {
      '$route'() {
        this.$emit('reload', {
          page: this.$route.query.page || -1,
          form: {
            classify: this.$route.query.classify || -1,
            tags: this.$route.query.tags || -1,
          }
        })
      }
    },
    created() {
      console.log('start')
      this.currentPage = parseInt(this.$route.query.page)
      this.form.tags = this.$route.query.tags || -1
      this.form.classify = this.$route.query.classify || -1
      console.log(this.form)
      this.$on('reload', (page, form) => this.refresh(page, form))
      this.$emit('reload', {
        page: this.currentPage || 1,
        form: this.form
      })

      this.getClassify()
      this.getTags()
    },
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        form: {
          classify: -1,
          tags: -1
        },
        currentPage: 1,
        totoalSlips: 10,
        pageSize: 30,
        hideOnSinglePage: true,
        tags: [],
        classify: [],
        slips: [],
        paths: [],
      };
    },
    methods: {
      tagsColor(id) {
        switch (id % 5) {
          case 0:
            return '';
          case 1:
            return 'success';
          case 2:
            return 'info';
          case 3:
            return 'danger';
          case 4:
            return 'warning';
          default:
            return '';
        }
      },
      handleCurrentChange(page) {
        this.$router.push({
          path: this.$route.path,
          query: {
            page: page,
            classify: this.form.classify,
            tags: this.form.tags
          }
        })
      },
      handleTagsClick(id) {
        this.form.tags = id
        this.form.classify = -1
        this.currentPage = 1
        this.$router.push({
          path: this.$route.path,
          query: {
            page: 1,
            tags: id,
          }
        })
      },
      handleNodeClick(data) {
        console.log(data.id)
        this.form.classify = data.id
        this.form.tags = -1
        this.currentPage = 1
        this.$router.push({
          path: this.$route.path,
          query: {
            page: 1,
            classify: this.form.classify,
          }
        })
        this.$backTopClick();
      },
      refresh(data) {
        console.log(data)
        this.$backTopClick();
        let form = data.form
        let page = data.page
        let url = '/novels?'
        for (let key in form) {
          if (form[key] != -1) {
            url += key + '=' + form[key] + '&'
          }
        }
        this.axios.get(url + 'page=' + page).then(res => {
          this.slips = res.data.data.slips.data
          this.totoalSlips = res.data.data.slips.total
          this.currentPage = res.data.data.slips.current_page
          this.pageSize = res.data.data.slips.per_page
          this.paths = res.data.data.path
        })
      },
      getClassify() {
        let url = "/classify"
        this.axios.get(url).then(res => {
          console.log(res.data)
          this.classify = res.data.data
        })
      },
      getTags() {
        let url = "/tags"
        this.axios.get(url).then(res => {
          console.log(res.data)
          this.tags = res.data.data
        })
      }
    }
  }
</script>
<style lang="scss">
  .index {
    .el-breadcrumb {
      margin-bottom: 1rem;
      margin-left: 1.5rem;
    }

    .lists {
      margin-bottom: 20px;
      position: relative;
    }

    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .tags,
    .classify {
      margin-top: 30px;
    }

    .tags .tag {
      margin-right: 3px;
      margin-bottom: 3px;
    }

    .time {
      font-size: 13px;
      color: #999;
    }

  }
</style>
