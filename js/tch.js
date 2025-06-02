var surveyJSON = {
    "title": "中華民國、中國與香港學生身分確認",
    "description": "用於判斷您的中華民國、中國與香港學生身分相關資格。",
    "pages": [
        {
            "name": "page_taiwan_china_hongkong_hukou",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "china_hukou_location_tch",
                    "title": "您目前的戶籍所在地為？",
                    "choices": [
                        {
                            "value": "8_provinces",
                            "text": "設籍於北京、上海、江蘇、浙江、福建、廣東、湖北、遼寧 8 省市之一"
                        },
                        {
                            "value": "other_provinces",
                            "text": "設籍於其他省市（不包含 8 省市之一）"
                        }
                    ],
                    "isRequired": true,
                    "colCount": 1
                }
            ],
            "title": "戶籍所在地"
        }
    ],
    "showCompletedPage": true,
    "completedHtml": "<h4>感謝您完成！</h4><p>您的資格判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        {
            "expression": "{china_hukou_location_tch} = '8_provinces'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>本地生、港澳生、陸生</b></p>"
        },
        {
            "expression": "{china_hukou_location_tch} = 'other_provinces'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>本地生、港澳生</b></p>"
        },
        {
            "expression": "true",
            "html": "<h4>感謝您完成！</h4><p>無法判斷您的資格，請聯繫相關單位。</p>"
        }
    ]
}