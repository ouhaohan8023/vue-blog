<template>
	<div class="novel">
		<el-row>
			<el-col :span="20" :offset="2">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/', query: { classify: path.id } }" v-for="path in paths" :key=path.id>{{path.name}}</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="title">{{novel.title}}</div>
				<el-divider></el-divider>
				<div class="desc">
					<ul>
						<li>创建于：{{novel.created_at}}</li>
						<li>更新于：{{novel.updated_at}}</li>
						<li><i class="el-icon-delete"></i>阅览数：{{novel.view}}</li>
						<li><i class="el-icon-delete"></i>点赞数：{{novel.like}}</li>
					</ul>
				</div>
				<div class="tags">
					<a class="tag" :href="'#/tag/' + tag.id" v-for="tag in tags" :key=tag.id>
						<el-tag :span="4" :type="tagsColor(tag.id)">
							{{ tag.name }}
						</el-tag>
					</a>
				</div>
				<div class="main-text">
					<span v-html="novel.content"></span>
				</div>
				<el-divider>END.</el-divider>

				<el-row :gutter="20" class="recommend">
					<el-col class="lists" :xl="6" :lg="6" :md="8" :sm="12" v-for="(slip) in recommends" :key="slip.id">
						<Card :slip=slip></Card>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import Card from '@/components/Card.vue'
	import {
		Message
	} from 'element-ui';
	export default {
		name: 'Index',
		components: {
			Card
		},
		data() {
			return {
				novelId: -1,
				novel: {
					'title': "",
					'created_at': "",
					'updated_at': "",
					'view': 1,
					'like': 1,
					'content': ""
				},
				tags: {},
				paths: [],
				recommends: [],
			}
		},
		watch: {
			'$route'() {
				this.$emit('reload', {
					novelId: this.$route.params.id
				})
			}
		},
		created() {
			this.$backTopClick();
			console.log('start')
			this.novelId = this.$route.params.id
			console.log(this.novelId)
			this.$on('reload', (novelId) => this.refresh(novelId))
			this.$emit('reload', {
				novelId: this.novelId
			})
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
			handleNodeClick(data) {
				console.log(data);
			},
			refresh(data) {
				console.log(data)
				let url = '/novel/' + data.novelId
				this.axios.get(url).then(res => {
					console.log(res)
					if (res.status !== 200 || res.data.code !== 200) {
						Message.error('服务器通讯异常');
					} else {
						this.novel = res.data.data.slips
						this.paths = res.data.data.path
						this.tags = res.data.data.tags
						this.recommends = res.data.data.recommends
					}
				})
				this.$backTopClick();
			}
		}
	}
</script>
<style lang="scss">
	.novel {
		color: snow;

		

		.title {
			font-size: 1.5rem;
			margin-top: 1rem;
		}

		.desc {
			font-size: 0.75rem;
			opacity: 0.7;

			ul li {
				display: inline;
				margin-right: 4rem;
			}
		}

		.tags {
			.tag {
				margin-right: 0.3rem;
			}
		}

		.main-text {
			text-align: left;
			margin-bottom: 2rem;
		}

		.el-divider__text {
			background-color: snow;
		}

		.el-card is-hover-shadow {
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		}

		.recommend {
			margin-top: 3rem;
		}

	}
</style>
