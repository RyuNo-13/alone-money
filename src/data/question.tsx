// 一旦型定義も同じファイルに記載
export interface Question {
    id: string;
    title: string;
    items: string[];
  }

export const questions: Question[] = [
    { 
        id: "1",
        title: "家賃",
        items: ["家賃"]
    },
    { 
        id: "2",
        title: "水道光熱費",
        items: ["水道", "電気", "ガス"]
    },
    { 
        id: "3",
        title: "通信費",
        items: ["スマホ（携帯）", "ネット回線"]
    },
    { 
        id: "4",
        title: "食費",
        items: ["食費"]
    },
    { 
        id: "5",
        title: "日用品",
        items: ["日用品"]
    },
    { 
        id: "6",
        title: "その他",
        items: ["交際費","サブスク","借金","その他"]
    },
    
]