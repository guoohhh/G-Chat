import { b as getCurrentInstance, r as ref, f as resolveComponent, h as openBlock, i as createElementBlock, k as createVNode, E as unref, _ as _export_sfc, M as useAvatarInfoStore, d as useUserInfoStore, a7 as computed, w as withCtx, s as createTextVNode, l as withModifiers, v as pushScopeId, x as popScopeId, j as createBaseVNode, u as useRouter, I as useRoute, m as createBlock, t as toDisplayString, p as createCommentVNode } from "./index-d3de2193.js";
import { _ as _sfc_main$4 } from "./AvatarUpload-860c6215.js";
const dataJson = [{ "children": [], "label": "北京市", "value": "10000" }, { "children": [], "label": "上海市", "value": "10001" }, { "children": [], "label": "天津市", "value": "10002" }, { "children": [], "label": "重庆市", "value": "10003" }, { "children": [{ "label": "广州市", "value": "10005" }, { "label": "深圳市", "value": "10006" }, { "label": "东莞市", "value": "10007" }, { "label": "惠州市", "value": "10008" }, { "label": "珠海市", "value": "10009" }, { "label": "佛山市", "value": "10010" }, { "label": "中山市", "value": "10011" }, { "label": "潮州市", "value": "10012" }, { "label": "揭阳市", "value": "10013" }, { "label": "汕头市", "value": "10014" }, { "label": "汕尾市", "value": "10015" }, { "label": "清远市", "value": "10016" }, { "label": "云浮市", "value": "10017" }, { "label": "韶关市", "value": "10018" }, { "label": "江门市", "value": "10019" }, { "label": "湛江市", "value": "10020" }, { "label": "茂名市", "value": "10021" }, { "label": "肇庆市", "value": "10022" }, { "label": "河源市", "value": "10023" }, { "label": "梅州市", "value": "10024" }, { "label": "阳江市", "value": "10025" }], "label": "广东省", "value": "10004" }, { "children": [{ "label": "南京市", "value": "10027" }, { "label": "无锡市", "value": "10028" }, { "label": "苏州市", "value": "10029" }, { "label": "常州市", "value": "10030" }, { "label": "镇江市", "value": "10031" }, { "label": "南通市", "value": "10032" }, { "label": "泰州市", "value": "10033" }, { "label": "扬州市", "value": "10034" }, { "label": "盐城市", "value": "10035" }, { "label": "连云港市", "value": "10036" }, { "label": "徐州市", "value": "10037" }, { "label": "淮安市", "value": "10038" }, { "label": "宿迁市", "value": "10039" }], "label": "江苏省", "value": "10026" }, { "children": [{ "label": "济南市", "value": "10041" }, { "label": "青岛市", "value": "10042" }, { "label": "淄博市", "value": "10043" }, { "label": "枣庄市", "value": "10044" }, { "label": "东营市", "value": "10045" }, { "label": "烟台市", "value": "10046" }, { "label": "潍坊市", "value": "10047" }, { "label": "济宁市", "value": "10048" }, { "label": "泰安市", "value": "10049" }, { "label": "威海市", "value": "10050" }, { "label": "日照市", "value": "10051" }, { "label": "莱芜市", "value": "10052" }, { "label": "临沂市", "value": "10053" }, { "label": "德州市", "value": "10054" }, { "label": "聊城市", "value": "10055" }, { "label": "滨州市", "value": "10056" }, { "label": "菏泽市", "value": "10057" }], "label": "山东省", "value": "10040" }, { "children": [{ "label": "杭州市", "value": "10059" }, { "label": "宁波市", "value": "10060" }, { "label": "温州市", "value": "10061" }, { "label": "嘉兴市", "value": "10062" }, { "label": "湖州市", "value": "10063" }, { "label": "绍兴市", "value": "10064" }, { "label": "金华市", "value": "10065" }, { "label": "衢州市", "value": "10066" }, { "label": "舟山市", "value": "10067" }, { "label": "台州市", "value": "10068" }, { "label": "丽水市", "value": "10069" }], "label": "浙江省", "value": "10058" }, { "children": [{ "label": "郑州市", "value": "10071" }, { "label": "开封市", "value": "10072" }, { "label": "洛阳市", "value": "10073" }, { "label": "平顶山市", "value": "10074" }, { "label": "安阳市", "value": "10075" }, { "label": "鹤壁市", "value": "10076" }, { "label": "新乡市", "value": "10077" }, { "label": "焦作市", "value": "10078" }, { "label": "濮阳市", "value": "10079" }, { "label": "许昌市", "value": "10080" }, { "label": "漯河市", "value": "10081" }, { "label": "三门峡市", "value": "10082" }, { "label": "南阳市", "value": "10083" }, { "label": "商丘市", "value": "10084" }, { "label": "信阳市", "value": "10085" }, { "label": "周口市", "value": "10086" }, { "label": "驻马店市", "value": "10087" }, { "label": "济源市", "value": "10088" }], "label": "河南省", "value": "10070" }, { "children": [{ "label": "成都市", "value": "10090" }, { "label": "自贡市", "value": "10091" }, { "label": "攀枝花市", "value": "10092" }, { "label": "泸州市", "value": "10093" }, { "label": "德阳市", "value": "10094" }, { "label": "绵阳市", "value": "10095" }, { "label": "广元市", "value": "10096" }, { "label": "遂宁市", "value": "10097" }, { "label": "内江市", "value": "10098" }, { "label": "乐山市", "value": "10099" }, { "label": "南充市", "value": "10100" }, { "label": "眉山市", "value": "10101" }, { "label": "宜宾市", "value": "10102" }, { "label": "广安市", "value": "10103" }, { "label": "达州市", "value": "10104" }, { "label": "雅安市", "value": "10105" }, { "label": "巴中市", "value": "10106" }, { "label": "资阳市", "value": "10107" }, { "label": "阿坝藏族羌族自治州", "value": "10108" }, { "label": "甘孜藏族自治州", "value": "10109" }, { "label": "凉山彝族自治州", "value": "10110" }], "label": "四川省", "value": "10089" }, { "children": [{ "label": "武汉市", "value": "10112" }, { "label": "黄石市", "value": "10113" }, { "label": "十堰市", "value": "10114" }, { "label": "宜昌市", "value": "10115" }, { "label": "襄阳市", "value": "10116" }, { "label": "鄂州市", "value": "10117" }, { "label": "荆门市", "value": "10118" }, { "label": "孝感市", "value": "10119" }, { "label": "荆州市", "value": "10120" }, { "label": "黄冈市", "value": "10121" }, { "label": "咸宁市", "value": "10122" }, { "label": "随州市", "value": "10123" }, { "label": "恩施土家族苗族自治州", "value": "10124" }, { "label": "仙桃市", "value": "10125" }, { "label": "潜江市", "value": "10126" }, { "label": "天门市", "value": "10127" }, { "label": "神农架林区", "value": "10128" }], "label": "湖北省", "value": "10111" }, { "children": [{ "label": "长沙市", "value": "10130" }, { "label": "株洲市", "value": "10131" }, { "label": "湘潭市", "value": "10132" }, { "label": "衡阳市", "value": "10133" }, { "label": "邵阳市", "value": "10134" }, { "label": "岳阳市", "value": "10135" }, { "label": "常德市", "value": "10136" }, { "label": "张家界市", "value": "10137" }, { "label": "益阳市", "value": "10138" }, { "label": "郴州市", "value": "10139" }, { "label": "永州市", "value": "10140" }, { "label": "怀化市", "value": "10141" }, { "label": "娄底市", "value": "10142" }, { "label": "湘西土家族苗族自治州", "value": "10143" }], "label": "湖南省", "value": "10129" }, { "children": [{ "label": "石家庄市", "value": "10145" }, { "label": "唐山市", "value": "10146" }, { "label": "秦皇岛市", "value": "10147" }, { "label": "邯郸市", "value": "10148" }, { "label": "邢台市", "value": "10149" }, { "label": "保定市", "value": "10150" }, { "label": "张家口市", "value": "10151" }, { "label": "承德市", "value": "10152" }, { "label": "沧州市", "value": "10153" }, { "label": "廊坊市", "value": "10154" }, { "label": "衡水市", "value": "10155" }], "label": "河北省", "value": "10144" }, { "children": [{ "label": "福州市", "value": "10157" }, { "label": "厦门市", "value": "10158" }, { "label": "莆田市", "value": "10159" }, { "label": "三明市", "value": "10160" }, { "label": "泉州市", "value": "10161" }, { "label": "漳州市", "value": "10162" }, { "label": "南平市", "value": "10163" }, { "label": "龙岩市", "value": "10164" }, { "label": "宁德市", "value": "10165" }], "label": "福建省", "value": "10156" }, { "children": [{ "label": "合肥市", "value": "10167" }, { "label": "芜湖市", "value": "10168" }, { "label": "蚌埠市", "value": "10169" }, { "label": "淮南市", "value": "10170" }, { "label": "马鞍山市", "value": "10171" }, { "label": "淮北市", "value": "10172" }, { "label": "铜陵市", "value": "10173" }, { "label": "安庆市", "value": "10174" }, { "label": "黄山市", "value": "10175" }, { "label": "滁州市", "value": "10176" }, { "label": "阜阳市", "value": "10177" }, { "label": "宿州市", "value": "10178" }, { "label": "六安市", "value": "10179" }, { "label": "亳州市", "value": "10180" }, { "label": "池州市", "value": "10181" }, { "label": "宣城市", "value": "10182" }], "label": "安徽省", "value": "10166" }, { "children": [{ "label": "沈阳市", "value": "10184" }, { "label": "大连市", "value": "10185" }, { "label": "鞍山市", "value": "10186" }, { "label": "抚顺市", "value": "10187" }, { "label": "本溪市", "value": "10188" }, { "label": "丹东市", "value": "10189" }, { "label": "锦州市", "value": "10190" }, { "label": "营口市", "value": "10191" }, { "label": "阜新市", "value": "10192" }, { "label": "辽阳市", "value": "10193" }, { "label": "盘锦市", "value": "10194" }, { "label": "铁岭市", "value": "10195" }, { "label": "朝阳市", "value": "10196" }, { "label": "葫芦岛市", "value": "10197" }], "label": "辽宁省", "value": "10183" }, { "children": [{ "label": "西安市", "value": "10199" }, { "label": "铜川市", "value": "10200" }, { "label": "宝鸡市", "value": "10201" }, { "label": "咸阳市", "value": "10202" }, { "label": "渭南市", "value": "10203" }, { "label": "延安市", "value": "10204" }, { "label": "汉中市", "value": "10205" }, { "label": "榆林市", "value": "10206" }, { "label": "安康市", "value": "10207" }, { "label": "商洛市", "value": "10208" }], "label": "陕西省", "value": "10198" }, { "children": [{ "label": "南昌市", "value": "10210" }, { "label": "景德镇市", "value": "10211" }, { "label": "萍乡市", "value": "10212" }, { "label": "九江市", "value": "10213" }, { "label": "新余市", "value": "10214" }, { "label": "鹰潭市", "value": "10215" }, { "label": "赣州市", "value": "10216" }, { "label": "吉安市", "value": "10217" }, { "label": "宜春市", "value": "10218" }, { "label": "抚州市", "value": "10219" }, { "label": "上饶市", "value": "10220" }], "label": "江西省", "value": "10209" }, { "children": [{ "label": "昆明市", "value": "10222" }, { "label": "曲靖市", "value": "10223" }, { "label": "玉溪市", "value": "10224" }, { "label": "保山市", "value": "10225" }, { "label": "昭通市", "value": "10226" }, { "label": "丽江市", "value": "10227" }, { "label": "普洱市", "value": "10228" }, { "label": "临沧市", "value": "10229" }, { "label": "楚雄彝族自治州", "value": "10230" }, { "label": "红河哈尼族彝族自治州", "value": "10231" }, { "label": "文山壮族苗族自治州", "value": "10232" }, { "label": "西双版纳傣族自治州", "value": "10233" }, { "label": "大理白族自治州", "value": "10234" }, { "label": "德宏傣族景颇族自治州", "value": "10235" }, { "label": "怒江傈僳族自治州", "value": "10236" }, { "label": "迪庆藏族自治州", "value": "10237" }], "label": "云南省", "value": "10221" }, { "children": [{ "label": "太原市", "value": "10239" }, { "label": "大同市", "value": "10240" }, { "label": "阳泉市", "value": "10241" }, { "label": "长治市", "value": "10242" }, { "label": "晋城市", "value": "10243" }, { "label": "朔州市", "value": "10244" }, { "label": "晋中市", "value": "10245" }, { "label": "运城市", "value": "10246" }, { "label": "忻州市", "value": "10247" }, { "label": "临汾市", "value": "10248" }, { "label": "吕梁市", "value": "10249" }], "label": "山西省", "value": "10238" }, { "children": [{ "label": "长春市", "value": "10251" }, { "label": "吉林市", "value": "10252" }, { "label": "四平市", "value": "10253" }, { "label": "辽源市", "value": "10254" }, { "label": "通化市", "value": "10255" }, { "label": "白山市", "value": "10256" }, { "label": "松原市", "value": "10257" }, { "label": "白城市", "value": "10258" }, { "label": "延边朝鲜族自治州", "value": "10259" }], "label": "吉林省", "value": "10250" }, { "children": [{ "label": "贵阳市", "value": "10261" }, { "label": "六盘水市", "value": "10262" }, { "label": "遵义市", "value": "10263" }, { "label": "安顺市", "value": "10264" }, { "label": "毕节市", "value": "10265" }, { "label": "铜仁市", "value": "10266" }, { "label": "黔西南布依族苗族自治州", "value": "10267" }, { "label": "黔东南苗族侗族自治州", "value": "10268" }, { "label": "黔南布依族苗族自治州", "value": "10269" }], "label": "贵州省", "value": "10260" }, { "children": [{ "label": "兰州市", "value": "10271" }, { "label": "嘉峪关市", "value": "10272" }, { "label": "金昌市", "value": "10273" }, { "label": "白银市", "value": "10274" }, { "label": "天水市", "value": "10275" }, { "label": "武威市", "value": "10276" }, { "label": "张掖市", "value": "10277" }, { "label": "平凉市", "value": "10278" }, { "label": "酒泉市", "value": "10279" }, { "label": "庆阳市", "value": "10280" }, { "label": "定西市", "value": "10281" }, { "label": "陇南市", "value": "10282" }, { "label": "临夏回族自治州", "value": "10283" }, { "label": "甘南藏族自治州", "value": "10284" }], "label": "甘肃省", "value": "10270" }, { "children": [{ "label": "海口市", "value": "10286" }, { "label": "三亚市", "value": "10287" }, { "label": "三沙市", "value": "10288" }, { "label": "儋州市", "value": "10289" }, { "label": "五指山市", "value": "10290" }, { "label": "琼海市", "value": "10291" }, { "label": "文昌市", "value": "10292" }, { "label": "万宁市", "value": "10293" }, { "label": "东方市", "value": "10294" }, { "label": "定安县", "value": "10295" }, { "label": "屯昌县", "value": "10296" }, { "label": "澄迈县", "value": "10297" }, { "label": "临高县", "value": "10298" }, { "label": "白沙黎族自治县", "value": "10299" }, { "label": "昌江黎族自治县", "value": "10300" }, { "label": "乐东黎族自治县", "value": "10301" }, { "label": "陵水黎族自治县", "value": "10302" }, { "label": "保亭黎族苗族自治县", "value": "10303" }, { "label": "琼中黎族苗族自治县", "value": "10304" }], "label": "海南省", "value": "10285" }, { "children": [{ "label": "西宁市", "value": "10306" }, { "label": "海东市", "value": "10307" }, { "label": "海北藏族自治州", "value": "10308" }, { "label": "黄南藏族自治州", "value": "10309" }, { "label": "海南藏族自治州", "value": "10310" }, { "label": "果洛藏族自治州", "value": "10311" }, { "label": "玉树藏族自治州", "value": "10312" }, { "label": "海西蒙古族藏族自治州", "value": "10313" }], "label": "青海省", "value": "10305" }, { "children": [{ "label": "哈尔滨市", "value": "10315" }, { "label": "齐齐哈尔市", "value": "10316" }, { "label": "鸡西市", "value": "10317" }, { "label": "鹤岗市", "value": "10318" }, { "label": "双鸭山市", "value": "10319" }, { "label": "大庆市", "value": "10320" }, { "label": "伊春市", "value": "10321" }, { "label": "佳木斯市", "value": "10322" }, { "label": "七台河市", "value": "10323" }, { "label": "牡丹江市", "value": "10324" }, { "label": "黑河市", "value": "10325" }, { "label": "绥化市", "value": "10326" }, { "label": "大兴安岭地区", "value": "10327" }], "label": "黑龙江省", "value": "10314" }, { "children": [{ "label": "拉萨市", "value": "10329" }, { "label": "日喀则市", "value": "10330" }, { "label": "昌都市", "value": "10331" }, { "label": "林芝市", "value": "10332" }, { "label": "山南市", "value": "10333" }, { "label": "那曲市", "value": "10334" }, { "label": "阿里地区", "value": "10335" }], "label": "西藏自治区", "value": "10328" }, { "children": [{ "label": "呼和浩特市", "value": "10337" }, { "label": "包头市", "value": "10338" }, { "label": "乌海市", "value": "10339" }, { "label": "赤峰市", "value": "10340" }, { "label": "通辽市", "value": "10341" }, { "label": "鄂尔多斯市", "value": "10342" }, { "label": "呼伦贝尔市", "value": "10343" }, { "label": "巴彦淖尔市", "value": "10344" }, { "label": "乌兰察布市", "value": "10345" }, { "label": "兴安盟", "value": "10346" }, { "label": "锡林郭勒盟", "value": "10347" }, { "label": "阿拉善盟", "value": "10348" }], "label": "内蒙古自治区", "value": "10336" }, { "children": [{ "label": "南宁市", "value": "10350" }, { "label": "柳州市", "value": "10351" }, { "label": "桂林市", "value": "10352" }, { "label": "梧州市", "value": "10353" }, { "label": "北海市", "value": "10354" }, { "label": "防城港市", "value": "10355" }, { "label": "钦州市", "value": "10356" }, { "label": "贵港市", "value": "10357" }, { "label": "玉林市", "value": "10358" }, { "label": "百色市", "value": "10359" }, { "label": "贺州市", "value": "10360" }, { "label": "河池市", "value": "10361" }, { "label": "来宾市", "value": "10362" }, { "label": "崇左市", "value": "10363" }], "label": "广西壮族自治区", "value": "10349" }, { "children": [{ "label": "银川市", "value": "10365" }, { "label": "石嘴山市", "value": "10366" }, { "label": "吴忠市", "value": "10367" }, { "label": "固原市", "value": "10368" }, { "label": "中卫市", "value": "10369" }], "label": "宁夏回族自治区", "value": "10364" }, { "children": [{ "label": "乌鲁木齐市", "value": "10371" }, { "label": "克拉玛依市", "value": "10372" }, { "label": "吐鲁番市", "value": "10373" }, { "label": "哈密市", "value": "10374" }, { "label": "昌吉回族自治州", "value": "10375" }, { "label": "博尔塔拉蒙古自治州", "value": "10376" }, { "label": "巴音郭楞蒙古自治州", "value": "10377" }, { "label": "阿克苏地区", "value": "10378" }, { "label": "克孜勒苏柯尔克孜自治州", "value": "10379" }, { "label": "喀什地区", "value": "10380" }, { "label": "和田地区", "value": "10381" }, { "label": "伊犁哈萨克自治州", "value": "10382" }, { "label": "塔城地区", "value": "10383" }, { "label": "阿勒泰地区", "value": "10384" }, { "label": "石河子市", "value": "10385" }, { "label": "阿拉尔市", "value": "10386" }, { "label": "图木舒克市", "value": "10387" }, { "label": "五家渠市", "value": "10388" }, { "label": "北屯市", "value": "10389" }, { "label": "铁门关市", "value": "10390" }, { "label": "双河市", "value": "10391" }, { "label": "可克达拉市", "value": "10392" }, { "label": "昆玉市", "value": "10393" }, { "label": "胡杨河市", "value": "10394" }], "label": "新疆维吾尔自治区", "value": "10370" }, { "children": [], "label": "香港特别行政区", "value": "10395" }, { "children": [], "label": "澳门特别行政区", "value": "10396" }, { "children": [{ "label": "台北市", "value": "10398" }, { "label": "新北市", "value": "10399" }, { "label": "桃园市", "value": "10400" }, { "label": "台中市", "value": "10401" }, { "label": "台南市", "value": "10402" }, { "label": "高雄市", "value": "10403" }], "label": "台湾省", "value": "10397" }];
const _sfc_main$3 = {
  __name: "AreaSelect",
  props: {
    modelValue: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    getCurrentInstance();
    const emit = __emit;
    const areaSelectRef = ref();
    const change = (e) => {
      const areaData = {
        areaName: [],
        areaCode: []
      };
      const checkedNodes = areaSelectRef.value.getCheckedNodes()[0];
      if (!checkedNodes) {
        emit("update:modelValue", areaData);
        return;
      }
      const pathValues = checkedNodes.pathValues;
      const pathLabels = checkedNodes.pathLabels;
      areaData.areaName = pathLabels;
      areaData.areaCode = pathValues;
      emit("update:modelValue", areaData);
    };
    return (_ctx, _cache) => {
      const _component_el_cascader = resolveComponent("el-cascader");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_cascader, {
          options: unref(dataJson),
          modelValue: __props.modelValue.areaCode,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.modelValue.areaCode = $event),
          onChange: change,
          ref_key: "areaSelectRef",
          ref: areaSelectRef,
          clearable: ""
        }, null, 8, ["options", "modelValue"])
      ]);
    };
  }
};
const UserInfoEdit_vue_vue_type_style_index_0_scoped_0beed957_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-0beed957"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "info" }, "加我为好友时需要验证", -1));
const _sfc_main$2 = {
  __name: "UserInfoEdit",
  props: {
    data: {
      type: Object
    }
  },
  emits: ["editBack"],
  setup(__props, { emit: __emit }) {
    const avatarInfoStore = useAvatarInfoStore();
    const userInfoStore = useUserInfoStore();
    const { proxy } = getCurrentInstance();
    const props = __props;
    const formData = computed(() => {
      const userInfo = Object.assign(props.data);
      userInfo.avatarFile = userInfo.userId;
      userInfo.area = {
        areaCode: userInfo.areaCode ? userInfo.areaCode.split(",") : [],
        areaName: userInfo.areaName ? userInfo.areaName.split(",") : []
      };
      return userInfo;
    });
    const formDataRef = ref();
    const rules = {
      avatarFile: [{ required: true, message: "请输入昵称" }],
      nickName: [{ required: true, message: "请输入昵称" }]
    };
    const saveCover = ({ avatarFile, coverFile }) => {
      formData.value.avatarFile = avatarFile;
      formData.value.avatarCover = coverFile;
    };
    const emit = __emit;
    const saveUserInfo = () => {
      formDataRef.value.validate(async (valid) => {
        if (!valid) {
          return;
        }
        let params = {};
        Object.assign(params, formData.value);
        params.areaName = "";
        params.areaCode = "";
        if (params.area) {
          params.areaName = params.area.areaName.join(",");
          params.areaCode = params.area.areaCode.join(",");
          delete params.area;
        }
        avatarInfoStore.setFoceReload(userInfoStore.getInfo().userId, false);
        let result = await proxy.Request({
          url: proxy.Api.saveUserInfo,
          params
        });
        if (!result) {
          return;
        }
        proxy.Message.success("保存成功");
        userInfoStore.setInfo(result.data);
        avatarInfoStore.setFoceReload(userInfoStore.getInfo().userId, true);
        emit("editBack");
      });
    };
    const cancel = () => {
      emit("editBack");
    };
    return (_ctx, _cache) => {
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_form, {
          model: formData.value,
          rules,
          ref_key: "formDataRef",
          ref: formDataRef,
          "label-width": "80px",
          onSubmit: _cache[6] || (_cache[6] = withModifiers(() => {
          }, ["prevent"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, {
              label: "头像",
              prop: "avatarFile"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$4, {
                  modelValue: formData.value.avatarFile,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.avatarFile = $event),
                  onCoverFile: saveCover
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "昵称",
              prop: "nickName"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  maxlength: "150",
                  clearable: "",
                  placeholder: "请输入昵称",
                  modelValue: formData.value.nickName,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.nickName = $event),
                  modelModifiers: { trim: true }
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "性别",
              prop: "sex"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_radio_group, {
                  modelValue: formData.value.sex,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.sex = $event)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, { label: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("男")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_radio, { label: 0 }, {
                      default: withCtx(() => [
                        createTextVNode("女")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "朋友权限",
              prop: "joinType"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_switch, {
                  modelValue: formData.value.joinType,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.joinType = $event),
                  "active-value": 1,
                  "inactive-value": 0
                }, null, 8, ["modelValue"]),
                _hoisted_1$1
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "地区",
              prop: "area"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$3, {
                  modelValue: formData.value.area,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.area = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "个性签名",
              prop: "personalSignature"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  clearable: "",
                  placeholder: "请输入个性签名",
                  modelValue: formData.value.personalSignature,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.personalSignature = $event),
                  modelModifiers: { trim: true },
                  type: "textarea",
                  rows: "5",
                  maxlength: "30",
                  "show-word-limit": true,
                  resize: "none"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveUserInfo
                }, {
                  default: withCtx(() => [
                    createTextVNode("保存个人信息")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  link: "",
                  onClick: cancel
                }, {
                  default: withCtx(() => [
                    createTextVNode("取消")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
};
const UserInfoEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0beed957"]]);
const UserInfoPassword_vue_vue_type_style_index_0_scoped_5129265f_lang = "";
const _sfc_main$1 = {
  __name: "UserInfoPassword",
  emits: ["editBack"],
  setup(__props, { emit: __emit }) {
    const { proxy } = getCurrentInstance();
    useRouter();
    const formData = ref({});
    const formDataRef = ref();
    const validateRePass = (rule, value, callback) => {
      if (value !== formData.value.password) {
        callback(new Error(rule.message));
      } else {
        callback();
      }
    };
    const rules = {
      password: [
        { required: true, message: "请输入新密码" },
        { validator: proxy.Verify.password, message: "密码只能是数字、字母、特殊字符8~18位" }
      ],
      rePassword: [
        { required: true, message: "请再次输入密码" },
        {
          validator: validateRePass,
          message: "两次输入的密码不一致"
        }
      ]
    };
    const emit = __emit;
    const saveUserInfo = () => {
      formDataRef.value.validate((valid) => {
        if (!valid) {
          return;
        }
        proxy.Confirm({
          message: "修改密码后将退出登录，需重新登录，确认要修改吗?",
          okfun: async () => {
            let params = {};
            Object.assign(params, formData.value);
            let result = await proxy.Request({
              url: proxy.Api.updatePassword,
              params
            });
            if (!result) {
              return;
            }
            proxy.Message.success("修改成功请重新登录", () => {
              window.ipcRenderer.send("reLogin");
            });
          }
        });
      });
    };
    const cancel = () => {
      emit("editBack");
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_form, {
          model: formData.value,
          rules,
          ref_key: "formDataRef",
          ref: formDataRef,
          "label-width": "80px",
          onSubmit: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["prevent"]))
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, {
              label: "密码",
              prop: "password"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  type: "password",
                  clearable: "",
                  placeholder: "请输入新密码",
                  modelValue: formData.value.password,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.password = $event),
                  modelModifiers: { trim: true },
                  "show-password": ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, {
              label: "确认密码",
              prop: "rePassword"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  type: "password",
                  clearable: "",
                  placeholder: "请再次输入新密码",
                  modelValue: formData.value.rePassword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.rePassword = $event),
                  modelModifiers: { trim: true },
                  "show-password": ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: saveUserInfo
                }, {
                  default: withCtx(() => [
                    createTextVNode("修改密码")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_button, {
                  link: "",
                  onClick: cancel
                }, {
                  default: withCtx(() => [
                    createTextVNode("取消")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]);
    };
  }
};
const UserPassword = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5129265f"]]);
const UserInfo_vue_vue_type_style_index_0_scoped_6940eb30_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6940eb30"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "show-info"
};
const _hoisted_2 = { class: "user-info" };
const _hoisted_3 = { class: "more-op" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "el-dropdown-link" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "iconfont icon-more" })
], -1));
const _hoisted_5 = { class: "part-item" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "part-title" }, "朋友权限", -1));
const _hoisted_7 = { class: "part-content" };
const _hoisted_8 = { class: "part-item" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "part-title" }, "个性签名", -1));
const _hoisted_10 = { class: "part-content" };
const _hoisted_11 = { class: "logout" };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { key: 2 };
const _sfc_main = {
  __name: "UserInfo",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    useRoute();
    const userInfo = ref({});
    const getUserInfo = async () => {
      let result = await proxy.Request({
        url: proxy.Api.getUserInfo
      });
      if (!result) {
        return;
      }
      userInfo.value = result.data;
    };
    getUserInfo();
    const showType = ref(0);
    const changePart = (part) => {
      showType.value = part;
    };
    const editBack = () => {
      showType.value = 0;
      getUserInfo();
    };
    const logout = () => {
      proxy.Confirm({
        message: "确定要退出登录吗？",
        okfun: async () => {
          window.ipcRenderer.send("reLogin");
          let result = await proxy.Request({
            url: proxy.Api.logout
          });
          if (!result) {
            return;
          }
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_UserBaseInfo = resolveComponent("UserBaseInfo");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_el_button = resolveComponent("el-button");
      const _component_ContentPanel = resolveComponent("ContentPanel");
      return openBlock(), createBlock(_component_ContentPanel, null, {
        default: withCtx(() => [
          showType.value == 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_UserBaseInfo, { userInfo: userInfo.value }, null, 8, ["userInfo"]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_el_dropdown, {
                  placement: "bottom-end",
                  trigger: "click"
                }, {
                  dropdown: withCtx(() => [
                    createVNode(_component_el_dropdown_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_dropdown_item, {
                          onClick: _cache[0] || (_cache[0] = ($event) => changePart(1))
                        }, {
                          default: withCtx(() => [
                            createTextVNode("修改个人信息")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_dropdown_item, {
                          onClick: _cache[1] || (_cache[1] = ($event) => changePart(2))
                        }, {
                          default: withCtx(() => [
                            createTextVNode("修改密码")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createBaseVNode("div", _hoisted_7, toDisplayString(userInfo.value.joinType == 0 ? "直接加入" : "加我为好友时需要验证"), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              _hoisted_9,
              createBaseVNode("div", _hoisted_10, toDisplayString(userInfo.value.personalSignature || "-"), 1)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_component_el_button, { onClick: logout }, {
                default: withCtx(() => [
                  createTextVNode("退出登录")
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true),
          showType.value == 1 ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createVNode(UserInfoEdit, {
              onEditBack: editBack,
              data: userInfo.value
            }, null, 8, ["data"])
          ])) : createCommentVNode("", true),
          showType.value == 2 ? (openBlock(), createElementBlock("div", _hoisted_13, [
            createVNode(UserPassword, { onEditBack: editBack })
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const UserInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6940eb30"]]);
export {
  UserInfo as default
};
