const country = [{"id":"7","pid":"1","path":",1,7,","level":"2","name":"中国","name_en":"China","name_pinyin":"zhongguo","code":"CN"},{"id":"10","pid":"1","path":",1,10,","level":"2","name":"阿富汗","name_en":"Afghanistan","name_pinyin":"afuhan","code":"AFG"},{"id":"12","pid":"1","path":",1,12,","level":"2","name":"阿拉伯联合酋长国","name_en":"United Arab Emirates","name_pinyin":"alabolianheqiuchangguo","code":"ARE"},{"id":"14","pid":"1","path":",1,14,","level":"2","name":"阿曼","name_en":"Oman","name_pinyin":"aman","code":"OMN"},{"id":"15","pid":"1","path":",1,15,","level":"2","name":"阿塞拜疆","name_en":"Azerbaijan","name_pinyin":"asaibaijiang","code":"AZE"},{"id":"31","pid":"1","path":",1,31,","level":"2","name":"巴基斯坦","name_en":"Pakistan","name_pinyin":"bajisitan","code":"PAK"},{"id":"33","pid":"1","path":",1,33,","level":"2","name":"巴勒斯坦","name_en":"Palestinian Authority","name_pinyin":"balesitan","code":"PSE"},{"id":"34","pid":"1","path":",1,34,","level":"2","name":"巴林","name_en":"Bahrain","name_pinyin":"balin","code":"BHR"},{"id":"50","pid":"1","path":",1,50,","level":"2","name":"不丹","name_en":"Bhutan","name_pinyin":"budan","code":"BTN"},{"id":"54","pid":"1","path":",1,54,","level":"2","name":"朝鲜","name_en":"North Korea","name_pinyin":"chaoxian","code":"PRK"},{"id":"57","pid":"1","path":",1,57,","level":"2","name":"东帝汶","name_en":"Timor-Leste","name_pinyin":"dongdi","code":"TLS"},{"id":"70","pid":"1","path":",1,70,","level":"2","name":"菲律宾","name_en":"Philippines","name_pinyin":"feilvbin","code":"PHL"},{"id":"87","pid":"1","path":",1,87,","level":"2","name":"哈萨克斯坦","name_en":"Kazakhstan","name_pinyin":"hasakesitan","code":"KAZ"},{"id":"89","pid":"1","path":",1,89,","level":"2","name":"韩国","name_en":"Korea","name_pinyin":"hanguo","code":"KOR"},{"id":"96","pid":"1","path":",1,96,","level":"2","name":"吉尔吉斯斯坦","name_en":"Kyrgyzstan","name_pinyin":"jierjisisitan","code":"KGZ"},{"id":"102","pid":"1","path":",1,102,","level":"2","name":"柬埔寨","name_en":"Cambodia","name_pinyin":"jianpuzhai","code":"KHM"},{"id":"106","pid":"1","path":",1,106,","level":"2","name":"卡塔尔","name_en":"Qatar","name_pinyin":"kataer","code":"QAT"},{"id":"111","pid":"1","path":",1,111,","level":"2","name":"科威特","name_en":"Kuwait","name_pinyin":"keweite","code":"KWT"},{"id":"117","pid":"1","path":",1,117,","level":"2","name":"老挝","name_en":"Laos","name_pinyin":"laowo","code":"LAO"},{"id":"118","pid":"1","path":",1,118,","level":"2","name":"黎巴嫩","name_en":"Lebanon","name_pinyin":"libanen","code":"LBN"},{"id":"128","pid":"1","path":",1,128,","level":"2","name":"马尔代夫","name_en":"Maldives","name_pinyin":"maerdaifu","code":"MDV"},{"id":"131","pid":"1","path":",1,131,","level":"2","name":"马来西亚","name_en":"Malaysia","name_pinyin":"malaixiya","code":"MYS"},{"id":"143","pid":"1","path":",1,143,","level":"2","name":"蒙古","name_en":"Mongolia","name_pinyin":"menggu","code":"MNG"},{"id":"145","pid":"1","path":",1,145,","level":"2","name":"孟加拉","name_en":"Bangladesh","name_pinyin":"mengjiala","code":"BGD"},{"id":"148","pid":"1","path":",1,148,","level":"2","name":"缅甸","name_en":"Myanmar","name_pinyin":"miandian","code":"MMR"},{"id":"159","pid":"1","path":",1,159,","level":"2","name":"尼泊尔","name_en":"Nepal","name_pinyin":"niboer","code":"NPL"},{"id":"170","pid":"1","path":",1,170,","level":"2","name":"日本","name_en":"Japan","name_pinyin":"riben","code":"JPN"},{"id":"178","pid":"1","path":",1,178,","level":"2","name":"塞浦路斯","name_en":"Cyprus","name_pinyin":"saipulusi","code":"CYP"},{"id":"180","pid":"1","path":",1,180,","level":"2","name":"沙特阿拉伯","name_en":"Saudi Arabia","name_pinyin":"shatealabo","code":"SAU"},{"id":"189","pid":"1","path":",1,189,","level":"2","name":"斯里兰卡","name_en":"Sri Lanka","name_pinyin":"sililanka","code":"LKA"},{"id":"198","pid":"1","path":",1,198,","level":"2","name":"塔吉克斯坦","name_en":"Tajikistan","name_pinyin":"tajikesitan","code":"TJK"},{"id":"199","pid":"1","path":",1,199,","level":"2","name":"泰国","name_en":"Thailand","name_pinyin":"taiguo","code":"THA"},{"id":"207","pid":"1","path":",1,207,","level":"2","name":"土耳其","name_en":"Turkey","name_pinyin":"tuerqi","code":"TUR"},{"id":"208","pid":"1","path":",1,208,","level":"2","name":"土库曼斯坦","name_en":"Turkmenistan","name_pinyin":"tukumansitan","code":"TKM"},{"id":"216","pid":"1","path":",1,216,","level":"2","name":"文莱","name_en":"Brunei","name_pinyin":"wenlai","code":"BRN"},{"id":"220","pid":"1","path":",1,220,","level":"2","name":"乌兹别克斯坦","name_en":"Uzbekistan","name_pinyin":"wuzibiekesitan","code":"UZB"},{"id":"223","pid":"1","path":",1,223,","level":"2","name":"新加坡","name_en":"Singapore","name_pinyin":"xinjiapo","code":"SGP"},{"id":"227","pid":"1","path":",1,227,","level":"2","name":"叙利亚","name_en":"Syria","name_pinyin":"xuliya","code":"SYR"},{"id":"229","pid":"1","path":",1,229,","level":"2","name":"亚美尼亚","name_en":"Armenia","name_pinyin":"yameiniya","code":"ARM"},{"id":"230","pid":"1","path":",1,230,","level":"2","name":"也门","name_en":"Yemen","name_pinyin":"yemen","code":"YEM"},{"id":"231","pid":"1","path":",1,231,","level":"2","name":"伊拉克","name_en":"Iraq","name_pinyin":"yilake","code":"IRQ"},{"id":"232","pid":"1","path":",1,232,","level":"2","name":"伊朗","name_en":"Iran","name_pinyin":"yilang","code":"IRN"},{"id":"233","pid":"1","path":",1,233,","level":"2","name":"以色列","name_en":"Israel","name_pinyin":"yiselie","code":"ISR"},{"id":"235","pid":"1","path":",1,235,","level":"2","name":"印度","name_en":"India","name_pinyin":"yindu","code":"IND"},{"id":"236","pid":"1","path":",1,236,","level":"2","name":"印度尼西亚","name_en":"Indonesia","name_pinyin":"yindunixiya","code":"IDN"},{"id":"239","pid":"1","path":",1,239,","level":"2","name":"约旦","name_en":"Jordan","name_pinyin":"yuedan","code":"JOR"},{"id":"240","pid":"1","path":",1,240,","level":"2","name":"越南","name_en":"Vietnam","name_pinyin":"yuenan","code":"VNM"}];
export default country;