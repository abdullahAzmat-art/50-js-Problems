let students = [
    { name: "Ali", department: "CS" },
    { name: "Ahmed", department: "IT" },
    { name: "Sara", department: "CS" },
    { name: "Ayesha", department: "SE" },
    { name: "Bilal", department: "IT" }
];

function groupbydepartment(std){

    let groupedobj = {};
    for (let i = 0; i < std.length; i++) {
        if (!groupedobj[std[i].department]) {
        groupedobj[std[i].department] = [];
        }
        groupedobj[std[i].department].push(std[i]);
    }
    return groupedobj;
}

console.log(groupbydepartment(students))