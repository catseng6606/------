``` mermaid
graph TD
    A[開始] --> B{請選擇語言？};
    B -- 中文 --> C[問卷問題 1 中文];
    B -- 英文 --> D[Survey Question 1 English];

    C --> E[問卷問題 2 中文];
    D --> F[Survey Question 2 English];

    E --> G{是否符合A條件？};
    F --> H{Is condition A met?};

    G -- 是 --> I[結果頁面 A 中文];
    G -- 否 --> J[結果頁面 B 中文];

    H -- Yes --> K[Result Page A English];
    H -- No --> L[Result Page B English];
```