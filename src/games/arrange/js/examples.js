const examples = [
    {
        words: [
            {
                text: "WPADŁ",
                goodOrder: 0,
            },
            {
                goodOrder: 2,
                text: "SAMOCHÓD"
            },
            {
                goodOrder: 4,
                text: "SKOŃCZYŁ"
            },
            {
                goodOrder: 6,
                text: "KIEŁBASA"
            },
            {
                goodOrder: -1,
                text: "WYPADEK"
            },
            {
                goodOrder: -1,
                text: "TUNEL"
            },
            {
                goodOrder: -1,
                text: "WROCŁAWIEM"
            },
            {
                goodOrder: -1,
                text: "WODĄ"
            },
            {
                goodOrder: -1,
                text: "DZIECI"
            },
            {
                goodOrder: -1,
                text: "POSZKODOWANI"
            },
        ],
        places: [
            {
                text: "",
                changable: true,
                order: 0,
                current: -1
            },
            {
                text: "POD",
                changable: false,
                order: 1
            },
            {

                text: "",
                changable: true,
                order: 2,
                current: -1
            },
            {

                text: ",",
                changable: false,
                order: 3,
                current: -1
            },
            {

                text: "",
                changable: true,
                order: 4,
                current: -1
            },
            {

                text: "JAKO",
                changable: false,
                order: 5,
                current: -1
            },
            {

                text: "",
                changable: true,
                order: 6,
                current: -1
            }
        ]
    }
]

export default examples;