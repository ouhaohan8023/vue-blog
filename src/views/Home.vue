<template>
	<div class="home">
		<div class="content">
			<div class="list">
				<div class="slip" v-for="slip in slips" :key="slip.id">
					<img class="img" src="../assets/logo.png">
					<div class="title">{{slip.title}}</div>
					<div class="tags">
						<span class="el-tag el-tag-light" :class=" 'el-tag-' + index " v-for="(tag,index) in slip.tags" :key="index">{{tag}}</span>
					</div>
					<div class="date">{{slip.date}}</div>
					<div class="times">{{slip.times}}次</div>
				</div>
			</div>
			<div class="index">
				<div class="tag">
					<a :id="tag.id" v-for="(tag,index) in tags" :key="tag.id" class="t" :class="'t-' + index" :style="{ fontSize: tag.level/fontSizeBase + 'rem'}">
						{{tag.name}}
					</a>
				</div>
				<div class="classify">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	export default {
		name: 'Home',
		data() {
			return {
				slips: [{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
					{
						id: 0,
						title: "人人为我，我为人人！Laravel RBAC 权限管理包，快速搭建后台权限功能~",
						tags: {
							0: "LARAVEL",
							1: "PHP",
							2: "XXX",
							3: "LARAVEL"
						},
						date: "2020-11-11",
						times: 10
					},
				],
				tags: [{
						id: 0,
						name: "Laravel",
						level: 50
					},
					{
						id: 1,
						name: "PHP",
						level: 20
					},
					{
						id: 2,
						name: "XXX",
						level: 5
					},
					{
						id: 3,
						name: "SQL",
						level: 1
					},
				],
				classify: [{
						id: 0,
						name: "开发者",
					},
					{
						id: 1,
						name: "算法",
					},
					{
						id: 2,
						name: "观点感悟",
					},
					{
						id: 3,
						name: "游记",
					},
				],
				fontSizeBase: 50,//词云大小基数
			}
		},
		computed: {},
		created() {},
		methods: {}
	}
</script>
<style lang="scss">
	//  配置
	$SLIPS_HEIGHT: 5rem; // 列表页高度

	.home {
		.content {
			width: 90vw;
			min-height: 92vh;
			margin-left: 5vw;
			border-left: 1px solid rgba(20, 85, 123, 0.3);
			border-right: 1px solid rgba(20, 85, 123, 0.3);
			position: relative;

			.list {
				width: 70%;
				height: 100%;
				padding-top: 0.5rem;

				.slip {
					width: 94%;
					height: $SLIPS_HEIGHT;
					border: 1px double rgba(48, 138, 128, 0.34);
					position: relative;
					color: aliceblue;
					margin-bottom: 0.2rem;

					.img {
						position: absolute;
						left: 0;
						top: 0;
						height: $SLIPS_HEIGHT;
						width: $SLIPS_HEIGHT;
					}

					.title {
						position: absolute;
						left: 7rem;
						font-size: 0.85rem;
						text-align: left;
						top: 0.5rem;
					}

					.desc {
						position: absolute;
						left: 7rem;
						top: 1.5rem;
						font-size: 0.6rem;
						text-align: left;
					}

					.date {
						position: absolute;
						right: 1rem;
						bottom: 0.5rem;
						font-size: 0.6rem;
					}

					.times {
						position: absolute;
						right: 5rem;
						bottom: 0.5rem;
						font-size: 0.6rem;
					}

					.tags {
						position: absolute;
						left: 7rem;
						top: 3rem;
						font-size: 0.6rem;
						font-weight: 700;

						.el-tag {
							background-color: #ecf5ff;
							display: inline-block;
							height: 1.25rem;
							padding: 0 10px;
							line-height: 1.25rem;
							color: #409eff;
							border: 1px solid #d9ecff;
							border-radius: 4px;
							box-sizing: border-box;
							white-space: nowrap;
							margin-right: 10px;
						}

						.el-tag-0 {
							background-color: #f0f9eb;
							border-color: #e1f3d8;
							color: #67c23a;
						}

						.el-tag-1 {
							background-color: #f4f4f5;
							border-color: #e9e9eb;
							color: #909399;
						}

						.el-tag-2 {
							background-color: #fdf6ec;
							border-color: #faecd8;
							color: #e6a23c;
						}

						.el-tag-3 {
							background-color: #fef0f0;
							border-color: #fde2e2;
							color: #f56c6c;
						}
					}
				}
			}

			.index {
				width: 30%;
				position: absolute;
				right: 0;
				top: 1rem;

				.tag {
					height: 10rem;
					border: 1px double #308a80;
					border-radius: 1rem;
					box-shadow: 2px 2px 2px #61b2a9;
					padding-left: 15px;
					padding-top: 5px;
					text-align: left;

					.t {
						// background-color: #ecf5ff;
						display: inline-block;
						// height: 1.25rem;
						padding: 0 10px;
						// line-height: 1.25rem;
						color: #409eff;
						// border: 1px solid #d9ecff;
						// border-radius: 4px;
						// box-sizing: border-box;
						white-space: nowrap;
						// margin-right: 5px;
						margin-top: 10px;
						font-weight: 700;
					}

					.t-0 {
						// background-color: #f0f9eb;
						// border-color: #e1f3d8;
						color: #67c23a;
					}

					.t-1 {
						// background-color: #f4f4f5;
						// border-color: #e9e9eb;
						color: #909399;
					}

					.t-2 {
						// background-color: #fdf6ec;
						// border-color: #faecd8;
						color: #e6a23c;
					}

					.t-3 {
						// background-color: #fef0f0;
						// border-color: #fde2e2;
						color: #f56c6c;
					}
				}
				
				.classify {
					height: 10rem;
					border: 1px double #308a80;
					border-radius: 1rem;
					box-shadow: 2px 2px 2px #61b2a9;
					padding-left: 15px;
					padding-top: 5px;
					text-align: left;
					margin-top: 1rem;
				
				}
			}
		}
	}
</style>
