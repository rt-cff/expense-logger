<template>
	<div class="item-list">
		<div 
			class="item"
			v-for="item in categories"
			:key="item.id"
			:draggable=true
			@dragstart="onDragStart($event, item)"
			@dragenter.prevent="onDragEnter($event, item)"
			@drop="onDrop($event, item)"
		>
			{{item.label}}
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue'

export default {
	name: "SettingDetailsCategory",
	setup() {
		const categories = reactive([
			{
				id: 'breakfast',
				label: 'Breakfast',
			},
			{
				id: 'lunch',
				label: 'Lunch',
			},
			{
				id: 'dinner',
				label: 'Dinner',
			},
		])
		const dragItem = reactive({})

		return {
			categories,
			dragItem,
			onDragStart(e, item) {
				e.dataTransfer.dropEffect = 'move'
				e.dataTransfer.effectAllowed = 'move'

				for(const key in item) {
					this.dragItem[key]= item[key]
				}
			},
			onDragEnter(e, item) {
				const { id: itemID } = this.dragItem
				const fromIndex = this.categories.findIndex(c => c.id === itemID)
				const endIndex = this.categories.findIndex(c => c.id === item.id)

				if(fromIndex > endIndex) {
					this.categories.splice(fromIndex, 1)
					this.categories.splice(endIndex, 0, this.dragItem)
				}
				else {
					this.categories.splice(fromIndex, 1)
					this.categories.splice(endIndex, 0, this.dragItem)
				}
			},
			onDrop(e, item) {
				const { id: itemID } = this.dragItem
				const fromIndex = this.categories.findIndex(c => c.id === itemID)
				const endIndex = this.categories.findIndex(c => c.id === item.id)

				if(fromIndex > endIndex) {
					this.categories.splice(fromIndex, 1)
					this.categories.splice(endIndex, 0, this.dragItem)
				}
				else {
					this.categories.splice(fromIndex, 1)
					this.categories.splice(endIndex, 0, this.dragItem)
				}
			},
		}
	}
}
</script>

<style scoped>
  ::v-deep(.content) {
    background: lightyellow;
    color: lightslategrey;
    padding: 0px;
  }
	
  .item {
    text-align: left;
    padding: 15px 20px;
    border-bottom: 1px solid lightgrey;
		-webkit-user-select: none;
  }

  .item svg {
    height: 1em;
    width: 1em;
    margin-right: 5px;
    vertical-align: text-bottom;
  }

	.drag-handle {
		cursor: pointer;
		-webkit-user-select: none;
	}
</style>
