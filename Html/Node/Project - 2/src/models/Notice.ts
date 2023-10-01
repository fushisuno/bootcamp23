import Request from 'express';

type Notice = {
    autor: string,
    title: string,
    description: string
};
let notices: Notice[] = [];

export const Notice = {
    addNotice: (autor: string, title: string, description: string) => {
        notices.push({
            autor,
            title,
            description
        });
    },
    getAll: (): Notice[] => {
        return notices;
    }
};