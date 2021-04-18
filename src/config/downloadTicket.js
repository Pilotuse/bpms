// 工单下载战术数据配置
export const downloadTicket = [
    {
        label: "文件类型：",
        value: "pngEn",
        target:"fileType",
        defaults: [
            { label: "PNG图片_水印+期限二维码", value: "pngEn" },
            { label: "PDF文件_水印+期限二维码", value: "pdfEn" },
            { label: "PNG图片+期限二维码", value: "png" },
            { label: "PDF文件+期限二维码", value: "pdf" },
        ],
    },
    {
        label: "时间水印：",
        value: "1",
        target:"timeWatermark",
        defaults: [
            { label: "是", value: "1", disabled: true },
            { label: "否", value: "0", disabled: true },
        ],
    },
    {
        label: "工号水印：",
        value: "1",
        target:"jobWatermark",
        defaults: [
            { label: "是", value: "1", disabled: true },
            { label: "否", value: "0", disabled: true },
        ],
    }
]


export const showInsertValue = [
    { label: "title", title: "工单标题", value: "" },
    { label: "customeID", title: "ECID", value: "" },
    { label: "orderNum", title: "产品单号", value: "" },
    { label: "busiLine", title: "业务线", value: "" },
    { label: "date", title: "提单时间", value: "" },
    { label: "lading", title: "提单人", value: "" },
    { label: "handler", title: "处理人", value: "" },
    { label: "priority", title: "优先级", value: "" },
    { label: "expireDate", title: "到期时间", value: "" },
    { label: "result", title: "结果通知", value: "" },
    { label: "pretreatment", title: "HA预处理", value: "" },
    { label: "describer", title: "工单描述", value: "" },
]

