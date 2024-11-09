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
    }
]