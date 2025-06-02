``` mermaid
graph TD
    A[Start] --> B(請選擇國籍);

    %% 國籍選擇分支
    B -- 中華民國（台灣） --> TW_START[中華民國（台灣） 分支開始];
    B -- 中國（大陸） --> CN_START[中國（大陸） 分支開始];
    B -- 其他國家 --> OTHER_START[其他國家 分支開始];

    %% 中華民國（台灣） 分支
    TW_START --> TW1{是否有長期居留證或戶籍、國籍身分加簽？};
    TW1 -- 是 --> TW_RESULT_LOCAL_OVERSEAS[結果：僑生/本地生];
    TW1 -- 否 --> TW_RESULT_LOCAL[結果：本地生];

    %% 中國（大陸） 分支 （主幹）
    CN_START --> CN1{您的戶籍於何處？};
    CN1 -- 港澳台僑或其他指定地區 --> CN_RESULT_OVERSEAS_LOCAL[結果：僑生/本地生];
    CN1 -- 設籍於其他省市 --> CN_INELIGIBLE[結果：不具申請資格];
    CN1 -- 獨立 --> CN_RESULT_OVERSEAS_LOCAL; 

    %% 其他國家 分支 （主幹）
    OTHER_START --> OTHER1{您是否具有我國國籍？};
    OTHER1 -- 是 --> OTHER2{您是否具有我國戶籍？};
    OTHER2 -- 是 --> OTHER_RESULT_LOCAL[結果：本地生];
    OTHER2 -- 否 --> OTHER3{是否曾設籍我國？};
    OTHER3 -- 是 --> OTHER_RESULT_LOCAL_OVERSEAS[結果：僑生/本地生]; 
    OTHER3 -- 否 --> OTHER_RESULT_OVERSEAS_LOCAL[結果：僑生/本地生]; 

    %% 陸生相關判斷 
    CN_START --> CN_LUS_PATH[陸生判斷路徑];
    CN_LUS_PATH --> LUS1{您的戶籍於何處？}; 
    LUS1 -- 港澳台僑 + 六省一市 --> LUS_RESULT_OVERSEAS[結果：僑生]; 
    LUS1 -- 其他地區（非圖中指定） --> LUS_RESULT_LUSHENG[結果：陸生];

    %% 複合身份判斷區塊
    subgraph 複合身份判斷
        COMP_START[複合身份判斷開始] --> COMP1{是否曾設籍中華民國（台灣）?};
        COMP1 -- 是 --> COMP_RESULT_LOCAL_OVERSEAS[結果：本地生/僑生];
        COMP1 -- 否 --> COMP2{是否具有中華民國（台灣）國籍？};
        COMP2 -- 是 --> COMP_RESULT_LOCAL_OVERSEAS;
        COMP2 -- 否 --> COMP_RESULT_OTHER_STUDENT[結果：其他學生類型或不具資格];
        COMP_RESULT_OTHER_STUDENT --> LUS_RESULT_LUSHENG; 
        COMP_RESULT_OTHER_STUDENT --> CN_INELIGIBLE; 
    end

    %% 總結結果
    TW_RESULT_LOCAL_OVERSEAS --> END[結束];
    TW_RESULT_LOCAL --> END;
    CN_RESULT_OVERSEAS_LOCAL --> END;
    CN_INELIGIBLE --> END;
    OTHER_RESULT_LOCAL --> END;
    OTHER_RESULT_OVERSEAS_LOCAL --> END;
    LUS_RESULT_OVERSEAS --> END;
    LUS_RESULT_LUSHENG --> END;
    COMP_RESULT_LOCAL_OVERSEAS --> END;
    COMP_RESULT_OTHER_STUDENT --> END;

```