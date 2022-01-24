export default (t) => {
    let d = new Date(t);
    return ([d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
        " " +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(":"));
};
