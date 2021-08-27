
// 调研订单状态
// 0 - 订单未生效
// 1 - 订单生效中
// 2 - 订单暂停中
// 3 - 订单变更中
// 4 - 订单被删除
export const researchCaseOrderStatus = [
    { status: 0, describer: "调研未生效", style: "status-not-start" },
    { status: 1, describer: "调研生效中", style: "status-start" },
    { status: 2, describer: "调研暂停中", style: "status-stop" },
    { status: 3, describer: "调研变更中", style: "status-change" },
    { status: 4, describer: "调研已删除", style: "status-delete" },
    { status: 5, describer: "调研已完成", style: "status-finsh" },
];


export const citys = [
    { code: 270, name: "武汉", Abbreviation: '' },
    { code: 714, name: "黄石", Abbreviation: '' },
    { code: 711, name: "鄂州", Abbreviation: '' },
    { code: 718, name: "恩施", Abbreviation: '' },
    { code: 728, name: "江汉", Abbreviation: '' },
    { code: 715, name: "咸宁", Abbreviation: '' },
    { code: 722, name: "随州", Abbreviation: '' },
    { code: 717, name: "宜昌", Abbreviation: '' },
    { code: 719, name: "十堰", Abbreviation: '' },
    { code: 710, name: "襄阳", Abbreviation: '' },
    { code: 716, name: "荆州", Abbreviation: '' },
    { code: 724, name: "荆门", Abbreviation: '' },
    { code: 713, name: "黄冈", Abbreviation: '' },
    { code: 712, name: "孝感", Abbreviation: '' },
    { code: 999, name: "湖北", Abbreviation: '' },
    { code: 729, name: "湖北政企客户分公司", Abbreviation: '' },
]