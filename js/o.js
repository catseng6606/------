var surveyJSON = {
    "title": "其他國家資格判斷問卷",
    "description": "本問卷用於判斷您在其他國家背景下的入學資格。",
    "pages": [
        {
            "name": "page_1_has_china_nationality",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_china_nationality",
                    "title": "您是否曾具有中國大陸國籍？",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_1_1_china_nationality_abandon_6_years",
            "visibleIf": "{has_china_nationality} = 'yes'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "china_nationality_abandon_6_years",
                    "title": "您放棄中國大陸國籍是否已滿 6 年？",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_parent_roc_nationality",
            "visibleIf": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' or {has_china_nationality} = 'no'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "parent_has_roc_nationality",
                    "title": "您的父/母親是否曾有中華民國國籍？",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_parent_abandon_roc_before_birth",
            "visibleIf": "(({has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes') or {has_china_nationality} = 'no') and {parent_has_roc_nationality} = 'yes'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "parent_abandon_roc_before_birth",
                    "title": "您的父/母親在您出生前是否已放棄中華民國國籍？",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_active_abandon_roc_nationality",
            "visibleIf": "(({has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes') or {has_china_nationality} = 'no') and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "active_abandon_roc_nationality",
                    "title": "依據國籍法，出生時父或母為中華民國國籍，因此您自動具有中華民國國籍，您是否已主動放棄中華民國國籍？",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_abandon_roc_8_years",
            "visibleIf": "(({has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes') or {has_china_nationality} = 'no') and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "abandon_roc_8_years",
                    "title": "您主動放棄國籍至今是否已滿 8 年？",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_has_taiwan_hukou_o_path_1",
            "visibleIf": "(({has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes') or {has_china_nationality} = 'no') and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'no'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_taiwan_hukou_path_1",
                    "title": "您是否曾在台灣設過戶籍？ (路徑 1)",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        },
        {
            "name": "page_has_taiwan_hukou_o_path_2",
            "visibleIf": "(({has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes') or {has_china_nationality} = 'no') and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'no'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_taiwan_hukou_path_2",
                    "title": "您是否曾在台灣設過戶籍？ (路徑 2)",
                    "choices": [ "yes", "no" ],
                    "isRequired": true
                }
            ]
        }
    ],
    "showCompletedPage": true,
    "completedHtml": "<h4>感謝您完成問卷！</h4><p>您的資格判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        // 1.1.1.1.1.1.1 (是) -> 僑生、國際生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、國際生</b></p>"
        },
        // 1.1.1.1.1.1.2.1.1.1.1 (是) -> 國際生、僑生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>國際生、僑生</b></p>"
        },
        // 1.1.1.1.1.1.2.1.1.1.2.1.1 (是) -> 僑生、本地生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'no' and {has_taiwan_hukou_path_1} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、本地生</b></p>"
        },
        // 1.1.1.1.1.1.2.1.1.1.2.1.2 (否) -> 國際生、僑生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'no' and {has_taiwan_hukou_path_1} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>國際生、僑生</b></p>"
        },
        // 1.1.1.1.1.1.2.1.2.1.1 (是) -> 僑生、本地生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'no' and {has_taiwan_hukou_path_2} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、本地生</b></p>"
        },
        // 1.1.1.1.1.1.2.1.2.1.2 (否) -> 國際生、僑生、本地生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'no' and {has_taiwan_hukou_path_2} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>國際生、僑生、本地生</b></p>"
        },
        // 1.1.1.1.2 (否) -> 僑生、國際生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'yes' and {parent_has_roc_nationality} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、國際生</b></p>"
        },
        // 1.1.2 (否) -> 僑生
        {
            "expression": "{has_china_nationality} = 'yes' and {china_nationality_abandon_6_years} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生</b></p>"
        },
        // 2.1.1.1.1 (是) -> 僑生、國際生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、國際生</b></p>"
        },
        // 2.1.1.1.2.1.1.1.1 (是) -> 國際生、僑生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>國際生、僑生</b></p>"
        },
        // 2.1.1.1.2.1.1.1.2.1.1 (是) -> 僑生、本地生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'no' and {has_taiwan_hukou_path_1} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、本地生</b></p>"
        },
        // 2.1.1.1.2.1.1.1.2.1.2 (否) -> 僑生、國際生、本地生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'yes' and {abandon_roc_8_years} = 'no' and {has_taiwan_hukou_path_1} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、國際生、本地生</b></p>"
        },
        // 2.1.1.1.2.1.2.1.1 (是) -> 僑生、本地生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'no' and {has_taiwan_hukou_path_2} = 'yes'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、本地生</b></p>"
        },
        // 2.1.1.1.2.1.2.1.2 (否) -> 僑生、國際生、本地生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'yes' and {parent_abandon_roc_before_birth} = 'no' and {active_abandon_roc_nationality} = 'no' and {has_taiwan_hukou_path_2} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、國際生、本地生</b></p>"
        },
        // 2.1.2 (否) -> 僑生、國際生
        {
            "expression": "{has_china_nationality} = 'no' and {parent_has_roc_nationality} = 'no'",
            "html": "<h4>感謝您完成問卷！</h4><p>您的資格為：<b>僑生、國際生</b></p>"
        },
        {
            "expression": "true", // 萬用條件，如果上述條件都不滿足
            "html": "<h4>感謝您完成問卷！</h4><p>無法判斷您的資格，請聯繫相關單位。</p>"
        }
    ]
}