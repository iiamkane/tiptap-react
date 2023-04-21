export const createBEM = (name?: string) => {
    const prefix = `KTREditor`;
    return name ? `${prefix}_${name}` : prefix;
};
