import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imgPath: '/images/chocolate.png' },
        { name: 'Vanilla', imgPath: '/images/vanilla.png' },
      ])
    );
  }),
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imgPath: '/images/cherries.png' },
        { name: 'M&Ms', imgPath: '/images/m-and-ms.png' },
        { name: 'Hot fudge', imgPath: '/images/hot-fudge.png' },
      ])
    );
  }),
];
