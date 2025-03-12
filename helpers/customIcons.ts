import { h } from "vue" //คือการ import ฟังก์ชัน h จากไลบรารี vue ซึ่งเป็นฟังก์ชันที่ใช้สร้าง VNode หรือ Virtual Node ซึ่งเป็นโครงสร้างของ Vue 3 ที่ใช้ในการสร้าง Element ของ Vue 3
import type { IconSet, IconAliases, IconProps } from "vuetify"// คือการ import type ของ IconSet, IconAliases และ IconProps จากไลบรารี vuetify

// Custom icon component
import MIcon from "~~/components/MIcon.vue" //คือการ import คอมโพเนนต์ MIcon จากไฟล์ MIcon.vue ที่อยู่ในโฟลเดอร์ components
/**
 * Code for the icon component looks like this 
 * 
<template>
	<div>
		<Icon v-bind="$attrs" />
	</div>
</template>
<script setup></script>
 */

/**
 * Using the Phospor pack here, but any icon name can be used.
 * All of vuetify's core icons MUST be added in the `aliases` object
 */
const aliases: IconAliases = {
  complete: "ph:check-circle",
  cancel: "ph:x-circle",
  close: "ph:x-circle",
  delete: "ph:trash",
  clear: "ph:x-circle",
  success: "ph:check-circle",
  info: "ph:info",
  warning: "ph:warning",
  error: "ph:x-circle",
  prev: "ph:caret-left",
  next: "ph:caret-right",
  checkboxOn: "ph:check-square-fill",
  checkboxOff: "ph:square",
  checkboxIndeterminate: "ph:square",
  delimiter: "ph:circle",
  sort: "ph:caret-up",
  expand: "ph:caret-down",
  menu: "heroicons:bars-2",
  subgroup: "ph:caret-down",
  dropdown: "ph:caret-down",
  radioOn: "ph:radio-button-fill",
  radioOff: "ph:circle",
  edit: "ph:pencil-simple",
  ratingEmpty: "ph:star",
  ratingFull: "ph:star-fill",
  ratingHalf: "ph:star-half-fill",
  loading: "ph:spinner",
  first: "ph:caret-double-left",
  last: "ph:caret-double-right",
  unfold: "ph:arrows-out",
  file: "ph:file",
  plus: "ph:plus",
  minus: "ph:minus",
  sortAsc: undefined,
  sortDesc: undefined,
}

const custom: IconSet = {
  component: (props: IconProps) =>
    // Return render function
    h(MIcon, {
      name: props.icon,
      tag: props.tag,
      disabled: props.disabled,
    }),
}

// export both aliases and the custom object created
export { aliases, custom }
