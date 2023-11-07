{
    var user = [
        {
            id: 101,
            name: "Yeasin",
        },
        {
            id: 102,
            name: "Rafee",
        },
        {
            id: 103,
            name: "Arefin",
        },
    ];
    var getProperty = function (array, key) {
        return array.map(function (el) { return el[key]; });
    };
    console.log(getProperty(user, "name"));
}
