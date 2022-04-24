export const cx = (...args: (string | undefined)[]) => args.reduce((p, c) => c ? p + " " + c : p, "");


export const randomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
