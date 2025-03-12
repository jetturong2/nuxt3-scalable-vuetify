import { DefaultsInstance } from "vuetify/lib/framework.mjs"

export const defaults: DefaultsInstance = {
    VAppBar: {
		elevation: 0,//คือการเพิ่มเงาในแถบนําทาง
	},
	VBtn: {
		variant: "flat",//เป็นการกําหนดลักษณะของปุ่ม
		height: 38,//คือความสูงของปุ่ม
		rounded: "lg",//คือการกําหนดรูปร่างของปุ่ม
		size: "small",//คือการกําหนดขนาดของปุ่ม
	},
	VTextField: {
		color: "primary",//คือการกําหนดสีของข้อความ
		variant: "outlined",//คือการกําหนดลักษณะของข้อความ
		density: "comfortable",//คือการกําหนดความหนาของข้อความ
	},
}