import { rest } from 'msw';
import { mockData } from './mockData';

export const handlers = [
    rest.get('http://localhost:4000/diaporamaExposition',
        (req, res, ctx) => { return res(ctx.json(mockData)) })
]