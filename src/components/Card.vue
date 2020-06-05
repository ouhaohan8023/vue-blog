<template>
	<a :href="'#/novel/' + slip.id">
		<el-card class="list" :body-style="{ padding: '0px' }" shadow="always">
			<img :src="image" class="image">
			<div class="list-content">
				<span class="title">{{slip.title}}</span>
			</div>
			<div class="bottom clearfix">
				<time class="time"><i class="el-icon-edit"></i> {{ slip.created_at }}</time>
				<div class="count"><i class="el-icon-lollipop"></i>{{slip.view}}</div>
			</div>
		</el-card>
	</a>
</template>

<script>
	export default {
		name: 'Card',
		props: ['slip'],
		created() {
		},
		data() {
			return {
				publicPath: process.env.BASE_URL
			}
		},
		computed: {
			// 计算属性的 getter
			image: function() {
				if (this.slip.img)
					return this.slip.img;
				else
					return this.publicPath + 'pics/pic_' + this.slip.id % 10 + '.png';
			}
		},
		methods: {}
	}
</script>
<style lang="scss">
	.lists {
		margin-bottom: 20px;
		position: relative;

		.list-content {
			min-height: 4.5rem;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 0;
			padding-bottom: 1.2rem;
			padding-left: 1.2rem;
			padding-right: 1.2rem;

			.title {
				overflow: hidden;
				-webkit-line-clamp: 3;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				font-size: 0.9rem;
			}


		}

		.bottom {
			bottom: 1.25rem;
			position: absolute;
			width: 100%;
			left: 0;

			.time {
				position: absolute;
				left: 1.625rem;
			}

			.count {
				position: absolute;
				right: 1.625rem;
				font-size: 0.7rem;
				color: #999;
			}
		}

		.time {
			font-size: 13px;
			color: #999;
		}



		.button {
			padding: 0;
			float: right;
		}

		.image {
			width: 100%;
			height: calc(100vw * 0.25 * 0.65);
			display: block;
		}

		.clearfix:before,
		.clearfix:after {
			display: table;
			content: "";
		}

		.clearfix:after {
			clear: both
		}
	}
</style>
