import { DaySummary, Entry } from 'models/Entry';
import { User } from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
    { id: 101, name: 'Alice' },
    { id: 102, name: 'Bob' },
    { id: 103, name: 'Caroline' },
    { id: 104, name: 'Dave' },
];

const randomInt = (max = 100_000_000) => {
    return Math.round(Math.random() * max);
};

export const sampleCategories = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'];

export const sampleDaySummaries: DaySummary[] = [
    new DaySummary({
        date: new Date().toDateString(),
        entries: [
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 2',
                description: 'Entry Description 2',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description 3',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
        ],
    }),
    new DaySummary({
        date: new Date('2023-02-10T06:00:00.005Z').toDateString(),
        entries: [
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 2',
                description: 'Entry Description 2',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description 3',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
        ],
    }),
    new DaySummary({
        date: new Date('2023-02-09T06:00:00.005Z').toDateString(),
        entries: [
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 2',
                description: 'Entry Description 2',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description 3',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
        ],
    }),
    new DaySummary({
        date: new Date('2023-02-08T06:00:00.005Z').toDateString(),
        entries: [
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 2',
                description: 'Entry Description 2',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
            new Entry({
                dateTime: new Date().toDateString(),
                category: 'Subject 1',
                description: 'Entry Description 3',
                link: 'https://www.google.com',
                points: randomInt(10),
            }),
        ],
    }),
];
