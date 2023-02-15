export type Category = {
    name: string;
};

export interface IDaySummary {
    date: string;
    entries: IEntry[];
}

export interface ISummary {
    [category: string]: { points: number };
}

export class DaySummary implements IDaySummary {
    summary: ISummary;
    id: number;
    date: string;
    entries: Entry[];

    constructor(daySummary: IDaySummary) {
        this.id = Math.round(Math.random() * 100_000_000);
        this.date = daySummary.date;
        this.entries = daySummary.entries.map((e) => new Entry(e));
        this.summary = {};
        this.entries.forEach((entry) => {
            this.summary[entry.category] ??= { points: 0 };
            this.summary[entry.category].points += entry.points;
        });
    }
}

export interface IEntry {
    dateTime: string;
    category: string;
    description: string;
    link: string;
    points: number;
}

export class Entry implements IEntry {
    id: number;
    dateTime: string;
    category: string;
    description: string;
    link: string;
    points: number;

    constructor(entry: IEntry) {
        this.id = Math.round(Math.random() * 100_000_000);
        this.dateTime = entry.dateTime;
        this.category = entry.category;
        this.description = entry.description;
        this.link = entry.link;
        this.points = entry.points;
    }
}
