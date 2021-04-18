// 工单下载战术数据配置
export const downloadTicket = [
    {
        label: "文件类型：",
        value: "pngEn",
        target: "fileType",
        defaults: [
            { label: "PNG图片_水印+期限二维码", value: "pngEn" },
            { label: "PDF文件_水印+期限二维码", value: "pdfEn" },
            { label: "邮件发送PDF+期限二维码", value: "mailPdf" },
            { label: "PNG图片+期限二维码", value: "png" },
            { label: "PDF文件+期限二维码", value: "pdf" },
        ],
    },
    {
        label: "时间水印：",
        value: "1",
        target: "timeWatermark",
        defaults: [
            { label: "是", value: "1", disabled: true },
            { label: "否", value: "0", disabled: true },
        ],
    },
    {
        label: "工号水印：",
        value: "1",
        target: "jobWatermark",
        defaults: [
            { label: "是", value: "1", disabled: true },
            { label: "否", value: "0", disabled: true },
        ],
    }
]


export const showInsertValue = [
    { label: "bpmsid", title: "BPMSID", value: "", partten: true },
    { label: "title", title: "工单标题", value: "", partten: true },
    { label: "customeID", title: "ECID", value: "", partten: true },
    { label: "orderNum", title: "产品单号", value: "", partten: true },
    { label: "busiLine", title: "业务线", value: "", partten: true },
    { label: "date", title: "提单时间", value: "", partten: true },
    { label: "lading", title: "提单人", value: "", partten: true },
    { label: "handler", title: "处理人", value: "", partten: true },
    { label: "priority", title: "优先级", value: "", partten: true },
    { label: "expireDate", title: "到期时间", value: "", partten: true },
    { label: "result", title: "结果通知", value: "", partten: true },
    { label: "pretreatment", title: "HA预处理", value: "", partten: true },
    { label: "describer", title: "工单描述", value: "", partten: true },
    { label: "TransferOrder", title: "转单", value: "", partten: false },
]

