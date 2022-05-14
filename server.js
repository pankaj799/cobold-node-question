var http = require('http');
http.createServer(function (req, res) {
    console.log(res)
    let data = [
        {
            "person": "A",
            "expense": "304",
            "split": "A,B,C"
        },
        {
            "person": "B",
            "expense": "200",
            "split": "B,C"
        },
        {
            "person": "A",
            "expense": "540",
            "split": "A,D,C,E"
        }, {
            "person": "C",
            "expense": "2400",
            "split": "D,C,E"
        }, {
            "person": "D",
            "expense": "342",
            "split": "D,C,A,B"
        }, {
            "person": "E",
            "expense": "1210",
            "split": "E,A,B,D"
        }, {
            "person": "D",
            "expense": "214",
            "split": "E,A"
        }, {
            "person": "A",
            "expense": "300",
            "split": "A,B,C"
        }, {
            "person": "B",
            "expense": "1200",
            "split": "E,D,B"
        }, {
            "person": "C",
            "expense": "400",
            "split": "A,C"
        }, {
            "person": "D",
            "expense": "354",
            "split": "A,B,D"
        }, {
            "person": "E",
            "expense": "1000",
            "split": "A,E"
        }, {
            "person": "D",
            "expense": "400",
            "split": "D,A"
        }, {
            "person": "C",
            "expense": "1034",
            "split": "A,B,D,C"
        }, {
            "person": "A",
            "expense": "500",
            "split": "A,E"
        }, {
            "person": "E",
            "expense": "600",
            "split": "A,D,E"
        }
    ]
    let dataArr = [];
    let allPersons = [];
    data.map(data => {
        if (!allPersons.includes(data.person)) {
            allPersons.push(data.person)
        }
    })
    console.log(allPersons)
    data.map(data => {
        let split = data.split.split(',')
        split.map(s => {
            if (data.person != s) {
                dataArr.push({
                    personA: data.person,
                    personB: s,
                    amount: (data.expense / split.length).toFixed(2),
                })
            }
        })
    })
    console.log(dataArr)
    let sortArr = dataArr.sort((a, b) => a.personA.localeCompare(b.personA));
    console.log(sortArr)
    // sortArr = sortArr.filter((value, index, self) =>
    //     index === self.findIndex((t) => (
    //         (t.personA === value.personA && t.personB === value.personB && value.amount != t.amount)  ? console.log(value.personA,value.personB,value.amount, t.amount, " : amount") : ""
    //     ))
    // )
    let finalArr = []

    // for (var i = 0; i < sortArr.length; i++) {
    //     if (finalArr.length > 0) {
    //         for (var j = 0; j < finalArr.length; j++) {
    //             if (sortArr) {

    //             }
    //         }
    //     } else {

    //     }
    // }
    for (var i = 0; i < allPersons.length; i++) {
        let personA = allPersons[i]
        for (var j = 0; j < allPersons.length; j++) {
            let personB = allPersons[j]
            let amount = 0;
            for (var k = 0; k < sortArr.length; k++) {
                let data = sortArr[k]
                if (personA != personB && data.personA == personA && data.personB == personB) {
                    finalArr.push({
                        personA: data.personA,
                        personB: data.personB,
                        amount: (Number(data.amount) + Number(amount)).toFixed(2),
                    })
                    amount = (Number(data.amount) + Number(amount)).toFixed(2)
                }
            }
        }
    }
    // sortArr = finalArr.sort((a, b) => b.amount - a.amount);

console.log(finalArr, " : finalArr")

    let sortNewArr = [];

    for (var i = finalArr.length - 1; i >= 0; i--) {
        sortNewArr.push(sortArr[i])
    }
    console.log(sortNewArr)

    sortNewArr = sortNewArr.filter((value, index, self) =>
        index === self.findIndex((t) => (
            (t.personA === value.personA && t.personB === value.personB)
        ))
    )
    console.log(sortNewArr)
    // dataArr.map(data => {
    //     if (finalArr.length > 0) {
    //         // console.log("Hey1")
    //         finalArr.map(element => {
    //             if (element.personA === data.personA && element.personB === data.personB) {
    //                 finalArr.amount = parseFloat(finalArr.amount) + data.amount
    //             } else {
    //                 finalArr.push({
    //                     personA: data.personA,
    //                     personB: data.personB,
    //                     amount: data.amount,
    //                 })
    //             }
    //         })
    //     } else {
    //         // console.log("Hey2")
    //         finalArr.push({
    //             personA: data.personA,
    //             personB: data.personB,
    //             amount: data.amount,
    //         })
    //     }
    //     console.log(finalArr," : finalArr")
    // })
    // console.log(finalArr)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');